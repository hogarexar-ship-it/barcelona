import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { siteConfig, siteText } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `Marketing digital para fontaneros y electricistas en Barcelona | ${siteConfig.brand}`,
  description: siteText.es.description,
  path: routes.es.home,
  locale: "es",
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeView locale="es" />;
}
