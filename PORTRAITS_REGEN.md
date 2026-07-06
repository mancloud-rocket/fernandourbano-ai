# Regeneración de retratos — 2015 · 2018 · 2023 · 2025
## Guía + prompts largos para Nano Banana Pro (identidad estricta)

Estos cuatro capítulos de `/historia` se van a regenerar porque la cara no se parece lo suficiente a Fernando. Este documento reemplaza, solo para estos cuatro, los prompts del doc grande `PORTRAITS_STORY.md`. Mantiene el mismo sistema visual (Editorial Night · Salgado B&N / Portra color) pero con **bloque de identidad reforzado y afinado para Nano Banana Pro**.

Archivos a reemplazar al final (JPEG calidad 92+, `public/story/`):
`03-bw.jpeg` · `03-color.jpeg` · `05-bw.jpeg` · `05-color.jpeg` · `07-bw.jpeg` · `07-color.jpeg` · `10-bw.jpeg` · `10-color.jpeg`

---

## 1. Cómo lograr que se parezca a vos (Nano Banana Pro)

Nano Banana Pro (Gemini 3 Pro Image) es muy fuerte en **consistencia de identidad a partir de fotos de referencia**. La cara la fija la referencia, no el texto. El texto describe la escena y bloquea que el modelo "promedie" tus rasgos.

**Referencias que tenés que subir (lo más importante):**
1. **2 o 3 fotos tuyas actuales, nítidas, buena luz**, cara ocupando buena parte del cuadro:
   - una **frontal** mirando a cámara,
   - una a **3/4** (cara girada ~30°),
   - opcional una de **perfil**.
   Evitá: lentes de sol, gorra, sombras duras que tapen media cara, filtros de Instagram, fotos grupales, baja resolución.
2. **Para 2015 y 2018 (18 y 21 años): usá tus fotos reales de joven como referencia principal.** El rejuvenecimiento por IA sale mal, así que le damos la cara ya joven y le pedimos que **NO cambie la edad ni la cara, solo la escena**. Subí 1 o 2 de tus fotos de esa época como referencia y usá los prompts "keep face / change scene" de los capítulos 03 y 05 (reescritos abajo con ese enfoque).
   - **2015 (18, lampiño):** usá las fotos donde estás **sin barba** (las dos más jóvenes).
   - **2018 (21, stubble):** usá la foto con **barba corta / incipiente**.
   - Tip: elegí una referencia donde la cara esté **bien iluminada y de frente o 3/4**; la sonrisa no importa, el prompt le pide relajarla a expresión editorial.

**Cómo prompteás (flujo):**
1. Subí las referencias como *imágenes*, no como texto.
2. Pegá el prompt del capítulo (primero el de **Black & White**).
3. Fijá **aspect ratio 3:4** (vertical). En Nano Banana Pro podés indicarlo por texto ("3:4 vertical portrait") y/o en el selector de proporción.
4. Pedí **resolución alta** (2K o 4K si te deja).
5. Generá y mirá la cara. Si se desvía, **no empieces de cero**: seguí la conversación con:
   > "Keep the exact same scene, lighting and composition, but make the face match the reference photos more precisely: same eyes, same nose, same jaw, same beard. Same person."
6. Cuando la BN te guste, generá la de **color en el mismo hilo** y decile:
   > "Now the exact same portrait, same face and same framing, but in color as described below" + pegás el prompt de color. Así la cara no cambia entre BN y color.

**Ojo con Nano Banana Pro:** no usa "negative prompt" como campo aparte. Las prohibiciones van **dentro del prompt** (ya están al final de cada uno, en la línea "Avoid:").

**Test de aprobación (hacelo siempre):** si un familiar tuyo, viendo la imagen sin contexto, no dice "ese es Fernando" en 2 segundos, regenerá. No la subas por "quedó linda": tiene que ser tu cara.

---

## 1b. Si la cara no se parece (esto pasa: plan B)

Cuando el prompt de escena es largo, el modelo "resuelve la escena" y te inventa una cara genérica. Tres palancas, de la más potente a la de apoyo:

**Palanca 1 - Recortá la referencia a solo tu cara.** Antes de subirla, cortá la selfie para que quede **cabeza y hombros, tu cara ocupando casi todo el cuadro**, sin el fondo del galpón ni la persona de al lado. Menos ruido = más señal de identidad. Esto solo ya cambia todo.

