# Validation scope

Run the pinned check/build/source-audit commands in README.md. Local source, build and fixture checks are not production or browser acceptance. Verify each language/page family, current compiled scripts, static assets, sitemap, headers, missing-path404, existing host redirects and GET/HEAD behavior before release.

Weather validation must cover missing/null/range/date/stale data, network failure, browser expiry, all-locales WMO/advice intensity versus probability, and actual emitted handlers. Native/fixture results do not prove external weather availability or production networking.

Current production access could not be verified. Do not equate successful local checks with deployment, current opening status, operator authorization or a successful analytics transmission.
