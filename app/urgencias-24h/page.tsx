import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, EmergencyBadge, WhatsAppButton } from "@/components/CtaButtons";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/services-data";

export const metadata: Metadata = buildMetadata({
  title: "Urgencias 24h para el hogar en Barcelona",
  description:
    "Fuga de agua, corte de luz o olor a gas en Barcelona. Contacta con Hogarex y priorizamos la coordinación del profesional de nuestra red para tu urgencia.",
  path: "/urgencias-24h",
});

const urgentSituations = [
  {
    title: "Fuga de agua activa",
    action: "Cierra la llave de paso general y contacta con nosotros de inmediato.",
  },
  {
    title: "Corte de luz total o riesgo eléctrico",
    action: "Si notas olor a quemado, corta el interruptor general y avísanos.",
  },
  {
    title: "Olor a gas",
    action: "Cierra la llave de gas, ventila, no enciendas luces ni llamas, y llámanos ya.",
  },
  {
    title: "Atasco con desborde de agua",
    action: "Contén el agua con toallas o cubos mientras coordinamos al profesional.",
  },
];

export default function UrgenciasPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Urgencias 24h", href: "/urgencias-24h" }]} />
        </Container>
      </div>

      <section className="bg-urgent-500/5 py-16">
        <Container className="max-w-2xl">
          <EmergencyBadge />
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            ¿Tienes una urgencia en tu hogar en Barcelona?
          </h1>
          <p className="mt-4 text-lg text-ink-600">
            Fugas activas, cortes de luz o olor a gas no esperan. Contacta con nosotros ahora y
            priorizamos la coordinación del profesional de nuestra red para tu caso, con un recargo
            sobre la tarifa base que te confirmamos antes de aceptar el aviso.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton />
            <WhatsAppButton message="Hola Hogarex, tengo una urgencia en mi casa en Barcelona." />
          </div>
          <p className="mt-6 text-sm text-ink-600">
            ¿No es tan urgente?{" "}
            <Link href="/solicitud" className="font-semibold text-terracotta-600 hover:underline">
              Completa nuestra solicitud guiada
            </Link>{" "}
            en su lugar.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-900">
            Qué hacer mientras coordinamos al profesional
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {urgentSituations.map((item) => (
              <div key={item.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
                <p className="font-semibold text-ink-900">{item.title}</p>
                <p className="mt-1 text-sm text-ink-600">{item.action}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold text-ink-900">
            Servicios con atención de urgencia
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {services
              .filter((s) => s.emergency)
              .map((service) => (
                <span key={service.slug} className="rounded-full border border-ink-100 bg-white px-4 py-2 text-sm text-ink-700">
                  {service.name}
                </span>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
