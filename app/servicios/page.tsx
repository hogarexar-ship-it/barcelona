import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { ExtraServices, ServiceGrid } from "@/components/sections";
import { getMarketingService } from "@/lib/marketing-services";
import type { ServiceSlug } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de marketing para fontaneros y electricistas",
  description:
    "Anuncios en Google y Meta, landing pages y webs, Google Business Profile y SEO local para fontaneros y electricistas en Barcelona. También vídeo, diseño gráfico y redes sociales.",
  path: routes.services,
});

/** Qué le pasa al profesional y qué servicio le recomendamos. */
const diagnosis: { icon: IconName; problem: string; slug: ServiceSlug }[] = [
  { icon: "phone", problem: "Necesito llamadas ya", slug: "anuncios-google-y-meta" },
  { icon: "mapPin", problem: "No salgo en el mapa de Google", slug: "google-business-profile" },
  { icon: "globe", problem: "No tengo web o no me llaman desde ella", slug: "landing-page-y-web" },
  { icon: "search", problem: "Quiero depender menos de los anuncios", slug: "seo-local" },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-ink-900 text-white">
        <Container className="pb-14 pt-6 sm:pb-20">
          <Breadcrumbs onDark items={[{ name: "Servicios", href: routes.services }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                ¿Qué necesita tu negocio?
              </h1>
              <p className="mt-5 text-lg text-white/80">Elige lo que te pasa y te decimos por dónde empezar.</p>
            </div>

            <div className="overflow-hidden rounded-xl2 border border-white/15">
              <div className="grid grid-cols-[1fr_auto] border-b border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/60">
                <span>Si te pasa esto…</span>
                <span>te recomendamos</span>
              </div>
              <ul>
                {diagnosis.map((row) => {
                  const service = getMarketingService(row.slug);
                  if (!service) return null;
                  return (
                    <li key={row.slug} className="border-b border-white/10 last:border-b-0">
                      <Link
                        href={service.path}
                        className="group grid gap-3 px-5 py-4 transition-colors hover:bg-white/5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                      >
                        <span className="flex items-start gap-3">
                          <Icon name={row.icon} className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                          <span className="text-white/90">{row.problem}</span>
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
                    href={routes.contact}
                    className="group grid gap-3 bg-[#EA580C] px-5 py-4 font-semibold transition-colors hover:bg-[#C2410C] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                  >
                    <span className="flex items-start gap-3">
                      <Icon name="question" className="mt-0.5 h-5 w-5 shrink-0" />
                      No lo tengo claro
                    </span>
                    <span className="inline-flex items-center gap-1.5 pl-8 sm:pl-0">
                      Asesoramiento gratis
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
          <SectionHeading title="Todos los servicios" />
          <div className="mt-8">
            <ServiceGrid />
          </div>
          <div className="mt-6">
            <ExtraServices />
          </div>
        </Container>
      </section>

      <CtaBand title="¿No sabes cuál te conviene?" text="Te lo decimos gratis en el asesoramiento." />
    </>
  );
}
