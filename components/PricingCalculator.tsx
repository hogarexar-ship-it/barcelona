"use client";

import { useMemo, useState } from "react";
import { services } from "@/lib/services-data";

const IVA_RATE = 0.21;

export function PricingCalculator() {
  const [rubro, setRubro] = useState(services[0]?.slug ?? "");
  const [hours, setHours] = useState(2);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [materials, setMaterials] = useState(0);
  const [travel, setTravel] = useState(0);
  const [urgent, setUrgent] = useState(false);

  const laborCost = hours * hourlyRate;
  const subtotalBeforeUrgent = laborCost + materials + travel;
  const urgentSurcharge = urgent ? subtotalBeforeUrgent * 0.35 : 0;
  const subtotal = subtotalBeforeUrgent + urgentSurcharge;
  const iva = subtotal * IVA_RATE;
  const total = subtotal + iva;

  const currentService = useMemo(() => services.find((s) => s.slug === rubro), [rubro]);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-xl2 border border-ink-100 bg-white p-6 sm:p-8">
        <h3 className="font-display text-lg font-bold text-ink-900">Calcula tu precio</h3>

        <label className="mt-5 block text-sm font-medium text-ink-800">
          Oficio
          <select value={rubro} onChange={(e) => setRubro(e.target.value)} className="input mt-1">
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <NumberField label="Horas estimadas" value={hours} onChange={setHours} min={0.5} step={0.5} />
          <NumberField label="Tu tarifa por hora (€)" value={hourlyRate} onChange={setHourlyRate} min={0} step={1} />
          <NumberField label="Coste de materiales (€)" value={materials} onChange={setMaterials} min={0} step={5} />
          <NumberField label="Desplazamiento (€)" value={travel} onChange={setTravel} min={0} step={1} />
        </div>

        <label className="mt-4 flex items-center gap-2 text-sm font-medium text-ink-800">
          <input
            type="checkbox"
            checked={urgent}
            onChange={(e) => setUrgent(e.target.checked)}
            className="h-4 w-4 rounded border-ink-200 text-terracotta-500 focus:ring-terracotta-400"
          />
          Es un trabajo urgente (recargo del 35%)
        </label>
      </div>

      <div className="rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-6 sm:p-8">
        <h3 className="font-display text-lg font-bold text-ink-900">
          Presupuesto orientativo{currentService ? ` — ${currentService.name}` : ""}
        </h3>
        <dl className="mt-5 space-y-2 text-sm">
          <Row label="Mano de obra" value={laborCost} />
          <Row label="Materiales" value={materials} />
          <Row label="Desplazamiento" value={travel} />
          {urgent && <Row label="Recargo urgencia (35%)" value={urgentSurcharge} />}
          <Row label="Subtotal" value={subtotal} emphasis />
          <Row label={`IVA (${Math.round(IVA_RATE * 100)}%)`} value={iva} />
        </dl>
        <div className="mt-4 flex items-baseline justify-between border-t border-terracotta-200 pt-4">
          <span className="font-semibold text-ink-900">Total a cobrar</span>
          <span className="font-display text-2xl font-bold text-terracotta-700">{formatEuro(total)}</span>
        </div>
        <p className="mt-4 text-xs text-ink-500">
          Cálculo orientativo. Ajusta tu tarifa por hora según tu experiencia, tu zona y la
          complejidad real del trabajo.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, emphasis = false }: { label: string; value: number; emphasis?: boolean }) {
  return (
    <div className={`flex justify-between ${emphasis ? "font-semibold text-ink-900" : "text-ink-600"}`}>
      <dt>{label}</dt>
      <dd>{formatEuro(value)}</dd>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
}) {
  return (
    <label className="block text-sm font-medium text-ink-800">
      {label}
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
        className="input mt-1"
      />
    </label>
  );
}

function formatEuro(value: number): string {
  return value.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 2 });
}
