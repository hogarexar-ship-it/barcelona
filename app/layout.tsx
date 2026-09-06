import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
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
    default: `${siteConfig.brand} Barcelona — Fontanería, electricidad, gas y más`,
    template: `%s | ${siteConfig.brand} Barcelona`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
  keywords: [
    "fontanero Barcelona",
    "electricista Barcelona",
    "gasista Barcelona",
    "pintor Barcelona",
    "carpintero Barcelona",
    "aire acondicionado Barcelona",
    "urgencias hogar Barcelona",
    "Hogarex",
  ],
  authors: [{ name: siteConfig.brand }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
