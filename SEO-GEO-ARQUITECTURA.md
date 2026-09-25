# Arquitectura SEO y GEO de OficiosPro

Documento vivo. Antes de crear una página, cambiar una URL o tocar los
datos estructurados, revisa esto. Está pensado para que el sitio sea fácil
de indexar por buscadores y fácil de citar por asistentes de IA (GEO:
Generative Engine Optimization), sin inventar datos que no tenemos.

> Este documento adapta al modelo de OficiosPro los criterios de arquitectura
> usados en otros proyectos del grupo (hogarex-seo, app.hogarex.ar). No es
> una copia: hogarex es un marketplace C2B con decenas de oficios y barrios,
> así que usa una matriz de URLs por rubro × zona. OficiosPro es una agencia
> B2B con dos oficios y una sola ciudad de referencia, así que **no** replica
> esa matriz — generaría páginas casi vacías o duplicadas. Lo que sí se
> adapta son los principios: jerarquía de URLs fija, contenido único por
> página, datos estructurados enlazados entre sí y un glosario/guías
> pensados para que los cite una IA.

## 1. Jerarquía de URLs

Todas las rutas viven en `lib/navigation.ts` (objeto `routes`, más
`serviceSlugs`, `sectorPaths` y `guideSlugs`). Es la fuente única de verdad:
`pagePairs()` recorre ese objeto para generar el sitemap y el selector de
idioma, así que **una URL nueva se añade ahí, no solo en `app/`**.

| Nivel | Castellano | Català | Contenido |
| --- | --- | --- | --- |
| Home | `/` | `/ca` | Portada, resumen de todo el sitio |
| Índice de servicios | `/servicios` | `/ca/serveis` | Los 5 servicios en tarjetas |
| Ficha de servicio | `/servicios/[slug]` | `/ca/serveis/[slug]` | 1 página por servicio, contenido propio |
| Landing por oficio | `/marketing-para-fontaneros`, `/marketing-para-electricistas` | `/ca/marketing-digital-per-a-lampistes`, `/ca/marketing-digital-per-a-electricistes` | Síntomas, errores, costes y sistema para ese oficio |
| Índice de guías | `/guias` | `/ca/guies` | Listado con la guía más reciente destacada |
| Guía | `/guias/[slug]` | `/ca/guies/[slug]` | Artículo largo, citable, con `BlogPosting` |
| Glosario | `/glosario` | `/ca/glossari` | Términos con `DefinedTermSet` |
| Contacto | `/asesoramiento-gratuito` | `/ca/assessorament-gratuit` | Formulario de 3 pasos |
| Legales | `/aviso-legal`, `/politica-privacidad`, `/politica-cookies` | equivalentes en `/ca/` | Prioridad baja en el sitemap |

Regla: **todo segmento de la jerarquía resuelve a una página real, con
contenido propio, o no existe**. No hay páginas «próximamente» ni rutas que
devuelvan un 404 esperando contenido futuro. Si un nivel no tiene todavía
contenido suficiente para ser único, no se crea la ruta.

### Guías que todavía solo existen en castellano

Todas las páginas del sitio son bilingües, con una excepción explícita:
las guías nuevas pueden publicarse primero solo en castellano (por ejemplo,
para no bloquear la publicación mientras se traduce). Una guía así **no**
se añade a `guideSlugs` en `lib/navigation.ts` — si se añadiera,
`pagePairs()` generaría una URL en catalán que no existe, y esa URL
aparecería tanto en el sitemap como en el `hreflang="ca"` de la página en
castellano, apuntando a un 404. En vez de eso:

- La guía se añade solo a `guides` (`lib/guides-data.ts`), no a `guidesCa`.
- `app/sitemap.ts` detecta las guías sin entrada en `guideSlugs` y las
  incluye aparte, con un único idioma en `alternates.languages` (sin `ca`).
- `lib/metadata.ts` usa `realAlternatePath()` (no `alternatePath()`) para
  construir el `hreflang` de cada página: devuelve `null` en vez de
  inventar una equivalencia, así que esa guía nunca declara un
  `hreflang="ca"` que no existe.
