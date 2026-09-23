import type { Metadata } from "next";
import { GuidesView } from "@/components/views/GuidesView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Guies per aconseguir més clients com a lampista o electricista",
  description:
    "Guies pràctiques per a lampistes i electricistes de Barcelona: com aconseguir clients, Google Business Profile, Google Ads, ressenyes i posicionament als assistents d'IA.",
  path: routes.ca.guides,
  locale: "ca",
});

export default function GuidesPage() {
  return <GuidesView locale="ca" />;
}
