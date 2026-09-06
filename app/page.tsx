import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
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
  title: `${siteConfig.brand} Barcelona — Fontanería, electricidad, gas y más sin complicaciones`,
  description: siteConfig.description,
  path: "/",
});

const homeFaqs = [
  {
    question: "¿Hogarex es un marketplace donde elijo el profesional?",
    answer:
      "No. En Hogarex Barcelona nos contactas directamente a nosotros, nos cuentas el problema, y nuestro equipo coordina internamente al profesional de nuestra red que va a resolverlo. No hay perfiles públicos para comparar ni sistema de búsqueda: la gestión es directa con nosotros de principio a fin.",
  },
  {
    question: "¿Qué servicios gestiona Hogarex en Barcelona?",
    answer:
      "Gestionamos servicios de fontanería, electricidad, gas, pintura, carpintería y aire acondicionado/calefacción para hogares en Barcelona ciudad: desde averías urgentes hasta instalaciones, revisiones y reformas puntuales.",
  },
  {
    question: "¿Cómo pido un servicio?",
    answer:
      "Con el formulario de solicitud, por WhatsApp o por teléfono. Cuéntanos qué necesitas y en qué zona estás, y coordinamos al profesional de nuestra red adecuado, confirmándote horario y presupuesto antes de la visita.",
  },
  {
    question: "¿Tenéis atención de urgencias 24 horas?",
    answer:
      "Sí, para averías urgentes de fontanería, electricidad, gas o climatización ofrecemos coordinación de atención fuera del horario habitual, con un recargo que te informamos antes de confirmar.",
  },
];

// Fotos ilustrativas de trabajos gestionados por Hogarex. PLACEHOLDER: sustituir
// por fotografías reales de trabajos terminados en cuanto estén disponibles.
const featuredWork = [
  { image: "/images/work/1-fontaneria-eixample.svg", title: "Reparación de fuga", zone: "Eixample", rubro: "fontaneria" },
  { image: "/images/work/2-electricidad-gracia.svg", title: "Cambio de cuadro eléctrico", zone: "Gràcia", rubro: "electricidad" },
  { image: "/images/work/3-gas-sant-marti.svg", title: "Instalación de caldera", zone: "Sant Martí", rubro: "gas" },
  { image: "/images/work/4-pintura-sants.svg", title: "Pintura de salón", zone: "Sants-Montjuïc", rubro: "pintura" },
  { image: "/images/work/5-carpinteria-ciutat-vella.svg", title: "Armario a medida", zone: "Ciutat Vella", rubro: "carpinteria" },
  { image: "/images/work/6-climatizacion-sarria.svg", title: "Instalación de aire acondicionado", zone: "Sarrià-Sant Gervasi", rubro: "climatizacion" },
];

// PLACEHOLDER: opiniones de ejemplo. Sustituir por reseñas reales de clientes
// (por ejemplo, importadas de Google Business Profile) antes de publicar.
const testimonials = [
  {
    name: "Marta G.",
    zone: "Eixample",
    text: "Llamé por una fuga un domingo y en menos de dos horas ya tenía al fontanero en casa. Todo coordinado por WhatsApp, sin complicaciones.",
  },
  {
    name: "Jordi P.",
    zone: "Gràcia",
    text: "Pedí presupuesto para pintar el piso entero y me lo confirmaron antes de empezar. El precio final fue el mismo que el presupuesto.",
  },
  {
    name: "Laia S.",
    zone: "Sant Martí",
    text: "Se encargaron de todo: desde la primera llamada hasta el boletín eléctrico final. No tuve que buscar a nadie por mi cuenta.",
  },
];

const quickProblems = [
  { label: "Fuga de agua", rubro: "fontaneria", problema: "fuga-agua" },
  { label: "Corte de luz", rubro: "electricidad", problema: "corte-luz" },
  { label: "Huelo a gas", rubro: "gas", problema: "olor-gas" },
  { label: "Pintar una habitación", rubro: "pintura", problema: "habitacion" },
  { label: "Mueble a medida", rubro: "carpinteria", problema: "mueble-medida" },
  { label: "Aire acondicionado averiado", rubro: "climatizacion", problema: "averia" },
];

const trustPoints = [
  { title: "Presupuesto antes de empezar", description: "Confirmamos el precio estimado antes de que el profesional se presente." },
  { title: "Profesionales de nuestra red", description: "Coordinamos siempre con profesionales habituales, no con anuncios sueltos." },
  { title: "Seguimiento del trabajo", description: "Hacemos seguimiento hasta que el trabajo queda resuelto a tu satisfacción." },
  { title: "Atención en toda Barcelona", description: "Cobertura en los principales distritos de la ciudad." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero
        eyebrow="Hogarex en Barcelona"
        title={siteConfig.tagline}
        subtitle="Gestionamos fontanería, electricidad, gas, pintura, carpintería y climatización para tu hogar en Barcelona. Nos contactas a nosotros, nosotros coordinamos al profesional de nuestra red y hacemos seguimiento hasta que el trabajo está resuelto."
        image="/images/hero/hero-hogar.svg"
        imageAlt="Ilustración de una vivienda en Barcelona con herramientas de fontanería, electricidad, pintura y carpintería"
      >
        <div className="mt-8">
          <p className="text-sm font-semibold text-ink-900">¿Cuál es tu problema? Elige uno:</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {quickProblems.map((item) => (
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
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </Hero>

      <Section title="Cómo funciona" subtitle="Una gestión directa, no un directorio de anuncios">
        <ol className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Nos cuentas el problema",
              description: "Con el formulario de solicitud, por WhatsApp o por teléfono: qué pasa y en qué zona de Barcelona estás.",
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
        <div className="mt-8">
          <Link
            href="/solicitud"
            className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-600"
          >
            Empezar mi solicitud
          </Link>
        </div>
      </Section>

      <Section
        title="Servicios que gestionamos en Barcelona"
        subtitle="Fontanería, electricidad, gas, pintura, carpintería y climatización, con seguimiento de nuestro equipo de principio a fin"
        tone="cream"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section
        title="Trabajos gestionados en Barcelona"
        subtitle="Una muestra de los tipos de trabajo que coordinamos cada semana en la ciudad"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((work) => (
            <Link
              key={work.image}
              href={`/solicitud?rubro=${work.rubro}`}
              className="group overflow-hidden rounded-xl2 border border-ink-100 bg-white transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={work.image}
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
          ))}
        </div>
      </Section>

      <Section title="Zonas de Barcelona donde operamos" subtitle="Cobertura en toda la ciudad" tone="cream">
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
            Ver cobertura completa por barrio →
          </Link>
        </p>
      </Section>

      <Section title="Por qué confiar en Hogarex">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
              <CheckBadge />
              <p className="mt-3 font-semibold text-ink-900">{point.title}</p>
              <p className="mt-1 text-sm text-ink-600">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Lo que dicen quienes ya nos contactaron" tone="cream">
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial) => (
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
            <p className="font-display text-2xl font-bold">¿Tienes una urgencia ahora mismo?</p>
            <p className="mt-2 max-w-xl text-ink-100">
              Fugas activas, cortes de luz u olor a gas: contacta con nosotros y priorizamos tu caso.
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
