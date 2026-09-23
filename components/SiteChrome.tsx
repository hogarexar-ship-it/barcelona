import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileCtaBar } from "./MobileCtaBar";
import type { Locale } from "@/lib/i18n";
import { getMarketingServices } from "@/lib/marketing-services";

/** Cabecera, contenido, pie y barra móvil de cada idioma. */
export function SiteChrome({ locale, children }: { locale: Locale; children: ReactNode }) {
  // Solo lo que necesita el menú móvil, para no mandar todos los textos al navegador.
  const menuServices = getMarketingServices(locale).map((s) => ({ href: s.path, label: s.tag, icon: s.icon }));
  return (
    <>
      <Header menuServices={menuServices} />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer locale={locale} />
      <MobileCtaBar />
    </>
  );
}
