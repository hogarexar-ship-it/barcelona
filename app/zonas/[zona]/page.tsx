import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { getZoneBySlug, zones } from "@/lib/zones-data";
import { services } from "@/lib/services-data";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return zones.map((zone) => ({ zona: zone.slug }));
}

export function generateMetadata({ params }: { params: { zona: string } }): Metadata {
  const zone = getZoneBySlug(params.zona);
  if (!zone) return {};

  return buildMetadata({
    title: zone.metaTitle,
    description: zone.metaDescription,
    path: `/zonas/${zone.slug}`,
  });
}

export default function ZonePage({ params }: { params: { zona: string } }) {
  const zone = getZoneBySlug(params.zona);
  if (!zone) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Servicios del hogar en ${zone.name}, Barcelona`,
          description: zone.metaDescription,
          url: `${siteConfig.url}/zonas/${zone.slug}`,
        })}
      />

      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Zonas", href: "/zonas" }, { name: zone.name, href: `/zonas/${zone.slug}` }]} />
        </Container>
      </div>

      <Hero
        eyebrow={`${zone.name}, Barcelona`}
        title={`Fontanería, electricidad y gas en ${zone.name}`}
        subtitle={zone.intro}
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-ink-900">Barrios que cubrimos</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {zone.neighborhoods.map((n) => (
                <span key={n} className="rounded-full border border-ink-100 bg-white px-3 py-1.5 text-sm text-ink-700">
                  {n}
                </span>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink-900">
              Servicios disponibles en {zone.name}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="rounded-xl2 border border-ink-100 bg-white p-5 hover:shadow-lg"
                >
                  <p className="font-semibold text-ink-900">{service.name}</p>
                  <p className="mt-1 text-sm text-ink-600">{service.heroSubtitle}</p>
                </Link>
              ))}
            </div>
          </div>

          <aside>
            <div className="rounded-xl2 border border-ink-100 bg-white p-6">
              <p className="font-display text-lg font-bold text-ink-900">
                ¿Necesitas ayuda en {zone.name}?
              </p>
              <p className="mt-2 text-sm text-ink-600">
                Cuéntanos qué pasa y coordinamos al profesional de nuestra red más cercano a tu zona.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/solicitud"
                  className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-terracotta-600"
                >
                  Pedir presupuesto guiado
                </Link>
                <WhatsAppButton
                  message={`Hola Hogarex, necesito un servicio en ${zone.name}, Barcelona.`}
                  className="justify-center"
                />
                <CallButton className="justify-center" />
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
