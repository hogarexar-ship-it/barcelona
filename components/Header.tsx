import Link from "next/link";
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-100 bg-cream-50/95 backdrop-blur print:hidden">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-xl font-bold text-ink-900">
          {siteConfig.brand}
          <span className="ml-1 text-sm font-medium text-terracotta-500">Barcelona</span>
        </Link>

        <NavMenu />
      </Container>
    </header>
  );
}
