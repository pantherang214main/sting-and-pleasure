import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      marginTop: '4rem',
      padding: '2.5rem 1.5rem',
      background: 'var(--bg)'
    }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem'
      }}>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.85rem',
          lineHeight: 1.6,
          maxWidth: '640px'
        }}>
          {t('footerSummary')}
        </p>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.8rem',
          color: '#666'
        }}>
          <span>© {new Date().getFullYear()} Sting & Pleasure</span>
          <span>{t('footerRights')}</span>
        </div>
      </div>
    </footer>
  )
}