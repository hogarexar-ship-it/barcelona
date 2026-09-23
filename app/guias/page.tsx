import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { GuideCards, GuideFeatured } from "@/components/guides";
import { sortedGuides } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Guías para conseguir más clientes siendo fontanero o electricista",
  description:
    "Guías prácticas para fontaneros y electricistas de Barcelona: cómo conseguir clientes, Google Business Profile, Google Ads, reseñas y posicionamiento en asistentes de IA.",
  path: routes.guides,
});

export default function GuiasPage() {
  const [featured, ...rest] = sortedGuides();

  return (
    <>
      <section className="pb-10 pt-6 sm:pb-14">
        <Container>
          <Breadcrumbs items={[{ name: "Guías", href: routes.guides }]} />
          <div className="mt-8 grid gap-4 border-b border-ink-200 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">Guías</h1>
            <p className="max-w-md text-lg text-ink-600">
              Lo que funciona para conseguir clientes siendo fontanero o electricista en Barcelona. Sin rodeos.
            </p>
          </div>
          {featured && (
            <div className="mt-10" data-reveal>
              <GuideFeatured guide={featured} />
            </div>
          )}
        </Container>
      </section>

      {rest.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink-900">Todas las guías</h2>
            <div className="mt-8">
              <GuideCards guides={rest} />
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title="¿Prefieres que lo hagamos por ti?"
        text="Las guías te explican cómo hacerlo. Si no tienes tiempo, en el asesoramiento gratuito te decimos qué haríamos nosotros en tu caso."
      />
    </>
  );
}
