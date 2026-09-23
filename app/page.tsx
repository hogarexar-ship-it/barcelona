import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { consultationSteps, ContactSection, ExtraServices, SectorCards, ServiceGrid } from "@/components/sections";
import { GuideCards } from "@/components/guides";
import { sortedGuides } from "@/lib/guides-data";
import { extraServices, marketingServices } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
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

const situations: { icon: IconName; title: string; text: string; answer: string }[] = [
  {
    icon: "clock",
    title: "Tienes trabajo, pero no llegas a todo",
    text: "Obras, averías, presupuestos, facturas… y el marketing siempre queda para después.",
    answer: "Te lo dejamos hecho. Tú apruebas lo importante y nosotros lo ejecutamos.",
  },
  {
    icon: "trendingUp",
    title: "No te llaman lo suficiente",
    text: "Meses flojos, dependes del boca a boca y la competencia sale antes que tú en Google.",
    answer: "Montamos anuncios y presencia en Google para que te llamen clientes de tu zona.",
  },
];

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

      <PageHero
        title="Más clientes para fontaneros y electricistas en Barcelona"
        subtitle="Anuncios en Google y Meta, página web, ficha de Google y SEO. Nos encargamos del marketing de tu negocio para que te lleguen clientes de tu zona y tú te centres en trabajar."
        aside={
          <PhotoFrame
            photo={photos.electricistaLuzTecho}
            priority
            className="aspect-[4/3] lg:aspect-[5/6]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        }
      >
        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-600">
          <Icon name="check" className="h-5 w-5 text-accent-600" />
          Primer asesoramiento gratis y sin compromiso
        </p>
      </PageHero>

      <Marquee
        items={[
          ...marketingServices.map((s) => ({ icon: s.icon, label: s.name })),
          ...extraServices.map((s) => ({ icon: s.icon, label: s.name })),
        ]}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title="¿En cuál de estas situaciones estás?" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {situations.map((situation, index) => (
              <Reveal key={situation.title} delay={index * 100}>
                <div className="h-full rounded-xl2 border border-ink-200 bg-white p-7">
                  <Icon name={situation.icon} className="h-8 w-8 text-accent-600" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">{situation.title}</h3>
                  <p className="mt-2 text-ink-600">{situation.text}</p>
                  <p className="mt-5 flex gap-2 border-t border-ink-200 pt-5 font-semibold text-ink-900">
                    <Icon name="arrowRight" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    {situation.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

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
