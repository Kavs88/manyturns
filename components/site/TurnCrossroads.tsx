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
  /** Dark doors use oxblood wash; light doors (Asia Insights) use ivory wash. */
  barTone?: 'dark' | 'light';
  /** Left-turn label accent — house maroon by default. */
  leftAccent?: string;
};

/**
 * Journey crossroads on a venture door.
 * Left turn = back along Many Turns (house). Right turn = into the live child.
 */
export function TurnCrossroads({
  backHref,
  backLabel = 'Many Turns',
  forwardHref,
  forwardLabel,
  forwardAccent = '#F2F2F2',
  forwardOnAccent = '#050505',
  barTone = 'dark',
  leftAccent = '#9c0000',
}: TurnCrossroadsProps) {
  const light = barTone === 'light';
  const wash = light
    ? 'linear-gradient(180deg, rgba(249,249,249,0) 0%, rgba(249,249,249,0.92) 38%, #F9F9F9 100%)'
    : 'linear-gradient(180deg, rgba(36,3,7,0) 0%, rgba(36,3,7,0.92) 38%, #240307 100%)';
  const leftBorder = light ? 'rgba(26,28,28,0.14)' : 'rgba(247,244,242,0.16)';
  const leftText = light ? '#1A1C1C' : '#F7F4F2';
  const leftBg = light ? '#FFFFFF' : 'rgba(36,3,7,0.92)';

  return (
    <nav
      aria-label="Journey turns"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pt-2 sm:px-4 md:px-6"
      style={{
        background: wash,
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] items-stretch gap-2 sm:gap-3 md:gap-4">
        <Link
          href={backHref}
          className="group flex min-w-0 flex-1 items-center gap-2.5 border px-3 py-3.5 transition-colors sm:gap-3 sm:px-4 sm:py-4 md:px-5"
          style={{ borderColor: leftBorder, color: leftText, background: leftBg }}
        >
          <span
            className="shrink-0 text-[22px] leading-none tracking-[-0.08em] transition-transform duration-300 group-hover:-translate-x-0.5 sm:text-[24px]"
            aria-hidden
            style={{ color: leftAccent }}
          >
            ↺
          </span>
          <span className="min-w-0 text-left">
            <span
              className="mt-eyebrow block"
              style={{ color: leftAccent, fontSize: '0.625rem' }}
            >
              Left turn
            </span>
            <span className="mt-1 block truncate text-[13px] font-medium sm:text-[15px]">
              Back to {backLabel}
            </span>
          </span>
        </Link>

        <a
          href={forwardHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-cta-fill group flex min-w-0 flex-1 items-center justify-end gap-2.5 px-3 py-3.5 sm:gap-3 sm:px-4 sm:py-4 md:px-5"
          style={{ background: forwardAccent, color: forwardOnAccent }}
        >
          <span className="min-w-0 text-right">
            <span
              className="mt-eyebrow block"
              style={{ opacity: 0.72, fontSize: '0.625rem' }}
            >
              Right turn
            </span>
            <span className="mt-1 block truncate text-[13px] font-semibold sm:text-[15px]">
              Into {forwardLabel}
            </span>
          </span>
          <span
            className="shrink-0 text-[22px] leading-none tracking-[-0.08em] transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[24px]"
            aria-hidden
          >
            ↻
          </span>
        </a>
      </div>
    </nav>
  );
}
