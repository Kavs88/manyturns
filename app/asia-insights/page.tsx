import type { Metadata } from 'next';
import { ThresholdDoor } from '@/components/site/ThresholdDoor';
import { journeyAnchor } from '@/lib/journey';

export const metadata: Metadata = {
  title: 'Asia Insights',
  description:
    'Life turns on the Many Turns path — continue into Asia Insights for living in Southeast Asia.',
};

const LIVE = 'https://asia-insights.com';

export default function AsiaInsightsPage() {
  const back = journeyAnchor('/asia-insights');

  return (
    <ThresholdDoor
      journey="Travel"
      turnLabel="From the path · Turn 09"
      title="Life turns"
      body="Trusted introductions and local relationships for people arriving in Southeast Asia — founded from living there."
      image="/brand/door-asia.jpg"
      imageAlt="Misty mountain valley in Southeast Asia — arrival and belonging"
      imagePosition="center 32%"
      accent="#0D7F6B"
      onAccent="#FFFFFF"
      continueHref={LIVE}
      continueLabel="Continue into Asia Insights →"
      secondaryHref={`${LIVE}/join`}
      secondaryLabel="Join free"
      backHref={back}
      forwardHref={LIVE}
      forwardLabel="Asia Insights"
      brandSlot={
        <div className="flex items-center gap-3.5">
          <span
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[15px] font-bold text-white"
            style={{ background: '#0D7F6B', fontFamily: 'var(--font-ui), system-ui, sans-serif' }}
            aria-hidden
          >
            A
          </span>
          <span
            className="text-[1.35rem] font-semibold tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-ui), system-ui, sans-serif' }}
          >
            Asia Insights
          </span>
        </div>
      }
    />
  );
}
