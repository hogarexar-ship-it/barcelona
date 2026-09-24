import { cookies } from "next/headers";
import {
  businessTypeOptions,
  contactMethodOptions,
  interestOptions,
  limits,
  tradeOptions,
} from "@/lib/contact-options";
import { createClient } from "@/utils/supabase/server";

/**
 * Recibe el formulario de asesoramiento, guarda el lead en Supabase (tabla
 * `leads`, ver supabase/leads-table.sql) y, si está configurada, lo reenvía
 * además a LEADS_WEBHOOK_URL (Make, Zapier, n8n, Google Apps Script…). El
 * webhook es opcional y de mejor esfuerzo: si falla o no está configurado,
 * el lead ya quedó guardado en Supabase y el formulario igual muestra éxito.
 */

type Lead = {
  trade: string;
  businessType: string;
  zone: string;
  name: string;
  businessName: string;
  method: string;
  phone: string;
  email: string;
  interests: string[];
  message: string;
  /** Idioma en el que se rellenó el formulario (es / ca). */
  locale: string;
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function oneOf(value: unknown, options: { value: string }[]): string | null {
  return typeof value === "string" && options.some((o) => o.value === value) ? value : null;
}

function parseLead(body: Record<string, unknown>): Lead | null {
  const trade = oneOf(body.trade, tradeOptions);
  const businessType = oneOf(body.businessType, businessTypeOptions);
  const method = oneOf(body.method, contactMethodOptions);
  const name = text(body.name, limits.name);
  const zone = text(body.zone, limits.zone);
  const phone = text(body.phone, 20);
  const email = text(body.email, 200);
  if (!trade || !businessType || !method || !name || !zone) return null;
  if (method === "email" ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) : !/^\+?[0-9 ]{9,18}$/.test(phone)) return null;

  const interests = Array.isArray(body.interests)
    ? body.interests.filter((i): i is string => oneOf(i, interestOptions) !== null)
    : [];

  return {
    trade,
    businessType,
    zone,
    name,
    businessName: text(body.businessName, limits.business),
    method,
    phone: method === "email" ? "" : phone,
    email: method === "email" ? email : "",
    interests,
    message: text(body.message, limits.message),
    locale: body.locale === "ca" ? "ca" : "es",
  };
}

export async function POST(request: Request): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Campo trampa: los bots lo rellenan, las personas no lo ven.
  if (typeof body.website === "string" && body.website.length > 0) return json({ ok: true });

  const lead = parseLead(body);
  if (!lead) return json({ ok: false, error: "invalid_fields" }, 400);

  const source = request.headers.get("referer") ?? "";

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase.from("leads").insert({
    trade: lead.trade,
    business_type: lead.businessType,
    zone: lead.zone,
    name: lead.name,
    business_name: lead.businessName,
    method: lead.method,
    phone: lead.phone,
    email: lead.email,
    interests: lead.interests,
    message: lead.message,
    locale: lead.locale,
    source,
  });
  if (error) return json({ ok: false, error: "db_failed" }, 502);

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString(), source }),
      });
    } catch {
      // El lead ya quedó guardado en Supabase; el webhook es solo un reenvío adicional.
    }
  }

  return json({ ok: true });
}
