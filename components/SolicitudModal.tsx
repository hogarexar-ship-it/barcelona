"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";

/**
 * Contenedor del wizard de solicitud: a pantalla completa en móvil (sin
 * bordes, sin recorte, sin necesidad de hacer scroll de la página para
 * ver los botones) y como tarjeta centrada en pantallas más grandes. El
 * scroll, si hace falta, queda dentro del wizard (ver SolicitudWizard),
 * nunca en la página de fondo.
 */
export function SolicitudModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] sm:flex sm:items-center sm:justify-center sm:p-4">
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 hidden bg-ink-900/60 sm:block"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Solicitud de presupuesto"
        className="relative flex h-[100dvh] w-full flex-col bg-white sm:h-auto sm:max-h-[85vh] sm:max-w-2xl sm:overflow-hidden sm:rounded-xl2 sm:shadow-2xl"
      >
        {children}
      </div>
    </div>
  );
}
