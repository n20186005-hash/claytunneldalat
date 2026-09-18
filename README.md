# Clay Tunnel Da Lat · Đường Hầm Điêu Khắc

Independent editorial microsite for the clay sculpture tunnel (Đường Hầm Điêu Khắc / Clay Tunnel Da Lat) near Tuyen Lam Lake, Da Lat, Lam Dong, Vietnam.

## Stack

- Astro `7.2.4`
- Tailwind CSS `4.3.3`
- `@tailwindcss/vite` `4.3.3`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.3`
- TypeScript `6.0.3`
- pnpm `11.25.0`
- Node.js `24.20.0` (LTS)
- Cloudflare Workers Static Assets; Wrangler fixed in the deploy script to `4.134.0`

No database, login, or CMS.

## Domain in one place

Edit only `SITE_URL` in `astro.config.mjs`. It is set to `https://claytunneldalat.com`, which drives the canonical URL, `og:url`, sitemap, and absolute `image`/`@id` in the JSON-LD. Leave it empty to build without absolute URLs.

## Install

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Real photos

The site expects five JPGs in `public/images/`. They are pulled from Wikimedia Commons via a deterministic downloader:

```bash
pnpm photos
```

After running that command, the five real photos are stored locally with the names the site uses. Until they exist, the page uses the same photos from their `Special:FilePath` URL as a fallback to avoid broken images. See `PHOTO-SOURCES.md` and `/creditos/`.

## Cloudflare Workers

```bash
pnpm deploy
```

`wrangler.jsonc` publishes `./dist` via Static Assets.

## Editorial notes

- The visitor rating (4.2, ~16,550 reviews) and review count are synchronized from Google Maps user reviews and were last updated in September 2026. They are displayed on the page only and are **not** placed in the JSON-LD (to respect Google's terms). The source note is shown on the page and in the Sources section.
- Opening hours and ticket prices are stated as typically published; confirm at the gate.
- The attraction charges an entrance ticket, so `isAccessibleForFree` is `false` in the structured data.

## Verification status

See `QA-STATUS.md`. This delivery prioritizes a complete, synchronized lockfile. The build sandbox has no npm registry access, so a clean install/check/build is not falsely claimed to have passed here.
