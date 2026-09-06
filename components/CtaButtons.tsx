import { siteConfig, telHref, whatsappHref } from "@/lib/site-config";

type Variant = "primary" | "onDark" | "compact";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function WhatsAppButton({
  message = "Hola Hogarex, necesito ayuda con un problema en mi casa en Barcelona.",
  variant = "primary",
  className = "",
  label = "Escribir por WhatsApp",
}: {
  message?: string;
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const styles: Record<Variant, string> = {
    primary: "bg-terracotta-500 text-white hover:bg-terracotta-600",
    onDark: "bg-white text-ink-900 hover:bg-cream-100",
    compact: "bg-terracotta-500 text-white hover:bg-terracotta-600 px-4 py-2 text-xs",
  };

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function CallButton({
  variant = "primary",
  className = "",
  label,
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  const styles: Record<Variant, string> = {
    primary: "bg-ink-900 text-white hover:bg-ink-800",
    onDark: "border border-white/70 text-white hover:bg-white/10",
    compact: "bg-ink-900 text-white hover:bg-ink-800 px-4 py-2 text-xs",
  };

  return (
    <a href={telHref()} className={`${base} ${styles[variant]} ${className}`}>
      <PhoneIcon />
      {label ?? `Llamar · ${siteConfig.phoneDisplay}`}
    </a>
  );
}

export function EmergencyBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-urgent-500/10 px-3 py-1 text-xs font-semibold text-urgent-600">
      <span className="h-1.5 w-1.5 rounded-full bg-urgent-500" />
      Urgencias 24h
    </span>
  );
}

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink-100 bg-white/95 p-3 backdrop-blur sm:hidden">
      <CallButton variant="primary" className="flex-1" label="Llamar" />
      <WhatsAppButton variant="primary" className="flex-1" label="WhatsApp" />
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.23 8.24a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.26-8.24Zm-4.7 4.4c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.68 4.19 3.66 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.24-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.44-.06-.12-.56-1.37-.78-1.87-.2-.5-.41-.43-.56-.44Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5.5c0-1.1.9-2 2-2h1.28a1 1 0 0 1 .97.76l.87 3.5a1 1 0 0 1-.29.98l-1.4 1.28a12.5 12.5 0 0 0 6.05 6.05l1.28-1.4a1 1 0 0 1 .98-.29l3.5.87a1 1 0 0 1 .76.97V19a2 2 0 0 1-2 2h-.5C9.4 21 3 14.6 3 6.5v-1Z"
      />
    </svg>
  );
}
