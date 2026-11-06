'use client';

import { useEffect, useState } from 'react';

/** Thin top progress cue for the home journey scroll. */
export function PathProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setP(max > 0 ? Math.min(1, el.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      aria-hidden
      style={{ background: 'rgba(247,244,242,0.06)' }}
    >
      <div
        className="h-full origin-left transition-[width] duration-150 ease-out"
        style={{
          width: `${p * 100}%`,
          background: '#9c0000',
        }}
      />
    </div>
  );
}
