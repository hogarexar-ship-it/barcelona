export type Trade = "fontaneria" | "electricidad";

export const routes = {
  home: "/",
  services: "/servicios",
  guides: "/guias",
  contact: "/asesoramiento-gratuito",
};

export function servicePath(slug: string): string {
  return `${routes.services}/${slug}`;
}

export function sectorPath(trade: Trade): string {
  return trade === "fontaneria" ? "/marketing-para-fontaneros" : "/marketing-para-electricistas";
}

export type NavLink = { href: string; label: string };

export const mainNav: NavLink[] = [
  { href: routes.services, label: "Servicios" },
  { href: sectorPath("fontaneria"), label: "Fontaneros" },
  { href: sectorPath("electricidad"), label: "Electricistas" },
  { href: routes.guides, label: "Guías" },
];
