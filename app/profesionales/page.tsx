import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ProfessionalSignupForm } from "@/components/ProfessionalSignupForm";
import { ProToolIcon } from "@/components/ProToolIcon";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { painPoints, proBenefits, howItWorksForPros, proFaqs, proTools } from "@/lib/professionals-data";

export const metadata: Metadata = buildMetadata({
  title: "Trabaja con Hogarex: únete a nuestra red de profesionales",
  description:
    "¿Eres fontanero, electricista, gasista, pintor, carpintero o técnico de climatización en Barcelona? Únete a la red de Hogarex: nosotros gestionamos clientes, citas, presupuestos y seguimiento para que tú te dediques a trabajar.",
  path: "/profesionales",
});

export default function ProfesionalesPage() {
  return (
    <>
      <JsonLd data={faqSchema(proFaqs)} />

      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Profesionales", href: "/profesionales" }]} />
        </Container>
      </div>

      <section className="bg-ink-900 py-16 text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-terracotta-300">
              Para profesionales del hogar en Barcelona
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Trabaja mejor. Nosotros nos encargamos del resto.
            </h1>
            <p className="mt-5 text-lg text-ink-100">
              Tú haz lo que sabes hacer: fontanería, electricidad, gas, pintura, carpintería o
              climatización. Nosotros gestionamos tus clientes, tus citas, tus presupuestos y el
              seguimiento del trabajo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#unirme"
                className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
              >
                Quiero unirme
              </a>
              <Link
                href="/profesionales/herramientas"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ver herramientas gratuitas
              </Link>
            </div>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-xl2">
            <Image
              src="/images/trust/profesional-trabajando.svg"
              alt="Profesional trabajando mientras recibe un nuevo aviso de trabajo ya gestionado por Hogarex"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            ¿Te suena alguno de estos problemas?
          </h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            La gestión de clientes y el marketing no deberían ser tu segundo trabajo.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div key={point.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
                <p className="font-semibold text-ink-900">{point.title}</p>
                <p className="mt-1 text-sm text-ink-600">{point.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Con Hogarex, tú trabajas. Nosotros gestionamos.
          </h2>
          <p className="mt-2 max-w-2xl text-ink-600">
            Todo lo que rodea a un trabajo (menos hacerlo) se convierte en nuestra responsabilidad.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {proBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
                <CheckBadge />
                <p className="mt-3 font-semibold text-ink-900">{benefit.title}</p>
                <p className="mt-1 text-sm text-ink-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Cómo funciona</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksForPros.map((step, index) => (
              <li key={step.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-4 font-semibold text-ink-900">{step.title}</p>
                <p className="mt-1 text-sm text-ink-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-terracotta-50 py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Herramientas gratuitas para tu día a día
            </h2>
            <p className="mt-2 text-ink-600">
              Las creamos para ayudarte incluso si todavía no trabajas con nosotros. Úsalas todas
              las veces que quieras. Y si en algún momento te cansas de hacerlo tú mismo cada vez,
              ya sabes dónde encontrarnos.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {proTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/profesionales/${tool.slug}`}
                className="group flex flex-col rounded-xl2 border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
              >
                <ProToolIcon icon={tool.icon} />
                <p className="mt-4 font-display text-lg font-bold text-ink-900 group-hover:text-terracotta-600">
                  {tool.name}
                </p>
                <p className="mt-2 text-sm text-ink-600">{tool.shortDescription}</p>
                <span className="mt-4 text-sm font-semibold text-terracotta-600">Usar gratis →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Preguntas frecuentes de profesionales
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={proFaqs} title="" />
          </div>
        </Container>
      </section>

      <section id="unirme" className="bg-cream-100 py-16">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-bold text-ink-900">Únete a la red</h2>
            <p className="mt-3 text-sm text-ink-600">
              Cuéntanos tu oficio, tu zona y tu disponibilidad. Validamos tu perfil y empezamos a
              derivarte trabajos que encajen contigo.
            </p>
            <p className="mt-4 text-sm text-ink-600">
              ¿Tienes dudas antes de unirte? Escríbenos a{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-semibold text-terracotta-600 hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-2">
            <ProfessionalSignupForm />
          </div>
        </Container>
      </section>
    </>
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
