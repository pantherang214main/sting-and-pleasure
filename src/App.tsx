import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { I18nProvider, useI18n } from '@/lib/i18n'
import { AgeGate } from '@/components/AgeGate'
import { Header } from '@/components/Header'
import { Home } from '@/components/Home'
import { Safety } from '@/components/Safety'
import { Articles } from '@/components/Articles'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { getArticle } from '@/content/articles'
import './App.css'

function App() {
  const [verified, setVerified] = useState<boolean | null>(null)

  useEffect(() => {
    const ok = localStorage.getItem('sp-age-verified')
    setVerified(ok === 'true')
  }, [])

  const handleEnter = () => {
    localStorage.setItem('sp-age-verified', 'true')
    setVerified(true)
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
          <Header />
          <main style={{ padding: '0 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </I18nProvider>
  )
}

function ArticleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t, lang } = useI18n()
  const article = getArticle(slug || '')

  if (!article) {
    return <div style={{ padding: '3rem 0' }}>找不到文章</div>
  }

  const paragraphs = article.body[lang].split('\n').filter(Boolean)

  return (
    <div style={{ padding: '3rem 0' }}>
      <button 
        onClick={() => navigate('/articles')}
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