import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/** Favicon from Stage 5 house mark silhouette. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#9c0000',
          borderRadius: 12,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 240 240" fill="none">
          <path
            d="M48 188 V72c0-9 11-14 18-8l54 46 54-46c7-6 18-1 18 8v116"
            stroke="#F7F4F2"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M120 110 v42"
            stroke="#F7F4F2"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M86 188 L120 154 L154 188"
            stroke="#F7F4F2"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
