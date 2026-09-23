import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ExtraServices } from "@/components/sections";
import { getMarketingService, marketingServices } from "@/lib/marketing-services";
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
  { icon: "phone", problem: "Necesito llamadas ya, esta misma semana", slug: "anuncios-google-y-meta" },
  { icon: "mapPin", problem: "No salgo en el mapa cuando buscan «fontanero» o «electricista» cerca", slug: "google-business-profile" },
  { icon: "globe", problem: "No tengo web, o la tengo pero nadie llama desde ella", slug: "landing-page-y-web" },
  { icon: "search", problem: "Quiero depender menos de pagar anuncios cada mes", slug: "seo-local" },
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
              <p className="mt-5 text-lg text-white/80">
                Cuatro servicios para que te encuentren y te llamen. Elige el problema que más se parece al tuyo y te
                decimos por dónde empezar. Puedes contratar solo uno.
              </p>
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

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading title="Los cuatro servicios, uno a uno" />
          <ol className="mt-12 space-y-14 sm:space-y-20">
            {marketingServices.map((service, index) => (
              <li key={service.slug}>
                <Reveal className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
                  <PhotoFrame
                    photo={service.photo}
                    className={`aspect-[16/10] ${index % 2 === 1 ? "md:order-2" : ""}`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div>
                    <p className="flex items-center gap-3 text-sm font-semibold text-ink-400">
                      <span className="font-display text-2xl font-bold text-accent-600">0{index + 1}</span>
                      <Icon name={service.icon} className="h-6 w-6 text-ink-700" />
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">{service.name}</h3>
                    <p className="mt-3 text-lg text-ink-600">{service.short}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.includes.slice(0, 4).map((item) => (
                        <li key={item.title} className="rounded-md border border-ink-200 px-3 py-1.5 text-sm text-ink-700">
                          {item.title}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link href={service.path} className="btn btn-outline">
                        Ver el servicio
                        <Icon name="arrowRight" className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`${routes.contact}?servicio=${service.slug}`}
                        className="text-sm font-semibold text-accent-700 underline-offset-4 hover:underline"
                      >
                        Pedir asesoramiento sobre esto
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-20">
            <ExtraServices />
          </div>
        </Container>
      </section>

      <CtaBand title="¿No sabes cuál te conviene?" text="Es normal. En el asesoramiento gratuito revisamos tu ficha de Google, tu web y tus anuncios y te decimos cuál daría resultado antes en tu caso." />
    </>
  );
}
