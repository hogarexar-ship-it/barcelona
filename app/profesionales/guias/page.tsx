import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { GuideCards } from "@/components/guides";
import { guidesFor } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";
import { proRoutes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Guías para conseguir más clientes siendo fontanero o electricista",
  description:
    "Guías prácticas para fontaneros y electricistas de Barcelona: cómo conseguir clientes, Google Business Profile, Google Ads, reseñas y posicionamiento en asistentes de IA.",
  path: proRoutes.guides,
});

export default function GuiasProfesionalesPage() {
  return (
    <>
      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: proRoutes.home },
              { name: "Guías", href: proRoutes.guides },
            ]}
          />
        </Container>
      </div>
      <PageHero
        audience="pro"
        eyebrow="Guías para profesionales"
        title="Consigue más clientes para tu oficio"
        subtitle="Consejos prácticos y sin humo para fontaneros y electricistas de Barcelona: Google, anuncios, reseñas y marca."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <GuideCards guides={guidesFor("pro")} />
        </Container>
      </section>
    </>
  );
}
