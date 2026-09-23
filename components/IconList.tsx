import { Icon } from "./Icon";
import type { IconName } from "./Icon";

/** Lista en rejilla en la que el icono dice de qué se habla antes que el texto. */
export function IconList({ items, columns = 2 }: { items: { icon: IconName; label: string }[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3 rounded-xl bg-surface-50 p-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
            <Icon name={item.icon} className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold text-ink-800">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
