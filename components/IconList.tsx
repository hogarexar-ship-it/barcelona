import { Icon } from "./Icon";
import type { IconName } from "./Icon";

export function IconList({ items }: { items: { icon: IconName; label: string }[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-3">
          <Icon name={item.icon} className="h-6 w-6 shrink-0 text-accent-600" />
          <span className="font-medium text-ink-800">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
