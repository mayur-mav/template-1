import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createPropertyHighlights, createPropertyOverview, developerInfo, propertiesData } from './data/kolte-patil.js';

const projectDir = dirname(fileURLToPath(import.meta.url));
const outputDir = join(projectDir, 'dist');
const requestedBasePath = process.argv[2] || '/';
const basePath = `/${requestedBasePath.replace(/^\/+|\/+$/g, '')}${requestedBasePath.replace(/^\/+|\/+$/g, '') ? '/' : ''}`;
const sourceHtml = readFileSync(join(projectDir, 'index.html'), 'utf8');
const propertyIds = propertiesData.map(({ id }) => id);
const sectionRoutes = ['residences', 'about', 'faq', 'contact'];
const allRoutes = [...sectionRoutes, ...propertyIds];
const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, '');
const homeTitle = 'Kolte Patil Developers Bangalore | Homes & Projects';
const homeDescription = 'Explore Kolte Patil projects in Bangalore, including homes in Electronic City, Horamavu and North Bengaluru. View project locations, prices and floor plans.';
const brandName = 'Kolte-Patil Developers';
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

function getHighlightIcon(text, defaultIcon = 'fa-solid fa-circle-check') {
  if (!text || typeof text !== 'string') return defaultIcon;
  const lower = text.toLowerCase();
  if (lower.includes('rera') || lower.includes('approv') || lower.includes('certif') || lower.includes('legal') || lower.includes('bda') || lower.includes('bmrda')) return 'fa-solid fa-certificate';
  if (lower.includes('wall') || lower.includes('privacy')) return 'fa-solid fa-shield-halved';
  if (lower.includes('road') || lower.includes('location') || lower.includes('connect') || lower.includes('metro') || lower.includes('highway') || lower.includes('expressway') || lower.includes('station') || lower.includes('airport') || lower.includes('tech park')) return 'fa-solid fa-location-dot';
  if (lower.includes('acre') || lower.includes('land') || lower.includes('garden') || lower.includes('open space') || lower.includes('landscape') || /\bpark\b/.test(lower) || lower.includes('green')) return 'fa-solid fa-tree';
  if (lower.includes('pool') || lower.includes('swim')) return 'fa-solid fa-person-swimming';
  if (lower.includes('gym') || lower.includes('fit') || lower.includes('sport') || lower.includes('court') || lower.includes('jog')) return 'fa-solid fa-dumbbell';
  if (lower.includes('club') || lower.includes('amenit') || lower.includes('lifestyle') || lower.includes('resort') || lower.includes('luxury')) return 'fa-solid fa-hotel';
  if (lower.includes('tower') || lower.includes('floor') || lower.includes('high-rise') || lower.includes('architecture') || /\bunits?\b/.test(lower) || lower.includes('structure')) return 'fa-solid fa-building';
  if (lower.includes('ready') || lower.includes('possession') || lower.includes('move-in') || lower.includes('keys') || lower.includes('oc ')) return 'fa-solid fa-key';
  if (lower.includes('vastu') || lower.includes('vaastu') || lower.includes('facing')) return 'fa-solid fa-compass';
  if (lower.includes('lake') || lower.includes('water') || lower.includes('view') || lower.includes('scenic')) return 'fa-solid fa-water';
  if (lower.includes('price') || lower.includes('offer') || lower.includes('crore') || lower.includes('lakh') || lower.includes('payment') || lower.includes('emi')) return 'fa-solid fa-indian-rupee-sign';
  return defaultIcon;
}

function renderHighlightCardHtml(highlight) {
  let iconClass = 'fa-solid fa-circle-check';
  let titleText = '';
  let bodyText = '';

  if (typeof highlight === 'string') {
    bodyText = highlight;
    iconClass = getHighlightIcon(highlight);
  } else if (typeof highlight === 'object' && highlight !== null) {
    bodyText = highlight.text || highlight.description || highlight.value || '';
    titleText = highlight.title || highlight.heading || highlight.label || '';
    iconClass = highlight.icon || getHighlightIcon(`${titleText} ${bodyText}`);
  }

  const titleHtml = titleText ? `<strong class="highlight-title">${escapeHtml(titleText)}</strong>` : '';
  const bodyHtml = bodyText ? `<span class="highlight-text">${escapeHtml(bodyText)}</span>` : '';

  return `<div class="highlight-card">
                        <div class="highlight-icon-wrap"><i class="${escapeHtml(iconClass)}" aria-hidden="true"></i></div>
                        <div class="highlight-text-wrap">${titleHtml}${bodyHtml}</div>
                    </div>`;
}

