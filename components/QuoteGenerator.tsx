"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type LineItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
};

function newLineItem(): LineItem {
  return { id: crypto.randomUUID(), description: "", quantity: 1, unitPrice: 0 };
}

export function QuoteGenerator() {
  const [businessName, setBusinessName] = useState("");
  const [businessContact, setBusinessContact] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [quoteDate, setQuoteDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [applyIva, setApplyIva] = useState(true);
  const [items, setItems] = useState<LineItem[]>(() => [newLineItem()]);

  function updateItem(id: string, patch: Partial<LineItem>) {
    setItems((current) => current.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function addItem() {
    setItems((current) => [...current, newLineItem()]);
  }

  function removeItem(id: string) {
    setItems((current) => (current.length > 1 ? current.filter((item) => item.id !== id) : current));
  }

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const iva = applyIva ? subtotal * 0.21 : 0;
  const total = subtotal + iva;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-4 rounded-xl2 border border-ink-100 bg-white p-6 print:hidden sm:p-8">
        <h3 className="font-display text-lg font-bold text-ink-900">Datos del presupuesto</h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Tu nombre o empresa">
            <input value={businessName} onChange={(e) => setBusinessName(e.target.value)} className="input" placeholder="Ej: Fontanería Pérez" />
          </Field>
          <Field label="Tu teléfono o email">
            <input
              value={businessContact}
              onChange={(e) => setBusinessContact(e.target.value)}
              className="input"
              placeholder="600 000 000"
            />
          </Field>
          <Field label="Cliente">
            <input value={clientName} onChange={(e) => setClientName(e.target.value)} className="input" placeholder="Nombre del cliente" />
          </Field>
          <Field label="Fecha">
            <input type="date" value={quoteDate} onChange={(e) => setQuoteDate(e.target.value)} className="input" />
          </Field>
        </div>

        <Field label="Dirección del trabajo (opcional)">
          <input
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
            className="input"
            placeholder="Calle, número, barrio"
          />
        </Field>

        <div>
          <p className="text-sm font-medium text-ink-800">Conceptos</p>
          <div className="mt-2 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl2 border border-ink-100 p-3 sm:grid sm:grid-cols-[1fr_4rem_5rem_2rem] sm:items-end sm:gap-2 sm:border-0 sm:p-0"
              >
                <div className="flex items-end gap-2 sm:contents">
                  <div className="flex-1 sm:order-1">
                    <Field label="Descripción">
                      <input
                        value={item.description}
                        onChange={(e) => updateItem(item.id, { description: e.target.value })}
                        className="input"
                        placeholder="Ej: Cambio de grifo"
                      />
                    </Field>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ink-100 text-ink-400 transition-colors hover:border-urgent-300 hover:text-urgent-600 sm:order-4 sm:h-9 sm:w-9"
                    aria-label="Eliminar concepto"
                  >
                    <TrashIcon />
                  </button>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:contents sm:mt-0">
                  <div className="sm:order-2">
                    <Field label="Cant.">
                      <input
                        type="number"
                        min={0}
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, { quantity: Number(e.target.value) || 0 })}
                        className="input"
                      />
                    </Field>
                  </div>
                  <div className="sm:order-3">
                    <Field label="Precio (€)">
                      <input
                        type="number"
                        min={0}
                        value={item.unitPrice}
                        onChange={(e) => updateItem(item.id, { unitPrice: Number(e.target.value) || 0 })}
                        className="input"
                      />
                    </Field>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addItem}
            className="mt-3 text-sm font-semibold text-terracotta-600 hover:underline"
          >
            + Añadir concepto
          </button>
        </div>

        <label className="flex items-center gap-2 text-sm font-medium text-ink-800">
          <input
            type="checkbox"
            checked={applyIva}
            onChange={(e) => setApplyIva(e.target.checked)}
            className="h-4 w-4 rounded border-ink-200 text-terracotta-500 focus:ring-terracotta-400"
          />
          Aplicar IVA (21%)
        </label>

        <button
          type="button"
          onClick={() => window.print()}
          className="w-full rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta-500/30 transition-transform hover:bg-terracotta-600 active:scale-95 sm:w-auto"
        >
          Imprimir o guardar como PDF
        </button>
      </div>

      <div id="quote-preview" className="rounded-xl2 border border-ink-100 bg-white p-6 shadow-sm print:border-0 print:p-0 print:shadow-none sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-ink-100 pb-4">
          <div>
            <p className="font-display text-lg font-bold text-ink-900">{businessName || "Tu nombre o empresa"}</p>
            <p className="text-sm text-ink-600">{businessContact || "Tu teléfono o email"}</p>
          </div>
          <div className="text-right text-sm text-ink-600">
            <p className="font-semibold text-ink-900">Presupuesto</p>
            <p>{formatDate(quoteDate)}</p>
          </div>
        </div>

        <div className="mt-4 text-sm text-ink-600">
          <p className="font-semibold text-ink-900">Para: {clientName || "Nombre del cliente"}</p>
          {clientAddress && <p>{clientAddress}</p>}
        </div>

        <table className="mt-6 w-full text-sm">
          <thead>
            <tr className="border-b border-ink-100 text-left text-ink-400">
              <th className="pb-2 font-medium">Concepto</th>
              <th className="pb-2 text-right font-medium">Cant.</th>
              <th className="pb-2 text-right font-medium">Precio</th>
              <th className="pb-2 text-right font-medium">Importe</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-ink-100/60">
                <td className="py-2 text-ink-800">{item.description || "—"}</td>
                <td className="py-2 text-right text-ink-600">{item.quantity}</td>
                <td className="py-2 text-right text-ink-600">{formatEuro(item.unitPrice)}</td>
                <td className="py-2 text-right font-medium text-ink-900">
                  {formatEuro(item.quantity * item.unitPrice)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="ml-auto mt-4 w-full max-w-[220px] space-y-1 text-sm">
          <div className="flex justify-between text-ink-600">
            <span>Subtotal</span>
            <span>{formatEuro(subtotal)}</span>
          </div>
          {applyIva && (
            <div className="flex justify-between text-ink-600">
              <span>IVA (21%)</span>
              <span>{formatEuro(iva)}</span>
            </div>
          )}
          <div className="flex justify-between border-t border-ink-100 pt-1 font-display text-base font-bold text-ink-900">
            <span>Total</span>
            <span>{formatEuro(total)}</span>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-400">
          Presupuesto generado con la herramienta gratuita de Hogarex Barcelona (hogarex.es).
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-xs font-medium text-ink-600">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0v12a1 1 0 001 1h6a1 1 0 001-1V7" />
    </svg>
  );
}

function formatEuro(value: number): string {
  return value.toLocaleString("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 2 });
}

function formatDate(value: string): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
}