- El selector de idioma del header (que sí usa `alternatePath()`, con su
  fallback a la portada) sigue funcionando igual: si alguien cambia a
  catalán desde una guía sin traducir, aterriza en la portada catalana, no
  en un 404.

En cuanto una guía se traduce, se añade su entrada a `guideSlugs` (con el
slug en cada idioma) y al array `guidesCa`, y pasa a tratarse como
cualquier otra página bilingüe del punto anterior.

### Por qué no hay páginas por barrio

OficiosPro no promete cobertura hiperlocal por barrio (a diferencia de un
marketplace de oficios a domicilio): trabaja fontanería y electricidad en
Barcelona y alrededores desde una sola oferta. Crear `/marketing-para-fontaneros/gracia`,
`/marketing-para-fontaneros/sants`, etc. sin contenido realmente distinto en
cada una sería contenido duplicado y no ayuda ni a SEO ni a GEO. Si en algún
momento se ofrece un servicio distinto por zona (por ejemplo, gestión de
Google Ads limitada a un distrito concreto con casos reales), esas páginas
se añadirían con contenido propio, no como plantilla repetida.

## 2. Datos estructurados (schema.org)

Todo vive en `lib/schema.ts` y se renderiza con `<JsonLd data={...} />`
(`components/JsonLd.tsx`). Convención de identificadores (`@id`) para que
Google pueda enlazar las piezas entre sí:

- `businessId` = `${siteConfig.url}/#organization` → `organizationSchema()`
  (`ProfessionalService`), una sola vez en el layout raíz.
- `websiteId` = `${siteConfig.url}/#website` → `websiteSchema()` (`WebSite`),
  también una sola vez en el layout raíz, con `publisher` apuntando a
  `businessId`.
- Cada servicio (`serviceSchema()`) referencia a `businessId` como
  `provider`.
- Cada guía (`blogPostingSchema()`) referencia a `businessId` como `author`
  y `publisher`.
- El glosario (`glossarySchema()`) genera un `DefinedTermSet` con un
  `DefinedTerm` por término — cada término queda como una entidad citable
  propia, no solo como texto suelto.
- `Breadcrumbs.tsx` emite su propio `BreadcrumbList` automáticamente en
  cualquier página que lo use: no hay que añadirlo a mano.
- `faqSchema()` está disponible para preguntas frecuentes reales (se usa en
  las páginas que ya tienen un bloque de FAQ).

**Nunca se añade** `AggregateRating` ni `Review` con datos inventados. El
día que OficiosPro tenga reseñas reales verificables, se añaden con su fecha
y su autor; hasta entonces, no aparece ninguna cifra de valoración.

## 3. Metadatos y URLs canónicas

`lib/metadata.ts` (`buildMetadata()`) genera en cada página: `title`,
`description`, canonical, `hreflang` (incluido `x-default`), Open Graph y
Twitter. Toda página nueva debe llamar a `buildMetadata()` con su `path` de
`routes` — así el hreflang y el sitemap quedan correctos sin tocar nada más.

`app/sitemap.ts` recorre `pagePairs()` automáticamente: una ruta añadida en
`lib/navigation.ts` (o en `guideSlugs`/`serviceSlugs`) aparece sola en el
sitemap, con su alternancia de idioma y con prioridad según el tipo de
página (legales 0.1, guías/glosario 0.6, home 1, contacto 0.8, resto 0.9).

`app/robots.ts` permite todo el rastreo y apunta al sitemap; no hace falta
tocarlo salvo que se quiera bloquear alguna ruta técnica.

## 4. Convención de parámetros en la URL de contacto

El formulario (`/asesoramiento-gratuito` y su equivalente en catalán) acepta
parámetros fijos para llegar preseleccionado desde cualquier CTA del sitio:

| Parámetro | Valores | Se usa desde |
| --- | --- | --- |
| `?oficio=` | `fontaneria` \| `electricidad` | Landings por oficio, guías con `trade` |
| `?servicio=` | slug de `serviceSlugs` | Ficha de cada servicio |
| `?situacion=` | texto libre corto | Bloques de «tu situación» en la home |

