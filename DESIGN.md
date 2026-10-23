---
name: PlastoGuard Industries
description: Precision industrial enclosure systems and technical hardware manufacturing
colors:
  primary: "#F97316"
  primary-hover: "#ea580c"
  primary-fixed: "#ffedd5"
  machinery-navy: "#020617"
  cad-slate: "#334155"
  surface-ice: "#f8f9ff"
  surface-white: "#ffffff"
  slate-surface: "#f8fafc"
  text-primary: "#0b1c30"
  text-muted: "#45464d"
  border-subtle: "#e2e8f0"
  border-cad: "#cbd5e1"
typography:
  display:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "48px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  full: "9999px"
spacing:
  unit: "8px"
  gutter: "24px"
  margin-mobile: "16px"
  margin-desktop: "48px"
  container-max: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.machinery-navy}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  card-surface:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.slate-surface}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    textColor: "{colors.machinery-navy}"
---

# Design System: PlastoGuard Industries

## Overview

**Creative North Star: "Industrial Precision Bench"**

PlastoGuard's visual system evokes the cleanliness, exactness, and mechanical certainty of a high-end electronics prototyping and testing laboratory. Enclosure models are engineered hardware products, not consumer gadgets; every surface communicates dimensional precision, ingress protection integrity, and factory-direct capability. The interface uses generous, cool-tinted negative space (Technical Surface Ice) overlaid with subtle CAD-inspired blueprint dot grids, crisp drafting borders, and authoritative Machinery Deep Navy structural headers.

Signal Safety Orange is deployed as a high-contrast functional accent—mirroring physical safety flags, IP rating seals, and urgent procurement triggers. Typography balances the architectural solidity of Hanken Grotesk for section titles with the immaculate legibility of Inter for specifications, punctuated by JetBrains Mono for exact dimensions, SKUs, and tolerances.

The visual system strictly avoids consumer e-commerce frivolity: no soft pastel gradients, no bubbly floating cards, and no generic office stock photography. Every piece of imagery focuses on authentic plastic injection enclosures, precision CNC milling details, PCB mounting bosses, and real manufacturing assets.

**Key Characteristics:**
- **CAD Drafting Precision:** Clean 1px boundary lines (`#334155` at low opacity), blueprint dot grids, and monospace technical labels.
- **High-Contrast Safety Accents:** Purposeful Signal Safety Orange (`#F97316`) reserved for primary RFQ actions, verified IP badges, and series flags.
- **Physical Hardware Depth:** Surfaces sit flat or subtly grounded at rest (`shadow-sm`), elevating with tangible lift (`-translate-y-1.5` and `shadow-xl`) on hover.
- **Spec-First Hierarchy:** Technical measurements (L × W × H mm), material compounds (Polycarbonate/ABS), and ingress seals take visual priority over generic sales copy.

## Colors

The palette balances clinical drafting neutrality with high-visibility industrial signals.

### Primary
- **Signal Safety Orange** (`#F97316`): The active signal hue. Used exclusively for high-intent conversion points (RFQ submission buttons, catalog exploration CTAs), featured series ribbons, and verified certification seals.
- **Deep Signal Orange** (`#ea580c`): Hover state for primary interactive buttons.
- **Safety Orange Tint** (`#ffedd5`): Soft backdrop fill for highlighted alert chips, featured card banners, and active category tags.

### Secondary
- **Machinery Deep Navy** (`#020617`): Structural authority hue. Defines primary navigation bars, hero headers, footer slabs, and deep text hierarchy.
- **Drafting CAD Slate** (`#334155`): The drafting line color. Applied to technical dot grids (`technical-grid`), table headers, secondary icon containers, and container borders.

### Neutral
- **Technical Surface Ice** (`#f8f9ff`): Global canvas background color. Cooler and cleaner than off-white, providing clinical contrast against hardware enclosures.
- **Clean Room White** (`#ffffff`): The resting canvas for product cards, specifications tables, modal dialogs, and mega-menus.
- **Slate Surface** (`#f8fafc`): Subtle neutral container fill for technical inputs, specification callout blocks, and inactive table rows.
- **Text Primary** (`#0b1c30`): Ultra-dark navy body text ensuring maximum WCAG AAA legibility.
- **Text Muted** (`#45464d`): Secondary metadata, model descriptions, and helper annotations.
- **Drafting Border** (`#cbd5e1`): Subtle 1px structural framing for cards and dividers.

