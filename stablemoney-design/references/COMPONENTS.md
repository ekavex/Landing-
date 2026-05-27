# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Flex** | unknown | 72× | `.flex`, `.flex-col`, `.gap-2` |
| **Bank Logo** | unknown | 72× | `.bank-logo`, `.svelte-1s476lo` |
| **Bank Rate** | unknown | 72× | `.bank-rate`, `.svelte-1s476lo` |
| **Svelte 1s476lo** | unknown | 51× | `.svelte-1s476lo` |
| **Svelte 13p1stj** | card | 48× | `.svelte-13p1stj`, `.ticker-item` |
| **Item Value** | card | 48× | `.item-value`, `.svelte-13p1stj` |
| **Bank Card** | card | 12× | `.bank-card`, `.flex`, `.flex-col` |
| **Bank Cover** | unknown | 12× | `.bank-cover`, `.flex`, `.svelte-1munv7b` |
| **Bank Content** | unknown | 12× | `.bank-content`, `.svelte-1munv7b`, `.w-full` |
| **Bank Logo Container** | unknown | 12× | `.bank-logo-container`, `.svelte-1munv7b` |
| **Bank Name** | unknown | 12× | `.bank-name`, `.svelte-1munv7b`, `.text-nowrap` |
| **Feature Tag Wrapper** | badge | 12× | `.feature-tag-wrapper`, `.svelte-1munv7b` |
| **Interest Rate Wrapper** | unknown | 12× | `.interest-rate-wrapper`, `.svelte-1munv7b` |
| **Per Annum Text** | unknown | 12× | `.per-annum-text`, `.svelte-1munv7b`, `.text-start` |
| **Interest Rate** | unknown | 12× | `.interest-rate`, `.svelte-1munv7b` |
| **Font Medium** | unknown | 12× | `.font-medium` |
| **Bank Button** | button | 12× | `.bank-button`, `.svelte-1munv7b` |
| **Card Cell** | card | 4× | `.card-cell`, `.svelte-1feqift` |
| **Font Denton** | unknown | 4× | `.font-denton`, `.svelte-1feqift`, `.watermark-numeral` |
| **Svelte 1feqift** | card | 4× | `.svelte-1feqift`, `.trust-card` |

## Cards

### Svelte 13p1stj

**Instances found:** 48

**CSS classes:** `.svelte-13p1stj` `.ticker-item`

**HTML structure:**

```html
<div class="ticker-item svelte-13p1stj"><img class="item-logo svelte-13p1stj" width="24" height="24" src="https://assets.stablemoney.in/bank-logos/Shivalik.png" alt="Shivalik SF Bank"> <span class="item-label svelte-13p1stj">Shivalik SF Bank</span> <span class="item-value svelte-13p1stj">8.30%</span></div>
```

**Base styles (from design tokens):**

```css
.svelte-13p1stj {
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 11px;
  padding: 8px;
}```

### Item Value

**Instances found:** 48

**CSS classes:** `.item-value` `.svelte-13p1stj`

**HTML structure:**

```html
<span class="item-value svelte-13p1stj">8.30%</span>
```

**Base styles (from design tokens):**

```css
.item-value {
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 11px;
  padding: 8px;
}```

### Bank Card

**Instances found:** 12

**CSS classes:** `.bank-card` `.flex` `.flex-col` `.h-full` `.svelte-1munv7b`

**HTML structure:**

```html
<button class="bank-card flex h-full flex-col svelte-1munv7b" style="clip-path: path(&quot;M 179.125 0 c 13.199 0 19.799 0 23.899 4.101 c 4.101 4.101 4.101 10.7 4.101 23.899 L 207.125 344.953 c 0 13.199 0 19.799 -4.101 23.899 c -4.101 4.101 -10.7 4.101 -23.899 4.101 L 28 372.953 c -13.199 0 -19.799 0 -23.899 -4.101 c -4.101 -4.101 -4.101 -10.7 -4.101 -23.899 L 0 28 c 0 -13.199 0 -19.799 4.101 -23.899 c 4.101 -4.101 10.7 -4.101 23.899 -4.101 Z&quot;); background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%22207.125%22 height=%22372.953125%2
```

**Base styles (from design tokens):**

```css
.bank-card {
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 11px;
  padding: 8px;
}```

### Card Cell

**Instances found:** 4

**CSS classes:** `.card-cell` `.svelte-1feqift`

**HTML structure:**

```html
<button class="card-cell svelte-1feqift" type="button" aria-label="Read more: ₹5 lakh deposit insurance"><span class="watermark-numeral font-denton svelte-1feqift" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 40px) scale(0.7, 0.7);">1</span> <img src="/cards/card-1.webp" alt="₹5 lakh deposit insurance" class="trust-card svelte-1feqift" loading="lazy" decoding="async" width="1364" height="892" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 60px);"></button>
```

