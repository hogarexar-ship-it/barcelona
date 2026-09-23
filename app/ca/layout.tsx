import type { Metadata } from "next";
import type { ReactNode } from "react";
import { HtmlLang } from "@/components/HtmlLang";
import { SiteChrome } from "@/components/SiteChrome";
import { htmlLang } from "@/lib/i18n";
import { siteConfig, siteText } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand}: ${siteText.ca.tagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteText.ca.description,
};

export default function CatalanLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HtmlLang lang={htmlLang.ca} />
      <SiteChrome locale="ca">{children}</SiteChrome>
    </>
  );
}
