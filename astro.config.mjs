import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Configure the production domain in this single place when you have one.
const SITE_URL = 'https://claytunneldalat.com';

const NO_INDEX = ['/privacy/', '/terms/', '/cookies/', '/photo-credits/', '/404.html'];

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  integrations: SITE_URL
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'en',
            locales: { en: 'en', vi: 'vi', zh: 'zh-Hant', ko: 'ko' }
          },
          filter: (page) => !NO_INDEX.some((path) => page.includes(path))
        })
      ]
    : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
