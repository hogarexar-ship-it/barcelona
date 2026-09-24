import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { routes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Logo({ onDark = false, locale = "es" }: { onDark?: boolean; locale?: Locale }) {
  return (
    <Link
      href={routes[locale].home}
      className="inline-flex items-center gap-2"
      aria-label={`${siteConfig.brand}, ${locale === "ca" ? "anar a l'inici" : "ir al inicio"}`}
    >
      <Image src="/images/logo-icon.png" alt="" width={32} height={32} className="h-8 w-8 shrink-0" priority />
      <span className={`font-display text-2xl font-extrabold tracking-tight ${onDark ? "text-white" : "text-ink-900"}`}>
        oficios
        <span className={onDark ? "text-accent-300" : "text-accent-600"}>pro</span>
      </span>
    </Link>
  );
}
