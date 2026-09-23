import { CheckList } from "./CheckList";
import { Container } from "./Container";
import { ProLeadForm } from "./ProLeadForm";
import type { Interest, ProTrade } from "@/lib/offers";
import { siteConfig, telHref } from "@/lib/site-config";

const nextSteps = [
  "Te llamamos en horario laboral para conocer tu negocio.",
  "Te explicamos condiciones y costes, sin compromiso.",
  "Si encajamos, te damos de alta en la red o arrancamos el plan de marketing.",
];

export function ProSignupSection({
  title = "Cuéntanos sobre tu negocio",
  subtitle = "Déjanos tus datos y te llamamos para ver cómo conseguirte más clientes en Barcelona.",
  defaultInterest,
  defaultTrade,
}: {
  title?: string;
  subtitle?: string;
  defaultInterest?: Interest;
  defaultTrade?: ProTrade;
}) {
  return (
    <section id="empezar" className="scroll-mt-28 bg-ink-900 py-16 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-100">{subtitle}</p>
          <div className="mt-8">
            <CheckList items={nextSteps} onDark />
          </div>
          <p className="mt-8 text-sm text-ink-100">
            ¿Prefieres llamar?{" "}
            <a href={telHref()} className="font-semibold text-white underline underline-offset-4">
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
        <ProLeadForm defaultInterest={defaultInterest} defaultTrade={defaultTrade} idPrefix="signup" />
      </Container>
    </section>
  );
}