**Base styles (from design tokens):**

```css
.card-cell {
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 11px;
  padding: 8px;
}```

### Svelte 1feqift

**Instances found:** 4

**CSS classes:** `.svelte-1feqift` `.trust-card`

**HTML structure:**

```html
<img src="/cards/card-1.webp" alt="₹5 lakh deposit insurance" class="trust-card svelte-1feqift" loading="lazy" decoding="async" width="1364" height="892" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 60px);">
```

**Base styles (from design tokens):**

```css
.svelte-1feqift {
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 11px;
  padding: 8px;
}```

## Buttons

### Bank Button

**Instances found:** 12

**CSS classes:** `.bank-button` `.svelte-1munv7b`

**HTML structure:**

```html
<div class="bank-button svelte-1munv7b" style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3CclipPath id=%22c%22%3E%3Cpath d=%22M94.547 0c9.428 0 14.142 0 17.071 2.929c2.929 2.929 2.929 7.643 2.929 17.071L114.547 27.047c0 9.428 0 14.142 -2.929 17.071c-2.929 2.929 -7.643 2.929 -17.071 2.929L20 47.047c-9.428 0 -14.142 0 -17.071 -2.929c-2.929 -2.929 -2.929 -7.643 -2.929 -17.071L0 20c0 -9.428 0 -14.142 2.929 -17.071c2.929 -2.929 7.643 -2.929 17.071 -2.929Z%22 /%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path=%22url(%23c)%22%3E%3Cpath d=%22M9
```

**Base styles (from design tokens):**

```css
.bank-button {
  background: #a66cff;
  color: #ffffff;
  border-radius: 11px;
  padding: 4px 8px;
  cursor: pointer;
}```

## Badges & Chips

### Feature Tag Wrapper

**Instances found:** 12

**CSS classes:** `.feature-tag-wrapper` `.svelte-1munv7b`

**HTML structure:**

```html
<div class="feature-tag-wrapper svelte-1munv7b"><!----> <div class="w-fit rounded-br-[4px] rounded-bl-[4px] text-start text-[13px] leading-[19px] tracking-[-0.2px] text-[#00000080] md:rounded-br-[6px] md:rounded-bl-[6px] md:text-[16.5px] md:leading-[28.315px] md:tracking-[-0.354px]"></div><!----></div>
```

**Base styles (from design tokens):**

```css
.feature-tag-wrapper {
  background: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 11px;
  padding: 2px 4px;
  font-size: 12px;
}```

## Other Components

### Flex

**Instances found:** 72

**CSS classes:** `.flex` `.flex-col` `.gap-2` `.svelte-1s476lo`

**HTML structure:**

```html
<div class="flex flex-col gap-2 svelte-1s476lo" id="0"><div class="bank-logo svelte-1s476lo"><img src="https://assets.stablemoney.in/bank-logos/Unity.png" alt="" loading="lazy" decoding="async" width="30" height="30" class="svelte-1s476lo"></div> <p class="bank-rate svelte-1s476lo">8.25%</p></div>
```

**Base styles (from design tokens):**

```css
.flex {
  background: #1a1a1a;
  padding: 4px;
}```

### Bank Logo

**Instances found:** 72

**CSS classes:** `.bank-logo` `.svelte-1s476lo`

**HTML structure:**

```html
<div class="bank-logo svelte-1s476lo"><img src="https://assets.stablemoney.in/bank-logos/Unity.png" alt="" loading="lazy" decoding="async" width="30" height="30" class="svelte-1s476lo"></div>
```

**Base styles (from design tokens):**

```css
.bank-logo {
  background: #1a1a1a;
  padding: 4px;
}```

### Bank Rate

**Instances found:** 72

**CSS classes:** `.bank-rate` `.svelte-1s476lo`

**HTML structure:**

```html
<p class="bank-rate svelte-1s476lo">8.25%</p>
```

**Base styles (from design tokens):**

```css
.bank-rate {
  background: #1a1a1a;
  padding: 4px;
}```

### Svelte 1s476lo

**Instances found:** 51

**CSS classes:** `.svelte-1s476lo`

**HTML structure:**

```html
<img src="https://assets.stablemoney.in/bank-logos/Unity.png" alt="" loading="lazy" decoding="async" width="30" height="30" class="svelte-1s476lo">
```

**Base styles (from design tokens):**

```css
.svelte-1s476lo {
  background: #1a1a1a;
  padding: 4px;
}```

### Bank Cover

**Instances found:** 12

**CSS classes:** `.bank-cover` `.flex` `.svelte-1munv7b` `.w-full`

**HTML structure:**

