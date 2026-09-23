import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckList } from "@/components/CheckList";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";
import { siteConfig, telHref, whatsappHref, whatsappMessage } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Asesoramiento gratuito de marketing para fontaneros y electricistas",
  description:
    "Cuéntanos tu situación y te proponemos, gratis y sin compromiso, la estrategia para conseguir más clientes para tu negocio de fontanería o electricidad en Barcelona.",
  path: routes.contact,
});

export default function AsesoramientoPage() {
  return (
    <section className="bg-surface-100 pb-16 pt-6 sm:pb-24">
      <Container>
        <Breadcrumbs items={[{ name: "Asesoramiento gratuito", href: routes.contact }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">Asesoramiento gratuito</h1>
            <p className="mt-4 text-lg text-ink-600">
              Cuéntanos cómo está tu negocio. Te contactamos por el medio que prefieras y te decimos qué estrategia aplicaríamos
              para conseguirte más clientes.
            </p>
            <div className="mt-8">
              <CheckList
                items={[
                  "Revisamos tu ficha de Google, tu web y tus anuncios.",
                  "Te proponemos por dónde empezar y con qué inversión.",
                  "Sin coste y sin compromiso.",
                ]}
              />
            </div>
            <ul className="mt-10 space-y-3 border-t border-ink-200 pt-6 text-sm text-ink-700">
              <li>
                <a href={telHref()} className="inline-flex items-center gap-2 font-semibold hover:text-accent-700">
                  <Icon name="phone" className="h-5 w-5 text-accent-600" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold hover:text-accent-700"
                >
                  <Icon name="chat" className="h-5 w-5 text-accent-600" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 font-semibold hover:text-accent-700">
                  <Icon name="mail" className="h-5 w-5 text-accent-600" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Icon name="clock" className="h-5 w-5 text-accent-600" />
                {siteConfig.openingHours}
              </li>
            </ul>
          </div>
          <ContactForm idPrefix="asesoramiento" />
        </div>
      </Container>
    </section>
  );
}
