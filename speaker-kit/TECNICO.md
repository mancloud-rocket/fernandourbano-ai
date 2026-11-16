# Producción del speaker kit

16 de noviembre de 2026. Artefacto independiente dentro del repositorio existente `mancloud-rocket/fernandourbano-ai`, en rama `feat/speaker-kit-20261116`; sin modificaciones al frontend, rutas públicas, backend o despliegue. Los documentos funcional y técnico de esta carpeta son la continuidad de este entregable.

## Fuentes y decisiones

- Sitio público: https://fernandourbano-ai.vercel.app/ y `/prensa`; consultas HTTP exitosas. Press kit enlazado: `/press/press-kit.pdf`. Copia editorial fuente local `../press-kit-source.html`, contenidos `../src/content/es.ts`, retratos `../src/content/portraits.ts` y paleta `../src/app/globals.css`. El acceso web de extracción inicial falló; la recuperación HTTP directa permitió comprobar el contenido público.
- `estudios-por-tarea.md`, catálogo de estudios recuperados y entradas de criterio adaptativo visual/redacción: conservar conexiones del discurso y componer por función editorial. Skills art-director, PDF e imagegen: render, inspección y generación mediante herramienta integrada. No se implementó HTML/CSS/JS ni se activó un proyecto web nuevo.
- Se conserva negro #0A0A0B, marfil #F4EDE2, tipografía Fraunces/Geist del sitio y enfoque editorial. El acento del sitio es teal; se adapta a dorado #C7A66D por pedido explícito. No se atribuye el dorado al brand kit original.
- La fuente Fraunces se obtuvo del repositorio oficial google/fonts, se instanció como TTF estática y se incluye su licencia OFL. Geist se carga desde la dependencia Next instalada del proyecto.
- Bio redactada de nuevo desde el sitio y su press kit; se omiten cifras o interpretaciones dudosas del texto histórico, como la supuesta cantidad de personas elegidas por el premio. No se agregan experiencia ni certificaciones nuevas.

## Archivos y reproducción

`build.py` usa Python con reportlab, PyMuPDF y fontTools para componer tres PDFs, renderizar cinco PNG y empaquetar ZIP. Ejecutar `python speaker-kit/build.py` desde la raíz del sitio. La instanciación de la fuente está realizada y la fuente final se incluye en assets. Fotos de origen: `public/portraits/02.jpeg` y `05.jpeg`; se preservan sus copias en assets. La referencia institucional no se distribuye en el ZIP.

Retrato: herramienta integrada image_gen, sin CLI ni API externa configurada. Archivo guardado como `assets/fernando-urbano-retrato-ia.png`. Prompt íntegro en `PROMPT-RETRATO.txt`. Imagen generada vista e inspeccionada; no se afirma aprobación de semejanza. El ZIP y el PDF explican el origen de la imagen.

## Verificación y operación

Generación ejecutada con resultado exitoso. PDF reabierto: 3 páginas, cinco enlaces, texto extraíble en cada página. Se inspeccionaron el montaje de las tres páginas y ambas piezas finales; sin texto cortado o superpuesto observado. No corresponde compilar el sitio porque el cambio no afecta código ejecutado por Next. Kit general sin integración de datos o formularios. No requiere credenciales, servicios adicionales o planes pagos.

## Retrato actualizado con cuatro referencias

16 de noviembre de 2026. Fuente: cuatro archivos JPEG en Downloads llamados `WhatsApp Image 2026-11-16 at 11.11.59`, sin sufijo y con sufijos (1), (2), (3). Las cuatro imágenes se inspeccionaron antes de generar. Se enviaron conjuntamente a image_gen, priorizando las vistas frontales para identidad y las laterales para nariz y mandíbula. No se reutilizó el primer retrato como referencia. Prompt íntegro en `PROMPT-RETRATO-V2.txt`. Resultado visto: pelo y barba corta más cercanos a las referencias; la semejanza no se presenta como certificada ni exacta. Activo vigente `assets/fernando-urbano-retrato-ia-v2.png`; versión anterior preservada. Las cuatro fotos personales originales siguen en Downloads y no se añaden al ZIP ni al repositorio. Se actualizó el generador y se regeneró el paquete.
