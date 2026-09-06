import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PriceTable } from "@/components/PriceTable";
import { PricingCalculator } from "@/components/PricingCalculator";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { services } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "¿Cuánto cobrar por un trabajo? Guía y calculadora gratis",
  description:
    "Guía gratuita para fontaneros, electricistas, gasistas, pintores, carpinteros y técnicos de climatización: cuánto cobrar en Barcelona por hora, materiales y desplazamiento, con calculadora incluida.",
  path: "/profesionales/cuanto-cobrar",
});

const faqs = [
  {
    question: "¿Cómo calculo mi tarifa por hora como autónomo?",
    answer:
      "Suma tus gastos fijos mensuales (seguro, herramientas, vehículo, cuota de autónomo) y divídelos entre las horas facturables que trabajas al mes. A ese resultado súmale el margen que quieras ganar. La mayoría de profesionales del hogar en Barcelona se mueven entre 20€ y 40€/hora según el oficio y la experiencia.",
  },
  {
    question: "¿Debo cobrar la visita aunque no haga el trabajo?",
    answer:
      "Es habitual cobrar una visita de diagnóstico (entre 30€ y 50€) que se descuenta del presupuesto si finalmente se realiza el trabajo. Así cubres tu desplazamiento y tiempo aunque el cliente no acepte el presupuesto.",
  },
  {
    question: "¿Cuánto se suele recargar por una urgencia?",
    answer:
      "Un recargo del 30% al 50% sobre la tarifa base es habitual para trabajos fuera de horario o de fin de semana en Barcelona.",
  },
  {
    question: "¿Tengo que aplicar IVA a mis presupuestos?",
    answer:
      "Si facturas como autónomo o empresa, sí: el IVA general en España es del 21%, salvo excepciones (por ejemplo, ciertas reformas en vivienda habitual pueden tener un IVA reducido del 10%). Consulta con tu gestoría el tipo aplicable a cada caso.",
  },
];

export default function CuantoCobrarPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: "/profesionales" },
              { name: "Cuánto cobrar", href: "/profesionales/cuanto-cobrar" },
            ]}
          />
        </Container>
      </div>

      <section className="bg-cream-100 pb-10 pt-4">
        <Container className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-500/10 px-3 py-1 text-xs font-semibold text-terracotta-600">
            Herramienta gratuita para profesionales
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            ¿Cuánto cobrar por un trabajo en Barcelona?
          </h1>
          <p className="mt-3 text-lg text-ink-600">
            Una guía de precios orientativos por oficio, más una calculadora rápida para armar tu
            presupuesto sumando horas, materiales, desplazamiento y urgencia.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <PricingCalculator />
        </Container>
      </section>

      <section className="bg-cream-100 py-16">
        <Container className="max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Precios orientativos por oficio en Barcelona
            </h2>
            <p className="mt-2 text-ink-600">
              Referencias de mercado a septiembre de 2026. Úsalas como punto de partida, no como
              tarifa fija: tu experiencia y tu zona también cuentan.
            </p>
          </div>
          {services.map((service) => (
            <div key={service.slug} id={service.slug}>
              <h3 className="font-display text-xl font-bold text-ink-900">{service.name}</h3>
              <div className="mt-4">
                <PriceTable rows={service.pricing} note={service.pricingNote} />
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink-900">Preguntas frecuentes</h2>
          <p className="mt-2 text-ink-600">
            Dudas habituales de fontaneros, electricistas, gasistas, pintores, carpinteros y
            técnicos de climatización sobre cómo poner precio a su trabajo.
          </p>
          <div className="mt-6">
            <FaqAccordion faqs={faqs} title="" />
          </div>
        </Container>
      </section>

      <ProJoinBanner />
    </>
  );
}

function ProJoinBanner() {
  return (
    <section className="bg-ink-900 py-16 text-white">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">¿Y si no tuvieras que calcular esto cada vez?</p>
          <p className="mt-2 max-w-xl text-ink-100">
            En Hogarex el presupuesto ya llega hablado con el cliente antes de que aceptes el
            trabajo. Tú te enfocas en hacerlo.
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
  );
}
