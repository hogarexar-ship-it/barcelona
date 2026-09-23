import type { MetadataRoute } from "next";
import { guidePath, guides } from "@/lib/guides-data";
import { consumerRoutes, proRoutes } from "@/lib/navigation";
import { sectors } from "@/lib/pro-sectors-data";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified = new Date()) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    page("", 1),
    ...services.map((service) => page(service.path, 0.95)),
    page(consumerRoutes.request, 0.9),
    page(consumerRoutes.guides, 0.6),
    page(proRoutes.home, 0.85),
    page(proRoutes.network, 0.8),
    page(proRoutes.marketing, 0.8),
    ...sectors.map((sector) => page(sector.path, 0.8)),
    page(proRoutes.join, 0.7),
    page(proRoutes.guides, 0.6),
    ...guides.map((guide) => page(guidePath(guide), 0.6, new Date(guide.updatedAt))),
    page("/aviso-legal", 0.1),
    page("/politica-privacidad", 0.1),
    page("/politica-cookies", 0.1),
  ];
}
