import type { Faq } from "@/lib/types";

/**
 * Usa <details>/<summary> nativos a propósito: el contenido de las
 * respuestas queda en el HTML servido (visible para buscadores y motores
 * generativos) sin depender de JavaScript para desplegarse.
 */
export function FaqAccordion({ faqs, title = "Preguntas frecuentes" }: { faqs: Faq[]; title?: string }) {
  return (
    <div>
      {title && (
        <h2 className="font-display text-2xl font-bold text-ink-900">{title}</h2>
      )}
      <div className="mt-6 divide-y divide-ink-100 rounded-xl2 border border-ink-100 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-5 open:bg-surface-50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink-900">
              {faq.question}
              <span className="shrink-0 text-accent-500 transition-transform group-open:rotate-45">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
