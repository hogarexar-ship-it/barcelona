"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { SolicitudWizard } from "./SolicitudWizard";
import { SolicitudModal } from "./SolicitudModal";
import { useLanguage } from "@/lib/i18n/context";

/**
 * Lee ?rubro=<slug>&problema=<valor> de la URL (por ejemplo, enlazado desde
 * una página de servicio o desde el buscador de servicios) para
 * preseleccionar rubro y problema, y abrir el wizard directamente en un
 * modal a pantalla completa. Aislado en su propio componente porque
 * useSearchParams exige un límite <Suspense> alrededor.
 */
export function SolicitudWizardEntry() {
  const searchParams = useSearchParams();
  const rubro = searchParams.get("rubro") ?? undefined;
  const problema = searchParams.get("problema") ?? undefined;
  const { t } = useLanguage();

  const [open, setOpen] = useState(() => !!rubro);

  return (
    <>
      {!open && (
        <div className="grid gap-8 rounded-xl2 border border-ink-100 bg-white p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <ol className="space-y-3">
              {t.wizard.entry.steps.map((label, index) => (
                <li key={label} className="flex items-start gap-3 text-sm text-ink-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta-500/10 text-xs font-bold text-terracotta-600">
                    {index + 1}
                  </span>
                  {label}
                </li>
              ))}
            </ol>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-terracotta-500/30 transition-transform hover:bg-terracotta-600 active:scale-95"
            >
              {t.wizard.entry.cta}
            </button>
            <p className="mt-3 text-xs text-ink-400">{t.wizard.entry.ctaHint}</p>
          </div>

          <div className="relative hidden aspect-square w-full overflow-hidden rounded-xl2 lg:block">
            <Image
              src="/images/hero/hero-hogar.svg"
              alt="Ilustración de una vivienda en Barcelona con herramientas de fontanería, electricidad, pintura y carpintería"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <SolicitudModal open={open} onClose={() => setOpen(false)}>
        <SolicitudWizard initialServiceSlug={rubro} initialProblemValue={problema} onClose={() => setOpen(false)} />
      </SolicitudModal>
    </>
  );
}
