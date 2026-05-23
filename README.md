# fernandourbano.ai

Sitio personal de **Fernando Urbano** — Director de Innovación en Rocketbot, 40 Under 40 Innovators Global 2024.

Construido con Next.js 16 + TypeScript + Tailwind v4 + Framer Motion. Bilingüe ES/EN, App Router, deploy en Vercel.

## Stack

- **Next.js 16.2** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind v4** (CSS-first config en `globals.css`)
- **Framer Motion 12** para animaciones del hero
- **Geist** (sans) · **Geist Mono** · **Fraunces** (display serif) vía `next/font/google`

## Estructura

```
src/
  app/
    layout.tsx              # Root layout, fuentes, html lang dinámico
    page.tsx                # ES Home (raíz)
    historia/page.tsx       # ES Story
    que-hago/page.tsx       # ES Services
    charlas/page.tsx        # ES Speaking
    ideas/page.tsx          # ES Ideas
    prensa/page.tsx         # ES Press
    contacto/page.tsx       # ES Contact
    en/                     # Mirror inglés bajo /en
      page.tsx
      historia/page.tsx
      ...
    globals.css             # Sistema de diseño Editorial Night
  components/
    Container.tsx           # Wrappers de ancho
    Nav.tsx                 # Top nav con locale switch
    Footer.tsx              # Footer con ticker + slogan
    LocaleSwitch.tsx        # ES / EN toggle
    Eyebrow.tsx             # Mono uppercase eyebrow
    HeroManifesto.tsx       # Hero animado del Home
    StatsStrip.tsx          # 4 stats bajo el hero
    PullQuote.tsx           # Cita editorial
    SectionIndex.tsx        # TOC tipo revista
    SpeakerPull.tsx         # CTA sutil de speaker
    PageHeader.tsx          # Header reutilizable de páginas internas
    PageShell.tsx           # Nav + main + Footer
    pages/                  # Una componente por página
      Home.tsx
      Story.tsx
      Services.tsx
      Speaking.tsx
      Ideas.tsx
      Press.tsx
      Contact.tsx
  content/
    types.ts                # Schema del contenido
    es.ts                   # Diccionario español
    en.ts                   # Diccionario inglés
    index.ts                # getContent(locale)
  lib/
    locale.ts               # Locale type + helpers de rutas
  proxy.ts                  # Forwarda x-pathname al root layout
```

## Comandos

```bash
npm run dev      # http://localhost:3000
npm run build    # build de producción (Turbopack)
npm run start    # servir el build
```

## Decisiones de diseño

- **Editorial Night**: fondo negro `#0A0A0B`, texto crema `#F4EDE2`, acento ámbar eléctrico `#E89B2A`. Lectura: autoridad sénior, anti-bluff.
- **Tipografía**: Fraunces para display (serif con personalidad), Geist Sans para body, Geist Mono para data y eyebrows.
- **Tokens**: definidos en `globals.css` bajo `@theme inline` (Tailwind v4). Para nuevas utilidades, usar `@utility` en el mismo archivo.
- **Grano de película**: overlay SVG sutil en `body::before` (`opacity 0.035`).
- **Animaciones**: solo en el hero (fade-up + word stagger). El resto es CSS hover y transitions. Performance > efectos.

## i18n

ES es la locale por defecto y vive en la raíz (`/`, `/historia`, ...). EN vive bajo `/en` (`/en`, `/en/historia`, ...). El `proxy.ts` setea `x-pathname` como header de request, y el root layout lo lee para fijar `<html lang>` correctamente.

Cada página tiene `alternates.languages` apuntando a su versión opuesta para SEO.

Agregar una nueva página:

1. Crear `src/components/pages/Nueva.tsx`.
2. Crear `src/app/nueva/page.tsx` y `src/app/en/nueva/page.tsx`.
3. Agregar `{ segment: "nueva", label: "Nueva", number: "07" }` a `src/content/es.ts` y `en.ts` en el array `nav`.

## Próximas iteraciones

- Mapa interactivo SVG de Historia (LATAM + Iberia con eventos por ciudad).
- Galería real de Charlas (cuando estén las fotos y videos).
- Press kit PDF descargable.
- 3 ensayos pillar publicados en `/ideas` con MDX.
- OG images dinámicas por página.
- Deploy a Vercel + DNS de `fernandourbano.ai`.

## Brand strategy

Ver `LAUNCH.md` para el playbook completo de marca personal (LinkedIn refresh, calendario de posts, templates de outreach, métricas).
