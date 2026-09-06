import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-ink-100 bg-white transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} en Barcelona`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-xl font-bold text-ink-900 group-hover:text-terracotta-600">
          {service.name}
        </p>
        <p className="mt-2 text-sm text-ink-600">{service.heroSubtitle}</p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-terracotta-600">
          Ver servicio y precios
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
