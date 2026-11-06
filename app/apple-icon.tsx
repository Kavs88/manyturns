import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: 36,
        }}
      >
        <svg width="118" height="118" viewBox="0 0 240 240" fill="none">
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
