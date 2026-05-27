# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Link | 2 | default, hover, focus |
| Input | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: 0.35s;
transition: 0.3s;
transition: all;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `Start building free`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On hover:**

```css
/* background-color: rgb(211, 85, 40) → */ background-color: rgb(181, 68, 31);
/* box-shadow: rgba(211, 85, 40, 0.2) 0px 4px 16px 0px → */ box-shadow: rgba(211, 85, 40, 0.35) 0px 7.99505px 31.9802px 0px;
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, -2.99628);
```

**On focus:**

```css
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, 0);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(17, 17, 17) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(17, 17, 17);
```

**Transition:** `0.35s`

### Button 2 — `Book a demo`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On hover:**

```css
/* background-color: rgba(255, 255, 255, 0.7) → */ background-color: rgba(255, 255, 255, 0.996);
/* border-color: rgb(226, 224, 218) → */ border-color: rgb(28, 28, 28);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.08) 0px 7.9045px 27.6658px 0px;
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, -2.96419);
```

**On focus:**

```css
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, 0);
/* outline: rgb(26, 26, 26) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(26, 26, 26) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.35s`

### Button 3 — `Learn about us`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**On hover:**

```css
/* background-color: rgb(211, 85, 40) → */ background-color: rgb(181, 68, 31);
/* box-shadow: none → */ box-shadow: rgba(211, 85, 40, 0.25) 0px 8px 28px 0px;
/* transform: none → */ transform: matrix(1, 0, 0, 1, 0, -2);
```

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s`

## Link Interactions

### Link 1 — `CALL US
+91 9552424533
Mon – Sat, 9 AM –`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On focus:**

```css
/* outline: rgb(26, 26, 26) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(26, 26, 26) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Link 2 — `VISIT US
Pune, India
VJ grand central, W`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On focus:**

```css
/* outline: rgb(26, 26, 26) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(26, 26, 26) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

## Input Interactions

### Input 1 — `John Doe`

**States:**

- Default: `../screens/states/input-1-default.png`
- Hover: `../screens/states/input-1-hover.png`
- Focus: `../screens/states/input-1-focus.png`

**On focus:**

```css
/* border-color: rgb(237, 236, 232) → */ border-color: rgb(211, 85, 40);
/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px → */ box-shadow: rgba(211, 85, 40, 0.08) 0px 0px 0px 3px;
```

**Transition:** `0.3s`

### Input 2 — `john@company.com`

**States:**

- Default: `../screens/states/input-2-default.png`
- Hover: `../screens/states/input-2-hover.png`
- Focus: `../screens/states/input-2-focus.png`

**On focus:**

```css
/* border-color: rgb(237, 236, 232) → */ border-color: rgb(211, 85, 40);
/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px → */ box-shadow: rgba(211, 85, 40, 0.08) 0px 0px 0px 3px;
```

**Transition:** `0.3s`

### Input 3 — `How can we help you?`

**States:**

- Default: `../screens/states/input-3-default.png`
- Hover: `../screens/states/input-3-hover.png`
- Focus: `../screens/states/input-3-focus.png`

**On focus:**

```css
/* border-color: rgb(237, 236, 232) → */ border-color: rgb(211, 85, 40);
/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px → */ box-shadow: rgba(211, 85, 40, 0.08) 0px 0.00171106px 0.00513319px 2.99487px;
```

**Transition:** `0.3s`

## Interaction Rules

- Accent color `#d35528` is used for focus rings, active states, and hover highlights
- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.35s`, `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

