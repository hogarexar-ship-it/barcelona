import type { Metadata } from "next";
import { GuidesView } from "@/components/views/GuidesView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Guías para conseguir más clientes siendo fontanero o electricista",
  description:
    "Guías prácticas para fontaneros y electricistas de Barcelona: cómo conseguir clientes, Google Business Profile, Google Ads, reseñas y posicionamiento en asistentes de IA.",
  path: routes.es.guides,
  locale: "es",
});

export default function GuidesPage() {
  return <GuidesView locale="es" />;
}
