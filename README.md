# Clay Tunnel Da Lat · Đường Hầm Điêu Khắc

Independent, non-commercial editorial guide to the clay sculpture tunnel (Đường Hầm Điêu Khắc / Clay Tunnel Da Lat) near Tuyen Lam Lake, Da Lat, Lam Dong, Vietnam.

Four languages, one set of facts:

| Language | Home | Entrance fee | How to get there | Highlights |
| --- | --- | --- | --- | --- |
| English (default) | `/` | `/ticket-price/` | `/how-to-get-there/` | `/highlights/` |
| Tiếng Việt | `/vi/` | `/vi/gia-ve/` | `/vi/cach-di/` | `/vi/diem-check-in/` |
| 繁體中文 | `/zh/` | `/zh/menpiao/` | `/zh/jiaotong/` | `/zh/liangdian/` |
| 한국어 | `/ko/` | `/ko/ticket-price/` | `/ko/how-to-get-there/` | `/ko/highlights/` |

English is the default locale because every impression recorded in Google Search Console comes from English queries (`clay tunnel dalat entrance fee`, `clay tunnel vietnam`, …); `x-default` points at `/`. To switch the default to Vietnamese, change `defaultLocale` in `src/i18n.ts` and move the page files — no other code depends on it.

## Stack

- Astro `7.2.4` (static output)
- Tailwind CSS `4.3.3` via `@tailwindcss/vite`
- `@astrojs/sitemap` `3.7.3` (with the `i18n` option, so `xhtml:link` alternates are emitted)
- `@astrojs/check` `0.9.10`, TypeScript `6.0.3`
- pnpm `11.25.0`, Node.js `24.20.0`
- Cloudflare Workers Static Assets; Wrangler pinned in the deploy script

No database, login or CMS.

## Install and build

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm build        # astro build + source audit
pnpm check        # optional type check
```

`pnpm build` runs `astro build` and then `scripts/verify-source.mjs`, which fails if required files are missing, if a dependency is not pinned exactly, if the lockfile and `package.json` disagree, or if the generated `dist/index.html` is missing canonical/hreflang/JSON-LD markers.

## Architecture

- `src/config.ts` — production domain (single source of truth for absolute URLs).
- `src/data/site.ts` — language-neutral facts (name variants, address, geo, Plus Code, phone, hours, ticket prices, rating snapshot, photo chain).
- `src/i18n.ts` — locales, `htmlLang`/`og:locale`/`hreflang` codes, route slugs, `localizedPath()`, `hreflangAlternates()` and UI strings.
- `src/content/{en,vi,zh,ko}.ts` — the whole guide copy per language, typed by `src/content/types.ts`.
- `src/content/topics.ts` — the three subpages per language.
- `src/lib/schema.ts` — `TouristAttraction` (one `@id` shared by every language), `FAQPage`, `BreadcrumbList`, `WebSite`.
- `src/lib/weather.ts` + `src/data/weather-i18n.ts` — Open-Meteo forecast fetched at build time and refreshed in the browser; WMO codes and advice in all four languages.
- `src/layouts/BaseLayout.astro` — head/SEO, language switcher, footer, cookie notice, mobile quick actions.
- `src/components/GuideSections.astro` — the full home page body, rendered from the locale content.

## Weather module

`src/lib/weather.ts` reads the Open-Meteo forecast for the attraction's coordinates. The value is rendered at build time and refreshed on the client; if the request fails, the section falls back to a neutral message. Advice (what to wear / how to plan / what to bring / weather to watch) is derived from the forecast only and is never presented as an official warning. The UI does not mention the data source or any API.

## Photos

The five photographs are real images from Wikimedia Commons (Panoramio migration, CC BY-SA). `pnpm photos` downloads them into `public/images/`; until then `Photo.astro` falls back to the `Special:FilePath` URL and finally to the local SVG, so no image is ever broken. See `PHOTO-SOURCES.md` and `/photo-credits/`.

## Editorial notes

- Visitor rating: 4.2 from 16,570 Google Maps reviews, synchronised September 2026. It is shown on the page and in the JSON-LD `aggregateRating`, always labelled as a synchronised Google Maps snapshot.
- Opening hours (07:00–17:00) and ticket prices (90,000 VND over 1.3 m / 30,000 VND under 1.3 m) are indicative and every page tells visitors to confirm at the gate.
- The attraction charges an entrance fee, so `isAccessibleForFree` is `false`.
- Legal pages (`/privacy/`, `/terms/`, `/cookies/`, `/photo-credits/`) are `noindex,follow` and excluded from the sitemap.

## Domain, HTTPS and www

`SITE_URL` in `astro.config.mjs` is set to `https://claytunneldalat.com`, which drives canonical URLs, `og:url`, hreflang, the sitemap and the JSON-LD `@id`.

Workers Static Assets cannot express domain-level redirects, so do this once in the Cloudflare dashboard:

1. **Always Use HTTPS** → On (Search Console still shows the `http://` variant indexed; this makes it a 301 to `https://`).
2. **Redirect Rules**: `www.claytunneldalat.com/*` → `https://claytunneldalat.com/${1}` (301).
3. `public/_headers` already sends HSTS and the security headers.
4. Add the four properties (`http://`, `https://`, `www` variants) in Search Console, or request re-indexing after the redirects are live.

## Deploy

```bash
pnpm deploy     # pnpm build && wrangler deploy
```
