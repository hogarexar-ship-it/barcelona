import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { Container } from "@/components/Container";
import { ProCta, ProWhatsAppButton } from "@/components/CtaButtons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import type { Step } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ProSectorCards } from "@/components/ProSectorCards";
import { ProSignupSection } from "@/components/ProSignupSection";
import { buildMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { proRoutes } from "@/lib/navigation";
import { marketingOffer, networkOffer } from "@/lib/offers";
import { faqSchema, proAudience, serviceSchema } from "@/lib/schema";
import { commercialTerms, siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

const path = networkOffer.href;
const title = "Red de clientes para profesionales en Barcelona";
const description = `Únete gratis a la red de ${siteConfig.brand}: te pasamos clientes de fontanería y electricidad en tu zona de Barcelona y pagas comisión solo por los trabajos que cierras.`;

export const metadata: Metadata = buildMetadata({ title, description, path });

const steps: Step[] = [
  {
    icon: "document",
    title: "Te das de alta",
    description: "Rellenas el formulario y te llamamos para conocer tu oficio, tus zonas, el tipo de trabajos que haces y tu disponibilidad.",
  },
  {
    icon: "shield",
    title: "Validamos tu perfil",
    description: "Comprobamos tu alta, tu seguro de responsabilidad civil y trabajos anteriores. Así cuidamos la calidad de la red.",
  },
  {
    icon: "inbox",
    title: "Te pasamos clientes",
    description: "Cuando llega un cliente de tu oficio y tu zona, te lo pasamos con lo que necesita, dónde y para cuándo.",
  },
  {
    icon: "euro",
    title: "Cierras y cobras",
    description: "Presupuestas y haces el trabajo como siempre. Pagas la comisión acordada solo por los trabajos que cierras.",
  },
];

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "inbox",
    title: "Información antes de llamar",
    text: "Sabes qué necesita el cliente, en qué zona y para cuándo antes de coger el teléfono.",
  },
  {
    icon: "mapPin",
    title: "Tus reglas",
    text: "Eliges zonas, horarios y tipos de trabajo. Si un trabajo no te encaja, lo rechazas.",
  },
  {
    icon: "euro",
    title: "Sin pagar por adelantado",
    text: `${commercialTerms.network.signupFee} y ${commercialTerms.network.noFixedFee.toLowerCase()}. Solo pagas cuando ganas.`,
  },
  {
    icon: "users",
    title: "Una persona de contacto",
    text: "Hablas con alguien del equipo, no con una app. Si algo no funciona, lo arreglamos juntos.",
  },
];

const requirements = [
  "Alta como autónomo o empresa.",
  "Seguro de responsabilidad civil en vigor.",
  "Experiencia demostrable en tu oficio (fotos o referencias de trabajos).",
  "Habilitación oficial cuando el trabajo la exija (por ejemplo, instalaciones eléctricas o de gas).",
  "Trabajar en Barcelona o su área metropolitana.",
];

const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta unirse a la red de clientes?",
    answer: `Nada. El alta es gratuita y no hay cuotas mensuales fijas: ${commercialTerms.network.model.toLowerCase()}`,
  },
  {
    question: "¿Cómo se calcula la comisión?",
    answer:
      "Depende del tipo de trabajo y se acuerda contigo antes de empezar, por escrito. No pagas por contactos que no se convierten en trabajo.",
  },
  {
    question: "¿De dónde salen los clientes?",
    answer: `Los capta ${siteConfig.brand} con sus propios canales de marketing en Barcelona (buscadores, anuncios y recomendaciones). Filtramos cada solicitud antes de pasártela.`,
  },
  {
    question: "¿Estoy obligado a aceptar todos los trabajos?",
    answer: "No. Te pasamos trabajos según tus zonas y preferencias, y si uno no te encaja, lo rechazas sin penalización.",
  },
  {
    question: "¿Puedo seguir trabajando con mis clientes y mi marca?",
    answer: "Sí. La red es un canal más de trabajo; tus clientes y tu marca siguen siendo tuyos.",
  },
];

export default function ConseguirClientesPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: title, description, url: `${siteConfig.url}${path}`, audience: proAudience })} />
      <JsonLd data={faqSchema(faqs)} />

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: proRoutes.home },
              { name: networkOffer.name, href: path },
            ]}
          />
        </Container>
      </div>

      <PageHero
        audience="pro"
        aside={<PhotoFrame photo={photos.fontaneroClienteCocina} priority className="aspect-[4/5]" sizes="40vw" />}
        asideDesktopOnly
        title="Red de clientes para fontaneros y electricistas"
        subtitle={`Captamos a personas y empresas de Barcelona que necesitan tu oficio y te pasamos las que encajan contigo. ${commercialTerms.network.signupFee} y comisión solo por trabajo cerrado.`}
        actions={
          <>
            <ProCta href={`${proRoutes.join}?interes=clientes`} label={networkOffer.cta} />
            <ProWhatsAppButton />
          </>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title="De tu alta a tu primer cliente" />
          <div className="mt-10">
            <ProcessSteps steps={steps} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Qué recibes" />
          <div className="mt-10">
            <FeatureGrid items={benefits} className="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Qué pedimos para entrar"
              intro="Nuestros clientes confían en que les enviamos a buenos profesionales. Por eso validamos a cada miembro de la red."
            />
            <div className="mt-8">
              <CheckList items={requirements} />
            </div>
          </div>
          <div className="rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
            <p className="text-sm font-medium text-accent-300">¿Y si además quieres tu propia marca?</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Combínalo con el marketing</h3>
            <p className="mt-3 text-ink-100">
              Mientras la red te pasa trabajos, podemos trabajar tu ficha de Google, tus anuncios y tu web para que
              también te lleguen clientes directos a tu nombre.
            </p>
            <Link href={marketingOffer.href} className="btn btn-light mt-6">
              Ver marketing para profesionales
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading title="¿A qué te dedicas?" />
          <div className="mt-10">
            <ProSectorCards />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <ProSignupSection
        title="Únete a la red de clientes"
        subtitle="Alta gratuita. Te llamamos, validamos tu perfil y empiezas a recibir trabajos de tu zona."
        defaultInterest="clientes"
      />
    </>
  );
}
