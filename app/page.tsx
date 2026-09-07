import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.brand} Barcelona — Fontanería, electricidad, gas y más sin complicaciones`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return <HomeContent />;
}
