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
import { ContactSection } from "./sections";
import { GuideCards } from "./guides";
import { sortedGuides } from "@/lib/guides-data";
import { marketingServices } from "@/lib/marketing-services";
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
          serviceType: `Marketing para ${sector.audience}`,
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
            <Breadcrumbs onDark items={[{ name: `Marketing para ${sector.audience}`, href: sector.path }]} />
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
            variant="ghost"
            message={`Hola ${siteConfig.brand}, trabajo en ${sector.name.toLowerCase()} en Barcelona y quiero más clientes.`}
          />
        </div>
      </PhotoHero>
      <div className={`h-1.5 ${tone.bar}`} aria-hidden="true" />

      <section className={`${tone.soft} py-16 sm:py-24`}>
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title="Tus clientes te buscan así" />
            <div className="mt-6 space-y-4 text-lg text-ink-600" data-reveal>
              {sector.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 flex items-center gap-2 font-semibold text-ink-900" data-reveal>
              <Icon name="arrowRight" className={`h-5 w-5 ${tone.icon}`} />
              Ahí es donde tienes que aparecer tú.
            </p>
          </div>
          <Reveal>
            <SearchMock searches={sector.searches} iconClass={tone.icon} />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title={`El plan que solemos aplicar a ${sector.audience}`} intro="Tres pasos, en este orden. Lo adaptamos a tu zona y a los trabajos que quieres hacer." />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {sector.plan.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 80} className="h-full">
                  <div className="h-full rounded-xl2 border border-ink-200 bg-white p-6">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-md font-display font-bold ${tone.chip}`}>
                      {index + 1}
                    </span>
                    <p className="mt-4 font-display text-lg font-bold text-ink-900">{step.title}</p>
                    <p className="mt-2 text-ink-600">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-ink-200 py-16 sm:py-24">
        <Container>
          <SectionHeading title="Con qué lo hacemos" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {marketingServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.path}
                  className="group flex items-center gap-4 rounded-xl2 border border-ink-200 bg-white p-5 transition-colors hover:border-ink-900"
                >
                  <Icon name={service.icon} className={`h-7 w-7 shrink-0 ${tone.icon}`} />
                  <span className="flex-1">
                    <span className="block font-display text-lg font-bold text-ink-900">{service.name}</span>
                    <span className="mt-0.5 block text-sm text-ink-600">{service.short}</span>
                  </span>
                  <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-ink-900" />
                </Link>
              </li>
            ))}
          </ul>
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
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Preguntas de {sector.audience}</h2>
          <div className="mt-6">
            <FaqAccordion faqs={sector.faqs} />
          </div>
          {other && (
            <p className="mt-10 text-sm text-ink-600">
              ¿Trabajas en {other.name.toLowerCase()}?{" "}
              <Link href={other.path} className="font-semibold text-ink-900 underline underline-offset-4 hover:text-accent-700">
                Mira el plan para {other.audience}
              </Link>
            </p>
          )}
        </Container>
      </section>

      <ContactSection
        title={`Asesoramiento gratis para ${sector.audience}`}
        subtitle="Ya sabemos que eres del oficio: solo nos falta tu zona y cómo prefieres que te contactemos."
        defaultTrade={sector.trade}
      />
    </>
  );
}
