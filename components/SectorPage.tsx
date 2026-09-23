import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta, WhatsAppButton } from "./CtaButtons";
import { FaqAccordion } from "./FaqAccordion";
import { IconList } from "./IconList";
import { JsonLd } from "./JsonLd";
import { PageHero } from "./PageHero";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ContactSection, ServiceGrid } from "./sections";
import { GuideCards } from "./guides";
import { sortedGuides } from "@/lib/guides-data";
import { routes } from "@/lib/navigation";
import { faqSchema, serviceSchema } from "@/lib/schema";
import type { Sector } from "@/lib/sectors-data";
import { siteConfig } from "@/lib/site-config";

export function SectorPage({ sector }: { sector: Sector }) {
  const guides = sortedGuides();
  const relatedGuides = [...guides.filter((g) => g.trade === sector.trade), ...guides.filter((g) => !g.trade)].slice(0, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: sector.metaTitle,
          serviceType: `Marketing para ${sector.audience}`,
          description: sector.metaDescription,
          url: `${siteConfig.url}${sector.path}`,
        })}
      />
      <JsonLd data={faqSchema(sector.faqs)} />

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: `Marketing para ${sector.audience}`, href: sector.path }]} />
        </Container>
      </div>

      <PageHero
        title={sector.heroTitle}
        subtitle={sector.heroSubtitle}
        actions={
          <>
            <PrimaryCta href={`${routes.contact}?oficio=${sector.trade}`} />
            <WhatsAppButton message={`Hola ${siteConfig.brand}, trabajo en ${sector.name.toLowerCase()} en Barcelona y quiero más clientes.`} />
          </>
        }
        aside={<PhotoFrame photo={sector.photo} priority className="aspect-[4/5]" sizes="40vw" />}
        asideDesktopOnly
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="¿Te falta trabajo o no llegas a todo?" />
            <div className="mt-6 space-y-4 text-lg text-ink-600" data-reveal>
              {sector.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div data-reveal className="rounded-xl2 border border-ink-200 bg-white p-7">
            <h3 className="font-display text-xl font-bold text-ink-900">Lo que buscan tus clientes en Google</h3>
            <p className="mt-2 text-sm text-ink-600">Ahí es donde tienes que aparecer.</p>
            <div className="mt-6">
              <IconList items={sector.searches.map((s) => ({ icon: s.icon, label: `«${s.label}»` }))} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading title={`Un plan pensado para ${sector.audience}`} />
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {sector.plan.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 80}>
                  <div className="border-t border-ink-200 pt-5">
                    <span className="font-display text-sm font-bold text-accent-600">{index + 1}</span>
                    <p className="mt-3 font-display text-lg font-bold text-ink-900">{step.title}</p>
                    <p className="mt-2 text-ink-600">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title="Servicios" />
          <div className="mt-10">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      {relatedGuides.length > 0 && (
        <section className="bg-surface-100 py-16 sm:py-24">
          <Container>
            <SectionHeading title={`Guías para ${sector.audience}`} />
            <div className="mt-10">
              <GuideCards guides={relatedGuides} />
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={sector.faqs} />
        </Container>
      </section>

      <ContactSection title={`Asesoramiento gratis para ${sector.audience}`} defaultTrade={sector.trade} />
    </>
  );
}