### Named Rules
**The Signal Scarcity Rule.** Signal Safety Orange is strictly reserved for actionable moments, active states, and verified certification emblems. It never coats whole backgrounds or decorative flourishes.

**The Blueprint Framing Rule.** Secondary cards and structural panels must use hairline 1px CAD borders (`#334155` at 15–30% opacity) rather than heavy drop shadows to define boundaries.

## Typography

**Display Font:** Hanken Grotesk (sans-serif)
**Body Font:** Inter (sans-serif)
**Label/Mono Font:** JetBrains Mono (monospace)

**Character:** A deliberate synthesis between industrial architectural typography (Hanken Grotesk), high-clarity technical body prose (Inter), and engineering blueprint data (JetBrains Mono).

### Hierarchy
- **Display** (800, 48px / clamp(32px, 5vw, 48px), line-height: 1.15, letter-spacing: -0.02em): Hero page titles, primary catalog announcements.
- **Headline** (700, 32px, line-height: 1.25): Major section headers, series catalog headings.
- **Title** (600, 24px, line-height: 1.3): Product names, series titles, modal dialog headers.
- **Body** (400, 16px, line-height: 1.5, max-width: 70ch): Technical product descriptions, company background, RFQ guidelines.
- **Label** (600, 12px, line-height: 1.33, letter-spacing: 0.1em, uppercase): SKUs, dimensions (mm), IP ratings, breadcrumb trails, table headers.

### Named Rules
**The Spec-Mono Rule.** All numeric measurements (mm, IP ratings, operating temperatures, PCB mounting hole dimensions, and product SKU codes) must be rendered in JetBrains Mono.

**The Architectural Heading Rule.** Section headlines in Hanken Grotesk must always be paired with an uppercase JetBrains Mono eyebrow category label above them.

## Layout

The spatial model employs an 8px grid with structured container constraints:
- **Max Container Width:** 1280px (`max-w-container-max`), centered with fluid horizontal gutter padding (24px on desktop, 16px on mobile).
- **Spatial Rhythm:** 8px base units. Component gaps use 16px (`gap-4`), 24px (`gap-6`), and 32px (`gap-8`). Section vertical padding scales from 48px (py-12) on mobile to 80px (py-20) on desktop.
- **Density:** High-density information architecture for engineering buyers, featuring multi-column specification tables, comparison cards, and quick-filter tabs without extraneous whitespace padding.

## Elevation & Depth

PlastoGuard interfaces are flat-by-default with tactile physical lift on interaction, reflecting the tangible handling of physical injection molds and enclosure boxes.

### Shadow Vocabulary
- **Resting Surface** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): Subtle anchoring for white product cards and secondary panels against the ice-blue canvas.
- **Tactile Button** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): Standard resting state for primary action buttons and floating WhatsApp triggers.
- **Interactive Lift** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): Triggered on `:hover` alongside `transform: translateY(-4px)` to simulate lifting the hardware enclosure off the bench.
- **Featured Glow** (`box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)` with `ring-4 ring-safety-orange/15`): Exclusive emphasis for flagship series cards (e.g. Indian Series).

### Named Rules
**The Hardware Elevation Rule.** Surfaces never cast heavy shadows while at rest. Elevation is an active response to user focus or cursor hover, reinforcing tactile inspection.

## Shapes

- **Boundary Form:** Structural cards and dialog containers use rounded corners of 16px (`rounded-2xl`) or 24px (`rounded-3xl`) to echo the radiused outer bezels of injection-molded instrument cases.
- **Action Pills:** Primary and secondary CTA buttons use full pill rounding (`rounded-full`) to contrast sharply with rectangular grid panels and technical tables.
- **Input & Tooling Radii:** Form fields, filter chips, and inner technical badges use 8px–12px (`rounded-lg` / `rounded-xl`).
- **Signature Diagonal Ribbon:** 45-degree corner badge (`transform: rotate(45deg)`) in Signal Safety Orange deployed on top-right corners of featured series cards to announce exclusive manufacturing lines.

