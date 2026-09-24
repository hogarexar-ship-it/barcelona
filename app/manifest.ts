import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand,
    short_name: siteConfig.brand,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBF7",
    theme_color: "#CE6A27",
    icons: [
      {
        src: "/images/logo-icon.png",
        sizes: "980x980",
        type: "image/png",
      },
    ],
  };
}
