import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TemplateList } from "@/components/TemplateList";
import { buildMetadata } from "@/lib/metadata";
import { messageTemplates } from "@/lib/professionals-data";

export const metadata: Metadata = buildMetadata({
  title: "Plantillas de WhatsApp gratis para profesionales del hogar",
  description:
    "Mensajes ya redactados para confirmar citas, enviar presupuestos, pedir reseñas y recordar pagos a tus clientes. Cópialos y pégalos en WhatsApp, gratis.",
  path: "/profesionales/plantillas-whatsapp",
});

export default function PlantillasWhatsAppPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { name: "Profesionales", href: "/profesionales" },
              { name: "Plantillas de WhatsApp", href: "/profesionales/plantillas-whatsapp" },
            ]}
          />
        </Container>
      </div>

      <section className="bg-cream-100 pb-10 pt-4">
        <Container className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-500/10 px-3 py-1 text-xs font-semibold text-terracotta-600">
            Herramienta gratuita para profesionales
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Plantillas de WhatsApp para tus clientes
          </h1>
          <p className="mt-3 text-lg text-ink-600">
            Mensajes ya redactados para los momentos habituales con un cliente: confirmar una
            cita, enviar un presupuesto, pedir una reseña o recordar un cobro. Copia, pega y
            adapta los datos entre corchetes.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-4xl">
          <TemplateList templates={messageTemplates} />
        </Container>
      </section>

      <section className="bg-ink-900 py-16 text-white">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-2xl font-bold">¿Y si no tuvieras que escribir estos mensajes?</p>
            <p className="mt-2 max-w-xl text-ink-100">
              En Hogarex nos encargamos de la comunicación con el cliente: confirmaciones,
              seguimiento y recordatorios incluidos.
            </p>
          </div>
          <Link
            href="/profesionales#unirme"
            className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
          >
            Quiero unirme
          </Link>
        </Container>
      </section>
    </>
  );
}