```html
<div class="bank-cover flex w-full svelte-1munv7b" style="background-image: url(&quot;https://assets.stablemoney.in/app/home_card_grid_mask_group_shivalik_10_oct.webp&quot;); clip-path: path(&quot;M 177.125 0 c 13.199 0 19.799 0 23.899 4.101 c 4.101 4.101 4.101 10.7 4.101 23.899 L 205.125 94 l 0 0 L 0 94 l 0 0 L 0 28 c 0 -13.199 0 -19.799 4.101 -23.899 c 4.101 -4.101 10.7 -4.101 23.899 -4.101 Z&quot;);"></div>
```

**Base styles (from design tokens):**

```css
.bank-cover {
  background: #1a1a1a;
  padding: 4px;
}```

### Bank Content

**Instances found:** 12

**CSS classes:** `.bank-content` `.svelte-1munv7b` `.w-full` `.z-10`

**HTML structure:**

```html
<div class="bank-content z-10 w-full svelte-1munv7b"><div class="bank-logo-container svelte-1munv7b" style="background-color: rgb(236, 241, 255);"><img alt="" class="svelte-1munv7b" width="22" height="22" src="https://assets.stablemoney.in/bank-logos/Shivalik.png"></div> <p class="bank-name text-start text-nowrap svelte-1munv7b">Shivalik SF Bank</p> <div class="feature-tag-wrapper svelte-1munv7b"><!----> <div class="w-fit rounded-br-[4px] rounded-bl-[4px] text-start text-[13px] leading-[19px] tracking-[-0.2px] text-[#00000080] md:rounded-br-[6px] md:rounded-bl-[6px] md:text-[16.5px] md:leading
```

**Base styles (from design tokens):**

```css
.bank-content {
  background: #1a1a1a;
  padding: 4px;
}```

### Bank Logo Container

**Instances found:** 12

**CSS classes:** `.bank-logo-container` `.svelte-1munv7b`

**HTML structure:**

```html
<div class="bank-logo-container svelte-1munv7b" style="background-color: rgb(236, 241, 255);"><img alt="" class="svelte-1munv7b" width="22" height="22" src="https://assets.stablemoney.in/bank-logos/Shivalik.png"></div>
```

**Base styles (from design tokens):**

```css
.bank-logo-container {
  background: #1a1a1a;
  padding: 4px;
}```

### Bank Name

**Instances found:** 12

**CSS classes:** `.bank-name` `.svelte-1munv7b` `.text-nowrap` `.text-start`

**HTML structure:**

```html
<p class="bank-name text-start text-nowrap svelte-1munv7b">Shivalik SF Bank</p>
```

**Base styles (from design tokens):**

```css
.bank-name {
  background: #1a1a1a;
  padding: 4px;
}```

### Interest Rate Wrapper

**Instances found:** 12

**CSS classes:** `.interest-rate-wrapper` `.svelte-1munv7b`

**HTML structure:**

```html
<div class="interest-rate-wrapper svelte-1munv7b"><span class="per-annum-text text-start svelte-1munv7b">up to</span> <p class="interest-rate svelte-1munv7b"><span class="font-medium">8.30%</span> <span class="per-annum-text svelte-1munv7b">p.a.</span></p></div>
```

**Base styles (from design tokens):**

```css
.interest-rate-wrapper {
  background: #1a1a1a;
  padding: 4px;
}```

### Per Annum Text

**Instances found:** 12

**CSS classes:** `.per-annum-text` `.svelte-1munv7b` `.text-start`

**HTML structure:**

```html
<span class="per-annum-text text-start svelte-1munv7b">up to</span>
```

**Base styles (from design tokens):**

```css
.per-annum-text {
  background: #1a1a1a;
  padding: 4px;
}```

### Interest Rate

**Instances found:** 12

**CSS classes:** `.interest-rate` `.svelte-1munv7b`

**HTML structure:**

```html
<p class="interest-rate svelte-1munv7b"><span class="font-medium">8.30%</span> <span class="per-annum-text svelte-1munv7b">p.a.</span></p>
```

**Base styles (from design tokens):**

```css
.interest-rate {
  background: #1a1a1a;
  padding: 4px;
}```

### Font Medium

**Instances found:** 12

**CSS classes:** `.font-medium`

**HTML structure:**

```html
<span class="font-medium">8.30%</span>
```

**Base styles (from design tokens):**

```css
.font-medium {
  background: #1a1a1a;
  padding: 4px;
}```

### Font Denton

**Instances found:** 4

**CSS classes:** `.font-denton` `.svelte-1feqift` `.watermark-numeral`

**HTML structure:**

```html
<span class="watermark-numeral font-denton svelte-1feqift" style="translate: none; rotate: none; scale: none; opacity: 0; transform: translate(0px, 40px) scale(0.7, 0.7);">1</span>
```

**Base styles (from design tokens):**

```css
.font-denton {
  background: #1a1a1a;
  padding: 4px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#333333` for all dividers within components
- Use `#a66cff` for all interactive/active states

