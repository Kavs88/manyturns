'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { OdysseyLines } from '@/components/brand/OdysseyLines';
import { DoorShell } from '@/components/site/DoorShell';
import { TurnCrossroads } from '@/components/site/TurnCrossroads';

type ThresholdDoorProps = {
  journey: string;
  turnLabel: string;
  title: string;
  body: string;
  brandSlot: React.ReactNode;
  continueHref: string;
  continueLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image: string;
  imageAlt: string;
  /** CSS object-position for door photography crop. */
  imagePosition?: string;
  accent: string;
  onAccent: string;
  backHref: string;
  forwardHref: string;
  forwardLabel: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Through-door threshold: photography + path beat + continue.
 * Not a clone of the child homepage — a serious handoff.
 * Motion gated post-mount (same pattern as JourneyHome) to avoid hydration mismatch.
 */
export function ThresholdDoor({
  journey,
  turnLabel,
  title,
  body,
  brandSlot,
  continueHref,
  continueLabel,
  secondaryHref,
  secondaryLabel,
  image,
  imageAlt,
  imagePosition = 'center 40%',
  accent,
  onAccent,
  backHref,
  forwardHref,
  forwardLabel,
}: ThresholdDoorProps) {
  const [live, setLive] = useState(false);
  useEffect(() => setLive(true), []);

  return (
    <DoorShell journey={journey}>
      <main className="relative flex min-h-[calc(100svh-4.5rem)] flex-col pb-36 text-[#F7F4F2] md:pb-32">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(18,6,8,0.95) 0%, rgba(18,6,8,0.82) 38%, rgba(18,6,8,0.4) 100%)',
            }}
          />
          <div className="mt-noise absolute inset-0" aria-hidden />
          <OdysseyLines tone="dark" motif="wake" opacity={0.65} />
        </div>

        <section className="relative z-10 flex flex-1 flex-col justify-center px-5 py-14 sm:px-6 md:px-10 md:py-24">
          <div className="mx-auto w-full max-w-[680px]">
            <motion.p
              className="mt-eyebrow mb-5 md:mb-6"
              style={{ color: accent }}
              initial={live ? { opacity: 0, y: 18 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, ease }}
            >
              {turnLabel}
            </motion.p>

            <motion.h1
              className="mt-display text-mt-white"
              style={{
                fontSize: 'clamp(2.75rem, 9vw, 5.5rem)',
                letterSpacing: '-0.04em',
                lineHeight: 0.94,
              }}
              initial={live ? { opacity: 0, y: 18 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.08, ease }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mt-prose mt-6 max-w-[34rem] text-[1.05rem] md:mt-7 md:text-xl"
              style={{ color: 'rgba(247,244,242,0.86)', lineHeight: 1.55 }}
              initial={live ? { opacity: 0, y: 18 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: 0.16, ease }}
            >
              {body}
            </motion.p>

            <motion.div
              className="mt-12 border-t pt-8 md:mt-14 md:pt-10"
              style={{ borderColor: 'rgba(247,244,242,0.14)' }}
              initial={live ? { opacity: 0, y: 18 } : false}
              animate={live ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.24, ease }}
            >
              <div className="mb-8 md:mb-9">{brandSlot}</div>
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <a
                  href={continueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-cta mt-cta-fill inline-flex w-full justify-center px-8 py-4 text-[15px] sm:w-auto"
                  style={{ background: accent, color: onAccent }}
                >
                  {continueLabel}
                </a>
                {secondaryHref && secondaryLabel ? (
                  <a
                    href={secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-cta text-[13px]"
                    style={{
                      color: 'rgba(247,244,242,0.75)',
                      borderBottom: '1px solid rgba(247,244,242,0.28)',
                    }}
                  >
                    {secondaryLabel}
                  </a>
                ) : null}
              </div>
            </motion.div>
          </div>
        </section>

        <TurnCrossroads
          backHref={backHref}
          backLabel="Many Turns"
          forwardHref={forwardHref}
          forwardLabel={forwardLabel}
          forwardAccent={accent}
          forwardOnAccent={onAccent}
          barTone="dark"
          leftAccent="#9c0000"
        />
      </main>
    </DoorShell>
  );
}
