# Hogarex Barcelona

Sitio web de Hogarex operando en Barcelona (España) para fontanería,
electricidad, gas, pintura, carpintería y aire acondicionado/calefacción.
**No es un marketplace**: el modelo es de generación de leads con gestión
directa — el cliente contacta a Hogarex (formulario de solicitud, WhatsApp o
teléfono) y Hogarex coordina internamente al profesional de su red que
resuelve el trabajo. No hay perfiles públicos de profesionales ni sistema de
búsqueda para el usuario final.

Todo el copy está escrito en **castellano de España** (tuteo: "tú",
"cuéntanos", "contacta con nosotros"), no en español rioplatense/voseo.

## Stack técnico

- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** para estilos, con paleta cálida (terracota + crema, sin el
  degradado violeta/celeste genérico) definida en `tailwind.config.ts`.
- **SSG/ISR en todas las páginas de contenido**: home, servicios, zonas,
  precios, blog, etc. son componentes de servidor que generan HTML estático
  en build time (`generateStaticParams` en las rutas dinámicas). Los
  componentes cliente (`"use client"`) son solo los que necesitan
  interactividad: el formulario de contacto (`components/LeadForm.tsx`), el
  wizard de solicitud (`components/SolicitudWizard.tsx`) y la navegación
  (`components/NavMenu.tsx`, `components/MobileBottomBar.tsx`). El acordeón
  de FAQ usa `<details>/<summary>` nativos para que el contenido esté en el
  HTML sin depender de JavaScript.
- **next/image** con ilustraciones locales en SVG (`public/images/`, ver
  sección de imágenes más abajo).
- **next/font/google** (Inter + Manrope) para tipografía, cargada en
  `app/layout.tsx`.
- **SEO técnico**: metadata por página (`lib/metadata.ts`), `sitemap.xml`
  (`app/sitemap.ts`), `robots.txt` (`app/robots.ts`), Open Graph dinámico
  (`app/opengraph-image.tsx`), datos estructurados JSON-LD
  (`lib/schema.ts`: `HomeAndConstructionBusiness`, `Service`, `FAQPage`,
  `BreadcrumbList`, `BlogPosting`).
- **GEO (Generative Engine Optimization)**: `/llms.txt`
  (`app/llms.txt/route.ts`) resume el sitio, el modelo de negocio y los
  datos de contacto en texto plano para asistentes de IA; las respuestas de
  FAQ están en HTML plano (no detrás de JS) para que los motores generativos
  puedan citarlas directamente.

## Navegación

Un único paradigma de navegación por rango de ancho, para que nunca haya
dos menús activos a la vez:

- **Móvil (por debajo de `md`)**: la única navegación visible es la barra
  inferior fija estilo app (`components/MobileBottomBar.tsx`): Inicio,
  Servicios, un botón central elevado "Solicitar" (a `/solicitud`),
  WhatsApp y "Más". El botón central se posiciona con `absolute` (no con
  márgenes negativos dentro del grid) para quedar perfectamente centrado
  sobre la barra sin desalinear el resto de íconos. "Más" abre el mismo
  panel de navegación completo (`components/NavDrawer.tsx`) que en
  tablet/escritorio se abre desde la hamburguesa — la hamburguesa del
  header está oculta en este rango (`hidden md:inline-flex`) para que no
  convivan las dos navegaciones a la vez.
- **Tablet (`md` a `lg`)**: el header muestra el botón de hamburguesa, que
  abre `NavDrawer`.
- **Escritorio (`lg` y superior)**: menú horizontal completo en el header
  (Servicios, Buscar servicio, Zonas, Precios, Urgencias, Blog, Sobre
  nosotros, Contacto), un enlace discreto "¿Eres profesional?", el
  selector de idioma y un botón destacado "Pedir presupuesto"
  (`components/NavMenu.tsx`).
