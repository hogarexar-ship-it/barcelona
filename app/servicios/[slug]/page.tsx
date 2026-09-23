import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { PrimaryCta, WhatsAppButton } from "@/components/CtaButtons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ExpandableList } from "@/components/ExpandableList";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PhotoFrame } from "@/components/PhotoFrame";
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

  const index = marketingServices.findIndex((s) => s.slug === service.slug);
  const total = marketingServices.length;
  const prev = marketingServices[(index - 1 + total) % total];
  const next = marketingServices[(index + 1) % total];
  const contactHref = `${routes.contact}?servicio=${service.slug}`;
  const whatsappText = `Hola ${siteConfig.brand}, quiero información sobre el servicio «${service.name}» para mi negocio.`;

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

      <section className="border-b border-ink-200 bg-surface-100">
        <Container className="pt-6">
          <Breadcrumbs
            items={[
              { name: "Servicios", href: routes.services },
              { name: service.name, href: service.path },
            ]}
          />

          <nav aria-label="Servicios" className="-mx-4 mt-6 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {marketingServices.map((item) => {
                const current = item.slug === service.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={item.path}
                      aria-current={current ? "page" : undefined}
                      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors ${
                        current
                          ? "border-ink-900 bg-ink-900 text-white"
                          : "border-ink-200 bg-white text-ink-700 hover:border-ink-900"
                      }`}
                    >
                      <Icon name={item.icon} className={`h-4 w-4 ${current ? "text-accent-300" : "text-accent-600"}`} />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="py-12 sm:py-16">
            <p className="flex items-center gap-3 text-sm font-semibold text-ink-400">
              <Icon name={service.icon} className="h-7 w-7 text-accent-600" />
              Servicio {index + 1} de {total}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              {service.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink-600 sm:text-xl">{service.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:hidden">
              <PrimaryCta href={contactHref} />
              <WhatsAppButton message={whatsappText} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="min-w-0 space-y-14">
          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Es para ti si…</h2>
            <div className="mt-6" data-reveal>
              <CheckList items={service.signs} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Qué incluye</h2>
            <p className="mt-2 text-sm text-ink-400">Toca cada punto para ver el detalle.</p>
            <div className="mt-6" data-reveal>
              <ExpandableList items={service.includes} />
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Preguntas frecuentes</h2>
            <div className="mt-6">
              <FaqAccordion faqs={service.faqs} title="" />
            </div>
          </section>
        </div>

        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <div className="overflow-hidden rounded-xl2 border border-ink-200 bg-white">
            <PhotoFrame photo={service.photo} className="aspect-[16/10] !rounded-none" sizes="(min-width: 1024px) 22rem, 100vw" />
            <div className="p-6">
              <p className="font-display text-xl font-bold text-ink-900">Asesoramiento gratis</p>
              <p className="mt-1 text-sm text-ink-600">Te decimos qué haríamos en tu caso. Sin compromiso.</p>
              <PrimaryCta href={contactHref} className="mt-5 w-full" />
              <WhatsAppButton message={whatsappText} label="WhatsApp" className="mt-3 w-full" />
            </div>
          </div>
        </aside>
      </Container>

      {prev && next && (
        <nav aria-label="Otros servicios" className="border-t border-ink-200">
          <Container className="grid sm:grid-cols-2">
            <Link href={prev.path} className="group border-b border-ink-200 py-8 sm:border-b-0 sm:border-r sm:pr-8">
              <span className="text-sm text-ink-400">← Servicio anterior</span>
              <span className="mt-2 flex items-center gap-3 font-display text-xl font-bold text-ink-900 group-hover:text-accent-700">
                <Icon name={prev.icon} className="h-6 w-6 text-accent-600" />
                {prev.name}
              </span>
            </Link>
            <Link href={next.path} className="group py-8 sm:pl-8 sm:text-right">
              <span className="text-sm text-ink-400">Siguiente servicio →</span>
              <span className="mt-2 flex items-center gap-3 font-display text-xl font-bold text-ink-900 group-hover:text-accent-700 sm:justify-end">
                <Icon name={next.icon} className="h-6 w-6 text-accent-600" />
                {next.name}
              </span>
            </Link>
          </Container>
        </nav>
      )}

      <CtaBand
        title="¿Lo vemos para tu negocio?"
        href={contactHref}
        whatsappMessage={whatsappText}
      />
    </>
  );
}
