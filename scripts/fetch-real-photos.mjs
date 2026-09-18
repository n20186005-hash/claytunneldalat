import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const files = [
  ['monte-san-pedro-hero.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Monte_de_San_Pedro._A_Coru%C3%B1a-c1.jpg'],
  ['monte-san-pedro-cannon.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Can%C3%B3n_no_Monte_de_San_Pedro._A_Coru%C3%B1a-c1.jpg'],
  ['monte-san-pedro-panorama.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/28/A_Coru%C3%B1a_desde_o_Monte_de_San_Pedro.jpg'],
  ['monte-san-pedro-elevator.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Ascensor_del_Monte_de_San_Pedro%2C_La_Coru%C3%B1a%2C_Espa%C3%B1a%2C_2015-09-25%2C_DD_95.JPG'],
  ['monte-san-pedro-dome.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0f/C%C3%BApula_Atl%C3%A1ntica%2C_Parque_de_San_Pedro%2C_La_Coru%C3%B1a%2C_Espa%C3%B1a%2C_2015-09-25%2C_DD_131.JPG']
];
const dir = resolve('public/images');
await mkdir(dir, { recursive: true });
for (const [name, url] of files) {
  process.stdout.write(`Downloading ${name} ... `);
  const response = await fetch(url, { headers: { 'user-agent': 'MonteSanPedroGuide/1.0' } });
  if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  await writeFile(resolve(dir, name), bytes);
  console.log(`${Math.round(bytes.byteLength / 1024)} KB`);
}
console.log('Done. Real photos are now local in public/images/.');
