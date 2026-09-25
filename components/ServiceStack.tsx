import Link from "next/link";
import { Icon } from "./Icon";
import { StackScroll } from "./StackScroll";
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
    <>
      <StackScroll />
      <ol className="relative" data-stack-list>
        {services.map((service, index) => {
          const dark = index === services.length - 1;
          return (
            <li key={service.slug} className="sticky pb-4 last:pb-0" style={{ top: `calc(5.5rem + ${index * 0.9}rem)` }}>
              <article
                className={`relative origin-top overflow-hidden rounded-2xl border p-6 transition-colors [transform:scale(calc(1_-_var(--p,0)*0.05))] sm:p-10 ${
                  dark ? "border-ink-900 bg-ink-900 text-white hover:border-white/30" : "border-ink-200 bg-white text-ink-900 hover:border-ink-900"
                }`}
              >
                {/* Toda la tarjeta lleva al servicio; el desplegable y el enlace de abajo van por encima para seguir funcionando por su cuenta. */}
                <Link href={service.path} className="absolute inset-0 z-[1]">
                  <span className="sr-only">{`${service.title}: ${t("Ver cómo lo hacemos", "Veure com ho fem")}`}</span>
                </Link>

                {/* Se oscurece al quedar tapada por la siguiente */}
                <span className="pointer-events-none absolute inset-0 bg-ink-900 [opacity:calc(var(--p,0)*0.07)]" aria-hidden="true" />
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
                <p className={`mt-3 max-w-xl text-base ${dark ? "text-white/50" : "text-ink-400"}`}>{service.pain}</p>
                {service.whatIs && (
                  <details
                    className={`group/what relative z-[2] mt-6 max-w-xl rounded-md border ${dark ? "border-white/20" : "border-ink-200"}`}
                  >
                    <summary
                      className={`flex cursor-pointer list-none items-center gap-3 px-4 py-3 font-semibold ${
                        dark ? "text-white" : "text-ink-900"
                      }`}
                    >
                      <Icon name="question" className={`h-5 w-5 shrink-0 ${dark ? "text-accent-300" : "text-accent-600"}`} />
                      <span className="flex-1">{service.whatIs.question}</span>
                      <span
                        className={`text-lg leading-none transition-transform group-open/what:rotate-45 ${dark ? "text-white/50" : "text-ink-400"}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className={`px-4 pb-4 text-sm ${dark ? "text-white/70" : "text-ink-600"}`}>{service.whatIs.answer}</p>
                  </details>
                )}
                <Link
                  href={service.path}
                  className="group relative z-[2] mt-8 inline-flex items-center gap-4 font-display text-lg font-bold"
                >
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
    </>
  );
}

/** «El problema de verdad»: título en dos tonos y un párrafo que retrata la situación. */
export function RealProblem({ locale }: { locale: Locale }) {
  const t = translator(locale);
  return (
    <div className="max-w-3xl" data-reveal>
     <h2 className="font-display text-[32px] font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-[44px]">
        {t(
        "Deja de perder tiempo en tareas que nosotros podemos llevar por ti.",
        "Deixa de perdre temps en tasques que nosaltres podem portar per tu.",
        )}
     </h2>
      <p className="mt-6 text-lg font-semibold text-ink-900 sm:text-xl">
        {t(
          "Tú sigue con tu oficio. De tu marketing digital nos encargamos nosotros.",
          "Tu segueix amb el teu ofici. Del teu màrqueting digital ens n'encarreguem nosaltres.",
        )}
      </p>
    </div>
  );
}
