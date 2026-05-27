# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Orbit Pill** | unknown | 10× | `.orbit-pill` |
| **Card Base** | card | 6× | `.card-base` |
| **Container X** | unknown | 5× | `.container-x` |
| **Stat Num** | unknown | 4× | `.stat-num` |
| **Container X** | unknown | 3× | `.container-x` |
| **Card Base** | card | 3× | `.card-base` |
| **Card Base** | card | 3× | `.card-base` |

## Cards

### Card Base

**Instances found:** 6

**CSS classes:** `.card-base`

**HTML structure:**

```html
<div class="card-base" style="padding: 0px; cursor: default; overflow: hidden; position: relative; transition: 0.4s cubic-bezier(0.22, 1, 0.36, 1); transform: translateY(30px); box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px; border-color: var(--border-light); opacity: 0;"><div style="height: 3px; background: linear-gradient(135deg, rgb(45, 107, 228), rgb(96, 165, 250)); transform: scaleX(0); transform-origin: left center; transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);"></div><div style="position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; border-radius: 50%; back
```

**Base styles (from design tokens):**

```css
.card-base {
  background: #333333;
  border: 1px solid #555555;
  border-radius: 12px;
  padding: 8px;
}```

### Card Base

**Instances found:** 3

**CSS classes:** `.card-base`

**HTML structure:**

```html
<div class="card-base" style="padding: 32px; display: flex; flex-direction: column; cursor: default; opacity: 0; transform: translateY(28px);"><div style="display: flex; gap: 3px; margin-bottom: 20px;"><svg viewBox="0 0 20 20" style="width: 18px; height: 18px; fill: rgb(232, 163, 23);"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588
```

**Base styles (from design tokens):**

```css
.card-base {
  background: #333333;
  border: 1px solid #555555;
  border-radius: 12px;
  padding: 8px;
}```

### Card Base

**Instances found:** 3

**CSS classes:** `.card-base`

**HTML structure:**

```html
<div class="card-base" style="padding: 20px 24px; display: flex; align-items: center; gap: 16px; cursor: pointer; transition: 0.3s;"><div style="width: 48px; height: 48px; border-radius: 14px; background: rgb(254, 243, 237); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail" style="color: rgb(211, 85, 40);"><rect width="20" height="1
```

**Base styles (from design tokens):**

```css
.card-base {
  background: #333333;
  border: 1px solid #555555;
  border-radius: 12px;
  padding: 8px;
}```

## Other Components

### Orbit Pill

**Instances found:** 10

**CSS classes:** `.orbit-pill`

**HTML structure:**

```html
<div class="orbit-pill" style="transform: none; background: rgb(255, 255, 255); border: 2px solid var(--border-light); border-radius: 100px; padding: 7px 15px; display: flex; align-items: center; gap: 7px; white-space: nowrap; cursor: pointer; box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px; transition: border-color 0.3s, box-shadow 0.3s;"><span style="width: 9px; height: 9px; border-radius: 50%; background: rgb(211, 85, 40); box-shadow: none; transition: box-shadow 0.3s; flex-shrink: 0;"></span><span style="font-size: 12px; font-weight: 700; color: var(--ink-secondary); transition: color 0.3s; li
```

**Base styles (from design tokens):**

```css
.orbit-pill {
  background: #333333;
  padding: 4px;
}```

### Container X

**Instances found:** 5

**CSS classes:** `.container-x`

**HTML structure:**

```html
<div class="container-x" style="position: relative; z-index: 10;"><div style="max-width: 780px; margin: 0px auto 64px; text-align: center; display: flex; flex-direction: column; align-items: center;"><h1 style="font-family: var(--serif); font-size: clamp(2.2rem, 6.5vw, 5rem); line-height: 1.08; margin-bottom: 24px; opacity: 1; transform: none;">Build intelligent<br><span style="position: relative; display: inline-block;"><span style="display: inline-block; background-image: ; background-position-x: ; background-position-y: ; background-size: ; background-repeat: ; background-attachment: ; back
```

**Base styles (from design tokens):**

```css
.container-x {
  background: #333333;
  padding: 4px;
}```

### Stat Num

**Instances found:** 4

**CSS classes:** `.stat-num`

**HTML structure:**

```html
<span class="stat-num">0+</span>
```

**Base styles (from design tokens):**

```css
.stat-num {
  background: #333333;
  padding: 4px;
}```

### Container X

**Instances found:** 3

**CSS classes:** `.container-x`

**HTML structure:**

```html
<div class="container-x"><div style="max-width: 660px; margin: 0px auto 64px; text-align: center; display: flex; flex-direction: column; align-items: center;"><div style="opacity: 0; transform: translateY(10px);"><span class="section-tag">What We Do</span></div><h2 style="font-size: clamp(2rem, 4.5vw, 3rem); margin-bottom: 16px; text-align: center; opacity: 0; transform: translateY(20px);">Solutions crafted for every layer of you…</h2><p style="font-size: 17px; color: var(--ink-secondary); line-height: 1.7; max-width: 540px; text-align: center; opacity: 0; transform: translateY(14px);">From in
```

**Base styles (from design tokens):**

```css
.container-x {
  background: #333333;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#555555` for all dividers within components
- Use `#d35528` for all interactive/active states

