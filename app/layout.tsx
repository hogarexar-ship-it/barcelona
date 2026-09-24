import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand}: ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
  keywords: [
    "marketing digital para fontaneros",
    "marketing para fontaneros",
    "marketing digital para electricistas",
    "marketing para electricistas",
    "clientes para fontaneros Barcelona",
    "clientes para electricistas Barcelona",
    "Google Ads para fontaneros",
    "Google Business Profile electricistas",
    "página web para fontaneros",
    "SEO local Barcelona",
    "GEO posicionamiento en IA",
    siteConfig.brand,
  ],
  authors: [{ name: siteConfig.brand }],
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/logo-icon.png", type: "image/png" }],
    apple: [{ url: "/images/logo-icon.png", type: "image/png" }],
  },
};

/**
 * Layout raíz: solo html, body y lo común. La cabecera y el pie de cada idioma
 * están en app/(es)/layout.tsx (castellano) y app/ca/layout.tsx (catalán).
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
