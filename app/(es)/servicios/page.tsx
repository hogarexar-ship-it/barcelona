import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de marketing digital para fontaneros y electricistas",
  description:
    "Anuncios en Google y Meta (Facebook e Instagram), landing pages y webs, Google Business Profile y reseñas, SEO local y GEO para fontaneros y electricistas en Barcelona. También vídeo, diseño gráfico y redes sociales.",
  path: routes.es.services,
  locale: "es",
});

export default function ServicesPage() {
  return <ServicesView locale="es" />;
}
