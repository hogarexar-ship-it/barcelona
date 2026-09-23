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
    "Ofici ayuda a fontaneros y electricistas de Barcelona y alrededores a conseguir más clientes: anuncios en Google y Meta (Facebook e Instagram), landing pages y webs, Google Business Profile y reseñas, SEO local y GEO. Asesoramiento inicial gratuito.",
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

export const primaryCta = { label: "Asesoramiento gratis", href: routes.contact };

export function whatsappHref(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telHref(): string {
  return `tel:${siteConfig.phoneE164}`;
}

export const whatsappMessage = `Hola ${siteConfig.brand}, soy profesional en Barcelona y quiero información sobre el asesoramiento gratuito.`;
