import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// Wikimedia Commons file titles (clay sculpture tunnel / Đường Hầm Điêu Khắc, Da Lat).
const titles = [
  'Đường vào đường hầm điêu khắc đất sét - panoramio.jpg',
  'Đường vào đường hầm điêu khắc đất sét - panoramio (1).jpg',
  'Đường vào đường hầm điêu khắc đất sét quanh hồ tuyền lâm - panoramio.jpg',
  'Đường vào đường hầm điêu khắc đất sét - panoramio (2).jpg',
  'Đường vào đường hầm điêu khắc đất sét quanh hồ tuyền lâm - panoramio (1).jpg'
];
const localNames = [
  'clay-tunnel-hero.jpg',
  'clay-tunnel-tunnel.jpg',
  'clay-tunnel-lake.jpg',
  'clay-tunnel-tunnel2.jpg',
  'clay-tunnel-lake2.jpg'
];

const filePath = (title) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(title)}`;

const dir = resolve('public/images');
await mkdir(dir, { recursive: true });

for (let i = 0; i < titles.length; i++) {
  const name = localNames[i];
  const url = filePath(titles[i]);
  process.stdout.write(`Downloading ${name} ... `);
  const response = await fetch(url, { headers: { 'user-agent': 'ClayTunnelDalatGuide/1.0' } });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(resolve(dir, name), bytes);
  console.log(`${Math.round(bytes.byteLength / 1024)} KB`);
}
console.log('Done. Real photos are now local in public/images/.');
