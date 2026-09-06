import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Sobre nosotros",
  description:
    "Hogarex gestiona servicios de fontanería, electricidad, gas, pintura, carpintería y climatización en Barcelona. Conoce cómo trabajamos y por qué no somos un marketplace de profesionales.",
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
        subtitle={`${siteConfig.brand} nació en Argentina (${siteConfig.foundingArgentina}) conectando personas con expertos del hogar. En Barcelona operamos de forma distinta: gestionamos nosotros el contacto de principio a fin.`}
        showEmergencyBadge={false}
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Cómo trabajamos en Barcelona</h2>
            <p className="mt-4 text-ink-600">
              A diferencia de un marketplace donde el cliente busca, compara y elige un perfil, en
              Hogarex Barcelona el contacto es directo con nuestro equipo. Tú nos cuentas qué
              necesitas —una fuga, un corte de luz, una revisión de gas, una habitación por pintar—
              y nosotros coordinamos internamente, dentro de nuestra red de profesionales, a quien
              va a resolver el trabajo.
            </p>
            <p className="mt-4 text-ink-600">
              No hay perfiles públicos para comparar ni sistema de búsqueda para el usuario final.
              Nuestro equipo asigna el trabajo según la zona, la urgencia y el tipo de servicio, y
              hace seguimiento hasta que queda resuelto.
            </p>
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl2 border border-ink-100">
              <Image
                src="/images/trust/equipo-hogarex.svg"
                alt="Equipo de coordinación de Hogarex atendiendo solicitudes de clientes en Barcelona"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900">Por qué elegir Hogarex</h2>
            <ul className="mt-4 space-y-4">
              {[
                {
                  title: "Una sola llamada",
                  description: "No tienes que buscar, comparar ni contactar a varios profesionales por tu cuenta.",
                },
                {
                  title: "Presupuesto confirmado antes de empezar",
                  description: "Siempre te decimos el precio estimado antes de que el profesional se presente.",
                },
                {
                  title: "Red de profesionales del hogar",
                  description:
                    "Coordinamos fontaneros, electricistas, gasistas, pintores, carpinteros y técnicos de climatización en Barcelona.",
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
