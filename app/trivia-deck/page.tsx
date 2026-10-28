import type { Metadata } from 'next';
import { Inter, Quicksand } from 'next/font/google';
import { TurnCrossroads } from '@/components/site/TurnCrossroads';
import { journeyAnchor } from '@/lib/journey';

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const display = Quicksand({
  subsets: ['latin'],
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'Trivia Deck',
  description:
    'Live pub quiz nights — host, venue screen, and phones in sync. An independent software asset of Many Turns.',
};

const LIVE = 'https://quiztation-v2.vercel.app';

export default function TriviaDeckPage() {
  const back = journeyAnchor('/trivia-deck');

  return (
    <main
      className={`${body.className} min-h-screen pb-28`}
      style={{ background: '#0F0F1A', color: '#FAFAFA' }}
    >
      <header
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{
          background: 'rgba(15,15,26,0.72)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1100px] items-center justify-between gap-6 px-6 md:px-10">
          <a
            href={LIVE}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} text-2xl font-bold tracking-[-0.04em]`}
          >
            Trivia <span style={{ color: '#C9A84C' }}>Deck</span>
          </a>
          <a
            href={`${LIVE}/host`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-[14px] font-bold text-white"
            style={{ background: '#AD8D3C' }}
          >
            Host a night
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center md:px-10 md:pt-28">
        <p
          className="mb-6 text-[12px] font-black uppercase tracking-[0.35em]"
          style={{ color: '#C9A84C' }}
        >
          Live · Loud · Ridiculously fun
        </p>
        <h1
          className={`${display.className} font-bold tracking-[-0.05em] leading-[0.92]`}
          style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)' }}
        >
          <span
            style={{
              backgroundImage: 'linear-gradient(to bottom right, #FFFFFF, rgba(255,255,255,0.35))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            13 round types.
          </span>
          <br />
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #C9A84C, #FFC516)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Infinite game nights.
          </span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed md:text-xl"
          style={{ color: 'rgba(250,250,250,0.62)' }}
        >
          Buzzer races, risky wagers, minefields, mind games and a live leaderboard the whole room is watching. It all
          runs in the browser. Players scan a QR code and they&apos;re in. No app, no faff.
        </p>
        <a
          href={`${LIVE}/host`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-2xl px-8 py-4 text-lg font-black text-white"
          style={{ background: '#AD8D3C' }}
        >
          Host a night
        </a>
      </section>

      <TurnCrossroads
        backHref={back}
        backLabel="Many Turns"
        forwardHref={LIVE}
        forwardLabel="Trivia Deck"
        forwardAccent="#C9A84C"
        forwardOnAccent="#0F0F1A"
        barTone="dark"
        leftAccent="#C9A84C"
      />
    </main>
  );
}
