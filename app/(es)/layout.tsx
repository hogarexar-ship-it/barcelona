import type { ReactNode } from "react";
import { SiteChrome } from "@/components/SiteChrome";

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <SiteChrome locale="es">{children}</SiteChrome>;
}
