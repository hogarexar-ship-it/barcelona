"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Coloca <StickyServiceCta.Sentinel /> justo después del Hero de la
 * página. Cuando ese punto sale de la pantalla (el usuario ya hizo scroll
 * más allá de la cabecera), aparece una barra fija con la llamada a la
 * acción. Solo en `md` y superior: en móvil ya hay barra inferior fija.
 */
export function StickyServiceCta({
  title,
  ctaHref,
  ctaLabel = "Pedir presupuesto",
}: {
  title: string;
  ctaHref: string;
  ctaLabel?: string;
}) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-72px 0px 0px 0px",
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" />
      <div
        className={`fixed inset-x-0 bottom-0 z-30 hidden justify-center transition-transform duration-300 md:flex print:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-4 flex items-center gap-4 rounded-full border border-ink-100 bg-white/95 px-5 py-3 shadow-xl backdrop-blur">
          <span className="text-sm font-semibold text-ink-900">{title}</span>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
