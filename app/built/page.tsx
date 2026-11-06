import type { Metadata } from 'next';
import Link from 'next/link';
import { OdysseyLines } from '@/components/brand/OdysseyLines';
import { ParentShell } from '@/components/site/ParentShell';
import { TurnCrossroads } from '@/components/site/TurnCrossroads';
import { journeyAnchor } from '@/lib/journey';

export const metadata: Metadata = {
  title: 'Built along the way',
  description:
    'Systems that left the room — how the path composed ventures and software. Story on Many Turns; depth on Kavsulting.',
};

const LIVE_BUILT = 'https://kavsulting.com/index.html#built';

/** Catalogue story only — vault-backed ventures + log pointers. No invented metrics. */
const beats = [
  {
    when: 'Practice',
    title: 'Advise · Coach · Build',
    body: 'The practice started with founders at inflection. Strategy and the doing stayed in the same hands — then clients needed systems, not only decks.',
    href: '/advisory',
    hrefLabel: 'The practice',
    external: false,
  },
  {
    when: 'Life',
    title: 'Asia Insights',
    body: 'Trusted introductions and life-after-arrival across Southeast Asia — founded from living there, now on its own door.',
    href: '/asia-insights',
    hrefLabel: 'Life turns',
    external: false,
  },
  {
    when: 'Room',
    title: 'Trivia Deck',
    body: 'Host, venue screen, and phones in one room — live quiz nights under pressure. Software that had to hold on a Friday night.',
    href: '/trivia-deck',
    hrefLabel: 'Room turns',
    external: false,
  },
  {
    when: 'Ops',
    title: 'Places & Spaces',
    body: 'Property and landlord ops that grew from the practice — tenants, money, and requests in one place. Screens and depth on the Kavsulting log.',
    href: LIVE_BUILT,
    hrefLabel: 'Kavsulting log',
    external: true,
  },
  {
    when: 'Memory',
    title: 'Personal Intelligence Platform',
    body: 'Private durable memory with provenance — recall you can verify. Operator system for the house, not a public product door.',
    href: LIVE_BUILT,
    hrefLabel: 'Kavsulting log',
    external: true,
  },
  {
    when: 'Ongoing',
    title: 'The full solutions log',
    body: 'More systems left the room as the practice demanded them. The full catalogue — with screens — lives with Kavsulting.',
    href: LIVE_BUILT,
    hrefLabel: 'Open the log',
    external: true,
  },
] as const;

export default function BuiltPage() {
  const back = journeyAnchor('/built');

  return (
    <ParentShell>
      <main className="relative pb-28 overflow-hidden">
        <OdysseyLines tone="dark" motif="coast" opacity={0.65} />
        <section className="relative z-10 px-5 pb-12 pt-16 sm:px-6 md:px-10 md:pb-14 md:pt-28">
          <div className="mx-auto max-w-[680px]">
            <p className="mt-eyebrow mb-4 md:mb-5" style={{ color: '#9c0000' }}>
              Systems
            </p>
            <h1
              className="mt-display text-mt-white"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 5.25rem)', letterSpacing: '-0.04em' }}
            >
              Built along the way
            </h1>
            <p className="mt-prose mt-5 max-w-[34rem] text-base md:mt-7 md:text-xl" style={{ color: 'var(--mt-muted-strong)' }}>
              The practice did not stop at advice. Founders needed systems that held — so tools and
              ventures grew as the rooms demanded them. Some stayed private. Some became stops on
              this path.
            </p>
          </div>
        </section>

        <section className="relative z-10 px-5 pb-20 sm:px-6 md:px-10">
          <div className="mx-auto max-w-[680px]">
            {beats.map((beat, i) => (
              <article key={beat.title} className="grid grid-cols-[2.75rem_1fr] gap-x-4 md:grid-cols-[3.5rem_1fr] md:gap-x-8">
                <div className="flex flex-col items-center">
                  <span className="mt-meta pt-1" style={{ color: '#9c0000' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < beats.length - 1 ? (
                    <span
                      className="mt-4 w-px flex-1"
                      style={{ background: 'rgba(247,244,242,0.18)', minHeight: 36 }}
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className={i < beats.length - 1 ? 'pb-10 md:pb-12' : 'pb-4'}>
                  <p className="mt-eyebrow mb-2" style={{ color: 'rgba(247,244,242,0.45)' }}>
                    {beat.when}
                  </p>
                  <h2 className="mt-title mb-2.5 text-xl text-mt-white md:mb-3 md:text-3xl">{beat.title}</h2>
                  <p className="mt-prose text-[15px] md:text-[16px]" style={{ color: 'var(--mt-muted-strong)' }}>
                    {beat.body}
                  </p>
                  {beat.external ? (
                    <a
                      href={beat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-cta mt-4 inline-flex text-[13px]"
                      style={{ color: '#9c0000' }}
                    >
                      {beat.hrefLabel} →
                    </a>
                  ) : (
                    <Link
                      href={beat.href}
                      className="mt-cta mt-4 inline-flex text-[13px]"
                      style={{ color: '#9c0000' }}
                    >
                      {beat.hrefLabel} →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <TurnCrossroads
          backHref={back}
          backLabel="Many Turns"
          forwardHref={LIVE_BUILT}
          forwardLabel="the catalogue"
          forwardAccent="#9c0000"
          forwardOnAccent="#F7F4F2"
          barTone="dark"
          leftAccent="#9c0000"
        />
      </main>
    </ParentShell>
  );
}
