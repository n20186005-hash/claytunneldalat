# Estado de verificación

## Comprobaciones realizadas en este entorno

- `package.json` usa versiones directas exactas, sin `latest`, `*`, `^` ni `~`.
- `pnpm-lock.yaml` es un lockfile completo con secciones `packages` y `snapshots`; el importer coincide con las versiones directas del proyecto.
- TypeScript `6.0.3` está dentro del peer range declarado por `@astrojs/check@0.9.10` (`^5.0.0 || ^6.0.0`).
- Dominio de producción centralizado únicamente en `SITE_URL` dentro de `astro.config.mjs`.
- Sin dominio, sitemap/canonical absoluto/`og:url` no se inventan.
- Cloudflare usa Workers Static Assets con `./dist`.
- No hay base de datos, login ni CMS.
- El código fuente contiene páginas de privacidad, términos, configuración de cookies y créditos de fotos.
- El ascensor panorámico se marca como cerrado temporalmente según la información municipal consultada el 18/09/2026.

## Limitación de esta sesión

El entorno de ejecución no puede resolver `registry.npmjs.org`. Por ello no es posible descargar pnpm/dependencias y **no se afirma falsamente** que hayan pasado en esta máquina:

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

El ZIP conserva un lockfile real y completo para que estas comprobaciones se ejecuten en un entorno normal con acceso al registro.

## Nota sobre versión Astro

Para mantener `package.json` y un lockfile completo realmente sincronizados, esta entrega conserva Astro `7.2.4` y sitemap `3.7.3`, en lugar de presentar un lockfile 7.3.x incompleto o fabricado. Tailwind CSS `4.3.3`, TypeScript `6.0.3` y `@astrojs/check` `0.9.10` permanecen fijados. Si se exige el patch de Astro más reciente del día de despliegue, debe actualizarse con acceso al registro y regenerarse el lockfile antes del gate final.

## Fotografías

Las cinco fotografías seleccionadas son reales y sus URLs/licencias están registradas en `PHOTO-SOURCES.md`. Este sandbox tampoco puede descargar los binarios de Wikimedia, por lo que `pnpm photos` los guarda localmente en `public/images/` cuando se ejecute en una red normal. Hasta entonces, el HTML usa exactamente esas mismas imágenes mediante fallback remoto.

## Resultado real del intento de CI en esta sesión

Se intentó `corepack prepare pnpm@11.25.0 --activate` y el proceso falló con `getaddrinfo EAI_AGAIN registry.npmjs.org`. El registro completo queda incluido como `ci-attempt.log`. Por tanto, `astro check` y `astro build` no se certifican como ejecutados con dependencias instaladas en este sandbox.
