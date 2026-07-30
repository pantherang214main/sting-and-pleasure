import { negotiatingConsent } from './negotiating-consent'
import { anatomySafeZones } from './anatomy-safe-zones'
import { aftercareThatWorks } from './aftercare-that-works'
import { choosingImplements } from './choosing-implements'

export type Article = {
  slug: string
  date: string
  minutes: number
  topic: Record<string, string>
  title: Record<string, string>
  excerpt: Record<string, string>
  body: Record<string, string>
}

export const articles: Article[] = [
  negotiatingConsent,
  anatomySafeZones,
  aftercareThatWorks,
  choosingImplements,
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}