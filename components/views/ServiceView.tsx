import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PrimaryCta, WhatsAppButton } from "@/components/CtaButtons";
import { ExpandableList } from "@/components/ExpandableList";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { OrganicPaid } from "@/components/OrganicPaid";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Reveal } from "@/components/Reveal";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getMarketingServices } from "@/lib/marketing-services";
import type { MarketingService } from "@/lib/marketing-services";
import { routes } from "@/lib/navigation";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function ServiceView({ locale, service }: { locale: Locale; service: MarketingService }) {
  const t = translator(locale);
  const services = getMarketingServices(locale);
  const index = services.findIndex((s) => s.slug === service.slug);
  const total = services.length;
  const prev = services[(index - 1 + total) % total];
  const next = services[(index + 1) % total];
  const contactHref = `${routes[locale].contact}?servicio=${service.slug}`;
  const whatsappText = t(
    `Hola ${siteConfig.brand}, quiero información sobre el servicio «${service.name}» para mi negocio.`,
    `Hola ${siteConfig.brand}, vull informació sobre el servei «${service.name}» per al meu negoci.`,
  );

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.metaTitle,
          serviceType: service.name,
          description: service.metaDescription,
          url: `${siteConfig.url}${service.path}`,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      <section className="border-b border-ink-200 bg-surface-200">
        <Container className="pt-6">
          <Breadcrumbs
            locale={locale}
            items={[
              { name: t("Servicios", "Serveis"), href: routes[locale].services },
              { name: service.name, href: service.path },
            ]}
          />

          <div className="py-12 sm:py-16">
            <p className="flex items-center gap-3 text-sm font-semibold text-ink-400">
              <Icon name={service.icon} className="h-7 w-7 text-accent-600" />
              {t("Servicio", "Servei")} {index + 1} {t("de", "de")} {total}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-3 text-base font-semibold text-accent-700">{service.keywords}</p>
            <p className="mt-5 max-w-2xl text-lg text-ink-600 sm:text-xl">{service.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:hidden">
              <PrimaryCta locale={locale} href={contactHref} />
              <WhatsAppButton locale={locale} message={whatsappText} />
            </div>
          </div>
        </Container>
      </section>

      <Marquee items={services.map((item) => ({ icon: item.icon, label: item.name }))} />

      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              {t("Por qué lo necesitas", "Per què ho necessites")}
            </h2>
            <p className="mt-4 flex gap-3 rounded-xl2 border-l-4 border-[#CE6A27] bg-white p-5 text-lg text-ink-800" data-reveal>
              <Icon name="alert" className="mt-1 h-5 w-5 shrink-0 text-[#CE6A27]" />
              {service.pain}
            </p>
            <p className="mt-6 font-semibold text-ink-900">{t("Es para ti si…", "És per a tu si…")}</p>
            <div className="mt-3" data-reveal>
              <CheckList items={service.signs} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t("Qué consigues", "Què aconsegueixes")}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {service.outcomes.map((outcome, i) => (
                <li key={outcome}>
                  <Reveal delay={i * 80} className="h-full">
                    <div className="h-full rounded-xl2 bg-ink-900 p-5 text-white">
                      <Icon name="check" className="h-6 w-6 text-accent-300" />
                      <p className="mt-3 font-display text-lg font-bold leading-snug">{outcome}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t("Qué incluye", "Què inclou")}</h2>
            <p className="mt-2 text-sm text-ink-400">
              {t("Toca cada punto para ver el detalle.", "Toca cada punt per veure'n el detall.")}
            </p>
            <div className="mt-6" data-reveal>
              <ExpandableList items={service.includes} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{t("Preguntas frecuentes", "Preguntes freqüents")}</h2>
            <div className="mt-6">
              <FaqAccordion faqs={service.faqs} title="" />
            </div>
          </section>
        </div>

        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <div className="overflow-hidden rounded-xl2 border border-ink-200 bg-white">
            <PhotoFrame photo={service.photo} className="aspect-[16/10] !rounded-none" sizes="(min-width: 1024px) 22rem, 100vw" />
            <div className="p-6">
              <p className="font-display text-xl font-bold text-ink-900">{t("Asesoramiento gratis", "Assessorament gratis")}</p>
              <p className="mt-1 text-sm font-semibold text-ink-700">{service.title}</p>
              <p className="mt-1 text-sm text-ink-600">
                {t("Te decimos qué haríamos en tu caso. Sin compromiso.", "Et diem què faríem en el teu cas. Sense compromís.")}
              </p>
              <PrimaryCta locale={locale} href={contactHref} className="mt-5 w-full" />
              <WhatsAppButton locale={locale} message={whatsappText} label="WhatsApp" className="mt-3 w-full" />
            </div>
          </div>
        </aside>
      </Container>

      {service.slug === "anuncios-google-y-meta" && <OrganicPaid locale={locale} className="border-t border-ink-200 bg-surface-100" />}

      {prev && next && (
        <nav aria-label={t("Otros servicios", "Altres serveis")} className="border-t border-ink-200">
          <Container className="grid sm:grid-cols-2">
            <Link href={prev.path} className="group border-b border-ink-200 py-8 sm:border-b-0 sm:border-r sm:pr-8">
              <span className="text-sm text-ink-400">← {t("Servicio anterior", "Servei anterior")}</span>
              <span className="mt-2 flex items-center gap-3 font-display text-xl font-bold text-ink-900 group-hover:text-accent-700">
                <Icon name={prev.icon} className="h-6 w-6 text-accent-600" />
                {prev.name}
              </span>
            </Link>
            <Link href={next.path} className="group py-8 sm:pl-8 sm:text-right">
              <span className="text-sm text-ink-400">{t("Siguiente servicio", "Servei següent")} →</span>
              <span className="mt-2 flex items-center gap-3 font-display text-xl font-bold text-ink-900 group-hover:text-accent-700 sm:justify-end">
                <Icon name={next.icon} className="h-6 w-6 text-accent-600" />
                {next.name}
              </span>
            </Link>
          </Container>
        </nav>
      )}

      <CtaBand
        locale={locale}
        title={t("¿Lo vemos para tu negocio?", "Ho mirem per al teu negoci?")}
        href={contactHref}
        whatsappMessage={whatsappText}
      />
    </>
  );
}
