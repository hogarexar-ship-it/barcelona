"use client";

import { useEffect, useState } from "react";

/** Barra fina bajo la cabecera que indica cuánto queda por leer de la guía. */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const target = document.getElementById(targetId);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const value = total > 0 ? -rect.top / total : 1;
      setProgress(Math.min(1, Math.max(0, value)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  return (
    <div className="sticky top-16 z-30 h-1 bg-transparent" aria-hidden="true">
      <div className="h-full origin-left bg-[#CE6A27]" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
