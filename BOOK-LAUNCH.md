# El que guía: lista de lanzamiento

Implementación del 19 de octubre de 2026. Registro gratuito, sin cobros, sin reservas de ejemplares y sin fecha de venta anunciada.

## Entrada y comportamiento

Página /el-que-guia, enlazada desde el inicio en español e inglés. /en/el-que-guia lleva a la edición española; no se inventó una traducción. Metadatos sociales y portada para compartir propios. La tapa oficial no se regeneró.

El formulario requiere correo y consentimiento específico para noticias del libro. Tras guardar permite abrir el primer capítulo en el lector aprobado. No dice que se haya enviado un email. La cuenta del proveedor de correo sigue pendiente de indicar por Fernando; antes de enviar campañas habrá que configurar remitente, confirmación de correo y baja en cada mensaje.

El alta se procesa en el servicio ya existente fernando-urbano de Render. La web Vercel usa ese mismo endpoint, así que ambas direcciones mantienen una sola lista. Su entorno privado contiene BOOK_DATABASE_URL, BOOK_DATABASE_PUBLIC_KEY y BOOK_REGISTRATION_SECRET. Ninguna de esas claves se envía al navegador. No se cambió ningún plan de servicio ni se creó un servicio de hosting.

## Datos y alcance

La lista vive en fu_book.subscribers de la infraestructura Supabase existente. Columnas: id, email, registered_at, consent_at, consent_version, source, locale y status. Solo se crearon el esquema fu_book, su rol escritor, tres tablas y una función pública de escritura del libro. No se modificaron tablas de otros proyectos.

RLS y permisos impiden leer las tablas como anon o authenticated. La función exige un secreto propio del libro y ejecuta con un rol NOLOGIN restringido a ese esquema. El sitio no posee service_role. El límite de solicitudes usa una huella HMAC que cambia a diario; no almacena la IP original. Hay campo trampa, validación en servidor, límite de cuerpo y respuestas equivalentes para duplicados. Un correo recibido no se presenta como propiedad verificada.

El estado de baja se conserva: un intento de registro repetido no reactiva automáticamente un registro marcado unsubscribed. La página de privacidad explica la solicitud de baja por correo mientras no se configure el proveedor. Para campañas futuras, resolver confirmación y baja antes de enviar; no usar el registro como una lista genérica para otros productos.

## Operación privada del autor

Consultar desde el editor SQL autorizado del proyecto:

```sql
select email, registered_at, consent_at, consent_version, source, locale, status
from fu_book.subscribers
order by registered_at desc;
```

La lista no tiene endpoint público de lectura. No copiar sus datos a Git ni a documentos compartidos. Las bajas y correcciones se atienden a partir de una solicitud desde el correo registrado; filtrar siempre por la dirección concreta antes de cambiar un registro.

## Archivos y verificación

La página y su composición están en src/components/book y src/app/el-que-guia. El endpoint está en src/app/api/book/subscribe/route.ts y la migración aditiva en database/book-launch.sql. tools/book-cloud.mjs opera únicamente sobre el servicio y el esquema identificados; no imprime credenciales. Su operación configure se detiene si ya existe el esquema, para no reaplicar cambios sobre datos activos por rutina.

Comprobados localmente: render de escritorio y teléfono, registro real con dirección sintética de example.com, foco de confirmación, persistencia de consentimiento, duplicado sin otra fila, rechazo sin consentimiento o con correo inválido, denegación de la función sin secreto, lectura pública de tablas denegada y enlace al capítulo aprobado. Tipos y build completados. Los registros sintéticos local y de producción se limpian únicamente por sus direcciones exactas y su fuente QA. La comprobación de la publicación efectiva queda en el estado del proyecto.

La primera carga del backend gratuito puede tardar al reactivarse. El formulario conserva el estado de guardado hasta un minuto y permite reintentar si falla, sin fabricar una confirmación.
