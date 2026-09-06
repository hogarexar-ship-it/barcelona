"use client";

import { useState } from "react";
import { whatsappHref } from "@/lib/site-config";

/**
 * Botón flotante solo para pantallas medianas o más (`md:flex`): en móvil
 * la acción de WhatsApp ya vive en la barra inferior tipo app
 * (MobileBottomBar), así que aquí no se duplica.
 */
export function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={whatsappHref("Hola Hogarex, necesito ayuda con un problema en mi casa en Barcelona.")}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-terracotta-500 py-3.5 pl-3.5 pr-3.5 text-white shadow-xl shadow-terracotta-500/40 transition-all duration-300 hover:pr-5 md:flex print:hidden"
      aria-label="Escribir por WhatsApp"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-terracotta-500/60" />
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 ${
          hovered ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        Escríbenos ahora
      </span>
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.23 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.26-8.24Zm-4.7 4.4c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.68 4.19 3.66 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.24-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.44-.06-.12-.56-1.37-.78-1.87-.2-.5-.41-.43-.56-.44Z" />
    </svg>
  );
}
