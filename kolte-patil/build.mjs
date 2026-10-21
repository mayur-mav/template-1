import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = dirname(fileURLToPath(import.meta.url));
const outputDir = join(projectDir, 'dist');
const requestedBasePath = process.argv[2] || '/';
const basePath = `/${requestedBasePath.replace(/^\/+|\/+$/g, '')}${requestedBasePath.replace(/^\/+|\/+$/g, '') ? '/' : ''}`;
const sourceHtml = readFileSync(join(projectDir, 'index.html'), 'utf8');
const builderData = readFileSync(join(projectDir, 'data', 'kolte-patil.js'), 'utf8');
const propertyIds = [...builderData.matchAll(/^\s+id: '([^']+)',/gm)].map((match) => match[1]);
const sectionRoutes = ['residences', 'about', 'faq', 'contact'];
const allRoutes = [...sectionRoutes, ...propertyIds];
const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, '');
const apacheRouteRules = [
  'Options -MultiViews',
  'RewriteEngine On',
  'RewriteRule ^privacy-policy/?$ privacy-policy.html [L]',
  ...allRoutes.map((route) => `RewriteRule ^${route}/?$ ${route}/index.html [L]`)
].join('\n');

function createRoutedHtml(route = '') {
  let html = sourceHtml.replace('<head>', `<head>\n    <base href="${basePath}">`);
  html = html.replace(/<link rel="canonical" href="https:\/\/yourdomain\.com\/kolte-patil\.html">\s*/i, '');
  if (siteOrigin) {
    const canonicalUrl = `${siteOrigin}${basePath}${route ? `${route}/` : ''}`;
    html = html.replace('</head>', `    <link rel="canonical" href="${canonicalUrl}">\n</head>`);
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

for (const route of allRoutes) {
  const routeDir = join(outputDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, 'index.html'), createRoutedHtml(route));
}

console.log(`Built Kolte-Patil home page, ${sectionRoutes.length} section routes, and ${propertyIds.length} property routes in ${resolve(outputDir)} (base: ${basePath}).`);
