/**
 * Glifos simplificados de plataformas (un solo color, sin degradados) para la
 * franja de confianza. No son el logotipo oficial completo de cada marca:
 * son versiones planas, en línea con el resto de iconos del sitio.
 */

export function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 12.23c0-.8-.07-1.56-.2-2.3H12v4.36h5.4c-.24 1.24-.94 2.3-2 3v2.5h3.24c1.9-1.75 3-4.32 3-7.56z" />
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.4l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.6-4.12H3.05v2.6A10 10 0 0 0 12 22z" />
      <path d="M6.4 13.94a5.99 5.99 0 0 1 0-3.88v-2.6H3.05a10 10 0 0 0 0 9.08l3.35-2.6z" />
      <path d="M12 6.06c1.47 0 2.8.5 3.83 1.5l2.87-2.87C16.95 2.98 14.7 2 12 2 8.13 2 4.78 4.2 3.05 7.46l3.35 2.6c.8-2.37 3-4 5.6-4z" />
    </svg>
  );
}

export function MetaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.4 4C3.6 4 2 7 2 11.2c0 3.6 1.5 8.8 3.9 8.8 1.5 0 2.5-1 3.9-3.4.7-1.2 1.4-2.6 1.9-3.7.5 1.1 1.2 2.5 1.9 3.7 1.4 2.4 2.4 3.4 3.9 3.4 2.4 0 3.9-5.2 3.9-8.8C21.4 7 19.8 4 17 4c-1.7 0-3 1.1-4.3 3.1L12 8.1l-.7-1C10 5.1 8.7 4 7 4zm.1 2.2c.9 0 1.7.8 3 2.9-1.1 1.9-2.1 4.3-3 4.3-.9 0-1.7-2.4-1.7-4.3 0-1.9.6-2.9 1.7-2.9zm10.8 0c1.1 0 1.7 1 1.7 2.9 0 1.9-.8 4.3-1.7 4.3-.9 0-1.9-2.4-3-4.3 1.3-2.1 2.1-2.9 3-2.9z" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.2 4.31 15.2 4.22 14 4.22c-2.4 0-4 1.46-4 4.16V10.5H7.5v3H10V21h3.5z" />
    </svg>
  );
}
