import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PriceTable } from "@/components/PriceTable";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "Precios de fontanería, electricidad y gas en Barcelona",
  description:
    "Consultá los precios orientativos de fontanería, electricidad y gas en Barcelona. Siempre confirmamos el presupuesto final antes de empezar el trabajo.",
  path: "/precios",
});

export default function PreciosPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Precios", href: "/precios" }]} />
        </Container>
      </div>
      <Hero
        eyebrow="Precios"
        title="Precios orientativos en Barcelona"
        subtitle="Estos precios son una referencia para que sepas qué esperar. El presupuesto final se confirma siempre antes de que el profesional empiece el trabajo, sin sorpresas."
        showEmergencyBadge={false}
      />

      <section className="py-16">
        <Container className="space-y-14">
          {services.map((service) => (
            <div key={service.slug} id={service.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl font-bold text-ink-900">{service.name}</h2>
                <Link href={`/servicios/${service.slug}`} className="text-sm font-semibold text-terracotta-600 hover:underline">
                  Ver servicio completo →
                </Link>
              </div>
              <div className="mt-4">
                <PriceTable rows={service.pricing} note={service.pricingNote} />
              </div>
            </div>
          ))}

          <div className="rounded-xl2 border border-ink-100 bg-cream-100 p-6 text-sm text-ink-600">
            <p className="font-semibold text-ink-900">¿Por qué son orientativos?</p>
            <p className="mt-2">
              El precio final de cada trabajo depende de factores como el estado de la instalación,
              los materiales necesarios, el acceso a la vivienda y el horario. Por eso siempre
              confirmamos un presupuesto concreto antes de que el profesional empiece, para que no
              tengas sorpresas.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
