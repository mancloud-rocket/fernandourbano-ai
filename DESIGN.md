# Dirección del sitio personal

## Ensayo visual de ciberseguridad

Actualizado el 21 de septiembre de 2026.

La pieza `tu-estrategia-de-ciberseguridad` se construyó como un ensayo visual dentro de `/ideas/`. La idea rectora es una oficina que cambia durante la lectura: primero revela el trabajo necesario para proteger infraestructura propia, después pierde sus herramientas a fuerza de prohibiciones y finalmente recupera un camino operativo con controles visibles.

El informe con entrega el miércoles conecta la historia completa. Aparece como un objeto secundario al comienzo, permanece durante la semana de prohibiciones y ocupa el centro del cierre.

El sistema de ilustración se resolvió como un archivo de láminas forenses. Cada escena es un espacio completo en perspectiva con arquitectura, mobiliario, personas, dispositivos, cableado, materiales, luz, sombras, tramas, marcas de registro y anotaciones de expediente. La oficina, el cuarto de servidores, el centro de datos y los mapas de flujo pertenecen al mismo mundo material. El teal identifica capacidad y caminos habilitados; el rojo identifica riesgo, bloqueo o deuda. El papel cálido conserva el informe como objeto narrativo.
### Huella

- Topología: hero editorial, diez capítulos con escena fija y párrafos que activan estados, fuentes y cierre para compartir.
- Lectura: columna de 55 a 65 caracteres; las frases de giro ganan escala sin sustituir el cuerpo del texto.
- Movimiento: GSAP ScrollTrigger decide el paso activo; Motion revela capas, recorre rutas y desplaza evidencia dentro del SVG; CSS resuelve estructura, materiales y estados quietos. El movimiento evita rebotes decorativos y se concentra en relaciones, recorridos y cambios de estado.
- Responsive: en móvil la ilustración ocupa una franja fija superior y el párrafo activo aparece debajo como unidad legible.
- Accesibilidad: texto completo en HTML, escenas decorativas fuera del árbol accesible, foco visible, modo manual sin animaciones y respeto por `prefers-reduced-motion`.
- Rendimiento: sólo se animan transformaciones, opacidad y trazos SVG. La profundidad proviene de geometría, gradientes, filtros y composición vectorial propia. No hay video, 3D, canvas ni recursos visuales externos.

### Contenido

El manuscrito, sus fuentes y la secuencia viven en `src/content/cybersecurityEssay.ts`. El componente visual especial se activa desde la ruta normal de artículos para conservar sitemap, metadatos y el índice de Ideas.

La versión inglesa del índice señala que el ensayo está disponible en español. La ruta inglesa conserva el contenido español con `lang="es"` hasta que exista una traducción editorial revisada.

## Esquema equivalente en Rocketbot Suite

La experiencia pública sigue fuera de la suite porque Next.js y Vercel resuelven mejor el render indexable, los metadatos sociales y la animación de navegador. Una implementación editorial sobre Rocketbot quedaría así:

- **Nexus:** consola editorial para cargar manuscrito, fuentes, orden de escenas y estado de publicación. Ahí entra Fernando para revisar y aprobar.
- **SAT001 · Validar ensayo:** recibe el borrador aprobado, comprueba título, slug, fuentes, texto alternativo, metadatos y versión móvil.
- **SAT002 · Solicitar publicación:** crea el cambio versionado en el repositorio y espera la validación del despliegue.
- **Orchestrator:** guarda credenciales de GitHub/Vercel, agenda ejecuciones y registra resultado, duración y errores de `SAT001` y `SAT002`.
- **AI Studio:** opcional para proponer resúmenes y metadatos. Ningún texto se publica sin aprobación humana.
- **RPA Studio y Xperience:** no participan. No hay aplicación de escritorio que automatizar ni canal conversacional en este flujo.

Hoy el estado vive en Git y el humano entra mediante edición y revisión del código. En la versión Suite, el estado editorial viviría en PostgreSQL conectado a Nexus; el repositorio conservaría el artefacto publicado y su historial.
