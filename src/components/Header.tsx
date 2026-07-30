import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n, LANGS } from '@/lib/i18n'

export function Header() {
  const { t, lang, setLang } = useI18n()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: t('navHome') },
    { path: '/articles', label: t('navArticles') },
    { path: '/safety', label: t('navSafety') },
    { path: '/about', label: t('navAbout') },
  ]

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
        <Link 
          to="/"
          style={{ fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none', color: 'inherit' }}
        >
          {t('brand')}
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center' 
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: location.pathname === item.path ? 'var(--text)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                textDecoration: 'none',
                fontWeight: location.pathname === item.path ? 500 : 400
              }}
            >
              {item.label}
            </Link>
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
                {l.code === 'zh' ? '繁中' : l.code === 'sc' ? '简体' : l.code === 'en' ? 'EN' : '日本語'}
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
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              style={{
                color: location.pathname === item.path ? 'var(--text)' : 'var(--text-secondary)',
                fontSize: '1rem',
                textDecoration: 'none',
                padding: '0.4rem 0',
                fontWeight: location.pathname === item.path ? 500 : 400
              }}
            >
              {item.label}
            </Link>
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
                {l.code === 'zh' ? '繁中' : l.code === 'sc' ? '简体' : l.code === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </div>
      )}

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