import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ExtraServices, ServiceGrid } from "@/components/sections";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getMarketingService } from "@/lib/marketing-services";
import type { ServiceSlug } from "@/lib/marketing-services";
import { routes } from "@/lib/navigation";

/** Qué le pasa al profesional y qué servicio le recomendamos. */
const diagnosis: { icon: IconName; problem: Record<Locale, string>; slug: ServiceSlug }[] = [
  { icon: "phone", problem: { es: "Necesito llamadas ya", ca: "Necessito trucades ja" }, slug: "anuncios-google-y-meta" },
  {
    icon: "mapPin",
    problem: { es: "No salgo en el mapa o tengo pocas reseñas", ca: "No surto al mapa o tinc poques ressenyes" },
    slug: "google-business-profile",
  },
  {
    icon: "globe",
    problem: { es: "No tengo web o no me llaman desde ella", ca: "No tinc web o no em truquen des d'ella" },
    slug: "landing-page-y-web",
  },
  {
    icon: "search",
    problem: { es: "Quiero depender menos de los anuncios", ca: "Vull dependre menys dels anuncis" },
    slug: "seo-local",
  },
];

export function ServicesView({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const r = routes[locale];

  return (
    <>
      <section className="bg-ink-900 text-white">
        <Container className="pb-14 pt-6 sm:pb-20">
          <Breadcrumbs onDark locale={locale} items={[{ name: t("Servicios", "Serveis"), href: r.services }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {t("¿Qué necesita tu negocio?", "Què necessita el teu negoci?")}
              </h1>
              <p className="mt-5 text-lg text-white/80">
                {t("Elige lo que te pasa y te decimos por dónde empezar.", "Tria el que et passa i et diem per on començar.")}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl2 border border-white/15">
              <div className="grid grid-cols-[1fr_auto] border-b border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/60">
                <span>{t("Si te pasa esto…", "Si et passa això…")}</span>
                <span>{t("te recomendamos", "et recomanem")}</span>
              </div>
              <ul>
                {diagnosis.map((row) => {
                  const service = getMarketingService(locale, row.slug);
                  if (!service) return null;
                  return (
                    <li key={row.slug} className="border-b border-white/10 last:border-b-0">
                      <Link
                        href={service.path}
                        className="group grid gap-3 px-5 py-4 transition-colors hover:bg-white/5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                      >
                        <span className="flex items-start gap-3">
                          <Icon name={row.icon} className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                          <span className="text-white/90">{row.problem[locale]}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5 pl-8 font-semibold text-white group-hover:text-accent-200 sm:pl-0">
                          {service.name}
                          <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href={r.contact}
                    className="group grid gap-3 bg-[#EA580C] px-5 py-4 font-semibold transition-colors hover:bg-[#C2410C] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                  >
                    <span className="flex items-start gap-3">
                      <Icon name="question" className="mt-0.5 h-5 w-5 shrink-0" />
                      {t("No lo tengo claro", "No ho tinc clar")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 pl-8 sm:pl-0">
                      {t("Asesoramiento gratis", "Assessorament gratis")}
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={t("Todos los servicios", "Tots els serveis")} />
          <div className="mt-8">
            <ServiceGrid locale={locale} />
          </div>
          <div className="mt-6">
            <ExtraServices locale={locale} />
          </div>
        </Container>
      </section>

      <CtaBand
        locale={locale}
        title={t("¿No sabes cuál te conviene?", "No saps quin et convé?")}
        text={t("Te lo decimos gratis en el asesoramiento.", "T'ho diem gratis a l'assessorament.")}
      />
    </>
  );
}
