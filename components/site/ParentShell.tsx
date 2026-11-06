import Link from 'next/link';
import { MasterMark } from '@/components/brand/MasterMark';

const routes = [
  { href: '/#idea', label: 'The idea' },
  { href: '/#journeys', label: 'Journeys' },
  { href: '/built', label: 'Built' },
  { href: '/advisory', label: 'Kavsulting' },
  { href: '/asia-insights', label: 'Asia Insights' },
  { href: '/trivia-deck', label: 'Trivia Deck' },
];

export function ParentShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-mt-oxblood text-mt-white">
      <header
        className="sticky top-0 z-50 px-4 sm:px-6 md:px-10"
        style={{
          borderBottom: '1px solid rgba(247,244,242,0.1)',
          background: 'rgba(26, 10, 12, 0.82)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          paddingTop: 'env(safe-area-inset-top)',
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between gap-4 md:h-[4.5rem] md:gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
            <MasterMark size={30} variant="house" className="rounded-[6px] shrink-0 md:hidden" />
            <MasterMark size={34} variant="house" className="rounded-[6px] shrink-0 hidden md:block" />
            <span className="mt-wordmark truncate text-mt-white">Many Turns</span>
          </Link>
          <div className="flex shrink-0 items-center gap-3 sm:gap-4 md:gap-5">
            <a
              href="/#held"
              className="mt-cta hidden text-[12px] sm:inline"
              style={{
                color: 'rgba(247,244,242,0.7)',
                borderBottom: '1px solid rgba(247,244,242,0.28)',
              }}
            >
              The path
            </a>
            <a
              href="mailto:sam@kavsulting.com"
              className="mt-cta mt-cta-fill px-3.5 py-2 text-[12px] sm:px-4 sm:py-2.5"
              style={{ background: '#9c0000', color: '#F7F4F2' }}
            >
              Talk
            </a>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer
        className="px-5 py-14 sm:px-6 md:px-10 md:py-16"
        style={{
          borderTop: '1px solid rgba(247,244,242,0.1)',
          color: 'rgba(247,244,242,0.45)',
          paddingBottom: 'max(3.5rem, env(safe-area-inset-bottom))',
        }}
      >
        <div className="mx-auto flex max-w-[1120px] flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2.5">
                <MasterMark size={22} variant="house" className="rounded-[4px]" />
                <span className="mt-wordmark text-mt-white">Many Turns</span>
              </div>
              <p
                className="mt-prose max-w-sm text-[13px]"
                style={{ color: 'rgba(247,244,242,0.55)', lineHeight: 1.5 }}
              >
                Different paths. One journey.
              </p>
              <p className="mt-meta mt-3 text-[11px]" style={{ color: 'rgba(247,244,242,0.38)' }}>
                © 2026 Manyturns OÜ
              </p>
            </div>
            <a
              href="mailto:sam@kavsulting.com"
              className="mt-cta mt-cta-fill inline-flex w-fit px-4 py-2.5 text-[12px]"
              style={{ background: '#9c0000', color: '#F7F4F2' }}
            >
              Talk
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 border-t pt-6" style={{ borderColor: 'rgba(247,244,242,0.1)' }}>
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="mt-cta text-[12px] transition-colors hover:text-[#F7F4F2]"
                style={{ fontWeight: 500, letterSpacing: '0.04em' }}
              >
                {r.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
