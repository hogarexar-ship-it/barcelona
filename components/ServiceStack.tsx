import Link from "next/link";
import { Icon } from "./Icon";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { getMarketingServices } from "@/lib/marketing-services";

/**
 * Servicios en tarjetas que se apilan al hacer scroll (position: sticky, sin JS):
 * cada tarjeta se queda arriba y la siguiente pasa por encima dejando ver el borde
 * de las anteriores. La última (CRM) va en oscuro para cerrar la pila.
 */
export function ServiceStack({ locale }: { locale: Locale }) {
  const t = translator(locale);
  const services = getMarketingServices(locale);

  return (
    <ol className="relative">
      {services.map((service, index) => {
        const dark = index === services.length - 1;
        return (
          <li
            key={service.slug}
            className="sticky pb-4 last:pb-0"
            style={{ top: `calc(5.5rem + ${index * 0.9}rem)` }}
          >
            <article
              className={`rounded-2xl border p-6 sm:p-10 ${
                dark ? "border-ink-900 bg-ink-900 text-white" : "border-ink-200 bg-white text-ink-900"
              }`}
            >
              <p className="flex items-center gap-4">
                <span className={`font-display text-lg font-bold tabular-nums ${dark ? "text-white/50" : "text-ink-400"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold ${
                    dark ? "border-white/20 bg-white/10 text-white" : "border-ink-200 bg-surface-100 text-ink-700"
                  }`}
                >
                  <Icon name={service.icon} className={`h-4 w-4 ${dark ? "text-accent-300" : "text-accent-600"}`} />
                  {service.tag}
                </span>
              </p>
              <h3 className="mt-6 max-w-2xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
                {service.title}
              </h3>
              <p className={`mt-3 text-sm font-semibold ${dark ? "text-accent-200" : "text-accent-700"}`}>{service.keywords}</p>
              <p className={`mt-4 max-w-xl text-lg ${dark ? "text-white/75" : "text-ink-600"}`}>{service.short}</p>
              <Link href={service.path} className="group mt-8 inline-flex items-center gap-4 font-display text-lg font-bold">
                {t("Ver cómo lo hacemos", "Veure com ho fem")}
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                    dark
                      ? "border-white group-hover:bg-white group-hover:text-ink-900"
                      : "border-ink-900 group-hover:bg-ink-900 group-hover:text-white"
                  }`}
                >
                  <Icon name="arrowRight" className="h-5 w-5" />
                </span>
              </Link>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

/** «El problema de verdad»: título en dos tonos y un párrafo que retrata la situación. */
export function RealProblem({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <div className="max-w-3xl" data-reveal>
      <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
        {t("No te falta oficio.", "No et falta ofici.")}{" "}
        <span className="text-ink-400">
          {t("Te falta un solo equipo que lleve tu marketing digital.", "Et falta un sol equip que porti el teu màrqueting digital.")}
        </span>
      </h2>
      <p className="mt-6 text-lg text-ink-700 sm:text-xl">
        {t(
          "Un conocido te hizo la web. Otro te llevó los anuncios unos meses. A la ficha de Google ya no sabe entrar nadie. Cada cosa va por su lado y el teléfono sigue sin sonar como debería.",
          "Un conegut et va fer la web. Un altre et va portar els anuncis uns mesos. A la fitxa de Google ja no sap entrar ningú. Cada cosa va per la seva banda i el telèfon continua sense sonar com hauria de sonar.",
        )}
      </p>
      <p className="mt-4 text-lg font-semibold text-ink-900 sm:text-xl">
        {t(
          "Nosotros lo llevamos todo junto, para que tú vuelvas a lo tuyo.",
          "Nosaltres ho portem tot junt, perquè tu tornis al que és teu.",
        )}
      </p>
    </div>
  );
}
