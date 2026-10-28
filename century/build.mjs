import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createPropertyOverview, developerInfo, propertiesData } from './data/century.js';

const projectDir = dirname(fileURLToPath(import.meta.url));
const outputDir = join(projectDir, 'dist');
const requestedBasePath = process.argv[2] || '/';
const basePath = `/${requestedBasePath.replace(/^\/+|\/+$/g, '')}${requestedBasePath.replace(/^\/+|\/+$/g, '') ? '/' : ''}`;
const sourceHtml = readFileSync(join(projectDir, 'index.html'), 'utf8');
const propertyIds = propertiesData.map(({ id }) => id);
const sectionRoutes = ['residences', 'about', 'faq', 'contact'];
const allRoutes = [...sectionRoutes, ...propertyIds];
const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, '');
const homeTitle = 'Century Real Estate in Bengaluru | Projects & Apartments';
const homeDescription = 'Explore Century Real Estate apartments and homes in Bengaluru. Compare projects, locations, floor plans, prices, and amenities, and enquire about a site visit.';
const apacheRouteRules = [
  'Options -MultiViews',
  'RewriteEngine On',
  'RewriteRule ^privacy-policy/?$ privacy-policy.html [L]',
  ...allRoutes.map((route) => `RewriteRule ^${route}/?$ ${route}/index.html [L]`)
].join('\n');

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function renderOverviewParagraph(paragraph) {
  const registration = paragraph.match(/^(.*) RERA registration number: (.+)\.$/);
  if (!registration) return `<p class="overview-text">${escapeHtml(paragraph)}</p>`;

  return `<p class="overview-text">${escapeHtml(registration[1])} <span class="overview-rera"><strong>RERA Registration No.</strong> <span>${escapeHtml(registration[2])}</span></span></p>`;
}

