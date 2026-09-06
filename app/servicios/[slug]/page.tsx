import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProcessSteps } from "@/components/ProcessSteps";
import { PriceTable } from "@/components/PriceTable";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { StickyServiceCta } from "@/components/StickyServiceCta";
import { getServiceBySlug, services } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";
import { rubroWizardConfigs } from "@/lib/wizard-data";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const url = `${siteConfig.url}/servicios/${service.slug}`;
  const problemOptions = rubroWizardConfigs[service.slug]?.problemQuestion.options.filter(
    (o) => o.value !== "otro"
  );

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `${service.name} en Barcelona`,
          description: service.metaDescription,
          url,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />

      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Servicios", href: "/servicios" },
              { name: service.name, href: `/servicios/${service.slug}` },
            ]}
          />
        </Container>
      </div>

      <Hero
        eyebrow={`${service.name} en Barcelona`}
        title={`${service.name} en Barcelona: te conseguimos al ${service.shortName} adecuado`}
        subtitle={service.heroSubtitle}
      />

      <div className="bg-cream-100 pb-16">
        <Container>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl2 border border-ink-100">
            <Image
              src={service.image}
              alt={`Trabajo de ${service.name.toLowerCase()} realizado en Barcelona`}
              fill
              priority
              className="object-cover"
            />
          </div>
        </Container>
      </div>

      <StickyServiceCta title={`${service.name} en Barcelona`} ctaHref={`/solicitud?rubro=${service.slug}`} />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Gestión directa, sin marketplace
            </h2>
            {service.intro.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-ink-600">
                {paragraph}
              </p>
            ))}

            {problemOptions && problemOptions.length > 0 && (
              <div className="mt-8 rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-5">
                <p className="font-semibold text-ink-900">¿Cuál es tu problema? Elige uno para empezar</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {problemOptions.map((option) => (
                    <Link
                      key={option.value}
                      href={`/solicitud?rubro=${service.slug}&problema=${option.value}`}
                      className="rounded-full border border-terracotta-300 bg-white px-4 py-2 text-sm font-medium text-terracotta-700 transition-all hover:border-terracotta-500 hover:bg-terracotta-500 hover:text-white active:scale-95"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <h2 className="mt-10 font-display text-2xl font-bold text-ink-900">
              Trabajos de {service.name.toLowerCase()} que gestionamos
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.commonJobs.map((job) => (
                <li key={job} className="flex items-start gap-2 text-sm text-ink-700">
                  <CheckIcon />
                  {job}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink-900">Cómo funciona</h2>
            <div className="mt-4">
              <ProcessSteps steps={service.process} />
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink-900">
              Precios orientativos de {service.name.toLowerCase()} en Barcelona
            </h2>
            <div className="mt-4">
              <PriceTable rows={service.pricing} note={service.pricingNote} />
            </div>

            <div className="mt-10">
              <FaqAccordion faqs={service.faqs} />
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl2 border border-ink-100 bg-white p-6">
              <p className="font-display text-lg font-bold text-ink-900">
                ¿Necesitas un {service.shortName} ahora?
              </p>
              <p className="mt-2 text-sm text-ink-600">
                Cuéntanos qué pasa y coordinamos al profesional de nuestra red disponible en tu zona.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={`/solicitud?rubro=${service.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-terracotta-600"
                >
                  Pedir presupuesto guiado
                </Link>
                <WhatsAppButton
                  message={`Hola Hogarex, necesito un servicio de ${service.name.toLowerCase()} en Barcelona.`}
                  className="justify-center"
                />
                <CallButton className="justify-center" />
              </div>
              {service.emergency && (
                <p className="mt-4 text-xs font-semibold text-urgent-600">
                  Atención de urgencias 24h disponible
                </p>
              )}
            </div>

            <div className="rounded-xl2 border border-ink-100 bg-cream-100 p-6">
              <p className="font-semibold text-ink-900">Otros servicios</p>
              <ul className="mt-3 space-y-2 text-sm">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link href={`/servicios/${s.slug}`} className="text-terracotta-600 hover:underline">
                        {s.name} en Barcelona
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="rounded-xl2 border border-ink-100 bg-cream-100 p-6">
              <p className="font-semibold text-ink-900">Zonas destacadas</p>
              <ul className="mt-3 space-y-2 text-sm">
                {zones.slice(0, 4).map((zone) => (
                  <li key={zone.slug}>
                    <Link href={`/zonas/${zone.slug}`} className="text-terracotta-600 hover:underline">
                      {service.name} en {zone.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-terracotta-500" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 010 1.42l-7.4 7.4a1 1 0 01-1.42 0l-3.588-3.59a1 1 0 111.42-1.413l2.878 2.878 6.69-6.69a1 1 0 011.42-.005z"
        clipRule="evenodd"
      />
    </svg>
  );
}
