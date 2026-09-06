# Hogarex Barcelona

Sitio web de Hogarex operando en Barcelona (España) para fontanería,
electricidad y gas. **No es un marketplace**: el modelo es de generación de
leads con gestión directa — el cliente contacta a Hogarex (WhatsApp, teléfono
o formulario) y Hogarex coordina internamente al profesional de su red que
resuelve el trabajo. No hay perfiles públicos de profesionales ni sistema de
búsqueda para el usuario final.

## Stack técnico

- **Next.js 14 (App Router) + TypeScript**
- **Tailwind CSS** para estilos, con paleta cálida (terracota + crema, sin el
  degradado violeta/celeste genérico) definida en `tailwind.config.ts`.
- **SSG/ISR en todas las páginas de contenido**: home, servicios, zonas,
  precios, blog, etc. son componentes de servidor que generan HTML estático
  en build time (`generateStaticParams` en las rutas dinámicas). El único
  componente cliente (`"use client"`) es el formulario de contacto
  (`components/LeadForm.tsx`); el resto de la interactividad (acordeón de
  FAQ) usa `<details>/<summary>` nativos para que el contenido esté en el
  HTML sin depender de JavaScript.
- **next/image** listo para usarse (configurado en `next.config.mjs`) en
  cuanto se agreguen fotos reales.
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

## Estructura

```
app/
  layout.tsx              Layout raíz, fuentes, header/footer, JSON-LD de negocio
  page.tsx                Home
  servicios/              Índice + páginas por servicio (fontanería, electricidad, gas)
  zonas/                  Índice + páginas por distrito de Barcelona
  precios/                Guía de precios orientativos
  urgencias-24h/          Landing de urgencias
  contacto/               Formulario de contacto (WhatsApp) + datos directos
  sobre-nosotros/         Explicación del modelo (no marketplace)
  blog/                   Índice + posts de ejemplo
  aviso-legal/, politica-privacidad/, politica-cookies/
  sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, llms.txt/route.ts
components/               Header, Footer, Hero, CTAs, FaqAccordion, LeadForm, etc.
lib/                      site-config.ts, services-data.ts, zones-data.ts,
                          blog-data.ts, metadata.ts, schema.ts
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
- [ ] Revisión legal de `app/aviso-legal`, `app/politica-privacidad` y
      `app/politica-cookies` (textos modelo, marcados explícitamente como
      pendientes de validar con un asesor legal, con placeholders de CIF y
      razón social).
- [ ] Precios orientativos (`lib/services-data.ts`, campo `pricing`): son
      valores de ejemplo razonables para Barcelona, deben confirmarse con
      datos reales del negocio.
- [ ] Fotos reales de los servicios/zonas (hoy no hay imágenes, solo
      ilustración tipográfica) — reemplazar usando `next/image`.
- [ ] Conectar el formulario de contacto a un backend/CRM real: hoy
      `components/LeadForm.tsx` abre WhatsApp con el mensaje precompletado
      (no requiere backend), lo cual es funcional pero limitado. Si se
      quiere registrar leads en una base de datos o enviar email además del
      WhatsApp, hay que añadir una API route (por ejemplo con Resend,
      Formspree o un CRM propio).
- [ ] Definir si se necesita banner de cookies (hoy el sitio no usa cookies
      de analítica/marketing; en cuanto se agregue Google Analytics, Meta
      Pixel, etc. hay que añadir gestión de consentimiento antes de cargarlas).

## Modelo de negocio (para quien edite contenido)

Todo el copy del sitio está escrito para reforzar que Hogarex Barcelona
**gestiona** el servicio, no lo intermedia como marketplace:

- Nunca usar frases como "elegí tu profesional" o "explorá perfiles".
- Siempre "contactanos / nos contás el problema / nosotros coordinamos al
  profesional de nuestra red".
- No agregar páginas de perfiles públicos de profesionales ni buscadores/
  filtros de profesionales visibles al usuario final.