Cualquier CTA nuevo debe reutilizar estos tres parámetros en vez de inventar
uno nuevo, para que el formulario los siga entendiendo sin cambios.

## 5. Contenido pensado para GEO (asistentes de IA)

Un asistente de IA no «navega» el sitio: lee fragmentos sueltos (una
definición, un párrafo, una respuesta) fuera de contexto. Por eso:

- Cada guía empieza con un **resumen autocontenido** (`summary` en
  `lib/guides-data.ts`): 2-4 frases que responden la pregunta del título sin
  necesitar el resto del artículo. Es lo primero que se cita.
- Los encabezados de guía se escriben, cuando tiene sentido, como preguntas
  reales («¿Pagar por clientes o hacer tu propio marketing?», «Cómo decide
  Google a quién enseña»): así encajan con cómo la gente le pregunta a un
  asistente.
- Cada término del glosario (`lib/glossary-data.ts`) es una definición corta
  y autosuficiente, no un fragmento de una explicación más larga.
- Cuando se dan cifras de precio (por ejemplo en la guía de precios
  orientativos), se marcan explícitamente como **orientativas**, nunca como
  una tarifa cerrada ni como un dato de mercado verificado.
- `app/llms.txt/route.ts` da un resumen estructurado del sitio en texto
  plano (servicios, sectores, guías, glosario, contacto, notas explícitas
  para sistemas de IA) que complementa al sitemap y al HTML.
- Nunca se fabrican testimonios, valoraciones ni estadísticas de clientes.
  Si un dato no está publicado todavía, no aparece — ni en el sitio ni en
  `llms.txt`.

## 6. Reglas de contenido según la guía oficial de Google (IA generativa en la Búsqueda)

Google publicó en 2026 su guía oficial sobre cómo optimizar para las
funciones de IA generativa de la Búsqueda (vistas creadas con IA, modo IA).
Punto clave: **para Google, optimizar para búsqueda con IA generativa sigue
siendo SEO** — no hay un canal ni un formato aparte. Estas son las reglas
que se aplican a partir de ahora a toda guía, post o página nueva del sitio:

**Qué hacer:**

- **Punto de vista propio, no resumen de lo que ya existe.** Cada guía debe
  aportar algo que OficiosPro sabe por experiencia real (cómo deciden
  fontaneros y electricistas de Barcelona, qué falla en sus anuncios, qué
  preguntan en el asesoramiento), no una lista genérica que cualquiera
  podría escribir o que generaría un modelo de IA sin más. Preferir títulos
  como «Por qué renunciamos a X y ahorramos Y» antes que «7 consejos para
  X».
- **Contenido no genérico.** Evitar títulos tipo «10 consejos para hacer
  marketing» sin ángulo propio. Si una guía no dice algo que no esté ya en
  las primeras páginas de Google, no aporta valor nuevo.
- **Estructura clara para personas**: párrafos y secciones con encabezados
  reales, no un muro de texto. Esto ya es el patrón de `lib/guides-data.ts`
  (resumen + secciones) y hay que mantenerlo.
- **HTML semántico razonable** (encabezados en orden, listas como listas):
  no hace falta que sea perfecto, pero ayuda a lectores de pantalla y a que
  Google entienda la estructura. Ya es el patrón de los componentes de
  guía existentes.
- **Rastreo e indexación por encima de todo lo demás**: una guía nueva solo
  sirve si está en `guideSlugs`/`guides`/`guidesCa`, tiene su URL en el
  sitemap y pasa `buildMetadata()`. Sin eso, da igual lo bien escrita que
  esté.

**Qué NO hacer (mitos que la propia guía de Google desmiente — no perder
tiempo en esto):**

- **No fragmentar contenido en trozos artificiales** pensando que ayuda a
  que la IA lo entienda mejor. No hay una longitud "ideal" para una guía:
  se escribe la extensión que necesite el tema, no la que "convendría" para
  un LLM.