**Palanca 2 (la mejor) - Face-swap sobre la imagen que ya te gustó.** Si la escena/ropa/luz de una generación quedó bien pero la cara no, no regeneres de cero: usá esa misma imagen y pegale tu cara. Subí **2 imágenes**: (1) la imagen generada que te gustó, (2) el recorte de tu cara real de joven. Prompt:

```
Te doy dos imágenes. La Imagen 1 es un retrato editorial en blanco y negro con la escena, la ropa y la luz que quiero: mantenela EXACTAMENTE igual (misma composición, misma ropa, mismo fondo, misma luz, mismo blanco y negro con grano de película). La Imagen 2 es la cara real de la persona que tiene que aparecer en ese retrato. Reemplazá la cara y la cabeza de la Imagen 1 por la cara EXACTA de la persona de la Imagen 2: sus ojos, cejas, nariz, boca, mandíbula, forma de cara y línea del pelo reales. El resultado tiene que ser inconfundiblemente esa persona específica, no un joven parecido. Ajustá el ángulo de la cabeza y la luz para que calce natural con la Imagen 1. Expresión calma, boca cerrada.
```

**Palanca 3 - Enmarcá el pedido como EDICIÓN de tu foto, no como generación nueva.** Subí el recorte de tu cara y arrancá el prompt tratándolo como "esta es mi foto, editala":

```
Esta es una foto real mía. Mantené mi cara 100% idéntica: no cambies mis ojos, cejas, nariz, boca, mandíbula, forma de cara ni línea del pelo, no me hagas más viejo ni más lindo. Cambiá SOLO la escena a mi alrededor: ponme en [escena], con [ropa], con [luz], como retrato editorial en blanco y negro, película 35mm, 3:4. Relajá mi expresión a calma y boca cerrada. Tiene que ser claramente yo.
```

Regla general: **cuanto más corto y directo el prompt, mejor se preserva la cara.** Si tenés que elegir entre una escena rica y tu cara, ganá la cara: recortá el prompt de escena a lo mínimo.

---

## 2. Bloque de identidad (va calcado al inicio de cada prompt)

> **IDENTITY LOCK — NON-NEGOTIABLE.** The person in this image IS the individual in the uploaded reference photo(s). Reproduce their exact facial identity, not a lookalike, not an averaged AI face, not a generic young Latin American professional. Preserve, matched to the reference: inter-pupillary distance; eye shape, tilt and iris color; eyebrow shape and density; nose bridge width, tip and nostril shape; philtrum length; upper-to-lower lip ratio and resting mouth width; cheekbone height and face width; jaw angle and chin projection; ear shape; hairline contour; and the exact beard pattern of the reference (if the reference is clean-shaven, stay clean-shaven; never invent a fuller beard). Skin tone: the same warm olive as the reference, identical on the facial features regardless of scene lighting.

Cada capítulo agrega abajo un bloque **AGE** (cuántos años tiene y qué cambia) y luego la **escena**.

---

# CAPÍTULO 03 · 2015 · eLace Media Services, Montevideo
**18 años.** Primer trabajo. Primera camisa formal sobre jeans. Orgullo nuevo, todavía algo de timidez.

### Black & White

```
REFERENCE IS THE FACE — NON-NEGOTIABLE. The uploaded photo(s) are real photos of this exact person as a young man. Keep his face EXACTLY as in the reference: the same young age, the same face shape, eyes, eyebrows, nose, lips, jaw, cheekbones, hairline, hair, and the same facial-hair state (clean-shaven, as in the reference — do NOT add or thicken a beard). Do NOT age him, do NOT make him look older or more mature, do NOT slim, widen or beautify the face. The ONLY thing you change is the SCENE around this face: wardrobe, setting, framing, lighting and film look. Change his expression from the selfie smile to a calm, closed-mouth, direct editorial gaze — same person, same age, just not smiling.

SCENE — Documentary black-and-white editorial portrait, Montevideo, Uruguay, 2015, inside a small Uruguayan tech company office (eLace Media Services). Tight portrait: head and upper chest fill about 70% of the frame, face centered slightly right, eyes on the upper third. Three-quarter angle to camera, leaning lightly on the edge of a desk, arms loosely crossed. He wears a charcoal button-up shirt, top button open, sleeves rolled once over the forearm — the first formal shirt of someone who just left high school. Background softly out of focus: a blurred server rack on the left, faint whiteboard smudges on the right, no readable text anywhere.

PHOTOGRAPHY — Shot on Kodak Tri-X 400, 85mm prime at f/2.5, gentle 35mm grain, high but natural contrast. Single window as key light from the left giving a soft rim on the cheekbone, low fluorescent office fill on the shadow side. Deep blacks in the shadows, luminous cream highlights on the lit cheek. 3:4 vertical portrait.

Avoid: making him look older or more mature than the reference, adding or thickening a beard, changing his face shape or age, beautifying or slimming the face, text, logos, watermarks, floating UI or code on screens, sunglasses, wide smile with teeth, posed thumbs-up, a different or generic face.
```

