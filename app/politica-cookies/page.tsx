import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies",
  description: `Política de cookies de ${siteConfig.brand} Barcelona.`,
  path: "/politica-cookies",
});

export default function PoliticaCookiesPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ name: "Política de cookies", href: "/politica-cookies" }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Política de cookies</h1>

        <div className="prose-hogarex mt-8 space-y-6 text-sm text-ink-600">
          <p className="rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-urgent-600">
            Contenido pendiente de revisión legal. Si en el futuro se añaden cookies de analítica o
            marketing (por ejemplo, Google Analytics o Meta Pixel), este sitio deberá incorporar un
            banner de consentimiento de cookies antes de cargarlas, conforme a la normativa española
            (LSSI-CE) y al RGPD.
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">1. ¿Qué son las cookies?</h2>
            <p className="mt-2">
              Las cookies son pequeños archivos que se almacenan en tu navegador al visitar un
              sitio web y que permiten recordar información sobre tu visita.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">2. Cookies utilizadas en este sitio</h2>
            <p className="mt-2">
              Actualmente este sitio no utiliza cookies de analítica ni de publicidad. Solo se
              emplean, si el navegador lo requiere, cookies técnicas estrictamente necesarias para
              el funcionamiento básico de la web.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">3. Cómo gestionar las cookies</h2>
            <p className="mt-2">
              Podés configurar tu navegador para aceptar, rechazar o eliminar las cookies en
              cualquier momento desde su configuración de privacidad.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">4. Contacto</h2>
            <p className="mt-2">
              Ante cualquier duda sobre esta política, escríbenos a {siteConfig.email}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
