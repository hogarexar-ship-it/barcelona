/**
 * Idiomas del sitio. El castellano vive en la raíz (/servicios…) y el catalán
 * bajo /ca (/ca/serveis…), cada uno con sus propias URLs para que Google
 * indexe las dos versiones. Ver lib/navigation.ts para la tabla de rutas.
 */
export type Locale = "es" | "ca";

export const locales: Locale[] = ["es", "ca"];

export const htmlLang: Record<Locale, string> = { es: "es-ES", ca: "ca-ES" };
export const ogLocale: Record<Locale, string> = { es: "es_ES", ca: "ca_ES" };
export const dateLocale: Record<Locale, string> = { es: "es-ES", ca: "ca-ES" };
export const localeName: Record<Locale, string> = { es: "Castellano", ca: "Català" };

export function localeFromPath(pathname: string): Locale {
  return pathname === "/ca" || pathname.startsWith("/ca/") ? "ca" : "es";
}

/** Devuelve el texto en el idioma pedido: t("Servicios", "Serveis"). */
export function translator(locale: Locale) {
  return (es: string, ca: string): string => (locale === "ca" ? ca : es);
}
