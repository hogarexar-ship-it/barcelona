import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description: `Política de privacidad de ${siteConfig.brand} Barcelona, conforme al RGPD.`,
  path: "/politica-privacidad",
});

export default function PoliticaPrivacidadPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ name: "Política de privacidad", href: "/politica-privacidad" }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Política de privacidad</h1>

        <div className="prose-hogarex mt-8 space-y-6 text-sm text-ink-600">
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
              A través del formulario de contacto y las conversaciones por WhatsApp o teléfono
              recopilamos: nombre, teléfono, correo electrónico (si se facilita), zona de Barcelona
              y descripción del servicio solicitado.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">3. Finalidad</h2>
            <p className="mt-2">
              Utilizamos estos datos exclusivamente para gestionar tu solicitud de servicio,
              coordinar con el profesional de nuestra red correspondiente y contactarte para
              confirmar horario y presupuesto.
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
              Compartimos los datos estrictamente necesarios (nombre, teléfono, dirección y detalle
              del trabajo) con el profesional de nuestra red asignado a tu solicitud, con el único
              fin de que pueda realizar el servicio.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">6. Derechos</h2>
            <p className="mt-2">
              Podés ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación
              y portabilidad escribiendo a {siteConfig.email}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
