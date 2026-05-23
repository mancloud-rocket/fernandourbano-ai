# Identidad Visual — Fernando Urbano
## Brief de logo para Nano Banana Pro

Sistema de marca personal. Debe convivir con un sitio editorial sobre fondo negro tinta y acento teal eléctrico.

---

## 1. Concepto

**Nickname:** "Mancloud" — la nube y el humano operan juntos. Estrategia humana sobre infraestructura distribuida.

**Iniciales:** F + U → potencial para isologo monograma.

**Posicionamiento:** voz LATAM/Iberia sobre IA aplicada, sin bluff. Editorial, no startup. Senior, no juvenil.

**No debe parecer:**
- Logo genérico de SaaS de IA (átomos, chips, redes neuronales abstractas)
- Nube de Office 365 / WeatherChannel
- Persona feliz con auriculares mirando una pantalla
- Robot/humanoide
- Gradiente púrpura → azul
- Cursive "founder" handwriting

**Debe parecer:**
- Marca de revista de negocios (The Economist, MIT Tech Review, Monocle)
- Sello editorial, no aplicación
- Confianza calmada, no entusiasmo

---

## 2. Sistema visual

| Elemento | Especificación |
|---------|----------------|
| **Fondo principal** | Ink black `#0A0A0B` |
| **Trazo / fill principal** | Cream `#F4EDE2` |
| **Acento (uso muy restringido)** | Electric teal `#3DEDE8` |
| **Estilo** | Monoline geométrico, peso constante 2–3 px relativo, esquinas ligeramente vivas, sin sombras, sin degradados |
| **Construcción** | Sobre grilla cuadrada, proporciones euclidianas claras (cuadrado/círculo/triángulo) |
| **Formato base** | SVG vectorial, exportable a 1:1 (avatar), 3:1 (header), favicon 32x32 |

---

## 3. Tres rutas exploratorias

Generá las **tres** variantes y elegimos juntos. Cada una resuelve el brief de forma distinta.

### Ruta A — "Mancloud monograma"
F+U construidas como una sola forma. La curva superior de la F y la base de la U sugieren la silueta de una nube. La intersección F/U es donde "vive" el humano. Sello editorial, lectura inmediata.

### Ruta B — "Horizonte agéntico"
Una nube minimalista (3 arcos solapados) sobre una línea horizontal que representa el horizonte / la operación. Debajo de la línea, una silueta humana abstracta (cabeza + hombros). La nube no domina al humano; el humano sostiene a la nube. Marca de identidad blanda (no monograma).

### Ruta C — "FU plate"
Sello tipográfico editorial: F + U sobre dos líneas, separadas por una hairline. Estilo "plate number" de revista (Plate 01, Plate 02). Es la opción más restrained y la más fácil de aplicar a favicon / firma de email.

---

## 4. Prompts para Nano Banana Pro

### Notas de uso

- Generá cada ruta como **vector flat SVG-style PNG** a 2048×2048 sobre fondo ink black `#0A0A0B`.
- También pedí una versión sobre fondo cream `#F4EDE2` para usar en documentos / impresos.
- Si Nano Banana ofrece "logo mode" o "vector mode", activalo.
- **Negative prompt universal:** `photographic, 3d render, gradient, drop shadow, lens flare, mascot, cartoon character, robot, AI cliche brain, neural network nodes, blockchain hexagons, generic cloud icon, weather app, kawaii, glow effect, neon, chrome, bevel, emboss, stock logo`
- Generá 4 variaciones por prompt y elegimos.

---

### RUTA A · Mancloud monograma (isologo principal recomendado)

