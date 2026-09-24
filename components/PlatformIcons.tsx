/**
 * Iconos de plataformas con sus colores oficiales, para la franja de
 * confianza (components/PlatformsTrust.tsx). A diferencia del resto de
 * iconos del sitio (un solo color, heredado con currentColor), estos llevan
 * su color de marca fijo: son logotipos reconocibles, no iconos del sistema.
 */

/** El icono real de Google Ads (la «A» de dos barras y el punto verde), no la «G» de Google. */
export function GoogleAdsIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect fill="#FBBC04" x="9" y="1" width="6" height="20" rx="3" transform="rotate(22 12 4)" />
      <rect fill="#4285F4" x="9" y="1" width="6" height="22" rx="3" transform="rotate(-22 12 4)" />
      <circle fill="#34A853" cx="5.6" cy="19.8" r="3.6" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#EA4335" className={className} aria-hidden="true">
      <path d="M12 21.5s-7.5-6.6-7.5-11.7a7.5 7.5 0 1 1 15 0c0 5.1-7.5 11.7-7.5 11.7zm0-8.7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
  );
}

export function MetaIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#0081FB" className={className} aria-hidden="true">
      <path d="M6.4 4C3.6 4 2 7 2 11.2c0 3.6 1.5 8.8 3.9 8.8 1.5 0 2.5-1 3.9-3.4.7-1.2 1.4-2.6 1.9-3.7.5 1.1 1.2 2.5 1.9 3.7 1.4 2.4 2.4 3.4 3.9 3.4 2.4 0 3.9-5.2 3.9-8.8C21.4 7 19.8 4 17 4c-1.7 0-3 1.1-4.3 3.1L12 8.1l-.7-1C10 5.1 8.7 4 7 4zm.1 2.2c.9 0 1.7.8 3 2.9-1.1 1.9-2.1 4.3-3 4.3-.9 0-1.7-2.4-1.7-4.3 0-1.9.6-2.9 1.7-2.9zm10.8 0c1.1 0 1.7 1 1.7 2.9 0 1.9-.8 4.3-1.7 4.3-.9 0-1.9-2.4-3-4.3 1.3-2.1 2.1-2.9 3-2.9z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#1877F2" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.2 4.31 15.2 4.22 14 4.22c-2.4 0-4 1.46-4 4.16V10.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect fill="#FF0000" x="2" y="5" width="20" height="14" rx="4" />
      <path fill="#fff" d="M10 8.5v7l6-3.5z" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-6 w-6" }: { className?: string }) {
  const d = "M14.7 3c.4 1.9 1.7 3.2 3.6 3.5v2.9a6.6 6.6 0 0 1-3.6-1.1v6.1a5.3 5.3 0 1 1-4.6-5.3v2.9a2.4 2.4 0 1 0 1.7 2.3V3h2.9z";
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#25F4EE" d={d} transform="translate(-0.6,0.6)" />
      <path fill="#FE2C55" d={d} transform="translate(0.6,-0.6)" />
      <path fill="#111" d={d} />
    </svg>
  );
}
