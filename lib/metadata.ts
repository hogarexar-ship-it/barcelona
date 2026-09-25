import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { htmlLang, locales, ogLocale } from "./i18n";
import { realAlternatePath } from "./navigation";
import { siteConfig } from "./site-config";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  absoluteTitle?: boolean;
};

/**
 * Metadatos de cada página, con canonical y hreflang hacia su versión en el
 * otro idioma. Si una página (por ejemplo una guía) todavía no existe en el
 * otro idioma, no se declara ese hreflang: apuntar a una página distinta
 * (como la portada) sería una equivalencia falsa y confundiría a Google.
 */
export function buildMetadata({ title, description, path, locale = "es", absoluteTitle = false }: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    if (l === locale) {
      languages[htmlLang[l]] = url;
      continue;
    }
    const alt = realAlternatePath(path, l);
    if (alt) languages[htmlLang[l]] = `${siteConfig.url}${alt}`;
  }
  const esEquivalent = locale === "es" ? path : realAlternatePath(path, "es");
  if (esEquivalent) languages["x-default"] = `${siteConfig.url}${esEquivalent}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