function replaceElementContent(html, id, content) {
  const openRegex = new RegExp(`<([a-z][a-z0-9]*)\\b[^>]*\\bid="${id}"[^>]*>`, 'i');
  const openMatch = openRegex.exec(html);
  if (!openMatch) return html;

  const tag = openMatch[1].toLowerCase();
  const startContent = openMatch.index + openMatch[0].length;
  let depth = 1;
  const tagRegex = new RegExp(`</?${tag}\\b[^>]*>`, 'gi');
  tagRegex.lastIndex = startContent;

  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    if (match[0].startsWith('</')) {
      depth--;
      if (depth === 0) {
        return html.slice(0, startContent) + content + html.slice(match.index);
      }
    } else if (!match[0].endsWith('/>')) {
      depth++;
    }
  }

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
  const lMatch = clean.match(/([\d.]+)\s*(?:l|lac|lakh|lakhs)/i);
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
  html = html.replace('<body ', `<body data-home-title="${escapeHtml(homeTitle)}" data-home-description="${escapeHtml(homeDescription)}" data-home-builder="${escapeHtml(brandName)}" `);
  let title = homeTitle;
  let description = homeDescription;
  const property = propertiesData.find(({ id }) => id === route);

  if (property) {
    const projectRegion = property.location.includes('Bengaluru') ? 'Bengaluru' : 'Karnataka';
    title = `${property.name} | ${brandName} ${projectRegion}`;
    description = `Explore ${property.name} by ${brandName}. View location, configurations, prices, floor plans, amenities, and possession details.`;
    html = html.replace('<body ', '<body data-property-route-loading="true" ');
    html = html.replace('<div id="property-detail-view">', '<div id="property-detail-view" style="display:block">');
    html = replaceElementContent(html, 'dt-title', escapeHtml(property.name));
    html = replaceElementContent(html, 'dt-location', `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${escapeHtml(property.location)}`);
    html = replaceElementContent(html, 'dt-price', escapeHtml(property.price));
    html = replaceElementContent(html, 'dt-status', escapeHtml(property.statusText));
    html = replaceElementContent(html, 'dt-possession', escapeHtml(property.possession));
    html = replaceElementContent(html, 'dt-area', escapeHtml(property.area));
    html = replaceElementContent(html, 'dt-config', escapeHtml(property.bhk));
    const parsedPrice = parseIndianPrice(property.price) || 9025000;
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

    const highlights = property.highlights || createPropertyHighlights(property);
    if (highlights && highlights.length > 0) {
      const highlightsHtml = highlights.map(renderHighlightCardHtml).join('\n                        ');
      html = replaceElementContent(html, 'dt-highlights', `\n                        ${highlightsHtml}\n                    `);
      html = html.replace(/<section\b[^>]*\bid="dt-project-highlights"[^>]*hidden[^>]*>/i, '<section class="project-highlights-section" id="dt-project-highlights" aria-labelledby="dt-highlights-title">');
    } else {
      html = replaceElementContent(html, 'dt-highlights', '');
      html = html.replace(/<section\b[^>]*\bid="dt-project-highlights"[^>]*>/i, '<section class="project-highlights-section" id="dt-project-highlights" aria-labelledby="dt-highlights-title" hidden>');
    }

    property.images.slice(0, 3).forEach((imageUrl, index) => {
      const imageNumber = index + 1;
      const alt = `${property.name} ${['exterior', 'interior', 'amenities'][index] || 'residences'} in Bengaluru`;
      const imagePattern = new RegExp(`(<img\\s+id="dt-img-${imageNumber}"[^>]*src=")[^"]*("[^>]*>)`, 'i');
      html = html.replace(imagePattern, `$1${escapeHtml(imageUrl)}$2`);
      html = html.replace(new RegExp(`(<img\\s+id="dt-img-${imageNumber}"[^>]*alt=")[^"]*(")`, 'i'), `$1${escapeHtml(alt)}$2`);
    });

  }

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}">`);
  html = html.replace('</head>', `    <meta property="og:title" content="${escapeHtml(title)}">\n    <meta property="og:description" content="${escapeHtml(description)}">\n    <meta property="og:type" content="website">\n</head>`);

  const preloadImageUrl = developerInfo.hero.image.replace(/&/g, '&amp;');
  html = html.replace(/<link\s+rel="preload"\s+as="image"[^>]*fetchpriority="high"[^>]*>\s*/i, '');
  html = html.replace(
    '</head>',
    `    <link rel="preload" as="image" href="${preloadImageUrl}" fetchpriority="high">\n</head>`
  );
  html = html.replace(/<link rel="canonical" href="https:\/\/yourdomain\.com\/[^"]*">\s*/i, '');
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

console.log(`Built Kolte-Patil Developers home page, ${sectionRoutes.length} section routes, and ${propertyIds.length} property routes in ${resolve(outputDir)} (base: ${basePath}).`);
