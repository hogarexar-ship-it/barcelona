import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { GuideCards } from "@/components/guides";
import { sortedGuides } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Guías para conseguir más clientes siendo fontanero o electricista",
  description:
    "Guías prácticas para fontaneros y electricistas de Barcelona: cómo conseguir clientes, Google Business Profile, Google Ads, reseñas y posicionamiento en asistentes de IA.",
  path: routes.guides,
});

export default function GuiasPage() {
  return (
    <>
      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Guías", href: routes.guides }]} />
        </Container>
      </div>
      <PageHero
        title="Guías para conseguir más clientes"
        subtitle="Guías prácticas para fontaneros y electricistas de Barcelona: Google, anuncios, reseñas y web."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <GuideCards guides={sortedGuides()} />
        </Container>
      </section>
    </>
  );
}
