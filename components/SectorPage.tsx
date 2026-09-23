import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta, WhatsAppButton } from "./CtaButtons";
import { FaqAccordion } from "./FaqAccordion";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { PhotoHero } from "./PhotoHero";
import { Reveal } from "./Reveal";
import { SearchMock } from "./SearchMock";
import { SectionHeading } from "./SectionHeading";
import { ContactSection, ServiceGrid } from "./sections";
import { guidePath, sortedGuides } from "@/lib/guides-data";
import { routes } from "@/lib/navigation";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { sectors } from "@/lib/sectors-data";
import type { Sector } from "@/lib/sectors-data";
import { siteConfig } from "@/lib/site-config";

export function SectorPage({ sector }: { sector: Sector }) {
  const guides = sortedGuides();
  const relatedGuides = [...guides.filter((g) => g.trade === sector.trade), ...guides.filter((g) => !g.trade)].slice(0, 3);
  const other = sectors.find((s) => s.trade !== sector.trade);
  const { tone } = sector;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: sector.metaTitle,
          serviceType: `Marketing digital para ${sector.audience}`,
          description: sector.metaDescription,
          url: `${siteConfig.url}${sector.path}`,
        })}
      />
      <JsonLd data={faqSchema(sector.faqs)} />

      <PhotoHero
        photo={sector.photo}
        title={sector.heroTitle}
        subtitle={sector.heroSubtitle}
        top={
          <>
            <Breadcrumbs onDark items={[{ name: `Marketing digital para ${sector.audience}`, href: sector.path }]} />
            <p className={`mt-8 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-bold ${tone.chip}`}>
              <Icon name={sector.icon} className={`h-4 w-4 ${tone.icon}`} />
              Solo para {sector.audience}
            </p>
          </>
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryCta href={`${routes.contact}?oficio=${sector.trade}`} />
          <WhatsAppButton
            variant="light"
            message={`Hola ${siteConfig.brand}, trabajo en ${sector.name.toLowerCase()} en Barcelona y quiero más clientes.`}
          />
        </div>
      </PhotoHero>
      <div className={`h-1.5 ${tone.bar}`} aria-hidden="true" />

      <section className={`${tone.soft} py-16 sm:py-20`}>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="Así te buscan tus clientes" intro="Si no sales aquí, llaman a otro." />
            <details className="group mt-6" data-reveal>
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-ink-900">
                Por qué es importante
                <span className="transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <div className="mt-3 space-y-3 text-ink-600">
                {sector.context.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </details>
          </div>
          <Reveal>
            <SearchMock searches={sector.searches} iconClass={tone.icon} />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Tu plan en 3 pasos" />
          <ol className="mt-8 grid gap-3 md:grid-cols-3">
            {sector.plan.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 80} className="h-full">
                  <details className="group h-full rounded-xl2 border border-ink-200 bg-white p-5 open:border-ink-900">
                    <summary className="flex cursor-pointer list-none items-center gap-4">
                      <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-display font-bold ${tone.chip}`}>
                        {index + 1}
                      </span>
                      <span className="flex-1 font-display text-lg font-bold leading-snug text-ink-900">{step.title}</span>
                      <span className="text-lg leading-none text-ink-400 transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-ink-600">{step.text}</p>
                  </details>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-ink-200 py-16 sm:py-20">
        <Container>
          <SectionHeading title="Con qué lo hacemos" />
          <div className="mt-8">
            <ServiceGrid iconClass={tone.icon} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FaqAccordion faqs={sector.faqs} />
          {relatedGuides.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900">Guías gratis</h2>
              <ul className="mt-6 divide-y divide-ink-100 border-y border-ink-100">
                {relatedGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={guidePath(guide)} className="group flex items-center gap-3 py-4 font-semibold text-ink-900 hover:text-accent-700">
                      <Icon name="document" className={`h-5 w-5 shrink-0 ${tone.icon}`} />
                      <span className="flex-1">{guide.title}</span>
                      <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-ink-400 group-hover:text-accent-700" />
                    </Link>
                  </li>
                ))}
              </ul>
              {other && (
                <p className="mt-8 text-sm text-ink-600">
                  ¿Eres {other.person}?{" "}
                  <Link href={other.path} className="font-semibold text-ink-900 underline underline-offset-4 hover:text-accent-700">
                    Ver tu página
                  </Link>
                </p>
              )}
            </div>
          )}
        </Container>
      </section>

      <ContactSection
        title={`Asesoramiento gratis para ${sector.audience}`}
        defaultTrade={sector.trade}
      />
    </>
  );
}
