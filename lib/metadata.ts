import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function buildMetadata({ title, description, path, absoluteTitle = false }: BuildMetadataArgs): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand,
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
