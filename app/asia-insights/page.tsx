import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TurnCrossroads } from '@/components/site/TurnCrossroads';
import { journeyAnchor } from '@/lib/journey';

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Asia Insights',
  description:
    "The insider's guide to living in Southeast Asia. By people who stayed. For people just arriving.",
};

const LIVE = 'https://asia-insights.com';

const nav = [
  { label: 'Cities', href: `${LIVE}/cities` },
  { label: 'Services', href: `${LIVE}/services` },
  { label: 'Guides', href: `${LIVE}/guides` },
  { label: 'Community', href: `${LIVE}/community` },
  { label: 'Concierge', href: `${LIVE}/concierge` },
] as const;

function Mark({ size }: { size: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-bold text-white"
      style={{ width: size, height: size, background: '#0D7F6B', fontSize: size * 0.42 }}
      aria-hidden
    >
      A
    </span>
  );
}

export default function AsiaInsightsPage() {
  const back = journeyAnchor('/asia-insights');

  return (
    <main className={`${body.className} min-h-screen pb-28`} style={{ background: '#F9F9F9', color: '#1A1C1C' }}>
      <header className="bg-white" style={{ borderBottom: '1px solid rgba(26,28,28,0.08)' }}>
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between gap-6 px-6 md:px-10">
          <a href={LIVE} target="_blank" rel="noopener noreferrer" className="flex min-w-0 items-center gap-2.5">
            <Mark size={32} />
            <span className="font-semibold tracking-[-0.02em]">Asia Insights</span>
          </a>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-7 lg:flex" aria-label="Asia Insights">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-medium"
                style={{ color: '#3E4945' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`${LIVE}/join`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-4 py-2 text-[14px] font-semibold text-white"
            style={{ background: '#0D7F6B' }}
          >
            Join free
          </a>
        </div>
      </header>

      <section
        className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-20 text-center text-white md:px-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(12,32,28,0.22) 0%, rgba(10,28,24,0.78) 100%), linear-gradient(165deg, #8aa39a 0%, #2d5a50 38%, #14332c 100%)',
        }}
      >
        <p
          className="mb-6 inline-flex rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
          style={{ background: 'rgba(255,255,255,0.14)' }}
        >
          Now live — Southeast Asia
        </p>
        <Mark size={64} />
        <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">Asia Insights</p>
        <h1
          className="mx-auto mt-4 max-w-3xl font-extrabold tracking-[-0.03em] leading-[1.05]"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)' }}
        >
          The insider&apos;s guide to living in Southeast Asia.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed">
          <span className="font-semibold">By people who stayed.</span> For people just arriving. City guides, honest
          answers and real human help — one trusted place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`${LIVE}/concierge`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl px-5 py-3 text-[15px] font-semibold text-white"
            style={{ background: '#0D7F6B' }}
          >
            Get personal help →
          </a>
          <a
            href={`${LIVE}/join`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border px-5 py-3 text-[15px] font-semibold text-white"
            style={{ borderColor: 'rgba(255,255,255,0.55)' }}
          >
            Join free
          </a>
        </div>
        <p className="mt-5 max-w-md text-[13px]" style={{ color: 'rgba(255,255,255,0.78)' }}>
          Tell us what you need — visas, housing, business setup. Real humans, reply in 24h. No account needed.
        </p>
      </section>

      <TurnCrossroads
        backHref={back}
        backLabel="Many Turns"
        forwardHref={LIVE}
        forwardLabel="Asia Insights"
        forwardAccent="#0D7F6B"
        forwardOnAccent="#FFFFFF"
        barTone="light"
        leftAccent="#0D7F6B"
      />
    </main>
  );
}
