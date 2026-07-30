import type { Lang } from "@/lib/i18n";

type L = Record<Lang, string>;

export type Article = {
  slug: string;
  date: string;
  minutes: number;
  topic: L;
  title: L;
  excerpt: L;
  body: L;
};

export const articles: Article[] = [
  {
    slug: "negotiating-consent",
    date: "2026-07-12",
    minutes: 9,
    topic: { zh: "同意", en: "Consent", ja: "同意" },
    title: {
      zh: "如何協商一場合意的場景",
      en: "How to negotiate a consensual scene",
      ja: "合意あるシーンの交渉のしかた",
    },
    excerpt: {
      zh: "協商不是掃興，而是把期待、界線與安全詞放上檯面的過程。一份可以照著走的清單。",
      en: "Negotiation isn't a mood-killer; it's how expectations, limits and safewords get onto the table. A checklist you can actually follow.",
      ja: "交渉は雰囲気を壊すものではなく、期待・限界・セーフワードを共有する作業です。実際に使えるチェックリスト。",
    },
    body: {
      zh: `協商是一場對話，不是一份合約。它的目的不是消除所有意外，而是讓所有人清楚知道，什麼可以發生、什麼不可以、以及如何喊停。
## 先談脈絡，再談動作
在討論工具與力度之前，先談彼此為何想要這件事。是為了感官刺激、情緒釋放、權力交換，還是單純的親密？動機不同，場景的節奏與結束方式也會不同。
## 明確界線
把界線分成三層會更容易溝通：
- **硬界線**：絕對不可跨越，無論當下感受如何。
- **軟界線**：可能可以，但需要當場再次確認。
- **期待清單**：主動想嘗試的項目。
## 安全詞與非語言訊號
最常用的是紅／黃／綠三級系統。若接受者可能無法說話，務必約定非語言訊號，例如手中握著一個物件，鬆手即代表停止。
## 健康與藥物
詢問凝血問題、皮膚狀況、近期手術、抗凝血劑或止痛藥使用，以及任何可能影響痛覺判斷的物質。酒精與判斷力不相容。
## 結束與照顧
事前就約定好結束方式：如何降溫、需要什麼樣的照顧、以及多久之後做一次事後回顧（debrief）。多數問題不是發生在場景中，而是發生在場景之後無人聞問的時刻。`,
      en: `Negotiation is a conversation, not a contract. Its purpose is not to eliminate surprise but to make sure everyone knows what may happen, what may not, and how to stop.
## Talk about context before technique
Before discussing implements and intensity, talk about why each of you wants this. Sensation, emotional release, power exchange, or simple intimacy? Different motives call for different pacing and different endings.
## Name the limits
Splitting limits into three tiers makes them easier to discuss:
- **Hard limits**: never, regardless of how the moment feels.
- **Soft limits**: possibly, but require an explicit check-in at the time.
- **Wish list**: things actively wanted.
## Safewords and non-verbal signals
The red / yellow / green system is the most widely used. If the receiving partner may not be able to speak, agree on a non-verbal signal — for example holding an object that, when dropped, means stop.
## Health and substances
Ask about clotting disorders, skin conditions, recent surgery, blood thinners or painkillers, and anything that may distort pain perception. Alcohol and good judgement do not mix.
## Endings and care
Agree in advance how the scene will wind down, what care is needed, and when you will debrief. Most problems arise not during a scene but in the unattended hours afterwards.`,
      ja: `交渉は契約ではなく、会話です。目的は不確実性をなくすことではなく、何が起こり得て何が起こらないか、そしてどう止めるかを全員が理解することです。
## 技術より先に文脈を話す
道具や強度を話す前に、なぜそれを望むのかを共有しましょう。感覚、感情の解放、パワーエクスチェンジ、あるいは単なる親密さ——動機によってペースも終わり方も変わります。
## 限界を言語化する
限界を三層に分けると話しやすくなります。
- **ハードリミット**：その場の気分に関わらず、絶対に行わないこと。
- **ソフトリミット**：可能かもしれないが、その場で再確認が必要なこと。
- **やってみたいこと**：積極的に望むこと。
## セーフワードと非言語のサイン
赤・黄・緑の三段階が広く使われます。受け手が発話できない可能性がある場合は、物を握り、落とせば中止といった非言語のサインを決めておきましょう。
## 健康と薬物
凝固障害、皮膚の状態、最近の手術、抗凝固薬や鎮痛剤の使用、痛覚に影響する物質について確認します。アルコールと的確な判断は両立しません。
## 終わり方とケア
どのように収束させ、どんなケアが必要で、いつ振り返りを行うかを事前に決めます。多くの問題はシーン中ではなく、その後の放置された時間に起こります。`,
    },
  },
    {
    slug: "anatomy-safe-zones",
    date: "2026-06-28",
    minutes: 11,
    topic: { zh: "解剖學", en: "Anatomy", ja: "解剖学" },
    title: {
      zh: "安全區域與危險區域：衝擊遊戲的解剖學",
      en: "Safe zones and danger zones: the anatomy of impact play",
      ja: "安全な部位と危険な部位：インパクトプレイの解剖学",
    },
    excerpt: {
      zh: "臀部下半的肉墊是安全的；腎臟、脊椎、尾骨與關節不是。理解為什麼，比背清單更重要。",
      en: "The lower, fleshy part of the buttocks is safe; kidneys, spine, tailbone and joints are not. Understanding why matters more than memorising a list.",
      ja: "臀部下側の肉厚な部分は安全ですが、腎臓・脊椎・尾骨・関節は違います。理由の理解こそが重要です。",
    },
    body: {
      zh: `衝擊遊戲的安全性，幾乎完全取決於「打在哪裡」。肌肉與脂肪可以吸收能量；骨骼、器官與神經則不能。
## 相對安全的區域
- 臀部下半的豐厚部位（最主要的區域）
- 大腿後側上半
- 上背部肩胛骨覆蓋的區域（需較低力度）
## 應避免的區域
- **腎臟**：位於下背肋骨下緣兩側，缺乏保護，鈍擊可能造成內出血。
- **脊椎與尾骨**：骨骼直接受力，可能造成永久傷害。
- **關節**：膝窩、手肘、髖部。
- **頸部與頭部**：任何力度都不建議。
## 刺（sting）與悶（thud）
輕薄工具（藤條、皮帶末端）產生表層的「刺」；厚重工具（拍板、麂皮鞭）產生深層的「悶」。深層衝擊更容易造成肌肉深部損傷，因此需要更長的暖身。
## 暖身與升溫
從手掌開始，由輕到重，讓皮膚充血、痛閾提升。突然的高強度衝擊是瘀傷與神經刺激最常見的原因。
## 何時該停止
出現麻木、放射性刺痛、皮膚破裂、異常腫脹、頭暈或噁心時，立即停止並評估。麻木不是「進入狀態」，而是神經受壓的警訊。`,
      en: `The safety of impact play depends almost entirely on where the impact lands. Muscle and fat absorb energy; bone, organs and nerves do not.
## Comparatively safe areas
- The lower, fleshy part of the buttocks (the primary target)
- The upper back of the thighs
- The upper back over the shoulder blades (at lower intensity)
## Areas to avoid
- **Kidneys**: sitting below the rib cage on the lower back, unprotected; blunt force can cause internal bleeding.
- **Spine and tailbone**: bone takes the force directly and injury can be permanent.
- **Joints**: backs of knees, elbows, hips.
- **Neck and head**: not at any intensity.
## Sting versus thud
Thin implements (canes, the tip of a belt) create surface "sting". Heavy implements (paddles, suede floggers) create deep "thud". Deep impact reaches muscle tissue more readily and therefore demands a longer warm-up.
## Warm-up matters
Start with the hand, build gradually, let blood flow to the skin and the pain threshold rise. Sudden high-intensity impact is the most common cause of bruising and nerve irritation.
## When to stop
Numbness, radiating tingling, broken skin, unusual swelling, dizziness or nausea all mean stop and assess. Numbness is not "getting into it" — it is a warning that a nerve is under pressure.`,
      ja: `インパクトプレイの安全性は、どこに当たるかでほぼ決まります。筋肉と脂肪はエネルギーを吸収しますが、骨・臓器・神経は吸収しません。
## 比較的安全な部位
- 臀部の下側、肉厚な部分（主要な部位）
- 太もも裏の上部
- 肩甲骨に覆われた背中の上部（低強度で）
## 避けるべき部位
- **腎臓**：肋骨下の腰の両側にあり保護がなく、鈍的な衝撃で内出血の恐れ。
- **脊椎・尾骨**：骨に直接力が加わり、永続的な損傷の可能性。
- **関節**：膝裏、肘、股関節。
- **首と頭部**：いかなる強度でも不可。
## スティングとサド
細い道具（ケイン、ベルトの先端）は表層的な「刺す」感覚を、重い道具（パドル、スエードのフロッガー）は深部の「響く」感覚を生みます。深部衝撃は筋組織に届きやすく、より長いウォームアップが必要です。
## ウォームアップ
手から始め、徐々に強度を上げ、皮膚に血流を促し痛覚閾値を上げます。急激な高強度の衝撃は、あざと神経刺激の最大の原因です。
## 中止すべきとき
しびれ、放散する痺れ、皮膚の裂傷、異常な腫れ、めまい、吐き気があれば直ちに中止して確認します。しびれは「入り込んでいる」証ではなく、神経が圧迫されている警告です。`,
    },
  },
    {
    slug: "aftercare-that-works",
    date: "2026-06-09",
    minutes: 7,
    topic: { zh: "事後照顧", en: "Aftercare", ja: "アフターケア" },
    title: {
      zh: "真正有用的事後照顧",
      en: "Aftercare that actually works",
      ja: "本当に機能するアフターケア",
    },
    excerpt: {
      zh: "毛毯與巧克力只是形式。有效的照顧建立在觀察、對話與接下來 48 小時的追蹤。",
      en: "Blankets and chocolate are only the form. Effective care rests on observation, conversation and the next 48 hours.",
      ja: "毛布とチョコレートは形式にすぎません。有効なケアは観察・対話・その後48時間にあります。",
    },
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
    },
  },
  {
    slug: "choosing-implements",
    date: "2026-05-21",
    minutes: 8,
    topic: { zh: "工具", en: "Implements", ja: "道具" },
    title: {
      zh: "從手掌到藤條：工具的選擇與風險",
      en: "From hand to cane: choosing implements and their risks",
      ja: "手からケインまで：道具の選び方とリスク",
    },
    excerpt: {
      zh: "每一種工具都有它的感受曲線與風險輪廓。新手該從哪裡開始，又該最後才碰什麼？",
      en: "Every implement has a sensation curve and a risk profile. Where beginners should start, and what should come last.",
      ja: "道具ごとに感覚の曲線とリスクの輪郭があります。初心者はどこから始め、何を最後に置くべきか。",
    },
    body: {
      zh: `工具的選擇不是收藏癖，而是風險管理。你能感覺到自己的手，卻感覺不到藤條末端。
## 手掌
最安全的起點。回饋直接，力度可控，也最容易建立節奏與親密感。
## 拍板（Paddle）
接觸面大、能量分散，多為悶感。木質拍板比皮質更硬，初期建議選擇較薄且輕的款式。
## 麂皮鞭（Flogger）
多條軟皮尾，能量分散，適合暖身。注意「wrap around」——鞭尾繞過身側打到腰腹是常見錯誤，站位與距離要固定。
## 皮帶與皮條
末端速度快，容易失準。務必控制揮動幅度。
## 藤條（Cane）
高階工具。接觸面極小、能量集中，最容易造成破皮與長期痕跡。應在能穩定控制其他工具之後才嘗試，並始終避開尾骨與大腿內側。
## 清潔
任何可能接觸體液或破皮的工具都必須可清潔。多孔材質（未處理皮革、木頭）不應在多人之間共用。`,
      en: `Choosing implements is risk management, not collecting. You can feel your own hand; you cannot feel the tip of a cane.
## The hand
The safest starting point. Direct feedback, controllable force, and the easiest way to build rhythm and intimacy.
## Paddles
A large contact area spreads energy, producing mostly thud. Wooden paddles are harder than leather; start thin and light.
## Floggers
Many soft falls spread energy and suit warm-up. Beware "wrap-around" — falls curling past the hip onto the waist is a common error, so keep stance and distance fixed.
## Belts and straps
The tip travels fast and accuracy suffers. Keep the swing short and controlled.
## Canes
An advanced implement. A tiny contact area concentrates energy and most readily breaks skin or leaves lasting marks. Attempt it only after you are consistently accurate with everything else, and always avoid the tailbone and inner thighs.
## Cleaning
Anything that may contact bodily fluids or broken skin must be cleanable. Porous materials (untreated leather, wood) should not be shared between partners.`,
      ja: `道具選びはコレクションではなくリスク管理です。自分の手の感覚は分かっても、ケインの先端の感覚は分かりません。
## 手
最も安全な出発点。フィードバックが直接的で力を制御しやすく、リズムと親密さを築きやすい。
## パドル
接触面が広くエネルギーが分散し、主に「サド」の感覚。木製は革製より硬いため、薄く軽いものから始めます。
## フロッガー
柔らかい房が多数あり、エネルギーが分散するのでウォームアップ向き。房が腰や脇腹に巻き付く「ラップアラウンド」に注意し、立ち位置と距離を一定に保ちます。
## ベルト・ストラップ
先端の速度が速く、精度が落ちがち。振り幅を小さく制御します。
## ケイン
上級者向け。接触面が極小でエネルギーが集中し、皮膚の裂傷や長期的な痕が最も生じやすい。他の道具を安定して扱えるようになってから、尾骨と内ももを常に避けて使用します。
## 清掃
体液や傷口に触れる可能性のある道具は洗浄可能でなければなりません。多孔質の素材（未処理の革、木材）は複数人で共有すべきではありません。`,
    },
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}