- **No reescribir para "sonar a IA"** ni perseguir variantes de keywords muy
  específicas: los sistemas de Google entienden sinónimos y la intención
  general. Se escribe para la persona que lee, con el lenguaje natural que
  ya usa el sitio (castellano de España, tú).
- **No perseguir "menciones" no auténticas** en foros o webs de terceros
  como truco de posicionamiento.
- **No obsesionarse con datos estructurados adicionales** más allá de lo que
  ya hace `lib/schema.ts`: no son obligatorios para aparecer en IA
  generativa, aunque los que ya tenemos (BlogPosting, DefinedTermSet,
  FAQPage cuando aplique) siguen siendo útiles para resultados enriquecidos
  normales.
- **`llms.txt` no es un mecanismo especial para Google**: la Búsqueda de
  Google lo ignora por completo, ni ayuda ni perjudica el posicionamiento.
  `app/llms.txt/route.ts` se mantiene porque puede servir a otros sistemas
  que sí lo lean, no porque Google lo use — no hay que invertir tiempo
  ampliándolo pensando en el posicionamiento en Google.
- **No crear páginas o variantes solo para cubrir más consultas** (contenido
  a escala pensado para manipular el posicionamiento): esto va contra la
  política de spam de Google y no ayuda ni a SEO ni a GEO. Cada página
  nueva debe justificarse por contenido propio y útil, no por "cubrir más
  búsquedas".

**Regla simple para decidir cualquier duda de contenido**: ¿esto sería
satisfactorio para un fontanero o electricista real que llega buscando
respuesta a una duda de negocio? Si sí, va en la línea correcta.

## 7. Checklist antes de añadir o cambiar una página

1. ¿La URL ya está en `lib/navigation.ts` (`routes`, `serviceSlugs`,
   `sectorPaths` o `guideSlugs`)? Si no, añádela ahí primero — el sitemap y
   el selector de idioma la recogen solos.
2. ¿Tiene versión en castellano y en catalán, con su propia URL en cada
   idioma (no solo el mismo texto traducido)?
3. ¿Llama a `buildMetadata()` con su `path` real?
4. ¿Usa `<Breadcrumbs>` si no es la home? (Emite su propio `BreadcrumbList`.)
5. ¿El contenido es único, no una copia con cuatro palabras cambiadas de
   otra página del sitio?
6. Si tiene datos, precios o cifras: ¿son reales o están marcados
   explícitamente como orientativos? Nunca se presentan como dato real sin
   serlo.
7. Si es citable por una IA (guía, glosario, FAQ): ¿tiene un resumen o una
   definición que se entienda sola, sin el resto de la página?

## 8. Pendiente (no bloquea, pero queda anotado)

- `FAQPage` por guía: hoy las guías usan `BlogPosting`; cuando una guía
  tenga una sección de preguntas frecuentes explícita, añadir también
  `faqSchema()` en esa página.
- `sameAs` de `organizationSchema()` apunta a Instagram y LinkedIn
  marcados como `PLACEHOLDER` en `lib/site-config.ts` — hay que sustituirlos
  por los perfiles reales antes de publicar (ver checklist del `README.md`).
- Cuando existan reseñas reales de clientes de OficiosPro (no de fontaneros o
  electricistas finales, que no son el cliente de este sitio), valorar un
  `Review`/`AggregateRating` en `organizationSchema()`, siempre con datos
  verificables y fecha.
- Si se añaden más guías, mantener el mismo patrón: resumen autocontenido,
  categoría, y enlace desde el glosario o la ficha de servicio relacionada
  cuando aplique.
- Traducir al catalán las 10 guías para fontaneros añadidas el 2026-09-25
  (de `por-que-no-me-llaman-clientes-nuevos-fontanero-barcelona` a
  `temporada-alta-baja-fontanero-barcelona-como-no-depender`): hoy solo
  existen en castellano (ver «Guías que todavía solo existen en
  castellano» en el punto 1). Al traducirlas, añadir su entrada a
  `guideSlugs` y su contenido a `guidesCa`.
