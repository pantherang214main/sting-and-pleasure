import { useState } from 'react'
import { useI18n, LANGS } from '@/lib/i18n'

type Page = 'home' | 'articles' | 'safety' | 'about'

type Props = {
  currentPage: Page
  onNavigate: (page: Page) => void
}

export function Header({ currentPage, onNavigate }: Props) {
  const { t, lang, setLang } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems: { key: Page; label: string }[] = [
    { key: 'home', label: t('navHome') },
    { key: 'articles', label: t('navArticles') },
    { key: 'safety', label: t('navSafety') },
    { key: 'about', label: t('navAbout') },
  ]

  const handleNav = (page: Page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '0.9rem 1.25rem',
      position: 'sticky',
      top: 0,
      background: 'rgba(10,10,10,0.92)',
      backdropFilter: 'blur(8px)',
      zIndex: 100
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Logo */}
        <div 
          style={{ fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer' }}
          onClick={() => handleNav('home')}
        >
          {t('brand')}
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center' 
        }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === item.key ? 'var(--text)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                cursor: 'pointer',
                padding: 0,
                fontWeight: currentPage === item.key ? 500 : 400
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ display: 'flex', gap: '0.35rem', marginLeft: '0.5rem' }}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  background: lang === l.code ? 'var(--accent)' : 'transparent',
                  color: lang === l.code ? 'white' : 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem'
                }}
              >
                {l.code === 'zh' ? '繁中' : l.code === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.4rem',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNav(item.key)}
              style={{
                background: 'none',
                border: 'none',
                color: currentPage === item.key ? 'var(--text)' : 'var(--text-secondary)',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0.4rem 0',
                fontWeight: currentPage === item.key ? 500 : 400
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  background: lang === l.code ? 'var(--accent)' : 'transparent',
                  color: lang === l.code ? 'white' : 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '4px',
                  fontSize: '0.85rem'
                }}
              >
                {l.code === 'zh' ? '繁中' : l.code === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 簡單的 RWD 控制 */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  )
}