- **Botón flotante de WhatsApp** (`components/FloatingWhatsApp.tsx`, solo
  `md` y superior) y **barra de CTA fija al hacer scroll**
  (`components/StickyServiceCta.tsx`, usada en las páginas de servicio) para
  mantener la conversión siempre a mano sin duplicar la barra inferior de
  móvil.

## Página de solicitud (`/solicitud`)

Es la página de conversión principal del sitio. Al entrar sin parámetros,
se ve un botón grande "Iniciar solicitud"; al pulsarlo (o al llegar con
`?rubro=` ya en la URL) se abre `components/SolicitudModal.tsx`: a
pantalla completa en móvil (`h-[100dvh]`, sin bordes) y como tarjeta
centrada en pantallas más grandes (`sm:max-w-2xl sm:max-h-[85vh]`), con el
scroll de fondo bloqueado mientras está abierto. Dentro vive
`components/SolicitudWizard.tsx`, estructurado como una columna flexible
de tres franjas — cabecera con la barra de progreso fija arriba, el
contenido del paso actual con su propio scroll interno en el medio, y los
botones Atrás/Siguiente/Enviar fijos abajo — así el usuario nunca tiene
que hacer scroll de la página para encontrar cómo continuar. El wizard:

1. Pregunta el rubro (fontanero, electricista, gasista, pintor, carpintero,
   aire acondicionado/calefacción) con tarjetas visuales.
2. Adapta la siguiente pregunta ("¿qué tipo de problema tienes?") según el
   rubro elegido.
3. Para varios rubros añade una pregunta de detalle adicional (m² a pintar,
   si hay medidas tomadas, tipo de equipo de climatización, nivel de riesgo
   eléctrico, etc.).
4. Marca automáticamente la solicitud como urgente en casos de seguridad
   (por ejemplo, "huelo a gas ahora mismo" o riesgo eléctrico inmediato) y
   muestra un aviso de seguridad.
5. Pide zona/barrio, dirección opcional, datos de contacto y horario
   preferido.
6. Muestra un resumen y envía la solicitud abriendo WhatsApp con el mensaje
   ya redactado (mismo patrón sin backend que `LeadForm`).

Se puede enlazar con el rubro y el problema preseleccionados usando
`/solicitud?rubro=<slug-del-servicio>&problema=<valor>` (por ejemplo, desde
cada página de servicio, desde los chips de "¿Cuál es tu problema?" de la
home, o desde cada resultado de `/buscar-servicios`). Esos parámetros se
leen en `components/SolicitudWizardEntry.tsx` con `useSearchParams`,
envuelto en `<Suspense>` en `app/solicitud/page.tsx` como exige Next.js App
Router; el wizard salta directamente al paso siguiente correspondiente
según cuánto venga preseleccionado.

## Buscador de servicios (`/buscar-servicios`)

No es un listado de profesionales ni un directorio con perfiles: es un
buscador de trabajos concretos (`components/ServiceSearch.tsx`), con barra
de búsqueda, chips de rubro y tarjetas de resultado. El índice se construye
en `lib/search-index.ts` a partir de las opciones del wizard (para que cada
resultado enlace directo al paso correcto de `/solicitud`) y se enriquece
con los `commonJobs` de cada servicio para mejorar la búsqueda por texto
libre.

## Sección de profesionales (`/profesionales`)

Landing pensada para captar fontaneros, electricistas, gasistas, pintores,
carpinteros y técnicos de climatización que buscan más trabajo, con copy
SEO/GEO (`lib/professionals-data.ts`) sobre el dolor de gestionar clientes,
citas, presupuestos y cobros, y cómo Hogarex se encarga de eso mientras el
profesional se dedica a trabajar. Incluye un formulario de alta
(`components/ProfessionalSignupForm.tsx`, mismo patrón sin backend que
`LeadForm`: abre WhatsApp con los datos redactados) y tres herramientas
gratuitas standalone, cada una con su propia página para SEO:

- **`/profesionales/cuanto-cobrar`**: guía de precios por oficio + una
  calculadora (`components/PricingCalculator.tsx`) que suma horas,
  materiales, desplazamiento, recargo de urgencia e IVA.
