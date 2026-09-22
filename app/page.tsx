import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { LeadsMockup } from "@/components/LeadsMockup";
import { OfferCards } from "@/components/OfferCards";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { SectorCards } from "@/components/SectorCards";
import { SignupSection } from "@/components/SignupSection";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { commercialTerms, siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.brand}: más clientes para reformas, fontaneros y electricistas en Barcelona`,
  description: siteConfig.description,
  path: "/",
  absoluteTitle: true,
});

const pains = [
  "Dependes del boca a boca y hay meses flojos.",
  "Pagas por contactos que también reciben otras empresas.",
  "Tu ficha de Google está a medias y casi no tiene reseñas.",
  "Sabes que deberías hacer anuncios y redes, pero no tienes tiempo.",
];

const steps = [
  {
    title: "Nos cuentas tu negocio",
    description: "Rellenas un formulario de un minuto y te llamamos: oficio, zonas, tipo de trabajos y cuánto quieres crecer.",
  },
  {
    title: "Te proponemos un plan",
    description: "Red de clientes, marketing o las dos cosas. Te explicamos condiciones y costes antes de empezar, sin letra pequeña.",
  },
  {
    title: "Empiezas a recibir clientes",
    description: "Te pasamos trabajos de tu zona y/o ponemos en marcha tu marketing. Revisamos resultados contigo cada mes.",
  },
];

const reasons: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "mapPin",
    title: "Solo Barcelona",
    text: "Trabajamos únicamente en Barcelona y su área metropolitana. Conocemos los barrios, las fincas y lo que pide cada cliente.",
  },
  {
    icon: "users",
    title: "Solo oficios",
    text: "No somos una agencia generalista. Nos dedicamos a reformas, fontanería y electricidad, y hablamos tu idioma, no jerga de marketing.",
  },
  {
    icon: "chart",
    title: "Resultados en clientes",
    text: "Medimos llamadas, presupuestos y trabajos cerrados. Los «me gusta» no pagan facturas.",
  },
];

const faqs: Faq[] = [
  {
    question: `¿Qué es ${siteConfig.brand}?`,
    answer: `${siteConfig.brand} es un servicio de Barcelona para profesionales de reformas, fontanería y electricidad que quieren más clientes. Trabajamos de dos formas: te pasamos clientes a cambio de una comisión (red de clientes) o llevamos tu marketing (Google Business Profile, Google Ads, Meta Ads, SEO, marca y redes sociales).`,
  },
  {
    question: `¿${siteConfig.brand} es un directorio o una plataforma de presupuestos?`,
    answer:
      "No. No publicamos tu perfil en un directorio ni subastamos contactos. Captamos al cliente, entendemos qué necesita y se lo pasamos al profesional de la red que encaja por oficio y zona.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer: `Unirte a la red de clientes es gratis: ${commercialTerms.network.model.toLowerCase()} El marketing se contrata con un plan mensual a medida y el diagnóstico inicial de tu presencia online es gratuito.`,
  },
  {
    question: "¿Con qué oficios trabajáis?",
    answer:
      "Empezamos por los tres oficios con más demanda en Barcelona: empresas de reformas, fontaneros y electricistas. Si te dedicas a otro oficio, escríbenos igualmente: vamos abriendo nuevos sectores.",
  },
  {
    question: "¿En qué zonas trabajáis?",
    answer:
      "En Barcelona ciudad y su área metropolitana (L'Hospitalet, Badalona, Cornellà, Esplugues, Sant Adrià y alrededores). Tú eliges en qué zonas quieres recibir trabajos.",
  },
  {
    question: "¿Puedo contratar solo una parte del marketing?",
    answer:
      "Sí. Puedes empezar, por ejemplo, solo con tu ficha de Google y ampliar a anuncios, web o redes cuando veas resultados.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        eyebrow="Para reformas, fontanería y electricidad en Barcelona"
        title="Más clientes para tu oficio."
        subtitle="Te pasamos trabajos de tu zona a comisión o llevamos tu marketing para que te llamen a ti. Tú eliges cómo crecer; nosotros nos encargamos del resto."
        aside={<LeadsMockup />}
      >
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-600">
          {[commercialTerms.network.signupFee, siteConfig.areaServed, "Hablas con personas, no con una app"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-terracotta-500" />
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Lo que hacemos"
            title="Dos formas de conseguir más clientes"
            intro="Elige una o combina las dos. Empiezas por lo que más necesitas hoy."
          />
          <div className="mt-10">
            <OfferCards />
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="¿Te suena?"
            title="Eres bueno en tu oficio. Conseguir clientes es otro trabajo."
            intro={`Para eso existe ${siteConfig.brand}: tú haces lo que sabes hacer y nosotros nos ocupamos de que el teléfono suene.`}
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {pains.map((pain) => (
              <li key={pain} className="rounded-xl2 border border-ink-100 bg-white p-5 font-medium text-ink-800">
                {pain}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="sectores" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Sectores"
            title="Empezamos por los oficios con más demanda en Barcelona"
            intro="Reformas, fontanería y electricidad: los trabajos que más se piden en la ciudad y donde más profesionales compiten por el mismo cliente."
          />
          <div className="mt-10">
            <SectorCards />
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Cómo funciona" title="Empezar es fácil" />
          <div className="mt-10">
            <ProcessSteps steps={steps} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow={`Por qué ${siteConfig.brand}`} title="Especialistas en oficios, no una agencia más" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-xl2 border border-ink-100 bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-terracotta-50 text-terracotta-600">
                  <Icon name={reason.icon} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">{reason.title}</h3>
                <p className="mt-2 text-ink-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <SignupSection />
    </>
  );
}
