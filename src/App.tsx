import { useState, useEffect } from 'react'
import { I18nProvider } from '@/lib/i18n'
import { AgeGate } from '@/components/AgeGate'
import { Header } from '@/components/Header'
import { Home } from '@/components/Home'
import { Safety } from '@/components/Safety'
import { Articles } from '@/components/Articles'
import { getArticle } from '@/content/articles'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { useI18n } from '@/lib/i18n'
import './App.css'

type Page = 'home' | 'articles' | 'safety' | 'about' | 'article'

function App() {
  const [verified, setVerified] = useState<boolean | null>(null)
  const [page, setPage] = useState<Page>('home')
  const [currentSlug, setCurrentSlug] = useState<string | null>(null)

  useEffect(() => {
    const ok = localStorage.getItem('sp-age-verified')
    setVerified(ok === 'true')
  }, [])

  const handleEnter = () => {
    localStorage.setItem('sp-age-verified', 'true')
    setVerified(true)
  }

  const handleSelectArticle = (slug: string) => {
    setCurrentSlug(slug)
    setPage('article')
  }

  const handleBackToArticles = () => {
    setCurrentSlug(null)
    setPage('articles')
  }

  if (verified === null) {
    return null
  }

  return (
    <I18nProvider>
      {!verified ? (
        <AgeGate onEnter={handleEnter} />
      ) : (
        <div className="app">
          <Header 
            currentPage={page === 'article' ? 'articles' : page} 
            onNavigate={(p) => {
              setPage(p)
              setCurrentSlug(null)
            }} 
          />
             <main style={{ padding: '0 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
              {page === 'home' && <Home />}
              {page === 'articles' && <Articles onSelectArticle={handleSelectArticle} />}
              {page === 'safety' && <Safety />}
              {page === 'about' && <About />}
              {page === 'article' && currentSlug && (
                <ArticleDetail slug={currentSlug} onBack={handleBackToArticles} />
              )}
            </main>
            <div className="app">
              <Header 
                currentPage={page === 'article' ? 'articles' : page} 
                onNavigate={(p) => {
                  setPage(p)
                  setCurrentSlug(null)
                }} 
              />
              <main style={{ padding: '0 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
                {page === 'home' && <Home />}
                {page === 'articles' && <Articles onSelectArticle={handleSelectArticle} />}
                {page === 'safety' && <Safety />}
                {page === 'about' && <About />}
                {page === 'article' && currentSlug && (
                  <ArticleDetail slug={currentSlug} onBack={handleBackToArticles} />
                )}
              </main>
              <Footer />
            </div>
        </div>
      )}
    </I18nProvider>
  )
}

// 暫時把單一文章顯示寫在同一個檔案，之後再拆
function ArticleDetail({ slug, onBack }: { slug: string; onBack: () => void }) {
  const { t, lang } = useI18n()
  const article = getArticle(slug)

  if (!article) {
    return <div style={{ padding: '3rem 0' }}>找不到文章</div>
  }

  // 簡單把 markdown 風格的內容轉成段落
  const paragraphs = article.body[lang].split('\n').filter(Boolean)

  return (
    <div style={{ padding: '3rem 0' }}>
      <button 
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          marginBottom: '1.5rem',
          fontSize: '0.9rem'
        }}
      >
        {t('backToArticles')}
      </button>

      <div style={{ color: 'var(--warm)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
        {article.topic[lang]}
      </div>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>
        {article.title[lang]}
      </h1>
      <div style={{ color: '#666', fontSize: '0.85rem', marginBottom: '2rem' }}>
        {article.date} · {article.minutes} {t('minRead')}
      </div>

      <div style={{ lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        {paragraphs.map((p, i) => {
          if (p.startsWith('## ')) {
            return <h2 key={i} style={{ color: 'var(--text)', fontSize: '1.25rem', margin: '2rem 0 0.75rem' }}>{p.replace('## ', '')}</h2>
          }
          if (p.startsWith('- ')) {
            return <li key={i} style={{ marginLeft: '1.2rem', marginBottom: '0.4rem' }}>{p.replace('- ', '')}</li>
          }
          return <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>
        })}
      </div>
    </div>
  )
}

export default App