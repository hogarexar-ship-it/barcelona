import type { Metadata } from "next";
import { GlossaryView } from "@/components/views/GlossaryView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Glossari de màrqueting digital per a lampistes i electricistes",
  description:
    "Què significa CAC, CTR, CPC, SEO local, GEO, lead o remarketing: termes de màrqueting digital explicats clarament per a lampistes i electricistes de Barcelona.",
  path: routes.ca.glossary,
  locale: "ca",
});

export default function GlossaryPage() {
  return <GlossaryView locale="ca" />;
}
