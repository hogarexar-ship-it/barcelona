/**
 * Iconos de plataformas con sus colores oficiales, para la franja de
 * confianza (components/PlatformsTrust.tsx). A diferencia del resto de
 * iconos del sitio (un solo color, heredado con currentColor), estos llevan
 * su color de marca fijo: son logotipos reconocibles, no iconos del sistema.
 */

export function GoogleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.8-.07-1.56-.2-2.3H12v4.36h5.4c-.24 1.24-.94 2.3-2 3v2.5h3.24c1.9-1.75 3-4.32 3-7.56z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.6-4.12H3.05v2.6A10 10 0 0 0 12 22z" />
      <path fill="#FBBC05" d="M6.4 13.94a5.99 5.99 0 0 1 0-3.88v-2.6H3.05a10 10 0 0 0 0 9.08l3.35-2.6z" />
      <path fill="#EA4335" d="M12 6.06c1.47 0 2.8.5 3.83 1.5l2.87-2.87C16.95 2.98 14.7 2 12 2 8.13 2 4.78 4.2 3.05 7.46l3.35 2.6c.8-2.37 3-4 5.6-4z" />
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
