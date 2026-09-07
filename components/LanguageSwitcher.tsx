"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/context";

const options: { value: Locale; label: string }[] = [
  { value: "es", label: "ES" },
  { value: "ca", label: "CA" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink-200 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Idioma / Idioma"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLocale(option.value)}
          aria-pressed={locale === option.value}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === option.value ? "bg-ink-900 text-white" : "text-ink-600 hover:text-terracotta-600"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
