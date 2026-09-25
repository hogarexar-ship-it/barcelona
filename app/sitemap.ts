import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides-data";
import { htmlLang, locales } from "@/lib/i18n";
import { guidePath, guideSlugs, pagePairs, routes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

/** Todas las páginas en castellano y catalán, cada una con su hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const guideDates = new Map(
    guides.flatMap((guide) => locales.map((locale) => [guidePath(locale, guide.id), new Date(guide.updatedAt)] as const)),
  );
  const legal = new Set(locales.flatMap((l) => [routes[l].legal, routes[l].privacy, routes[l].cookies]));
  const guidePages = new Set(locales.flatMap((l) => guides.map((g) => guidePath(l, g.id))));

  const priority = (path: string) => {
    if (legal.has(path)) return 0.1;
    if (guidePages.has(path) || locales.some((l) => routes[l].guides === path)) return 0.6;
    if (locales.some((l) => routes[l].home === path)) return 1;
    if (locales.some((l) => routes[l].contact === path)) return 0.8;
    return 0.9;
  };

  const bilingualEntries = pagePairs().flatMap((pair) =>
    locales.map((locale) => {
      const path = pair[locale];
      return {
        url: `${siteConfig.url}${path === "/" ? "" : path}`,
        lastModified: guideDates.get(path) ?? now,
        changeFrequency: "monthly" as const,
        priority: priority(path),
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${siteConfig.url}${pair[l] === "/" ? "" : pair[l]}`])),
        },
      };
    }),
  );

  // Guías que todavía solo existen en castellano (no están en guideSlugs,
  // así que pagePairs() no las incluye): se listan aparte, sin alternates
  // en catalán, para no declarar una versión que no existe.
  const esOnlyEntries = guides
    .filter((g) => !guideSlugs[g.id])
    .map((g) => {
      const path = guidePath("es", g.id);
      return {
        url: `${siteConfig.url}${path}`,
        lastModified: new Date(g.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages: { [htmlLang.es]: `${siteConfig.url}${path}` } },
      };
    });

  return [...bilingualEntries, ...esOnlyEntries];
}
