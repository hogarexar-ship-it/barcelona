"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

/**
 * Simulación del buscador de Google: va escribiendo las búsquedas reales que
 * hacen los clientes del oficio. Sin animación si el usuario la ha desactivado.
 */
export function SearchMock({
  searches,
  iconClass = "text-accent-600",
}: {
  searches: { icon: IconName; label: string }[];
  iconClass?: string;
}) {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState(searches[0]?.label ?? "");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || searches.length < 2) return;
    let index = 0;
    let chars = searches[0]?.label.length ?? 0;
    let pause = 30;
    const timer = window.setInterval(() => {
      const query = searches[index]?.label ?? "";
      if (chars < query.length) {
        chars += 1;
        setTyped(query.slice(0, chars));
      } else if (pause > 0) {
        pause -= 1;
      } else {
        index = (index + 1) % searches.length;
        chars = 0;
        pause = 30;
        setActive(index);
        setTyped("");
      }
    }, 60);
    return () => window.clearInterval(timer);
  }, [searches]);

  return (
    <div className="rounded-xl2 border border-ink-200 bg-white">
      <div className="flex items-center gap-3 border-b border-ink-100 px-5 py-4">
        <Icon name="search" className="h-5 w-5 shrink-0 text-ink-400" />
        <p className="min-h-[1.5rem] flex-1 truncate text-base text-ink-900" aria-live="off">
          {typed}
          <span className="ml-0.5 inline-block h-5 w-px translate-y-1 animate-pulse bg-ink-900" aria-hidden="true" />
        </p>
      </div>
      <ul className="py-2">
        {searches.map((search, index) => (
          <li
            key={search.label}
            className={`flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
              index === active ? "bg-ink-50 font-semibold text-ink-900" : "text-ink-600"
            }`}
          >
            <Icon name={search.icon} className={`h-5 w-5 shrink-0 ${iconClass}`} />
            {search.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