function replaceElementContent(html, id, content) {
  const elementPattern = new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\bid="${id}"[^>]*>)[\\s\\S]*?(<\\/\\2>)`, 'i');
  return html.replace(elementPattern, `$1${content}$3`);
}

function parseIndianPrice(priceStr) {
  if (!priceStr || typeof priceStr !== 'string') return null;
  const clean = priceStr.replace(/,/g, '').trim();
  const crMatch = clean.match(/([\d.]+)\s*(?:cr|crore)/i);
  if (crMatch) {
    const val = parseFloat(crMatch[1]);
    if (!isNaN(val) && val > 0) return Math.round(val * 10000000);
  }
  const lMatch = clean.match(/([\d.]+)\s*(?:l|lac|lakh)/i);
  if (lMatch) {
    const val = parseFloat(lMatch[1]);
    if (!isNaN(val) && val > 0) return Math.round(val * 100000);
  }
  const numMatch = clean.match(/(\d+)/);
  if (numMatch) {
    const val = parseInt(numMatch[1], 10);
    if (!isNaN(val) && val > 0) return val;
  }
  return null;
}

function formatINR(val) {
  if (isNaN(val) || val === null || val === undefined) return '₹0';
  return '₹' + Math.round(val).toLocaleString('en-IN');
}

function formatINRShort(val) {
  if (isNaN(val) || val <= 0) return '₹0';
  if (val >= 10000000) {
    const cr = (val / 10000000).toFixed(2).replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
    return `₹${cr} Cr`;
  }
  if (val >= 100000) {
    const l = (val / 100000).toFixed(2).replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
    return `₹${l} Lakh`;
  }
  return '₹' + Math.round(val).toLocaleString('en-IN');
}

function calculateEmi(principal, annualRate = 8.5, tenureYears = 20) {
  if (principal <= 0 || tenureYears <= 0) {
    return { emi: 0, totalPayment: 0, totalInterest: 0, principalPct: 50, interestPct: 50 };
  }
  const r = (annualRate / 12) / 100;
  const n = tenureYears * 12;
  const factor = Math.pow(1 + r, n);
  const emi = Math.round(principal * r * (factor / (factor - 1)));
  const totalPayment = emi * n;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPct = totalPayment > 0 ? (principal / totalPayment) * 100 : 50;
  const interestPct = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 50;
  return { emi, totalPayment, totalInterest, principalPct, interestPct };
}

function getPropertySliderLimits(price) {
  if (!price || price <= 0) return { min: 2500000, max: 250000000, step: 100000 };
  let min, max, step;
  if (price < 15000000) {
    min = Math.max(2500000, Math.floor((price * 0.4) / 500000) * 500000);
    max = Math.ceil((price * 2.5) / 2500000) * 2500000;
    step = 100000;
  } else if (price < 50000000) {
    min = Math.floor((price * 0.4) / 1000000) * 1000000;
    max = Math.ceil((price * 2.2) / 5000000) * 5000000;
    step = 100000;
  } else {
    min = Math.floor((price * 0.4) / 2500000) * 2500000;
    max = Math.ceil((price * 2.0) / 10000000) * 10000000;
    step = 500000;
  }
  return { min, max, step };
}

function createRoutedHtml(route = '') {
  let html = sourceHtml.replace('<head>', `<head>\n    <base href="${basePath}">`);
  html = html.replace('<body ', `<body data-home-title="${escapeHtml(homeTitle)}" data-home-description="${escapeHtml(homeDescription)}" `);
  let title = homeTitle;
  let description = homeDescription;
  const property = propertiesData.find(({ id }) => id === route);

  if (property) {
    title = `${property.name} in Bengaluru | Century Real Estate`;
    description = `Explore ${property.name} by Century Real Estate in Bengaluru. ${property.bhk}. View prices, floor plans, amenities, and possession details.`;
    html = html.replace('<body ', '<body data-property-route-loading="true" ');
    html = html.replace('<div id="property-detail-view">', '<div id="property-detail-view" style="display:block">');
    html = replaceElementContent(html, 'dt-title', escapeHtml(property.name));
    html = replaceElementContent(html, 'dt-location', `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${escapeHtml(property.location)}`);
    html = replaceElementContent(html, 'dt-price', escapeHtml(property.price));
    html = replaceElementContent(html, 'dt-status', escapeHtml(property.statusText));
    html = replaceElementContent(html, 'dt-possession', escapeHtml(property.possession));
    html = replaceElementContent(html, 'dt-area', escapeHtml(property.area));
    html = replaceElementContent(html, 'dt-config', escapeHtml(property.bhk));
    const parsedPrice = parseIndianPrice(property.price) || 14800000;
    const loanAmt = Math.round(parsedPrice * 0.8);
    const emiRes = calculateEmi(loanAmt, 8.5, 20);
    const limits = getPropertySliderLimits(parsedPrice);
    html = replaceElementContent(html, 'emi-sync-property', escapeHtml(property.name));
    html = replaceElementContent(html, 'emi-prop-display', formatINR(parsedPrice));
    html = replaceElementContent(html, 'emi-prop-sub', `(${formatINRShort(parsedPrice)})`);
    html = replaceElementContent(html, 'emi-prop-min-lbl', formatINRShort(limits.min));
    html = replaceElementContent(html, 'emi-prop-max-lbl', formatINRShort(limits.max));
    html = replaceElementContent(html, 'emi-down-amount-display', formatINR(Math.round(parsedPrice * 0.2)));
    html = replaceElementContent(html, 'emi-loan-amount', formatINR(loanAmt));
    html = replaceElementContent(html, 'emi-monthly-output', formatINR(emiRes.emi));
    html = replaceElementContent(html, 'emi-hero-footnote', `*For ${formatINRShort(loanAmt)} loan at 8.50% for 20 yrs`);
    html = replaceElementContent(html, 'emi-table-down', formatINR(Math.round(parsedPrice * 0.2)));
    html = replaceElementContent(html, 'emi-table-down-pct', '(20%)');
    html = replaceElementContent(html, 'emi-table-principal', formatINR(loanAmt));
    html = replaceElementContent(html, 'emi-table-interest', formatINR(emiRes.totalInterest));
    html = replaceElementContent(html, 'emi-table-total', formatINR(emiRes.totalPayment));
    html = replaceElementContent(html, 'emi-donut-center-val', formatINRShort(emiRes.totalPayment));
    html = replaceElementContent(html, 'emi-legend-principal-val', formatINR(loanAmt));
    html = replaceElementContent(html, 'emi-legend-principal-pct', `(${Math.round(emiRes.principalPct)}%)`);
    html = replaceElementContent(html, 'emi-legend-interest-val', formatINR(emiRes.totalInterest));
    html = replaceElementContent(html, 'emi-legend-interest-pct', `(${Math.round(emiRes.interestPct)}%)`);
    html = html.replace(/id="emi-prop-slider"[^>]*>/i, `id="emi-prop-slider" min="${limits.min}" max="${limits.max}" step="${limits.step}" value="${parsedPrice}" aria-label="Property Value">`);
    const overviewHtml = createPropertyOverview(property)
      .map(renderOverviewParagraph)
      .join('\n                    ');
    html = replaceElementContent(html, 'dt-description', overviewHtml);

    property.images.slice(0, 3).forEach((imageUrl, index) => {
      const imageNumber = index + 1;
      const alt = `${property.name} ${['exterior', 'interior', 'amenities'][index] || 'residences'} in Bengaluru`;
      const imagePattern = new RegExp(`(<img\\s+id="dt-img-${imageNumber}"[^>]*src=")[^"]*("[^>]*>)`, 'i');
      html = html.replace(imagePattern, `$1${escapeHtml(imageUrl)}$2`);
      html = html.replace(new RegExp(`(<img\\s+id="dt-img-${imageNumber}"[^>]*alt=")[^"]*(")`, 'i'), `$1${escapeHtml(alt)}$2`);
    });
  } else if (sectionRoutes.includes(route)) {
    title = `${route[0].toUpperCase()}${route.slice(1)} | Century Real Estate Bengaluru`;
    description = `${route[0].toUpperCase()}${route.slice(1)} information for Century Real Estate homes and projects in Bengaluru.`;
  }

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}">`);
  html = html.replace('</head>', `    <meta property="og:title" content="${escapeHtml(title)}">\n    <meta property="og:description" content="${escapeHtml(description)}">\n    <meta property="og:type" content="website">\n</head>`);

  const preloadImageUrl = developerInfo.hero.image.replace(/&/g, '&amp;');
  html = html.replace(
    '</head>',
    `    <link rel="preload" as="image" href="${preloadImageUrl}" fetchpriority="high">\n</head>`
  );
  html = html.replace(/<link rel="canonical" href="https:\/\/yourdomain\.com\/century\.html">\s*/i, '');
  if (siteOrigin) {
    const canonicalRoute = property ? route : '';
    const canonicalUrl = `${siteOrigin}${basePath}${canonicalRoute ? `${canonicalRoute}/` : ''}`;
    html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}">\n    <meta property="og:url" content="${canonicalUrl}">\n</head>`);
  }
  return html;
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'index.html'), createRoutedHtml());

for (const directory of ['css', 'js', 'data']) {
  cpSync(join(projectDir, directory), join(outputDir, directory), { recursive: true });
}
cpSync(join(projectDir, 'privacy-policy.html'), join(outputDir, 'privacy-policy.html'));
writeFileSync(join(outputDir, '.htaccess'), `${apacheRouteRules}\n`);

if (siteOrigin) {
  const sitemapUrls = ['', ...propertyIds].map((route) => {
    const url = `${siteOrigin}${basePath}${route ? `${route}/` : ''}`;
    return `  <url><loc>${escapeHtml(url)}</loc></url>`;
  });
  writeFileSync(join(outputDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join('\n')}\n</urlset>\n`);
}

for (const route of allRoutes) {
  const routeDir = join(outputDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), createRoutedHtml(route));
}

console.log(`Built Century home page, ${sectionRoutes.length} section routes, and ${propertyIds.length} property routes in ${resolve(outputDir)} (base: ${basePath}).`);
