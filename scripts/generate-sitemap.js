import fs from 'fs';
import path from 'path';

// Load a local .env (optional) without adding dependencies
function loadDotenv() {
  const envPath = path.join(process.cwd(), '.env');
  try {
    if (!fs.existsSync(envPath)) return;
    const content = fs.readFileSync(envPath, 'utf8');
    content.split(/\r?\n/).forEach((line) => {
      const m = line.match(/^\s*([^#\s=]+)\s*=\s*(.*)?\s*$/);
      if (!m) return;
      let [, key, val] = m;
      if (!val) val = '';
      val = val.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
      if (process.env[key] === undefined) process.env[key] = val;
    });
  } catch {
    // ignore env loading errors
  }
}

loadDotenv();

// Config: base URL for sitemap. Override with SITEMAP_BASE env var.
const BASE = process.env.SITEMAP_BASE || 'https://www.oasismoonguard.com';
const APP_PATH = path.join(process.cwd(), 'src', 'App.jsx');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

function readAppFile() {
  try {
    return fs.readFileSync(APP_PATH, 'utf8');
  } catch (err) {
    console.error('Failed to read src/App.jsx:', err.message);
    process.exit(1);
  }
}

function extractRoutes(code) {
  const routeRegex = /<Route\s+[^>]*path\s*=\s*(?:"|')([^"']+)(?:"|')/g;
  const paths = new Set();
  let match;
  while ((match = routeRegex.exec(code)) !== null) {
    const p = match[1].trim();
    // ignore wildcard and dynamic segments
    if (p === '*' || p.includes(':')) continue;
    // normalize empty to '/'
    const normalized = p === '' ? '/' : p;
    paths.add(normalized);
  }
  return Array.from(paths).sort();
}

function buildSitemap(paths) {
  const now = new Date().toISOString();
  const urls = paths.map(p => {
    const loc = new URL(p, BASE).toString();
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function ensurePublicDir() {
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function main() {
  const code = readAppFile();
  const paths = extractRoutes(code);
  if (!paths.includes('/')) paths.unshift('/');
  ensurePublicDir();
  const xml = buildSitemap(paths);
  fs.writeFileSync(OUT_FILE, xml, 'utf8');
  console.log('Sitemap written to', OUT_FILE);
  console.log('Routes included:', paths.join(', '));
}

main();
