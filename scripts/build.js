/**
 * Gera páginas HTML estáticas para SEO programático
 * Monumentos, cidades e rotas da Rota Biker
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  monumentos,
  getUniqueCities,
  getUniqueRoutes,
  getMonumentsByCity,
  getMonumentsByRoute,
  ESTADO_NOME,
  ROTAS_DESCRICAO,
} from '../src/js/data.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BASE_URL = 'https://www.monumentorotabiker.com.br';

const ASSETS_PREFIX = {
  monumento: '../../',
  cidade: '../../',
  rota: '../../',
};

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getSchemaTouristAttraction(monument) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: monument.name,
    description: `${monument.description || ''} Monumento da Rota Biker em ${monument.city}, ${ESTADO_NOME[monument.flag]}. Parada para motociclistas na rota ${monument.route}.`.trim(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: monument.address,
      addressLocality: monument.city,
      addressRegion: monument.flag.toUpperCase(),
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(monument.location.lat),
      longitude: parseFloat(monument.location.lon),
    },
    url: `${BASE_URL}/monumento/${monument.slug}/`,
  };
}

function buildMonumentPage(monument, assetsPrefix) {
  const routeDesc = ROTAS_DESCRICAO[monument.route] || `Rota ${monument.route} da Rota Biker para motociclistas.`;
  const desc = monument.description || 'Parada da Rota Biker com monumento do cumprimento biker.';
  const metaDesc = `Conheça o monumento ${monument.name} da Rota Biker em ${monument.city}. ${desc} Parada para motociclistas que percorrem a rota ${monument.route}.`;
  const schema = getSchemaTouristAttraction(monument);
  const mapsUrl = `https://www.google.com/maps?q=${monument.location.lat},${monument.location.lon}`;

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Monumento ${escapeHtml(monument.name)} | Rota Biker</title>
    <meta name="description" content="${escapeHtml(metaDesc)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${BASE_URL}/monumento/${monument.slug}/" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Monumento ${escapeHtml(monument.name)} | Rota Biker" />
    <meta property="og:description" content="${escapeHtml(metaDesc)}" />
    <meta property="og:url" content="${BASE_URL}/monumento/${monument.slug}/" />
    <meta property="og:site_name" content="Rota Biker" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Monumento ${escapeHtml(monument.name)} | Rota Biker" />
    <meta name="twitter:description" content="${escapeHtml(metaDesc)}" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <link rel="stylesheet" href="${assetsPrefix}src/css/main.css" />
    <script type="module" src="${assetsPrefix}src/js/monument-page.js"></script>
  </head>
  <body class="seo-page">
    <header class="page-header">
      <a href="${assetsPrefix}index.html">← Voltar ao mapa</a>
      <h1>${escapeHtml(monument.name)}</h1>
    </header>
    <main class="monument-page">
      <article>
        <p class="monument-meta"><strong>${escapeHtml(monument.monument)}</strong>${monument.underconstruction === 'Em Construção' ? ' <span class="em-construcao">Em Construção</span>' : ''}</p>
        <p><strong>Descrição:</strong> ${escapeHtml(desc)}</p>
        <p><strong>Cidade:</strong> <a href="${assetsPrefix}cidade/${monument.citySlug}/">${escapeHtml(monument.city)}</a></p>
        <p><strong>Estado:</strong> ${ESTADO_NOME[monument.flag] || monument.flag.toUpperCase()}</p>
        <p><strong>Endereço:</strong> ${escapeHtml(monument.address)}</p>
        <p><strong>Coordenadas:</strong> ${monument.location.lat}, ${monument.location.lon}</p>
        <p><strong>Rota:</strong> <a href="${assetsPrefix}rota/${monument.routeSlug}/">${escapeHtml(monument.route)}</a></p>
        <p><strong>Descrição da rota:</strong> ${escapeHtml(routeDesc)}</p>
        <p><a href="${escapeHtml(monument.instagram)}" target="_blank" rel="noopener">Instagram</a> · <a href="${mapsUrl}" target="_blank" rel="noopener">Ver no Google Maps</a></p>
      </article>
      <div id="map" class="monument-map" data-lat="${monument.location.lat}" data-lon="${monument.location.lon}"></div>
    </main>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbD-3PCr0P9wXG_BBo2VHl_03zdqmcE7M&callback=initMonumentMap&v=weekly" defer></script>
  </body>
</html>`;
}

function buildCityPage(city, monuments, assetsPrefix) {
  const stateName = ESTADO_NOME[city.state] || city.state.toUpperCase();
  const metaDesc = `Monumentos da Rota Biker em ${city.name}, ${stateName}. ${monuments.length} parada(s) para motociclistas. Confira o mapa e planeje sua viagem.`;
  const title = `Rota Biker em ${city.name} | Monumentos e Paradas`;

  const monumentList = monuments
    .map(
      (m) =>
        `        <li><a href="${assetsPrefix}monumento/${m.slug}/">${escapeHtml(m.name)}</a> (${m.monument})</li>`
    )
    .join('\n');

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(metaDesc)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${BASE_URL}/cidade/${city.slug}/" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(metaDesc)}" />
    <meta property="og:url" content="${BASE_URL}/cidade/${city.slug}/" />
    <meta property="og:site_name" content="Rota Biker" />
    <link rel="stylesheet" href="${assetsPrefix}src/css/main.css" />
  </head>
  <body class="seo-page">
    <header class="page-header">
      <a href="${assetsPrefix}index.html">← Voltar ao mapa</a>
      <h1>Rota Biker em ${escapeHtml(city.name)}</h1>
    </header>
    <main class="city-page">
      <p><strong>Estado:</strong> ${stateName}</p>
      <p>${monuments.length} monumento(s) da Rota Biker em ${escapeHtml(city.name)}:</p>
      <ul class="monument-list">
${monumentList}
      </ul>
    </main>
  </body>
</html>`;
}

function buildRoutePage(route, monuments, assetsPrefix) {
  const routeDesc = ROTAS_DESCRICAO[route.name] || `Rota ${route.name} para motociclistas.`;
  const metaDesc = `Monumentos da Rota Biker na rota ${route.name}. ${routeDesc} ${monuments.length} parada(s) para carimbar o passaporte.`;
  const title = `Rota ${escapeHtml(route.name)} | Rota Biker`;

  const monumentList = monuments
    .map(
      (m) =>
        `        <li><a href="${assetsPrefix}monumento/${m.slug}/">${escapeHtml(m.name)}</a> - ${escapeHtml(m.city)} (${m.monument})</li>`
    )
    .join('\n');

  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(metaDesc)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${BASE_URL}/rota/${route.slug}/" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(metaDesc)}" />
    <meta property="og:url" content="${BASE_URL}/rota/${route.slug}/" />
    <meta property="og:site_name" content="Rota Biker" />
    <link rel="stylesheet" href="${assetsPrefix}src/css/main.css" />
  </head>
  <body class="seo-page">
    <header class="page-header">
      <a href="${assetsPrefix}index.html">← Voltar ao mapa</a>
      <h1>Rota ${escapeHtml(route.name)}</h1>
    </header>
    <main class="route-page">
      <p>${escapeHtml(routeDesc)}</p>
      <p><strong>${monuments.length} monumento(s)</strong> nesta rota:</p>
      <ul class="monument-list">
${monumentList}
      </ul>
    </main>
  </body>
</html>`;
}

function buildSitemap(urls) {
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = urls
    .map(
      (url) => `    <url>
        <loc>${url}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${url === BASE_URL + '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function main() {
  const cities = getUniqueCities();
  const routes = getUniqueRoutes();
  const prefix = ASSETS_PREFIX.monumento;

  const sitemapUrls = [BASE_URL + '/'];

  for (const monument of monumentos) {
    const filePath = path.join(ROOT, 'monumento', monument.slug, 'index.html');
    ensureDir(filePath);
    fs.writeFileSync(filePath, buildMonumentPage(monument, prefix), 'utf8');
    sitemapUrls.push(`${BASE_URL}/monumento/${monument.slug}/`);
    console.log('Gerado:', filePath);
  }

  for (const city of cities) {
    const monuments = getMonumentsByCity(city.slug);
    const filePath = path.join(ROOT, 'cidade', city.slug, 'index.html');
    ensureDir(filePath);
    fs.writeFileSync(filePath, buildCityPage(city, monuments, prefix), 'utf8');
    sitemapUrls.push(`${BASE_URL}/cidade/${city.slug}/`);
    console.log('Gerado:', filePath);
  }

  for (const route of routes) {
    const monuments = getMonumentsByRoute(route.slug);
    const filePath = path.join(ROOT, 'rota', route.slug, 'index.html');
    ensureDir(filePath);
    fs.writeFileSync(filePath, buildRoutePage(route, monuments, prefix), 'utf8');
    sitemapUrls.push(`${BASE_URL}/rota/${route.slug}/`);
    console.log('Gerado:', filePath);
  }

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), buildSitemap(sitemapUrls), 'utf8');
  console.log('Sitemap atualizado: sitemap.xml');
  console.log(`\nTotal: ${monumentos.length} monumentos, ${cities.length} cidades, ${routes.length} rotas`);
}

main();
