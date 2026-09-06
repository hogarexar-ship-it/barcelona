import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta con Hogarex Barcelona por WhatsApp, teléfono o formulario. Coordinamos al profesional de nuestra red para tu servicio de fontanería, electricidad, gas, pintura, carpintería o climatización.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Contacto", href: "/contacto" }]} />
        </Container>
      </div>
      <Hero
        eyebrow="Contacto"
        title="Cuéntanos qué necesitas"
        subtitle="Escríbenos por WhatsApp, llámanos o completa el formulario. Coordinamos al profesional de nuestra red y te confirmamos horario y presupuesto."
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LeadForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-6">
              <p className="font-semibold text-ink-900">¿Prefieres un formulario guiado?</p>
              <p className="mt-2 text-sm text-ink-600">
                Nuestra solicitud paso a paso te hace las preguntas justas para encontrar al
                profesional más adecuado según tu problema.
              </p>
              <Link
                href="/solicitud"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-terracotta-600"
              >
                Ir a la solicitud guiada
              </Link>
            </div>

            <div className="rounded-xl2 border border-ink-100 bg-white p-6">
              <p className="font-semibold text-ink-900">Contacto directo</p>
              <div className="mt-4 flex flex-col gap-3">
                <CallButton className="justify-center" />
                <WhatsAppButton className="justify-center" />
              </div>
            </div>

            <div className="rounded-xl2 border border-ink-100 bg-cream-100 p-6 text-sm text-ink-600">
              <p className="font-semibold text-ink-900">Horario de atención</p>
              <p className="mt-2">{siteConfig.openingHours}</p>
              <p className="mt-4 font-semibold text-ink-900">Email</p>
              <p className="mt-2">
                <a href={`mailto:${siteConfig.email}`} className="text-terracotta-600 hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
