"use client";

import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";
import { WhatsAppIcon } from "./CtaButtons";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import {
  businessTypeOptions,
  contactMethodOptions,
  interestOptions,
  limits,
  municipalities,
  tradeOptions,
} from "@/lib/contact-options";
import type { BusinessType, ContactMethod, TradeValue } from "@/lib/contact-options";
import { siteConfig, whatsappHref } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "error";

function isTradeValue(value: string | null): value is TradeValue {
  return tradeOptions.some((o) => o.value === value);
}

/**
 * Formulario para pedir el asesoramiento gratuito. Envía a /api/contacto; si
 * el envío falla, ofrece mandar los mismos datos por WhatsApp.
 * Acepta ?oficio= y ?servicio= en la URL para llegar preseleccionado.
 */
export function ContactForm({
  defaultTrade,
  defaultInterest,
  idPrefix = "contacto",
}: {
  defaultTrade?: TradeValue;
  defaultInterest?: string;
  idPrefix?: string;
}) {
  const [trade, setTrade] = useState<TradeValue | "">(defaultTrade ?? "");
  const [businessType, setBusinessType] = useState<BusinessType | "">("");
  const [zone, setZone] = useState("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [method, setMethod] = useState<ContactMethod | "">("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<string[]>(defaultInterest ? [defaultInterest] : []);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tradeParam = params.get("oficio");
    const serviceParam = params.get("servicio");
    if (isTradeValue(tradeParam)) setTrade(tradeParam);
    if (serviceParam && interestOptions.some((o) => o.value === serviceParam)) setInterests([serviceParam]);
  }, []);

  function toggleInterest(value: string) {
    setInterests((current) => (current.includes(value) ? current.filter((v) => v !== value) : [...current, value]));
  }

  const payload = {
    trade,
    businessType,
    zone,
    name,
    businessName,
    method,
    phone: method === "email" ? "" : phone,
    email: method === "email" ? email : "",
    interests,
    message,
    website,
  };

  function whatsappFallback(): string {
    const label = <T extends string>(options: { value: T; label: string }[], value: string) =>
      options.find((o) => o.value === value)?.label ?? value;
    const lines = [
      `Hola ${siteConfig.brand}, quiero el asesoramiento gratuito.`,
      `Nombre: ${name}`,
      businessName ? `Negocio: ${businessName}` : null,
      `Oficio: ${label(tradeOptions, trade)}`,
      `Tipo: ${label(businessTypeOptions, businessType)}`,
      `Zona: ${zone}`,
      `Prefiero: ${label(contactMethodOptions, method)}`,
      payload.phone ? `Teléfono: ${payload.phone}` : null,
      payload.email ? `Email: ${payload.email}` : null,
      interests.length ? `Me interesa: ${interests.map((i) => label(interestOptions, i)).join(", ")}` : null,
      message ? `Situación: ${message}` : null,
    ].filter((line): line is string => line !== null);
    return whatsappHref(lines.join("\n"));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    const channel = { llamada: "teléfono", whatsapp: "WhatsApp", email: "email", "": "teléfono" }[method];
    return (
      <div className="rounded-xl2 border border-ink-200 bg-white p-7 sm:p-9">
        <Icon name="check" className="h-10 w-10 text-accent-600" />
        <p className="mt-4 font-display text-2xl font-bold text-ink-900">Recibido, {name.split(" ")[0]}</p>
        <p className="mt-3 text-ink-600">
          Te contactamos por {channel} en horario laboral para preparar tu asesoramiento gratuito.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-xl2 border border-ink-200 bg-white p-6 sm:p-8">
      <ChoiceGroup legend="¿A qué te dedicas?" name={`${idPrefix}-trade`} options={tradeOptions} value={trade} onChange={setTrade} />
      <ChoiceGroup
        legend="¿Trabajas como…?"
        name={`${idPrefix}-type`}
        options={businessTypeOptions}
        value={businessType}
        onChange={setBusinessType}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="¿Dónde trabajas?" htmlFor={`${idPrefix}-zone`}>
          <input
            id={`${idPrefix}-zone`}
            required
            list={`${idPrefix}-municipalities`}
            maxLength={limits.zone}
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="input"
            placeholder="Ej: Barcelona, Badalona…"
          />
          <datalist id={`${idPrefix}-municipalities`}>
            {municipalities.map((m) => (
              <option key={m} value={m} />
            ))}
          </datalist>
        </Field>
        <Field label="Tu nombre" htmlFor={`${idPrefix}-name`}>
          <input
            id={`${idPrefix}-name`}
            required
            autoComplete="name"
            maxLength={limits.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Nombre del negocio (opcional)" htmlFor={`${idPrefix}-business`}>
          <input
            id={`${idPrefix}-business`}
            autoComplete="organization"
            maxLength={limits.business}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <ChoiceGroup
        legend="¿Cómo prefieres que te contactemos?"
        name={`${idPrefix}-method`}
        options={contactMethodOptions}
        value={method}
        onChange={setMethod}
      />

      {method && (
        <div className="grid gap-5 sm:grid-cols-2">
          {method === "email" ? (
            <Field label="Tu email" htmlFor={`${idPrefix}-email`}>
              <input
                id={`${idPrefix}-email`}
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
              />
            </Field>
          ) : (
            <Field label={method === "whatsapp" ? "Tu WhatsApp" : "Tu teléfono"} htmlFor={`${idPrefix}-phone`}>
              <input
                id={`${idPrefix}-phone`}
                required
                type="tel"
                autoComplete="tel"
                pattern="\+?[0-9 ]{9,18}"
                title="Introduce un teléfono válido"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input"
                placeholder="600 000 000"
              />
            </Field>
          )}
        </div>
      )}

      <fieldset>
        <legend className="text-sm font-semibold text-ink-900">¿En qué te podemos ayudar? (opcional)</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {interestOptions.map((option) => {
            const checked = interests.includes(option.value);
            return (
              <label
                key={option.value}
                className={`relative cursor-pointer rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                  checked ? "border-accent-600 bg-accent-50 text-accent-700" : "border-ink-200 text-ink-700 hover:border-ink-400"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleInterest(option.value)}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <Field label="Cuéntanos tu situación (opcional)" htmlFor={`${idPrefix}-message`}>
        <textarea
          id={`${idPrefix}-message`}
          rows={3}
          maxLength={limits.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
          placeholder="Ej: tengo trabajo pero no llego a todo / este año las llamadas han bajado…"
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>No rellenes este campo</label>
        <input id={`${idPrefix}-website`} tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-600">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[#EA580C]"
        />
        <span>
          He leído y acepto la{" "}
          <Link href="/politica-privacidad" className="underline">
            política de privacidad
          </Link>
          .
        </span>
      </label>

      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full py-4 text-base disabled:opacity-60">
        {status === "sending" ? "Enviando…" : "Pedir asesoramiento gratis"}
      </button>

      {status === "error" && (
        <div className="rounded-md border border-urgent-500/30 bg-urgent-500/5 p-4 text-sm text-urgent-600">
          <p>No hemos podido enviar el formulario. Puedes mandarnos los mismos datos por WhatsApp:</p>
          <a href={whatsappFallback()} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-3">
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            Enviar por WhatsApp
          </a>
        </div>
      )}
    </form>
  );
}

function ChoiceGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: string; icon: IconName }[];
  value: T | "";
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-ink-900">{legend}</legend>
      <div className={`mt-2 grid gap-2 ${options.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
        {options.map((option) => (
          <label
            key={option.value}
            className={`relative flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-md border px-2 py-3 text-center text-sm font-semibold transition-colors ${
              value === option.value ? "border-accent-600 bg-accent-50 text-accent-700" : "border-ink-200 text-ink-700 hover:border-ink-400"
            }`}
          >
            <input
              type="radio"
              name={name}
              required
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            <Icon name={option.icon} className="h-6 w-6" />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
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
