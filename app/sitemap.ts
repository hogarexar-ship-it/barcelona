import type { MetadataRoute } from "next";
import { guidePath, guides } from "@/lib/guides-data";
import { marketingServices } from "@/lib/marketing-services";
import { routes } from "@/lib/navigation";
import { sectors } from "@/lib/sectors-data";
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
    page(routes.services, 0.9),
    ...marketingServices.map((service) => page(service.path, 0.9)),
    ...sectors.map((sector) => page(sector.path, 0.9)),
    page(routes.contact, 0.8),
    page(routes.guides, 0.6),
    ...guides.map((guide) => page(guidePath(guide), 0.6, new Date(guide.updatedAt))),
    page("/aviso-legal", 0.1),
    page("/politica-privacidad", 0.1),
    page("/politica-cookies", 0.1),
  ];
}
