import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'package.json','pnpm-lock.yaml','astro.config.mjs','wrangler.jsonc','.node-version',
  'src/pages/index.astro','src/pages/privacidad.astro','src/pages/terminos.astro',
  'src/pages/configuracion-de-cookies.astro','src/pages/creditos.astro','src/pages/404.astro',
  'public/favicon.svg','PHOTO-SOURCES.md','SOURCES.md'
];
const missing = required.filter((f) => !fs.existsSync(path.join(root, f)));
if (missing.length) throw new Error(`Faltan archivos: ${missing.join(', ')}`);

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const specs = {...pkg.dependencies, ...pkg.devDependencies};
for (const [name, spec] of Object.entries(specs)) {
  if (/^(?:latest|\*|[~^])/.test(spec)) throw new Error(`Versión no exacta: ${name}@${spec}`);
}
const lock = fs.readFileSync(path.join(root, 'pnpm-lock.yaml'), 'utf8');
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
    else if (/\.(?:astro|js|mjs|ts|css|json|jsonc|md|txt|svg)$/i.test(ent.name) || ent.name === '.node-version') textFiles.push(full);
  }
}
walk(root);
const forbidden = [/example\.com/i, /chrome-extension:\/\//i];
for (const f of textFiles) {
  const t = fs.readFileSync(f,'utf8');
  for (const rx of forbidden) if (rx.test(t)) throw new Error(`Cadena prohibida ${rx} en ${path.relative(root,f)}`);
}
const home = fs.readFileSync(path.join(root,'src/pages/index.astro'),'utf8');
for (const marker of ['TouristAttraction','Đường Hầm Điêu Khắc','Da Lat','Google Maps','FAQPage','Sculpture Tunnel','claytunneldalat.com']) {
  if (!home.includes(marker)) throw new Error(`Falta contenido requerido: ${marker}`);
}
console.log(`SOURCE_AUDIT: PASS (${required.length} archivos obligatorios, ${Object.keys(specs).length} dependencias directas exactas)`);
