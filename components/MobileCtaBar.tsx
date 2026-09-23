"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "./CtaButtons";
import { primaryCta, whatsappHref, whatsappMessage } from "@/lib/site-config";

/** Una sola acción fija en móvil. Se oculta en la página del formulario. */
export function MobileCtaBar() {
  const pathname = usePathname();
  if (pathname === primaryCta.href) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white px-4 pt-3 md:hidden print:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <Link href={primaryCta.href} className="btn btn-primary flex-1 py-3.5 text-lg">
          {primaryCta.label}
        </Link>
        <a
          href={whatsappHref(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="btn btn-outline !px-4"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
