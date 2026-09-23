"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "./CtaButtons";
import { Icon } from "./Icon";
import type { Trade } from "@/lib/navigation";
import { districts, services, urgencyOptions } from "@/lib/services-data";
import { siteConfig, whatsappHref } from "@/lib/site-config";

function isTrade(value: string | null): value is Trade {
  return value === "fontaneria" || value === "electricidad";
}

/**
 * Solicitud del particular. Sin backend: al enviar se abre WhatsApp con la
 * solicitud redactada. Acepta ?servicio= y ?problema= para llegar
 * preseleccionado desde los accesos rápidos del sitio.
 */
export function ConsumerRequestForm({ defaultTrade, idPrefix = "solicitud" }: { defaultTrade?: Trade; idPrefix?: string }) {
  const [trade, setTrade] = useState<Trade | "">(defaultTrade ?? "");
  const [problem, setProblem] = useState("");
  const [urgency, setUrgency] = useState("");
  const [zone, setZone] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tradeParam = params.get("servicio");
    if (!isTrade(tradeParam)) return;
    setTrade(tradeParam);
    const problemParam = params.get("problema");
    const service = services.find((s) => s.trade === tradeParam);
    if (service?.problems.some((p) => p.value === problemParam) && problemParam) setProblem(problemParam);
  }, []);

  const service = services.find((s) => s.trade === trade);

  function selectTrade(next: Trade) {
    setTrade(next);
    setProblem("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!service) return;

    const problemLabel = service.problems.find((p) => p.value === problem)?.label ?? problem;
    const urgencyLabel = urgencyOptions.find((u) => u.value === urgency)?.label ?? urgency;
    const lines = [
      `Hola ${siteConfig.brand}, necesito un ${service.professional} en Barcelona.`,
      `Problema: ${problemLabel}`,
      `Urgencia: ${urgencyLabel}`,
      `Zona: ${zone}`,
      details ? `Detalle: ${details}` : null,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
    ].filter((line): line is string => line !== null);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl2 bg-white p-7 text-ink-800 shadow-xl sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          <Icon name="check" />
        </span>
        <p className="mt-4 font-display text-2xl font-bold text-ink-900">¡Solicitud preparada, {name.split(" ")[0]}!</p>
        <p className="mt-3 text-ink-600">
          Hemos abierto WhatsApp con tu solicitud. Envía el mensaje y te respondemos para confirmar el profesional y el
          horario.
        </p>
        <p className="mt-3 text-sm text-ink-400">
          ¿No se ha abierto WhatsApp? Llámanos al{" "}
          <a href={`tel:${siteConfig.phoneE164}`} className="font-semibold text-accent-600 underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-ink-800 underline underline-offset-4">
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl2 bg-white p-6 text-ink-800 shadow-xl sm:p-8">
      <fieldset>
        <legend className="text-sm font-semibold text-ink-900">1. ¿Qué necesitas?</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {services.map((s) => (
            <OptionPill
              key={s.trade}
              name={`${idPrefix}-trade`}
              value={s.trade}
              checked={trade === s.trade}
              onSelect={() => selectTrade(s.trade)}
              required
              large
            >
              <Icon name={s.icon} className="h-5 w-5" />
              {s.professional.charAt(0).toUpperCase() + s.professional.slice(1)}
            </OptionPill>
          ))}
        </div>
      </fieldset>

      {service && (
        <fieldset>
          <legend className="text-sm font-semibold text-ink-900">2. ¿Qué ocurre?</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.problems.map((p) => (
              <OptionPill
                key={p.value}
                name={`${idPrefix}-problem`}
                value={p.value}
                checked={problem === p.value}
                onSelect={() => setProblem(p.value)}
                required
              >
                {p.label}
              </OptionPill>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset>
        <legend className="text-sm font-semibold text-ink-900">{service ? "3" : "2"}. ¿Para cuándo?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {urgencyOptions.map((u) => (
            <OptionPill
              key={u.value}
              name={`${idPrefix}-urgency`}
              value={u.value}
              checked={urgency === u.value}
              onSelect={() => setUrgency(u.value)}
              required
            >
              {u.label}
            </OptionPill>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Barrio o municipio" htmlFor={`${idPrefix}-zone`}>
          <input
            id={`${idPrefix}-zone`}
            required
            list={`${idPrefix}-districts`}
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="input"
            placeholder="Ej: Gràcia"
          />
          <datalist id={`${idPrefix}-districts`}>
            {districts.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </Field>
        <Field label="Tu nombre" htmlFor={`${idPrefix}-name`}>
          <input
            id={`${idPrefix}-name`}
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Nombre"
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
        <Field label="Detalles (opcional)" htmlFor={`${idPrefix}-details`}>
          <input
            id={`${idPrefix}-details`}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="input"
            placeholder="Ej: gotea bajo el fregadero"
          />
        </Field>
      </div>

      <button type="submit" className="btn btn-primary w-full py-4 text-base">
        <WhatsAppIcon className="h-5 w-5" />
        Pedir presupuesto gratis
      </button>
      <p className="text-xs text-ink-400">
        Gratis y sin compromiso. Se abre WhatsApp con tu solicitud para que la confirmes. Tratamos tus datos según nuestra{" "}
        <Link href="/politica-privacidad" className="underline">
          política de privacidad
        </Link>
        .
      </p>
    </form>
  );
}

function OptionPill({
  name,
  value,
  checked,
  onSelect,
  required = false,
  large = false,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onSelect: () => void;
  required?: boolean;
  large?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      className={`relative flex cursor-pointer items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition ${
        large ? "px-4 py-4" : "px-3.5 py-2.5"
      } ${checked ? "border-accent-500 bg-accent-50 text-accent-700" : "border-ink-100 text-ink-600 hover:border-ink-200"}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onSelect}
        required={required}
        className="absolute inset-0 cursor-pointer opacity-0"
      />
      {children}
    </label>
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
