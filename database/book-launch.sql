-- Additive book-only namespace. No objects belonging to other projects change.
begin;
do $$ begin
  if not exists(select 1 from pg_roles where rolname='fu_book_writer') then
    create role fu_book_writer nologin noinherit nosuperuser nocreatedb nocreaterole nobypassrls;
  end if;
end $$;
-- The project administrator must be able to assign ownership to this new role.
do $$ begin execute format('grant fu_book_writer to %I',current_user); end $$;
create schema if not exists fu_book authorization fu_book_writer;
revoke all on schema fu_book from public, anon, authenticated;
grant usage on schema extensions to fu_book_writer;

create table if not exists fu_book.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null check(length(email) between 5 and 254 and email=lower(btrim(email))),
  registered_at timestamptz not null default now(),
  consent_at timestamptz not null default now(),
  consent_version text not null,
  source text not null default 'web' check(length(source)<=64),
  locale text not null default 'es' check(locale in ('es','en')),
  status text not null default 'registered' check(status in ('registered','unsubscribed'))
);
create table if not exists fu_book.rate_limits (
  connection_hash text primary key check(length(connection_hash)=64),
  window_started_at timestamptz not null default now(),
  attempts integer not null default 1
);
create table if not exists fu_book.settings (
  key text primary key,
  value text not null
);
alter table fu_book.subscribers owner to fu_book_writer;
alter table fu_book.rate_limits owner to fu_book_writer;
alter table fu_book.settings owner to fu_book_writer;
alter table fu_book.subscribers enable row level security;
alter table fu_book.rate_limits enable row level security;
alter table fu_book.settings enable row level security;
revoke all on all tables in schema fu_book from public, anon, authenticated;

create or replace function public.fu_book_register(p_email text,p_source text,p_locale text,p_connection_hash text,p_secret text)
returns jsonb language plpgsql security definer set search_path='' as $$
declare v_attempts integer;
begin
  if not exists(select 1 from fu_book.settings where key='registration_secret_sha256' and value=encode(extensions.digest(p_secret,'sha256'),'hex')) then
    raise insufficient_privilege using message='Book registration credential rejected';
  end if;
  if p_email is null or length(p_email)>254 or p_email<>lower(btrim(p_email)) or p_email !~ '^[^[:space:]@<>]+@[^[:space:]@<>]+\.[^[:space:]@<>]+$'
     or p_source is null or length(p_source)>64 or p_locale not in ('es','en') or p_connection_hash !~ '^[a-f0-9]{64}$' then
    raise invalid_parameter_value using message='Invalid book registration';
  end if;
  insert into fu_book.rate_limits as r(connection_hash) values(p_connection_hash)
  on conflict(connection_hash) do update set
    attempts=case when r.window_started_at < now()-interval '10 minutes' then 1 else r.attempts+1 end,
    window_started_at=case when r.window_started_at < now()-interval '10 minutes' then now() else r.window_started_at end
  returning attempts into v_attempts;
  if v_attempts>30 then return jsonb_build_object('limited',true); end if;
  -- Cleanup only transient rate-limit records in this new namespace.
  delete from fu_book.rate_limits where window_started_at<now()-interval '2 days';
  insert into fu_book.subscribers(email,consent_version,source,locale)
    values(p_email,'book-launch-2026-10-19',p_source,p_locale)
    on conflict(email) do nothing;
  -- Identical response for new, existing and previously unsubscribed addresses.
  -- Existing opt-outs are never silently reactivated.
  return jsonb_build_object('accepted',true);
end $$;
-- Transfer ownership to a NOLOGIN role with access only to book tables.
grant create on schema public to fu_book_writer;
alter function public.fu_book_register(text,text,text,text,text) owner to fu_book_writer;
revoke create on schema public from fu_book_writer;
revoke all on function public.fu_book_register(text,text,text,text,text) from public,anon,authenticated;
grant execute on function public.fu_book_register(text,text,text,text,text) to anon;
comment on function public.fu_book_register(text,text,text,text,text) is 'El que guía: narrow write-only registration, requires private application secret; no list-reading capability.';
notify pgrst,'reload schema';
commit;
