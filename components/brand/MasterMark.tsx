type MasterMarkVariant = 'color' | 'house' | 'mono-light' | 'mono-dark';

type MasterMarkProps = {
  size?: number;
  variant?: MasterMarkVariant;
  className?: string;
  title?: string;
};

const strokes: Record<MasterMarkVariant, { outer: string; tile?: string }> = {
  color: { outer: 'url(#mtMetal)', tile: '#0B1018' },
  house: { outer: '#F7F4F2', tile: '#9c0000' },
  'mono-light': { outer: '#F2F2EF' },
  'mono-dark': { outer: '#0B1018' },
};

/**
 * Stage 5 production Many Turns M — board silhouette.
 * Do not use ManyTurnsLogo (loops scaffold) as the master mark.
 */
export function MasterMark({
  size = 34,
  variant = 'house',
  className,
  title = 'Many Turns',
}: MasterMarkProps) {
  const stroke = strokes[variant].outer;
  const tile = strokes[variant].tile;
  const gradId = `mtMetal-${variant}-${size}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      {variant === 'color' ? (
        <defs>
          <linearGradient
            id={gradId}
            x1="36"
            y1="28"
            x2="204"
            y2="212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B8E4FF" />
            <stop offset="0.38" stopColor="#8DCFFF" />
            <stop offset="0.72" stopColor="#174D83" />
            <stop offset="1" stopColor="#0B1018" />
          </linearGradient>
        </defs>
      ) : null}
      {tile ? <rect width="240" height="240" rx="36" fill={tile} /> : null}
      <path
        d="M48 188 V72c0-9 11-14 18-8l54 46 54-46c7-6 18-1 18 8v116"
        stroke={variant === 'color' ? `url(#${gradId})` : stroke}
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M120 110 v42"
        stroke={variant === 'color' ? `url(#${gradId})` : stroke}
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M86 188 L120 154 L154 188"
        stroke={variant === 'color' ? `url(#${gradId})` : stroke}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
