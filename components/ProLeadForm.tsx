"use client";

import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "./CtaButtons";
import { interestOptions, tradeOptions } from "@/lib/offers";
import type { Interest, ProTrade } from "@/lib/offers";
import { siteConfig, whatsappHref } from "@/lib/site-config";

function isInterest(value: string | null): value is Interest {
  return interestOptions.some((option) => option.value === value);
}

function isTrade(value: string | null): value is ProTrade {
  return tradeOptions.some((option) => option.value === value);
}

/**
 * Formulario de alta para profesionales. Sin backend: al enviar se abre
 * WhatsApp con los datos ya redactados. Acepta ?interes= y ?oficio= en la
 * URL para llegar preseleccionado desde los CTA del sitio.
 */
export function ProLeadForm({
  defaultInterest = "ambos",
  defaultTrade,
  idPrefix = "lead",
}: {
  defaultInterest?: Interest;
  defaultTrade?: ProTrade;
  idPrefix?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [trade, setTrade] = useState<ProTrade | "">(defaultTrade ?? "");
  const [interest, setInterest] = useState<Interest>(defaultInterest);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interestParam = params.get("interes");
    const tradeParam = params.get("oficio");
    if (isInterest(interestParam)) setInterest(interestParam);
    if (isTrade(tradeParam)) setTrade(tradeParam);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const tradeLabel = tradeOptions.find((o) => o.value === trade)?.label ?? trade;
    const interestLabel = interestOptions.find((o) => o.value === interest)?.label ?? interest;
    const lines = [
      `Hola ${siteConfig.brand}, soy profesional en Barcelona y quiero más clientes.`,
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : null,
      `Oficio: ${tradeLabel}`,
      `Me interesa: ${interestLabel}`,
      `Teléfono: ${phone}`,
    ].filter((line): line is string => line !== null);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl2 bg-white p-7 text-ink-800 sm:p-9">
        <p className="font-display text-2xl font-bold text-ink-900">¡Gracias, {name.split(" ")[0]}!</p>
        <p className="mt-3 text-ink-600">
          Hemos abierto WhatsApp con tus datos. Envía el mensaje y te llamamos en horario laboral para conocer
          tu negocio.
        </p>
        <p className="mt-3 text-sm text-ink-400">
          ¿No se ha abierto WhatsApp? Escríbenos a{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold text-accent-600 underline">
            {siteConfig.email}
          </a>{" "}
          o llámanos al {siteConfig.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-ink-800 underline underline-offset-4"
        >
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl2 bg-white p-7 text-ink-800 shadow-xl sm:p-9">
      <fieldset>
        <legend className="text-sm font-semibold text-ink-900">¿Qué te interesa?</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {interestOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center justify-center rounded-xl border px-3 py-3 text-center text-sm font-semibold transition ${
                interest === option.value
                  ? "border-accent-500 bg-accent-50 text-accent-700"
                  : "border-ink-100 text-ink-600 hover:border-ink-200"
              }`}
            >
              <input
                type="radio"
                name={`${idPrefix}-interest`}
                value={option.value}
                checked={interest === option.value}
                onChange={() => setInterest(option.value)}
                className="sr-only"
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor={`${idPrefix}-name`}>
          <input
            id={`${idPrefix}-name`}
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Teléfono" htmlFor={`${idPrefix}-phone`}>
          <input
            id={`${idPrefix}-phone`}
            required
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            placeholder="600 000 000"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Tu oficio" htmlFor={`${idPrefix}-trade`}>
          <select
            id={`${idPrefix}-trade`}
            required
            value={trade}
            onChange={(e) => setTrade(isTrade(e.target.value) ? e.target.value : "")}
            className="input"
          >
            <option value="" disabled>
              Elige tu oficio
            </option>
            {tradeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Empresa (opcional)" htmlFor={`${idPrefix}-company`}>
          <input
            id={`${idPrefix}-company`}
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="input"
            placeholder="Nombre comercial"
          />
        </Field>
      </div>

      <button type="submit" className="btn btn-primary w-full py-4 text-base">
        <WhatsAppIcon className="h-5 w-5" />
        Enviar y hablar con nosotros
      </button>
      <p className="text-xs text-ink-400">
        Se abre WhatsApp con tus datos para que los confirmes. Sin compromiso. Tratamos tus datos según nuestra{" "}
        <Link href="/politica-privacidad" className="underline">
          política de privacidad
        </Link>
        .
      </p>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink-900">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
