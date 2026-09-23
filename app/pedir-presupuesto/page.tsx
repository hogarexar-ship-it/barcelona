import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { ConsumerRequestForm } from "@/components/ConsumerRequestForm";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/metadata";
import { consumerRoutes } from "@/lib/navigation";
import { consumerWhatsappMessage, siteConfig, telHref, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Pedir presupuesto a un fontanero o electricista en Barcelona",
  description:
    "Cuéntanos qué pasa y te ponemos en contacto con un fontanero o electricista verificado de tu zona de Barcelona. Gratis y sin compromiso.",
  path: consumerRoutes.request,
});

export default function PedirPresupuestoPage() {
  return (
    <section className="bg-surface-100 pb-16 pt-6 sm:pb-24">
      <Container>
        <Breadcrumbs items={[{ name: "Pedir presupuesto", href: consumerRoutes.request }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">Cuéntanos qué pasa</h1>
            <p className="mt-4 text-lg text-ink-600">
              Te ponemos en contacto con un profesional verificado de tu zona.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "Pedir presupuesto es gratis y sin compromiso.",
                  "Solo pagas al profesional si aceptas su presupuesto.",
                  "Profesionales verificados: alta, seguro y experiencia.",
                ]}
              />
            </div>
            <div className="mt-10 rounded-xl2 border border-ink-100 bg-white p-6 text-sm text-ink-600">
              <p className="font-semibold text-ink-900">¿Prefieres hablar con alguien?</p>
              <ul className="mt-3 space-y-2">
                <li>
                  Teléfono:{" "}
                  <a href={telHref()} className="font-semibold text-accent-600 underline underline-offset-4">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    href={whatsappHref(consumerWhatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent-600 underline underline-offset-4"
                  >
                    escríbenos
                  </a>
                </li>
                <li>Horario: {siteConfig.openingHours}</li>
              </ul>
            </div>
          </div>
          <ConsumerRequestForm idPrefix="presupuesto" />
        </div>
      </Container>
    </section>
  );
}
