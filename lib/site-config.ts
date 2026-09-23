import type { Locale } from "./i18n";
import { routes } from "./navigation";

/**
 * Fuente única de verdad para marca y contacto.
 * Cambiar el nombre de la marca aquí lo cambia en todo el sitio.
 *
 * TODO ANTES DE PRODUCCIÓN: reemplazar los valores marcados como PLACEHOLDER
 * (ver README.md, "Checklist antes de publicar").
 */

export const siteConfig = {
  brand: "Ofici", // PLACEHOLDER: nombre de marca temporal
  legalName: "Ofici Barcelona", // PLACEHOLDER: razón social / CIF real
  tagline: "Marketing digital para fontaneros y electricistas en Barcelona",
  description:
    "Ofici ayuda a fontaneros y electricistas de Barcelona y alrededores a conseguir más clientes: anuncios en Google y Meta (Facebook e Instagram), landing pages y webs, Google Business Profile y reseñas, SEO local y GEO, y CRM para no perder clientes. Asesoramiento inicial gratuito.",
  url: "https://www.ofici.es", // PLACEHOLDER: dominio definitivo
  phoneDisplay: "930 00 00 00", // PLACEHOLDER
  phoneE164: "+34930000000", // PLACEHOLDER
  whatsappNumber: "34600000000", // PLACEHOLDER (sin '+', formato wa.me)
  email: "hola@ofici.es", // PLACEHOLDER
  addressLocality: "Barcelona",
  addressRegion: "Cataluña",
  addressCountry: "ES",
  postalCode: "08001", // PLACEHOLDER
  streetAddress: "Carrer de Provença, 1", // PLACEHOLDER: puede ser una dirección administrativa
  openingHours: "Lunes a viernes, 9:00 a 19:00", // PLACEHOLDER: horario real de atención
  areaServed: "Barcelona y alrededores",
  socials: {
    instagram: "https://www.instagram.com/ofici.bcn", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/company/ofici-bcn", // PLACEHOLDER
  },
};

/** Textos de marca que cambian con el idioma. */
export const siteText: Record<Locale, { tagline: string; description: string; openingHours: string; areaServed: string }> = {
  es: {
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    openingHours: siteConfig.openingHours,
    areaServed: siteConfig.areaServed,
  },
  ca: {
    tagline: "Màrqueting digital per a lampistes i electricistes a Barcelona",
    description:
      "Ofici ajuda lampistes i electricistes de Barcelona i rodalies a aconseguir més clients: anuncis a Google i Meta (Facebook i Instagram), landing pages i webs, Google Business Profile i ressenyes, SEO local i GEO, i CRM per no perdre clients. Assessorament inicial gratuït.",
    openingHours: "De dilluns a divendres, de 9.00 a 19.00", // PLACEHOLDER: horari real
    areaServed: "Barcelona i rodalies",
  },
};

export function primaryCta(locale: Locale = "es") {
  return { label: locale === "ca" ? "Assessorament gratis" : "Asesoramiento gratis", href: routes[locale].contact };
}

export function whatsappHref(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telHref(): string {
  return `tel:${siteConfig.phoneE164}`;
}

export function whatsappMessage(locale: Locale = "es"): string {
  return locale === "ca"
    ? `Hola ${siteConfig.brand}, soc professional a Barcelona i vull informació sobre l'assessorament gratuït.`
    : `Hola ${siteConfig.brand}, soy profesional en Barcelona y quiero información sobre el asesoramiento gratuito.`;
}
