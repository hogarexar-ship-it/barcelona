"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { services, getServiceBySlug } from "@/lib/services-data";
import { zones } from "@/lib/zones-data";
import { rubroWizardConfigs, contactTimeOptions } from "@/lib/wizard-data";
import { whatsappHref } from "@/lib/site-config";
import { CallButton } from "./CtaButtons";

type StepKey = "rubro" | "problema" | "detalle" | "zona" | "contacto" | "resumen";

const neighborhoodOptions = zones.flatMap((zone) => [
  zone.name,
  ...zone.neighborhoods,
]);

export function SolicitudWizard({ initialServiceSlug }: { initialServiceSlug?: string }) {
  const initialService = initialServiceSlug ? getServiceBySlug(initialServiceSlug) : undefined;

  const [step, setStep] = useState(initialService ? 1 : 0);
  const [serviceSlug, setServiceSlug] = useState<string | null>(initialService?.slug ?? null);
  const [problemValue, setProblemValue] = useState<string | null>(null);
  const [detailValue, setDetailValue] = useState<string | null>(null);
  const [zone, setZone] = useState("");
  const [address, setAddress] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contactTime, setContactTime] = useState("cualquiera");
  const [sent, setSent] = useState(false);

  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const config = serviceSlug ? rubroWizardConfigs[serviceSlug] : undefined;
  const hasDetailStep = !!config?.detailQuestion;

  const stepKeys = useMemo<StepKey[]>(
    () => ["rubro", "problema", ...(hasDetailStep ? (["detalle"] as StepKey[]) : []), "zona", "contacto", "resumen"],
    [hasDetailStep]
  );

  const currentKey = stepKeys[step] ?? "rubro";
  const totalSteps = stepKeys.length;

  const autoUrgentTriggered =
    !!config?.autoUrgentValues &&
    (config.autoUrgentValues.includes(problemValue ?? "") || config.autoUrgentValues.includes(detailValue ?? ""));

  const isUrgent = autoUrgentTriggered || urgent;

  function goNext() {
    setStep((s) => Math.min(s + 1, totalSteps - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function selectService(slug: string) {
    setServiceSlug(slug);
    setProblemValue(null);
    setDetailValue(null);
    setUrgent(false);
    goNext();
  }

  function selectProblem(value: string) {
    setProblemValue(value);
    goNext();
  }

  function selectDetail(value: string) {
    setDetailValue(value);
    goNext();
  }

  const problemLabel = config?.problemQuestion.options.find((o) => o.value === problemValue)?.label;
  const detailLabel = config?.detailQuestion?.options.find((o) => o.value === detailValue)?.label;
  const contactTimeLabel = contactTimeOptions.find((o) => o.value === contactTime)?.label;

  function buildMessage(): string {
    const lines = [
      `Hola Hogarex, quiero solicitar un servicio a través del formulario de solicitud.`,
      "",
      `Servicio: ${service?.name ?? ""}`,
      problemLabel ? `Problema: ${problemLabel}` : null,
      detailLabel ? `Detalle: ${detailLabel}` : null,
      `Urgente: ${isUrgent ? "Sí" : "No"}`,
      zone ? `Zona: ${zone}` : null,
      address ? `Dirección: ${address}` : null,
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      email ? `Email: ${email}` : null,
      `Mejor horario para contactar: ${contactTimeLabel ?? ""}`,
    ].filter((line): line is string => line !== null);

    return lines.join("\n");
  }

  function handleSend() {
    const url = whatsappHref(buildMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const canProceedZona = zone.trim().length > 0;
  const canProceedContacto = name.trim().length > 0 && phone.trim().length > 0;

  return (
    <div className="rounded-xl2 border border-ink-100 bg-white p-6 sm:p-8">
      <ProgressBar step={step} total={totalSteps} />

      {isUrgent && config?.safetyWarning && (
        <div className="mt-4 rounded-xl2 border border-urgent-500/30 bg-urgent-500/5 p-4 text-sm text-urgent-600">
          <p className="font-semibold">Aviso de seguridad</p>
          <p className="mt-1">{config.safetyWarning}</p>
        </div>
      )}

      <div className="mt-6">
        {currentKey === "rubro" && (
          <fieldset>
            <legend className="font-display text-xl font-bold text-ink-900">
              ¿Qué tipo de profesional necesitas?
            </legend>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => selectService(s.slug)}
                  className={`group overflow-hidden rounded-xl2 border text-left transition-shadow hover:shadow-lg ${
                    serviceSlug === s.slug ? "border-terracotta-500 ring-2 ring-terracotta-200" : "border-ink-100"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={s.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-ink-900">{s.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {currentKey === "problema" && config && (
          <OptionStep
            question={config.problemQuestion.question}
            options={config.problemQuestion.options}
            selected={problemValue}
            onSelect={selectProblem}
          />
        )}

        {currentKey === "detalle" && config?.detailQuestion && (
          <OptionStep
            question={config.detailQuestion.question}
            options={config.detailQuestion.options}
            selected={detailValue}
            onSelect={selectDetail}
          />
        )}

        {currentKey === "zona" && (
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">¿Dónde es el trabajo?</h2>
            <div className="mt-5 space-y-4">
              <label className="block text-sm font-medium text-ink-800">
                Barrio o zona de Barcelona
                <input
                  list="neighborhood-options"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="input mt-1"
                  placeholder="Ej: Gràcia, Eixample, Sants..."
                />
                <datalist id="neighborhood-options">
                  {neighborhoodOptions.map((n) => (
                    <option key={n} value={n} />
                  ))}
                </datalist>
              </label>

              <label className="block text-sm font-medium text-ink-800">
                Dirección (opcional)
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input mt-1"
                  placeholder="Calle y número"
                />
              </label>

              {service?.emergency && !autoUrgentTriggered && (
                <div>
                  <p className="text-sm font-medium text-ink-800">¿Es urgente?</p>
                  <div className="mt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setUrgent(true)}
                      className={`rounded-full border px-5 py-2 text-sm font-semibold ${
                        urgent ? "border-urgent-500 bg-urgent-500/10 text-urgent-600" : "border-ink-100 text-ink-600"
                      }`}
                    >
                      Sí, es urgente
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgent(false)}
                      className={`rounded-full border px-5 py-2 text-sm font-semibold ${
                        !urgent ? "border-ink-900 bg-ink-900 text-white" : "border-ink-100 text-ink-600"
                      }`}
                    >
                      No es urgente
                    </button>
                  </div>
                </div>
              )}

              {autoUrgentTriggered && (
                <p className="text-sm font-semibold text-urgent-600">
                  Hemos marcado esta solicitud como urgente según tu respuesta anterior.
                </p>
              )}
            </div>

            <WizardNav onBack={goBack} onNext={goNext} nextDisabled={!canProceedZona} />
          </div>
        )}

        {currentKey === "contacto" && (
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">Tus datos de contacto</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink-800">
                Nombre
                <input value={name} onChange={(e) => setName(e.target.value)} className="input mt-1" placeholder="Tu nombre" />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Teléfono
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="input mt-1"
                  placeholder="600 000 000"
                />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Email (opcional)
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="input mt-1"
                  placeholder="tu@email.com"
                />
              </label>
              <label className="block text-sm font-medium text-ink-800">
                Mejor horario para contactarte
                <select value={contactTime} onChange={(e) => setContactTime(e.target.value)} className="input mt-1">
                  {contactTimeOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <WizardNav onBack={goBack} onNext={goNext} nextDisabled={!canProceedContacto} />
          </div>
        )}

        {currentKey === "resumen" && (
          <div>
            <h2 className="font-display text-xl font-bold text-ink-900">Revisa tu solicitud</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <SummaryRow label="Servicio" value={service?.name} />
              <SummaryRow label="Problema" value={problemLabel} />
              <SummaryRow label="Detalle" value={detailLabel} />
              <SummaryRow label="Zona" value={zone} />
              <SummaryRow label="Dirección" value={address || "No indicada"} />
              <SummaryRow label="Urgente" value={isUrgent ? "Sí" : "No"} />
              <SummaryRow label="Nombre" value={name} />
              <SummaryRow label="Teléfono" value={phone} />
              <SummaryRow label="Email" value={email || "No indicado"} />
              <SummaryRow label="Horario preferido" value={contactTimeLabel} />
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex items-center justify-center rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-600"
              >
                Enviar solicitud por WhatsApp
              </button>
              {isUrgent && <CallButton className="justify-center" label="Llamar ahora" />}
            </div>

            {sent && (
              <p className="mt-4 rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-4 text-sm text-terracotta-700">
                Hemos abierto WhatsApp con tu solicitud ya redactada. Confirma el envío desde ahí y
                te contactaremos para coordinar al profesional adecuado.
              </p>
            )}

            <WizardNav onBack={goBack} showNext={false} />
          </div>
        )}
      </div>
    </div>
  );
}

function OptionStep({
  question,
  options,
  selected,
  onSelect,
}: {
  question: string;
  options: { value: string; label: string }[];
  selected: string | null;
  onSelect: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="font-display text-xl font-bold text-ink-900">{question}</legend>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className={`rounded-xl2 border px-5 py-4 text-left text-sm font-medium transition-colors ${
              selected === option.value
                ? "border-terracotta-500 bg-terracotta-50 text-terracotta-700"
                : "border-ink-100 text-ink-800 hover:border-terracotta-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function WizardNav({
  onBack,
  onNext,
  nextDisabled = false,
  showNext = true,
}: {
  onBack: () => void;
  onNext?: () => void;
  nextDisabled?: boolean;
  showNext?: boolean;
}) {
  return (
    <div className="mt-8 flex justify-between">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center justify-center rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-700 hover:bg-ink-100"
      >
        Atrás
      </button>
      {showNext && (
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Siguiente
        </button>
      )}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-4 border-b border-ink-100 pb-2">
      <dt className="text-ink-400">{label}</dt>
      <dd className="text-right font-medium text-ink-900">{value}</dd>
    </div>
  );
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  const percent = Math.round(((step + 1) / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-medium text-ink-400">
        <span>
          Paso {step + 1} de {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink-100">
        <div className="h-full rounded-full bg-terracotta-500 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
