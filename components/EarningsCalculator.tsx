"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";

/**
 * «Haz la cuenta»: cuánto más ganaría el profesional con unos pocos trabajos
 * extra al mes. Es un ejemplo orientativo con sus propios números.
 */
export function EarningsCalculator({ locale, defaultTicket, contactHref }: { locale: Locale; defaultTicket: number; contactHref: string }) {
  const t = translator(locale);
  const [jobs, setJobs] = useState(4);
  const [ticket, setTicket] = useState(defaultTicket);
  const money = (value: number) =>
    new Intl.NumberFormat(locale === "ca" ? "ca-ES" : "es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
  const monthly = jobs * ticket;

  return (
    <div className="grid overflow-hidden rounded-2xl border border-ink-200 bg-white lg:grid-cols-2">
      <div className="space-y-8 p-6 sm:p-10">
        <div>
          <label htmlFor="calc-jobs" className="flex items-baseline justify-between gap-4 font-semibold text-ink-900">
            {t("Trabajos extra al mes", "Feines extra al mes")}
            <span className="font-display text-2xl font-extrabold tabular-nums">{jobs}</span>
          </label>
          <input
            id="calc-jobs"
            type="range"
            min={1}
            max={20}
            value={jobs}
            onChange={(e) => setJobs(Number(e.target.value))}
            className="mt-3 w-full accent-[#CE6A27]"
          />
          <p className="mt-1 text-sm text-ink-400">{t("Uno a la semana ya son 4 al mes.", "Una a la setmana ja són 4 al mes.")}</p>
        </div>
        <div>
          <label htmlFor="calc-ticket" className="flex items-baseline justify-between gap-4 font-semibold text-ink-900">
            {t("Lo que cobras de media por trabajo", "El que cobres de mitjana per feina")}
            <span className="font-display text-2xl font-extrabold tabular-nums">{money(ticket)}</span>
          </label>
          <input
            id="calc-ticket"
            type="range"
            min={50}
            max={1500}
            step={10}
            value={ticket}
            onChange={(e) => setTicket(Number(e.target.value))}
            className="mt-3 w-full accent-[#CE6A27]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center bg-ink-900 p-6 text-white sm:p-10" aria-live="polite">
        <p className="text-white/70">{t("Serían", "Serien")}</p>
        <p className="mt-1 font-display text-5xl font-extrabold tabular-nums tracking-tight sm:text-6xl">{money(monthly)}</p>
        <p className="mt-1 text-white/70">{t("más al mes", "més al mes")}</p>
        <p className="mt-6 flex items-center gap-2 text-lg font-semibold">
          <Icon name="trendingUp" className="h-6 w-6 text-accent-300" />
          {t(`${money(monthly * 12)} más al año`, `${money(monthly * 12)} més a l'any`)}
        </p>
        <Link href={contactHref} className="btn btn-primary mt-8 self-start">
          {t("Quiero calcularlo con mis números", "Vull calcular-ho amb els meus números")}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
        <p className="mt-4 text-xs text-white/50">
          {t(
            "Ejemplo orientativo, no es una promesa de resultados. En el asesoramiento lo calculamos con tu zona, tus servicios y tu capacidad.",
            "Exemple orientatiu, no és una promesa de resultats. A l'assessorament ho calculem amb la teva zona, els teus serveis i la teva capacitat.",
          )}
        </p>
      </div>
    </div>
  );
}
