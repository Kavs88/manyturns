'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { OdysseyLines } from '@/components/brand/OdysseyLines';
import { PathProgress } from '@/components/home/PathProgress';
import { turns } from '@/lib/journey';

const ease = [0.22, 1, 0.36, 1] as const;

const journeys = [
  {
    label: 'Travel',
    brand: 'Asia Insights',
    title: 'Arrive somewhere real',
    body: 'Introductions and relationships for people making a life turn in Southeast Asia.',
    href: '/asia-insights',
    image: '/brand/turn-life.jpg',
    alt: 'Southeast Asia coast at dawn — life and arrival',
    accent: '#0D7F6B',
    objectPosition: 'center 58%',
  },
  {
    label: 'Improvement',
    brand: 'Kavsulting',
    title: 'Fix what is actually broken',
    body: 'Advisory, problem-solving, coaching in the mix. Stay until people can run it.',
    href: '/advisory',
    image: '/brand/turn-strategic.jpg',
    alt: 'Workrooms and commercial practice',
    accent: '#F7F4F2',
    objectPosition: 'center 40%',
  },
  {
    label: 'Enjoyment',
    brand: 'Trivia Deck',
    title: 'Make the night hold',
    body: 'Host, screen, phones under pressure. The turn is whether Friday works.',
    href: '/trivia-deck',
    image: '/brand/turn-room.jpg',
    alt: 'A live venue night',
    accent: '#C9A84C',
    objectPosition: 'center 45%',
  },
  {
    label: 'Systems',
    brand: 'Built',
    title: 'Leave the room with something that runs',
    body: 'Software and ops that started as a problem in the practice, then became house ventures.',
    href: '/built',
    image: '/brand/turn-wild.jpg',
    alt: 'Systems built under live pressure',
    accent: '#9c0000',
    objectPosition: 'center 50%',
  },
];

/** Vault Held lines only — no invented outcomes. */
const standards = [
  {
    n: '01',
    room: 'The bank · Jersey',
    pressure: 'The complaint on the form.',
    claim: 'See past the ticket.',
    held: 'Got to the real constraint and made the service hold across the group.',
    image: '/brand/turn-strategic.jpg',
    href: '/#turn-01',
    accent: '#F7F4F2',
  },
  {
    n: '02',
    room: 'The practice · since 2017',
    pressure: 'Advice that dies on Monday.',
    claim: 'Leave something that runs.',
    held: 'Diagnosis into structure — and people who can run it without us.',
    image: '/brand/door-kavsulting.jpg',
    href: '/advisory',
    accent: '#F2F2F2',
  },
  {
    n: '03',
    room: 'The room · Friday night',
    pressure: 'A full house. Loud. Live.',
    claim: 'Survive the night.',
    held: 'Host, screen, and phones in sync — a night that still runs when the room is messy.',
    image: '/brand/turn-room.jpg',
    href: '/trivia-deck',
    accent: '#C9A84C',
  },
];

const composed = [
  { name: 'Asia Insights', kind: 'Life venture', href: '/asia-insights' },
  { name: 'Trivia Deck', kind: 'Live software', href: '/trivia-deck' },
  { name: 'Places & Spaces', kind: 'Landlord ops', href: '/built' },
  { name: 'PIP', kind: 'Operator memory', href: '/built' },
  { name: 'Kavsulting', kind: 'The practice', href: '/advisory' },
];

