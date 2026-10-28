import type { Metadata } from 'next';
import { JourneyHome } from '@/components/home/JourneyHome';
import { ParentShell } from '@/components/site/ParentShell';

export const metadata: Metadata = {
  title: 'Many Turns',
  description:
    'Different paths. One journey. Many Turns is the house for journeys people have already been through — and the solution that holds when the path turns.',
};

export default function HomePage() {
  return (
    <ParentShell>
      <JourneyHome />
    </ParentShell>
  );
}