### Color

```
REFERENCE IS THE FACE — NON-NEGOTIABLE. Keep the same young face exactly as in the uploaded reference and as the black-and-white version of this chapter: same age, eyes, nose, lips, jaw, cheekbones, hairline and clean-shaven facial-hair state. Do NOT age him or add a beard. Only the color grade and scene change — zero face drift between the two versions. Skin tone: same warm olive as the reference on the facial features, not shifted by scene lighting.

SCENE — Documentary color editorial portrait, Montevideo, Uruguay, 2015, same framing and pose as the black-and-white version: tight head-and-chest portrait, face centered-right, leaning on a desk, arms loosely crossed, charcoal button-up with sleeves rolled once, calm closed-mouth expression.

COLOR — Restrained palette aligned to the brand: charcoal shirt, faded indigo jeans at the waist, cream walls (#F4EDE2), deep ink-black shadows (#0A0A0B). A single small electric-teal LED (#3DEDE8) glowing in the blurred server rack is the ONLY saturated accent in the frame. Everything else stays neutral. Warm-neutral key light on the face, cool fill only in the shadows and never on the facial features.

PHOTOGRAPHY — Kodak Portra 400, 85mm at f/2.5, subtle grain, natural skin. 3:4 vertical portrait.

Avoid: making him look older or more mature than the reference, adding or thickening a beard, changing his face shape or age, beautifying or slimming the face, text, logos, watermarks, extra saturated colors, RGB keyboards, glowing code, sunglasses, wide smile, a different or generic face.
```

---

# CAPÍTULO 05 · 2018 · Regional · LATAM
**21 años.** Primera jefatura regional. Frente a un pizarrón con flujos de proceso a mano, marker en la mano. Autoridad recién aprendida.

### Black & White

```
REFERENCE IS THE FACE — NON-NEGOTIABLE. The uploaded photo(s) are real photos of this exact person as a young man (around 21). Keep his face EXACTLY as in the reference: same young age, face shape, eyes, eyebrows, nose, lips, jaw, cheekbones, hairline, hair, and the same facial-hair state — short, light stubble as in the reference; do NOT grow it into a full or barber-defined adult beard. Do NOT age him, do NOT make him older or more mature, do NOT slim, widen or beautify the face. The ONLY thing you change is the SCENE around this face: wardrobe, setting, framing, lighting and film look. Change his expression from the selfie smile to a calm, closed-mouth, focused editorial gaze — same person, same age, just not smiling.

SCENE — Editorial black-and-white photograph, a regional Latin American office, 2018. TIGHT portrait: face and shoulders dominate about 65% of the frame; the whiteboard is a soft background on the right, never competing with the face. Three-quarter angle, head turned to camera, a marker held low in the right hand. He wears a dark grey crew-neck over a cream collar. On the whiteboard behind: abstract process flows, arrows and swimlanes — zero readable words. Expression: focused, mouth closed, the eyes of someone mid-explanation, quietly holding new authority.

PHOTOGRAPHY — Kodak Tri-X 400, 50mm at f/2.8, gentle chiaroscuro. Window light from the left, warm fill from the right. Deep ink-black shadows beyond the whiteboard. 3:4 vertical portrait.

Avoid: making him look older or more mature than the reference, growing a full or barber-lined adult beard, changing his face shape or age, beautifying or slimming the face, text, logos, watermarks, readable words on the whiteboard, rainbow markers, sunglasses, smile with teeth, a different or generic face.
```

### Color