```
Minimalist editorial monogram logo combining the capital letters F and U into a single continuous monoline mark. The top horizontal stroke of the F is gently lengthened and curved to form the silhouette of a stylized cloud composed of three overlapping arcs. The U sits inside or beneath the F, sharing its vertical stem, so the two letters read simultaneously as F, U, and a cloud-and-figure pictogram. The intersection of F and U forms a small empty circular eye — the human presence inside the cloud, like a Bauhaus geometric mark. Construction: built on a perfect square grid, geometric primitives only (circles, straight lines, single-radius arcs), constant stroke weight approximately 1/8 of the mark height, sharp open terminals, no curves outside the cloud arcs. Color: cream `#F4EDE2` mark on ink black `#0A0A0B` background, no gradient, no shadow, no third color. Style references: Massimo Vignelli, Otl Aicher, Lance Wyman 1968, Pentagram monograms — geometric, timeless, editorial. Output as a clean centered logomark, generous negative space, vector-flat appearance. 2048×2048 square format. No text other than the F/U construction itself. No background pattern. No watermarks, no signatures, no decorative flourishes.
```

**Variante color (para hover en sitio):** repetir el prompt y agregar al final:

```
Variant: same exact construction, but the small inner eye-circle and one single horizontal stroke are filled with electric teal `#3DEDE8` (other strokes remain cream). The teal acts as a single signal point of color, not decoration. All other rules unchanged.
```

---

### RUTA B · Horizonte agéntico (marca blanda, alternativa)

```
Minimalist editorial brand mark depicting the silhouette of a stylized cloud composed of three overlapping smooth arcs, floating above a single thin horizontal line that spans the full width of the mark. Beneath the horizontal line, a very abstract human silhouette: a perfect small circle (head) connected to a shallow trapezoidal shoulder line, centered under the cloud. The cloud is NOT larger than the human silhouette — they are visually balanced, suggesting partnership not dominance. The horizontal line between cloud and human is a hairline 1 pixel weight; the cloud and figure share the same heavier monoline weight. Construction: built on a perfect square grid, only geometric primitives (circles, arcs, straight horizontal/vertical lines). No facial features, no fingers, no expressive details — pure pictogram in the tradition of ISOTYPE / Otto Neurath and modern airport signage. Color: cream `#F4EDE2` on ink black `#0A0A0B`, no gradient, no shadow, single flat color mark. Style references: Lance Wyman, Bruno Munari, Saul Bass minimal logos, Pentagram editorial marks. Output centered on a 2048×2048 square canvas with generous negative space. No text, no watermark, no signature, no decorative elements.
```

**Variante color:**

```
Variant: same construction, but the small head-circle of the human silhouette is filled solid in electric teal `#3DEDE8`. All other strokes remain cream. The teal eye-dot signals the human presence inside the agentic system.
```

---

### RUTA C · FU Plate (sello tipográfico editorial)

```
Editorial typographic logo for a personal brand. Two characters, F and U, set in a high-contrast modern serif typeface inspired by Fraunces or Tiempos Headline, weight medium, optical size large. The letters are stacked vertically: F on top, U directly below, perfectly center-aligned, separated by a single thin horizontal hairline rule. The hairline is exactly the width of the widest letter. Above and below the entire mark, two additional very small monospaced uppercase labels in cream: above the F the word "PLATE" and below the U the word "FU-2026" — both treated as editorial caption type, font size 1/8 of the main letters, generous letter-spacing approximately 0.22em. The overall composition reads as a magazine plate or museum specimen card. Construction: built on a 12-column grid, every alignment intentional, generous margins of empty space around the mark forming a clear protected zone. Color: cream `#F4EDE2` typography and hairline on ink black `#0A0A0B` background, no third color, no gradient, no shadow. Style references: Pentagram editorial covers, Wim Crouwel grid systems, Massimo Vignelli, Helvetica Now combined with classical serif — restrained museum-grade typography. Output centered on a 2048×2048 square canvas. Sharp vector-flat rendering. No additional ornament, no flourish, no watermark.
```

---

### Logo horizontal completo (todas las rutas)

Después de elegir la ruta, generamos la versión **logotipo horizontal** (mark + nombre):

```
Horizontal lockup logo. On the left: the chosen monogram mark from [RUTA ELEGIDA], at fixed size. On the right, separated by a vertical hairline divider exactly the height of the mark and a generous gap of negative space equal to half the mark width: the full name "Fernando Urbano" set in a high-contrast modern serif (Fraunces or similar) at medium weight, two words on a single line, optically aligned to the visual center of the mark. Below the name, in monospaced uppercase microtype at 1/8 of the name height with 0.22em letter-spacing, the tagline "IA SIN BLUFF" in cream. Color: cream `#F4EDE2` on ink black `#0A0A0B`, no third color. Construction: horizontal aspect ratio approximately 4:1 (e.g. 2400×600). The lockup must read clearly even when scaled down to 200px wide. Style references: editorial nameplates of The Atlantic, MIT Technology Review, Monocle. No drop shadow, no gradient, no decorative element. Centered on a horizontal canvas with at least 1x mark-height padding on every side.
```

---

### Favicon / app icon

```
Square app icon, 1024×1024, designed to remain legible at 16×16 favicon size. Center: the simplified mark from [RUTA ELEGIDA], slightly thicker stroke weight than the full logo (approximately 1.4x) so it survives extreme downscaling. Background: solid ink black `#0A0A0B`. Mark: cream `#F4EDE2`. A 1px electric teal `#3DEDE8` hairline border traces the outer edge of the square at exactly 8% inset from the canvas edges — the only color accent. No rounded corners (the OS adds them). No additional ornament, no text, no tagline, no signature. Pure silhouette mark, generous padding (mark occupies 60% of canvas).
```

---

## 5. Validaciones que vamos a hacer juntos

Una vez generados:

1. **Test de favicon**: escalar a 32×32 y 16×16. ¿Sigue siendo legible? Si no, la ruta no sirve.
2. **Test de blanco/negro**: invertir colores. ¿Funciona también con mark ink black sobre fondo cream?
3. **Test de avatar circular**: si lo recortan en círculo (LinkedIn, X), ¿sigue funcionando?
4. **Test de tipografía**: cuando convive con Fraunces del sitio, ¿hay coherencia visual?
5. **Test de fotocopia mental**: ¿lo podrías describir por teléfono a un diseñador? Si necesitás más de una frase, es demasiado complejo.

---

## 6. Entregables finales esperados

Cuando elijamos la ruta y la versión definitiva, necesitamos:

```
/logo/
  mark.svg              -> isologo en SVG (vectorial real)
  mark-cream.svg
  mark-teal.svg
  mark-ink.svg          -> versión inversa (mark ink sobre fondo cream)
  lockup-horizontal.svg
  favicon.ico           -> 16/32/48 multi-size
  apple-touch-icon.png  -> 180×180
  og-mark.png           -> 1200×630 para previews
```

El SVG real (vectorial) probablemente lo armemos a mano o con un tracer a partir del PNG de Nano Banana — el modelo entrega rasterizado, no vector verdadero.

---

## 7. Mi recomendación

**Empezar por Ruta A (Mancloud monograma).** Es la que mejor cumple los tres requisitos a la vez:

1. **Conceptual:** une "F + U + cloud + figura humana" en una sola forma.
2. **Funcional:** es un monograma, escala a favicon, funciona en círculo.
3. **Editorial:** se siente de revista, no de SaaS.

Si Ruta A no termina de convencer, Ruta C es el "safe bet" más sobrio. Ruta B es la más narrativa pero también la más difícil de aplicar en pequeño.
