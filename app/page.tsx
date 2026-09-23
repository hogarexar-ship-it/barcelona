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
import { situations } from "@/lib/contact-options";
import { extraServices, marketingServices } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { photos } from "@/lib/photos";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: `Marketing digital para fontaneros y electricistas en Barcelona | ${siteConfig.brand}`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const faqs: Faq[] = [
  {
    question: `¿Qué hace ${siteConfig.brand}?`,
    answer: `${siteConfig.brand} ayuda a fontaneros y electricistas de Barcelona y alrededores a conseguir más clientes: gestionamos anuncios en Google y Meta, creamos landing pages y webs, optimizamos tu ficha de Google Business, te ayudamos a conseguir reseñas y trabajamos tu SEO y GEO (aparecer en asistentes de IA).`,
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
        subtitle="Nos ocupamos de tu marketing digital. Tú, de trabajar."
      >
        <p className="mt-10 font-semibold text-white/90">¿Qué te pasa ahora mismo?</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {situations.map((situation) => (
            <Link
              key={situation.value}
              href={`${routes.contact}?situacion=${situation.value}`}
              className="group flex items-center gap-4 rounded-md border border-white/30 bg-ink-900/40 p-4 transition-colors hover:border-[#EA580C] hover:bg-ink-900/70"
            >
              <Icon name={situation.icon} className="h-7 w-7 shrink-0 text-accent-300" />
              <span className="flex-1 font-display text-lg font-bold leading-snug">{situation.title}</span>
              <Icon name="arrowRight" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
        <p className="mt-5 flex items-center gap-2 text-sm text-white/75">
          <Icon name="check" className="h-5 w-5 text-accent-300" />
          Asesoramiento gratis · Barcelona y alrededores
        </p>
      </PhotoHero>

      <Marquee
        items={[
          ...marketingServices.map((s) => ({ icon: s.icon, label: s.name })),
          ...extraServices.map((s) => ({ icon: s.icon, label: s.name })),
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Qué hacemos" />
          <div className="mt-8">
            <ServiceGrid />
          </div>
          <div className="mt-6">
            <ExtraServices />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-20">
        <Container>
          <SectionHeading title="¿A qué te dedicas?" />
          <div className="mt-8">
            <SectorCards />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Cómo empezamos" />
          <div className="mt-8">
            <ProcessSteps steps={consultationSteps} />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