```
REFERENCE IS THE FACE — NON-NEGOTIABLE. Keep the same young face exactly as in the uploaded reference and as the chapter 05 black-and-white output: same age, eyes, nose, lips, jaw, cheekbones, hairline and the same short light-stubble facial-hair state. Do NOT age him or grow a full beard. Only the color grade and scene change — zero face drift between the two versions. Skin tone: same warm olive as the reference on the facial features.

SCENE — Editorial color photograph, regional LATAM office, 2018, same tight head-and-shoulders framing and pose as the black-and-white version: three-quarter to camera, marker low in the right hand, dark grey crew-neck over a cream collar, abstract process flows on the whiteboard behind, calm closed-mouth expression.

COLOR — Cool window light on the left cheek, a warm-neutral fill from overhead on the right — lighting only, never reshaping the face. Whiteboard cream-white with black marker texture. A single electric-teal accent (#3DEDE8) — a small device LED or a thin light line on the wall — as the only saturated note. Deep ink-black shadow (#0A0A0B) beyond the whiteboard. Skin tone matches the reference in both versions.

PHOTOGRAPHY — Kodak Portra 400, 50mm at f/2.8, subtle grain. 3:4 vertical portrait.

Avoid: making him older or more mature than the reference, growing a full or barber-lined beard, changing his face shape or age, beautifying or slimming the face, text, logos, watermarks, post-its, rainbow markers, extra saturated colors, smile, a different or generic face.
```

---

# CAPÍTULO 07 · 2023 · Santiago de Chile
**26 años.** Head of Engineering Chile. Sala de reuniones de vidrio, de noche. Chiaroscuro. Detrás, siluetas desenfocadas del equipo. El instante de soledad después de tomar una decisión.

### Black & White

```
IDENTITY LOCK — NON-NEGOTIABLE. The person in this image IS the individual in the uploaded reference photo(s), at 26 years old — the same face, not a lookalike, not an averaged AI face. Preserve, matched to the reference: inter-pupillary distance; eye shape, tilt and iris color; eyebrow shape and density; nose bridge width, tip and nostril shape; philtrum length; upper-to-lower lip ratio and resting mouth width; cheekbone height and face width; jaw angle and chin projection; ear shape; hairline contour; and the exact beard pattern of the reference. Skin tone: the same warm olive as the reference on the facial features, regardless of the dramatic lighting.

AGE — 26 years old: essentially the current adult face of the reference. Fully defined adult features, short well-kept beard matched to the reference pattern, hair with intent. Do not add years, do not soften into a younger face, do not restyle the beard away from the reference.

SCENE — Editorial black-and-white photograph, Santiago de Chile, 2023, inside a modern glass-walled meeting room at night. He stands in the foreground, three-quarter angle, hands resting in his trouser pockets, body composed and still. Behind him, two or three softly blurred silhouettes of team members turned slightly away, deep in their own conversation, while he stands in a solitary moment of thought between interactions. He wears a fitted dark charcoal sweater over a collared shirt, no tie. Through the floor-to-ceiling windows behind, Santiago at night: scattered building lights melted into out-of-focus bokeh circles.

PHOTOGRAPHY — Kodak Tri-X 400 pushed to 1600 for the low light, 85mm at f/1.8, soft shallow focus on his face, painterly grain. Light: a single warm pendant lamp above the meeting table creates a pool of light; his face caught half in light, half in shadow — Caravaggio chiaroscuro in a glass office. Composition: subject in the left third, blurred team in the right third, a deep dark gap in the middle separating the leader from the group. Mood: calm authority, the silent moment after a decision. 3:4 vertical portrait.

Avoid: text, logos, watermarks, readable screens, blue laptop glow, neon signs, sunglasses, wide smile, a different or generic face.
```

### Color

```
IDENTITY LOCK — NON-NEGOTIABLE. Same individual and exact facial proportions as the reference and as the chapter 07 black-and-white output. Zero identity drift between the two passes. Same eyes, nose, lips, jaw, cheekbones, hairline and beard at age 26. Skin tone: same warm olive as the reference on the facial features.

SCENE — Editorial color photograph, Santiago de Chile, 2023, same composition and pose as the black-and-white version: subject in the left third, hands in pockets, blurred team silhouettes to the right, glass meeting room at night.

COLOR — Only two color temperatures in the frame: a dominant warm amber pendant light (#E89B2A) carving him out of the darkness, and deep ink-black shadow (#0A0A0B) everywhere else. Through the windows, the city lights are tiny warm amber and cream bokeh points (Santiago at night). His sweater is charcoal grey, the collar beneath is cream. The two team silhouettes wear neutral dark tones. The night sky is pure ink-black with no stars. A single faint electric-teal reflection (#3DEDE8) on the glass edge is allowed as the one cool anchor, very low saturation.

PHOTOGRAPHY — Kodak Portra 800, 85mm at f/1.8, low-light grain. 3:4 vertical portrait.

Avoid: text, logos, watermarks, blue screen glow, green exit signs, extra saturated colors, smile, a different or generic face.
```

