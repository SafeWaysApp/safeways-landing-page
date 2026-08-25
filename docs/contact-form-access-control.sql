-- Run this in the Supabase SQL editor (same project as the SafeWays app).
create table if not exists public.contact_form_messages (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  email text,
  message text,
  author text
);

alter table public.contact_form_messages enable row level security;

-- The landing page's contact form is public and unauthenticated, so anyone
-- can insert a message — but only insert. No select/update/delete for the
-- anon role, so submitted messages can't be read back or tampered with
-- from the browser; only staff with direct Supabase dashboard/service-role
-- access can read them.
drop policy if exists "Anyone can submit a contact message" on public.contact_form_messages;
create policy "Anyone can submit a contact message"
  on public.contact_form_messages for insert
  to anon
  with check (true);
