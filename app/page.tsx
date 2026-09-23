import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ProBand } from "@/components/ProBand";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import {
  consumerSteps,
  Districts,
  HeroPhotos,
  QuickProblems,
  RequestSection,
  ServiceCards,
  TrustBar,
} from "@/components/consumer";
import { GuideCards } from "@/components/guides";
import { guidesFor } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: `Fontaneros y electricistas en Barcelona | ${siteConfig.brand}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const faqs: Faq[] = [
  {
    question: `¿Qué es ${siteConfig.brand}?`,
    answer: `${siteConfig.brand} es un servicio de Barcelona que te pone en contacto con fontaneros y electricistas verificados de tu zona. Nos cuentas qué necesitas y te ponemos en contacto con el profesional adecuado, sin que tengas que buscar ni comparar por tu cuenta.`,
  },
  {
    question: `¿Cuánto cuesta usar ${siteConfig.brand}?`,
    answer:
      "Nada. Pedir presupuesto es gratis y sin compromiso: solo pagas al profesional por el trabajo, y solo si aceptas su presupuesto.",
  },
  {
    question: "¿Cómo verificáis a los profesionales?",
    answer:
      "Antes de que un profesional entre en la red comprobamos que está dado de alta como autónomo o empresa, que tiene seguro de responsabilidad civil y experiencia demostrable y, cuando el trabajo lo exige, que está habilitado.",
  },
  {
    question: "¿Atendéis urgencias?",
    answer:
      "Sí. Marca tu solicitud como urgente y buscamos un profesional disponible en tu zona lo antes posible. La disponibilidad depende del momento y del barrio, y te confirmamos el horario antes de que salga.",
  },
  {
    question: "¿Qué hacéis con mis datos?",
    answer:
      "Los usamos solo para gestionar tu solicitud y compartimos con el profesional lo necesario para que pueda atenderte: nombre, teléfono, zona y descripción del problema.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        eyebrow={siteConfig.areaServed}
        title="Fontaneros y electricistas de confianza en Barcelona"
        subtitle="Cuéntanos qué pasa y te ponemos en contacto con un profesional verificado de tu zona. Pedir presupuesto es gratis y sin compromiso."
        aside={<HeroPhotos />}
      >
        <QuickProblems />
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="¿Qué necesitas?"
            title="Elige el servicio y cuéntanos qué pasa"
            intro="Toca tu problema y llegarás al formulario con todo ya marcado."
          />
          <div className="mt-10">
            <ServiceCards />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <TrustBar />
        </Container>
      </section>

      <section id="como-funciona" className="scroll-mt-28 bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Cómo funciona" title="Tres pasos y listo" />
          <div className="mt-10">
            <ProcessSteps steps={consumerSteps} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Zonas"
            title="En toda Barcelona y alrededores"
            intro="Trabajamos con profesionales de cada distrito para que quien vaya a tu casa esté cerca."
          />
          <Districts />
        </Container>
      </section>

      <ProBand />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Guías" title="Consejos para tu casa" />
          <div className="mt-10">
            <GuideCards guides={guidesFor("consumer").slice(0, 3)} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <RequestSection />
    </>
  );
}
