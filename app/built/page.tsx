import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { TurnCrossroads } from '@/components/site/TurnCrossroads';
import { journeyAnchor } from '@/lib/journey';

export const metadata: Metadata = {
  title: 'Built along the way',
  description:
    'How the catalogue grew from the practice — systems that left the room, and the ventures that followed. Manyturns OÜ.',
};

const LIVE_BUILT = 'https://kavsulting.com/index.html#built';

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
    when: 'Catalogue',
    title: 'Asia Insights',
    body: 'Relocation and life-after-arrival across Southeast Asia — a community venture that grew from living there, now on its own door.',
    href: '/asia-insights',
    hrefLabel: 'Life turns',
    external: false,
  },
  {
    when: 'Catalogue',
    title: 'Trivia Deck / Quiztation',
    body: 'Host, venue screen, and phones in one room — live quiz nights under pressure. Software that had to hold on a Friday night.',
    href: '/trivia-deck',
    hrefLabel: 'Room turns',
    external: false,
  },
  {
    when: 'Catalogue',
    title: 'Places & Spaces',
    body: 'A landlord operating system — tenants, money, requests, and a public brochure for a rental and event-space portfolio.',
    href: LIVE_BUILT,
    hrefLabel: 'Kavsulting log',
    external: true,
  },
  {
    when: 'Catalogue',
    title: 'Personal Intelligence Platform',
    body: 'Private durable memory with provenance — recall you can verify. Operator system, not a public product door yet.',
    href: LIVE_BUILT,
    hrefLabel: 'Kavsulting log',
    external: true,
  },
  {
    when: 'Ongoing',
    title: 'The full solutions log',
    body: 'Marine ops, youth safeguarding, venue sites, marketplace wiring — the catalogue keeps proceeding on Kavsulting. Many Turns holds the path; the practice holds the depth.',
    href: LIVE_BUILT,
    hrefLabel: 'Open the log',
    external: true,
  },
] as const;

export default function BuiltPage() {
  const back = journeyAnchor('/built');

  return (
    <main
      className="min-h-screen pb-28"
      style={{
        background: '#0B1018',
        color: '#F2F2EF',
        fontFamily: 'var(--font-ui), system-ui, sans-serif',
      }}
    >
      <header className="px-6 md:px-10" style={{ borderBottom: '1px solid rgba(242,242,239,0.08)' }}>
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image src="/brand/m-mark.svg" alt="" width={32} height={32} className="rounded-[4px]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.22em]">Many Turns</span>
          </Link>
          <a
            href={LIVE_BUILT}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-3.5 py-2 text-[12px] font-medium"
            style={{ background: '#F2F2EF', color: '#0B1018' }}
          >
            Full catalogue →
          </a>
        </div>
      </header>

      <section className="px-6 pb-12 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-5 text-[12px] uppercase tracking-[0.22em]" style={{ color: '#8DCFFF' }}>
            Business development
          </p>
          <h1
            className="font-semibold tracking-[-0.03em] leading-[1.02]"
            style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}
          >
            Built along the way
          </h1>
          <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgba(242,242,239,0.72)' }}>
            The practice did not stop at advice. Founders needed systems that held — so the catalogue grew as the rooms
            demanded it. Some builds stayed private. Some became ventures under the house. The path is here; the depth
            of the log stays with Kavsulting.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-[720px]">
          {beats.map((beat, i) => (
            <article
              key={beat.title}
              className="grid grid-cols-[3.5rem_1fr] gap-x-5 md:gap-x-8"
            >
              <div className="flex flex-col items-center">
                <span className="pt-1 text-[13px] font-semibold" style={{ color: '#8DCFFF' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {i < beats.length - 1 ? (
                  <span
                    className="mt-4 w-px flex-1"
                    style={{ background: 'rgba(141,207,255,0.35)', minHeight: 40 }}
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className={i < beats.length - 1 ? 'pb-12 md:pb-14' : 'pb-4'}>
                <p className="mb-2 text-[12px] uppercase tracking-[0.18em]" style={{ color: '#8DCFFF' }}>
                  {beat.when}
                </p>
                <h2 className="mb-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{beat.title}</h2>
                <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(242,242,239,0.78)' }}>
                  {beat.body}
                </p>
                {beat.external ? (
                  <a
                    href={beat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-[13px] font-medium"
                    style={{ color: '#8DCFFF' }}
                  >
                    {beat.hrefLabel} →
                  </a>
                ) : (
                  <Link
                    href={beat.href}
                    className="mt-4 inline-flex text-[13px] font-medium"
                    style={{ color: '#8DCFFF' }}
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
        forwardAccent="#8DCFFF"
        forwardOnAccent="#0B1018"
        barTone="dark"
        leftAccent="#8DCFFF"
      />
    </main>
  );
}
