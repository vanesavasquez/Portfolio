# Changelog — Vanesa Vasquez Portfolio

## [2026-03-27] — Versiones HTML de CVs

### Nuevos Archivos
- `docs/cv/cv-es.html`: Versión en español del CV.
- `docs/cv/cv-en.html`: Versión en inglés del CV.

### Diseño
- **Estructura Minimalista y Orgánica**: Basado en una sola columna con márgenes amplios para mayor respiro visual (utilizando escala Fibonacci del sistema de diseño).
- **Tipografía**: Implementación de fuente *Chillax* con clara jerarquía visual (h1, h2, meta-text).
- **Paleta por defecto**: *Botanical Calm* (fondo crema `Linen`, textos `Charcoal`, y acentos `Sage Green`).
- **Tags visuales**: Las *skills* usan el componente `tag` diseñado previamente para integrarse al sistema visual general.
- *(Nota)*: Se utilizaron textos realistas de UX/UI Designer como placeholders ya que la extracción directa del PDF local presentó limitaciones de entorno; la estructura está lista para que reemplaces el texto definitivo copiando desde tus PDFs originales.

---

## [2026-03-26] — Badges, Tags/Chips y Documentación de Paletas

### Separación de componentes
- **Badges (Display):** Status (Error, Warning, Success, Info con iconos) + Neutral
  - Backgrounds adaptativos con `color-mix()` según paleta activa
- **Tags / Chips (Interactive):** Dismissible (×), Links (→), Filter (toggle)
  - Dismiss con animación fade-out
  - Filter toggle con indicador ✓

### Archivos nuevos
- `design-system/midnight-ember.md` — Documentación paleta Midnight Ember
- `design-system/golden-hour.md` — Documentación paleta Golden Hour
- `design-system/botanical-calm.md` — Documentación paleta Botanical Calm
- `design-system/terra-nova.md` — Documentación paleta Terra Nova

---

## [2026-03-26] — Graduaciones de Color

### Agregado
- Sección **Graduaciones · 100–1000** en `design-system/index.html`
  - 10 pasos por color (100=más claro → 500=base → 1000=más oscuro)
  - Generación dinámica via interpolación HSL (hue constante, lightness variable)
  - Paso 500 con outline como indicador del color base
  - Hex visible al hacer hover sobre cada paso
  - Responsive: wrap a 5 columnas en mobile
  - Se actualiza dinámicamente al cambiar de paleta

---

## [2026-03-25] — Organización del Proyecto

### Estructura creada
- `design-system/` — Design System HTML + fonts Chillax (woff2)
- `assets/brand/` — Logo e identidad Little Planet
- `assets/palettes/` — 4 paletas de color + palette.txt
- `assets/illustrations/` — Ilustraciones decorativas
- `docs/cv/` — CVs renombrados (ES / EN)
- `docs/wireframes/` — WEB.pdf y Mobile.pdf
- `archive/` — Zips originales y fonts raw
- `README.md` — Documentación del proyecto

### Archivos movidos y renombrados
- `CV_LedesmaVanesa_UXUIdesigner.pdf` → `docs/cv/CV_VanesaVasquez_UXUIdesigner_ES.pdf`
- `_CV_LedesmaVanesa_UXdesigner_Ingles.pdf` → `docs/cv/CV_VanesaVasquez_UXdesigner_EN.pdf`
- `WEB.pdf` → `docs/wireframes/WEB.pdf`
- `Mobile.pdf` → `docs/wireframes/Mobile.pdf`
- `image.png-1.png` → `assets/brand/little-planet-logos.png`
- `image.png.png` → `assets/brand/brand-artwork.png`
- `Design Collaboration.png` → `assets/illustrations/`
- `Prototyping Structure.png` → `assets/illustrations/`
- `Chillax_Complete.zip` → `archive/`
- `Paleta ad style.zip` → `archive/`
- `Chillax_Complete/` → `archive/` (original completo)

### Actualizado
- `design-system/index.html` — Rutas relativas actualizadas a nueva estructura

---

## [2026-03-25] — Design System Inicial

### Agregado
- `design-system.html` → ahora `design-system/index.html`
  - 4 paletas de color intercambiables con preview de Home
  - Escala tipográfica dramática con Chillax (200–700)
  - Sistema de spacing Fibonacci (base 4px)
  - Grilla de 12 columnas tipo Bootstrap
  - Componentes UI: botones, cards, inputs, tags
- `CHANGELOG.md` — Registro de cambios

### Renombrado (paletas)
- `palette.png.png` → `Midnight Ember.png`
- `Light Warmth Palette.png` → `Golden Hour.png`
- `Minimalist Palette.png` → `Botanical Calm.png`
- `Moody Earth Tones Palette.png` → `Terra Nova.png`

### Notas
- Brand: **Vanesa Vasquez**
- Tipografía: **Chillax** (variable, 200–700)
- Tecnología destino: React vanilla
- Wireframes en `docs/wireframes/` para estructura web y mobile
