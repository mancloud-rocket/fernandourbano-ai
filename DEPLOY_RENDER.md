# Deploy en Render — fernando-urbano (Next.js)

Guía para publicar este sitio como **Web Service** en [Render](https://render.com). Usa SSR (App Router + `proxy.ts`), no export estático.

## Requisitos previos

1. Cuenta en [render.com](https://render.com)
2. Repositorio Git (GitHub, GitLab o Bitbucket) con el código
3. **Imágenes en el repo:** `public/portraits/*.jpeg` y `public/story/*.jpeg` deben estar commiteadas (son ~15–20 MB). Si GitHub rechaza el push por tamaño, usá [Git LFS](https://git-lfs.com) para `*.jpeg` en `public/`.

## Opción A — Blueprint (recomendada)

1. Subí el proyecto a GitHub (rama `main`).
2. En Render: **New +** → **Blueprint**.
3. Conectá el repo; Render detecta `render.yaml` en la raíz.
4. Revisá el servicio `fernando-urbano` y clic **Apply**.
5. Esperá el primer deploy (build ~2–5 min).

## Opción B — Manual

| Campo | Valor |
|--------|--------|
| **Type** | Web Service |
| **Runtime** | Node |
| **Build Command** | `npm ci && npm run build` |
| **Start Command** | `npm start` |
| **Branch** | `main` |

**Environment variables:**

| Key | Value |
|-----|--------|
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `20.18.0` |

Render inyecta `PORT` automáticamente; `npm start` ya lo usa.

## Después del deploy

1. URL por defecto: `https://fernando-urbano.onrender.com` (o el nombre que elijas).
2. **Custom domain:** Settings → Custom Domains → agregá tu dominio y los DNS que indique Render.
3. **Plan Free:** el servicio se duerme tras inactividad; la primera visita puede tardar ~30–60 s en despertar. Para producción seria, usá plan **Starter** o superior.

## Verificar en local (igual que Render)

```bash
npm ci
npm run build
npm start
```

Abrí `http://localhost:3000` y revisá `/historia`, `/charlas`, assets en `public/story/`.

## Checklist antes del push

- [ ] `npm run build` pasa sin errores
- [ ] Imágenes en `public/story/` y `public/portraits/`
- [ ] Sin secretos en `.env` commiteados (`.env*` está en `.gitignore`)
- [ ] Rama `main` actualizada en el remoto
- [ ] Probado en móvil: menú hamburguesa, historia, formulario contacto
- [ ] `metadataBase` en `layout.tsx` apunta a tu dominio final (ahora `https://fernandourbano.ai`)

## Seguridad (incluido en el repo)

- Headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- `poweredByHeader: false`
- Videos embebidos solo YouTube/Vimeo (`src/lib/video.ts`) con `sandbox` en iframe
- Formulario contacto: sin backend, `mailto` con sanitización y límites de longitud
- `robots.txt` y `sitemap.xml` generados por Next (`src/app/robots.ts`, `sitemap.ts`)

## Archivos de deploy incluidos

| Archivo | Función |
|---------|---------|
| `render.yaml` | Blueprint de Render |
| `.node-version` / `.nvmrc` | Node 20.18.0 |
| `package.json` → `engines` | Versión de Node en build |

## Problemas frecuentes

**Build falla por memoria (plan Free)**  
Subí a Starter o reducí tamaño de JPEGs (calidad 85, ancho máx. 1600px).

**404 en imágenes de historia**  
Confirmá que existen `public/story/01-bw.jpeg` … `11-color.jpeg` y que están en Git.

**Sitio lento al despertar**  
Normal en plan Free; considerá Starter o un ping programado (UptimeRobot) si necesitás menos cold start.

**Dominio y locale**  
Las rutas ES están en `/`, EN en `/en/...`. No hace falta variable de entorno extra.
