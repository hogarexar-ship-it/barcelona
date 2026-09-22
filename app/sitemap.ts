import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { marketingOffer, networkOffer } from "@/lib/offers";
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
    page(networkOffer.href, 0.95),
    page(marketingOffer.href, 0.95),
    ...sectors.map((sector) => page(sector.path, 0.9)),
    page("/empezar", 0.8),
    page("/blog", 0.7),
    ...blogPosts.map((post) => page(`/blog/${post.slug}`, 0.6, new Date(post.updatedAt))),
    page("/aviso-legal", 0.1),
    page("/politica-privacidad", 0.1),
    page("/politica-cookies", 0.1),
  ];
}
