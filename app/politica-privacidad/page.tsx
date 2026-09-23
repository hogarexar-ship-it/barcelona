import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.brand}, conforme al RGPD.`,
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ name: "Política de privacidad", href: "/politica-privacidad" }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Política de privacidad</h1>

        <div className="mt-8 space-y-6 text-sm text-ink-600">
          <p className="rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-urgent-600">
            Contenido pendiente de revisión legal. Este texto es un modelo general de política de
            privacidad conforme al RGPD y debe validarse con un asesor legal antes de publicar el
            sitio, incluyendo el registro de actividades de tratamiento real.
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">1. Responsable del tratamiento</h2>
            <p className="mt-2">
              {siteConfig.legalName} [PLACEHOLDER: razón social y CIF reales], con domicilio en{" "}
              {siteConfig.streetAddress}, {siteConfig.addressLocality}, es responsable del
              tratamiento de los datos personales facilitados a través de este sitio web.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">2. Datos que recopilamos</h2>
            <p className="mt-2">
              Si pides un presupuesto: nombre, teléfono, barrio o municipio y la descripción del
              problema. Si eres profesional: nombre, teléfono, correo electrónico (si se facilita),
              nombre de tu empresa, oficio, zonas de trabajo y el servicio que te interesa. Los
              recogemos a través de los formularios y de las conversaciones por WhatsApp,
              teléfono o email.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">3. Finalidad</h2>
            <p className="mt-2">
              Si pides un presupuesto, usamos tus datos para gestionar tu solicitud y ponerte en
              contacto con el profesional adecuado. Si eres profesional, para contactarte,
              gestionar tu alta en la red o preparar tu propuesta de marketing y, si llegamos a
              un acuerdo, prestarte el servicio contratado.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">4. Base legal</h2>
            <p className="mt-2">
              La base legal para el tratamiento es la ejecución de las gestiones precontractuales
              solicitadas por el usuario al contactarnos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">5. Cesión de datos</h2>
            <p className="mt-2">
              No vendemos tus datos. Si pides un presupuesto, compartimos con el profesional de la
              red asignado lo necesario para que pueda atenderte (nombre, teléfono, zona y
              descripción del problema). Además, solo los compartimos con proveedores necesarios
              para prestar el servicio (por ejemplo, herramientas de comunicación) y cuando lo
              exija la ley.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">6. Derechos</h2>
            <p className="mt-2">
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación
              y portabilidad escribiendo a {siteConfig.email}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
