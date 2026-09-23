import { consumerRoutes, proRoutes } from "./navigation";

/**
 * Fuente única de verdad para marca, contacto y condiciones comerciales.
 * Cambiar el nombre de la marca aquí lo cambia en todo el sitio.
 *
 * TODO ANTES DE PRODUCCIÓN: reemplazar los valores marcados como PLACEHOLDER
 * (ver README.md, "Checklist antes de publicar").
 */

export const siteConfig = {
  brand: "Ofici", // PLACEHOLDER: nombre de marca temporal
  legalName: "Ofici Barcelona", // PLACEHOLDER: razón social / CIF real
  tagline: "Fontaneros y electricistas de confianza en Barcelona",
  proTagline: "Más clientes para tu oficio",
  description:
    "Ofici te pone en contacto con fontaneros y electricistas verificados de tu zona de Barcelona: fugas, atascos, calentadores, averías eléctricas, boletines y más. Pedir presupuesto es gratis y sin compromiso.",
  proDescription:
    "Ofici ayuda a fontaneros y electricistas de Barcelona a conseguir más clientes: te pasamos trabajos de tu zona a cambio de una comisión o llevamos tu marketing (Google Business, Google Ads, Meta, SEO, marca y redes).",
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
  openingHours: "Lunes a sábado, 8:00 a 20:00", // PLACEHOLDER: horario real de atención
  areaServed: "Barcelona y área metropolitana",
  socials: {
    instagram: "https://www.instagram.com/ofici.bcn", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/company/ofici-bcn", // PLACEHOLDER
  },
};

/**
 * Condiciones comerciales que se muestran en el sitio. Revisar con el
 * negocio antes de publicar: son compromisos visibles para el profesional.
 */
export const commercialTerms = {
  network: {
    signupFee: "Alta gratuita",
    model: "Pagas una comisión solo cuando cierras un trabajo que te hemos pasado.",
    noFixedFee: "Sin cuotas mensuales fijas",
  },
  marketing: {
    freeAudit: "Diagnóstico gratuito de tu presencia online",
    model: "Plan mensual a medida: eliges solo los servicios que necesitas.",
  },
};

export const consumerCta = { label: "Pedir presupuesto", href: consumerRoutes.request };
export const proCta = { label: "Quiero más clientes", href: proRoutes.join };

export function whatsappHref(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telHref(): string {
  return `tel:${siteConfig.phoneE164}`;
}

export const consumerWhatsappMessage = `Hola ${siteConfig.brand}, necesito un profesional en Barcelona.`;
export const proWhatsappMessage = `Hola ${siteConfig.brand}, soy profesional en Barcelona y quiero información para conseguir más clientes.`;
