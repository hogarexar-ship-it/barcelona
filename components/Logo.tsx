import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-baseline gap-0.5" aria-label={`${siteConfig.brand}, ir al inicio`}>
      <span className={`font-display text-2xl font-extrabold tracking-tight ${onDark ? "text-white" : "text-ink-900"}`}>
        {siteConfig.brand.toLowerCase()}
      </span>
      <span className="h-2 w-2 rounded-full bg-terracotta-500" aria-hidden="true" />
    </Link>
  );
}