- **`/profesionales/presupuestos`**: generador de presupuestos
  (`components/QuoteGenerator.tsx`) con vista previa en vivo e impresión a
  PDF vía `window.print()` (sin dependencias nuevas ni backend; las reglas
  `print:hidden` en Header, Footer, MobileBottomBar, FloatingWhatsApp y
  StickyServiceCta hacen que al imprimir solo se vea el presupuesto).
- **`/profesionales/plantillas-whatsapp`**: mensajes ya redactados
  (`lib/professionals-data.ts` → `messageTemplates`) con botón de copiar
  (`components/TemplateList.tsx`).

Todas las herramientas son gratuitas y funcionan sin unirse a la red; el
mensaje es deliberadamente indirecto ("esto es gratis, pero imagina no
tener que hacerlo tú mismo") para que el profesional termine interesándose
en unirse en vez de presionarlo a hacerlo.

## Idioma (Español / Català)

Selector de idioma visible en el header (escritorio) y en `NavDrawer`
(tablet/móvil), gestionado con un contexto de React propio en
`lib/i18n/` — sin librerías de i18n externas (no había forma de instalar
paquetes nuevos en el entorno de esta sesión, ver nota más abajo):

- `lib/i18n/context.tsx`: `LanguageProvider` (envuelve toda la app en
  `app/layout.tsx`) y el hook `useLanguage()` → `{ locale, setLocale, t }`.
  El idioma persiste en `localStorage` y no cambia la URL (no hay rutas
  `/ca/...`), así que el cambio de idioma no afecta al SEO por ahora.
- `lib/i18n/dictionary.ts`: diccionario tipado (`Dictionary`) con las
  traducciones de navegación, footer, barra inferior, home completa y
  wizard.
- `lib/i18n/wizard-rubros.ts`: traducción al catalán de
  `rubroWizardConfigs` (las preguntas y opciones del wizard por rubro) y
  de `contactTimeOptions`. Los `value` de cada opción son idénticos entre
  idiomas a propósito: viajan en la URL (`?rubro=&problema=`) y en la
  lógica de urgencia automática.
- `components/LanguageSwitcher.tsx`: el toggle "ES / CA".

**Alcance actual, deliberadamente acotado**: están completamente en
español y catalán la navegación (header, footer, barra inferior, panel de
menú), la home entera (hero, cómo funciona, servicios, trabajos, zonas,
confianza, testimonios, FAQ) y el wizard de solicitud completo (incluidas
las preguntas específicas de cada rubro y el mensaje que se envía por
WhatsApp). **Quedan solo en español** por ahora: el contenido largo de
`/servicios/[slug]`, `/zonas/[zona]`, `/blog`, `/profesionales` y sus
herramientas, `/buscar-servicios`, y las páginas legales — es decir, los
datos que viven en `lib/services-data.ts`, `lib/zones-data.ts`,
`lib/blog-data.ts` y `lib/professionals-data.ts`. Cambiar a "CA" en esas
páginas traduce el header/footer pero no el cuerpo. Para extender la
traducción a esas páginas, el patrón a seguir es el mismo: mover el
contenido a un componente `"use client"` que consuma `useLanguage()`
(como se hizo con `app/page.tsx` → `components/HomeContent.tsx`) y añadir
las claves que falten a `lib/i18n/dictionary.ts`.

También pendiente: encargar una revisión del catalán a un hablante nativo
antes de publicar — se escribió con buen criterio pero sin ese control de
calidad.

## Imágenes

No hay fotografías reales todavía. En su lugar, `public/images/` contiene
ilustraciones SVG propias (duotono terracota/crema, coherentes con la
paleta de marca) que:

- `services/*.svg`: una por cada rubro, usadas en las tarjetas de servicio y
  en la cabecera de cada página de servicio.
- `work/*.svg`: seis escenas de "trabajo finalizado" (con insignia de check)
  usadas en la sección "Trabajos gestionados en Barcelona" de la home, cada
  una con su rubro y zona.
- `trust/equipo-hogarex.svg`: ilustración de coordinación usada en "Sobre
  nosotros".
- `trust/profesional-trabajando.svg`: ilustración usada en la portada de
  `/profesionales`.
- `hero/hero-hogar.svg`: ilustración de portada de la home.

`next.config.mjs` habilita `dangerouslyAllowSVG` porque estos SVG son
propios (no subidos por usuarios). **Antes de publicar, sustituir estas
ilustraciones por fotografías reales de trabajos y del equipo** manteniendo
las mismas rutas y proporciones (o actualizando las referencias en
`lib/services-data.ts` y `app/page.tsx`).

## Estructura

```
app/
  layout.tsx              Layout raíz, fuentes, header/footer, barra móvil, WhatsApp flotante, JSON-LD de negocio
  page.tsx                Home (hero + chips de problemas, cómo funciona, servicios, trabajos, zonas, confianza, testimonios, FAQ)
  solicitud/               Wizard de solicitud multi-paso (página de conversión principal)
  buscar-servicios/       Buscador de trabajos concretos (no de profesionales)
  servicios/              Índice + páginas por servicio (6 rubros)
  zonas/                  Índice + páginas por distrito de Barcelona
  precios/                Guía de precios orientativos
  urgencias-24h/          Landing de urgencias
  contacto/               Formulario rápido de contacto (WhatsApp) + datos directos
  sobre-nosotros/         Explicación del modelo (no marketplace)
  blog/                   Índice + posts de ejemplo
  profesionales/          Landing para sumarse a la red + herramientas gratuitas
    cuanto-cobrar/        Guía de precios + calculadora
    presupuestos/         Generador de presupuestos (imprimible/PDF)
    plantillas-whatsapp/  Plantillas de mensajes con copiar
    herramientas/         Hub que enlaza las tres herramientas
  aviso-legal/, politica-privacidad/, politica-cookies/
  sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, llms.txt/route.ts
components/               Header, NavMenu, NavDrawer (menú compartido),
                          MobileBottomBar, FloatingWhatsApp,
                          StickyServiceCta, Footer, Hero, CTAs, FaqAccordion,
                          LeadForm, HomeContent, SolicitudWizard(Entry),
                          SolicitudModal, ServiceSearch,
                          ProfessionalSignupForm, PricingCalculator,
                          QuoteGenerator, TemplateList, ProToolIcon,
                          LanguageSwitcher, etc.
lib/                      site-config.ts, services-data.ts, zones-data.ts,
                          blog-data.ts, wizard-data.ts, search-index.ts,
                          professionals-data.ts, metadata.ts, schema.ts
lib/i18n/                 context.tsx (LanguageProvider/useLanguage),
                          dictionary.ts (es/ca), wizard-rubros.ts (wizard en ca)
public/images/            Ilustraciones SVG (servicios, trabajos, confianza, hero)
```

## Cómo correr el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción (SSG)
npm run start    # sirve el build de producción
npm run lint
npm run typecheck
```

> **Nota sobre este entorno de desarrollo**: en la sesión donde se generó
> este código, el acceso saliente a `registry.npmjs.org` estaba bloqueado
> por la política de red del entorno remoto, por lo que no fue posible
> ejecutar `npm install` / `npm run build` para validar el proyecto de punta
> a punta. En su lugar, el código se revisó manualmente y se verificó con
> `tsc` (sin los paquetes de `node_modules`) que no hay errores de sintaxis
> ni imports/exports rotos. Se recomienda correr `npm install && npm run
> build` en un entorno con acceso normal a npm antes de desplegar.

## Checklist antes de publicar (datos reales pendientes)

Todo lo marcado como `PLACEHOLDER` en `lib/site-config.ts` debe reemplazarse
antes de salir a producción:

- [ ] Dominio definitivo (`siteConfig.url`)
- [ ] Teléfono real (`phoneDisplay`, `phoneE164`)
- [ ] Número de WhatsApp Business real (`whatsappNumber`)
- [ ] Email de contacto real (`email`)
- [ ] Dirección / domicilio (`streetAddress`, `postalCode`) y razón social + CIF (`legalName`)
- [ ] Redes sociales reales (`socials`)
- [ ] Logo real (hoy se usa un wordmark tipográfico + favicon SVG placeholder
      en `public/favicon.svg`). Si hay guía de marca, tipografías o colores
      corporativos, deben priorizarse sobre la paleta actual
      (`tailwind.config.ts`).
- [ ] Fotografías reales de trabajos y del equipo (ver sección "Imágenes"
      más arriba) en sustitución de las ilustraciones SVG actuales.
- [ ] Revisión legal de `app/aviso-legal`, `app/politica-privacidad` y
      `app/politica-cookies` (textos modelo, marcados explícitamente como
      pendientes de validar con un asesor legal, con placeholders de CIF y
      razón social).
- [ ] Precios orientativos (`lib/services-data.ts`, campo `pricing`): son
      valores de ejemplo razonables para Barcelona, deben confirmarse con
      datos reales del negocio.
- [ ] Testimonios de ejemplo en `app/page.tsx` (`testimonials`): sustituir
      por reseñas reales de clientes (por ejemplo, importadas de Google
      Business Profile) antes de publicar. Deliberadamente no se les añadió
      marcado JSON-LD de reseñas para no presentar datos de ejemplo como
      reseñas verificadas ante buscadores.
- [ ] Conectar el formulario de contacto, el wizard de solicitud y el
      formulario de alta de profesionales a un backend/CRM real: los tres
      abren WhatsApp con el mensaje precompletado (no requieren backend), lo
      cual es funcional pero limitado. Si se quiere registrar leads/altas en
      una base de datos o enviar email además del WhatsApp, hay que añadir
      una API route (por ejemplo con Resend, Formspree o un CRM propio).
- [ ] Definir las condiciones reales de colaboración con profesionales
      (comisión por trabajo derivado, proceso de validación de alta y de
      habilitaciones como electricidad/gas) antes de publicar `/profesionales`:
      hoy el copy es genérico y no compromete cifras concretas.
- [ ] Definir si se necesita banner de cookies (hoy el sitio no usa cookies
      de analítica/marketing; en cuanto se agregue Google Analytics, Meta
      Pixel, etc. hay que añadir gestión de consentimiento antes de cargarlas).
- [ ] Revisión del catalán por un hablante nativo (ver sección "Idioma"
      más arriba) y decisión sobre si se necesitan URLs por idioma
      (`/ca/...`) para SEO, o si el selector cliente actual es suficiente.
- [ ] Extender la traducción a `/servicios`, `/zonas`, `/blog`,
      `/profesionales` y `/buscar-servicios` si se quiere que el catalán
      cubra todo el sitio, no solo navegación + home + wizard.

## Modelo de negocio (para quien edite contenido)

Todo el copy del sitio está escrito para reforzar que Hogarex Barcelona
**gestiona** el servicio, no lo intermedia como marketplace:

- Nunca usar frases como "elige tu profesional" o "explora perfiles".
- Siempre "contacta con nosotros / cuéntanos el problema / nosotros
  coordinamos al profesional de nuestra red".
- No agregar páginas de perfiles públicos de profesionales ni buscadores/
  filtros de profesionales visibles al usuario final.
- Los 6 rubros son: fontanero, electricista, gasista, pintor, carpintero y
  aire acondicionado/calefacción (`lib/services-data.ts`). Añadir un rubro
  nuevo implica: un objeto nuevo en `services`, una configuración en
  `lib/wizard-data.ts` (`rubroWizardConfigs`) y una imagen en
  `public/images/services/`; el resto del sitio (footer, sitemap, llms.txt,
  home, wizard) se actualiza automáticamente al recorrer el array.
