# Prototipo web de diccionario de colocaciones

Prototipo de un diccionario multilingüe de colocaciones con búsqueda real contra base de datos. Desarrollado para pruebas de usuario.

- **Frontend:** Vercel (React + Vite)
- **Base de datos:** Supabase (PostgreSQL)
- **Idiomas de búsqueda:** Inglés, Español, Portugués, Francés, Chino Mandarín

---

## 1. Requisitos previos para desarrollo local

- Node.js 18+
- Una cuenta gratuita en [supabase.com](https://supabase.com)
- Una cuenta gratuita en [vercel.com](https://vercel.com) (para despliegue)

---

## 2. Configuración local

```bash
# Instalar dependencias
npm install

# Crear archivo de variables de entorno (no se sube a git)
cp .env.local.example .env.local
# → Edita .env.local con tus credenciales de Supabase

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000
```

**Variables de entorno requeridas** (en `.env.local`):

```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
```

Ambos valores se encuentran en el dashboard de Supabase: **Settings → API**.

---

## 3. Estructura del proyecto

```
platcol_mockweb/
├── supabase/
│   ├── 01_schema.sql          # Schema de la base de datos
│   └── 02_seed_data.sql       # Datos de ejemplo (~35 colocaciones)
│
├── src/
│   ├── main.tsx               # Punto de entrada: envuelve App en BrowserRouter
│   ├── App.tsx                # Rutas (react-router-dom), gestiona sidebar
│   │
│   ├── lib/
│   │   └── supabaseClient.ts  # Singleton del cliente Supabase
│   │
│   ├── types/
│   │   └── collocation.ts     # Tipos TypeScript compartidos
│   │
│   ├── hooks/
│   │   ├── useSearch.ts       # Búsqueda paginada contra Supabase
│   │   ├── useCollocation.ts  # Fetch de una entrada por ID
│   │   └── useAutocomplete.ts # Sugerencias con debounce de 200ms
│   │
│   ├── components/
│   │   ├── Header.tsx         # Barra de búsqueda sticky (rutas no-home)
│   │   ├── Footer.tsx         # Pie de página con selector de idioma de UI
│   │   ├── Sidebar.tsx        # Menú lateral deslizante
│   │   ├── HomePage.tsx       # Página principal con buscador
│   │   ├── SearchResults.tsx  # Lista de resultados paginada
│   │   ├── DictionaryEntry.tsx  # Entrada de diccionario con 5 pestañas
│   │   ├── AboutProject.tsx   # Información sobre el proyecto
│   │   ├── Publications.tsx   # Publicaciones académicas relacionadas con el proyecto
│   │   ├── RelatedPlatforms.tsx  # Otras plataformas relacionadas con el proyecto
│   │   ├── UserGuide.tsx      # Guía de uso
│   │   ├── FAQ.tsx            # Preguntas comunes en relación con el diccionario o proyecto
│   │   ├── Contact.tsx        # Formulario de contacto
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   ├── CookiePolicy.tsx
│   │   └── ui/                # Componentes shadcn/ui (no modificar)
│   │
│   ├── contexts/
│   │   └── PageLanguageContext.tsx  # Idioma de la interfaz (≠ idioma de búsqueda)
│   │
│   └── utils/
│       └── translations.ts    # Cadenas de texto en 5 idiomas
│
├── .env.local                 # Credenciales (NO subir a git)
├── .gitignore
├── vercel.json                # Configuración de despliegue
├── vite.config.ts
└── package.json
```

---

## 4. Arquitectura y decisiones de diseño

### Routing (react-router-dom)

Todas las páginas tienen URL propia para poder compartirlas. 

| URL | Componente |
|-----|-----------|
| `/` | `HomePage` |
| `/search?q=...&lang=en&mode=lemma&page=1` | `SearchResults` |
| `/entry/:id` | `DictionaryEntry` |
| `/about` | `AboutProject` |
| `/publications` | `Publications` |
| `/related-platforms` | `RelatedPlatforms` |
| `/user-guide` | `UserGuide` |
| `/faq` | `FAQ` |
| `/contact` | `Contact` |
| `/privacy` | `PrivacyPolicy` |
| `/terms` | `TermsOfService` |
| `/cookies` | `CookiePolicy` |

El `vercel.json` tiene una rewrite rule que redirige todas las rutas a `index.html`, necesaria para que el routing client-side funcione en producción.

### Doble sistema de idiomas

Hay **dos idiomas independientes** que no se deben confundir:

| | Idioma de búsqueda | Idioma de la interfaz |
|-|---|---|
| **Controla** | Qué "diccionario" se consulta (EN, ES, PT, FR, ZH) | En qué idioma se muestran los menús, etiquetas y textos de la UI |
| **Gestionado por** | URL param `lang` + `localStorage` | `PageLanguageContext` + `localStorage` |
| **Selector en** | HomePage (botones de idioma) y Header (dropdown) | Footer (selector de idioma de página) |

### Modos de búsqueda

| Modo | Qué busca | Columna consultada |
|------|-----------|-------------------|
| **Lema** | El texto de la colocación | `collocations.collocation` |
| **Semántico** | La definición | `collocations.definition` |
| **Literal** | Dentro de los ejemplos de uso | `examples.sentence` |

Los tres modos siempre filtran por el idioma de búsqueda seleccionado (`collocations.language = selectedLanguage`).

### Backend: Supabase

El backend es **Supabase** — una plataforma cloud que proporciona base de datos PostgreSQL, API REST y sistema de permisos. El frontend consulta Supabase directamente usando `@supabase/supabase-js`, sin necesidad de escribir ni mantener un servidor Node.js/Express propio.

Las Row Level Security (RLS) de Supabase garantizan que desde el navegador solo se puede leer (SELECT), nunca escribir. Por eso la `anon key` es segura para incluir en el bundle del frontend.

---

## 5. Base de datos

### Tablas

```
collocations
  id            UUID (PK)
  language      TEXT  — 'en' | 'es' | 'pt' | 'fr' | 'zh'
  collocation   TEXT  — "make progress"
  base_word     TEXT  — "make"
  collocate     TEXT  — "progress"
  structure     TEXT  — "verb + noun"
  domain        TEXT  — "Education & Development"
  cefr_level    TEXT  — "B1"
  definition    TEXT
  usage_notes   JSONB — [{"title": "...", "content": "..."}]

examples
  id              UUID (PK)
  collocation_id  UUID (FK → collocations.id)
  sentence        TEXT
  sort_order      INT

collocation_translations
  source_id  UUID (FK → collocations.id)
  target_id  UUID (FK → collocations.id)
  — Relación bidireccional entre colocaciones en distintos idiomas
  — Si "make progress" (EN) traduce a "hacer progresos" (ES),
    existen AMBAS filas: source=EN target=ES y source=ES target=EN

related_collocations
  collocation_id  UUID (FK → collocations.id)
  related_id      UUID (FK → collocations.id)
  sort_order      INT
  — Colocaciones relacionadas DENTRO del mismo idioma
```

### Configuración inicial

1. Abre el **SQL Editor** en tu proyecto de Supabase
2. Ejecuta `supabase/01_schema.sql` — crea las tablas, índices y políticas RLS
3. Ejecuta `supabase/02_seed_data.sql` — inserta ~35 colocaciones de ejemplo

---

## 6. Añadir o modificar datos

### Añadir una nueva colocación (ejemplo en inglés)

En el **SQL Editor** de Supabase:

```sql
-- 1. Insertar la colocación
insert into collocations (language, collocation, base_word, collocate, structure, domain, cefr_level, definition, usage_notes)
values (
  'en', 'break the ice', 'break', 'ice', 'verb + noun',
  'Communication', 'B2',
  'To say or do something to relieve tension or awkwardness in a social situation.',
  '[{"title":"Register","content":"Informal; common in social and professional networking contexts."}]'
) returning id;
-- → copia el UUID que devuelve

-- 2. Insertar ejemplos (usa el UUID del paso anterior)
insert into examples (collocation_id, sentence, sort_order) values
('UUID-AQUI', 'She told a joke to break the ice at the start of the meeting.', 1),
('UUID-AQUI', 'The team-building activity helped break the ice between new employees.', 2);
```

### Añadir la traducción de una colocación existente

Si "make progress" (EN, id=`A`) ya existe y quieres añadir "faire des progrès" (FR):

```sql
-- 1. Insertar la colocación en francés
insert into collocations (...) values ('fr', 'faire des progrès', ...) returning id;
-- → obtienes id=B

-- 2. Crear la relación de traducción (bidireccional)
insert into collocation_translations (source_id, target_id) values
('A', 'B'),  -- EN → FR
('B', 'A');  -- FR → EN
```

### Acceso directo desde la interfaz web de Supabase

Puedes editar datos directamente en **Table Editor** sin escribir SQL. Útil para corregir definiciones o añadir ejemplos puntualmente.

---

## 7. Internacionalización (i18n)

Todos los textos de la interfaz están centralizados en [`src/utils/translations.ts`](src/utils/translations.ts).

Para añadir una nueva cadena de texto:

```typescript
// En translations.ts, añadir al objeto translations:
miNuevaClave: {
  en: 'My new text',
  es: 'Mi nuevo texto',
  pt: 'Meu novo texto',
  fr: 'Mon nouveau texte',
  zh: '我的新文本',
},
```

Para usar la clave en un componente:

```tsx
import { getTranslation } from '../utils/translations';
import { usePageLanguage } from '../contexts/PageLanguageContext';

const { pageLanguage } = usePageLanguage();
// ...
<p>{getTranslation('miNuevaClave', pageLanguage)}</p>
```

> **Importante:** `pageLanguage` es el idioma de la interfaz. No confundir con el idioma de búsqueda (`lang` en la URL), que determina en qué diccionario se busca.

---

## 8. Despliegue en Vercel

### Primera vez

1. Sube el código a un repositorio GitHub (asegúrate de que `.env.local` está en `.gitignore`)
2. En [vercel.com](https://vercel.com): **New Project → importa el repo**
3. En **Environment Variables**, añade:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Haz clic en **Deploy**

Vercel detecta automáticamente que es un proyecto Vite y usa la configuración de `vercel.json`.

### Despliegues posteriores

Cada `git push` a la rama `main` dispara un despliegue automático en Vercel.

### CORS (hacer después del primer despliegue)

En Supabase: **Settings → API → CORS** → añade tu dominio de Vercel:
```
https://tu-proyecto.vercel.app
```

### Comandos de build

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción → carpeta build/
npm run preview  # Previsualizar el build de producción localmente
```

---

## 9. Flujos principales

### Búsqueda

```
HomePage
  → usuario elige idioma de búsqueda (EN/ES/PT/FR/ZH)
  → elige modo (lema / semántico / literal)
  → (opcional) filtra por palabra base, colocado, estructura, dominio
  → escribe en el buscador (autocomplete desde Supabase)
  → submit → navega a /search?q=...&lang=...&mode=...&page=1

SearchResults
  → lee params de la URL
  → consulta Supabase con useSearch hook
  → muestra resultados paginados (8 por página)
  → click en resultado → navega a /entry/:id
```

### Entrada de diccionario

```
DictionaryEntry (/entry/:id)
  → lee :id de la URL con useParams
  → carga datos con useCollocation hook:
      - colocación + metadatos
      - ejemplos de uso
      - traducciones (links a otras entradas del diccionario)
      - colocaciones relacionadas (links a otras entradas)
      - notas de uso
  → botón "Back to results" → navigate(-1)
  → pestaña Traducciones → cada ítem es un <Link to="/entry/:targetId">
  → pestaña Relacionadas → cada ítem es un <Link to="/entry/:relatedId">
```

### Idioma de la interfaz

```
Footer → selector de idioma de página
  → guarda en PageLanguageContext (y localStorage)
  → todos los textos de la UI se re-renderizan en el nuevo idioma
  → NO afecta al idioma de búsqueda ni a los resultados
```

---

## 10. Mantenimiento

### Actualizar contenido de páginas estáticas

Los componentes [`AboutProject.tsx`](src/components/AboutProject.tsx), [`Publications.tsx`](src/components/Publications.tsx), [`UserGuide.tsx`](src/components/UserGuide.tsx), [`FAQ.tsx`](src/components/FAQ.tsx) y los legales contienen el texto directamente en el código. Para actualizarlos, edita directamente el componente correspondiente.

### Añadir un nuevo idioma de búsqueda

1. Añadir el código de idioma al tipo `Language` en [`src/types/collocation.ts`](src/types/collocation.ts)
2. Añadir las traducciones de UI correspondientes en [`src/utils/translations.ts`](src/utils/translations.ts)
3. Añadir el flag y la etiqueta en `Header.tsx` y `HomePage.tsx`
4. Actualizar el CHECK constraint en Supabase: `check (language in ('en','es','pt','fr','zh', 'nuevo'))`
5. Insertar colocaciones con el nuevo idioma en la base de datos

### Añadir una nueva página

1. Crear el componente en `src/components/MiPagina.tsx`
2. Añadir la ruta en [`src/App.tsx`](src/App.tsx): `<Route path="/mi-ruta" element={<MiPagina />} />`
3. Añadir el enlace en [`src/components/Sidebar.tsx`](src/components/Sidebar.tsx) o [`src/components/Footer.tsx`](src/components/Footer.tsx)

### Cambiar el número de resultados por página

En [`src/hooks/useSearch.ts`](src/hooks/useSearch.ts), línea 5:
```typescript
export const PAGE_SIZE = 8; // ← cambiar aquí
```

### Variables de entorno en producción

Nunca subas `.env.local` a git. Las variables de entorno en Vercel se gestionan desde **Settings → Environment Variables** en el dashboard del proyecto.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| React 18 + TypeScript | Framework UI |
| Vite | Build tool y servidor de desarrollo |
| react-router-dom | Routing client-side con URLs reales |
| Tailwind CSS v4 | Estilos |
| Radix UI + shadcn/ui | Componentes de interfaz accesibles |
| Supabase (PostgreSQL) | Base de datos y API |
| @supabase/supabase-js | Cliente Supabase para el frontend |
| Lucide React | Iconografía |
| Vercel | Despliegue y hosting |

---

## Financiación

Proyecto PLATCOL financiado por FAPESP, proceso n.º 2020/01783-2. Coordinado por la Prof. Dra. Adriane Orenha-Ottaiano (UNESP).
