/**
 * Fuente única de verdad para datos de marca y contacto.
 *
 * TODO ANTES DE PRODUCCIÓN: reemplazar los valores marcados como PLACEHOLDER
 * con los datos reales del negocio (ver README.md, sección "Checklist antes
 * de publicar"). Mientras tanto el sitio compila y es funcional con estos
 * valores de ejemplo.
 */

export const siteConfig = {
  brand: "Hogarex",
  legalName: "Hogarex Barcelona", // PLACEHOLDER: razón social / CIF real
  tagline:
    "Vos nos contás el problema, nosotros te conseguimos al profesional adecuado. Rápido y sin vueltas.",
  shortTagline: "El problema de tu hogar, resuelto. Sin vueltas.",
  description:
    "Hogarex gestiona en Barcelona servicios de fontanería, electricidad y gas. Nos contás qué necesitás y nosotros coordinamos al profesional de nuestra red que resuelve el trabajo. Sin buscar perfiles, sin comparar presupuestos por tu cuenta: una sola llamada y nos encargamos.",
  url: "https://www.hogarex.es", // PLACEHOLDER: dominio definitivo
  phoneDisplay: "930 00 00 00", // PLACEHOLDER
  phoneE164: "+34930000000", // PLACEHOLDER
  whatsappNumber: "34600000000", // PLACEHOLDER (sin '+', formato wa.me)
  email: "hola@hogarex.es", // PLACEHOLDER
  addressLocality: "Barcelona",
  addressRegion: "Cataluña",
  addressCountry: "ES",
  postalCode: "08001", // PLACEHOLDER
  streetAddress: "Carrer de Provença, 1", // PLACEHOLDER — puede ser una dirección administrativa, no un local público
  openingHours: "Lu-Do 08:00-21:00 · Urgencias 24h",
  emergencyAvailable: true,
  socials: {
    instagram: "https://www.instagram.com/hogarex", // PLACEHOLDER
    facebook: "https://www.facebook.com/hogarex", // PLACEHOLDER
  },
  foundingArgentina: "hogarex.ar",
};

export function whatsappHref(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function telHref(): string {
  return `tel:${siteConfig.phoneE164}`;
}

export function mailHref(subject?: string): string {
  return subject
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.email}`;
}
