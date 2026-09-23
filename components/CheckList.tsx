import { Icon } from "./Icon";

export function CheckList({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${onDark ? "text-accent-300" : "text-accent-600"}`} />
          <span className={onDark ? "text-ink-100" : "text-ink-700"}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
