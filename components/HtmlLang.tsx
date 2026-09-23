"use client";

import { useEffect } from "react";

/** Ajusta el atributo lang del documento en las páginas en catalán. */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [lang]);
  return null;
}
