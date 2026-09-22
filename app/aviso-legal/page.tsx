import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description: `Aviso legal de ${siteConfig.brand}.`,
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ name: "Aviso legal", href: "/aviso-legal" }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Aviso legal</h1>

        <div className="mt-8 space-y-6 text-sm text-ink-600">
          <p className="rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-urgent-600">
            Contenido pendiente de revisión legal. Este texto es un modelo general y debe ser
            validado por un asesor legal con los datos reales de la sociedad antes de publicar el
            sitio (razón social, CIF, domicilio social y registro mercantil).
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">1. Datos identificativos</h2>
            <p className="mt-2">
              En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSI-CE), se informa que este sitio web es
              titularidad de {siteConfig.legalName} [PLACEHOLDER: razón social y CIF reales], con
              domicilio en {siteConfig.streetAddress}, {siteConfig.addressLocality}, España, y
              correo electrónico de contacto {siteConfig.email}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">2. Objeto</h2>
            <p className="mt-2">
              {siteConfig.brand} presta servicios a profesionales y empresas de oficios en
              Barcelona: captación y derivación de clientes a cambio de una comisión (red de
              clientes) y servicios de marketing (gestión de perfiles de empresa, publicidad
              online, posicionamiento, marca y redes sociales). Los trabajos derivados los
              ejecutan profesionales independientes, que son responsables de ellos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">3. Condiciones de uso</h2>
            <p className="mt-2">
              El acceso y uso de este sitio web atribuye la condición de usuario y supone la
              aceptación de las condiciones aquí establecidas. El usuario se compromete a hacer un
              uso adecuado de los contenidos y servicios ofrecidos.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">4. Propiedad intelectual</h2>
            <p className="mt-2">
              Los contenidos, textos, imágenes y diseño de este sitio son propiedad de{" "}
              {siteConfig.brand} o de sus licenciantes, quedando prohibida su reproducción sin
              autorización expresa.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
