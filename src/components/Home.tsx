import { Link } from 'react-router-dom'
import { useI18n } from '@/lib/i18n'
import { articles } from '@/content/articles'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function Home() {
  const { t, lang } = useI18n()
  const latest = articles.slice(0, 3)

  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="text-center space-y-5 max-w-2xl mx-auto">
        <p className="text-sm tracking-[0.15em] text-[var(--warm)]">
          {t('heroKicker')}
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
          {t('heroTitle')}
        </h1>
        <p className="text-[var(--text-secondary)] text-base leading-relaxed">
          {t('heroBody')}
        </p>
      </section>

      {/* Three pillars */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { title: t('pillarConsentT'), body: t('pillarConsentB') },
          { title: t('pillarBodyT'), body: t('pillarBodyB') },
          { title: t('pillarCareT'), body: t('pillarCareB') },
        ].map((item, i) => (
          <Card key={i} className="bg-[#161616] border-[#2A2A2A] text-white shadow-none">
            <CardHeader className="pb-2">
              <p className="text-xs text-[var(--warm)] mb-1">0{i + 1}</p>
              <CardTitle className="text-base font-medium text-white">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Latest articles */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">{t('latestTitle')}</h2>
          <Link 
            to="/articles" 
            className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
          >
            {t('viewAll')} →
          </Link>
        </div>

        <div className="grid gap-3">
          {latest.map((article) => (
            <Link key={article.slug} to={`/articles/${article.slug}`}>
                  <Card className="bg-[#161616] border-[#2A2A2A] text-white shadow-none hover:border-[#8B1E1E] transition-colors">                <CardContent className="pt-5">
                  <Badge 
                    variant="outline" 
                    className="mb-2 border-[var(--warm)]/40 text-[var(--warm)] text-xs"
                  >
                    {article.topic[lang]}
                  </Badge>
                  <h3 className="text-base font-medium text-white mb-1.5">
                    {article.title[lang]}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {article.excerpt[lang]}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {article.date} · {article.minutes} {t('minRead')}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}