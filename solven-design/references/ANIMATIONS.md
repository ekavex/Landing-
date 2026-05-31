# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **Web Animations API (4 active)** | animation |  |
| Canvas (1 elements) | 2D Canvas | 2D canvas rendering |

## Scroll Journey

The page is **6,527px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% - Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% - Opening Section
Scroll position: 957px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% - First Feature Section
Scroll position: 1,857px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% - Mid-Page
Scroll position: 2,814px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% - Lower Content
Scroll position: 3,770px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% - Near Footer
Scroll position: 4,670px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% - Bottom / Footer
Scroll position: 5,627px

![Scroll 100%](../screens/scroll/scroll-100.png)

## Video Elements

| # | Role | Autoplay | Loop | Muted | Size | First Frame |
|---|------|----------|------|-------|------|-------------|
| 1 | background | ✓ | ✓ | ✓ | 1440×900 | [view](../screens/scroll/video-1-frame.png) |

**Video 1 first frame:**

![Video 1 Frame](../screens/scroll/video-1-frame.png)

- **Source:** `/assets/background_Home-B1wlyp4F.mp4`

## CSS Keyframes (4 extracted)

### `@keyframes slide`

Duration: `40s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.marquee-strip`

```css
@keyframes slide {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(-50%);
  }
}
```

> Transform/motion animation

### `@keyframes marqueeScroll`

Duration: `25s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.marquee-track`

```css
@keyframes marqueeScroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

> Transform/motion animation

### `@keyframes orbitPulseAnim`

Duration: `3.5s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.orbit-pulse-ring`

```css
@keyframes orbitPulseAnim {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.06);
    opacity: 0;
  }
}
```

> Fade + motion enter animation

### `@keyframes ping`

```css
@keyframes ping {
  75%, 100% {
    opacity: 0;
    transform: scale(2);
  }
}
```

> Fade + motion enter animation

## Motion Tokens (CSS Variables)

### Duration Tokens

```css
--default-transition-duration: .15s;
```

### Easing Tokens

```css
--ease-spring: cubic-bezier(.22, 1, .36, 1);
--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
--ease-in-out: cubic-bezier(.4, 0, .2, 1);
```

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: all .45s var(--ease-spring);
transition: 0.3s;
transition: color 0.2s;
```

## How to Recreate This Motion Design

### Step 1 - Install Dependencies

```bash
```

### Step 2 - Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity .15s cubic-bezier(.22, 1, .36, 1),
              transform .15s cubic-bezier(.22, 1, .36, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 - Key Motion Principles

- **Video backgrounds** - use `<video autoplay loop muted playsinline>` for background videos. Always include a poster image fallback
- **Canvas elements (1)** - animated via requestAnimationFrame loop. Use canvas for particle effects, gradient animations, and WebGL scenes
- **Duration scale:** `.15s` · `45s` · `0.3s` · `0.2s` - use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 - Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`957px`) → `screens/scroll/scroll-017.png`
- **33%** (`1857px`) → `screens/scroll/scroll-033.png`
- **50%** (`2814px`) → `screens/scroll/scroll-050.png`
- **67%** (`3770px`) → `screens/scroll/scroll-067.png`
- **83%** (`4670px`) → `screens/scroll/scroll-083.png`
- **100%** (`5627px`) → `screens/scroll/scroll-100.png`

