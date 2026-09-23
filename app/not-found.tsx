import Link from "next/link";
import { Container } from "@/components/Container";
import { PrimaryCta } from "@/components/CtaButtons";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="font-display text-6xl font-bold text-accent-500">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink-900">No encontramos esta página</h1>
        <p className="mt-3 text-ink-600">
          Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio o cuéntanos directamente sobre
          tu negocio.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-outline">
            Volver al inicio
          </Link>
          <PrimaryCta />
        </div>
      </Container>
    </section>
  );
}
