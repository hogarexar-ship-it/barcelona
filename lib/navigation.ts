import type { Locale } from "./i18n";
import { locales } from "./i18n";

export type Trade = "fontaneria" | "electricidad";
export type ServiceSlug = "anuncios-google-y-meta" | "landing-page-y-web" | "google-business-profile" | "seo-local" | "crm";

type Routes = {
  home: string;
  services: string;
  guides: string;
  glossary: string;
  contact: string;
  legal: string;
  privacy: string;
  cookies: string;
};

/** Rutas de cada idioma. Si se cambia una, hay que mover también su carpeta en app/. */
export const routes: Record<Locale, Routes> = {
  es: {
    home: "/",
    services: "/servicios",
    guides: "/guias",
    glossary: "/glosario",
    contact: "/asesoramiento-gratuito",
    legal: "/aviso-legal",
    privacy: "/politica-privacidad",
    cookies: "/politica-cookies",
  },
  ca: {
    home: "/ca",
    services: "/ca/serveis",
    guides: "/ca/guies",
    glossary: "/ca/glossari",
    contact: "/ca/assessorament-gratuit",
    legal: "/ca/avis-legal",
    privacy: "/ca/politica-privacitat",
    cookies: "/ca/politica-galetes",
  },
};

/** Parte final de la URL de cada servicio en cada idioma. */
export const serviceSlugs: Record<ServiceSlug, Record<Locale, string>> = {
  "anuncios-google-y-meta": { es: "anuncios-google-y-meta", ca: "anuncis-google-i-meta" },
  "landing-page-y-web": { es: "landing-page-y-web", ca: "landing-page-i-web" },
  "google-business-profile": { es: "google-business-profile", ca: "google-business-profile" },
  "seo-local": { es: "seo-local", ca: "seo-local" },
  crm: { es: "crm-seguimiento-clientes", ca: "crm-seguiment-clients" },
};

/** Parte final de la URL de cada guía en cada idioma (la clave es el id de la guía). */
export const guideSlugs: Record<string, Record<Locale, string>> = {
  "como-conseguir-clientes-fontanero-barcelona": {
    es: "como-conseguir-clientes-fontanero-barcelona",
    ca: "com-aconseguir-clients-lampista-barcelona",
  },
  "google-business-profile-electricistas-barcelona": {
    es: "google-business-profile-electricistas-barcelona",
    ca: "google-business-profile-electricistes-barcelona",
  },
  "google-ads-para-oficios-cuando-compensa": {
    es: "google-ads-para-oficios-cuando-compensa",
    ca: "google-ads-per-a-oficis-quan-compensa",
  },
  "pagar-por-clientes-o-hacer-tu-propio-marketing": {
    es: "pagar-por-clientes-o-hacer-tu-propio-marketing",
    ca: "pagar-per-clients-o-fer-el-teu-propi-marqueting",
  },
  "como-pedir-resenas-google-clientes": {
    es: "como-pedir-resenas-google-clientes",
    ca: "com-demanar-ressenyes-google-clients",
  },
  "como-aparecer-en-chatgpt-profesional-barcelona": {
    es: "como-aparecer-en-chatgpt-profesional-barcelona",
    ca: "com-apareixer-a-chatgpt-professional-barcelona",
  },
  "cuanto-cuesta-marketing-digital-fontaneros-electricistas": {
    es: "cuanto-cuesta-marketing-digital-fontaneros-electricistas",
    ca: "quant-costa-el-marqueting-digital-per-a-lampistes-i-electricistes",
  },
};

const sectorPaths: Record<Trade, Record<Locale, string>> = {
  fontaneria: { es: "/marketing-para-fontaneros", ca: "/ca/marketing-digital-per-a-lampistes" },
  electricidad: { es: "/marketing-para-electricistas", ca: "/ca/marketing-digital-per-a-electricistes" },
};

export function servicePath(locale: Locale, slug: ServiceSlug): string {
  return `${routes[locale].services}/${serviceSlugs[slug][locale]}`;
}

export function sectorPath(locale: Locale, trade: Trade): string {
  return sectorPaths[trade][locale];
}

export function guidePath(locale: Locale, id: string): string {
  return `${routes[locale].guides}/${guideSlugs[id]?.[locale] ?? id}`;
}

/** Todas las páginas del sitio con su URL en cada idioma. */
export function pagePairs(): Record<Locale, string>[] {
  const pair = (get: (locale: Locale) => string) =>
    Object.fromEntries(locales.map((locale) => [locale, get(locale)])) as Record<Locale, string>;
  const staticKeys = Object.keys(routes.es) as (keyof Routes)[];
  return [
    ...staticKeys.map((key) => pair((l) => routes[l][key])),
    ...(Object.keys(serviceSlugs) as ServiceSlug[]).map((slug) => pair((l) => servicePath(l, slug))),
    ...(Object.keys(sectorPaths) as Trade[]).map((trade) => pair((l) => sectorPath(l, trade))),
    ...Object.keys(guideSlugs).map((id) => pair((l) => guidePath(l, id))),
  ];
}

/** URL equivalente en otro idioma; si no hay, la portada de ese idioma. Para el selector ES/CA del header. */
export function alternatePath(pathname: string, target: Locale): string {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = pagePairs().find((p) => locales.some((l) => p[l] === clean));
  return match ? match[target] : routes[target].home;
}

/**
 * Como alternatePath, pero null si no existe página real en ese idioma
 * (por ejemplo, una guía que todavía solo existe en castellano). Para
 * hreflang: nunca hay que declarar una equivalencia que no existe.
 */
export function realAlternatePath(pathname: string, target: Locale): string | null {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = pagePairs().find((p) => locales.some((l) => p[l] === clean));
  return match ? match[target] : null;
}

export type NavLink = { href: string; label: string };

export function mainNav(locale: Locale): NavLink[] {
  const ca = locale === "ca";
  return [
    { href: routes[locale].services, label: ca ? "Serveis" : "Servicios" },
    { href: sectorPath(locale, "fontaneria"), label: ca ? "Lampistes" : "Fontaneros" },
    { href: sectorPath(locale, "electricidad"), label: ca ? "Electricistes" : "Electricistas" },
    { href: routes[locale].guides, label: ca ? "Guies" : "Guías" },
  ];
}
