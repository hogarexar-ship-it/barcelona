import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { Container } from "@/components/Container";
import { ProLeadForm } from "@/components/ProLeadForm";
import { buildMetadata } from "@/lib/metadata";
import { commercialTerms, defaultWhatsappMessage, siteConfig, telHref, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Empieza a conseguir más clientes",
  description: `Cuéntanos sobre tu negocio de reformas, fontanería o electricidad en Barcelona y te llamamos para ver cómo conseguirte más clientes. ${commercialTerms.network.signupFee}, sin compromiso.`,
  path: "/empezar",
});

const nextSteps = [
  "Te llamamos en horario laboral para conocer tu negocio.",
  "Te proponemos red de clientes, marketing o las dos cosas.",
  "Te explicamos condiciones y costes antes de empezar.",
];

export default function EmpezarPage() {
  return (
    <section className="bg-cream-100 pb-16 pt-6 sm:pb-24">
      <Container>
        <Breadcrumbs items={[{ name: "Empezar", href: "/empezar" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
              Cuéntanos sobre tu negocio
            </h1>
            <p className="mt-4 text-lg text-ink-600">
              Un minuto y listo. Sin compromiso: primero hablamos y luego decides.
            </p>
            <div className="mt-8">
              <CheckList items={nextSteps} />
            </div>
            <div className="mt-10 rounded-xl2 border border-ink-100 bg-white p-6 text-sm text-ink-600">
              <p className="font-semibold text-ink-900">¿Prefieres otro canal?</p>
              <ul className="mt-3 space-y-2">
                <li>
                  WhatsApp:{" "}
                  <a
                    href={whatsappHref(defaultWhatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-terracotta-600 underline underline-offset-4"
                  >
                    escríbenos
                  </a>
                </li>
                <li>
                  Teléfono:{" "}
                  <a href={telHref()} className="font-semibold text-terracotta-600 underline underline-offset-4">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="font-semibold text-terracotta-600 underline underline-offset-4">
                    {siteConfig.email}
                  </a>
                </li>
                <li>Horario: {siteConfig.openingHours}</li>
              </ul>
            </div>
          </div>
          <ProLeadForm idPrefix="empezar" />
        </div>
      </Container>
    </section>
  );
}
