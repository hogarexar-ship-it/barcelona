"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Hero } from "./Hero";
import { ServiceCard } from "./ServiceCard";
import { FaqAccordion } from "./FaqAccordion";
import { CallButton, WhatsAppButton } from "./CtaButtons";
import { JsonLd } from "./JsonLd";
import { useLanguage } from "@/lib/i18n/context";
import { services } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";
import { faqSchema } from "@/lib/schema";

// Fotos ilustrativas de trabajos gestionados por Hogarex. PLACEHOLDER: sustituir
// por fotografías reales de trabajos terminados en cuanto estén disponibles.
// El orden debe coincidir con `home.trabajos.items` en cada idioma del diccionario.
const featuredWorkMedia = [
  { image: "/images/work/1-fontaneria-eixample.svg", rubro: "fontaneria" },
  { image: "/images/work/2-electricidad-gracia.svg", rubro: "electricidad" },
  { image: "/images/work/3-gas-sant-marti.svg", rubro: "gas" },
  { image: "/images/work/4-pintura-sants.svg", rubro: "pintura" },
  { image: "/images/work/5-carpinteria-ciutat-vella.svg", rubro: "carpinteria" },
  { image: "/images/work/6-climatizacion-sarria.svg", rubro: "climatizacion" },
];

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      <JsonLd data={faqSchema(t.home.faq.items)} />

      <Hero
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
        image="/images/hero/hero-hogar.svg"
        imageAlt="Ilustración de una vivienda en Barcelona con herramientas de fontanería, electricidad, pintura y carpintería"
      >
        <div className="mt-8">
          <p className="text-sm font-semibold text-ink-900">{t.home.elegirProblema}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {t.home.quickProblems.map((item) => (
              <Link
                key={item.label}
                href={`/solicitud?rubro=${item.rubro}&problema=${item.problema}`}
                className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-all hover:border-terracotta-400 hover:bg-terracotta-50 hover:text-terracotta-700 active:scale-95"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/buscar-servicios"
              className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-ink-800 active:scale-95"
            >
              {t.home.verTodosServicios}
            </Link>
          </div>
        </div>
      </Hero>

      <Section title={t.home.comoFunciona.title} subtitle={t.home.comoFunciona.subtitle}>
        <ol className="grid gap-6 sm:grid-cols-3">
          {t.home.comoFunciona.steps.map((item, index) => (
            <li key={item.title} className="rounded-xl2 border border-ink-100 bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500 text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-4 font-semibold text-ink-900">{item.title}</p>
              <p className="mt-1 text-sm text-ink-600">{item.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link
            href="/solicitud"
            className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-600"
          >
            {t.home.comoFunciona.cta}
          </Link>
        </div>
      </Section>

      <Section title={t.home.servicios.title} subtitle={t.home.servicios.subtitle} tone="cream">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section title={t.home.trabajos.title} subtitle={t.home.trabajos.subtitle}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorkMedia.map((media, index) => {
            const work = t.home.trabajos.items[index];
            if (!work) return null;
            return (
              <Link
                key={media.image}
                href={`/solicitud?rubro=${media.rubro}`}
                className="group overflow-hidden rounded-xl2 border border-ink-100 bg-white transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={media.image}
                    alt={`${work.title} en ${work.zone}, Barcelona`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-ink-900">{work.title}</p>
                  <p className="text-sm text-ink-400">{work.zone}, Barcelona</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section title={t.home.zonas.title} subtitle={t.home.zonas.subtitle} tone="cream">
        <div className="flex flex-wrap gap-3">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zonas/${zone.slug}`}
              className="rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-all hover:border-terracotta-300 hover:text-terracotta-600 active:scale-95"
            >
              {zone.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-600">
          <Link href="/zonas" className="font-semibold text-terracotta-600 hover:underline">
            {t.home.zonas.verCobertura}
          </Link>
        </p>
      </Section>

      <Section title={t.home.confianza.title}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.confianza.points.map((point) => (
            <div key={point.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
              <CheckBadge />
              <p className="mt-3 font-semibold text-ink-900">{point.title}</p>
              <p className="mt-1 text-sm text-ink-600">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={t.home.testimonios.title} tone="cream">
        <div className="grid gap-6 sm:grid-cols-3">
          {t.home.testimonios.items.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-xl2 border border-ink-100 bg-white p-6">
              <div className="flex gap-0.5 text-terracotta-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-600">&ldquo;{testimonial.text}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-ink-900">
                {testimonial.name} <span className="font-normal text-ink-400">· {testimonial.zone}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="bg-ink-900 py-16 text-white">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">{t.home.urgencia.title}</p>
            <p className="mt-2 max-w-xl text-ink-100">{t.home.urgencia.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CallButton variant="onDark" />
            <WhatsAppButton variant="onDark" />
          </div>
        </Container>
      </section>

      <Section title={t.home.faq.title} tone="cream">
        <FaqAccordion faqs={t.home.faq.items} title="" />
      </Section>
    </>
  );
}

function Section({
  title,
  subtitle,
  children,
  tone = "default",
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "default" | "cream";
}) {
  return (
    <section className={tone === "cream" ? "bg-cream-100 py-16" : "py-16"}>
      <Container>
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-2 text-ink-600">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}

function CheckBadge() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-600">
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.704 5.29a1 1 0 010 1.42l-7.4 7.4a1 1 0 01-1.42 0l-3.588-3.59a1 1 0 111.42-1.413l2.878 2.878 6.69-6.69a1 1 0 011.42-.005z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.286 3.958c.3.921-.755 1.688-1.538 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69z" />
    </svg>
  );
}
