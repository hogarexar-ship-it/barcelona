import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { Container } from "@/components/Container";
import { PrimaryCta, WhatsAppButton } from "@/components/CtaButtons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FeatureGrid } from "@/components/FeatureGrid";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactSection, ExtraServices } from "@/components/sections";
import { getMarketingService, marketingServices } from "@/lib/marketing-services";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return marketingServices.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getMarketingService(params.slug);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: service.path });
}

export default function ServicioPage({ params }: { params: { slug: string } }) {
  const service = getMarketingService(params.slug);
  if (!service) notFound();

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

      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Servicios", href: routes.services },
              { name: service.name, href: service.path },
            ]}
          />
        </Container>
      </div>

      <PageHero
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        actions={
          <>
            <PrimaryCta href={`${routes.contact}?servicio=${service.slug}`} />
            <WhatsAppButton message={`Hola ${siteConfig.brand}, quiero información sobre ${service.name.toLowerCase()} para mi negocio.`} />
          </>
        }
        aside={<PhotoFrame photo={service.photo} priority className="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />}
        asideDesktopOnly
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <h2 className="font-display text-2xl font-bold text-ink-900">Te interesa si…</h2>
            <div className="mt-6">
              <CheckList items={service.signs} />
            </div>
          </div>
          <div>
            <SectionHeading title="Qué incluye" />
            <div className="mt-8">
              <FeatureGrid items={service.includes} className="sm:grid-cols-2" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-100 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <FaqAccordion faqs={service.faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <ExtraServices />
        </Container>
      </section>

      <ContactSection title={`${service.name}: pide tu asesoramiento gratis`} defaultInterest={service.slug} />
    </>
  );
}
