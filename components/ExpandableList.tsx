import { Icon } from "./Icon";
import type { IconName } from "./Icon";

/**
 * Lista corta de puntos con icono y título; el detalle solo aparece si el
 * usuario lo abre. Usa <details> para que el texto siga en el HTML (SEO).
 */
export function ExpandableList({
  items,
  iconClass = "text-accent-600",
}: {
  items: { icon: IconName; title: string; text: string }[];
  iconClass?: string;
}) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title}>
          <details className="group rounded-md border border-ink-200 bg-white open:border-ink-900">
            <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3.5 font-semibold text-ink-900">
              <Icon name={item.icon} className={`h-6 w-6 shrink-0 ${iconClass}`} />
              <span className="flex-1">{item.title}</span>
              <span className="text-lg leading-none text-ink-400 transition-transform group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="px-4 pb-4 pl-[3.25rem] text-sm text-ink-600">{item.text}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}
