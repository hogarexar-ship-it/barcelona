import { Icon } from "./Icon";
import type { IconName } from "./Icon";

const items: { icon: IconName; title: string; meta: string; tag: string }[] = [
  { icon: "droplet", title: "Cambio de termo eléctrico", meta: "Gràcia · Presupuesto esta semana", tag: "Cliente" },
  { icon: "droplet", title: "Fuga bajo el fregadero", meta: "Eixample · Hoy por la tarde", tag: "Cliente" },
  { icon: "bolt", title: "Cambio de cuadro eléctrico", meta: "Sants · Visita el jueves", tag: "Cliente" },
  { icon: "star", title: "Nueva reseña de 5 estrellas", meta: "Tu ficha de Google", tag: "Marketing" },
];

/** Ilustración del producto (no son datos reales): así llegan los avisos al profesional. */
export function ProLeadsMockup() {
  return (
    <div className="relative mx-auto max-w-sm">
      <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-accent-200/60" aria-hidden="true" />
      <div className="rounded-[2rem] border border-ink-100 bg-white p-4 shadow-2xl shadow-ink-900/10">
        <p className="px-2 pt-1 text-xs font-semibold uppercase tracking-wide text-ink-400">Ejemplo · Tus avisos de hoy</p>
        <ul className="mt-3 space-y-2.5">
          {items.map((item) => (
            <li key={item.title} className="flex items-center gap-3 rounded-2xl bg-surface-50 p-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink-900">{item.title}</span>
                <span className="block truncate text-xs text-ink-400">{item.meta}</span>
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                  item.tag === "Marketing" ? "bg-ink-900 text-white" : "bg-accent-500 text-white"
                }`}
              >
                {item.tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
