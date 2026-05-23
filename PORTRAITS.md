# Sistema de retratos — Hero "Living Contact Sheet"

El hero de la home muestra 6 retratos tuyos en estilos artísticos distintos, rotando cada 7 segundos con crossfade + Ken Burns. Este documento tiene **todo lo que necesitás para generarlos con Nano Banana Pro** y reemplazar los placeholders.

---

## Workflow (3 pasos, 30 min)

### Paso 1 — Sacarte la foto base de referencia

Una sola foto, que vas a usar como referencia en TODOS los prompts. Esto garantiza que las 6 imágenes parezcan la misma persona aunque cambien de estilo.

**Spec de la foto base:**

- **Vos solo**, busto + cabeza, mirando a cámara o a 3/4
- **Fondo neutro** (pared blanca, gris claro, beige)
- **Luz suave y pareja** (cerca de una ventana grande, día nublado ideal)
- **Cara despejada**: sin gafas oscuras, sin gorro, expresión seria/neutra
- **Ropa lisa y sobria**: camisa o sweater color sólido oscuro o crema
- **Resolución mínima**: 2000×2666 px (3:4)
- **Formato**: JPG o PNG

Si tenés varias buenas, usá la que tenga **mejor luz en los ojos**. Es lo que va a vender el realismo de las variaciones.

### Paso 2 — Generar los 6 retratos en Nano Banana Pro

Abrí Nano Banana Pro (Gemini → "Image generation" → modelo `imagen-4` o "Nano Banana Pro"). Para cada uno de los 6 retratos:

1. **Subí la foto base como referencia** (botón de imagen de referencia o "Reference image").
2. **Pegá el prompt exacto** de la sección "Prompts" debajo.
3. **Aspect ratio**: `3:4` (portrait).
4. **Calidad / quality**: máxima disponible.
5. **Generá 4 variaciones** y quedate con la mejor.
6. **Descargá** en máxima resolución como JPG.

### Paso 3 — Reemplazar los placeholders

1. Renombrá cada JPG descargado con la convención exacta:
   - `01-cinematic.jpg`
   - `02-duotone.jpg`
   - `03-risograph.jpg`
   - `04-blueprint.jpg`
   - `05-motion.jpg`
   - `06-charcoal.jpg`
2. Movélos a `public/portraits/` (van a convivir con los `.svg` placeholders).
3. Abrí `src/content/portraits.ts` y para cada portrait cambiá:
   - `src: "/portraits/01-cinematic.svg"` → `src: "/portraits/01-cinematic.jpg"`
   - `isReal: false` → `isReal: true`
4. Recargá. Listo.

Si querés probar uno por uno antes de generar los seis, podés reemplazar solo el que tengas y dejar los otros como placeholder. El sistema sigue rotando bien.

---

## Los 6 prompts (copiar-pegar tal cual en Nano Banana Pro)

> **Importante:** en todos los prompts, mantené la **misma foto de referencia** subida. La parte que importa es el estilo, no la identidad.

### 01 · Cinematic editorial — "Speaker"

```
Editorial magazine-cover portrait of the person in the reference image,
photographed by Annie Leibovitz for Vanity Fair. He is mid-keynote on a
darkened stage, captured in a quiet moment between sentences. Single warm
teal key light from upper right, deep ink-black shadows on the left.
Wearing a structured charcoal blazer over a cream t-shirt, no tie. Background
is pitch black with a faint warm halo behind his shoulder. Shot on Hasselblad
H6D, 80mm lens, f/2.8, ISO 200. Slight 35mm film grain. Color palette
strictly limited to deep black, warm cream, and a single teal accent.
Composition: subject occupies center-right, leaving negative space on the
left for typography. 3:4 portrait orientation. Hyper-realistic, sharp on the
eyes, slightly soft on the edges. Mood: serious, composed, authoritative.
No text, no logos, no watermarks.
```

### 02 · High-contrast duotone — "Cover"

```
High-contrast duotone editorial portrait of the person in the reference
image, in the style of The Economist or Bloomberg Businessweek magazine
cover. Only two colors are used: a deep ink black (#0A0A0B) and a warm
cream (#F4EDE2), with a single teal accent (#E89B2A) reserved for a
geometric element behind the subject. Pose: three-quarter angle, looking
slightly off-camera with a steady, neutral expression. Hard, graphic
shadows that simplify the face into clear shapes. Background is a flat
field of cream above and ink below, with a thin teal horizontal line
crossing at neck height. No mid-tones, only pure dark and pure light
zones. Print-ready. High graphic abstraction while preserving facial
likeness. 3:4 portrait orientation. No text, no logos, no watermarks.
```

### 03 · Two-ink risograph — "Builder"

