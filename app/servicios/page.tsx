import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Servicios para el hogar en Barcelona",
  description:
    "Fontanería, electricidad, gas, pintura, carpintería y climatización en Barcelona. Contacta con Hogarex: coordinamos al profesional de nuestra red que resuelve tu problema.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Servicios", href: "/servicios" }]} />
        </Container>
      </div>
      <Hero
        eyebrow="Servicios"
        title="Todos los servicios para tu hogar en Barcelona"
        subtitle={`Nos cuentas qué necesitas y coordinamos, dentro de la red de profesionales de ${siteConfig.brand}, a quien resuelve el trabajo. Sin buscar perfiles ni comparar anuncios por tu cuenta.`}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
