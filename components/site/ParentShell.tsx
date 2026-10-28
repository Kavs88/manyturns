import Image from 'next/image';
import Link from 'next/link';

const routes = [
  { href: '/advisory', label: 'Advisory' },
  { href: '/built', label: 'Built' },
  { href: '/asia-insights', label: 'Asia Insights' },
  { href: '/trivia-deck', label: 'Trivia Deck' },
];

export function ParentShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: '#0B1018',
        color: '#F2F2EF',
        fontFamily: 'var(--font-ui), system-ui, sans-serif',
      }}
    >
      <header
        className="px-6 md:px-10"
        style={{ borderBottom: '1px solid rgba(242,242,239,0.08)' }}
      >
        <div className="max-w-[1080px] mx-auto h-16 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image src="/brand/m-mark.svg" alt="" width={32} height={32} className="rounded-[4px]" />
            <span className="text-[12px] tracking-[0.22em] uppercase font-semibold">Many Turns</span>
          </Link>
          <a
            href="mailto:sam@kavsulting.com"
            className="text-[12px] px-3.5 py-2 font-medium shrink-0"
            style={{ background: '#F2F2EF', color: '#0B1018' }}
          >
            Begin a conversation
          </a>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer
        className="px-6 md:px-10 py-10"
        style={{ borderTop: '1px solid rgba(242,242,239,0.08)', color: 'rgba(242,242,239,0.45)' }}
      >
        <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[12px]">
          <span>© 2026 Manyturns OÜ · Registered in Estonia</span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {routes.map((r) => (
              <Link key={r.href} href={r.href} className="hover:text-[#F2F2EF] transition-colors">
                {r.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