```
Two-ink risograph print of the person in the reference image. Use only
warm teal (#E89B2A) and ink black (#0A0A0B) inks on a natural cream paper
ground. Visible misregistration of about 4-6 pixels between the two ink
layers, creating that characteristic risograph offset. Halftone dot
texture clearly visible across the entire image, slightly varied dot
density to suggest shading. Pose: the subject is seated, leaning forward,
hands resting on a desk or keyboard, focused, mid-thought. Composition
references independent cultural posters and zines from Brooklyn / Mexico
City risograph studios. Imperfect, hand-made feel. Slight paper texture
behind everything. 3:4 portrait orientation. No text, no logos, no
watermarks.
```

### 04 · Cyanotype blueprint — "Architect"

```
Architectural blueprint / cyanotype-style portrait of the person in the
reference image. Background is a deep ink-blue (#0A1320) paper with a
fine technical grid overlay. The subject appears as a precise white line
drawing — a schematic technical illustration with measurement lines,
annotation arrows pointing to "head — node 01", "torso — 56cm", "anchor",
written in small monospaced uppercase teal text in the right margin.
Style references both 19th-century cyanotype photography and modern
technical CAD drawings. Subject is rendered with clean architectural
linework, not photographic shading. Composition: subject centered, with
white annotation lines extending to the right edge. Mood: precise,
intelligent, builder's hand. 3:4 portrait orientation. No floating UI
elements, no fake interface chrome. Only paper, grid, line drawing, and
margin annotations.
```

### 05 · Long-exposure motion — "In motion"

```
Editorial long-exposure photograph of the person in the reference image,
mid-gesture during a keynote. Captured at 1/4 second on a tripod, so his
face and torso are sharp and crisp, but his moving hand leaves a luminous
teal light trail across the frame, like a brushstroke of light from left
to right at chest height. The trail is warm teal fading into cream at
the edges. Background is near-black with subtle warm rim light on his
shoulder. Wearing a charcoal sweater or dark blazer. Shot on a Leica SL,
50mm Summilux, f/2, ISO 400. Slight 35mm film grain. The contrast
between the still face and the moving hand is the whole point of the
image — energy made visible. 3:4 portrait orientation. No text, no
logos, no watermarks.
```

### 06 · Charcoal illustration — "Op-Ed voice"

```
Hand-drawn charcoal portrait of the person in the reference image, in the
illustration style used by The New York Times for their op-ed columns
(Tom Bachtell / R. Kikuo Johnson / Cristiana Couceiro). Drawn on warm
cream textured paper with willow charcoal and a single white chalk
highlight on the cheekbone. Visible crosshatching for the shadow areas,
loose confident lines that suggest more than they describe. Subject's
expression is thoughtful, slightly stern, looking off-camera in
three-quarter view. Light hatching texture in the background suggests
atmosphere without being a literal background. Image should feel like
something a human illustrator drew in 90 minutes for a newspaper
deadline, not like a polished digital painting. Slight paper grain
visible across the entire image. 3:4 portrait orientation. No text, no
logos, no watermarks.
```

---

## Tips para que las 6 imágenes funcionen como sistema

- **Crop consistente**: pedile al modelo que mantenga la cabeza ocupando aproximadamente el mismo tamaño relativo en las 6 imágenes (regla: ojos al 35% desde arriba, hombros completos en cuadro).
- **Una sola foto de referencia**: no mezcles fotos base. Es la única forma de que las 6 imágenes parezcan la misma persona.
- **Pelo y barba constantes**: si tu foto base tiene barba de 3 días, las 6 deben tener barba de 3 días. Si tenés varias fotos en distintos cortes de pelo, elegí la del corte actual.
- **No mezcles ropa muy distinta**: dejá que el modelo varíe la ropa entre estilos (charcoal blazer vs sweater vs camisa), pero todo dentro de paleta sobria. Nada de logos visibles.
- **Si una variación queda débil**, regenerá esa sola. No tenés que regenerar las seis.

---

## Si querés agregar un 7º estilo más adelante

1. Generá la imagen y guardala en `public/portraits/07-mi-estilo.jpg`.
2. Agregá una entrada al final del array en `src/content/portraits.ts` siguiendo la misma forma.
3. Ajustá el ancho del contact sheet en `HeroManifestoArt.tsx` cambiando `grid-cols-6` por `grid-cols-7`.

El sistema escala bien hasta 8 retratos. Más que eso, conviene paginar.

---

## Estilos posibles adicionales (para futuras iteraciones, no para el lanzamiento)

Si en algún momento querés cambiar la flota:

- **Solarized film** — emulsión vencida, colores invertidos parciales.
- **Double-exposure con mapa de LATAM** — tu silueta rellena con el mapa del continente.
- **Renaissance reinterpretation** — retrato al óleo estilo Holbein, vos como mecenas moderno.
- **Polaroid SX-70 vintage** — instant film, marco blanco, fecha estampada.
- **Sketch arquitectónico isométrico** — vos como personaje de un drawing técnico.
- **Edición chiaroscuro / Caravaggio** — luz dramática puntual, todo lo demás en sombra absoluta.

Cada uno tiene su prompt — pedímelo cuando lo necesites.
