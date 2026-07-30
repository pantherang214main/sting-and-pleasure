import { useI18n } from '@/lib/i18n'

export function About() {
  const { t } = useI18n()

  return (
    <div style={{ padding: '3rem 0' }}>
      <h1 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
        marginBottom: '1.5rem',
        fontWeight: 600
      }}>
        {t('aboutTitle')}
      </h1>

      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '1.05rem',
        lineHeight: 1.7,
        marginBottom: '3rem',
        maxWidth: '640px'
      }}>
        {t('aboutBody')}
      </p>

      {/* Disclaimer box */}
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '2rem'
      }}>
        <div style={{ 
          color: 'var(--warm)', 
          fontSize: '0.8rem', 
          letterSpacing: '0.08em',
          marginBottom: '0.75rem'
        }}>
          18+
        </div>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>
          {t('disclaimerTitle')}
        </h2>
        <div style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.95rem',
          lineHeight: 1.75,
          whiteSpace: 'pre-line'
        }}>
          {t('disclaimerBody')}
        </div>
      </div>
    </div>
  )
}