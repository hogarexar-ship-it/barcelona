import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Serveis de màrqueting digital per a lampistes i electricistes",
  description:
    "Anuncis a Google i Meta (Facebook i Instagram), landing pages i webs, Google Business Profile i ressenyes, SEO local i GEO per a lampistes i electricistes a Barcelona. També vídeo, disseny gràfic i xarxes socials.",
  path: routes.ca.services,
  locale: "ca",
});

export default function ServicesPage() {
  return <ServicesView locale="ca" />;
}
