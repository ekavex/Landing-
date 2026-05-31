# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 4px

**Scale:** `2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 32, 34, 36, 40` px

| Spacing | Semantic Use |
|---------|-------------|
| 4px | Tight - within a component |
| 8px | Medium - between sibling items |
| 16px | Wide - between sections |
| 32px | Vast - major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `nav.hidden.lg:flex` | row | - | center | 4px | 5 |
| `div.container-x` | row | space-between | center | 16px | 2 |
| `div.hidden.lg:flex` | row | - | center | 8px | 1 |
| `div.orbit-centering-wrapper` | row | center | center | - | 1 |
| `div.card-base` | column | - | - | - | 3 |
| `div.card-base` | column | - | - | - | 3 |
| `div.card-base` | column | - | - | - | 3 |
| `div.card-base` | row | - | center | 16px | 2 |

## Grid Layouts

| Element | Template Columns | Gap | Children |
|---------|-----------------|-----|----------|
| `div.footer-links-grid` | `352px 176px 176px 176px 176px` | 32px | 5 |
| `div.about-grid` | `552px 552px` | 80px | 2 |
| `div.stats-grid` | `278px 278px 278px 278px` | 24px | 4 |
| `div.contact-grid` | `744px 400px` | 40px | 2 |
| `div.form-row` | `327px 327px` | 16px | 2 |

## Structural Containers

### `<header>` 

```
display:          block
padding:          14px 20px
children:         1
```

### `<main>` 

```
display:          block
children:         8
```

### `<footer>` (`footer.footer-section`)

```
display:          block
padding:          60px 0px 0px
children:         3
```

### `<section>` (`section.hero-section`)

```
display:          block
padding:          160px 0px 60px
children:         3
```

### `<section>` 

```
display:          block
padding:          60px 0px 72px
children:         3
```

### `<section>` (`section#services`)

```
display:          block
padding:          100px 0px 120px
children:         1
```

### `<section>` (`section#about.about-section`)

```
display:          block
padding:          100px 0px 120px
children:         2
```

### `<section>` 

```
display:          block
padding:          80px 0px
children:         2
```

### `<section>` (`section#testimonials`)

```
display:          block
padding:          100px 0px 120px
children:         1
```

### `<section>` (`section#contactus`)

```
display:          block
padding:          100px 0px 120px
children:         4
```

### `<section>` (`section#contact.cta-section`)

```
display:          block
padding:          100px 0px
children:         2
```

### `<nav>` (`nav.hidden.lg:flex`)

```
display:          flex
flex-direction:   row
justify-content:  -
align-items:      center
gap:              4px
children:         5
```

## Layout Rules

- **Container max-width:** `1280px` - always center with `margin: auto`
- Primary layout system: **Flexbox**
- Secondary layout system: **CSS Grid** (used for card grids and multi-column layouts)
- Every spacing value must be a multiple of **4px**
- Never use arbitrary margin/padding values outside the spacing scale

