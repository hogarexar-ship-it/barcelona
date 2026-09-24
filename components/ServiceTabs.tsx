"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

export type ServiceTabItem = { slug: string; path: string; name: string; icon: IconName };

/**
 * Pestañas de servicios de la página de cada servicio. En móvil son un
 * carrusel horizontal sin barra de scroll visible que, al cargar, se coloca
 * de entrada sobre la pestaña activa (así no hay que buscarla arrastrando).
 */
export function ServiceTabs({ items, currentSlug, ariaLabel }: { items: ServiceTabItem[]; currentSlug: string; ariaLabel: string }) {
  const currentRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    currentRef.current?.scrollIntoView({ behavior: "auto", inline: "center", block: "nearest" });
  }, [currentSlug]);

  return (
    <nav aria-label={ariaLabel} className="-mx-4 mt-6 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
      <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {items.map((item) => {
          const current = item.slug === currentSlug;
          return (
            <li key={item.slug}>
              <Link
                ref={current ? currentRef : undefined}
                href={item.path}
                aria-current={current ? "page" : undefined}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors ${
                  current ? "border-ink-900 bg-ink-900 text-white" : "border-ink-200 bg-white text-ink-700 hover:border-ink-900"
                }`}
              >
                <Icon name={item.icon} className={`h-4 w-4 ${current ? "text-accent-300" : "text-accent-600"}`} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
