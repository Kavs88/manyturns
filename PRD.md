# Product Requirements Document (PRD): Many Turns Parent Portal

> **HISTORICAL / SUPERSEDED — do not implement from this file.**  
> This PRD records an earlier four-pillar / Stage-inclusive draft (including sand/terracotta tokens). It is retained for history only.  
> It does **not** override current journey-first product decisions. For authoritative direction use **`PROJECT_STATE.md`**, **`NEXT.md`**, and current brand docs under **`docs/brand/`**.  
> The Stage remains quarantined from the public journey; do not restore that direction from this document.

## 1. Executive Summary
- **Entity**: Manyturns OÜ (Registered in Estonia)
- **Founder**: Sam Kavanagh
- **Core Narrative**: Based on Homer's Odyssey (*polytropos* — "the man of many turns"). Unites strategic business turns (Kavsulting), life relocation turns (Asia Insights), and room/game turns (Trivia Deck — live hosting; PubPal complementary engagement inside that proposition).
- **Primary Proposition**: An operator house and software studio that builds systems for critical transitions.

## 2. Information Architecture
- **Route /**: The Sovereign Operator Hub
  - **Hero**: Brand name, core thesis, operator credential statement.
  - **The Narrative / Manifesto**: The story of *Many Turns* (Homeric origin, room-tested engineering).
  - **The 4 Operating Pillars (Grid)**:
    1. Commercial Advisory (Kavsulting)
    2. Platform & Relocation (Asia Insights)
    3. Live Entertainment SaaS (Trivia Deck; PubPal complementary)
    4. The Stage (MCing, Comedy & Events)
  - **The Horizontal Engine**: "We Build Software" — highlighting bespoke internal tools, live venue engines, and real-world deployment.
  - **Founder Statement**: Sam Kavanagh's background bridging Europe and SEA.
  - **Universal Footer**: Legal imprint, entity details, cross-asset doors.

## 3. Design Tokens (Tailwind Configuration)
```typescript
// brandTokens — implemented in app/globals.css (@theme) for Tailwind v4
export const brandTokens = {
  colors: {
    sand: {
      50: '#FDFBF7',
      100: '#FBF9F5',
      200: '#F4EFE6',
      300: '#E8DFC8',
    },
    cobalt: {
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },
    terracotta: {
      500: '#D97706',
      600: '#C25E38',
      700: '#9C4323',
    },
    slate: {
      800: '#1E293B',
      900: '#0F172A',
      950: '#020617',
    }
  },
  fontFamily: {
    serif: ['var(--font-editorial)', 'Georgia', 'serif'],
    sans: ['var(--font-sans)', 'sans-serif'],
    mono: ['var(--font-mono)', 'monospace'],
  }
};
```

## 4. Domains
- manyturns.ee / manyturns.co — parent holding & venture-studio site
