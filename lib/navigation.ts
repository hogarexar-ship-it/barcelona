export type Trade = "fontaneria" | "electricidad";

export const consumerRoutes = {
  home: "/",
  request: "/pedir-presupuesto",
  guides: "/guias",
};

export const proRoutes = {
  home: "/profesionales",
  network: "/profesionales/red-de-clientes",
  marketing: "/profesionales/marketing",
  join: "/profesionales/unirse",
  guides: "/profesionales/guias",
};

export function servicePath(trade: Trade): string {
  return trade === "fontaneria" ? "/fontaneros-barcelona" : "/electricistas-barcelona";
}

export function sectorPath(trade: Trade): string {
  return trade === "fontaneria"
    ? "/profesionales/clientes-para-fontaneros"
    : "/profesionales/clientes-para-electricistas";
}

export function isProPath(pathname: string): boolean {
  return pathname === proRoutes.home || pathname.startsWith(`${proRoutes.home}/`);
}

export type NavLink = { href: string; label: string };

export const consumerNav: NavLink[] = [
  { href: servicePath("fontaneria"), label: "Fontaneros" },
  { href: servicePath("electricidad"), label: "Electricistas" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: consumerRoutes.guides, label: "Guías" },
];

export const proNav: NavLink[] = [
  { href: proRoutes.network, label: "Red de clientes" },
  { href: proRoutes.marketing, label: "Marketing" },
  { href: sectorPath("fontaneria"), label: "Fontaneros" },
  { href: sectorPath("electricidad"), label: "Electricistas" },
  { href: proRoutes.guides, label: "Guías" },
];
