import {
  businessTypeOptions,
  contactMethodOptions,
  interestOptions,
  limits,
  tradeOptions,
} from "@/lib/contact-options";

/**
 * Recibe el formulario de asesoramiento y lo reenvía a LEADS_WEBHOOK_URL
 * (Make, Zapier, n8n, Google Apps Script…), que se configura en Vercel.
 * Sin esa variable responde 503 y el formulario ofrece enviar por WhatsApp.
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

  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (!webhook) return json({ ok: false, error: "not_configured" }, 503);

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString(), source: request.headers.get("referer") ?? "" }),
    });
    if (!response.ok) return json({ ok: false, error: "webhook_failed" }, 502);
  } catch {
    return json({ ok: false, error: "webhook_unreachable" }, 502);
  }

  return json({ ok: true });
}
