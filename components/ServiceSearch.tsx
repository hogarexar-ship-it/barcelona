"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services-data";
import { searchIndex } from "@/lib/search-index";

export function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [rubro, setRubro] = useState("todos");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return searchIndex.filter((item) => {
      const matchesRubro = rubro === "todos" || item.serviceSlug === rubro;
      const matchesQuery = normalizedQuery === "" || item.keywords.includes(normalizedQuery);
      return matchesRubro && matchesQuery;
    });
  }, [query, rubro]);

  return (
    <div>
      <div className="sticky top-16 z-20 -mx-4 bg-cream-50/95 px-4 pb-4 pt-2 backdrop-blur sm:mx-0 sm:rounded-xl2 sm:border sm:border-ink-100 sm:p-4">
        <label className="relative block">
          <span className="sr-only">Buscar un servicio</span>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="¿Qué necesitas? Ej: fuga de agua, pintar salón..."
            className="w-full rounded-full border border-ink-100 bg-white py-3.5 pl-12 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-terracotta-400 focus:outline-none focus:ring-1 focus:ring-terracotta-400"
          />
        </label>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <CategoryChip active={rubro === "todos"} onClick={() => setRubro("todos")}>
            Todos
          </CategoryChip>
          {services.map((s) => (
            <CategoryChip key={s.slug} active={rubro === s.slug} onClick={() => setRubro(s.slug)}>
              {s.name}
            </CategoryChip>
          ))}
        </div>
      </div>

      <p className="mt-5 text-sm text-ink-400">
        {results.length} {results.length === 1 ? "resultado" : "resultados"}
      </p>

      {results.length === 0 ? (
        <div className="mt-4 rounded-xl2 border border-dashed border-ink-200 bg-white p-8 text-center">
          <p className="font-semibold text-ink-900">No encontramos ese trabajo en la lista</p>
          <p className="mt-1 text-sm text-ink-600">
            Cuéntanoslo igualmente: nuestro formulario tiene una opción &ldquo;Otro&rdquo; para
            cualquier trabajo que no aparezca aquí.
          </p>
          <Link
            href="/solicitud"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-terracotta-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
          >
            Ir a la solicitud guiada
          </Link>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl2 border border-ink-100 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.label} — ${item.serviceName} en Barcelona`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.emergency && (
                  <span className="absolute left-2 top-2 rounded-full bg-urgent-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
                    Puede ser urgente
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-600">
                  {item.serviceName}
                </span>
                <p className="mt-1 font-semibold text-ink-900">{item.label}</p>
                <div className="mt-4 flex flex-1 items-end gap-2">
                  <Link
                    href={`/solicitud?rubro=${item.serviceSlug}&problema=${item.problemValue}`}
                    className="flex-1 rounded-full bg-terracotta-500 px-4 py-2 text-center text-xs font-semibold text-white transition-transform hover:bg-terracotta-600 active:scale-95"
                  >
                    Pedir presupuesto
                  </Link>
                  <Link
                    href={`/servicios/${item.serviceSlug}`}
                    className="rounded-full border border-ink-100 px-4 py-2 text-center text-xs font-semibold text-ink-700 transition-colors hover:border-terracotta-300 hover:text-terracotta-600"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all active:scale-95 ${
        active
          ? "border-terracotta-500 bg-terracotta-500 text-white"
          : "border-ink-100 bg-white text-ink-600 hover:border-terracotta-300"
      }`}
    >
      {children}
    </button>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
    </svg>
  );
}
