import type { Metadata } from "next";
import { GlossaryView } from "@/components/views/GlossaryView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Glosario de marketing digital para fontaneros y electricistas",
  description:
    "Qué significa CAC, CTR, CPC, SEO local, GEO, lead o remarketing: términos de marketing digital explicados en plata para fontaneros y electricistas de Barcelona.",
  path: routes.es.glossary,
  locale: "es",
});

export default function GlossaryPage() {
  return <GlossaryView locale="es" />;
}
