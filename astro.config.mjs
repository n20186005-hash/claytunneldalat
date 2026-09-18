import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Configure the production domain in this single place when you have one.
const SITE_URL = '';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  integrations: SITE_URL ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
