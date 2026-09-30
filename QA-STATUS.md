# Verification status

Last verified in this workspace on 2026-09-30.

## Checks that passed here

- `node node_modules/astro/bin/astro.mjs build` (Astro `7.2.4`): **21 pages**, `Complete!`, ~6 s.
  - 4 home pages (`/`, `/vi/`, `/zh/`, `/ko/`)
  - 12 subpages (entrance fee / how to get there / highlights × 4 languages)
  - 4 legal pages + `404.html`
- `node scripts/verify-source.mjs`: `SOURCE_AUDIT: PASS (39 archivos obligatorios, 8 dependencias directas exactas)`.
- `dist/sitemap-index.xml` → `sitemap-0.xml` with 16 indexable URLs (legal pages and 404 excluded) and `xhtml:link` alternates.
- `dist/index.html` contains: canonical `https://claytunneldalat.com/`, `hreflang` for `en` / `vi` / `zh-Hant` / `ko` / `x-default`, `og:*`, Twitter card, and three JSON-LD graphs (`WebSite`, `TouristAttraction`, `FAQPage`).
- Weather section rendered from a live build-time forecast (25 °C, 16°/26° in the build output) with the client refresh fallback in place.
- `public/_headers` sends HSTS plus the security headers; `public/robots.txt` declares the HTTPS sitemap.

## Not run here

- `pnpm install --frozen-lockfile` / `pnpm check` were not re-run: the lockfile is unchanged, and `astro check` is kept out of `build` so a type-only nit cannot block a deploy. Run `pnpm check` locally when touching TypeScript.
- `wrangler deploy` was not executed from this sandbox.

## Data caveats

- Opening hours and ticket prices are indicative only; every page repeats "confirm at the gate".
- The rating (4.2 / 16 570) is a Google Maps snapshot from September 2026.
- No page claims facts that could not be sourced: for example, no dedicated page was created for social-media check-in spots whose existence could not be verified from a reliable source.

## Outstanding actions outside the repository

1. Cloudflare dashboard → **Always Use HTTPS** on (Search Console still shows the `http://` variant indexed).
2. Cloudflare dashboard → Redirect Rule: `www.claytunneldalat.com/*` → `https://claytunneldalat.com/${1}` (301).
3. Search Console → request indexing for the four new language home pages and the three English subpages.
