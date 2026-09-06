import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/solicitud",
    "/servicios",
    "/zonas",
    "/precios",
    "/sobre-nosotros",
    "/contacto",
    "/urgencias-24h",
    "/blog",
    "/aviso-legal",
    "/politica-privacidad",
    "/politica-cookies",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/solicitud" ? 0.95 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const zoneRoutes = zones.map((zone) => ({
    url: `${siteConfig.url}/zonas/${zone.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...zoneRoutes, ...blogRoutes];
}
