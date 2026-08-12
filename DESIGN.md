# RFS — Design System

Locked decisions. **Read this before touching any component.** The point of this file is to stop
the site drifting back into the default look every generator reaches for (purple-blue gradients,
rounded cards with a soft grey border, glow blobs, centred hero, three identical icon cards).

## Direction

**Industrial-technical editorial.** Swiss grid discipline + hairline rules + monospace data
labels. The site should read like a *deliverable* — a security report — not like a SaaS landing
page. Rawness is allowed; sloppiness is not. The grid is tighter than a polished site, not looser.

Reference points: Mandiant / Group-IB / CrowdStrike (red-black authority), SpyCloud (exposure
framing), Tarlogic (service-led hierarchy), technical documentation typography.

## Colour — 60 / 30 / 10

| Role | Token | Value | Use |
|---|---|---|---|
| Dominant (60%) | `void` | `#08090A` | page background |
| | `carbon` | `#101113` | raised panels, table stripes |
| Neutral (30%) | `ink` | `#F5F5F4` | primary text |
| | `ink-dim` | `#9A9A9E` | body copy, secondary |
| | `ink-faint` | `#5E5E63` | meta, disabled, mono captions |
| | `bone` | `#F0EEEA` | inverted section background (warm, never pure `#fff`) |
| Accent (10%) | `signal` | `#E11021` | one accent only |
| | `signal-deep` | `#8E0912` | hover / pressed |
| | `signal-dim` | `#2A0709` | tints, severity fills |

Rules:
- **One accent.** Red is a signal, not a mood. If more than ~10% of a viewport is red, cut it.
- Red is reserved for: active state, severity, the one emphasised phrase per heading, CTA fill,
  and rules that mark structure. Never for large background fills or gradients.
- Hairlines: `white/10` on dark, `black/12` on bone. Never a 1px grey box-with-shadow card.
- **No gradients as decoration.** No `text-gradient`, no glow shadows, no glassmorphism.
- Third hue is forbidden. Severity uses red opacity steps, not amber/green.

## Typography

Three families, each with one job. Loaded in `index.html` (preconnect + one stylesheet).

- **Display — Space Grotesk** (500/700), `tracking-[-0.03em]`, `leading-[0.92]` at hero size.
  Headlines only. Never for body.
- **Body — IBM Plex Sans** (400/500). Max `62ch` measure. `ink-dim` by default.
- **Data — JetBrains Mono** (400/500/700). Labels, section indices, tables, numbers, kickers.
  Uppercase + `tracking-[0.18em]` at 10–12px for labels. `tabular-nums` for all figures.

Scale (clamp-based, no fixed px for display):
- Hero `clamp(2.6rem, 7vw, 6rem)`
- H2 `clamp(1.9rem, 4vw, 3.25rem)`
- H3 `1.125rem–1.375rem`
- Body `1rem–1.0625rem` / `leading-relaxed`
- Mono label `0.6875rem`

## Geometry

- **`--radius: 0px`.** Everything is square, including vendored shadcn components. No exceptions.
- 1px borders only. No `box-shadow` for elevation — elevation is a background step (`void` →
  `carbon`) plus a hairline.
- Container `max-w-[1440px]`, `px-6 md:px-10`, with visible `border-x` gutters (blueprint feel).
- Section rhythm: `py-24 md:py-32`, each section opens with a full-bleed hairline and a mono index
  (`01 —`).

## Signature motifs

These are what make the site recognisable. Use them; don't invent new ones.

1. **Corner ticks** (`<Ticks />`) — 4 L-shaped 1px marks at panel corners, instead of rounded
   borders. Plot-frame language.
2. **Dot grid + slow red scanline** — hero background only, masked to fade. One sweep, 7s.
3. **Grain** — SVG turbulence overlay, `opacity .035`, `mix-blend-mode: overlay`, fixed,
   `pointer-events: none`. Kills the flat-digital feel.
4. **Outlined section numerals** — large `-webkit-text-stroke` numbers, no fill.
5. **Redaction blocks** — `••••••••` and solid red-tinted bars over "leaked" values. The core
   visual metaphor of the product.
6. **Segmented severity bars** — 4 cells filled in red, mono. Never a coloured pill badge.
7. **One inverted `bone` section** (Training) — the tonal break that stops the page reading as
   an endless dark scroll, and completes red/black/white.

## Motion

Restraint is the brief. Framer Motion only.

- Reveal: `opacity 0→1`, `y 14→0`, `duration .55`, ease `[0.16, 1, 0.3, 1]`, `once: true`,
  `margin: -80px`. Stagger `index * 0.06`, capped.
- Allowed beyond that: terminal line-by-line reveal with a block cursor, one number count-up,
  the hero scanline, the source ticker.
- Hover: 150ms colour/border only, plus a red underline that scales from the left. **No lift,
  no scale on cards.**
- All decorative motion must be disabled under `prefers-reduced-motion: reduce`.

## Content rules

- No fabricated statistics. Every number on the page is either a fact about the service
  (10 vectors, 72h, 0 intrusion) or a real track record. Placeholders for track-record figures
  live in `src/i18n/content.ts` marked `TODO`.
- The sample exposure report uses **synthetic data on a fictional domain** and is labelled
  `MUESTRA / SAMPLE`. Never show real findings, real credentials, or a real third-party domain.
- Copy is written per locale, not machine-translated: `en` is a full sibling of `es` and TypeScript
  enforces key parity (`const en: typeof es`).

## Structure

```
01  Hero            claim + sample exposure report panel
    Ticker          open sources we cover
02  Thesis          your perimeter starts outside your network
03  Audit  (OSINT)  10 vectors + remediation phases + deliverables
04  Training        inverted bone section — trained on your own findings
05  Method          process + rules of engagement (legal, zero intrusion, NDA, GDPR)
06  FAQ             custom accordion, hairline rows, +/− not chevrons
07  Contact         email / WhatsApp / LinkedIn in a hairline grid
    Footer          meta grid + oversized clipped wordmark
```
