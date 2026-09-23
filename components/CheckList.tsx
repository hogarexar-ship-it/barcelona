import { Icon } from "./Icon";

export function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              onDark ? "bg-accent-500 text-white" : "bg-accent-100 text-accent-600"
            }`}
          >
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          <span className={onDark ? "text-surface-100" : "text-ink-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
