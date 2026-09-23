"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "./CtaButtons";
import { localeFromPath } from "@/lib/i18n";
import { primaryCta, whatsappHref, whatsappMessage } from "@/lib/site-config";

/** Una sola acción fija en móvil. Se oculta en la página del formulario. */
export function MobileCtaBar() {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const cta = primaryCta(locale);
  if (pathname === cta.href) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white px-4 pt-3 md:hidden print:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <Link href={cta.href} className="btn btn-primary flex-1 py-3.5 text-lg">
          {cta.label}
        </Link>
        <a
          href={whatsappHref(whatsappMessage(locale))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={locale === "ca" ? "Escriure per WhatsApp" : "Escribir por WhatsApp"}
          className="btn btn-outline !px-4"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
