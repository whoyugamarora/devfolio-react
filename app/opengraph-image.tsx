import { ImageResponse } from 'next/og'

export const alt = 'Yugam Arora — IT Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#06060c',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: '#c8ff3b' }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900, height: 500,
          background: 'radial-gradient(ellipse, rgba(200,255,59,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />

        {/* Name */}
        <div style={{
          fontSize: 92,
          fontWeight: 900,
          color: '#efefef',
          letterSpacing: '-3px',
          lineHeight: 1,
          marginBottom: 14,
        }}>
          Yugam Arora
        </div>

        {/* Title */}
        <div style={{
          fontSize: 20,
          fontWeight: 600,
          color: '#c8ff3b',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 52,
        }}>
          IT Administrator · Security Enthusiast · Cloud Practitioner
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          {[
            { val: '6×',  label: "Dean's List"    },
            { val: '3+',  label: 'Years Exp.'     },
            { val: '12+', label: 'Certifications' },
            { val: '3+',  label: 'Projects'       },
          ].map((s, i) => (
            <div key={s.label} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 44px',
              background: 'rgba(255,255,255,0.02)',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <span style={{ fontSize: 38, fontWeight: 900, color: '#c8ff3b', lineHeight: 1, marginBottom: 8 }}>
                {s.val}
              </span>
              <span style={{ fontSize: 12, color: '#555', fontWeight: 500, letterSpacing: '1px', textTransform: 'uppercase' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Location tag */}
        <div style={{
          position: 'absolute',
          bottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 12,
          color: '#333',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          <span>Fraser Valley, BC</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(200,255,59,0.5)' }} />
          <span>Open to Work</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(200,255,59,0.5)' }} />
          <span>yugamarora1@gmail.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
