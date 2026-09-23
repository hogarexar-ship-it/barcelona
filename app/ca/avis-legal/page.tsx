import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Avís legal",
  description: `Avís legal de ${siteConfig.brand}.`,
  path: routes.ca.legal,
  locale: "ca",
});

export default function AvisLegalPage() {
  return (
    <section className="py-16">
      <Container className="max-w-2xl">
        <Breadcrumbs locale="ca" items={[{ name: "Avís legal", href: routes.ca.legal }]} />
        <h1 className="mt-6 font-display text-3xl font-bold text-ink-900">Avís legal</h1>

        <div className="mt-8 space-y-6 text-sm text-ink-600">
          <p className="rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-urgent-600">
            {`Contingut pendent de revisió legal. Aquest text és un model general i l'ha de validar un assessor legal amb les dades reals de la societat abans de publicar el lloc (raó social, NIF, domicili social i registre mercantil).`}
          </p>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">1. Dades identificatives</h2>
            <p className="mt-2">
              {`En compliment de l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa que aquest lloc web és titularitat de ${siteConfig.legalName} [PLACEHOLDER: raó social i NIF reals], amb domicili a ${siteConfig.streetAddress}, ${siteConfig.addressLocality}, Espanya, i correu electrònic de contacte ${siteConfig.email}.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">2. Objecte</h2>
            <p className="mt-2">
              {`${siteConfig.brand} presta serveis de màrqueting digital a professionals i empreses de lampisteria i electricitat de Barcelona i rodalies: publicitat en línia, landing pages i pàgines web, gestió de perfils d'empresa a Google, posicionament en cercadors i, de manera complementària, vídeo, disseny gràfic i xarxes socials.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">{"3. Condicions d'ús"}</h2>
            <p className="mt-2">
              {`L'accés i l'ús d'aquest lloc web atribueix la condició d'usuari i suposa l'acceptació de les condicions aquí establertes. L'usuari es compromet a fer un ús adequat dels continguts i serveis oferts.`}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-ink-900">4. Propietat intel·lectual</h2>
            <p className="mt-2">
              {`Els continguts, textos, imatges i disseny d'aquest lloc són propietat de ${siteConfig.brand} o dels seus llicenciataris, i en queda prohibida la reproducció sense autorització expressa.`}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
