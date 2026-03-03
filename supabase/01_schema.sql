-- PLATCOL Schema
-- Ejecutar en: Supabase > SQL Editor

-- Extensión para búsqueda con trigrama (ILIKE eficiente)
create extension if not exists pg_trgm;

-- ─────────────────────────────────────────────────────────────────────────────
-- TABLA PRINCIPAL: una fila por colocación por idioma
-- ─────────────────────────────────────────────────────────────────────────────
create table collocations (
  id          uuid primary key default gen_random_uuid(),
  language    text not null check (language in ('en','es','pt','fr','zh')),
  collocation text not null,    -- ej: "make progress" / "hacer progresos"
  base_word   text not null,    -- ej: "make" / "hacer"
  collocate   text not null,    -- ej: "progress" / "progresos"
  structure   text not null,    -- ej: "verb + noun"
  domain      text not null,    -- ej: "Education & Development"
  cefr_level  text not null,    -- A1 A2 B1 B2 C1 C2
  definition  text not null,    -- definición en el idioma de la colocación
  usage_notes jsonb not null default '[]',  -- [{title, content}]
  created_at  timestamptz default now()
);

-- ─────────────────────────────────────────────────────────────────────────────
-- EJEMPLOS: frases de uso para cada colocación
-- ─────────────────────────────────────────────────────────────────────────────
create table examples (
  id               uuid primary key default gen_random_uuid(),
  collocation_id   uuid not null references collocations(id) on delete cascade,
  sentence         text not null,
  sort_order       int not null default 0
);

-- ─────────────────────────────────────────────────────────────────────────────
-- TRADUCCIONES: relaciones entre colocaciones en distintos idiomas
-- Ej: "make progress" (EN) ↔ "hacer progresos" (ES)
-- La relación es bidireccional: insertar A→B y B→A
-- ─────────────────────────────────────────────────────────────────────────────
create table collocation_translations (
  source_id   uuid not null references collocations(id) on delete cascade,
  target_id   uuid not null references collocations(id) on delete cascade,
  primary key (source_id, target_id)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- COLOCACIONES RELACIONADAS: dentro del mismo idioma
-- ─────────────────────────────────────────────────────────────────────────────
create table related_collocations (
  collocation_id  uuid not null references collocations(id) on delete cascade,
  related_id      uuid not null references collocations(id) on delete cascade,
  sort_order      int not null default 0,
  primary key (collocation_id, related_id)
);

-- ─────────────────────────────────────────────────────────────────────────────
-- ÍNDICES para búsqueda eficiente
-- ─────────────────────────────────────────────────────────────────────────────
create index on collocations using gin (collocation gin_trgm_ops);
create index on collocations using gin (base_word gin_trgm_ops);
create index on collocations using gin (collocate gin_trgm_ops);
create index on collocations using gin (definition gin_trgm_ops);
create index on examples using gin (sentence gin_trgm_ops);
create index on collocations (language);
create index on collocations (domain);
create index on collocations (structure);
create index on collocations (cefr_level);

-- ─────────────────────────────────────────────────────────────────────────────
-- ROW LEVEL SECURITY: solo lectura pública (sin autenticación)
-- ─────────────────────────────────────────────────────────────────────────────
alter table collocations enable row level security;
alter table examples enable row level security;
alter table collocation_translations enable row level security;
alter table related_collocations enable row level security;

create policy "Public read collocations" on collocations for select using (true);
create policy "Public read examples" on examples for select using (true);
create policy "Public read translations" on collocation_translations for select using (true);
create policy "Public read related" on related_collocations for select using (true);
