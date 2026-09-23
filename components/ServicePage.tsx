import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta, WhatsAppButton } from "./CtaButtons";
import { FaqAccordion } from "./FaqAccordion";
import { JsonLd } from "./JsonLd";
import { PageHero } from "./PageHero";
import { Icon } from "./Icon";
import { PhotoFrame, PhotoGallery } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { ProBand } from "./ProBand";
import { ProcessSteps } from "./ProcessSteps";
import { SectionHeading } from "./SectionHeading";
import { consumerSteps, Districts, QuickProblems, requestHref, RequestSection, TrustBar } from "./consumer";
import { GuideCards } from "./guides";
import { guidesFor } from "@/lib/guides-data";
import { faqSchema, serviceSchema } from "@/lib/schema";
import type { Service } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function ServicePage({ service }: { service: Service }) {
  const relatedGuides = guidesFor("consumer").filter((g) => g.trade === service.trade || !g.trade);
  const plural = service.professionalPlural.charAt(0).toUpperCase() + service.professionalPlural.slice(1);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} en Barcelona`,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${siteConfig.url}${service.path}`,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: `${plural} en Barcelona`, href: service.path }]} />
        </Container>
      </div>

      <PageHero
        eyebrow={`${plural} en Barcelona`}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        actions={
          <>
            <PrimaryCta href={requestHref(service.trade)} label={`Pedir un ${service.professional}`} />
            <WhatsAppButton message={`Hola ${siteConfig.brand}, necesito un ${service.professional} en Barcelona.`} />
          </>
        }
        aside={
          <PhotoFrame
            photo={service.photo}
            priority
            className="aspect-[4/3] shadow-2xl shadow-ink-900/15 lg:aspect-[5/6]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        }
      >
        <QuickProblems trade={service.trade} />
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Servicios"
            title={`Qué hacen nuestros ${service.professionalPlural}`}
            intro={`Si no ves tu caso, cuéntanoslo igualmente: te ponemos en contacto con el ${service.professional} adecuado.`}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.subservices.map((sub, index) => (
              <Reveal key={sub.title} delay={(index % 3) * 100} className="h-full">
                <div className="group flex h-full gap-4 rounded-xl2 border border-ink-100 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                    <Icon name={sub.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-900">{sub.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{sub.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <TrustBar />
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Trabajos habituales"
            title={`Lo que hace un ${service.professional} en tu casa`}
          />
          <div className="mt-10">
            <PhotoGallery photos={service.gallery} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Cómo funciona" title={`Tu ${service.professional} en tres pasos`} />
          <div className="mt-10">
            <ProcessSteps steps={consumerSteps} />
          </div>
        </Container>
      </section>

      {relatedGuides.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Guías" title="Te puede servir" />
            <div className="mt-10">
              <GuideCards guides={relatedGuides.slice(0, 3)} />
            </div>
          </Container>
        </section>
      )}

      <section className="pb-16 sm:pb-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <FaqAccordion faqs={service.faqs} />
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Zonas donde trabajamos</h2>
            <div className="mt-6">
              <Districts />
            </div>
          </div>
        </Container>
      </section>

      <RequestSection title={`Pide presupuesto a un ${service.professional}`} defaultTrade={service.trade} />

      <ProBand compact professional={service.professional} />
    </>
  );
}
