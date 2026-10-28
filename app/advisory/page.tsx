import type { Metadata } from 'next';
import {
  Castoro_Titling,
  Cinzel,
  Inter,
  Outfit,
  Space_Mono,
} from 'next/font/google';
import { TurnCrossroads } from '@/components/site/TurnCrossroads';
import { journeyAnchor } from '@/lib/journey';

const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const display = Outfit({
  subsets: ['latin'],
  weight: ['500'],
});

/** Live stack: Castoro Titling → Cinzel (Google Castoro has no 700; live falls back to Cinzel). */
const logoCastoro = Castoro_Titling({
  subsets: ['latin'],
  weight: '400',
});

const logoCinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700'],
});

const logoTrade = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Kavanagh Consulting',
  description:
    'Real people. Clear thinking. Results that matter. Kavanagh Consulting is a commercial advisory practice of Manyturns OÜ.',
};

const LIVE = 'https://kavsulting.com';
const BOOK = 'https://kavsulting.com/book.html';

const nav = [
  { label: 'About', href: `${LIVE}/index.html#about` },
  { label: 'Proof', href: `${LIVE}/index.html#coaching-impact` },
  { label: 'Design', href: `${LIVE}/index.html#portfolio` },
  { label: 'Solutions', href: `${LIVE}/index.html#built` },
  { label: 'Clients', href: `${LIVE}/index.html#clients` },
  { label: 'Impact', href: `${LIVE}/impact.html` },
  { label: 'Services', href: `${LIVE}/services.html` },
  { label: 'Account', href: `${LIVE}/account.html` },
] as const;

export default function AdvisoryPage() {
  const back = journeyAnchor('/advisory');

  return (
    <main
      className={`${body.className} min-h-screen pb-28`}
      style={{ background: '#050505', color: '#F2F2F2' }}
    >
      <header className="py-8">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 md:px-10 lg:px-[5.5rem]">
          <a
            href={LIVE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kavanagh Consulting"
            className="flex shrink-0 items-end"
          >
            <span className="flex flex-col items-end leading-none">
              <span
                className={`${logoCastoro.className} ${logoCinzel.className} text-[18px] uppercase`}
                style={{
                  fontFamily: '"Castoro Titling", Cinzel, Georgia, serif',
                  fontWeight: 700,
                  color: '#EDEDEB',
                  letterSpacing: '0.14em',
                  lineHeight: 1,
                }}
              >
                KAVANAGH
              </span>
              <span
                className={`${logoTrade.className} text-[9px] uppercase`}
                style={{
                  color: '#8E9094',
                  letterSpacing: '0.32em',
                  lineHeight: 1,
                  marginTop: '0.35em',
                  paddingRight: '0.32em',
                  marginRight: '-0.32em',
                  fontWeight: 500,
                }}
              >
                CONSULTING
              </span>
            </span>
          </a>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-8 lg:flex"
            aria-label="Kavanagh Consulting"
          >
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.6px] font-medium uppercase"
                style={{ color: '#9A9A9A', letterSpacing: '0.1em' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center justify-center px-[19px] py-2 text-[12.8px] font-bold sm:inline-flex"
            style={{
              background: '#F2F2F2',
              color: '#000000',
              borderRadius: 2,
              letterSpacing: '0.05em',
            }}
          >
            Book a Free Intro Call
          </a>
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-6.25rem)] flex-col justify-center pb-14 pt-10 md:pt-16">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 lg:px-[5.5rem]">
          <p
            className="mb-4 block text-[0.8rem] uppercase"
            style={{ color: '#9A9A9A', letterSpacing: '0.2em' }}
          >
            Global Advisory
          </p>

          <h1
            className={`${display.className} uppercase`}
            style={{
              fontSize: 'clamp(2.75rem, 7.2vw, 5.2rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: '#F2F2F2',
            }}
          >
            Real people.
            <br />
            <span style={{ color: '#9A9A9A', opacity: 0.6 }}>Clear thinking.</span>
            <br />
            Results that matter.
          </h1>

          <div className="mt-8 max-w-[600px]">
            <p className="text-[1.25rem] leading-[1.6]" style={{ color: '#F2F2F2' }}>
              We help founders and leadership teams cut through complexity — across the UK, the Channel Islands, Europe, and Southeast Asia. No gloss, just the work.
            </p>
            <p
              className="mt-5 text-[1.02rem] font-light leading-[1.6]"
              style={{ color: 'rgba(200, 214, 226, 0.92)' }}
            >
              Technology keeps changing how we work. We spot where that change is actually useful — and put AI and the right tech to work on the opportunity, not the hype.
            </p>

            <div className="mt-8">
              <a
                href={BOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-5 text-[15px] font-bold"
                style={{
                  background: '#F2F2F2',
                  color: '#000000',
                  borderRadius: 2,
                  letterSpacing: '0.04em',
                }}
              >
                Book a Free Intro Call
              </a>
            </div>

            <a
              href={`${LIVE}/index.html#built`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block pb-0.5 text-[12.8px] uppercase"
              style={{ color: '#9A9A9A', letterSpacing: '0.1em' }}
            >
              See what we&apos;ve built ↓
            </a>
          </div>
        </div>
      </section>

      <TurnCrossroads
        backHref={back}
        backLabel="Many Turns"
        forwardHref={LIVE}
        forwardLabel="Kavsulting"
        forwardAccent="#F2F2F2"
        forwardOnAccent="#050505"
      />
    </main>
  );
}
