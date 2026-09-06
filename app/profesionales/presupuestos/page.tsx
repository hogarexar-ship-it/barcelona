import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Generador de presupuestos gratis para profesionales del hogar",
  description:
    "Crea un presupuesto profesional en dos minutos para tus clientes de fontanería, electricidad, gas, pintura, carpintería o climatización. Gratis, sin registro, descárgalo en PDF.",
  path: "/profesionales/presupuestos",
});

export default function PresupuestosPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6 print:hidden">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: "/profesionales" },
              { name: "Generador de presupuestos", href: "/profesionales/presupuestos" },
            ]}
          />
        </Container>
      </div>

      <section className="bg-cream-100 pb-10 pt-4 print:hidden">
        <Container className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-500/10 px-3 py-1 text-xs font-semibold text-terracotta-600">
            Herramienta gratuita para profesionales
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Genera un presupuesto en dos minutos
          </h1>
          <p className="mt-3 text-lg text-ink-600">
            Rellena los datos, añade los conceptos y descárgalo o imprímelo en PDF. Sin registro,
            sin límite de usos.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-4xl">
          <QuoteGenerator />
        </Container>
      </section>

      <section className="bg-ink-900 py-16 text-white print:hidden">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">¿Cansado de armar presupuestos uno a uno?</p>
            <p className="mt-2 max-w-xl text-ink-100">
              En Hogarex el presupuesto llega ya acordado con el cliente antes de que aceptes el
              trabajo.
            </p>
          </div>
          <Link
            href="/profesionales#unirme"
            className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
          >
            Quiero unirme
          </Link>
        </Container>
      </section>
    </>
  );
}
