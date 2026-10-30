# Clay Tunnel Da Lat independent guide

Static Astro 7.2.4 site with four established languages (English root, Vietnamese /vi/, Traditional Chinese /zh/, Korean /ko/) and the existing ticket, transport and highlights routes. Existing policy and 404 pages are preserved.

Use Node24.20.0 and pnpm11.25.0: `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`. The build retains scripts/verify-source.mjs and the lock/supply-chain audit. Dependencies, lockfile and allowBuilds policy are unchanged.

Cloudflare deploy uses the existing connected project's command and config. The source Worker sits in front of the same static ASSETS binding, normalizes existing HTTP/www entrances and known slash routes, and preserves genuine404/noindex/security responses. No DNS, security or domain-binding changes are needed or implied.

Content: dated Maps snapshots and attributed provincial-directory facts, with undated tariffs/hours clearly distinguished from current operator information. No own review ratings or disputed hours schema. Private diagnostics do not belong in this public repository.

Weather is loaded in the browser from Open-Meteo, validated, refreshed and expired; no build-time forecast is presented as current. It is a regional model, not an access notice or official warning.

Current scenic assets are explicitly labelled local geometric illustrations under CC0; the PNG social cover is a rasterized copy. Former unverified remote photographic fallbacks are retired. scripts/fetch-real-photos.mjs is an archival reference utility, not a source of approved current assets. See PHOTO-SOURCES.md.

Privacy, cookie and illustration information is available in all four languages within the existing policy pages. No GA or advertising configuration is added. The former optional-cookie UI did not control a service and is retired; no tracking switch is promised. Old service-worker navigation caching is retired without deleting unrelated caches. Historical ci-attempt.log is preserved as an old environment log, not a current validation record.
