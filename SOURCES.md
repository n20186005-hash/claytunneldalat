# Editorial sources

## Attraction facts (single source: `src/data/site.ts`)

- Name: Đường Hầm Điêu Khắc — listed as **KDL Đường Hầm Điêu Khắc**; English **Clay Tunnel Da Lat** / **Sculpture Tunnel**.
- Category: tourist attraction.
- Address: Thành phố Đà Lạt, Lam Dong 66000, Vietnam (Ward 4 / Phường 4).
- Plus Code: `VCM6+2J Xuan Huong - Da Lat, Lam Dong, Vietnam`.
- Coordinates: 11.8825052, 108.4115694.
- Phone: +84 333 898 599.
- Google Maps share link: https://maps.app.goo.gl/Sb8LguKYD3Kt2PHM9
- Rating: 4.2 from 16 570 Google Maps user reviews, synchronised September 2026.
- Opening hours: daily 07:00–17:00 (indicative).
- Entrance fee: 90 000 VND per visitor over 1.3 m; 30 000 VND for children under 1.3 m (indicative).

## References

- **Google Maps** — verified location, Plus Code, coordinates and the visitor rating shown on the page.
- **Vietnam National Administration of Tourism** (https://vietnam.travel/) — official national tourism portal, used for regional travel context.
- **Travel references** — opening hours and ticket prices are given as typically published. Every page states that they are indicative and must be confirmed at the gate.
- **Wikimedia Commons (Panoramio), CC BY-SA** — the five photographs; see `PHOTO-SOURCES.md`.

## Ratings policy

The rating and review count are a synchronised Google Maps snapshot, displayed on the page and in the JSON-LD `aggregateRating`, always labelled as such. The site is not the official website of the attraction and does not collect its own reviews.

## Weather

The forecast is read from the Open-Meteo service for the attraction's coordinates at build time and refreshed in the browser. WMO codes and the derived advice (what to wear / how to plan / what to bring / weather to watch) live in `src/data/weather-i18n.ts` for all four languages. Advice is derived from the forecast only and is never presented or labelled as an official meteorological warning.
