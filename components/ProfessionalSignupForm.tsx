"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { services } from "@/lib/services-data";
import { whatsappHref } from "@/lib/site-config";

const experienceOptions = [
  "Menos de 1 año",
  "1 a 3 años",
  "3 a 10 años",
  "Más de 10 años",
];

export function ProfessionalSignupForm() {
  const [name, setName] = useState("");
  const [rubro, setRubro] = useState(services[0]?.slug ?? "");
  const [experience, setExperience] = useState(experienceOptions[1]);
  const [zone, setZone] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const rubroLabel = services.find((s) => s.slug === rubro)?.name ?? rubro;
    const lines = [
      "Hola Hogarex, quiero unirme a la red de profesionales.",
      `Nombre: ${name}`,
      `Oficio: ${rubroLabel}`,
      `Experiencia: ${experience}`,
      zone ? `Zonas donde trabajo: ${zone}` : null,
      `Teléfono: ${phone}`,
      message ? `Mensaje: ${message}` : null,
    ].filter((line): line is string => line !== null);

    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl2 border border-ink-100 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="pro-name">
          <input
            id="pro-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Teléfono" htmlFor="pro-phone">
          <input
            id="pro-phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input"
            placeholder="600 000 000"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Tu oficio" htmlFor="pro-rubro">
          <select id="pro-rubro" value={rubro} onChange={(e) => setRubro(e.target.value)} className="input">
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Años de experiencia" htmlFor="pro-experience">
          <select
            id="pro-experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="input"
          >
            {experienceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Zonas de Barcelona donde trabajas" htmlFor="pro-zone">
        <input
          id="pro-zone"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="input"
          placeholder="Ej: Eixample, Gràcia, toda Barcelona..."
        />
      </Field>

      <Field label="Cuéntanos algo más (opcional)" htmlFor="pro-message">
        <textarea
          id="pro-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
          placeholder="Ej: Tengo carné de instalador de gas, disponibilidad de lunes a sábado..."
        />
      </Field>

      <button
        type="submit"
        className="w-full rounded-full bg-terracotta-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta-500/30 transition-transform hover:bg-terracotta-600 active:scale-95 sm:w-auto"
      >
        Quiero unirme a la red
      </button>
      <p className="text-xs text-ink-400">
        Al enviar se abre WhatsApp con tus datos ya redactados para que lo confirmes. Te
        contactamos para validar tu alta.
      </p>

      {sent && (
        <p className="rounded-xl2 border border-terracotta-200 bg-terracotta-50 p-4 text-sm text-terracotta-700">
          Hemos abierto WhatsApp con tu solicitud de alta. Confirma el envío y te contactaremos
          para validar tu perfil.
        </p>
      )}
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
