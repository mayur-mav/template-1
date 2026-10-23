import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { developerInfo, propertiesData } from './data/kolte-patil.js';

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

function replaceElementContent(html, id, content) {
  const elementPattern = new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\bid="${id}"[^>]*>)[\\s\\S]*?(<\\/\\2>)`, 'i');
  return html.replace(elementPattern, `$1${content}$3`);
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
    html = replaceElementContent(html, 'dt-description', escapeHtml(property.description));

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
