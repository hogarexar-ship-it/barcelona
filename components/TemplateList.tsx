"use client";

import { useState } from "react";
import type { MessageTemplate } from "@/lib/professionals-data";

export function TemplateList({ templates }: { templates: MessageTemplate[] }) {
  const categories = Array.from(new Set(templates.map((t) => t.category)));

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="font-display text-xl font-bold text-ink-900">{category}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {templates
              .filter((t) => t.category === category)
              .map((template) => (
                <TemplateCard key={template.title} template={template} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TemplateCard({ template }: { template: MessageTemplate }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(template.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Si el navegador bloquea el portapapeles, no rompemos la interacción.
    }
  }

  return (
    <div className="flex flex-col rounded-xl2 border border-ink-100 bg-white p-5">
      <p className="font-semibold text-ink-900">{template.title}</p>
      <p className="mt-2 flex-1 text-sm text-ink-600">{template.text}</p>
      <button
        type="button"
        onClick={handleCopy}
        className={`mt-4 inline-flex items-center justify-center gap-2 self-start rounded-full px-4 py-2 text-xs font-semibold transition-all active:scale-95 ${
          copied ? "bg-terracotta-500 text-white" : "border border-ink-100 text-ink-700 hover:border-terracotta-300"
        }`}
      >
        {copied ? "¡Copiado!" : "Copiar mensaje"}
      </button>
    </div>
  );
}
