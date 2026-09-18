# Monte de San Pedro · A Coruña

Micrositio editorial independiente construido específicamente alrededor del carácter atlántico, paisajístico y militar del Monte de San Pedro.

## Stack fijado

- Astro `7.2.4`
- Tailwind CSS `4.3.3`
- `@tailwindcss/vite` `4.3.3`
- `@astrojs/check` `0.9.10`
- `@astrojs/sitemap` `3.7.3`
- TypeScript `6.0.3`
- pnpm `11.25.0`
- Node.js `24.20.0` (LTS)
- Cloudflare Workers Static Assets; Wrangler fijado en el script de deploy a `4.134.0`

No hay base de datos, login ni CMS.

## Dominio en un solo lugar

Edita únicamente `SITE_URL` en `astro.config.mjs`. Si queda vacío, el proyecto sigue construyéndose; se omiten canonical absoluto, `og:url` y sitemap. Cuando tenga un dominio real, el sitemap y las URLs absolutas se derivan de esa única configuración.

## Instalación

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Fotos reales

El sitio espera cinco JPG en `public/images/`. Por limitación de salida binaria del entorno que generó este paquete, las fotografías no pudieron descargarse automáticamente durante la creación del ZIP. Se incluye un descargador determinista:

```bash
pnpm photos
```

Después de ejecutar ese comando, las cinco fotografías reales de Wikimedia Commons quedan guardadas localmente con los nombres que usa el sitio. Mientras falten, la página utiliza las mismas fotos desde su URL original como fallback para evitar imágenes rotas. Ver `PHOTO-SOURCES.md` y `/creditos/`.

## Cloudflare Workers

```bash
pnpm deploy
```

`wrangler.jsonc` publica `./dist` mediante Static Assets.

## Comprobaciones editoriales

- No se fija un horario general del parque sin fuente operacional estable.
- El ascensor panorámico se marca como “cerrado temporalmente” porque así figura actualmente en la web turística municipal consultada el 18/09/2026.
- La información histórica y técnica de las baterías procede de documentación municipal. Ver `SOURCES.md`.

## Estado de verificación

Consulta `QA-STATUS.md`. Esta entrega prioriza un lockfile completo y sincronizado. El sandbox de creación no tiene acceso al registro npm, por lo que no se declara falsamente que el clean install/check/build haya pasado aquí.