export function JourneyHome() {
  const heroRef = useRef<HTMLElement>(null);
  const [live, setLive] = useState(false);
  useEffect(() => setLive(true), []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const pathY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const reveal = live
    ? {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease },
      }
    : {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.01 },
      };

  return (
    <main>
      <PathProgress />
      {/* Desire — full-bleed first viewport; brand owns the room */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden flex flex-col justify-end"
      >
        <motion.div
          className="absolute inset-0"
          style={live ? { y: imageY, scale: imageScale } : { scale: 1.08 }}
        >
          <Image
            src="/brand/hero-journey.jpg"
            alt="The road ahead — photograph from the Many Turns path"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 42%' }}
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,6,8,0.45) 0%, rgba(18,6,8,0.18) 28%, rgba(18,6,8,0.5) 58%, rgba(18,6,8,0.96) 100%)',
          }}
        />
        <div className="mt-noise absolute inset-0" aria-hidden />

        <motion.svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          aria-hidden
          preserveAspectRatio="xMidYMid slice"
          style={live ? { y: pathY, opacity: pathOpacity } : undefined}
        >
          <motion.path
            d="M480 120 C 720 80, 900 200, 1120 140 S 1340 60, 1520 120"
            stroke="rgba(247,244,242,0.35)"
            strokeWidth="1.3"
            fill="none"
            initial={live ? { pathLength: 0, opacity: 0 } : false}
            animate={live ? { pathLength: 1, opacity: 1 } : undefined}
            transition={{ duration: 2.2, ease, delay: 0.15 }}
          />
          <motion.path
            d="M620 200 C 820 160, 980 280, 1180 210 S 1380 140, 1520 190"
            stroke="rgba(156,0,0,0.55)"
            strokeWidth="1.15"
            fill="none"
            initial={live ? { pathLength: 0, opacity: 0 } : false}
            animate={live ? { pathLength: 1, opacity: 1 } : undefined}
            transition={{ duration: 2.4, ease, delay: 0.35 }}
          />
          <motion.circle
            cx="1120"
            cy="140"
            r="4"
            fill="rgba(247,244,242,0.65)"
            initial={live ? { opacity: 0, scale: 0.4 } : false}
            animate={live ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.6, delay: 1.6, ease }}
          />
          <motion.circle
            cx="980"
            cy="250"
            r="3"
            fill="rgba(156,0,0,0.85)"
            initial={live ? { opacity: 0, scale: 0.4 } : false}
            animate={live ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.6, delay: 1.85, ease }}
          />
          <g
            transform="translate(1180 500)"
            stroke="rgba(247,244,242,0.32)"
            strokeWidth="1.15"
            strokeLinecap="round"
            fill="none"
          >
            <path d="M0 28 C 18 36, 54 36, 78 28 L 72 18 C 52 24, 26 24, 8 18 Z" />
            <path d="M36 18 V -8" />
            <path d="M36 -8 L 58 10 L 36 14" />
            <path d="M36 -4 L 18 12" />
          </g>
        </motion.svg>

        <div className="relative z-10 px-5 pb-14 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-32">
          <div className="max-w-[1120px] mx-auto">
            <motion.p
              className="mt-eyebrow mb-4 md:mb-5"
              style={{ color: 'rgba(247,244,242,0.65)' }}
              initial={live ? { opacity: 0, y: 12 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              Many turns. Many journeys.
            </motion.p>
            <motion.h1
              className="mt-display text-mt-white"
              style={{
                fontSize: 'clamp(3.5rem, 12vw, 8.75rem)',
                letterSpacing: '-0.042em',
              }}
              initial={live ? { opacity: 0, y: 28 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.85, delay: 0.32, ease }}
            >
              Many Turns
            </motion.h1>
            <motion.p
              className="mt-prose mt-5 max-w-[34rem] text-[1.05rem] md:mt-6 md:text-[1.35rem]"
              style={{ color: 'rgba(247,244,242,0.9)', lineHeight: 1.55 }}
              initial={live ? { opacity: 0, y: 18 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.75, delay: 0.5, ease }}
            >
              Homer called Odysseus <em className="not-italic text-mt-white">polytropos</em> — the
              man of many turns. Not because the road was pretty. Because he kept solving the next
              hard problem until he got home.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-4"
              initial={live ? { opacity: 0, y: 14 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, delay: 0.68, ease }}
            >
              <a
                href="mailto:sam@kavsulting.com"
                className="mt-cta mt-cta-fill inline-flex items-center justify-center px-6 py-4 text-[14px]"
                style={{ background: '#9c0000', color: '#F7F4F2' }}
              >
                Start a conversation
              </a>
              <a
                href="#held"
                className="mt-cta text-[14px]"
                style={{
                  color: 'rgba(247,244,242,0.85)',
                  borderBottom: '1px solid rgba(247,244,242,0.4)',
                }}
              >
                See what held →
              </a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#idea"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 mt-meta text-[11px] tracking-[0.18em] uppercase"
          style={{ color: 'rgba(247,244,242,0.4)' }}
          initial={live ? { opacity: 0 } : false}
          animate={live ? { opacity: 1, y: [0, 6, 0] } : undefined}
          transition={
            live
              ? { opacity: { delay: 1.4, duration: 0.8 }, y: { delay: 2.2, duration: 2.2, repeat: Infinity, ease: 'easeInOut' } }
              : undefined
          }
          aria-label="Scroll to the idea"
        >
          <span className="mb-2 block text-center">The idea</span>
          <span
            className="mx-auto block h-8 w-px"
            style={{ background: 'rgba(247,244,242,0.28)' }}
            aria-hidden
          />
        </motion.a>
      </section>

      <section
        id="idea"
        className="relative scroll-mt-20 overflow-hidden px-5 py-20 sm:px-6 md:px-10 md:py-28 md:scroll-mt-24"
        style={{ background: '#F7F4F2', color: '#1A0A0C' }}
      >
        <OdysseyLines tone="light" motif="coast" opacity={0.45} />
        <motion.div className="relative z-10 max-w-[1120px] mx-auto" {...reveal}>
          <div className="grid gap-8 md:grid-cols-12 md:gap-14">
            <p className="mt-eyebrow md:col-span-2 md:pt-3" style={{ color: '#9c0000' }}>
              The idea
            </p>
            <div className="md:col-span-10 max-w-3xl">
              <p
                className="mt-claim"
                style={{
                  color: '#1A0A0C',
                  fontSize: 'clamp(1.7rem, 4vw, 3rem)',
                  lineHeight: 1.2,
                }}
              >
                A turn is the moment the real constraint shows itself — then you change direction,
                and stay until the new direction holds.
              </p>
              <p
                className="mt-prose mt-6 max-w-xl text-base md:mt-8 md:text-xl"
                style={{ color: 'rgba(26, 10, 12, 0.68)' }}
              >
                We fix operations that aren&apos;t working — usually the ones where nobody can quite
                say what the real problem is yet. Coaching is part of how that sticks. Most of what
                we build started as a problem we hit ourselves.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="held"
        className="relative scroll-mt-20 overflow-hidden px-5 py-20 sm:px-6 md:px-10 md:scroll-mt-24 md:py-28"
        style={{ background: '#0c0406', color: '#F7F4F2' }}
      >
        <OdysseyLines tone="dark" motif="voyage" opacity={0.45} />
        <div className="relative z-10 max-w-[1120px] mx-auto">
          <motion.div className="mb-12 max-w-3xl md:mb-16" {...reveal}>
            <p className="mt-eyebrow mb-4 md:mb-5" style={{ color: '#9c0000' }}>
              Three standards
            </p>
            <h2
              className="mt-title text-mt-white"
              style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.5rem)' }}
            >
              Pressure first. Then what held.
            </h2>
            <p className="mt-prose mt-4 max-w-xl text-base md:mt-5 md:text-xl" style={{ color: 'var(--mt-muted)' }}>
              The house is judged in the room — a bank ticket, a Monday after advice, a Friday under
              lights. Same rule every time: finish the turn.
            </p>
          </motion.div>

          <div className="space-y-0">
            {standards.map((s, i) => (
              <article
                key={s.n}
                className="grid gap-6 py-10 md:grid-cols-12 md:gap-12 md:py-12"
                style={{
                  borderTop: '1px solid rgba(247,244,242,0.12)',
                  borderBottom:
                    i === standards.length - 1 ? '1px solid rgba(247,244,242,0.12)' : undefined,
                }}
              >
                <div className="md:col-span-1">
                  <span
                    className="mt-display block leading-none"
                    style={{ color: '#9c0000', fontSize: 'clamp(2.5rem, 4vw, 3.25rem)' }}
                  >
                    {s.n}
                  </span>
                </div>

                <div className="md:col-span-6 flex flex-col justify-center min-w-0">
                  <p className="mt-eyebrow mb-3" style={{ color: 'rgba(247,244,242,0.42)' }}>
                    {s.room}
                  </p>
                  <p className="mt-meta mb-4" style={{ color: 'rgba(247,244,242,0.48)' }}>
                    Pressure · {s.pressure}
                  </p>
                  <h3
                    className="mt-title text-mt-white mb-7"
                    style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.65rem)' }}
                  >
                    {s.claim}
                  </h3>
                  <div className="max-w-xl">
                    <p className="mt-eyebrow mb-2" style={{ color: '#9c0000' }}>
                      Held
                    </p>
                    <p
                      className="mt-prose text-base md:text-lg"
                      style={{ color: 'var(--mt-muted-strong)' }}
                    >
                      {s.held}
                    </p>
                  </div>
                  <Link
                    href={s.href}
                    className="mt-cta mt-8 inline-flex self-start text-[13px]"
                    style={{ color: s.accent, borderBottom: `1px solid ${s.accent}55` }}
                  >
                    Continue this turn →
                  </Link>
                </div>

                <Link
                  href={s.href}
                  className="group relative md:col-span-5 aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden"
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(12,4,6,0.6) 0%, rgba(12,4,6,0.12) 100%)',
                    }}
                  />
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[3px] transition-[width] duration-500 group-hover:w-1"
                    style={{ background: s.accent === '#C9A84C' ? '#C9A84C' : '#9c0000' }}
                    aria-hidden
                  />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed thresholds — not a card grid */}
      <section id="journeys" className="scroll-mt-20 md:scroll-mt-24" style={{ background: '#F7F4F2', color: '#1A0A0C' }}>
        <div className="px-5 pb-10 pt-20 sm:px-6 md:px-10 md:pb-14 md:pt-28">
          <motion.div className="mx-auto max-w-3xl" {...reveal}>
            <p className="mt-eyebrow mb-4 md:mb-5" style={{ color: '#9c0000' }}>
              Many journeys
            </p>
            <h2
              className="mt-title"
              style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.5rem)' }}
            >
              Four doors. One standard: the work finishes.
            </h2>
            <p className="mt-prose mt-4 max-w-xl text-base md:mt-5 md:text-xl" style={{ color: 'rgba(26,10,12,0.65)' }}>
              Travel. Improvement. Enjoyment. Systems. Each takes someone through a change — and
              expects something that holds when the room is messy.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {journeys.map((j) => (
            <Link
              key={j.label}
              href={j.href}
              className="group relative block min-h-[58vh] overflow-hidden md:min-h-[72vh]"
            >
              <Image
                src={j.image}
                alt={j.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.045]"
                style={{ objectPosition: j.objectPosition }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(18,6,8,0.15) 0%, rgba(18,6,8,0.35) 40%, rgba(18,6,8,0.92) 100%)',
                }}
              />
              <span
                className="absolute left-0 top-0 bottom-0 w-[4px] transition-[width] duration-500 group-hover:w-[6px]"
                style={{ background: j.accent }}
                aria-hidden
              />
              <div className="relative z-10 flex h-full min-h-[58vh] flex-col justify-end px-5 pb-10 sm:px-6 md:min-h-[72vh] md:px-10 md:pb-16">
                <div className="max-w-[1120px] mx-auto w-full">
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:mb-5">
                    <p className="mt-eyebrow" style={{ color: 'rgba(247,244,242,0.7)' }}>
                      {j.label}
                    </p>
                    <span
                      className="mt-cta text-[11px] uppercase tracking-[0.16em]"
                      style={{ color: j.accent, fontWeight: 700 }}
                    >
                      {j.brand}
                    </span>
                  </div>
                  <h3
                    className="mt-title text-mt-white max-w-3xl transition-transform duration-500 group-hover:translate-x-1"
                    style={{ fontSize: 'clamp(1.95rem, 4.8vw, 3.6rem)' }}
                  >
                    {j.title}
                  </h3>
                  <p
                    className="mt-prose mt-3 max-w-lg text-[0.98rem] md:mt-4 md:text-lg"
                    style={{ color: 'rgba(247,244,242,0.78)' }}
                  >
                    {j.body}
                  </p>
                  <span
                    className="mt-cta mt-6 inline-flex text-[14px] md:mt-8"
                    style={{ color: j.accent, borderBottom: `1px solid ${j.accent}66` }}
                  >
                    Continue this turn →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="composed"
        className="scroll-mt-20 px-5 pb-6 pt-20 sm:px-6 md:scroll-mt-24 md:px-10 md:pb-8 md:pt-28"
        style={{ background: '#1a0a0c', color: '#F7F4F2' }}
      >
        <div className="mx-auto grid max-w-[1120px] gap-10 md:grid-cols-12 md:gap-16">
          <motion.div className="md:col-span-5" {...reveal}>
            <p className="mt-eyebrow mb-4 md:mb-5" style={{ color: 'rgba(247,244,242,0.4)' }}>
              Composed by the path
            </p>
            <h2
              className="mt-title mb-4 text-mt-white md:mb-5"
              style={{ fontSize: 'clamp(1.85rem, 3.4vw, 2.65rem)' }}
            >
              What left the room.
            </h2>
            <p className="mt-prose max-w-sm text-base md:text-lg" style={{ color: 'var(--mt-muted)' }}>
              Ventures and systems that grew from the work — each continues on its own door.
            </p>
            <Link
              href="/built"
              className="mt-cta mt-cta-fill mt-7 inline-flex px-5 py-3.5 text-[14px] md:mt-8"
              style={{ background: '#9c0000', color: '#F7F4F2' }}
            >
              Built along the way →
            </Link>
          </motion.div>
          <ul className="space-y-0 md:col-span-7 md:pt-1">
            {composed.map((item, i) => (
              <li key={item.name} style={{ borderTop: '1px solid rgba(247,244,242,0.12)' }}>
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between gap-4 py-4 md:gap-6 md:py-5"
                >
                  <span className="mt-title text-xl text-mt-white transition-colors duration-300 group-hover:text-[#9c0000] md:text-3xl">
                    {item.name}
                  </span>
                  <span
                    className="mt-meta shrink-0 transition-colors duration-300 group-hover:text-[rgba(247,244,242,0.7)]"
                    style={{ color: 'rgba(247,244,242,0.38)' }}
                  >
                    {item.kind}
                  </span>
                </Link>
                {i === composed.length - 1 ? (
                  <div style={{ borderBottom: '1px solid rgba(247,244,242,0.12)' }} />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="turns"
        className="relative scroll-mt-20 overflow-hidden px-5 pb-20 pt-10 sm:px-6 md:scroll-mt-24 md:px-10 md:pb-28 md:pt-14"
        style={{ background: '#1a0a0c' }}
      >
        <OdysseyLines tone="dark" motif="voyage" opacity={0.35} />
        <div className="relative z-10 mx-auto max-w-[680px]">
          <motion.div className="mb-10 md:mb-12" {...reveal}>
            <p className="mt-eyebrow mb-3 md:mb-4" style={{ color: 'rgba(247,244,242,0.45)' }}>
              The path that built it
            </p>
            <h2
              className="mt-title mb-3 text-mt-white md:mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)' }}
            >
              Each turn had a problem. Each one had to finish.
            </h2>
            <p className="mt-prose max-w-md text-[0.98rem]" style={{ color: 'var(--mt-muted)' }}>
              The rooms that taught us how to see the real issue and stay until it held.
            </p>
          </motion.div>
          {turns.map((c, i) => {
            const isCue = Boolean(c.href && c.cue);
            return (
              <article
                key={c.id}
                id={`turn-${c.id}`}
                className="grid scroll-mt-24 grid-cols-[2.75rem_1fr] gap-x-4 md:grid-cols-[3.25rem_1fr] md:gap-x-7 md:scroll-mt-28"
              >
                <div className="flex flex-col items-center">
                  <span
                    className="mt-meta pt-0.5"
                    style={{
                      color: c.cue?.accent ?? 'rgba(247,244,242,0.35)',
                      fontSize: isCue ? '0.8125rem' : '0.75rem',
                    }}
                  >
                    {c.id}
                  </span>
                  {i < turns.length - 1 ? (
                    <span
                      className="mt-2 w-px flex-1"
                      style={{
                        background: isCue
                          ? `${c.cue?.accent ?? '#9c0000'}44`
                          : 'rgba(247,244,242,0.14)',
                        minHeight: isCue ? 36 : 20,
                      }}
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div
                  className={
                    i < turns.length - 1
                      ? isCue
                        ? 'pb-11 md:pb-14'
                        : 'pb-5 md:pb-6'
                      : 'pb-2'
                  }
                >
                  {isCue ? (
                    <div
                      className="pl-4 md:pl-5 py-1"
                      style={{ borderLeft: `3px solid ${c.cue!.accent}` }}
                    >
                      <p className="mt-eyebrow mb-2" style={{ color: 'rgba(247,244,242,0.45)' }}>
                        {c.place}
                      </p>
                      <h3 className="mt-title mb-3 text-3xl md:text-4xl text-mt-white">
                        {c.title}
                      </h3>
                      <p
                        className="mt-prose text-[15px] md:text-base"
                        style={{ color: 'var(--mt-muted-strong)' }}
                      >
                        {c.body}
                      </p>
                      <div className="mt-5">
                        <p className="mt-eyebrow mb-1.5" style={{ color: '#9c0000' }}>
                          Held
                        </p>
                        <p
                          className="mt-prose text-[15px]"
                          style={{ color: 'var(--mt-muted-strong)' }}
                        >
                          {c.held}
                        </p>
                      </div>
                      {c.href && c.cue ? (
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                          <p className="mt-eyebrow" style={{ color: c.cue.accent }}>
                            {c.cue.name}
                          </p>
                          <Link
                            href={c.href}
                            className="mt-cta mt-cta-fill inline-flex items-center justify-center px-5 py-3.5 text-[14px] sm:min-w-[12.5rem]"
                            style={{ color: c.cue.onAccent, background: c.cue.accent }}
                          >
                            {c.link} →
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <>
                      <p
                        className="mt-eyebrow mb-1"
                        style={{ color: 'rgba(247,244,242,0.38)', fontSize: '0.625rem' }}
                      >
                        {c.place}
                      </p>
                      <h3 className="mt-title mb-1.5 text-xl md:text-2xl text-mt-white">
                        {c.title}
                      </h3>
                      <p
                        className="mt-prose text-[13px] md:text-[14px] leading-snug"
                        style={{ color: 'rgba(247,244,242,0.58)' }}
                      >
                        {c.body}
                      </p>
                      <p
                        className="mt-2.5 text-[13px] leading-snug"
                        style={{ color: 'rgba(247,244,242,0.5)' }}
                      >
                        <span
                          className="mt-eyebrow mr-2"
                          style={{ color: '#9c0000', fontSize: '0.5625rem' }}
                        >
                          Held
                        </span>
                        {c.held}
                      </p>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* The ask — dark, unavoidable */}
      <section
        id="close"
        className="relative overflow-hidden px-5 py-24 sm:px-6 md:px-10 md:py-36"
        style={{ background: '#120608', color: '#F7F4F2' }}
      >
        <div className="absolute inset-0">
          <Image
            src="/brand/close-path.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            style={{ objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(18,6,8,0.75) 0%, rgba(18,6,8,0.92) 55%, rgba(18,6,8,0.98) 100%)',
            }}
          />
          <div className="mt-noise absolute inset-0" aria-hidden />
        </div>
        <div className="relative z-10 max-w-[1120px] mx-auto">
          <motion.div {...reveal}>
            <p className="mt-eyebrow mb-6" style={{ color: '#9c0000' }}>
              The only rule of the road
            </p>
            <h2
              className="mt-title max-w-4xl text-mt-white"
              style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.25rem)', lineHeight: 1.02 }}
            >
              Make the complex simple.
              <br />
              Not the simple complex.
            </h2>
            <p
              className="mt-prose mt-6 max-w-lg text-base md:mt-8 md:text-xl"
              style={{ color: 'rgba(247,244,242,0.72)' }}
            >
              An operator house across Europe and Southeast Asia. The stops built the offering.
              Coaching is in the mix. The job is still to finish the turn.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
              <a
                href="mailto:sam@kavsulting.com"
                className="mt-cta mt-cta-fill inline-flex items-center justify-center px-8 py-4 text-[15px]"
                style={{ background: '#9c0000', color: '#F7F4F2' }}
              >
                Start a conversation
              </a>
              <a
                href="mailto:sam@kavsulting.com"
                className="mt-meta text-[13px]"
                style={{ color: 'rgba(247,244,242,0.55)' }}
              >
                sam@kavsulting.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