---

# CAPÍTULO 10 · 2025 · Madrid / Global
**28 años.** Head of Agentic AI. Estudio editorial controlado, fondo casi negro, una sola luz cálida. Retrato de portada de la era agéntica — la imagen más "de marca" de la serie.

### Black & White

```
IDENTITY LOCK — NON-NEGOTIABLE. The person in this image IS the individual in the uploaded reference photo(s), at 28 years old — the current adult face, reproduced exactly, not a lookalike, not an averaged AI face. Because this is a clean studio portrait with nothing to hide behind, the likeness must be perfect. Preserve, matched to the reference: inter-pupillary distance; eye shape, tilt and iris color; eyebrow shape and density; nose bridge width, tip and nostril shape; philtrum length; upper-to-lower lip ratio and resting mouth width; cheekbone height and face width; jaw angle and chin projection; ear shape; hairline contour; and the exact beard pattern of the reference. Skin tone: the same warm olive as the reference on the lit side; the shadow side stays deep but never changes his ethnicity or features.

AGE — 28 years old: the reference face as it is today. Do not de-age, do not restyle the beard, do not slim or widen the face. This is a direct, honest portrait of the real person.

SCENE — Editorial studio black-and-white portrait, 2025. Photographed from the chest up, body angled three-quarter to camera, face turned slightly more toward the lens, eyes calm and observant, looking near the lens. He wears a fitted pure-black turtleneck — no jacket, no collar, the simplest possible silhouette. Hands not visible. Background: pure ink-black editorial void with an extremely subtle paper-grain texture, not a literal backdrop.

PHOTOGRAPHY — Medium-format editorial look (Hasselblad / Mamiya RZ67 feel), 80mm portrait lens at f/2.8, almost no grain, painterly deep tonality. Light: a single key light from the upper right at 45 degrees creates a classic Rembrandt triangle on the far cheek; the shadow side falls into near-pure black with no fill; a subtle hair light separates the head from the black background. Avedon-style isolated subject, central vertical axis, the figure carved out of darkness by one light. Mood: composed authority, the portrait that fronts a long-form magazine profile. 3:4 vertical portrait.

Avoid: text, logos, watermarks, floating UI, sunglasses, wide smile, plastic beautified skin, a different or generic face.
```

### Color

```
IDENTITY LOCK — NON-NEGOTIABLE. Same individual and exact facial proportions as the reference and as the chapter 10 black-and-white output. Zero identity drift. Same eyes, nose, lips, jaw, cheekbones, hairline and beard at age 28. Skin tone: same warm olive as the reference on the lit side.

SCENE — Editorial studio color portrait, 2025, same composition and pose as the black-and-white version: chest-up, three-quarter body, face slightly toward the lens, fitted pure-black turtleneck, hands not visible, pure ink-black background.

COLOR — Extremely restrained, almost monochromatic — this is the most branded image of the series, the website palette translated to a human face. A single warm amber key light (#E89B2A) caresses the right side of the face and shoulder into a luminous warm halo; the shadow side falls into pure ink-black (#0A0A0B). The turtleneck is matte black with no sheen. A single faint electric-teal hair light (#3DEDE8) catches the top of the head and the edge of one shoulder — barely perceptible, anchoring the brand palette. The whole frame is essentially three values: ink black, warm cream skin lit by amber, and the amber light itself.

PHOTOGRAPHY — Hasselblad H6D or equivalent, 80mm at f/2.8, near-zero grain, rich tonality. 3:4 vertical portrait.

Avoid: text, logos, watermarks, extra saturated colors, sheen on the turtleneck, sunglasses, smile, beautified skin, a different or generic face.
```

---

## 3. Después de generar

1. Elegí la mejor de cada par (BN y color) con caras **idénticas** entre sí.
2. Exportá JPEG calidad 92+, orientación 3:4 vertical.
3. Renombralas exactamente: `03-bw.jpeg`, `03-color.jpeg`, `05-bw.jpeg`, `05-color.jpeg`, `07-bw.jpeg`, `07-color.jpeg`, `10-bw.jpeg`, `10-color.jpeg`.
4. Pegalas en `public/story/` reemplazando las actuales. La web las toma automáticamente (no hay que tocar código).
5. Avisame y verifico que se vean bien en `/historia` (reveal BN → color).
