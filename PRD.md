# Product Requirements Document (PRD): Many Turns Parent Portal

## 1. Executive Summary
- **Entity**: Manyturns OÜ (Registered in Estonia)
- **Founder**: Sam Kavanagh
- **Core Narrative**: Based on Homer's Odyssey (*polytropos* — "the man of many turns"). Unites strategic business turns (Kavsulting), life relocation turns (Asia Insights), and room/game turns (Trivia Deck & Live Hosting).
- **Primary Proposition**: An operator house and software studio that builds systems for critical transitions.

## 2. Information Architecture
- **Route /**: The Sovereign Operator Hub
  - **Hero**: Brand name, core thesis, operator credential statement.
  - **The Narrative / Manifesto**: The story of *Many Turns* (Homeric origin, room-tested engineering).
  - **The 4 Operating Pillars (Grid)**:
    1. Commercial Advisory (Kavsulting)
    2. Platform & Relocation (Asia Insights)
    3. Live Entertainment SaaS (Trivia Deck & PubPal)
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
