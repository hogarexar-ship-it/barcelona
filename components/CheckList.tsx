import { Icon } from "./Icon";

export function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              onDark ? "bg-terracotta-500 text-white" : "bg-terracotta-100 text-terracotta-600"
            }`}
          >
            <Icon name="check" className="h-3.5 w-3.5" />
          </span>
          <span className={onDark ? "text-cream-100" : "text-ink-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
