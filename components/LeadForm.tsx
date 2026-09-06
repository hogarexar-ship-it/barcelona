"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { services } from "@/lib/services-data";
import { siteConfig } from "@/lib/site-config";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]?.slug ?? "");
  const [zone, setZone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const serviceLabel = services.find((s) => s.slug === service)?.name ?? service;
    const lines = [
      `Hola Hogarex, quiero solicitar un servicio de ${serviceLabel}.`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      zone ? `Zona: ${zone}` : null,
      message ? `Detalle: ${message}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl2 border border-ink-100 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            placeholder="600 000 000"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Servicio" htmlFor="service">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="input"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Zona / barrio (opcional)" htmlFor="zone">
          <input
            id="zone"
            name="zone"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="input"
            placeholder="Ej: Gràcia"
          />
        </Field>
      </div>

      <Field label="Contanos qué necesitás" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
          placeholder="Ej: Tengo una fuga debajo de la pila de la cocina"
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-600 sm:w-auto"
      >
        Enviar solicitud por WhatsApp
      </button>
      <p className="text-xs text-ink-400">
        Al enviar el formulario se abre WhatsApp con tu mensaje ya redactado para que lo confirmes.
        También podés escribirnos o llamarnos directamente.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-ink-800">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}
