# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight — within a component |
| 8px | Medium — between sibling items |
| 16px | Wide — between sections |
| 32px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.qr-box.flex` | column | — | — | 6px | 2 |
| `div.flex.w-full` | column | — | center | — | 8 |
| `section.hero.svelte-qtyrkc` | row | center | — | — | 3 |
| `div.slant-dotted-background.flex` | column | center | — | 56px | 2 |
| `div.m-auto.box-border` | column | start | center | — | 1 |
| `div.compare-wrapper.svelte-1s476lo` | column | — | center | 80px | 3 |
| `div.flex.w-full` | column | — | center | — | 6 |
| `div.flex.items-center` | row | center | center | 16px | 1 |
| `div.flex.flex-col` | column | — | — | 80px | 3 |
| `div.twitter-testimonial-container.svelte-131oa78` | column | — | — | 28px | 2 |
| `div.fixed-header-wrapper.flex` | column | — | center | — | 2 |
| `div.flex.flex-col` | column | — | — | — | 2 |
| `div.mx-auto.flex` | row | — | — | 24px | 3 |
| `div.flex.flex-col` | column | — | — | 20px | 3 |
| `div.flex.flex-col` | column | — | — | 80px | 2 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.cards-container.svelte-1feqift` | `294px 294px 294px 294px` | 56px | 4 |

## Structural Containers

### `<section>` (`section.hero.svelte-qtyrkc`)

```
display:          flex
flex-direction:   row
justify-content:  center
align-items:      —
children:         3
```

### `<section>` (`section.currency-trust.svelte-1feqift`)

```
display:          block
padding:          56px 0px 120px
children:         2
```

### `<header>` (`header.header-wrapper.svelte-kbtnuy`)

```
display:          flex
flex-direction:   row
justify-content:  space-between
align-items:      center
gap:              8px
padding:          0px 20px
max-width:        1366px
children:         1
```

## Layout Rules

- **Container max-width:** `1392px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

