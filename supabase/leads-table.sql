-- Tabla donde queda cada envío del formulario de asesoramiento gratuito
-- (components/ContactForm.tsx -> app/api/contacto/route.ts).
--
-- Cómo aplicarlo: Supabase Dashboard -> SQL Editor -> pegar y ejecutar este
-- archivo entero, una sola vez. No hace falta tocar nada más para que el
-- formulario empiece a guardar leads aquí.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  trade text not null,
  business_type text not null,
  zone text not null,
  name text not null,
  business_name text not null default '',
  method text not null,
  phone text not null default '',
  email text not null default '',
  interests text[] not null default '{}',
  message text not null default '',
  locale text not null default 'es',
  source text not null default ''
);

-- RLS activado: sin políticas de SELECT para nadie salvo el service role,
-- así que la clave pública (NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) puede
-- insertar leads pero no puede leerlos. Para ver los leads hay que entrar
-- al Table Editor de Supabase con tu cuenta.
alter table public.leads enable row level security;

create policy "Cualquiera puede insertar un lead"
  on public.leads
  for insert
  to anon
  with check (true);
