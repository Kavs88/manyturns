import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { ThresholdDoor } from '@/components/site/ThresholdDoor';
import { journeyAnchor } from '@/lib/journey';

const display = Quicksand({
  subsets: ['latin'],
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'Trivia Deck',
  description:
    'Room turns on the Many Turns path — continue into Trivia Deck for live quiz nights.',
};

const LIVE = 'https://quiztation-v2.vercel.app';

export default function TriviaDeckPage() {
  const back = journeyAnchor('/trivia-deck');

  return (
    <ThresholdDoor
      journey="Enjoyment"
      turnLabel="From the path · Turn 10"
      title="Room turns"
      body="Host, screen, and phones in sync under pressure. Software that has to hold when the room is full and loud."
      image="/brand/door-trivia.jpg"
      imageAlt="A live venue night under pressure"
      imagePosition="center 45%"
      accent="#C9A84C"
      onAccent="#0F0F1A"
      continueHref={`${LIVE}/host`}
      continueLabel="Continue into Trivia Deck →"
      backHref={back}
      forwardHref={LIVE}
      forwardLabel="Trivia Deck"
      brandSlot={
        <p className={`${display.className} text-[1.75rem] font-bold tracking-[-0.045em] md:text-2xl`}>
          Trivia <span style={{ color: '#C9A84C' }}>Deck</span>
        </p>
      }
    />
  );
}
