import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Política de galetes",
  description: `Política de galetes de ${siteConfig.brand}.`,
  path: routes.ca.cookies,
  locale: "ca",
});

export default function PoliticaGaletesPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs locale="ca" items={[{ name: "Política de galetes", href: routes.ca.cookies }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Política de galetes</h1>

        <div className="mt-8 space-y-6 text-sm text-ink-600">
          <p className="rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-urgent-600">
            {`Contingut pendent de revisió legal. Si en el futur s'afegeixen galetes d'analítica o de màrqueting (per exemple, Google Analytics o Meta Pixel), aquest lloc haurà d'incorporar un bàner de consentiment de galetes abans de carregar-les, d'acord amb la normativa espanyola (LSSI-CE) i el RGPD.`}
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">1. Què són les galetes?</h2>
            <p className="mt-2">
              {`Les galetes (cookies) són petits fitxers que s'emmagatzemen al teu navegador quan visites un lloc web i que permeten recordar informació sobre la teva visita.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">2. Galetes utilitzades en aquest lloc</h2>
            <p className="mt-2">
              {`Actualment aquest lloc no utilitza galetes d'analítica ni de publicitat. Només s'hi fan servir, si el navegador ho requereix, galetes tècniques estrictament necessàries per al funcionament bàsic del web.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">3. Com gestionar les galetes</h2>
            <p className="mt-2">
              Pots configurar el teu navegador per acceptar, rebutjar o eliminar les galetes en qualsevol moment des de la seva configuració de privacitat.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">4. Contacte</h2>
            <p className="mt-2">
              Per a qualsevol dubte sobre aquesta política, escriu-nos a {siteConfig.email}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
