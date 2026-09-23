import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { htmlLang, locales, ogLocale } from "./i18n";
import { alternatePath } from "./navigation";
import { siteConfig } from "./site-config";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  absoluteTitle?: boolean;
};

/** Metadatos de cada página, con canonical y hreflang hacia su versión en el otro idioma. */
export function buildMetadata({ title, description, path, locale = "es", absoluteTitle = false }: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((l) => [htmlLang[l], `${siteConfig.url}${l === locale ? path : alternatePath(path, l)}`]),
  );
  languages["x-default"] = `${siteConfig.url}${locale === "es" ? path : alternatePath(path, "es")}`;

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
