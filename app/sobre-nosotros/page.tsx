import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Sobre nosotros",
  description:
    "Hogarex gestiona servicios de fontanería, electricidad y gas en Barcelona. Conocé cómo trabajamos y por qué no somos un marketplace de profesionales.",
  path: "/sobre-nosotros",
});

export default function SobreNosotrosPage() {
  return (
    <>
      <div className="bg-cream-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Sobre nosotros", href: "/sobre-nosotros" }]} />
        </Container>
      </div>
      <Hero
        eyebrow="Sobre nosotros"
        title="Una gestión directa, no un directorio de profesionales"
        subtitle={`${siteConfig.brand} nació en Argentina (${siteConfig.foundingArgentina}) conectando personas con expertos del hogar. En Barcelona operamos distinto: gestionamos nosotros el contacto de punta a punta.`}
        showEmergencyBadge={false}
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Cómo trabajamos en Barcelona</h2>
            <p className="mt-4 text-ink-600">
              A diferencia de un marketplace donde el cliente busca, compara y elige un perfil, en
              Hogarex Barcelona el contacto es directo con nuestro equipo. Vos nos contás qué
              necesitás —una fuga, un corte de luz, una revisión de gas— y nosotros coordinamos
              internamente, dentro de nuestra red de profesionales, a quien va a resolver el
              trabajo.
            </p>
            <p className="mt-4 text-ink-600">
              No hay perfiles públicos para comparar ni sistema de búsqueda para el usuario final.
              Nuestro equipo asigna el trabajo según la zona, la urgencia y el tipo de servicio, y
              hace seguimiento hasta que queda resuelto.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Por qué elegir Hogarex</h2>
            <ul className="mt-4 space-y-4">
              {[
                {
                  title: "Una sola llamada",
                  description: "No tenés que buscar, comparar ni contactar a varios profesionales por tu cuenta.",
                },
                {
                  title: "Presupuesto confirmado antes de empezar",
                  description: "Siempre te decimos el precio estimado antes de que el profesional se presente.",
                },
                {
                  title: "Red de profesionales del hogar",
                  description: "Coordinamos fontaneros, electricistas e instaladores de gas para Barcelona.",
                },
                {
                  title: "Respaldo de una marca",
                  description: `${siteConfig.brand} hace seguimiento del trabajo, no solo publica un contacto.`,
                },
              ].map((item) => (
                <li key={item.title} className="rounded-xl2 border border-ink-100 bg-white p-5">
                  <p className="font-semibold text-ink-900">{item.title}</p>
                  <p className="mt-1 text-sm text-ink-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
