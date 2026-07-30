import type { Lang } from '@/lib/i18n'

type L = Record<Lang, string>

export const anatomySafeZones = {
  slug: 'anatomy-safe-zones',
  date: '2026-06-28',
  minutes: 11,
  topic: {
    zh: '解剖學',
    sc: '解剖学',
    en: 'Anatomy',
    ja: '解剖学',
  } as L,
  title: {
    zh: '安全區域與危險區域：衝擊遊戲的解剖學',
    sc: '安全区域与危险区域：冲击游戏的解剖学',
    en: 'Safe zones and danger zones: the anatomy of impact play',
    ja: '安全な部位と危険な部位：インパクトプレイの解剖学',
  } as L,
  excerpt: {
    zh: '臀部下半的肉墊是安全的；腎臟、脊椎、尾骨與關節不是。理解為什麼，比背清單更重要。',
    sc: '臀部下半的肉垫是安全的；肾脏、脊椎、尾骨与关节不是。理解为什么，比背清单更重要。',
    en: 'The lower, fleshy part of the buttocks is safe; kidneys, spine, tailbone and joints are not. Understanding why matters more than memorising a list.',
    ja: '臀部下側の肉厚な部分は安全ですが、腎臓・脊椎・尾骨・関節は違います。理由の理解こそが重要です。',
  } as L,
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
    sc: `冲击游戏的安全性，几乎完全取决于「打在哪里」。肌肉与脂肪可以吸收能量；骨骼、器官与神经则不能。
## 相对安全的区域
- 臀部下半的丰厚部位（最主要的区域）
- 大腿后侧上半
- 上背部肩胛骨覆盖的区域（需较低力度）
## 应避免的区域
- **肾脏**：位于下背肋骨下缘两侧，缺乏保护，钝击可能造成内出血。
- **脊椎与尾骨**：骨骼直接受力，可能造成永久伤害。
- **关节**：膝窝、手肘、髋部。
- **颈部与头部**：任何力度都不建议。
## 刺（sting）与闷（thud）
轻薄工具（藤条、皮带末端）产生表层的「刺」；厚重工具（拍板、麂皮鞭）产生深层的「闷」。深层冲击更容易造成肌肉深部损伤，因此需要更长的暖身。
## 暖身与升温
从手掌开始，由轻到重，让皮肤充血、痛阈提升。突然的高强度冲击是瘀伤与神经刺激最常见的原因。
## 何时该停止
出现麻木、放射性刺痛、皮肤破裂、异常肿胀、头晕或恶心时，立即停止并评估。麻木不是「进入状态」，而是神经受压的警讯。`,
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
  } as L,
}