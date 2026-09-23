import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacitat",
  description: `Política de privacitat de ${siteConfig.brand}, d'acord amb el RGPD.`,
  path: routes.ca.privacy,
  locale: "ca",
});

export default function PoliticaPrivacitatPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs locale="ca" items={[{ name: "Política de privacitat", href: routes.ca.privacy }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Política de privacitat</h1>

        <div className="mt-8 space-y-6 text-sm text-ink-600">
          <p className="rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-urgent-600">
            {`Contingut pendent de revisió legal. Aquest text és un model general de política de privacitat d'acord amb el RGPD i s'ha de validar amb un assessor legal abans de publicar el lloc, inclòs el registre d'activitats de tractament real.`}
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">1. Responsable del tractament</h2>
            <p className="mt-2">
              {`${siteConfig.legalName} [PLACEHOLDER: raó social i NIF reals], amb domicili a ${siteConfig.streetAddress}, ${siteConfig.addressLocality}, és responsable del tractament de les dades personals facilitades a través d'aquest lloc web.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">2. Dades que recollim</h2>
            <p className="mt-2">
              {`Les que ens facilites al formulari d'assessorament o per WhatsApp, telèfon o correu: nom, nom del teu negoci (si l'indiques), ofici, si treballes com a autònom o empresa, municipi, telèfon o correu electrònic segons el mitjà de contacte que triïs, els serveis que t'interessen i el que ens expliquis de la teva situació.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">3. Finalitat</h2>
            <p className="mt-2">
              Fem servir les teves dades per contactar-te pel mitjà que hagis triat, preparar el teu assessorament gratuït i, si arribem a un acord, prestar-te el servei contractat.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">4. Base legal</h2>
            <p className="mt-2">
              {`La base legal per al tractament és l'execució de les gestions precontractuals sol·licitades per l'usuari en contactar-nos.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">5. Cessió de dades</h2>
            <p className="mt-2">
              No venem les teves dades. Només les compartim amb proveïdors necessaris per prestar el servei (per exemple, eines de comunicació o de gestió de contactes) i quan ho exigeixi la llei.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">6. Drets</h2>
            <p className="mt-2">
              {`Pots exercir els teus drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a ${siteConfig.email}.`}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
