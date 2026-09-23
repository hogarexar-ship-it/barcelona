import { Container } from "./Container";
import { Icon } from "./Icon";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";

/**
 * «Orgánico y pago»: explica que las estrategias combinan las dos cosas y que
 * el presupuesto de anuncios va aparte de nuestro servicio (se paga
 * directamente a Google y Meta). Se usa en las páginas por oficio y en la de anuncios.
 */
export function OrganicPaid({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = translator(locale);
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container>
        <div className="max-w-3xl" data-reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl">
            {t("Orgánico y pago: trabajamos los dos", "Orgànic i de pagament: treballem tots dos")}
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            {t(
              "Se puede crecer solo con lo orgánico, pero es más lento. Lo ideal es sumar publicidad: es lo que trae llamadas desde el primer mes. Nuestras estrategias combinan las dos cosas.",
              "Es pot créixer només amb l'orgànic, però és més lent. L'ideal és sumar-hi publicitat: és el que porta trucades des del primer mes. Les nostres estratègies combinen totes dues coses.",
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {[
            {
              icon: "search" as const,
              badge: t("Medio plazo", "Mitjà termini"),
              title: t("Orgánico", "Orgànic"),
              text: t(
                "Ficha de Google, reseñas, web y SEO. No pagas por cada clic y el resultado se acumula mes a mes.",
                "Fitxa de Google, ressenyes, web i SEO. No pagues per cada clic i el resultat s'acumula mes a mes.",
              ),
            },
            {
              icon: "megaphone" as const,
              badge: t("Desde ya", "Des d'ara"),
              title: t("Pago", "De pagament"),
              text: t(
                "Anuncios en Google, Facebook e Instagram. Llamadas desde que se activan, solo en tu zona y en tu horario.",
                "Anuncis a Google, Facebook i Instagram. Trucades des que s'activen, només a la teva zona i en el teu horari.",
              ),
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl2 border border-ink-200 bg-white p-6 sm:p-8" data-reveal>
              <div className="flex items-center justify-between gap-4">
                <Icon name={card.icon} className="h-8 w-8 text-accent-600" />
                <span className="rounded-full bg-surface-100 px-3 py-1 text-sm font-semibold text-ink-700">{card.badge}</span>
              </div>
              <p className="mt-4 font-display text-2xl font-bold text-ink-900">{card.title}</p>
              <p className="mt-2 text-ink-600">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-ink-900 p-6 text-white sm:p-10" data-reveal>
          <p className="font-display text-2xl font-bold sm:text-3xl">
            {t("¿Cómo se reparte tu inversión?", "Com es reparteix la teva inversió?")}
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div>
              <p className="flex items-center gap-3 font-semibold text-accent-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 font-display text-white">1</span>
                {t("Nuestro servicio", "El nostre servei")}
              </p>
              <p className="mt-3 text-white/80">
                {t(
                  "Lo que nos pagas a nosotros: la estrategia, la gestión de las campañas, la web, la ficha de Google, el SEO y el CRM.",
                  "El que ens pagues a nosaltres: l'estratègia, la gestió de les campanyes, la web, la fitxa de Google, el SEO i el CRM.",
                )}
              </p>
            </div>
            <div className="hidden w-px bg-white/15 md:block" aria-hidden="true" />
            <div>
              <p className="flex items-center gap-3 font-semibold text-accent-200">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 font-display text-white">2</span>
                {t("Tu presupuesto de anuncios", "El teu pressupost d'anuncis")}
              </p>
              <p className="mt-3 text-white/80">
                {t(
                  "Es aparte de nuestro servicio. Va directo a Google y Meta, se paga desde tu propia cuenta de anuncios y tú decides cuánto invertir. Puedes subirlo, bajarlo o pausarlo cuando quieras.",
                  "És a part del nostre servei. Va directe a Google i Meta, es paga des del teu propi compte d'anuncis i tu decideixes quant invertir. El pots pujar, abaixar o pausar quan vulguis.",
                )}
              </p>
            </div>
          </div>
          <p className="mt-8 flex gap-3 border-t border-white/15 pt-6 font-semibold">
            <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
            {t(
              "En tu cuenta de anuncios ves en todo momento cuánto se ha invertido y qué llamadas ha traído.",
              "Al teu compte d'anuncis veus en tot moment quant s'ha invertit i quines trucades ha portat.",
            )}
          </p>
        </div>
      </Container>
    </section>
  );
}
