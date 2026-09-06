import Link from "next/link";
import { Container } from "@/components/Container";
import { CallButton, WhatsAppButton } from "@/components/CtaButtons";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="font-display text-6xl font-bold text-terracotta-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink-900">
          No encontramos esta página
        </h1>
        <p className="mt-3 text-ink-600">
          Puede que el enlace esté roto o la página se haya movido. Vuelve al inicio o contacta con nosotros
          directamente si necesitas un servicio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-ink-900 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900 hover:text-white"
          >
            Volver al inicio
          </Link>
          <WhatsAppButton />
          <CallButton />
        </div>
      </Container>
    </section>
  );
}
