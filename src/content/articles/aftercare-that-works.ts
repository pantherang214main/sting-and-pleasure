import type { Lang } from '@/lib/i18n'

type L = Record<Lang, string>

export const aftercareThatWorks = {
  slug: 'aftercare-that-works',
  date: '2026-06-09',
  minutes: 7,
  topic: {
    zh: '事後照顧',
    sc: '事后照顾',
    en: 'Aftercare',
    ja: 'アフターケア',
  } as L,
  title: {
    zh: '真正有用的事後照顧',
    sc: '真正有用的事后照顾',
    en: 'Aftercare that actually works',
    ja: '本当に機能するアフターケア',
  } as L,
  excerpt: {
    zh: '毛毯與巧克力只是形式。有效的照顧建立在觀察、對話與接下來 48 小時的追蹤。',
    sc: '毛毯与巧克力只是形式。有效的照顾建立在观察、对话与接下来 48 小时的追踪。',
    en: 'Blankets and chocolate are only the form. Effective care rests on observation, conversation and the next 48 hours.',
    ja: '毛布とチョコレートは形式にすぎません。有効なケアは観察・対話・その後48時間にあります。',
  } as L,
  body: {
    zh: `場景結束後，身體仍在處理大量的內源性化學物質；情緒的落差可能在數小時甚至隔天才出現。
## 立即階段（0–30 分鐘）
確認呼吸與意識清晰、補充水分、覆蓋保暖、檢查皮膚是否破損。避免立刻要求對方分析感受。
## 對話階段
在情緒穩定後，簡短回顧：什麼有效、什麼過頭、下次要調整什麼。避免把回顧變成評分。
## 後續 48 小時
- 觀察瘀傷是否異常擴大或伴隨劇痛
- 注意排尿是否出現血色（可能為腎臟受擊的徵兆，須立即就醫）
- 留意情緒低落（drop），主動傳一則訊息往往比任何禮物有用
## 施予方也需要照顧
施予者同樣可能出現罪惡感或情緒疲乏。照顧是雙向的。`,
    sc: `场景结束后，身体仍在处理大量的内源性化学物质；情绪的落差可能在数小时甚至隔天才出现。
## 立即阶段（0–30 分钟）
确认呼吸与意识清晰、补充水分、覆盖保暖、检查皮肤是否破损。避免立刻要求对方分析感受。
## 对话阶段
在情绪稳定后，简短回顾：什么有效、什么过头、下次要调整什么。避免把回顾变成评分。
## 后续 48 小时
- 观察瘀伤是否异常扩大或伴随剧痛
- 注意排尿是否出现血色（可能为肾脏受击的征兆，须立即就医）
- 留意情绪低落（drop），主动传一则讯息往往比任何礼物有用
## 施予方也需要照顾
施予者同样可能出现罪恶感或情绪疲乏。照顾是双向的。`,
    en: `After a scene the body is still processing a flood of endogenous chemistry; the emotional dip can arrive hours later, or the next day.
## Immediate (0–30 minutes)
Check breathing and clarity, rehydrate, cover for warmth, inspect the skin for broken areas. Don't demand analysis straight away.
## The conversation
Once things are steady, debrief briefly: what worked, what went too far, what to adjust next time. Don't let a debrief turn into a performance review.
## The next 48 hours
- Watch for bruising that spreads unusually or comes with severe pain
- Note any blood in urine (a possible sign of kidney impact — seek medical care immediately)
- Watch for emotional drop; a simple message often helps more than any gift
## The giving partner needs care too
Tops can experience guilt or emotional fatigue as well. Care runs both ways.`,
    ja: `シーンの後も身体は大量の内因性化学物質を処理しています。感情の落ち込みは数時間後、あるいは翌日に訪れることもあります。
## 直後（0〜30分）
呼吸と意識の明瞭さを確認し、水分を補給し、保温し、皮膚に裂傷がないか確認します。すぐに感想の分析を求めないこと。
## 振り返りの対話
落ち着いてから短く振り返ります。何が良かったか、何が行き過ぎたか、次回どう調整するか。評価面談にしないこと。
## その後48時間
- あざが異常に広がったり、激しい痛みを伴わないか観察する
- 尿に血が混じっていないか注意する（腎臓への衝撃の兆候の可能性。直ちに受診）
- 感情の落ち込み（ドロップ）に注意する。一通のメッセージが何よりも助けになります
## 与える側にもケアを
トップ側も罪悪感や情緒的な疲労を感じることがあります。ケアは双方向です。`,
  } as L,
}