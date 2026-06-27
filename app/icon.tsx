import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#06060c',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#c8ff3b',
            fontSize: '30px',
            fontWeight: 900,
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          YA
        </span>
      </div>
    ),
    { ...size }
  )
}
