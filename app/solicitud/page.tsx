import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SolicitudWizardEntry } from "@/components/SolicitudWizardEntry";
import { EmergencyBadge } from "@/components/CtaButtons";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Pedir presupuesto",
  description:
    "Cuéntanos en pocos pasos qué necesitas y coordinamos al profesional de nuestra red adecuado: fontanería, electricidad, gas, pintura, carpintería o climatización en Barcelona.",
  path: "/solicitud",
});

export default function SolicitudPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Pedir presupuesto", href: "/solicitud" }]} />
        </Container>
      </div>

      <section className="bg-cream-100 pb-10 pt-6">
        <Container className="max-w-3xl">
          <EmergencyBadge />
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Cuéntanos qué necesitas
          </h1>
          <p className="mt-3 text-lg text-ink-600">
            Responde algunas preguntas rápidas sobre tu problema y tu zona en Barcelona. Con esa
            información coordinamos, dentro de nuestra red de profesionales, a quien mejor se ajusta
            a tu caso: {siteConfig.brand} gestiona el contacto, no eliges tú un perfil.
          </p>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="max-w-3xl">
          <Suspense fallback={<div className="h-[420px] animate-pulse rounded-xl2 bg-cream-100" />}>
            <SolicitudWizardEntry />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
