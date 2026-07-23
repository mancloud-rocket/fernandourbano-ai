# SEO, SEM y tracking - fernandourbano.ai

Guía para medir y hacer crecer el tráfico del sitio, pensada para tu objetivo actual: perfil bajo, thought leadership, distribución vía LinkedIn. No es una máquina de ads; es medir bien y publicar seguido.

## 1. Lo que YA tiene el sitio (SEO técnico, hecho)

- **Sitemap** (`/sitemap.xml`) con todas las páginas, ensayos y posts, en ES y EN.
- **robots.txt** (`/robots.txt`) apuntando al sitemap.
- **Metadata por página**: `<title>` y `description` únicos por ruta.
- **Open Graph por página y por post**: cada post genera su propia imagen OG (título + subtítulo + marca) para que LinkedIn muestre una tarjeta linda. El resto del sitio usa el logo.
- **hreflang / alternates** ES-EN: Google entiende que hay dos idiomas de la misma página.
- **Headings semánticos** (un `<h1>` por página) y HTML accesible.
- **Performance**: Next.js optimiza imágenes, code-splitting y cache headers (ya configurados en `next.config.ts`).

No falta nada técnico grave. Lo que mueve la aguja ahora es **medición + contenido + distribución**.

## 2. Tracking (ya implementado, se activa al deployar en Vercel)

- **Vercel Web Analytics** (`@vercel/analytics`): visitas, páginas top, referrers (de dónde viene la gente: LinkedIn, Google, directo), países. Privacy-friendly, sin cookies, cumple GDPR. Se ve en el dashboard de Vercel → pestaña Analytics. **Hay que activarlo con un clic** en el proyecto de Vercel (Analytics → Enable).
- **Vercel Speed Insights** (`@vercel/speed-insights`): Core Web Vitals reales de tus visitantes (velocidad de carga, estabilidad visual). Google usa esto para ranking. También se activa desde el dashboard.

Con eso solo ya sabés cuánta gente entra, desde dónde, y qué posts funcionan.

### Si querés más adelante
- **Google Analytics 4**: embudos más detallados (eventos, conversiones). Más potente pero más pesado y con cookies. Solo si necesitás analizar conversiones finas.
- **Plausible / Umami**: alternativa liviana y linda a GA4 si querés dashboards propios.

## 3. Google Search Console (gratis, hacelo apenas deployes)

1. [search.google.com/search-console](https://search.google.com/search-console) → agregá `fernandourbano.ai`.
2. Verificá el dominio (registro DNS TXT, o el meta tag que te dan).
3. **Sitemaps → agregá** `https://fernandourbano.ai/sitemap.xml`.
4. Repetí en [Bing Webmaster Tools](https://www.bing.com/webmasters) (mismo sitemap; Bing alimenta a ChatGPT/Copilot).

Search Console te dice por qué búsquedas te encuentran, tu posición, y avisa errores de indexación.

## 4. Medir el tráfico que viene de LinkedIn (UTMs)

Cuando pegues un link de un post en LinkedIn, agregale parámetros UTM para que Analytics lo separe:

```
https://fernandourbano.ai/posts/pilotos-mueren-por-estrategia?utm_source=linkedin&utm_medium=post&utm_campaign=organico
```

- `utm_source=linkedin` → de dónde vino.
- `utm_medium=post` → post orgánico (vs. `ad` si algún día pagás).
- `utm_campaign=...` → para agrupar (ej. `lanzamiento`, `julio`).

En Vercel/GA vas a ver exactamente cuánto tráfico y qué posts trae LinkedIn.

### Tip clave de LinkedIn
Cuando compartas un link por primera vez y la tarjeta no se vea bien (o la cambiaste), pasala por el **[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)**: fuerza a LinkedIn a re-leer los OG tags y refresca la imagen/título/descripción cacheados.

## 5. SEO de contenido (lo que sí importa para vos)

- **Publicá seguido.** El sitio ya tiene la estructura; el tráfico orgánico crece con volumen y constancia de posts/ensayos.
- **Enlazado interno**: desde cada post enlazá al ensayo largo relacionado (ej. el post de pilotos → el ensayo de pilotos en `/ideas`). Google premia la profundidad temática y mantiene a la gente más tiempo.
- **Títulos con intención de búsqueda**: los ensayos ("por qué mueren los pilotos de IA") ya apuntan a cómo busca la gente. Seguí ese patrón.
- **Un tema, bien cubierto** (IA aplicada / agentes / anti-bluff) le dice a Google para qué sos autoridad. No dispersar.

## 6. SEM (pago) - honestidad

Dado que hoy querés **perfil bajo**, meter ads todavía no tiene sentido (y contradice el objetivo). La estrategia correcta ahora es **orgánico + LinkedIn**. Si en el futuro activás el ángulo comercial:

- **LinkedIn Ads** > Google Ads para tu audiencia (C-levels, organizadores de eventos). Podés promocionar un post concreto o hacer campañas de "thought leader ads".
- **Google Ads** solo si vas a captar por búsquedas específicas (ej. "speaker IA LATAM"). Caro y competido; no es tu prioridad.

## 7. Checklist apenas deployes

- [ ] Activar **Vercel Analytics** y **Speed Insights** en el dashboard del proyecto.
- [ ] Alta en **Google Search Console** + subir sitemap.
- [ ] Alta en **Bing Webmaster** + subir sitemap.
- [ ] Probar un link de post en el **LinkedIn Post Inspector** (que la tarjeta se vea bien).
- [ ] Usar **UTMs** en los links que compartas.
- [ ] (Opcional) Google Rich Results Test para validar el marcado.

## Herramientas mencionadas (todas con free tier)
- Vercel Analytics + Speed Insights (ya integradas)
- Google Search Console · Bing Webmaster Tools
- LinkedIn Post Inspector
- Google Rich Results Test
- (Opcionales) Plausible/Umami, Google Analytics 4, Ahrefs/Semrush (pagas, solo si escalás SEO en serio)
