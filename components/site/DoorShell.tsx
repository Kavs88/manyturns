import Link from 'next/link';
import { MasterMark } from '@/components/brand/MasterMark';

type DoorShellProps = {
  /** Journey type on the path — Travel / Improvement / Enjoyment / Systems. */
  journey: string;
  children: React.ReactNode;
};

/**
 * Thin Many Turns ribbon above a venture door.
 * Orientation only — no meta lineage notes on the public page.
 */
export function DoorShell({ journey, children }: DoorShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative z-50 px-4 md:px-6"
        style={{
          background: '#240307',
          borderBottom: '1px solid rgba(247,244,242,0.12)',
        }}
      >
        <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <MasterMark size={22} variant="house" className="rounded-[4px] shrink-0" />
            <span className="min-w-0 truncate text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F7F4F2]">
              Many Turns
              <span className="mx-2 opacity-35" aria-hidden>
                ·
              </span>
              <span style={{ color: 'rgba(247,244,242,0.55)', fontWeight: 500 }}>
                {journey}
              </span>
            </span>
          </Link>
          <Link
            href="/#turns"
            className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-[#F7F4F2]"
            style={{ color: '#9c0000' }}
          >
            The path →
          </Link>
        </div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
