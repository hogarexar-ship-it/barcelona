"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { isTrade, RequestWizard } from "./RequestWizard";
import { consumerRoutes } from "@/lib/navigation";
import type { Trade } from "@/lib/navigation";

type Opened = { trade?: Trade; problem?: string; key: number };

function paramsFrom(search: string, key: number): Opened {
  const params = new URLSearchParams(search);
  const trade = params.get("servicio");
  return {
    trade: isTrade(trade) ? trade : undefined,
    problem: params.get("problema") ?? undefined,
    key,
  };
}

/**
 * Abre el wizard de solicitud en una ventana a pantalla completa (móvil) o
 * centrada (escritorio) al pulsar cualquier enlace a /pedir-presupuesto.
 * Sin JavaScript esos enlaces siguen llevando a la página, que tiene el
 * mismo wizard integrado.
 */
export function RequestWizardHost() {
  const pathname = usePathname();
  const [opened, setOpened] = useState<Opened | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpened(null), []);

  useEffect(() => {
    if (pathname === consumerRoutes.request) return;

    function onClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target instanceof Element ? e.target.closest("a") : null;
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== consumerRoutes.request) return;
      // next/link no navega si el clic ya llegó con preventDefault; sus onClick (p. ej. cerrar el menú) sí se ejecutan.
      e.preventDefault();
      setOpened(paramsFrom(url.search, Date.now()));
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (!opened) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [opened, close]);

  useEffect(() => {
    setOpened(null);
  }, [pathname]);

  if (!opened) return null;

  return (
    <div className="fixed inset-0 z-[100] sm:flex sm:items-center sm:justify-center sm:p-4">
      <button type="button" aria-label="Cerrar" onClick={close} className="absolute inset-0 hidden bg-ink-900/60 sm:block" />
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Pedir presupuesto"
        className="relative flex h-[100dvh] w-full flex-col bg-white outline-none sm:h-[min(720px,90vh)] sm:max-w-2xl sm:overflow-hidden sm:rounded-xl2"
      >
        <RequestWizard key={opened.key} initialTrade={opened.trade} initialProblem={opened.problem} onClose={close} />
      </div>
    </div>
  );
}

/** El mismo wizard integrado en la página /pedir-presupuesto (lee ?servicio= y ?problema=). */
export function RequestWizardInline() {
  const [initial, setInitial] = useState<Opened>({ key: 0 });

  useEffect(() => {
    const fromUrl = paramsFrom(window.location.search, 1);
    if (fromUrl.trade) setInitial(fromUrl);
  }, []);

  return (
    <div className="h-[680px] overflow-hidden rounded-xl2 border border-ink-200">
      <RequestWizard key={initial.key} initialTrade={initial.trade} initialProblem={initial.problem} />
    </div>
  );
}
