import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NexFlow - Personalized Health Experiments'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F6F4EF',
          padding: '40px 80px',
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1F4D3A',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '100px',
            fontSize: 20,
            fontWeight: 600,
            marginBottom: '40px',
          }}
        >
          Personalized Health Experiments
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: 'Georgia, serif',
            }}
          >
            Know what actually
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.1,
              fontFamily: 'Georgia, serif',
            }}
          >
            works for your body.
          </div>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: 28,
            color: '#6B6B6B',
            marginTop: '32px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Test one habit for 14 days. See real proof of what improves your sleep, energy, and focus.
        </div>

        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '48px',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#1F4D3A',
            }}
          >
            NexFlow
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#999999',
            }}
          >
            nexflowai.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
