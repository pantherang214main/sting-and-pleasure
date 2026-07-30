import { useI18n } from '@/lib/i18n'

export function Safety() {
  const { t } = useI18n()

  return (
    <div style={{ padding: '3rem 0' }}>
      <div style={{ 
        color: 'var(--warm)', 
        fontSize: '0.8rem', 
        letterSpacing: '0.08em',
        marginBottom: '0.75rem'
      }}>
        18+
      </div>

      <h1 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', 
        marginBottom: '1rem',
        fontWeight: 600
      }}>
        {t('safetyTitle')}
      </h1>

      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '1.05rem',
        maxWidth: '640px',
        marginBottom: '3rem',
        lineHeight: 1.7
      }}>
        {t('safetyIntro')}
      </p>

      {/* Section 1 */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>
          一、同意的四個條件
        </h2>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem' 
        }}>
          {[
            { title: '知情', desc: '雙方都理解可能發生什麼，以及風險為何。' },
            { title: '自願', desc: '沒有壓力、脅迫、依賴關係或酒精藥物影響下的判斷失能。' },
            { title: '具體', desc: '同意某一項行為，不等於同意其他行為。' },
            { title: '可撤回', desc: '任何人在任何時刻都可以喊停，且不需要解釋理由。' },
          ].map((item) => (
            <li key={item.title} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem'
            }}>
              <strong style={{ color: 'var(--warm)' }}>{item.title}</strong>
              <span style={{ color: 'var(--text-secondary)' }}>：{item.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2 */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>
          二、安全詞系統
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          最通用的是交通號誌系統：
        </p>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem' 
        }}>
          {[
            { color: '#4ade80', label: '綠', desc: '一切良好，可以繼續或加強。' },
            { color: '#facc15', label: '黃', desc: '接近極限，請放慢、降低力度或檢查狀況。' },
            { color: '#f87171', label: '紅', desc: '立即停止，無需解釋。' },
          ].map((item) => (
            <li key={item.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '0.9rem 1.25rem'
            }}>
              <span style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                background: item.color,
                flexShrink: 0
              }} />
              <span>
                <strong>{item.label}</strong>
                <span style={{ color: 'var(--text-secondary)' }}>：{item.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Note */}
      <div style={{
        background: 'rgba(139, 30, 30, 0.15)',
        border: '1px solid rgba(139, 30, 30, 0.4)',
        borderRadius: '10px',
        padding: '1.25rem 1.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: 1.6
      }}>
        這些原則不是為了限制愉悅，而是為了讓愉悅可以安全、持續地發生。任何時候只要有人感到不安，場景就應該暫停或結束。
      </div>
    </div>
  )
}