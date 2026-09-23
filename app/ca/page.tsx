import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { siteConfig, siteText } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `Màrqueting digital per a lampistes i electricistes a Barcelona | ${siteConfig.brand}`,
  description: siteText.ca.description,
  path: routes.ca.home,
  locale: "ca",
  absoluteTitle: true,
});

export default function HomePage() {
  return <HomeView locale="ca" />;
}
