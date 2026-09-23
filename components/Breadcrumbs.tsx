import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function Breadcrumbs({ items, onDark = false }: { items: { name: string; href: string }[]; onDark?: boolean }) {
  const full = [{ name: "Inicio", href: "/" }, ...items];

  return (
    <nav aria-label="Ruta de navegación" className={`text-xs ${onDark ? "text-white/60" : "text-ink-400"}`}>
      <JsonLd
        data={breadcrumbSchema(full.map((i) => ({ name: i.name, url: `${siteConfig.url}${i.href}` })))}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {full.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === full.length - 1 ? (
              <span className={`font-medium ${onDark ? "text-white/90" : "text-ink-600"}`}>{item.name}</span>
            ) : (
              <Link href={item.href} className={onDark ? "hover:text-white" : "hover:text-accent-600"}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
