import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileCtaBar } from "./MobileCtaBar";
import type { Locale } from "@/lib/i18n";

/** Cabecera, contenido, pie y barra móvil de cada idioma. */
export function SiteChrome({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer locale={locale} />
      <MobileCtaBar />
    </>
  );
}
