import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { routes } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Logo({ onDark = false, locale = "es" }: { onDark?: boolean; locale?: Locale }) {
  return (
    <Link
      href={routes[locale].home}
      className="inline-flex items-baseline gap-0.5"
      aria-label={`${siteConfig.brand}, ${locale === "ca" ? "anar a l'inici" : "ir al inicio"}`}
    >
      <span className={`font-display text-2xl font-extrabold tracking-tight ${onDark ? "text-white" : "text-ink-900"}`}>
        oficio
        <span className={onDark ? "text-accent-300" : "text-accent-600"}>pro</span>
      </span>
      <span className="h-2 w-2 rounded-full bg-terracotta-500" aria-hidden="true" />
    </Link>
  );
}
