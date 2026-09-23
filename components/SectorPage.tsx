import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { PrimaryCta, WhatsAppButton } from "./CtaButtons";
import { EarningsCalculator } from "./EarningsCalculator";
import { OrganicPaid } from "./OrganicPaid";
import { FaqAccordion } from "./FaqAccordion";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { PhotoHero } from "./PhotoHero";
import { Reveal } from "./Reveal";
import { SearchMock } from "./SearchMock";
import { SectionHeading } from "./SectionHeading";
import { ContactSection, ServiceGrid } from "./sections";
import { guideUrl, sortedGuides } from "@/lib/guides-data";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { routes } from "@/lib/navigation";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getSectors } from "@/lib/sectors-data";
import type { Sector } from "@/lib/sectors-data";
import { siteConfig } from "@/lib/site-config";

export function SectorPage({ locale, sector }: { locale: Locale; sector: Sector }) {
  const t = translator(locale);
  const guides = sortedGuides(locale);
  const relatedGuides = [...guides.filter((g) => g.trade === sector.trade), ...guides.filter((g) => !g.trade)].slice(0, 3);
  const other = getSectors(locale).find((s) => s.trade !== sector.trade);
  const { tone } = sector;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: sector.metaTitle,
          serviceType: `${t("Marketing digital para", "Màrqueting digital per a")} ${sector.audience}`,
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
            <Breadcrumbs
              onDark
              locale={locale}
              items={[{ name: `${t("Marketing digital para", "Màrqueting digital per a")} ${sector.audience}`, href: sector.path }]}
            />
            <p className={`mt-8 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-bold ${tone.chip}`}>
              <Icon name={sector.icon} className={`h-4 w-4 ${tone.icon}`} />
              {t("Solo para", "Només per a")} {sector.audience}
            </p>
          </>
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryCta locale={locale} href={`${routes[locale].contact}?oficio=${sector.trade}`} />
          <WhatsAppButton
            locale={locale}
            variant="glass"
            message={t(
              `Hola ${siteConfig.brand}, trabajo en ${sector.name.toLowerCase()} en Barcelona y quiero más clientes.`,
              `Hola ${siteConfig.brand}, treballo en ${sector.name.toLowerCase()} a Barcelona i vull més clients.`,
            )}
          />
        </div>
      </PhotoHero>
      <div className={`h-1.5 ${tone.bar}`} aria-hidden="true" />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div data-reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              {t(`Si eres ${sector.person} en Barcelona, probablemente:`, `Si ets ${sector.person} a Barcelona, probablement:`)}
            </h2>
            <ul className="mt-8 space-y-3">
              {sector.symptoms.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-ink-700">
                  <Icon name="x" className="mt-1 h-5 w-5 shrink-0 text-urgent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end" data-reveal>
            <p className="font-display text-2xl font-bold leading-snug text-ink-400 sm:text-3xl">
              {t("El problema no es tu trabajo.", "El problema no és la teva feina.")}
            </p>
            <p className="mt-3 flex gap-3 font-display text-2xl font-bold leading-snug text-ink-900 sm:text-3xl">
              <Icon name="arrowRight" className="mt-1.5 h-7 w-7 shrink-0 text-[#EA580C]" />
              {t(
                "El problema es que no tienes un sistema para conseguir clientes de forma constante.",
                "El problema és que no tens un sistema per aconseguir clients de manera constant.",
              )}
            </p>
          </div>
        </Container>
      </section>

      <section className={`${tone.soft} py-16 sm:py-20`}>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title={t("Así te buscan tus clientes", "Així et cerquen els teus clients")}
              intro={t("Si no sales aquí, llaman a otro.", "Si no hi surts, truquen a un altre.")}
            />
            <details className="group mt-6" data-reveal>
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-ink-900">
                {t("Por qué es importante", "Per què és important")}
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

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl" data-reveal>
            {t(`Los errores que frenan a muchos ${sector.audience}`, `Els errors que frenen molts ${sector.audience}`)}
          </h2>
          <ol className="mt-8 divide-y divide-ink-200 border-y border-ink-200">
            {sector.mistakes.map((item, index) => (
              <li key={item} className="flex items-baseline gap-5 py-4" data-reveal>
                <span className="font-display text-sm font-bold tabular-nums text-ink-400">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-lg text-ink-800">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex gap-3 text-xl font-semibold text-ink-900" data-reveal>
            <Icon name="arrowRight" className="mt-1 h-6 w-6 shrink-0 text-[#EA580C]" />
            {t(
              "Esto provoca ingresos que suben y bajan y un negocio que crece despacio.",
              "Això provoca ingressos que pugen i baixen i un negoci que creix a poc a poc.",
            )}
          </p>
        </Container>
      </section>

      <section className="bg-ink-900 py-16 text-white sm:py-24">
        <Container>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl" data-reveal>
            {t("Lo que te cuesta no tener un sistema", "El que et costa no tenir un sistema")}
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sector.costs.map((cost, index) => (
              <li key={cost.text}>
                <Reveal delay={index * 80} className="h-full">
                  <div className="h-full rounded-xl2 border border-white/15 p-6">
                    <Icon name={cost.icon} className="h-8 w-8 text-accent-300" />
                    <p className="mt-4 font-display text-lg font-bold leading-snug">{cost.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-10 flex gap-3 text-xl font-semibold" data-reveal>
            <Icon name="arrowRight" className="mt-1 h-6 w-6 shrink-0 text-[#EA580C]" />
            {t("Y eso se nota directamente en lo que ganas.", "I això es nota directament en el que guanyes.")}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
              {t("Nuestro sistema: sencillo y pensado para resultados", "El nostre sistema: senzill i pensat per a resultats")}
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              {t(
                "Todo conectado para que te llamen más, sin complicarte.",
                "Tot connectat perquè et truquin més, sense complicar-te.",
              )}
            </p>
            <div className="mt-8">
              <PrimaryCta locale={locale} href={`${routes[locale].contact}?oficio=${sector.trade}`} />
            </div>
          </div>
          <ol className="relative">
            {sector.system.map((item, index) => (
              <li key={item} className="relative flex gap-4 pb-6 last:pb-0" data-reveal>
                {index < sector.system.length - 1 && (
                  <span className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-ink-200" aria-hidden="true" />
                )}
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${tone.chip}`}>
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <p className="pt-2 text-lg font-semibold text-ink-900">{item}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading
            title={t("Haz la cuenta: ¿cuánto vale un cliente más?", "Fes el compte: quant val un client més?")}
            intro={t(
              "Mueve los números. Con unos pocos trabajos más al mes, la diferencia a final de año es grande.",
              "Mou els números. Amb unes quantes feines més al mes, la diferència a final d'any és gran.",
            )}
          />
          <div className="mt-10" data-reveal>
            <EarningsCalculator
              locale={locale}
              defaultTicket={sector.avgTicket}
              contactHref={`${routes[locale].contact}?oficio=${sector.trade}`}
            />
          </div>
        </Container>
      </section>

      <OrganicPaid locale={locale} />

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <h2
            className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl"
            data-reveal
          >
            {t(
              `Lo que ya hacen los ${sector.audience} que más trabajan en Barcelona`,
              `El que ja fan els ${sector.audience} que més treballen a Barcelona`,
            )}
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "star" as const, text: t("Tienen muchas reseñas recientes y las responden todas", "Tenen moltes ressenyes recents i les responen totes") },
              { icon: "mapPin" as const, text: t("Salen en el mapa de Google de su zona", "Surten al mapa de Google de la seva zona") },
              { icon: "megaphone" as const, text: t("Invierten cada mes en anuncios, aunque sea poco", "Inverteixen cada mes en anuncis, encara que sigui poc") },
              { icon: "phone" as const, text: t("Responden al momento, aunque sea con un mensaje automático", "Responen al moment, encara que sigui amb un missatge automàtic") },
              { icon: "globe" as const, text: t("Tienen una web clara con el teléfono y WhatsApp a la vista", "Tenen una web clara amb el telèfon i WhatsApp a la vista") },
              { icon: "inbox" as const, text: t("Hacen seguimiento de cada presupuesto", "Fan seguiment de cada pressupost") },
            ].map((item, index) => (
              <li key={item.text}>
                <Reveal delay={(index % 3) * 80} className="h-full">
                  <div className="flex h-full gap-4 rounded-xl2 border border-ink-200 bg-white p-5">
                    <Icon name={item.icon} className={`h-7 w-7 shrink-0 ${tone.icon}`} />
                    <p className="font-semibold text-ink-900">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-10 flex gap-3 font-display text-2xl font-bold text-ink-900" data-reveal>
            <Icon name="arrowRight" className="mt-1 h-7 w-7 shrink-0 text-[#EA580C]" />
            {t("No es suerte: es un sistema. Y lo montamos contigo.", "No és sort: és un sistema. I el muntem amb tu.")}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={t("Cada pieza, en detalle", "Cada peça, en detall")} />
          <div className="mt-8">
            <ServiceGrid locale={locale} iconClass={tone.icon} />
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-200 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FaqAccordion faqs={sector.faqs} title={t("Preguntas frecuentes", "Preguntes freqüents")} />
          {relatedGuides.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-900">{t("Guías gratis", "Guies gratis")}</h2>
              <ul className="mt-6 divide-y divide-ink-100 border-y border-ink-100">
                {relatedGuides.map((guide) => (
                  <li key={guide.id}>
                    <Link href={guideUrl(locale, guide)} className="group flex items-center gap-3 py-4 font-semibold text-ink-900 hover:text-accent-700">
                      <Icon name="document" className={`h-5 w-5 shrink-0 ${tone.icon}`} />
                      <span className="flex-1">{guide.title}</span>
                      <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-ink-400 group-hover:text-accent-700" />
                    </Link>
                  </li>
                ))}
              </ul>
              {other && (
                <p className="mt-8 text-sm text-ink-600">
                  {t("¿Eres", "Ets")} {other.person}?{" "}
                  <Link href={other.path} className="font-semibold text-ink-900 underline underline-offset-4 hover:text-accent-700">
                    {t("Ver tu página", "Veure la teva pàgina")}
                  </Link>
                </p>
              )}
            </div>
          )}
        </Container>
      </section>

      <ContactSection
        locale={locale}
        title={`${t("Asesoramiento gratis para", "Assessorament gratis per a")} ${sector.audience}`}
        defaultTrade={sector.trade}
      />
    </>
  );
}
