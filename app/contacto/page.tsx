import type { Metadata } from "next";
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
    "Contactá a Hogarex Barcelona por WhatsApp, teléfono o formulario. Coordinamos al profesional de nuestra red para tu servicio de fontanería, electricidad o gas.",
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
        title="Contanos qué necesitás"
        subtitle="Escribinos por WhatsApp, llamanos o completá el formulario. Coordinamos al profesional de nuestra red y te confirmamos horario y presupuesto."
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LeadForm />
          </div>

          <aside className="space-y-6">
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
