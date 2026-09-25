import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { Container } from "./Container";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import { PhotoFrame } from "./PhotoFrame";
import type { Step } from "./ProcessSteps";
import { Reveal } from "./Reveal";
import type { TradeValue } from "@/lib/contact-options";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getExtraServices, getMarketingServices } from "@/lib/marketing-services";
import { getSectors } from "@/lib/sectors-data";
import { siteConfig, telHref } from "@/lib/site-config";

/** Los servicios en tarjetas: título explicativo, palabras clave debajo. */
export function ServiceGrid({ locale, iconClass = "text-accent-600" }: { locale: Locale; iconClass?: string }) {
  const t = translator(locale);
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {getMarketingServices(locale).map((service, index) => (
        <li key={service.slug}>
          <Reveal delay={(index % 3) * 60} className="h-full">
            <Link
              href={service.path}
              className="group flex h-full flex-col rounded-xl2 border border-ink-200 bg-white p-5 transition-colors hover:border-ink-900"
            >
              <Icon name={service.icon} className={`h-8 w-8 ${iconClass}`} />
              <span className="mt-4 font-display text-lg font-bold leading-snug text-ink-900">{service.title}</span>
              <span className="mt-1.5 flex-1 text-sm text-ink-400">{service.keywords}</span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink-900">
                {t("Ver cómo", "Veure com")}
                <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/**
 * Crecemos contigo: las funciones se suman a medida que crece el negocio.
 * Los servicios complementarios (vídeo, diseño, redes) aparecen en la última etapa.
 */
export function GrowthPath({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const extras = getExtraServices(locale)
    .map((e) => e.name.toLowerCase())
    .join(", ");
  const stages: { icon: IconName; step: string; title: string; text: string }[] = [
    {
      icon: "mapPin",
      step: t("Empiezas", "Comences"),
      title: t("Que te encuentren", "Que et trobin"),
      text: t(
        "Ficha de Google con reseñas y una web sencilla que haga que te llamen.",
        "Fitxa de Google amb ressenyes i una web senzilla que faci que et truquin.",
      ),
    },
    {
      icon: "trendingUp",
      step: t("Creces", "Creixes"),
      title: t("Que te llamen más", "Que et truquin més"),
      text: t(
        "Anuncios en Google y Meta y un CRM para que ningún cliente se te escape.",
        "Anuncis a Google i Meta i un CRM perquè no se t'escapi cap client.",
      ),
    },
    {
      icon: "building",
      step: t("Escalas", "Escales"),
      title: t("Que el negocio funcione sin ti", "Que el negoci funcioni sense tu"),
      text: t(
        `SEO y GEO, automatizaciones para tu equipo y, si lo necesitas, ${extras}.`,
        `SEO i GEO, automatitzacions per al teu equip i, si ho necessites, ${extras}.`,
      ),
    },
  ];

  return (
    <div>
      <div data-reveal className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          {t("Crecemos contigo", "Creixem amb tu")}
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          {t(
            "Empiezas por lo que más falta te hace y sumamos funciones a medida que crece tu negocio.",
            "Comences pel que més et cal i hi sumem funcions a mesura que creix el teu negoci.",
          )}
        </p>
      </div>
      <ol className="mt-10 grid gap-3 md:grid-cols-3">
        {stages.map((stage, index) => (
          <li key={stage.step}>
            <Reveal delay={index * 100} className="h-full">
              <div className="relative h-full rounded-xl2 border border-ink-200 bg-white p-6">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink-400">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink-900 font-display text-white">
                    {index + 1}
                  </span>
                  {stage.step}
                </p>
                <Icon name={stage.icon} className="mt-5 h-8 w-8 text-accent-600" />
                <p className="mt-3 font-display text-xl font-bold text-ink-900">{stage.title}</p>
                <p className="mt-2 text-sm text-ink-600">{stage.text}</p>
                {index < stages.length - 1 && (
                  <Icon
                    name="arrowRight"
                    className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 rounded-full bg-surface-50 text-ink-400 md:block"
                  />
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Dos accesos grandes por oficio. */
export function SectorCards({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {getSectors(locale).map((sector, index) => (
        <Reveal key={sector.trade} delay={index * 100}>
          <Link href={sector.path} className="group relative block overflow-hidden rounded-xl2">
            <PhotoFrame photo={sector.photo} className="aspect-[16/9] !rounded-none" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 text-white sm:p-6">
              <span className="flex items-center gap-3 font-display text-2xl font-bold">
                <Icon name={sector.icon} className={`h-7 w-7 ${sector.tone.icon}`} />
                {t("Soy", "Soc")} {sector.person}
              </span>
              <Icon name="arrowRight" className="h-6 w-6 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function consultationSteps(locale: Locale): Step[] {
  const t = translator(locale);
  return [
    { icon: "document", title: t("Rellenas el formulario", "Omples el formulari"), description: t("2 minutos.", "2 minuts.") },
    {
      icon: "phone",
      title: t("Te contactamos", "Et contactem"),
      description: t("Por llamada, WhatsApp o email.", "Per trucada, WhatsApp o correu."),
    },
    {
      icon: "chart",
      title: t("Te proponemos un plan", "Et proposem un pla"),
      description: t("Gratis y sin compromiso.", "Gratis i sense compromís."),
    },
  ];
}

export function ContactSection({
  locale,
  title,
  subtitle,
  defaultTrade,
  defaultInterest,
}: {
  locale: Locale;
  title?: string;
  subtitle?: string;
  defaultTrade?: TradeValue;
  defaultInterest?: string;
}) {
  const t = translator(locale);
  return (
    <section id="asesoramiento" className="scroll-mt-20 bg-surface-100 py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div data-reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            {title ?? t("Pide tu asesoramiento gratis", "Demana el teu assessorament gratis")}
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            {subtitle ??
              t(
                "2 minutos. Te decimos qué haríamos en tu caso, sin compromiso.",
                "2 minuts. Et diem què faríem en el teu cas, sense compromís.",
              )}
          </p>
          <a href={telHref()} className="mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent-700">
            <Icon name="phone" className="h-5 w-5 text-accent-600" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <Reveal delay={80}>
          <ContactForm locale={locale} defaultTrade={defaultTrade} defaultInterest={defaultInterest} idPrefix="seccion" />
        </Reveal>
      </Container>
    </section>
  );
}
