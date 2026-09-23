import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./Container";
import type { Photo } from "@/lib/photos";

/**
 * Portada con foto a todo lo ancho y texto blanco sobre un velo oscuro. Se usa
 * en la home y en las páginas por oficio para que se distingan del resto.
 */
export function PhotoHero({
  photo,
  title,
  subtitle,
  top,
  children,
}: {
  photo: Photo;
  title: string;
  subtitle: string;
  /** Encima del título: migas de pan o etiqueta del oficio. */
  top?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900">
      <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      {/* Velo negro sobre la foto para que el texto se lea bien */}
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-black/50 via-black/30 to-transparent lg:block" />
      <Container className="py-14 sm:py-20 lg:py-28">
        <div className="max-w-2xl text-white">
          {top}
          <h1 className={`font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${top ? "mt-5" : ""}`}>
            {title}
          </h1>
          <p className="mt-5 text-lg text-white/85 sm:text-xl">{subtitle}</p>
          {children}
        </div>
      </Container>
    </section>
  );
}
