import { useI18n } from '@/lib/i18n'
import { articles } from '@/content/articles'

type Props = {
  onSelectArticle: (slug: string) => void
}

export function Articles({ onSelectArticle }: Props) {
  const { t, lang } = useI18n()

  return (
    <div style={{ padding: '3rem 0' }}>
      <h1 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
        marginBottom: '0.75rem',
        fontWeight: 600
      }}>
        {t('articlesTitle')}
      </h1>
      <p style={{ 
        color: 'var(--text-secondary)', 
        marginBottom: '2.5rem',
        maxWidth: '560px'
      }}>
        {t('articlesIntro')}
      </p>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {articles.map((article) => (
          <button
            key={article.slug}
            onClick={() => onSelectArticle(article.slug)}
            style={{
              textAlign: 'left',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              cursor: 'pointer',
              color: 'inherit'
            }}
          >
            <div style={{ 
              fontSize: '0.8rem', 
              color: 'var(--warm)', 
              marginBottom: '0.4rem' 
            }}>
              {article.topic[lang]}
            </div>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 600 }}>
              {article.title[lang]}
            </h2>
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
          </button>
        ))}
      </div>
    </div>
  )
}