type OdysseyLinesProps = {
  /** dark = on oxblood; light = on ivory */
  tone?: 'dark' | 'light';
  /** which drawing set */
  motif?: 'voyage' | 'wake' | 'coast';
  className?: string;
  opacity?: number;
};

/**
 * Odyssey-style line drawings — stroke only, atmospheric.
 * Ship, wake, stars/landfalls, coastline. Not illustration noise.
 */
export function OdysseyLines({
  tone = 'dark',
  motif = 'voyage',
  className = '',
  opacity,
}: OdysseyLinesProps) {
  const stroke = tone === 'dark' ? 'rgba(247,244,242,0.14)' : 'rgba(26,10,12,0.1)';
  const accent = tone === 'dark' ? 'rgba(156,0,0,0.28)' : 'rgba(156,0,0,0.18)';
  const mark = tone === 'dark' ? 'rgba(247,244,242,0.22)' : 'rgba(26,10,12,0.16)';
  const o = opacity ?? 1;

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 900"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: o }}
    >
      {motif === 'voyage' ? (
        <>
          {/* Distant coastline */}
          <path
            d="M-20 210 C 180 190, 320 240, 480 200 S 780 150, 960 190 S 1240 230, 1480 180"
            stroke={stroke}
            strokeWidth="1"
          />
          {/* Primary voyage path */}
          <path
            d="M-40 520 C 160 400, 340 620, 560 480 S 860 300, 1080 420 S 1300 560, 1520 400"
            stroke={stroke}
            strokeWidth="1.35"
          />
          <path
            d="M80 640 C 280 560, 460 720, 680 600 S 1000 500, 1280 640 S 1400 700, 1520 620"
            stroke={accent}
            strokeWidth="1"
          />
          {/* Wave sets */}
          <path
            d="M920 680 C 980 668, 1020 692, 1080 680 S 1160 668, 1220 682"
            stroke={stroke}
            strokeWidth="0.9"
          />
          <path
            d="M940 700 C 1000 688, 1040 712, 1100 700 S 1180 688, 1240 702"
            stroke={stroke}
            strokeWidth="0.9"
          />
          <path
            d="M960 720 C 1020 708, 1060 732, 1120 720 S 1200 708, 1260 722"
            stroke={stroke}
            strokeWidth="0.9"
          />
          {/* Simple ship (line) — hull + mast + sail suggestion */}
          <g transform="translate(1040 640)" stroke={mark} strokeWidth="1.15" strokeLinecap="round">
            <path d="M0 28 C 18 36, 54 36, 78 28 L 72 18 C 52 24, 26 24, 8 18 Z" />
            <path d="M36 18 V -8" />
            <path d="M36 -8 L 58 10 L 36 14" />
            <path d="M36 -4 L 18 12" />
          </g>
          {/* Landfall stars / turns */}
          <circle cx="560" cy="480" r="3.5" fill={mark} />
          <circle cx="860" cy="340" r="2.5" fill={accent} />
          <circle cx="1080" cy="420" r="3" fill={mark} />
          <circle cx="280" cy="540" r="2" fill={stroke} />
          {/* Crossed bearing marks */}
          <path d="M860 328 v24 M848 340 h24" stroke={accent} strokeWidth="0.75" />
        </>
      ) : null}

      {motif === 'wake' ? (
        <>
          <path
            d="M-40 380 C 220 260, 400 540, 640 400 S 980 200, 1200 340 S 1380 500, 1520 360"
            stroke={stroke}
            strokeWidth="1.4"
          />
          <path
            d="M120 560 C 340 480, 520 680, 760 540 S 1100 420, 1400 580"
            stroke={accent}
            strokeWidth="1.05"
          />
          <path
            d="M400 720 C 560 680, 700 760, 880 700 S 1160 640, 1400 720"
            stroke={stroke}
            strokeWidth="0.9"
          />
          <circle cx="980" cy="270" r="4.5" fill={mark} />
          <circle cx="640" cy="400" r="3" fill={accent} />
          <circle cx="1200" cy="340" r="2.5" fill={mark} />
          {/* Compass rose hint */}
          <g transform="translate(1280 160)" stroke={stroke} strokeWidth="0.85">
            <circle cx="0" cy="0" r="28" />
            <path d="M0 -28 V 28 M-28 0 H 28" />
            <path d="M0 -18 L 6 0 L 0 18 L -6 0 Z" stroke={accent} />
          </g>
        </>
      ) : null}

      {motif === 'coast' ? (
        <>
          <path
            d="M-20 280 C 200 240, 360 320, 540 260 S 860 180, 1100 240 S 1340 300, 1480 250"
            stroke={stroke}
            strokeWidth="1.1"
          />
          <path
            d="M-20 320 C 220 290, 400 360, 600 310 S 920 240, 1180 300 S 1380 350, 1480 310"
            stroke={accent}
            strokeWidth="0.85"
          />
          {/* Island outline */}
          <path
            d="M980 480 C 1020 450, 1100 450, 1140 490 C 1170 520, 1160 580, 1110 600 C 1050 625, 980 610, 960 560 C 945 520, 955 500, 980 480 Z"
            stroke={stroke}
            strokeWidth="1.05"
          />
          <path
            d="M1040 520 C 1060 500, 1095 505, 1110 530"
            stroke={mark}
            strokeWidth="0.9"
          />
          <circle cx="1085" cy="545" r="2.5" fill={accent} />
          {/* Current lines */}
          <path
            d="M200 620 C 280 600, 340 640, 420 615 S 560 580, 640 610"
            stroke={stroke}
            strokeWidth="0.8"
          />
          <path
            d="M220 650 C 300 630, 360 670, 440 645 S 580 610, 660 640"
            stroke={stroke}
            strokeWidth="0.8"
          />
        </>
      ) : null}
    </svg>
  );
}
