import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { ProOfferCards } from "@/components/ProOfferCards";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { FeatureGrid } from "@/components/FeatureGrid";
import type { Feature } from "@/components/FeatureGrid";
import { Marquee } from "@/components/Marquee";
import { ProcessSteps } from "@/components/ProcessSteps";
import type { Step } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ProSectorCards } from "@/components/ProSectorCards";
import { ProSignupSection } from "@/components/ProSignupSection";
import { buildMetadata } from "@/lib/metadata";
import { marketingServices } from "@/lib/offers";
import { photos } from "@/lib/photos";
import { proRoutes } from "@/lib/navigation";
import { faqSchema } from "@/lib/schema";
import { commercialTerms, siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: `Clientes para fontaneros y electricistas en Barcelona | ${siteConfig.brand}`,
  description: siteConfig.proDescription,
  path: proRoutes.home,
  absoluteTitle: true,
});

const pains: { icon: IconName; text: string }[] = [
  { icon: "calendar", text: "Dependes del boca a boca y hay meses flojos." },
  { icon: "euro", text: "Pagas por contactos que también reciben otras empresas." },
  { icon: "star", text: "Tu ficha de Google está a medias y casi no tiene reseñas." },
  { icon: "clock", text: "Sabes que deberías hacer anuncios y redes, pero no tienes tiempo." },
];

const steps: Step[] = [
  {
    icon: "chat",
    title: "Nos cuentas tu negocio",
    description: "Rellenas un formulario de un minuto y te llamamos: oficio, zonas, tipo de trabajos y cuántos trabajos más puedes asumir.",
  },
  {
    icon: "chart",
    title: "Te proponemos un plan",
    description: "Red de clientes, marketing o las dos cosas. Te explicamos condiciones y costes antes de empezar.",
  },
  {
    icon: "inbox",
    title: "Empiezas a recibir clientes",
    description: "Te pasamos trabajos de tu zona y/o ponemos en marcha tu marketing. Revisamos resultados contigo cada mes.",
  },
];

const reasons: Feature[] = [
  {
    icon: "mapPin",
    title: "Solo Barcelona",
    text: "Trabajamos únicamente en Barcelona y su área metropolitana. Conocemos los barrios, las fincas y lo que pide cada cliente.",
  },
  {
    icon: "users",
    title: "Solo oficios",
    text: "No somos una agencia generalista: solo trabajamos con fontaneros y electricistas.",
  },
  {
    icon: "chart",
    title: "Resultados en clientes",
    text: "Te informamos de llamadas, presupuestos y trabajos cerrados, no de métricas de redes sociales.",
  },
];

const faqs: Faq[] = [
  {
    question: `¿Qué es ${siteConfig.brand}?`,
    answer: `${siteConfig.brand} es un servicio de Barcelona para fontaneros y electricistas que quieren más clientes. Trabajamos de dos formas: te pasamos clientes a cambio de una comisión (red de clientes) o llevamos tu marketing (Google Business Profile, Google Ads, Meta Ads, SEO, marca y redes sociales).`,
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
      "Empezamos por los dos oficios con más demanda en Barcelona: fontaneros y electricistas. Si te dedicas a otro oficio, escríbenos igualmente: vamos abriendo nuevos sectores.",
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

export default function ProfesionalesPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <PageHero
        audience="pro"
        title="Más clientes para fontaneros y electricistas en Barcelona"
        subtitle="Te pasamos trabajos de tu zona a comisión o llevamos tu marketing en Google, Meta y redes."
        aside={<PhotoFrame photo={photos.fontaneroCajaHerramientas} priority className="aspect-[4/5]" sizes="40vw" />}
        asideDesktopOnly
      >
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-100">
          {[commercialTerms.network.signupFee, siteConfig.areaServed, "Hablas con personas, no con una app"].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-accent-300" />
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      <Marquee onDark items={marketingServices.map((s) => ({ icon: s.icon, label: s.name })).concat([{ icon: "inbox", label: "Red de clientes" }])} />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Dos formas de conseguir más clientes"
            intro="Elige una o combina las dos. Empiezas por lo que más necesitas hoy."
          />
          <div className="mt-10">
            <ProOfferCards />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="Problemas habituales al buscar clientes"
            />
            <PhotoFrame photo={photos.fontaneroInstalacionBano} className="mt-8 aspect-[3/2]" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {pains.map((pain, index) => (
              <li key={pain.text} data-reveal style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex h-full flex-col gap-3 border-t border-ink-200 pt-5">
                  <Icon name={pain.icon} className="h-6 w-6 text-accent-600" />
                  <p className="font-medium text-ink-800">{pain.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="sectores" className="scroll-mt-28 py-16 sm:py-24">
        <Container>
          <SectionHeading
            title="Empezamos por los oficios con más demanda en Barcelona"
            intro="Fontanería y electricidad: los trabajos que más se piden en la ciudad y donde más profesionales compiten por el mismo cliente."
          />
          <div className="mt-10">
            <ProSectorCards />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Cómo empezar" />
          <div className="mt-10">
            <ProcessSteps steps={steps} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title={`Por qué ${siteConfig.brand}`} />
          <div className="mt-10">
            <FeatureGrid items={reasons} className="md:grid-cols-3" />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <ProSignupSection />
    </>
  );
}
