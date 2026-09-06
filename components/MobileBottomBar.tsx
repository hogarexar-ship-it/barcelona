"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { telHref, whatsappHref } from "@/lib/site-config";

type IconComponent = (props: { className?: string }) => JSX.Element;

const tabs: { href: string; label: string; icon: IconComponent }[] = [
  { href: "/", label: "Inicio", icon: HomeIcon },
  { href: "/servicios", label: "Servicios", icon: WrenchIcon },
];

const endTabs: { href: string; label: string; icon: IconComponent; external: boolean }[] = [
  { href: whatsappHref("Hola Hogarex, necesito ayuda con un problema en mi casa en Barcelona."), label: "WhatsApp", icon: ChatIcon, external: true },
  { href: telHref(), label: "Llamar", icon: PhoneIcon, external: true },
];

/**
 * Barra de navegación fija tipo app, solo en móvil. Complementa (no
 * reemplaza) el menú hamburguesa del header, que sigue dando acceso al
 * resto de páginas (zonas, precios, blog, legales, etc.).
 */
export function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación rápida"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 items-end border-t border-ink-100 bg-white/95 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur md:hidden print:hidden"
    >
      {tabs.map((tab) => (
        <TabLink key={tab.href} href={tab.href} label={tab.label} Icon={tab.icon} active={pathname === tab.href} />
      ))}

      <Link
        href="/solicitud"
        className="flex flex-col items-center justify-center gap-1"
        aria-label="Pedir presupuesto"
      >
        <span className="-mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500 text-white shadow-lg shadow-terracotta-500/30">
          <PlusIcon />
        </span>
        <span className={`text-[11px] font-medium ${pathname === "/solicitud" ? "text-terracotta-600" : "text-ink-600"}`}>
          Solicitar
        </span>
      </Link>

      {endTabs.map((tab) => (
        <a
          key={tab.label}
          href={tab.href}
          target={tab.external ? "_blank" : undefined}
          rel={tab.external ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center justify-center gap-1 py-1 text-ink-600"
        >
          <tab.icon className="h-6 w-6" />
          <span className="text-[11px] font-medium">{tab.label}</span>
        </a>
      ))}
    </nav>
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
  Icon: (props: { className?: string }) => JSX.Element;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center gap-1 py-1 ${active ? "text-terracotta-600" : "text-ink-600"}`}
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

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5c0-1.1.9-2 2-2h1.28a1 1 0 0 1 .97.76l.87 3.5a1 1 0 0 1-.29.98l-1.4 1.28a12.5 12.5 0 0 0 6.05 6.05l1.28-1.4a1 1 0 0 1 .98-.29l3.5.87a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-.5C9.4 21 3 14.6 3 6.5v-1Z"
      />
    </svg>
  );
}
