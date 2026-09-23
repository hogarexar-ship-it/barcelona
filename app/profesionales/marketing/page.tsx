import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { Container } from "@/components/Container";
import { ProCta, ProWhatsAppButton } from "@/components/CtaButtons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ProSignupSection } from "@/components/ProSignupSection";
import { buildMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { proRoutes } from "@/lib/navigation";
import { marketingOffer, marketingServices, networkOffer } from "@/lib/offers";
import { faqSchema, proAudience, serviceSchema } from "@/lib/schema";
import { commercialTerms, siteConfig } from "@/lib/site-config";
import type { Faq } from "@/lib/types";

const path = marketingOffer.href;
const title = "Marketing para fontaneros y electricistas en Barcelona";
const description =
  "Google Business Profile, Google Ads, Meta Ads, SEO, marca y redes sociales para profesionales de oficios en Barcelona. Diagnóstico gratuito de tu presencia online.";

export const metadata: Metadata = buildMetadata({ title, description, path });

const auditItems = [
  "Tu ficha de Google: qué le falta y cómo estás frente a tu competencia en el mapa.",
  "Tu web (si la tienes): velocidad, claridad y si convierte visitas en llamadas.",
  "Tus anuncios (si los tienes): en qué se va el dinero y qué búsquedas lo gastan.",
  "Las tres acciones que te traerían más clientes antes, por orden.",
];

const steps = [
  {
    title: "Diagnóstico gratis",
    description: "Analizamos tu ficha de Google, tu web, tus anuncios y tu competencia en tu zona.",
  },
  {
    title: "Plan a medida",
    description: "Te proponemos solo lo que va a mover la aguja en tu caso, con presupuesto claro.",
  },
  {
    title: "Lo ponemos en marcha",
    description: "Nos encargamos de todo. Tú solo nos mandas fotos de trabajos y validas lo importante.",
  },
  {
    title: "Informe mensual",
    description: "Llamadas, formularios, presupuestos y coste por cliente, explicados sin tecnicismos.",
  },
];

const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta el marketing?",
    answer: `Depende de los servicios que necesites: no es lo mismo optimizar tu ficha de Google que llevar anuncios y redes cada mes. ${commercialTerms.marketing.model} El diagnóstico inicial es gratis y sin compromiso.`,
  },
  {
    question: "¿Cuánto tardan en llegar resultados?",
    answer:
      "Los anuncios en Google y Meta pueden traer llamadas desde las primeras semanas. La ficha de Google, las reseñas y el SEO son más lentos, normalmente meses, pero sus resultados se acumulan y abaratan cada cliente con el tiempo.",
  },
  {
    question: "¿La ficha de Google, la web y las cuentas de anuncios son mías?",
    answer: "Sí. Todo se crea o se queda a tu nombre. Si un día dejamos de trabajar juntos, te lo llevas todo.",
  },
  {
    question: "¿Necesito tener web para empezar?",
    answer:
      "No. Con una buena ficha de Google y anuncios bien planteados ya puedes recibir llamadas. Si la web hace falta, te la hacemos.",
  },
  {
    question: "¿Qué es el posicionamiento en asistentes de IA (GEO)?",
    answer:
      "Cada vez más gente pregunta a ChatGPT, Gemini o Perplexity por un profesional. El GEO consiste en que tu web, tu ficha y tus reseñas estén preparadas para que esos asistentes entiendan qué haces, dónde y para quién, y te puedan recomendar.",
  },
];

export default function MarketingPage() {
  return (
    <>
      <JsonLd data={serviceSchema({ name: title, description, url: `${siteConfig.url}${path}`, audience: proAudience })} />
      <JsonLd data={faqSchema(faqs)} />

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: proRoutes.home },
              { name: "Marketing", href: path },
            ]}
          />
        </Container>
      </div>

      <PageHero
        audience="pro"
        aside={<PhotoFrame photo={photos.electricistaObra} priority className="hidden aspect-[4/5] lg:block" sizes="40vw" />}
        eyebrow="Marketing para profesionales"
        title="Que te encuentren a ti, no a la competencia."
        subtitle="Llevamos el marketing de tu negocio de fontanería o electricidad en Barcelona: Google, anuncios, web, marca y redes. Tú eliges qué necesitas."
        actions={
          <>
            <ProCta href={`${proRoutes.join}?interes=marketing`} label={marketingOffer.cta} />
            <ProWhatsAppButton />
          </>
        }
      />

      <section id="diagnostico" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-xl2 border border-accent-200 bg-accent-50 p-7 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Empieza aquí</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink-900">{commercialTerms.marketing.freeAudit}</h2>
              <p className="mt-4 text-lg text-ink-600">
                Antes de venderte nada, te enseñamos dónde estás y qué cambiaríamos primero. Sin compromiso.
              </p>
              <ProCta href={`${proRoutes.join}?interes=marketing`} label="Pedir mi diagnóstico" className="mt-8" />
            </div>
            <CheckList items={auditItems} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que necesita tu negocio para vender más"
            intro="Contrata solo lo que te hace falta. Puedes empezar por una pieza y sumar el resto cuando veas resultados."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((service) => (
              <article key={service.name} className="rounded-xl2 border border-ink-100 bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                  <Icon name={service.icon} />
                </span>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-accent-600">{service.name}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-ink-900">{service.title}</h3>
                <p className="mt-2 text-ink-600">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Cómo trabajamos" title="Claro desde el primer día" />
          <div className="mt-10">
            <ProcessSteps steps={steps} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Especialistas en oficios"
            title="Sabemos qué busca tu cliente"
            intro="No somos una agencia generalista. Sabemos qué busca quien necesita un fontanero a las nueve de la noche o quien compara tres presupuestos para cambiar el cuadro eléctrico, y diseñamos tu marketing para eso."
          />
          <div className="rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">¿Necesitas trabajo ya?</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Súmate también a la red de clientes</h3>
            <p className="mt-3 text-ink-100">
              El marketing construye tu marca a medio plazo. Mientras tanto, la red te puede pasar trabajos de tu zona y
              solo pagas comisión por los que cierras.
            </p>
            <Link href={networkOffer.href} className="btn btn-light mt-6">
              Ver la red de clientes
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </Container>
      </section>

      <ProSignupSection
        title="Pide tu diagnóstico gratis"
        subtitle="Cuéntanos tu negocio y te decimos, sin compromiso, qué harías primero para conseguir más clientes."
        defaultInterest="marketing"
      />
    </>
  );
}
