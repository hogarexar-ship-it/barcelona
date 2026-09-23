"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./CtaButtons";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";
import type { Trade } from "@/lib/navigation";
import { contactTimeOptions, districts, services, urgencyOptions } from "@/lib/services-data";
import { siteConfig, telHref, whatsappHref } from "@/lib/site-config";

type StepKey = "servicio" | "problema" | "urgencia" | "zona" | "contacto" | "resumen";
const steps: StepKey[] = ["servicio", "problema", "urgencia", "zona", "contacto", "resumen"];
const URGENT = "urgente";

export function isTrade(value: string | null | undefined): value is Trade {
  return value === "fontaneria" || value === "electricidad";
}

/**
 * Wizard de solicitud para particulares, paso a paso. Ocupa el 100% del alto
 * de su contenedor: progreso arriba, contenido con scroll propio y botones
 * fijos abajo. Al final abre WhatsApp con la solicitud redactada.
 */
export function RequestWizard({
  initialTrade,
  initialProblem,
  onClose,
}: {
  initialTrade?: Trade;
  initialProblem?: string;
  onClose?: () => void;
}) {
  const initialService = services.find((s) => s.trade === initialTrade);
  const initialProblemValid = !!initialService?.problems.some((p) => p.value === initialProblem);

  const [step, setStep] = useState(() => (initialService ? (initialProblemValid ? 2 : 1) : 0));
  const [trade, setTrade] = useState<Trade | null>(initialService?.trade ?? null);
  const [problem, setProblem] = useState<string | null>(initialProblemValid && initialProblem ? initialProblem : null);
  const [urgency, setUrgency] = useState<string | null>(null);
  const [zone, setZone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactTime, setContactTime] = useState("cualquiera");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const service = services.find((s) => s.trade === trade);
  const currentKey = steps[step] ?? "servicio";
  const isUrgent = urgency === URGENT;

  const problemLabel = service?.problems.find((p) => p.value === problem)?.label;
  const urgencyLabel = urgencyOptions.find((u) => u.value === urgency)?.label;
  const contactTimeLabel = contactTimeOptions.find((o) => o.value === contactTime)?.label;

  const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  function chooseTrade(next: Trade) {
    if (next !== trade) setProblem(null);
    setTrade(next);
    goNext();
  }

  function handleSend() {
    if (!service) return;
    const lines = [
      `Hola ${siteConfig.brand}, necesito un ${service.professional} en Barcelona.`,
      "",
      `Problema: ${problemLabel ?? ""}`,
      `Urgencia: ${urgencyLabel ?? ""}`,
      `Zona: ${zone}`,
      address ? `Dirección: ${address}` : null,
      details ? `Detalles: ${details}` : null,
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Mejor hora para llamar: ${contactTimeLabel ?? ""}`,
    ].filter((line): line is string => line !== null);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const canContinue: Partial<Record<StepKey, boolean>> = {
    zona: zone.trim().length > 0,
    contacto: name.trim().length > 0 && phone.trim().length >= 9,
  };

  if (sent) {
    return (
      <div className="flex h-full flex-col bg-white">
        <WizardHeader step={steps.length - 1} onClose={onClose} />
        <div className="flex-1 overflow-y-auto px-5 py-10 sm:px-8">
          <Icon name="check" className="h-10 w-10 text-accent-600" />
          <h2 className="mt-4 font-display text-2xl font-bold text-ink-900">Solicitud preparada</h2>
          <p className="mt-3 text-ink-600">
            Hemos abierto WhatsApp con tu solicitud. Envía el mensaje y te respondemos para confirmar el profesional y el
            horario.
          </p>
          <p className="mt-3 text-sm text-ink-600">
            ¿No se ha abierto WhatsApp? Llámanos al{" "}
            <a href={telHref()} className="font-semibold text-accent-700 underline">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </div>
        <div className="shrink-0 border-t border-ink-200 px-5 py-4 sm:px-8">
          {onClose ? (
            <button type="button" onClick={onClose} className="btn btn-outline w-full sm:w-auto">
              Cerrar
            </button>
          ) : (
            <button type="button" onClick={() => setSent(false)} className="btn btn-outline w-full sm:w-auto">
              Volver a la solicitud
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-white">
      <WizardHeader step={step} onClose={onClose} />

      {isUrgent && service && currentKey !== "urgencia" && (
        <div className="shrink-0 border-b border-urgent-500/20 bg-urgent-500/5 px-5 py-3 text-sm text-urgent-600 sm:px-8">
          <span className="font-semibold">Mientras tanto:</span> {service.safetyTip}
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8">
        {currentKey === "servicio" && (
          <StepFieldset title="¿Qué profesional necesitas?">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <button
                  key={s.trade}
                  type="button"
                  onClick={() => chooseTrade(s.trade)}
                  className={`overflow-hidden rounded-xl2 border text-left transition-colors ${
                    trade === s.trade ? "border-accent-600" : "border-ink-200 hover:border-ink-400"
                  }`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={s.photo.src} alt="" fill sizes="(min-width: 640px) 320px, 100vw" className="object-cover" />
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <Icon name={s.icon} className="h-6 w-6 text-accent-600" />
                    <span className="font-display text-lg font-bold text-ink-900">
                      {s.professional.charAt(0).toUpperCase() + s.professional.slice(1)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </StepFieldset>
        )}

        {currentKey === "problema" && service && (
          <StepFieldset title="¿Qué ocurre?">
            <OptionGrid
              options={service.problems}
              selected={problem}
              onSelect={(value) => {
                setProblem(value);
                goNext();
              }}
            />
          </StepFieldset>
        )}

        {currentKey === "urgencia" && (
          <StepFieldset title="¿Para cuándo lo necesitas?">
            <OptionGrid
              options={urgencyOptions}
              selected={urgency}
              onSelect={(value) => {
                setUrgency(value);
                goNext();
              }}
            />
          </StepFieldset>
        )}

        {currentKey === "zona" && (
          <StepFieldset title="¿Dónde es?">
            <div className="space-y-4">
              <Field label="Barrio o municipio" htmlFor="wizard-zone">
                <input
                  id="wizard-zone"
                  list="wizard-districts"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="input"
                  placeholder="Ej: Gràcia"
                  autoComplete="address-level2"
                />
                <datalist id="wizard-districts">
                  {districts.map((d) => (
                    <option key={d} value={d} />
                  ))}
                </datalist>
              </Field>
              <Field label="Calle (opcional)" htmlFor="wizard-address">
                <input
                  id="wizard-address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input"
                  placeholder="Ej: Carrer de Verdi"
                  autoComplete="street-address"
                />
              </Field>
            </div>
          </StepFieldset>
        )}

        {currentKey === "contacto" && (
          <StepFieldset title="¿Cómo te contactamos?">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" htmlFor="wizard-name">
                <input
                  id="wizard-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  autoComplete="name"
                />
              </Field>
              <Field label="Teléfono" htmlFor="wizard-phone">
                <input
                  id="wizard-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input"
                  placeholder="600 000 000"
                  autoComplete="tel"
                />
              </Field>
              <Field label="Mejor hora para llamarte" htmlFor="wizard-time">
                <select id="wizard-time" value={contactTime} onChange={(e) => setContactTime(e.target.value)} className="input">
                  {contactTimeOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Detalles (opcional)" htmlFor="wizard-details">
                <input
                  id="wizard-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="input"
                  placeholder="Ej: gotea bajo el fregadero"
                />
              </Field>
            </div>
          </StepFieldset>
        )}

        {currentKey === "resumen" && service && (
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">Revisa tu solicitud</h2>
            <dl className="mt-5 divide-y divide-ink-100 text-sm">
              <SummaryRow icon={service.icon} label="Profesional" value={service.professional} />
              <SummaryRow icon="wrench" label="Problema" value={problemLabel} />
              <SummaryRow icon={isUrgent ? "alert" : "calendar"} label="Cuándo" value={urgencyLabel} />
              <SummaryRow icon="mapPin" label="Zona" value={[zone, address].filter(Boolean).join(", ")} />
              <SummaryRow icon="userCheck" label="Nombre" value={name} />
              <SummaryRow icon="phone" label="Teléfono" value={phone} />
              <SummaryRow icon="clock" label="Llamarte" value={contactTimeLabel} />
              {details && <SummaryRow icon="chat" label="Detalles" value={details} />}
            </dl>
            <p className="mt-5 text-xs text-ink-400">
              Pedir presupuesto es gratis y sin compromiso. Tratamos tus datos según nuestra{" "}
              <Link href="/politica-privacidad" className="underline" onClick={onClose}>
                política de privacidad
              </Link>
              .
            </p>
          </div>
        )}
      </div>

      <div className="shrink-0 border-t border-ink-200 bg-white px-5 py-4 sm:px-8">
        {currentKey === "resumen" ? (
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <BackButton onClick={goBack} />
            <div className="flex flex-col gap-3 sm:flex-row">
              {isUrgent && (
                <a href={telHref()} className="btn btn-outline">
                  <Icon name="phone" className="h-4 w-4" />
                  Llamar ahora
                </a>
              )}
              <button type="button" onClick={handleSend} className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" />
                Enviar solicitud
              </button>
            </div>
          </div>
        ) : currentKey in canContinue ? (
          <div className="flex items-center justify-between gap-3">
            <BackButton onClick={goBack} />
            <button type="button" onClick={goNext} disabled={!canContinue[currentKey]} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-40">
              Siguiente
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        ) : (
          step > 0 && <BackButton onClick={goBack} />
        )}
      </div>
    </div>
  );
}

function WizardHeader({ step, onClose }: { step: number; onClose?: () => void }) {
  const percent = Math.round(((step + 1) / steps.length) * 100);
  return (
    <div className="shrink-0 border-b border-ink-200 px-5 pb-3 pt-4 sm:px-8">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between text-xs font-medium text-ink-400">
            <span>
              Paso {step + 1} de {steps.length}
            </span>
            <span>Pedir presupuesto</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-ink-100">
            <div className="h-full bg-accent-600 transition-[width] duration-300" style={{ width: `${percent}%` }} />
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-ink-400 hover:bg-ink-100 hover:text-ink-900"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

function StepFieldset({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="font-display text-xl font-bold text-ink-900">{title}</legend>
      <div className="mt-5">{children}</div>
    </fieldset>
  );
}

function OptionGrid({
  options,
  selected,
  onSelect,
}: {
  options: { value: string; label: string; icon: IconName }[];
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onSelect(option.value)}
          aria-pressed={selected === option.value}
          className={`flex items-center gap-3 rounded-md border px-4 py-4 text-left font-medium transition-colors ${
            selected === option.value
              ? "border-accent-600 bg-accent-50 text-accent-700"
              : "border-ink-200 text-ink-800 hover:border-ink-400"
          }`}
        >
          <Icon name={option.icon} className="h-6 w-6 shrink-0 text-accent-600" />
          {option.label}
        </button>
      ))}
    </div>
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

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="btn btn-outline">
      Atrás
    </button>
  );
}

function SummaryRow({ icon, label, value }: { icon: IconName; label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-3 py-3">
      <Icon name={icon} className="h-5 w-5 shrink-0 text-accent-600" />
      <dt className="w-24 shrink-0 text-ink-400">{label}</dt>
      <dd className="font-medium text-ink-900 first-letter:uppercase">{value}</dd>
    </div>
  );
}
