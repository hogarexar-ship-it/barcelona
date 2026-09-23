import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { CheckList } from "./CheckList";
import { Container } from "./Container";
import { ProCta, WhatsAppButton } from "./CtaButtons";
import { FaqAccordion } from "./FaqAccordion";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { PageHero } from "./PageHero";
import { PhotoFrame } from "./PhotoFrame";
import { ProSignupSection } from "./ProSignupSection";
import { SectionHeading } from "./SectionHeading";
import { GuideCards } from "./guides";
import { guidesFor } from "@/lib/guides-data";
import { proRoutes } from "@/lib/navigation";
import { marketingOffer, networkOffer } from "@/lib/offers";
import type { Sector } from "@/lib/pro-sectors-data";
import { faqSchema, proAudience, serviceSchema } from "@/lib/schema";
import { commercialTerms, siteConfig } from "@/lib/site-config";

export function ProSectorPage({ sector }: { sector: Sector }) {
  const relatedGuides = [
    ...guidesFor("pro").filter((g) => g.trade === sector.trade),
    ...guidesFor("pro").filter((g) => !g.trade),
  ].slice(0, 3);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Captación de clientes y marketing para ${sector.audience} en Barcelona`,
          description: sector.metaDescription,
          url: `${siteConfig.url}${sector.path}`,
          audience: proAudience,
        })}
      />
      <JsonLd data={faqSchema(sector.faqs)} />

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: proRoutes.home },
              { name: `Clientes para ${sector.audience}`, href: sector.path },
            ]}
          />
        </Container>
      </div>

      <PageHero
        audience="pro"
        aside={<PhotoFrame photo={sector.photo} priority className="hidden aspect-[4/5] lg:block" sizes="40vw" />}
        eyebrow={`Para ${sector.audience} en Barcelona`}
        title={sector.heroTitle}
        subtitle={sector.heroSubtitle}
        actions={
          <>
            <ProCta href={`${proRoutes.join}?oficio=${sector.trade}`} />
            <WhatsAppButton
              variant="ghost"
              message={`Hola ${siteConfig.brand}, trabajo en ${sector.name.toLowerCase()} en Barcelona y quiero más clientes.`}
            />
          </>
        }
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="El mercado" title={`La demanda de ${sector.name.toLowerCase()} en Barcelona`} />
            <div className="mt-6 space-y-4 text-lg text-ink-600">
              {sector.demand.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl2 border border-ink-100 bg-white p-7">
            <h3 className="font-display text-xl font-bold text-ink-900">Trabajos que te podemos pasar</h3>
            <div className="mt-5">
              <CheckList items={sector.jobTypes} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Cómo te ayudamos" title={`Dos formas de conseguir más clientes para ${sector.audience}`} />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="flex flex-col rounded-xl2 border border-ink-100 bg-white p-7 sm:p-9">
              <p className="eyebrow">1 · {networkOffer.name}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink-900">{networkOffer.title}</h3>
              <p className="mt-3 flex-1 text-ink-600">{sector.networkText}</p>
              <p className="mt-4 text-sm font-semibold text-ink-800">
                {commercialTerms.network.signupFee} · {commercialTerms.network.noFixedFee}
              </p>
              <Link href={networkOffer.href} className="btn btn-primary mt-6 self-start">
                Cómo funciona la red
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </article>

            <article className="rounded-xl2 bg-ink-900 p-7 text-white sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-300">2 · {marketingOffer.name}</p>
              <h3 className="mt-3 font-display text-2xl font-bold">{marketingOffer.title}</h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {sector.marketingTactics.map((tactic) => (
                  <li key={tactic.title} className="rounded-2xl bg-white/5 p-5">
                    <p className="font-semibold text-white">{tactic.title}</p>
                    <p className="mt-2 text-sm text-ink-100">{tactic.text}</p>
                  </li>
                ))}
              </ul>
              <Link href={marketingOffer.href} className="btn btn-light mt-6">
                Ver marketing para profesionales
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </Container>
      </section>

      {relatedGuides.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Guías" title={`Guías para ${sector.audience}`} />
            <div className="mt-10">
              <GuideCards guides={relatedGuides} />
            </div>
          </Container>
        </section>
      )}

      <section className={`py-16 sm:py-24 ${relatedGuides.length > 0 ? "bg-surface-100" : ""}`}>
        <Container className="max-w-3xl">
          <FaqAccordion faqs={sector.faqs} />
        </Container>
      </section>

      <ProSignupSection
        title={`Más clientes para ${sector.audience}`}
        subtitle="Cuéntanos cómo trabajas y te decimos cómo conseguirte más clientes en tu zona, sin compromiso."
        defaultTrade={sector.trade}
      />
    </>
  );
}
