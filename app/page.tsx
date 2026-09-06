import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { JsonLd } from "@/components/JsonLd";
import { services } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.brand} Barcelona — Fontanería, Electricidad y Gas sin vueltas`,
  description: siteConfig.description,
  path: "/",
});

const homeFaqs = [
  {
    question: "¿Hogarex es un marketplace donde elijo el profesional?",
    answer:
      "No. En Hogarex Barcelona nos contactás a nosotros directamente, nos contás el problema, y nuestro equipo coordina internamente al profesional de nuestra red que va a resolverlo. No hay perfiles públicos para comparar ni sistema de búsqueda: la gestión es directa con nosotros de principio a fin.",
  },
  {
    question: "¿Qué servicios gestiona Hogarex en Barcelona?",
    answer:
      "Gestionamos servicios de fontanería, electricidad y gas para hogares en Barcelona ciudad: desde averías urgentes hasta instalaciones, revisiones y certificados.",
  },
  {
    question: "¿Cómo pido un servicio?",
    answer:
      "Por WhatsApp, por teléfono o completando el formulario de contacto. Contanos qué necesitás y en qué zona estás, y coordinamos al profesional de nuestra red adecuado, confirmándote horario y presupuesto antes de la visita.",
  },
  {
    question: "¿Tienen atención de urgencias 24 horas?",
    answer:
      "Sí, para averías urgentes de fontanería, electricidad o gas ofrecemos coordinación de atención fuera del horario habitual, con un recargo que te informamos antes de confirmar.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero
        eyebrow="Hogarex en Barcelona"
        title={siteConfig.tagline}
        subtitle="Gestionamos fontanería, electricidad y gas para tu hogar en Barcelona. Nos contactás a nosotros, nosotros coordinamos al profesional de nuestra red y hacemos seguimiento hasta que el trabajo está resuelto."
      />

      <Section title="Cómo funciona" subtitle="Una gestión directa, no un directorio de anuncios">
        <ol className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Nos contás el problema",
              description: "Por WhatsApp, teléfono o formulario: contanos qué pasa y en qué zona de Barcelona estás.",
            },
            {
              step: "2",
              title: "Nosotros coordinamos",
              description:
                "Asignamos, dentro de nuestra red, al profesional adecuado y te confirmamos horario y presupuesto.",
            },
            {
              step: "3",
              title: "El trabajo se resuelve",
              description: "El profesional hace el trabajo y nuestro equipo hace seguimiento de que quede conforme.",
            },
          ].map((item) => (
            <li key={item.step} className="rounded-xl2 border border-ink-100 bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500 text-sm font-bold text-white">
                {item.step}
              </span>
              <p className="mt-4 font-semibold text-ink-900">{item.title}</p>
              <p className="mt-1 text-sm text-ink-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        title="Servicios que gestionamos en Barcelona"
        subtitle="Fontanería, electricidad y gas, con seguimiento de nuestro equipo de principio a fin"
        tone="cream"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section title="Zonas de Barcelona donde operamos" subtitle="Cobertura en toda la ciudad">
        <div className="flex flex-wrap gap-3">
          {zones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zonas/${zone.slug}`}
              className="rounded-full border border-ink-100 bg-white px-4 py-2 text-sm font-medium text-ink-800 hover:border-terracotta-300 hover:text-terracotta-600"
            >
              {zone.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-600">
          <Link href="/zonas" className="font-semibold text-terracotta-600 hover:underline">
            Ver cobertura completa por barrio →
          </Link>
        </p>
      </Section>

      <section className="bg-ink-900 py-16 text-white">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">¿Tenés una urgencia ahora mismo?</p>
            <p className="mt-2 max-w-xl text-ink-100">
              Fugas activas, cortes de luz o olor a gas: contactanos y priorizamos tu caso.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CallButton variant="onDark" />
            <WhatsAppButton variant="onDark" />
          </div>
        </Container>
      </section>

      <Section title="Preguntas frecuentes" tone="cream">
        <FaqAccordion faqs={homeFaqs} title="" />
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
