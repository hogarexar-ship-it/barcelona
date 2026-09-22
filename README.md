# Ofici — Más clientes para tu oficio en Barcelona

Sitio web B2B para **profesionales de oficios** en Barcelona (empresas de
reformas, fontaneros y electricistas). El cliente del negocio es el
profesional, no el consumidor final. El objetivo del sitio es **captar
leads de profesionales** a través de SEO y GEO (posicionamiento en
buscadores y en asistentes de IA).

> "Ofici" es un nombre de marca **temporal**. Se cambia en un solo sitio:
> `siteConfig.brand` en `lib/site-config.ts`. Antes de fijarlo, comprobar
> disponibilidad de dominio, redes y registro de marca (OEPM).

## Qué ofrece el negocio

1. **Red de clientes** (`/conseguir-clientes`): captamos clientes finales y
   se los pasamos al profesional que encaja por oficio y zona. El
   profesional paga una comisión solo por los trabajos que cierra.
2. **Marketing para profesionales** (`/marketing-para-profesionales`):
   Google Business Profile, Google Ads, Meta Ads, SEO/web (incluido GEO),
   marca, estrategia y redes sociales. Plan mensual a medida, con
   diagnóstico inicial gratuito como gancho de captación.

## Sectores iniciales (y por qué)

| Sector | Página | Motivo |
| --- | --- | --- |
| Reformas | `/clientes-para-reformas` | Ticket más alto (más valor por comisión), muchísimas empresas pequeñas compitiendo y anuncios muy caros: necesitan ayuda para captar. |
| Fontanería | `/clientes-para-fontaneros` | Demanda constante todo el año y mayoritariamente autónomos sin tiempo para marketing. |
| Electricidad | `/clientes-para-electricistas` | Alta demanda y en crecimiento (boletines/CIE, cuadros, cargadores de coche eléctrico, autoconsumo). |

Siguiente candidato natural: climatización (aire acondicionado y aerotermia),
más estacional. Para añadir un sector: nuevo objeto en `lib/sectors-data.ts`,
nuevo slug en `lib/navigation.ts` y una página de 15 líneas en
`app/clientes-para-<slug>/page.tsx` (copiar una existente).

## Mapa del sitio

| Ruta | Contenido |
| --- | --- |
| `/` | Home: los dos servicios, sectores, cómo funciona, FAQ y formulario |
| `/conseguir-clientes` | Servicio 1: red de clientes a comisión |
| `/marketing-para-profesionales` | Servicio 2: marketing + diagnóstico gratis |
| `/clientes-para-{reformas,fontaneros,electricistas}` | Landings SEO por sector |
| `/empezar` | Formulario único de alta (acepta `?interes=` y `?oficio=`) |
| `/blog` y `/blog/[slug]` | Guías para profesionales (SEO/GEO) |
| `/aviso-legal`, `/politica-privacidad`, `/politica-cookies` | Legales |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | SEO y GEO |

Principio de diseño: **una sola acción** en todo el sitio, "Quiero más
clientes" → formulario. Navegación de 4 entradas (Red de clientes,
Marketing, Sectores, Guías). En móvil, una barra fija con ese mismo CTA y
WhatsApp.

## SEO y GEO

- Páginas por intención de búsqueda del profesional: "clientes para
  fontaneros Barcelona", "marketing para empresas de reformas", "Google
  Business para electricistas", etc.
- Cada guía empieza con un bloque **"En resumen"** (respuesta directa de
  2-4 frases), que es lo que suelen citar buscadores y asistentes de IA.
- JSON-LD: `ProfessionalService` (organización), `Service` por página de
  servicio y sector, `FAQPage`, `BreadcrumbList` y `BlogPosting`.
- `/llms.txt` resume servicios, sectores y guías para asistentes de IA.
- El contenido del blog está en `lib/blog-data.ts`. Para publicar una guía
  nueva basta con añadir un objeto al array (sitemap, índice del blog,
  llms.txt y enlaces relacionados se actualizan solos).

## Formulario de leads

`components/ProLeadForm.tsx` pide lo mínimo (interés, nombre, teléfono,
oficio y empresa opcional) y al enviar abre **WhatsApp** con los datos ya
redactados. No necesita backend, pero el lead solo llega si el profesional
envía el mensaje. Recomendado a corto plazo: guardar los leads también en
un CRM o una hoja de cálculo mediante una API route (por ejemplo con un
webhook de Make/Zapier, Resend o el CRM que se use).

## Stack técnico

Next.js 14 (App Router, páginas estáticas), TypeScript estricto
(`noUncheckedIndexedAccess`), Tailwind CSS. Sin dependencias extra.

```
app/          rutas (cada carpeta = una URL)
components/   UI reutilizable (Header, Footer, PageHero, ProLeadForm, SectorPage…)
lib/          datos y configuración (site-config, offers, sectors-data, blog-data, schema)
public/       favicon
```

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
npm run typecheck
```

## Checklist antes de publicar

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
- [ ] Revisión legal de aviso legal, privacidad y cookies (textos modelo).
- [ ] Banner de consentimiento antes de añadir Google Analytics, Meta Pixel
      u otras cookies de medición/marketing.
- [ ] Conectar el formulario a un CRM u hoja de cálculo (ver arriba).
- [ ] Alta en Google Search Console y envío de `/sitemap.xml`.
