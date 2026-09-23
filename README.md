# Ofici: marketing para fontaneros y electricistas en Barcelona

Sitio para captar como clientes a **fontaneros y electricistas (autónomos y
empresas) de Barcelona y alrededores** que quieren más clientes o no llegan
a todo. La puerta de entrada es un **asesoramiento gratuito**.

> "Ofici" es un nombre de marca **temporal**. Se cambia en un solo sitio:
> `siteConfig.brand` en `lib/site-config.ts`.

## Servicios

Principales (cada uno con su página en `/servicios/...`):

1. Anuncios en Google y Meta
2. Landing page y página web
3. Google Business Profile y reseñas
4. SEO y GEO (SEO local + posicionamiento en asistentes de IA como ChatGPT o Gemini)

Complementarios (sin página propia): grabación y edición de vídeo, diseño
gráfico y redes sociales.

Todo el contenido de servicios está en `lib/marketing-services.ts`.

## Mapa del sitio

| Ruta | Contenido |
| --- | --- |
| `/` | Home: portada con dos botones «¿qué te pasa?», servicios en tarjetas cortas, «Soy fontanero / Soy electricista», 3 pasos, FAQ y formulario |
| `/servicios` y `/servicios/[slug]` | Índice con tabla «si te pasa esto → te recomendamos» y ficha de cada servicio (pestañas, tarjeta de contacto fija, anterior/siguiente) |
| `/marketing-para-fontaneros`, `/marketing-para-electricistas` | Landings por oficio con color propio y simulación del buscador de Google (`lib/sectors-data.ts`) |
| `/asesoramiento-gratuito` | Formulario en 3 pasos (acepta `?oficio=`, `?servicio=` y `?situacion=`) |
| `/guias` y `/guias/[slug]` | Guía destacada + listado; artículos con barra de lectura, índice lateral y llamadas a la acción (`lib/guides-data.ts`) |
| `/api/contacto` | Recibe el formulario |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | SEO y GEO |

## Formulario y recepción de contactos

El formulario (`components/ContactForm.tsx`) va en 3 pasos y pide: oficio, autónomo o
empresa, municipio, nombre, nombre del negocio (opcional), medio de
contacto preferido (llamada, WhatsApp o email) con su dato, servicios que
le interesan (opcional), su situación (opcional) y la aceptación de la
política de privacidad.

Se envía a `/api/contacto`, que valida los datos y los reenvía a la URL de
la variable de entorno **`LEADS_WEBHOOK_URL`**. Hay que configurarla en
Vercel (Settings → Environment Variables) con un webhook de Make, Zapier,
n8n o un Google Apps Script que guarde el contacto en una hoja de cálculo o
lo envíe por email. **Mientras no esté configurada, los envíos fallan** y el
formulario ofrece mandar los mismos datos por WhatsApp.

## Parte para particulares (oculta)

La versión con zona para particulares (fontaneros y electricistas para
clientes finales, wizard de solicitud) y la red de clientes a comisión se
retiraron del sitio. El código está en el historial de git, en el commit
`8bb49f2`, por si se quiere recuperar.

## Diseño

Criterio de textos: frases cortas y visibles; el detalle (qué incluye cada servicio, el plan por oficio, las FAQ) va en desplegables para quien quiera leer más. Cada servicio tiene un `benefit` de pocas palabras para tarjetas y listados.


Paleta crema y terracota (`accent-*`, `surface-*` en `tailwind.config.ts` y
`app/globals.css`), botones principales en naranja intenso `#EA580C`,
diseño plano sin sombras. Fotos en `public/images/`, catalogadas en
`lib/photos.ts`.

## Stack técnico

Next.js 14 (App Router), TypeScript estricto (`noUncheckedIndexedAccess`),
Tailwind CSS. Sin dependencias extra.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Checklist antes de publicar

- [ ] Configurar `LEADS_WEBHOOK_URL` en Vercel y probar un envío real.
- [ ] Nombre de marca definitivo, dominio y logo (`lib/site-config.ts`,
      `components/Logo.tsx`, `public/favicon.svg`).
- [ ] Teléfono, WhatsApp, email, dirección, razón social/CIF y redes
      reales (todo lo marcado `PLACEHOLDER` en `lib/site-config.ts`).
- [ ] Revisar lo que el sitio promete: asesoramiento gratuito y sin
      compromiso; las cuentas, el dominio y la web quedan a nombre del
      cliente; plazos orientativos de las FAQ.
- [ ] Licencia de las fotos: varias tienen nombres típicos de Freepik
      (requieren atribución con la licencia gratuita).
- [ ] Revisión legal de aviso legal, privacidad y cookies (textos modelo).
- [ ] Banner de consentimiento antes de añadir Google Analytics, Meta Pixel
      u otras cookies de medición.
- [ ] Alta en Google Search Console y envío de `/sitemap.xml`.
