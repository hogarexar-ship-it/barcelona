import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Asesoramiento gratuito de marketing digital para fontaneros y electricistas",
  description:
    "Cuéntanos tu situación y te proponemos, gratis y sin compromiso, la estrategia para conseguir más clientes para tu negocio de fontanería o electricidad en Barcelona.",
  path: routes.es.contact,
  locale: "es",
});

export default function ContactPage() {
  return <ContactView locale="es" />;
}
