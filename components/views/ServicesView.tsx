import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { GrowthPath } from "@/components/sections";
import { ServiceStack } from "@/components/ServiceStack";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getMarketingServices } from "@/lib/marketing-services";
import { routes } from "@/lib/navigation";

export function ServicesView({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const r = routes[locale];
  const services = getMarketingServices(locale);

  return (
    <>
      <section className="bg-ink-900 text-white">
        <Container className="pb-14 pt-6 sm:pb-20">
          <Breadcrumbs onDark locale={locale} items={[{ name: t("Servicios", "Serveis"), href: r.services }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                {t("Nuestros servicios", "Els nostres serveis")}
              </h1>
              <p className="mt-5 text-lg text-white/80">
                {t(
                  "Cinco servicios para conseguirte más clientes. Puedes empezar por uno solo.",
                  "Cinc serveis per aconseguir-te més clients. Pots començar per un de sol.",
                )}
              </p>
            </div>

            <ul className="min-w-0 divide-y divide-white/10 border-y border-white/15">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.path} className="group flex items-center gap-4 py-4 transition-colors hover:text-accent-200">
                    <Icon name={service.icon} className="h-6 w-6 shrink-0 text-accent-300" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg font-bold">{service.name}</span>
                      <span className="hidden truncate text-sm text-white/60 sm:block">{service.oneLiner}</span>
                    </span>
                    <Icon name="arrowRight" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container>
          <SectionHeading title={t("Todos los servicios", "Tots els serveis")} />
          <div className="mt-10">
            <ServiceStack locale={locale} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <GrowthPath locale={locale} />
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
