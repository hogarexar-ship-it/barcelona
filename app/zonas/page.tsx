import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { zones } from "@/lib/zones-data";

export const metadata: Metadata = buildMetadata({
  title: "Zonas de Barcelona donde operamos",
  description:
    "Hogarex gestiona servicios de fontanería, electricidad y gas en toda Barcelona: Eixample, Gràcia, Sants-Montjuïc, Sant Martí, Ciutat Vella y Sarrià-Sant Gervasi.",
  path: "/zonas",
});

export default function ZonasPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Zonas", href: "/zonas" }]} />
        </Container>
      </div>
      <Hero
        eyebrow="Cobertura"
        title="Zonas de Barcelona donde gestionamos servicios"
        subtitle="Coordinamos fontanería, electricidad y gas en toda la ciudad. Elegí tu distrito para ver el detalle de cobertura."
        showEmergencyBadge={false}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {zones.map((zone) => (
              <Link
                key={zone.slug}
                href={`/zonas/${zone.slug}`}
                className="group rounded-xl2 border border-ink-100 bg-white p-6 hover:shadow-lg"
              >
                <p className="font-display text-xl font-bold text-ink-900 group-hover:text-terracotta-600">
                  {zone.name}
                </p>
                <p className="mt-2 text-sm text-ink-600">{zone.intro}</p>
                <p className="mt-4 flex flex-wrap gap-2">
                  {zone.neighborhoods.slice(0, 3).map((n) => (
                    <span key={n} className="rounded-full bg-cream-100 px-2.5 py-1 text-xs text-ink-600">
                      {n}
                    </span>
                  ))}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
