import Link from 'next/link';

type TurnCrossroadsProps = {
  /** Anchor back into the Many Turns journey spine. */
  backHref: string;
  backLabel?: string;
  /** Forward into the live child site. */
  forwardHref: string;
  forwardLabel: string;
  /** Accent for the forward turn — child brand cue. */
  forwardAccent?: string;
  forwardOnAccent?: string;
  /** Dark doors use midnight wash; light doors (Asia Insights) use ivory wash. */
  barTone?: 'dark' | 'light';
  /** Left-turn label accent (defaults by barTone). */
  leftAccent?: string;
};

/**
 * Journey crossroads on a venture door.
 * Left turn = back along Many Turns. Right turn = into the live practice.
 */
export function TurnCrossroads({
  backHref,
  backLabel = 'Many Turns',
  forwardHref,
  forwardLabel,
  forwardAccent = '#F2F2F2',
  forwardOnAccent = '#050505',
  barTone = 'dark',
  leftAccent,
}: TurnCrossroadsProps) {
  const light = barTone === 'light';
  const wash = light
    ? 'linear-gradient(180deg, rgba(249,249,249,0) 0%, rgba(249,249,249,0.92) 38%, #F9F9F9 100%)'
    : 'linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.88) 38%, #050505 100%)';
  const leftColor = leftAccent ?? (light ? '#0D7F6B' : '#8DCFFF');
  const leftBorder = light ? 'rgba(26,28,28,0.14)' : 'rgba(242,242,242,0.18)';
  const leftText = light ? '#1A1C1C' : '#F2F2F2';

  return (
    <nav
      aria-label="Journey turns"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-2 md:px-6"
      style={{ background: wash }}
    >
      <div className="mx-auto flex max-w-[1200px] items-stretch gap-3 md:gap-4">
        <Link
          href={backHref}
          className="group flex min-w-0 flex-1 items-center gap-3 border px-4 py-3.5 transition-colors md:px-5"
          style={{ borderColor: leftBorder, color: leftText, background: light ? '#FFFFFF' : 'transparent' }}
        >
          <span
            className="shrink-0 text-[22px] leading-none tracking-[-0.08em]"
            aria-hidden
            style={{ color: leftColor }}
          >
            ↺
          </span>
          <span className="min-w-0 text-left">
            <span
              className="block text-[10px] uppercase tracking-[0.22em]"
              style={{ color: leftColor }}
            >
              Left turn
            </span>
            <span className="mt-0.5 block truncate text-[14px] font-medium">
              Back to {backLabel}
            </span>
          </span>
        </Link>

        <a
          href={forwardHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-w-0 flex-1 items-center justify-end gap-3 px-4 py-3.5 transition-opacity hover:opacity-90 md:px-5"
          style={{ background: forwardAccent, color: forwardOnAccent }}
        >
          <span className="min-w-0 text-right">
            <span
              className="block text-[10px] uppercase tracking-[0.22em]"
              style={{ opacity: 0.7 }}
            >
              Right turn
            </span>
            <span className="mt-0.5 block truncate text-[14px] font-semibold">
              Into {forwardLabel}
            </span>
          </span>
          <span className="shrink-0 text-[22px] leading-none tracking-[-0.08em]" aria-hidden>
            ↻
          </span>
        </a>
      </div>
    </nav>
  );
}
