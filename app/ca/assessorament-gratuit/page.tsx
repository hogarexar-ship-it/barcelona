import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Assessorament gratuït de màrqueting digital per a lampistes i electricistes",
  description:
    "Explica'ns la teva situació i et proposem, gratis i sense compromís, l'estratègia per aconseguir més clients per al teu negoci de lampisteria o electricitat a Barcelona.",
  path: routes.ca.contact,
  locale: "ca",
});

export default function ContactPage() {
  return <ContactView locale="ca" />;
}
