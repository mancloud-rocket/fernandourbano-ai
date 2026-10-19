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

## Lista de lanzamiento de El que guía

19 de octubre de 2026. Pedido: integrar el libro y su lista de lectores en el sitio personal, con registro persistente y calidad de interfaz. La página no abre una preventa ni cobra. El autor continúa trabajando en el manuscrito; no hay una fecha pública de lanzamiento.

Se consideraron tres estructuras: extender la página general del autor, presentar una página editorial propia del libro, o insertar el lector completo antes del registro. Se eligió la segunda para que el mensaje, la tapa y la acción formen una unidad y para conservar el lector aprobado como experiencia de lectura independiente.

La identidad procede de los activos reales: cabecera oscura y logo del sitio, Fraunces/Geist ya instaladas, y papel gris, laberinto negro e hilo rojo de la tapa. El libro se compone como objeto con canto y sombra, sin regenerar su arte. El hilo junto al título une la composición, no representa una medición ni un proceso. El formulario vive en la primera columna y aparece antes del objeto en móvil. La cita de la introducción conduce a las discusiones y al autor, sin grilla de beneficios intercambiables.

Referencias: se conserva el capital editorial del sitio y de la tapa aprobada. La página oficial de Atomic Habits (jamesclear.com/atomic-habits) sirve como referencia funcional de portada, propuesta y acceso a un capítulo; no se copiaron diseño, cifras, testimonios o texto. Modern Web Guidance aporta formulario semántico, teclado de correo y autocompletado; al no crear cuentas se usa autocomplete=email, no username ni contraseña.

Estados: vacío, validación nativa, guardado, rechazo de servidor, desconexión y registro confirmado. El servidor exige consentimiento y limita intentos; correo repetido devuelve el mismo resultado sin duplicar ni revelar la lista. El estado positivo llega después de la escritura, y entonces permite abrir el capítulo ya aprobado. La lista no afirma propiedad verificada de los correos: al conectar un servicio de envío habrá que completar confirmación y baja desde cada mensaje. Por ahora la bienvenida y la lectura son inmediatas en pantalla; no se afirma que se envió un correo.

Infraestructura: servicio existente fernando-urbano en Render y espejo Vercel del mismo repositorio, sin un servicio nuevo ni plan nuevo. Registro en el esquema nuevo fu_book de la infraestructura Supabase existente. Sin escrituras a tablas de otros proyectos. Tablas privadas con RLS y rol escritor NOLOGIN limitado al libro; una función de escritura requiere secreto específico de aplicación. El sitio nunca recibe service_role. Las claves viven solo en el entorno privado del servidor. Los datos y el consentimiento no se guardan en Git.

Equivalente Suite del flujo: la página pública sigue en Next.js para composición editorial, metadatos y SEO. SAT003 «Registrar lector» recibiría una solicitud, validaría correo y consentimiento y escribiría únicamente en la lista del libro; Orchestrator guardaría credenciales y resultado, y Nexus daría al autor una consola privada de revisión y bajas. Ese único flujo compartiría disparador, estado y ciclo de vida. RPA Studio, Xperience y AI Studio no hacen falta. Es un mapa de implementación alternativo, no una integración Suite existente ni una autorización para construirla en este encargo.
