import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { PhotoHero } from "@/components/PhotoHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { consultationSteps, ContactSection, ExtraServices, SectorCards, ServiceGrid } from "@/components/sections";
import { GuideCards } from "@/components/guides";
import { situations } from "@/lib/contact-options";
import { sortedGuides } from "@/lib/guides-data";
import { extraServices, marketingServices } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { photos } from "@/lib/photos";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: `Marketing para fontaneros y electricistas en Barcelona | ${siteConfig.brand}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const faqs: Faq[] = [
  {
    question: `¿Qué hace ${siteConfig.brand}?`,
    answer: `${siteConfig.brand} ayuda a fontaneros y electricistas de Barcelona y alrededores a conseguir más clientes: gestionamos anuncios en Google y Meta, creamos landing pages y webs, optimizamos tu ficha de Google Business y trabajamos tu SEO local.`,
  },
  {
    question: "¿En qué consiste el asesoramiento gratuito?",
    answer:
      "Hablamos de tu negocio (servicios, zona, cómo te llegan hoy los clientes), revisamos tu presencia en Google, tu web y tus anuncios, y te proponemos una estrategia con los primeros pasos. No tiene coste ni compromiso.",
  },
  {
    question: "¿Cuánto cuesta trabajar con vosotros?",
    answer:
      "Depende de los servicios y de tu zona. Tras el asesoramiento te damos un plan con su precio. Puedes empezar por un solo servicio, por ejemplo tu ficha de Google o una campaña, y ampliar después.",
  },
  {
    question: "¿Trabajáis con autónomos o solo con empresas?",
    answer: "Con los dos. El plan se adapta a si trabajas solo o con un equipo.",
  },
  {
    question: "¿Las cuentas y la web son mías?",
    answer: "Sí. La ficha de Google, las cuentas de anuncios, el dominio y la web quedan a tu nombre.",
  },
  {
    question: "¿En qué zonas trabajáis?",
    answer:
      "Con profesionales de Barcelona y alrededores: L'Hospitalet, Badalona, Sabadell, Terrassa, Sant Cugat, Mataró y el resto del área metropolitana.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PhotoHero
        photo={photos.electricistaLuzTecho}
        title="Más clientes para fontaneros y electricistas en Barcelona"
        subtitle="Anuncios en Google y Meta, página web, ficha de Google y SEO. Nos encargamos del marketing para que te lleguen clientes de tu zona y tú te centres en trabajar."
      >
        <p className="mt-10 font-display text-lg font-bold">¿Qué te pasa ahora mismo?</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {situations.map((situation) => (
            <Link
              key={situation.value}
              href={`${routes.contact}?situacion=${situation.value}`}
              className="group flex flex-col rounded-md border border-white/30 bg-ink-900/40 p-5 transition-colors hover:border-[#EA580C] hover:bg-ink-900/70"
            >
              <Icon name={situation.icon} className="h-7 w-7 text-accent-300" />
              <span className="mt-3 font-display text-lg font-bold leading-snug">{situation.title}</span>
              <span className="mt-1 text-sm text-white/75">{situation.text}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent-200 group-hover:text-white">
                Pide tu asesoramiento gratis
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/75">
          <span className="inline-flex items-center gap-2">
            <Icon name="check" className="h-5 w-5 text-accent-300" />
            Gratis y sin compromiso
          </span>
          <Link href={routes.services} className="inline-flex items-center gap-1.5 font-semibold text-white underline-offset-4 hover:underline">
            O mira primero los servicios
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </p>
      </PhotoHero>

      <Marquee
        items={[
          ...marketingServices.map((s) => ({ icon: s.icon, label: s.name })),
          ...extraServices.map((s) => ({ icon: s.icon, label: s.name })),
        ]}
      />

      <section id="servicios" className="scroll-mt-20 bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Servicios para conseguir más clientes"
            intro="Empezamos por lo que más te va a mover la aguja y ampliamos cuando veas resultados."
          />
          <div className="mt-10">
            <ServiceGrid />
          </div>
          <div className="mt-12">
            <ExtraServices />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Cómo funciona el asesoramiento gratuito"
            intro="Antes de venderte nada, vemos tu caso y te decimos qué haríamos."
          />
          <div className="mt-10">
            <ProcessSteps steps={consultationSteps} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Especializados en fontaneros y electricistas" />
          <div className="mt-10">
            <SectorCards />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title="Guías para conseguir más clientes" />
          <div className="mt-10">
            <GuideCards guides={sortedGuides().slice(0, 3)} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
