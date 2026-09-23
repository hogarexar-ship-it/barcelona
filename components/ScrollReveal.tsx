"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activa las animaciones de aparición de los elementos con `data-reveal`.
 * Sin JavaScript (o con "reducir movimiento") el contenido se ve normal:
 * solo se ocultan los elementos que todavía están fuera de pantalla.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );

    for (const el of Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) continue;
      el.classList.add("reveal-pending");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