## Components

### Buttons
Tactile, pill-shaped, and high-visibility.
- **Shape:** Full pill (`border-radius: 9999px`).
- **Primary:** Background `#F97316` (Signal Safety Orange), text `#ffffff`, uppercase JetBrains Mono 12px or 14px, 10px 20px padding, subtle shadow.
- **Hover / Focus:** Background `#ea580c`, `transform: translateY(-1px) scale(1.02)`, shadow intensification.
- **Secondary:** Background `#020617` (Machinery Deep Navy), text `#ffffff`, pill-rounded, with smooth hover transition to `#334155`.

### Chips & Filter Tabs
Utilitarian toggle tags for catalog navigation.
- **Style:** 12px JetBrains Mono, border 1px solid `#cbd5e1`, background `#f8fafc`, text `#334155`.
- **Active State:** Background `#020617` or `#F97316`, text `#ffffff`, border-color matches background, font weight 700.

### Cards / Containers
- **Corner Style:** 16px–24px radius (`rounded-2xl` / `rounded-3xl`).
- **Background:** Crisp Clean Room White (`#ffffff`) or Technical Surface Ice (`#f8f9ff`).
- **Border:** 1px solid `rgba(51, 65, 85, 0.2)` (CAD Slate). Featured cards receive 2px solid `#F97316` with a soft orange halo ring (`ring-4 ring-safety-orange/15`).
- **Hover Treatment:** Border color shifts to `#F97316`, `transform: translateY(-6px)`, `box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1)`.

### Inputs / Fields
- **Style:** 1px border `rgba(51, 65, 85, 0.3)` over `#f8fafc` (Slate Surface), radius 12px (`rounded-xl`), 10px 16px padding.
- **Focus:** Border shifts to `#F97316` with a 1px matching ring (`ring-1 ring-safety-orange`), outline none.

### Navigation
- **Header:** Sticky top header (80px height), background `#f8f9ff` at 95% opacity with `backdrop-filter: blur(12px)` and 1px bottom border in CAD Slate.
- **Links:** 15px font-weight 600, active links indicated by a 2px bottom border in `#F97316` with zero layout shift.
- **Mega Dropdown:** 780px multi-column grid canvas with 16px radius, subtle backdrop blur, and highlighted cards for featured product series.

### Signature Component: The Engineering Series Banner Card
A full-width horizontal card featuring an asymmetric layout: 60% left column containing category badges, specification summary, common use cases, and direct RFQ buttons; 40% right column dedicated to a high-contrast white enclosure staging bay with subtle drop shadow and exclusive ribbon branding.

## Do's and Don'ts

### Do:
- **Do** format all dimensions in millimetres using JetBrains Mono (e.g. `150 × 100 × 60 mm`).
- **Do** pair every section title with an uppercase mono eyebrow tracking badge in Signal Safety Orange.
- **Do** use hairline CAD Slate borders (`1px solid rgba(51, 65, 85, 0.2)`) to delineate specifications tables and cards.
- **Do** ensure interactive cards lift smoothly on hover (`hover:-translate-y-1.5` with `duration-300`).
- **Do** feature verified ingress protection ratings (`IP65`, `IP67`, `NEMA 4X`) prominently in badge callouts.

### Don't:
- **Don't** use pastel, neon, or gradient backgrounds behind technical enclosure photography.
- **Don't** apply full-screen saturated orange backgrounds; orange is strictly a signal and CTA accent.
- **Don't** use generic stock photography of smiling corporate office workers; use genuine enclosure CAD renders, CNC machining tools, or physical product models.
- **Don't** use low-contrast gray text on gray backgrounds; maintain high-contrast dark text (`#0b1c30` or `#020617`) for engineering spec legibility.
- **Don't** round corners excessively into cartoonish bubbles; maintain crisp 2px to 16px industrial engineering radii.
