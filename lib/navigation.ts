export type SectorSlug = "reformas" | "fontaneros" | "electricistas";

export function sectorPath(slug: SectorSlug): string {
  return `/clientes-para-${slug}`;
}

export const sectorLinks: { slug: SectorSlug; label: string; href: string }[] = [
  { slug: "reformas", label: "Reformas", href: sectorPath("reformas") },
  { slug: "fontaneros", label: "Fontaneros", href: sectorPath("fontaneros") },
  { slug: "electricistas", label: "Electricistas", href: sectorPath("electricistas") },
];

export const serviceLinks = [
  { href: "/conseguir-clientes", label: "Red de clientes" },
  { href: "/marketing-para-profesionales", label: "Marketing" },
];

export const guidesLink = { href: "/blog", label: "Guías" };
