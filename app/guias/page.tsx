import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { GuideCards } from "@/components/guides";
import { guidesFor } from "@/lib/guides-data";
import { buildMetadata } from "@/lib/metadata";
import { consumerRoutes } from "@/lib/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Guías de fontanería y electricidad para tu casa",
  description:
    "Qué hacer ante una fuga, por qué salta el diferencial, qué es el boletín eléctrico y cómo elegir un profesional de confianza en Barcelona.",
  path: consumerRoutes.guides,
});

export default function GuiasPage() {
  return (
    <>
      <div className="bg-surface-100 pt-6">
        <Container>
          <Breadcrumbs items={[{ name: "Guías", href: consumerRoutes.guides }]} />
        </Container>
      </div>
      <PageHero
        title="Guías de fontanería y electricidad para tu casa"
        subtitle="Consejos prácticos de fontanería y electricidad para tu casa en Barcelona, y cuándo conviene llamar a un profesional."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <GuideCards guides={guidesFor("consumer")} />
        </Container>
      </section>
    </>
  );
}
