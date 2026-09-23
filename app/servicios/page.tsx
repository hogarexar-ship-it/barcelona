import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ContactSection, ExtraServices, ServiceGrid } from "@/components/sections";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de marketing para fontaneros y electricistas",
  description:
    "Anuncios en Google y Meta, landing pages y webs, Google Business Profile y SEO local para fontaneros y electricistas en Barcelona. También vídeo, diseño gráfico y redes sociales.",
  path: routes.services,
});

export default function ServiciosPage() {
  return (
    <>
      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Servicios", href: routes.services }]} />
        </Container>
      </div>
      <PageHero
        title="Servicios para conseguir más clientes"
        subtitle="Cuatro servicios principales para que te encuentren y te llamen, y extras si tu negocio los necesita. Puedes empezar por uno solo."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <ServiceGrid />
          <div className="mt-12">
            <ExtraServices />
          </div>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
