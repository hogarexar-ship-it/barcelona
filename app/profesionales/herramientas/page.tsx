import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProToolIcon } from "@/components/ProToolIcon";
import { buildMetadata } from "@/lib/metadata";
import { proTools } from "@/lib/professionals-data";

export const metadata: Metadata = buildMetadata({
  title: "Herramientas gratuitas para profesionales del hogar en Barcelona",
  description:
    "Calculadora de precios, generador de presupuestos y plantillas de WhatsApp, gratis para fontaneros, electricistas, gasistas, pintores, carpinteros y técnicos de climatización.",
  path: "/profesionales/herramientas",
});

export default function HerramientasPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: "/profesionales" },
              { name: "Herramientas", href: "/profesionales/herramientas" },
            ]}
          />
        </Container>
      </div>

      <section className="bg-cream-100 pb-10 pt-4">
        <Container className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Herramientas gratuitas para tu día a día
          </h1>
          <p className="mt-3 text-lg text-ink-600">
            Pensadas para cualquier profesional del hogar en Barcelona, te unas o no a Hogarex.
            Úsalas todas las veces que necesites.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {proTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/profesionales/${tool.slug}`}
                className="group flex flex-col rounded-xl2 border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
              >
                <ProToolIcon icon={tool.icon} />
                <p className="mt-4 font-display text-lg font-bold text-ink-900 group-hover:text-terracotta-600">
                  {tool.name}
                </p>
                <p className="mt-2 text-sm text-ink-600">{tool.shortDescription}</p>
                <span className="mt-4 text-sm font-semibold text-terracotta-600">Usar gratis →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-6">
            <p className="font-semibold text-ink-900">
              ¿Prefieres dejar de gestionar todo esto tú mismo?
            </p>
            <p className="mt-2 text-sm text-ink-600">
              Únete a la red de Hogarex y nosotros nos encargamos de tus clientes, tus citas y tus
              presupuestos.
            </p>
            <Link
              href="/profesionales#unirme"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
            >
              Quiero unirme
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
