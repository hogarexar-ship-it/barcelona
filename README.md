# Ofici: fontaneros y electricistas en Barcelona

Sitio con **dos públicos** y dos zonas visualmente distintas:

1. **Particulares** (lo que el negocio vende): personas y empresas de
   Barcelona que necesitan un fontanero o un electricista. Generan los
   leads (solicitudes de presupuesto).
2. **Profesionales** (los clientes del negocio): fontaneros y electricistas
   que reciben esos leads a cambio de una comisión o contratan marketing.

Sin leads de particulares no hay nada que vender a los profesionales, por
eso la home está orientada al particular e incluye una franja de captación
para profesionales.

> "Ofici" es un nombre de marca **temporal**. Se cambia en un solo sitio:
> `siteConfig.brand` en `lib/site-config.ts`.

## Dos zonas, dos estilos

| | Particulares | Profesionales |
| --- | --- | --- |
| Rutas | `/`, `/fontaneros-barcelona`, `/electricistas-barcelona`, `/pedir-presupuesto`, `/guias` | todo bajo `/profesionales` |
| Estilo | Cabecera clara, crema cálido, acento terracota | Cabecera oscura, gris frío, acento verde azulado |
| Acción principal | "Pedir presupuesto" | "Quiero más clientes" |
| Formulario | `ConsumerRequestForm` (servicio, problema, urgencia, zona) | `ProLeadForm` (interés, oficio, empresa) |

Un selector fijo arriba de la cabecera ("Busco un profesional / Soy
profesional") deja claro en cada página a quién se le habla.

Cómo funciona el color: los componentes usan `accent-*` y `surface-*`
(definidos en `tailwind.config.ts`) cuyos valores cambian con la clase
`.theme-pro` (`app/globals.css`). `app/profesionales/layout.tsx` aplica esa
clase a toda la zona profesionales; la cabecera, la barra móvil y la franja
`ProBand` la aplican por su cuenta.

## Mapa del sitio

| Ruta | Público | Contenido |
| --- | --- | --- |
| `/` | Particular | Home: servicios, problemas frecuentes, cómo funciona, zonas, franja para profesionales, formulario |
| `/fontaneros-barcelona`, `/electricistas-barcelona` | Particular | Páginas de servicio (SEO "fontanero Barcelona", "electricista Barcelona") |
| `/pedir-presupuesto` | Particular | Formulario (acepta `?servicio=` y `?problema=`) |
| `/guias`, `/guias/[slug]` | Particular | Guías: fugas, diferencial, boletín, cómo elegir profesional |
| `/profesionales` | Profesional | Presentación de los dos servicios |
| `/profesionales/red-de-clientes` | Profesional | Red de clientes a comisión |
| `/profesionales/marketing` | Profesional | Marketing + diagnóstico gratis |
| `/profesionales/clientes-para-{fontaneros,electricistas}` | Profesional | Landings por oficio |
| `/profesionales/unirse` | Profesional | Formulario de alta (acepta `?interes=` y `?oficio=`) |
| `/profesionales/guias`, `/profesionales/guias/[slug]` | Profesional | Guías para conseguir clientes |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | | SEO y GEO |

Datos: `lib/services-data.ts` (servicios para particulares),
`lib/pro-sectors-data.ts` (oficios para profesionales), `lib/offers.ts`
(los dos servicios B2B), `lib/guides-data.ts` (todas las guías, con campo
`audience`), `lib/navigation.ts` (todas las rutas).

## Fotos

En `public/images/`. **Importante:** `electricista-profesional-obra.jpg`
tiene en sus metadatos un copyright de Fotolia (banco de imágenes de pago).
Antes de publicar, confirmar que hay licencia para usarla o sustituirla. Lo
mismo aplica a cualquier foto cuyo origen no esté claro.

## SEO y GEO

- Particulares: páginas por servicio con subservicios, problemas frecuentes,
  zonas y FAQ; guías prácticas que responden búsquedas reales.
- Profesionales: páginas por intención ("clientes para fontaneros",
  "marketing para electricistas") y guías de captación.
- Cada guía empieza con un bloque **"En resumen"** que suelen citar
  buscadores y asistentes de IA.
- JSON-LD: organización (`HomeAndConstructionBusiness`), `Service`,
  `FAQPage`, `BreadcrumbList` y `BlogPosting`.

## Formulario de leads

Los dos formularios (`components/ConsumerRequestForm.tsx` y
`components/ProLeadForm.tsx`) abren **WhatsApp** con los datos ya
redactados. No necesitan backend, pero el lead solo llega si la persona
envía el mensaje. Recomendado a corto plazo: guardar los leads también en
un CRM o una hoja de cálculo mediante una API route (por ejemplo con un
webhook de Make/Zapier, Resend o el CRM que se use).

## Stack técnico

Next.js 14 (App Router, páginas estáticas), TypeScript estricto
(`noUncheckedIndexedAccess`), Tailwind CSS. Sin dependencias extra.

```
app/          rutas (cada carpeta = una URL)
components/   UI (Header, Footer, PageHero, consumer.tsx, ServicePage, Pro*…)
lib/          datos y configuración (site-config, navigation, services-data, pro-sectors-data, offers, guides-data, schema)
public/       favicon e imágenes
```

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
npm run typecheck
```

## Checklist antes de publicar

- [ ] Licencia de las fotos (ver "Fotos").
- [ ] Nombre de marca definitivo, dominio, logo (`lib/site-config.ts`,
      `components/Logo.tsx`, `public/favicon.svg`).
- [ ] Teléfono, WhatsApp Business, email, dirección, razón social/CIF y
      redes reales (todo lo marcado `PLACEHOLDER` en `lib/site-config.ts`).
- [ ] **Confirmar las condiciones comerciales** que el sitio promete
      (`commercialTerms` en `lib/site-config.ts` y FAQs):
  - alta gratuita y sin cuotas mensuales fijas en la red de clientes;
  - comisión solo por trabajo cerrado, acordada por escrito antes de empezar;
  - el profesional puede rechazar trabajos sin penalización;
  - diagnóstico de marketing gratuito;
  - las cuentas de marketing (ficha de Google, web, anuncios) quedan a
    nombre del profesional.
- [ ] **Confirmar lo que se promete al particular**: pedir presupuesto es
      gratis; profesionales verificados (alta, seguro de RC, experiencia y
      habilitación cuando aplica); presupuesto antes de empezar; cobertura en
      Barcelona y área metropolitana. Hace falta tener profesionales en la red
      antes de captar solicitudes.
- [ ] Revisión legal de aviso legal, privacidad y cookies (textos modelo).
- [ ] Banner de consentimiento antes de añadir Google Analytics, Meta Pixel
      u otras cookies de medición/marketing.
- [ ] Conectar el formulario a un CRM u hoja de cálculo (ver arriba).
- [ ] Alta en Google Search Console y envío de `/sitemap.xml`.
