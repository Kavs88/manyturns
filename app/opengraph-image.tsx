import { ImageResponse } from 'next/og';

export const alt = 'Many Turns — Different paths. One journey.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#1a0a0c',
          color: '#F7F4F2',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: '#9c0000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 240 240" fill="none">
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
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Many Turns
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 72,
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              fontWeight: 500,
              maxWidth: 900,
            }}
          >
            <div style={{ display: 'flex' }}>Different paths.</div>
            <div style={{ display: 'flex' }}>One journey.</div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: 'rgba(247,244,242,0.62)',
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            An operator house whose path composed the offering.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
