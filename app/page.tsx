import type { Metadata } from 'next';
import { JourneyHome } from '@/components/home/JourneyHome';
import { ParentShell } from '@/components/site/ParentShell';

export const metadata: Metadata = {
  title: 'Many Turns',
  description:
    'Named for Odysseus — the man of many turns. Many journeys: travel, improvement, enjoyment. Find the real problem. Finish the turn.',
};

export default function HomePage() {
  return (
    <ParentShell>
      <JourneyHome />
    </ParentShell>
  );
}
