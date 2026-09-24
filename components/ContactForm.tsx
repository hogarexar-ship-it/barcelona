"use client";

import { useEffect, useRef, useState } from "react";
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
  situations,
  tradeOptions,
} from "@/lib/contact-options";
import type { BusinessType, ContactMethod, TradeValue } from "@/lib/contact-options";
import type { Locale } from "@/lib/i18n";
import { translator } from "@/lib/i18n";
import { routes } from "@/lib/navigation";
import { siteConfig, whatsappHref } from "@/lib/site-config";

type Status = "idle" | "sending" | "sent" | "error";
const stepLabels: Record<Locale, string[]> = {
  es: ["Tu negocio", "Contacto", "Detalles"],
  ca: ["El teu negoci", "Contacte", "Detalls"],
};
const stepCount = 3;

function isTradeValue(value: string | null): value is TradeValue {
  return tradeOptions.some((o) => o.value === value);
}

/**
 * Formulario de asesoramiento gratuito en 3 pasos. Envía a /api/contacto; si
 * el envío falla, ofrece mandar los mismos datos por WhatsApp. Acepta
 * ?oficio=, ?servicio= y ?situacion= en la URL para llegar preseleccionado.
 */
export function ContactForm({
  locale = "es",
  defaultTrade,
  defaultInterest,
  idPrefix = "contacto",
}: {
  locale?: Locale;
  defaultTrade?: TradeValue;
  defaultInterest?: string;
  idPrefix?: string;
}) {
  const t = translator(locale);
  const [step, setStep] = useState(0);
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
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tradeParam = params.get("oficio");
    const serviceParam = params.get("servicio");
    const situation = situations.find((s) => s.value === params.get("situacion"));
    if (isTradeValue(tradeParam)) setTrade(tradeParam);
    if (serviceParam && interestOptions.some((o) => o.value === serviceParam)) setInterests([serviceParam]);
    if (situation) setMessage(situation.message[locale]);
  }, [locale]);

  function goToStep(next: number) {
    setStep(next);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

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
    email,
    interests,
    message,
    website,
    locale,
  };

  function whatsappFallback(): string {
    const label = <T extends string>(options: { value: T; label: Record<Locale, string> }[], value: string) =>
      options.find((o) => o.value === value)?.label[locale] ?? value;
    const lines = [
      t(`Hola ${siteConfig.brand}, quiero el asesoramiento gratuito.`, `Hola ${siteConfig.brand}, vull l'assessorament gratuït.`),
      `${t("Nombre", "Nom")}: ${name}`,
      businessName ? `${t("Negocio", "Negoci")}: ${businessName}` : null,
      `${t("Oficio", "Ofici")}: ${label(tradeOptions, trade)}`,
      `${t("Tipo", "Tipus")}: ${label(businessTypeOptions, businessType)}`,
      `Zona: ${zone}`,
      `${t("Prefiero", "Prefereixo")}: ${label(contactMethodOptions, method)}`,
      payload.phone ? `${t("Teléfono", "Telèfon")}: ${payload.phone}` : null,
      payload.email ? `${t("Email", "Correu")}: ${payload.email}` : null,
      interests.length ? `${t("Me interesa", "M'interessa")}: ${interests.map((i) => label(interestOptions, i)).join(", ")}` : null,
      message ? `${t("Situación", "Situació")}: ${message}` : null,
    ].filter((line): line is string => line !== null);
    return whatsappHref(lines.join("\n"));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Los pasos 1 y 2 solo validan (validación nativa de los campos visibles) y avanzan.
    if (step < stepCount - 1) {
      goToStep(step + 1);
      return;
    }
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
    const channel = {
      llamada: t("teléfono", "telèfon"),
      whatsapp: "WhatsApp",
      email: t("email", "correu"),
      "": t("teléfono", "telèfon"),
    }[method];
    return (
      <div className="rounded-xl2 border border-ink-200 bg-white p-7 sm:p-9">
        <Icon name="check" className="h-10 w-10 text-accent-600" />
        <p className="mt-4 font-display text-2xl font-bold text-ink-900">
          {t("Recibido", "Rebut")}, {name.split(" ")[0]}
        </p>
        <p className="mt-3 text-ink-600">
          {t(
            `Te contactamos por ${channel} en horario laboral para preparar tu asesoramiento gratuito.`,
            `Et contactem per ${channel} en horari laboral per preparar el teu assessorament gratuït.`,
          )}
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="scroll-mt-24 rounded-xl2 border border-ink-200 bg-white">
      <div className="border-b border-ink-200 px-6 pb-4 pt-5 sm:px-8">
        <ol className="grid grid-cols-3 gap-2" aria-label={t("Pasos del formulario", "Passos del formulari")}>
          {stepLabels[locale].map((label, index) => (
            <li key={label} aria-current={index === step ? "step" : undefined}>
              <div className={`h-1.5 rounded ${index <= step ? "bg-[#CE6A27]" : "bg-ink-100"}`} />
              <p className={`mt-2 text-xs font-semibold ${index === step ? "text-ink-900" : "text-ink-400"}`}>
                {index + 1}. {label}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-6 px-6 py-6 sm:px-8">
        {step === 0 && (
          <>
            <ChoiceGroup locale={locale} legend={t("¿A qué te dedicas?", "A què et dediques?")} name={`${idPrefix}-trade`} options={tradeOptions} value={trade} onChange={setTrade} />
            <ChoiceGroup
              locale={locale}
              legend={t("¿Trabajas como…?", "Treballes com a…?")}
              name={`${idPrefix}-type`}
              options={businessTypeOptions}
              value={businessType}
              onChange={setBusinessType}
            />
            <Field label={t("¿Dónde trabajas?", "On treballes?")} htmlFor={`${idPrefix}-zone`}>
              <input
                id={`${idPrefix}-zone`}
                required
                list={`${idPrefix}-municipalities`}
                maxLength={limits.zone}
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="input"
                placeholder={t("Ej: Barcelona, Badalona…", "Ex.: Barcelona, Badalona…")}
              />
              <datalist id={`${idPrefix}-municipalities`}>
                {municipalities.map((m) => (
                  <option key={m} value={m} />
                ))}
              </datalist>
            </Field>
          </>
        )}

        {step === 1 && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("Tu nombre", "El teu nom")} htmlFor={`${idPrefix}-name`}>
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
              <Field label={t("Nombre del negocio (opcional)", "Nom del negoci (opcional)")} htmlFor={`${idPrefix}-business`}>
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
            <Field label={t("Tu email", "El teu correu")} htmlFor={`${idPrefix}-email`}>
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
            <ChoiceGroup
              locale={locale}
              legend={t("¿Cómo prefieres que te contactemos?", "Com prefereixes que et contactem?")}
              name={`${idPrefix}-method`}
              options={contactMethodOptions}
              value={method}
              onChange={setMethod}
            />
            <p className="flex items-start gap-2 rounded-md bg-surface-100 p-3 text-sm text-ink-600">
              <Icon name="chat" className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
              {t(
                "Por ahora atendemos en castellano. Estamos trabajando para ofrecer también atención en catalán.",
                "De moment atenem en castellà. Estem treballant per oferir també atenció en català.",
              )}
            </p>
            {(method === "llamada" || method === "whatsapp") && (
              <Field label={method === "whatsapp" ? t("Tu WhatsApp", "El teu WhatsApp") : t("Tu teléfono", "El teu telèfon")} htmlFor={`${idPrefix}-phone`}>
                <input
                  id={`${idPrefix}-phone`}
                  required
                  type="tel"
                  autoComplete="tel"
                  pattern="\+?[0-9 ]{9,18}"
                  title={t("Introduce un teléfono válido", "Introdueix un telèfon vàlid")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input"
                  placeholder="600 000 000"
                />
              </Field>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <fieldset>
              <legend className="text-sm font-semibold text-ink-900">
                {t("¿En qué te podemos ayudar? (opcional)", "En què et podem ajudar? (opcional)")}
              </legend>
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
                      {option.label[locale]}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <Field label={t("Cuéntanos tu situación (opcional)", "Explica'ns la teva situació (opcional)")} htmlFor={`${idPrefix}-message`}>
              <textarea
                id={`${idPrefix}-message`}
                rows={3}
                maxLength={limits.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
                placeholder={t(
                  "Ej: tengo trabajo pero no llego a todo / este año las llamadas han bajado…",
                  "Ex.: tinc feina però no arribo a tot / aquest any les trucades han baixat…",
                )}
              />
            </Field>

            <div className="hidden" aria-hidden="true">
              <label htmlFor={`${idPrefix}-website`}>{t("No rellenes este campo", "No omplis aquest camp")}</label>
              <input id={`${idPrefix}-website`} tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div>

            <label className="flex items-start gap-3 text-sm text-ink-600">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-[#CE6A27]"
              />
              <span>
                {t("He leído y acepto la", "He llegit i accepto la")}{" "}
                <Link href={routes[locale].privacy} className="underline">
                  {t("política de privacidad", "política de privacitat")}
                </Link>
                .
              </span>
            </label>
          </>
        )}

        {status === "error" && (
          <div className="rounded-md border border-urgent-500/30 bg-urgent-500/5 p-4 text-sm text-urgent-600">
            <p>
              {t(
                "No hemos podido enviar el formulario. Puedes mandarnos los mismos datos por WhatsApp:",
                "No hem pogut enviar el formulari. Ens pots enviar les mateixes dades per WhatsApp:",
              )}
            </p>
            <a href={whatsappFallback()} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-3">
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {t("Enviar por WhatsApp", "Enviar per WhatsApp")}
            </a>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-ink-200 px-6 py-4 sm:px-8">
        {step > 0 ? (
          <button type="button" onClick={() => goToStep(step - 1)} className="btn btn-outline">
            {t("Atrás", "Enrere")}
          </button>
        ) : (
          <span className="text-xs text-ink-400">{t("Gratis y sin compromiso", "Gratis i sense compromís")}</span>
        )}
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {step < stepCount - 1 ? (
            <>
              {t("Siguiente", "Següent")}
              <Icon name="arrowRight" className="h-4 w-4" />
            </>
          ) : status === "sending" ? (
            t("Enviando…", "Enviant…")
          ) : (
            t("Pedir asesoramiento gratis", "Demanar assessorament gratis")
          )}
        </button>
      </div>
    </form>
  );
}

function ChoiceGroup<T extends string>({
  locale,
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: Record<Locale, string>; icon: IconName }[];
  locale: Locale;
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
            {option.label[locale]}
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
