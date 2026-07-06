# Deploy en Vercel — fernandourbano.ai

Guía para publicar este sitio (Next.js 16 App Router, SSR) en Vercel. El repo ya está en GitHub: `mancloud-rocket/fernandourbano-ai`. Vercel es zero-config para Next.js, así que no hace falta `vercel.json` ni build settings manuales.

## 1. Subir los cambios a GitHub

```bash
git push origin main
```

(Los cambios de esta ronda ya están commiteados localmente. Con el push, Vercel puede tomarlos.)

## 2. Importar en Vercel

1. Entrá a [vercel.com/new](https://vercel.com/new) con tu cuenta.
2. **Import Git Repository** → elegí `mancloud-rocket/fernandourbano-ai`.
3. Vercel detecta **Next.js** solo. No toques nada:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (auto)
   - Output: `.next` (auto)
   - Install Command: `npm install` (auto)
4. **Environment variables:** ninguna. El sitio no usa secrets ni base de datos.
5. **Node version:** ya está pineada a 20.18.0 (`.nvmrc` / `.node-version` / `package.json engines`). Vercel la respeta.
6. Clic **Deploy**. Primer build ~2-4 min.

Vas a obtener una URL tipo `fernandourbano-ai.vercel.app` para probar.

## 3. Conectar el dominio `fernandourbano.ai`

1. En el proyecto de Vercel: **Settings → Domains → Add** → `fernandourbano.ai` (y `www.fernandourbano.ai`).
2. Vercel te da los registros DNS. En tu proveedor de dominio:
   - Apex `fernandourbano.ai` → registro **A** a `76.76.21.21` (o el que indique Vercel), o **ALIAS/ANAME** al target de Vercel.
   - `www` → **CNAME** a `cname.vercel-dns.com`.
3. Esperá la propagación (minutos a unas horas). Vercel emite el certificado SSL solo.

## 4. Notas técnicas

- **SSR + middleware:** el sitio usa `src/proxy.ts` (el middleware renombrado de Next 16) para fijar `<html lang>`. Vercel lo corre en su edge sin config extra.
- **Imágenes:** los retratos y las imágenes de Historia están commiteadas en `public/` (no hay Git LFS). El press kit está en `public/press/press-kit.pdf`.
- **Cache headers:** ya definidos en `next.config.ts` (assets con cache largo, HTML sin cache para no servir chunks viejos).
- **Cada push a `main`** dispara un deploy de producción automático. Los push a otras ramas generan preview deployments.

## 5. Después del deploy

- Probá `fernandourbano.ai`, `fernandourbano.ai/en`, un artículo (`/ideas/ia-en-latam-y-lo-que-es-humo`), `/historia`, y la descarga del press kit (`/press/press-kit.pdf`).
- Verificá `fernandourbano.ai/sitemap.xml` y `fernandourbano.ai/robots.txt`.
- Si el dominio aún no propagó, la `.vercel.app` sirve igual para revisar.
