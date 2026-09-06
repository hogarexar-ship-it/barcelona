import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.brand} Barcelona`,
    short_name: siteConfig.brand,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#C55F2C",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
