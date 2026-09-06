import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceSearch } from "@/components/ServiceSearch";
import { EmergencyBadge } from "@/components/CtaButtons";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Buscar un servicio para tu hogar",
  description:
    "Busca el trabajo exacto que necesitas en Barcelona: fugas, cortes de luz, revisiones de gas, pintura, muebles a medida o aire acondicionado. Sin perfiles de profesionales que comparar, directo a pedir presupuesto.",
  path: "/buscar-servicios",
});

export default function BuscarServiciosPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Buscar servicio", href: "/buscar-servicios" }]} />
        </Container>
      </div>

      <section className="bg-cream-100 pb-8 pt-4">
        <Container className="max-w-3xl">
          <EmergencyBadge />
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            ¿Qué necesitas para tu casa?
          </h1>
          <p className="mt-3 text-lg text-ink-600">
            Busca el trabajo concreto (una fuga, pintar una habitación, un boletín eléctrico...) y
            pide presupuesto directamente. No es un listado de profesionales: cada resultado te
            lleva a nuestra solicitud guiada, con el rubro y el problema ya preseleccionados.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-3xl">
          <ServiceSearch />
        </Container>
      </section>
    </>
  );
}
