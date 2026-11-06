import type { Metadata } from 'next';
import { Castoro_Titling, Space_Mono } from 'next/font/google';
import { ThresholdDoor } from '@/components/site/ThresholdDoor';
import { journeyAnchor } from '@/lib/journey';

/** R1 lock — Castoro Titling 400 only (no Cinzel / 700). */
const logoCastoro = Castoro_Titling({
  subsets: ['latin'],
  weight: '400',
});

const logoTrade = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Kavsulting',
  description:
    'The practice stop on the Many Turns path — continue into Kavanagh Consulting.',
};

const LIVE = 'https://kavsulting.com';
const BOOK = 'https://kavsulting.com/book.html';

export default function AdvisoryPage() {
  const back = journeyAnchor('/advisory');

  return (
    <ThresholdDoor
      journey="Improvement"
      turnLabel="From the path · Turn 06"
      title="The practice"
      body="Find the real problem, build the structure, stay until people can run it. Coaching sits inside that work — not as a separate pitch."
      image="/brand/door-kavsulting.jpg"
      imageAlt="The practice — workrooms and commercial pressure"
      imagePosition="center 38%"
      accent="#F2F2F2"
      onAccent="#050505"
      continueHref={LIVE}
      continueLabel="Continue into Kavsulting →"
      secondaryHref={BOOK}
      secondaryLabel="Book an intro call"
      backHref={back}
      forwardHref={LIVE}
      forwardLabel="Kavsulting"
      brandSlot={
        <a
          href={LIVE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kavanagh Consulting"
          className="inline-flex items-end"
        >
          <span className="flex flex-col items-end leading-none">
            <span
              className={`${logoCastoro.className} text-[20px] uppercase`}
              style={{
                fontFamily: '"Castoro Titling", Georgia, serif',
                fontWeight: 400,
                color: '#EDEDEB',
                letterSpacing: '0.16em',
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
                marginTop: '0.4em',
                paddingRight: '0.32em',
                marginRight: '-0.32em',
                fontWeight: 500,
              }}
            >
              CONSULTING
            </span>
          </span>
        </a>
      }
    />
  );
}
