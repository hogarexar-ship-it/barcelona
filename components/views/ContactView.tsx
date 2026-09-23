import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { routes } from "@/lib/navigation";
import { siteConfig, siteText, telHref, whatsappHref, whatsappMessage } from "@/lib/site-config";

export function ContactView({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const nextSteps = [
    { icon: "document" as const, title: t("Rellenas el formulario", "Omples el formulari"), text: t("2 minutos", "2 minuts") },
    { icon: "phone" as const, title: t("Te contactamos", "Et contactem"), text: t("Por el medio que elijas", "Pel mitjà que triïs") },
    { icon: "chart" as const, title: t("Te proponemos un plan", "Et proposem un pla"), text: t("Gratis y sin compromiso", "Gratis i sense compromís") },
  ];

  return (
    <section className="bg-surface-100 pb-16 pt-6 sm:pb-24">
      <Container>
        <Breadcrumbs
          locale={locale}
          items={[{ name: t("Asesoramiento gratuito", "Assessorament gratuït"), href: routes[locale].contact }]}
        />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-ink-700">
              <Icon name="clock" className="h-4 w-4 text-accent-600" />
              {t("2 minutos · Gratis", "2 minuts · Gratis")}
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              {t("Asesoramiento gratuito", "Assessorament gratuït")}
            </h1>
            <p className="mt-4 text-lg text-ink-600">
              {t("Te decimos qué haríamos para conseguirte más clientes.", "Et diem què faríem per aconseguir-te més clients.")}
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ContactForm locale={locale} idPrefix="asesoramiento" />
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">{t("Qué pasa después", "Què passa després")}</h2>
            <ol className="mt-6">
              {nextSteps.map((step, index) => (
                <li key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                  {index < nextSteps.length - 1 && (
                    <span className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-ink-200" aria-hidden="true" />
                  )}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink-200 bg-white">
                    <Icon name={step.icon} className="h-5 w-5 text-accent-600" />
                  </span>
                  <div className="pt-1.5">
                    <p className="font-semibold text-ink-900">{step.title}</p>
                    <p className="mt-1 text-sm text-ink-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-ink-200 pt-6">
              <p className="text-sm font-semibold text-ink-900">
                {t("¿Prefieres hablar directamente?", "Prefereixes parlar directament?")}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                <li>
                  <a href={telHref()} className="inline-flex items-center gap-2 font-semibold hover:text-accent-700">
                    <Icon name="phone" className="h-5 w-5 text-accent-600" />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref(whatsappMessage(locale))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold hover:text-accent-700"
                  >
                    <Icon name="chat" className="h-5 w-5 text-accent-600" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 font-semibold hover:text-accent-700">
                    <Icon name="mail" className="h-5 w-5 text-accent-600" />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <Icon name="clock" className="h-5 w-5 text-accent-600" />
                  {siteText[locale].openingHours}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
