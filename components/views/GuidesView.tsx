import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { CtaBand } from "@/components/CtaBand";
import { GuideCards, GuideFeatured } from "@/components/guides";
import { sortedGuides } from "@/lib/guides-data";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { routes } from "@/lib/navigation";

export function GuidesView({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const [featured, ...rest] = sortedGuides(locale);

  return (
    <>
      <section className="pb-10 pt-6 sm:pb-14">
        <Container>
          <Breadcrumbs locale={locale} items={[{ name: t("Guías", "Guies"), href: routes[locale].guides }]} />
          <div className="mt-8 grid gap-4 border-b border-ink-200 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{t("Guías", "Guies")}</h1>
            <p className="max-w-md text-lg text-ink-600">
              {t(
                "Lo que funciona para conseguir clientes siendo fontanero o electricista en Barcelona. Sin rodeos.",
                "El que funciona per aconseguir clients com a lampista o electricista a Barcelona. Sense embuts.",
              )}
            </p>
          </div>
          {featured && (
            <div className="mt-10" data-reveal>
              <GuideFeatured locale={locale} guide={featured} />
            </div>
          )}
        </Container>
      </section>

      {rest.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink-900">{t("Todas las guías", "Totes les guies")}</h2>
            <div className="mt-8">
              <GuideCards locale={locale} guides={rest} />
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        locale={locale}
        title={t("¿Prefieres que lo hagamos por ti?", "Prefereixes que ho fem per tu?")}
        text={t(
          "Las guías te explican cómo hacerlo. Si no tienes tiempo, en el asesoramiento gratuito te decimos qué haríamos nosotros en tu caso.",
          "Les guies t'expliquen com fer-ho. Si no tens temps, a l'assessorament gratuït et diem què faríem nosaltres en el teu cas.",
        )}
      />
    </>
  );
}
