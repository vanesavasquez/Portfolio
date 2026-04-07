# Midnight Ember — Design Palette

> Oscuro, dramático, cálido. Ideal para interfaces que priorizan contraste y elegancia.

## Colores base

| Nombre | Hex | Uso principal |
|--------|-----|---------------|
| Black | `#050609` | Background principal |
| Almond Silk | `#F8EAE6` | Texto, secondary |
| Tangerine Dream | `#F59356` | Primary, CTAs, acentos |
| Toffee Brown | `#C8937D` | Texto secundario, muted |
| Rich Mahogany | `#3C0000` | Accent, acentos profundos |

## Roles semánticos (CSS Variables)

| Variable | Valor | Función |
|----------|-------|---------|
| `--color-bg` | `#050609` | Fondo general |
| `--color-surface` | `#1c1418` | Cards, nav, elementos elevados |
| `--color-surface-2` | `#2a2025` | Hover states, inputs |
| `--color-primary` | `#F59356` | Botones primarios, links, filters activos |
| `--color-secondary` | `#F8EAE6` | Botones secondary, badges |
| `--color-accent` | `#3C0000` | Botón accent, detalles oscuros |
| `--color-text` | `#F8EAE6` | Texto principal |
| `--color-text-muted` | `#F8EAE6` | Labels, captions, placeholders |
| `--color-border` | `#3a2e32` | Bordes, divisores |

## Graduaciones (100–1000)

Cada color base se expande en 10 pasos mediante interpolación HSL:
- **100:** más claro (L→96%)
- **500:** color base (marcado con outline)
- **1000:** más oscuro (L→5%)

Los valores exactos se generan dinámicamente en `index.html`.

## Colores semánticos (Status Badges)

| Estado | Color | Uso |
|--------|-------|-----|
| Error | `#DD4444` | Errores, alertas críticas |
| Warning | `#D4930E` | Advertencias |
| Success | `#2E9B5F` | Confirmaciones, éxito |
| Info | `#5B7EC2` | Información, avisos |

## Tipografía

- **Font:** Chillax Variable (200–700)
- **Tema:** Dark → texto claro sobre fondo oscuro
- Los textos Display/H1 en Almond Silk crean alto contraste contra el fondo Black

## Notas de uso

- Theme: **Dark mode**
- Contraste texto/fondo: alto (WCAG AA+)
- El Tangerine Dream como primary aporta calidez al tema oscuro
- Rich Mahogany funciona como accent sutil en botones de tono bajo
