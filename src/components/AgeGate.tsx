import { useI18n } from '@/lib/i18n'

type Props = {
  onEnter: () => void
}

export function AgeGate({ onEnter }: Props) {
  const { t } = useI18n()

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0A0A0A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div style={{
        maxWidth: '420px',
        width: '100%',
        background: '#161616',
        border: '1px solid #2A2A2A',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '0.75rem', 
          color: '#E8A87C', 
          letterSpacing: '0.1em',
          marginBottom: '1rem'
        }}>
          18+
        </div>
        
        <h1 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          fontWeight: 600
        }}>
          {t('gateTitle')}
        </h1>
        
        <p style={{ 
          color: '#A1A1A1', 
          fontSize: '0.95rem',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          {t('gateBody')}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={onEnter}
            style={{
              background: '#8B1E1E',
              color: 'white',
              border: 'none',
              padding: '0.85rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {t('gateEnter')}
          </button>
          
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            style={{
              background: 'transparent',
              color: '#A1A1A1',
              border: '1px solid #2A2A2A',
              padding: '0.85rem 1.5rem',
              borderRadius: '8px',
              fontSize: '0.95rem'
            }}
          >
            {t('gateLeave')}
          </button>
        </div>
      </div>
    </div>
  )
}