"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavDrawer } from "./NavDrawer";
import { useLanguage } from "@/lib/i18n/context";
import { whatsappHref } from "@/lib/site-config";

type IconComponent = (props: { className?: string }) => JSX.Element;

/**
 * Barra de navegación fija tipo app, solo en móvil (por debajo de `md`).
 * Es la ÚNICA navegación visible en ese rango: el botón "Más" abre el
 * mismo panel (NavDrawer) que en tablet/escritorio abre la hamburguesa del
 * header, así nunca hay dos navegaciones activas a la vez.
 *
 * El botón central "Solicitar" se posiciona de forma absoluta (no con
 * márgenes negativos dentro del grid) para que quede perfectamente
 * centrado y no rompa la alineación del resto de los íconos.
 */
export function MobileBottomBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const tabs: { href: string; label: string; icon: IconComponent }[] = [
    { href: "/", label: t.bottomBar.inicio, icon: HomeIcon },
    { href: "/servicios", label: t.bottomBar.servicios, icon: WrenchIcon },
  ];

  const whatsappHrefValue = whatsappHref("Hola Hogarex, necesito ayuda con un problema en mi casa en Barcelona.");

  return (
    <>
      <nav
        aria-label={t.bottomBar.mas}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 backdrop-blur md:hidden print:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="relative mx-auto grid h-16 max-w-md grid-cols-5">
          <TabLink href={tabs[0].href} label={tabs[0].label} Icon={tabs[0].icon} active={pathname === tabs[0].href} />
          <TabLink href={tabs[1].href} label={tabs[1].label} Icon={tabs[1].icon} active={pathname === tabs[1].href} />

          {/* Columna central vacía: el botón "Solicitar" flota encima, posicionado absoluto. */}
          <div aria-hidden="true" />

          <a
            href={whatsappHrefValue}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-ink-600"
          >
            <ChatIcon className="h-6 w-6" />
            <span className="text-[11px] font-medium">{t.bottomBar.whatsapp}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col items-center justify-center gap-1 text-ink-600"
            aria-label={t.nav.abrirMenu}
            aria-expanded={menuOpen}
          >
            <MoreIcon className="h-6 w-6" />
            <span className="text-[11px] font-medium">{t.bottomBar.mas}</span>
          </button>

          <Link
            href="/solicitud"
            aria-label={t.wizard.entry.cta}
            className="absolute inset-x-0 -top-5 flex flex-col items-center gap-0.5"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500 text-white shadow-lg shadow-terracotta-500/30 ring-4 ring-white">
              <PlusIcon />
            </span>
            <span className={`text-[11px] font-medium ${pathname === "/solicitud" ? "text-terracotta-600" : "text-ink-700"}`}>
              {t.bottomBar.solicitar}
            </span>
          </Link>
        </div>
      </nav>

      <NavDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function TabLink({
  href,
  label,
  Icon,
  active,
}: {
  href: string;
  label: string;
  Icon: IconComponent;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-1 ${active ? "text-terracotta-600" : "text-ink-600"}`}
    >
      <Icon className="h-6 w-6" />
      <span className="text-[11px] font-medium">{label}</span>
    </Link>
  );
}

function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-8 9 8M5 10v10h14V10" />
    </svg>
  );
}

function WrenchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.4 2.4-2-2z"
      />
    </svg>
  );
}

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={`h-6 w-6 ${className}`} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.23 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.26-8.24Z" />
    </svg>
  );
}

function MoreIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
