import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'color' | 'monochrome' | 'white';
}

export const ManyTurnsLogo: React.FC<LogoProps> = ({
  className = '',
  size = 40,
  variant = 'color',
}) => {
  const blueColor =
    variant === 'color' ? '#1D4ED8' : variant === 'white' ? '#FFFFFF' : '#18181B';
  const terraColor =
    variant === 'color' ? '#C25E38' : variant === 'white' ? '#FFFFFF' : '#71717A';

  return (
    <svg
      width={size}
      height={(size * 28) / 48}
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Many Turns Logo"
      role="img"
    >
      {/* Left Loop (Cobalt / Strategic Turn) */}
      <circle
        cx="16"
        cy="14"
        r="11"
        stroke={blueColor}
        strokeWidth="3.2"
        strokeDasharray="60 12"
      />
      <path
        d="M16 3L18.5 5.5L16 8"
        stroke={blueColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Loop (Terracotta / Room & Life Turn) */}
      <circle
        cx="32"
        cy="14"
        r="11"
        stroke={terraColor}
        strokeWidth="3.2"
        strokeDasharray="60 12"
      />
      <path
        d="M32 25L29.5 22.5L32 20"
        stroke={terraColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
