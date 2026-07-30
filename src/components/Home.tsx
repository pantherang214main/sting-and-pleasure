import { useI18n } from '@/lib/i18n'
import { articles } from '@/content/articles'

export function Home() {
  const { t, lang } = useI18n()

  const latest = articles.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '3rem 0 4rem', textAlign: 'center' }}>
        <div style={{ 
          color: 'var(--warm)', 
          fontSize: '0.85rem', 
          letterSpacing: '0.12em',
          marginBottom: '1rem'
        }}>
          {t('heroKicker')}
        </div>
        <h1 style={{ 
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', 
          fontWeight: 600, 
          lineHeight: 1.3,
          marginBottom: '1.25rem',
          maxWidth: '700px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          {t('heroTitle')}
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.05rem',
          maxWidth: '560px',
          margin: '0 auto 2rem',
          lineHeight: 1.7
        }}>
          {t('heroBody')}
        </p>
      </section>

      {/* Three pillars */}
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '1rem',
        marginBottom: '4rem'
      }}>
        {[
          { title: t('pillarConsentT'), body: t('pillarConsentB') },
          { title: t('pillarBodyT'), body: t('pillarBodyB') },
          { title: t('pillarCareT'), body: t('pillarCareB') },
        ].map((item, i) => (
          <div key={i} style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '1.5rem'
          }}>
            <div style={{ color: 'var(--warm)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              0{i + 1}
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{item.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              {item.body}
            </p>
          </div>
        ))}
      </section>

      {/* Latest articles */}
      <section>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'baseline',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ fontSize: '1.4rem' }}>{t('latestTitle')}</h2>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {t('viewAll')} →
          </span>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {latest.map((article) => (
            <div key={article.slug} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem'
            }}>
              <div style={{ 
                fontSize: '0.8rem', 
                color: 'var(--warm)', 
                marginBottom: '0.4rem' 
              }}>
                {article.topic[lang]}
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                {article.title[lang]}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                marginBottom: '0.75rem',
                lineHeight: 1.5
              }}>
                {article.excerpt[lang]}
              </p>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>
                {article.date} · {article.minutes} {t('minRead')}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}