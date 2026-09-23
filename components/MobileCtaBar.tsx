"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "./CtaButtons";
import { isProPath } from "@/lib/navigation";
import { consumerCta, consumerWhatsappMessage, proCta, proWhatsappMessage, whatsappHref } from "@/lib/site-config";

/** Una sola acción fija en móvil, según la zona. Se oculta en las páginas de formulario. */
export function MobileCtaBar() {
  const pathname = usePathname();
  const pro = isProPath(pathname);
  const cta = pro ? proCta : consumerCta;
  if (pathname === cta.href) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t px-4 pt-3 backdrop-blur md:hidden print:hidden ${
        pro ? "theme-pro border-white/10 bg-ink-900/95" : "border-ink-100 bg-white/95"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <Link href={cta.href} className="btn btn-primary flex-1">
          {cta.label}
        </Link>
        <a
          href={whatsappHref(pro ? proWhatsappMessage : consumerWhatsappMessage)}
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
