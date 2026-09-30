import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'package.json','pnpm-lock.yaml','astro.config.mjs','wrangler.jsonc','.node-version',
  'src/pages/index.astro','src/pages/vi/index.astro','src/pages/zh/index.astro','src/pages/ko/index.astro',
  'src/pages/ticket-price.astro','src/pages/how-to-get-there.astro','src/pages/highlights.astro',
  'src/pages/vi/gia-ve.astro','src/pages/vi/cach-di.astro','src/pages/vi/diem-check-in.astro',
  'src/pages/zh/menpiao.astro','src/pages/zh/jiaotong.astro','src/pages/zh/liangdian.astro',
  'src/pages/ko/ticket-price.astro','src/pages/ko/how-to-get-there.astro','src/pages/ko/highlights.astro',
  'src/pages/privacy.astro','src/pages/terms.astro','src/pages/cookies.astro','src/pages/photo-credits.astro',
  'src/pages/404.astro',
  'src/data/site.ts','src/i18n.ts','src/content/en.ts','src/content/vi.ts','src/content/zh.ts','src/content/ko.ts',
  'src/lib/schema.ts','src/lib/weather.ts',
  'public/favicon.svg','public/robots.txt','public/_headers','PHOTO-SOURCES.md','SOURCES.md'
];
const missing = required.filter((f) => !fs.existsSync(path.join(root, f)));
if (missing.length) throw new Error(`Faltan archivos: ${missing.join(', ')}`);

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'),'utf8'));
const specs = {...pkg.dependencies, ...pkg.devDependencies};
for (const [name, spec] of Object.entries(specs)) {
  if (/^(?:latest|\*|[~^])/.test(spec)) throw new Error(`Versión no exacta: ${name}@${spec}`);
}
const lock = fs.readFileSync(path.join(root, 'pnpm-lock.yaml'),'utf8');
for (const [name, spec] of Object.entries(specs)) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!new RegExp(`['\"]?${escaped}['\"]?:[\\s\\S]{0,120}specifier: ${spec.replace(/\./g,'\\.')}`).test(lock)) {
    throw new Error(`Lock importer no coincide con ${name}@${spec}`);
  }
}

const textFiles = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, {withFileTypes:true})) {
    if (['node_modules','dist','.astro','.git'].includes(ent.name)) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full);
    else if (/\.(?:astro|js|mjs|ts|css|json|jsonc|md|txt|svg)$/i.test(ent.name) || ent.name === '.node-version') {
      if (path.relative(root, full).replace(/\\/g, '/') !== 'scripts/verify-source.mjs') textFiles.push(full);
    }
  }
}
walk(root);
const forbidden = [/example\.com/i, /chrome-extension:\/\//i, /Monte de San Pedro/i, /A Coruña/i];
for (const f of textFiles) {
  const t = fs.readFileSync(f,'utf8').replace(/\r\n/g,'\n');
  for (const rx of forbidden) if (rx.test(t)) throw new Error(`Cadena prohibida ${rx} en ${path.relative(root,f)}`);
}

const homeSource = [
  'src/config.ts',
  'src/pages/index.astro',
  'src/lib/schema.ts',
  'src/data/site.ts',
  'src/components/GuideSections.astro'
]
  .map((f) => fs.readFileSync(path.join(root, f), 'utf8'))
  .join('\n');
for (const marker of ['TouristAttraction','Đường Hầm Điêu Khắc','Da Lat','Google Maps','FAQPage','Sculpture Tunnel','claytunneldalat.com','aggregateRating']) {
  if (!homeSource.includes(marker)) throw new Error(`Falta contenido requerido: ${marker}`);
}

const built = path.join(root, 'dist', 'index.html');
if (fs.existsSync(built)) {
  const html = fs.readFileSync(built, 'utf8');
  for (const marker of ['rel="canonical"','hreflang="vi"','hreflang="zh-Hant"','hreflang="ko"','hreflang="x-default"','application/ld+json']) {
    if (!html.includes(marker)) throw new Error(`Falta en el HTML generado: ${marker}`);
  }
}

const schema = fs.readFileSync(path.join(root,'src/lib/schema.ts'),'utf8');
for (const marker of ['TouristAttraction','FAQPage','BreadcrumbList','aggregateRating','openingHoursSpecification']) {
  if (!schema.includes(marker)) throw new Error(`Falta marcado estructurado: ${marker}`);
}

const config = fs.readFileSync(path.join(root,'astro.config.mjs'),'utf8').replace(/\r\n/g,'\n');
if (!config.includes('https://claytunneldalat.com')) throw new Error('Falta el dominio de producción en astro.config.mjs');
if (!config.includes('i18n')) throw new Error('Falta la configuración i18n del sitemap');

const robots = fs.readFileSync(path.join(root,'public/robots.txt'),'utf8');
if (!/Sitemap:\s*https:\/\/claytunneldalat\.com\/sitemap-index\.xml/.test(robots)) throw new Error('robots.txt no declara el sitemap');

const headers = fs.readFileSync(path.join(root,'public/_headers'),'utf8');
if (!/Strict-Transport-Security/i.test(headers)) throw new Error('_headers no envía HSTS');

console.log(`SOURCE_AUDIT: PASS (${required.length} archivos obligatorios, ${Object.keys(specs).length} dependencias directas exactas)`);
