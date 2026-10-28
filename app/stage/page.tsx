import Link from 'next/link';
import { ManyTurnsLogo } from '@/components/brand/ManyTurnsLogo';
import { GlobalNavDrawer } from '@/components/navigation/GlobalNavDrawer';

export const metadata = {
  title: 'The Stage | Many Turns',
  description:
    'Live craft: standup comedy, wedding MCing, corporate galas, and room direction — Sam Kavanagh.',
};

export default function StagePage() {
  return (
    <main className="min-h-screen bg-sand-50 text-stone-900 font-sans">
      <GlobalNavDrawer />

      <section className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <ManyTurnsLogo size={36} />
          <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
            04 / Live Craft
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight text-stone-950 leading-[1.1]">
          The Stage
        </h1>
        <p className="mt-6 text-lg text-stone-600 leading-relaxed font-light">
          Sam Kavanagh live on the mic — standup comedy, premier wedding MCing,
          corporate galas, and professional room direction across the UK, Europe,
          and Asia.
        </p>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Rooms don&apos;t care about your deck. They care about pace, clarity,
          and whether the next ten minutes hold.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:hello@manyturns.co?subject=Stage%20inquiry"
            className="inline-flex items-center px-5 py-2.5 bg-slate-900 text-sand-50 text-sm font-mono uppercase tracking-wider rounded-md hover:bg-slate-800 transition-colors"
          >
            Inquire for MC / Host
          </a>
          <Link
            href="/"
            className="inline-flex items-center px-5 py-2.5 border border-stone-300 text-sm font-mono uppercase tracking-wider rounded-md text-stone-700 hover:border-stone-500 transition-colors"
          >
            ← House
          </Link>
        </div>
      </section>

      <footer className="max-w-3xl mx-auto px-6 py-12 text-xs font-mono text-stone-500 border-t border-stone-200">
        © 2026 Manyturns OÜ · Direct hire
      </footer>
    </main>
  );
}
