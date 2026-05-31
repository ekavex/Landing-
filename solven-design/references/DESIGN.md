# solven DESIGN.md

> Auto-generated design system - reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 0
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: subtle

## Visual Reference

**Match this design exactly** - study colors, fonts, spacing, and component shapes before writing any UI code.

![solven Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a warm tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **General Sans** for display/headings with **DM Serif Display** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#d35528** anchors interactive elements (buttons, links, focus rings). Motion is subtle - smooth transitions (150-300ms) ease state changes without drawing attention.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| background | `#1a1a1a` | background | Page background, darkest surface |
| surface | `#333333` | surface | Card and panel backgrounds |
| tw-ring-offset-color | `#ffffff` | text-primary | Headings and body text |
| ink-muted | `#999999` | text-muted | Captions, placeholders, secondary info |
| ink-secondary | `#555555` | border | Dividers, card borders, outlines |
| accent | `#d35528` | accent | CTAs, links, focus rings, active states |
| accent-bg | `#fef3ed` | accent | CTAs, links, focus rings, active states |
| danger | `#dc2626` | danger | Error states, destructive actions |
| success | `#22c55e` | success | Success states, positive indicators |
| warning | `#ca8a04` | warning | Warning states, caution indicators |
| info | `#2d6be4` | info | Informational highlights |
| border | `#e2e0da` | unknown | Palette color |
| border-light | `#edece8` | unknown | Palette color |
| unknown | `#888888` | unknown | Palette color |
| unknown | `#0e8a7d` | unknown | Palette color |
| unknown | `#7048d6` | unknown | Palette color |
| unknown | `#666666` | unknown | Palette color |
| unknown | `#eff6ff` | unknown | Palette color |
| unknown | `#e8a317` | unknown | Palette color |
| unknown | `#0a0930` | unknown | Palette color |

### CSS Variable Tokens

```css
--tw-border-style: solid;
--border: #e2e0da;
--border-light: #edece8;
--ink-secondary: #555;
--ink-muted: #999;
--accent: #d35528;
--accent-dark: #b5441f;
--accent-bg: #fef3ed;
```


---

## 3. Typography Rules

**Font Stack:**
- **DM Serif Display** - Heading 1, Heading 2, Heading 3
- **General Sans** - Body, Caption
- **SFMono-Regular** - Code

**Font Sources:**

```css
@font-face {
  font-family: "DM Serif Display";
  src: url("https://fonts.gstatic.com/s/dmserifdisplay/v17/-nFhOHM81r4j6k0gjAW3mujVU2B2G_Vx1w.ttf") format("truetype");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | DM Serif Display | clamp(2.5rem,5vw,3.8rem) | 700 |
| Heading 2 | DM Serif Display | 15px | 700 |
| Heading 3 | DM Serif Display | 14px | 700 |
| Body | General Sans | 13px | 400 |
| Caption | General Sans | 12px | 400 |
| Code | SFMono-Regular | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **DM Serif Display** for body/UI text, **General Sans** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

No components detected. Scan `src/components/` or `components/` to populate this section.

---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 32
- **Border radius:** 2px, 3px, 4px, 10px, 11px, 12px, 14px, 16px, 20px, 28px, 100px
- **Max content width:** 1023px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Raised - cards, buttons, interactive elements

- `0 1px 4px #00000008`
- `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px`
- `rgba(0, 0, 0, 0.04) 0px 1px 4px 0px`

### Floating - dropdowns, popovers, modals

- `rgba(211, 85, 40, 0.2) 0px 4px 16px 0px`
- `rgba(0, 0, 0, 0.06) 0px 2px 16px 0px`

### Overlay - full-screen overlays, top-level dialogs

- `0 16px 56px #00000014`
- `0 8px 28px #d3552840`

### Z-Index Scale

`10`



---

## 7. Animation & Motion

This project uses **subtle motion**. Transitions smooth state changes without demanding attention.

### CSS Animations

- `@keyframes slide`
- `@keyframes ping`

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#d35528` for interactive elements (buttons, links, focus rings)
- Use `#1a1a1a` as the primary page background
- Pair **DM Serif Display** (body) with **General Sans** (display) - these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation - see Section 6
- Use border-radius from the scale: 2px, 3px, 4px, 10px, 11px

### Don'ts

- Don't introduce colors outside this palette - extend the design tokens first
- Don't introduce additional font families beyond DM Serif Display and General Sans and SFMono-Regular
- Don't use arbitrary spacing values - stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values - pick from the defined scale
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 40rem | css |
| md | 48rem | css |
| lg | 64rem | css |
| xl | 80rem | css |
| 2xl | 96rem | css |
| sm | 640px | css |
| md | 767px | css |
| md | 768px | css |
| lg | 1023px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #333333
Border: 1px solid #555555
Radius: 12px
Padding: 16px
Font: DM Serif Display
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #d35528, text white
Ghost: bg transparent, border #555555
Padding: 8px 16px
Radius: 12px
Hover: opacity 0.9 or lighter shade
Focus: ring with #d35528
```

### Build a Page Layout

```
Background: #1a1a1a
Max-width: 1023px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #333333
Label: #999999 (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #1a1a1a
Input border: 1px solid #555555
Focus: border-color #d35528
Label: #999999 12px
Spacing: 16px between fields
Radius: 12px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: DM Serif Display, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
