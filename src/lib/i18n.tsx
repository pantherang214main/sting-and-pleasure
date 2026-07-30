import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "zh" | "sc" | "en" | "ja";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "zh", label: "繁體中文" },
  { code: "sc", label: "简体中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
];

export type Dict = Record<string, Record<Lang, string>>;

export const dict: Dict = {
  brand: { zh: "刺與愉悅", sc: "刺与愉悦", en: "Sting & Pleasure", ja: "スティング＆プレジャー" },
  brandLatin: { zh: "Sting & Pleasure", sc: "Sting & Pleasure", en: "Sting & Pleasure", ja: "Sting & Pleasure" },
  navHome: { zh: "首頁", sc: "首页", en: "Home", ja: "ホーム" },
  navArticles: { zh: "文章", sc: "文章", en: "Articles", ja: "記事" },
  navSafety: { zh: "安全與同意", sc: "安全与同意", en: "Safety & Consent", ja: "安全と同意" },
  navAbout: { zh: "關於與免責聲明", sc: "关于与免责声明", en: "About & Disclaimer", ja: "概要と免責事項" },
  gateTitle: { zh: "此網站僅限成年人", sc: "此网站仅限成年人", en: "Adults only", ja: "成人限定サイト" },
  gateBody: {
    zh: "本站為成人向教育平台，內容涉及合意的打屁股與衝擊遊戲（Impact Play）之安全知識。進入前請確認你已年滿 18 歲，且於所在地區合法瀏覽此類內容。",
    sc: "本站为成人向教育平台，内容涉及合意的打屁股与冲击游戏（Impact Play）之安全知识。进入前请确认你已年满 18 岁，且于所在地区合法浏览此类内容。",
    en: "This is an adult educational platform covering the safety of consensual spanking and impact play. Please confirm you are at least 18 years old and legally permitted to view this content where you live.",
    ja: "本サイトは、合意に基づくスパンキングおよびインパクトプレイの安全知識を扱う成人向け教育プラットフォームです。18歳以上であり、お住まいの地域で閲覧が合法であることをご確認ください。",
  },
  gateEnter: { zh: "我已年滿 18 歲，進入網站", sc: "我已年满 18 岁，进入网站", en: "I am 18 or older — enter", ja: "18歳以上です — 入る" },
  gateLeave: { zh: "離開", sc: "离开", en: "Leave", ja: "退出する" },
  heroKicker: { zh: "合意 · 知識 · 愉悅", sc: "合意 · 知识 · 愉悦", en: "Consent · Knowledge · Pleasure", ja: "同意 · 知識 · 悦び" },
  heroTitle: {
    zh: "在知情之中，痛感才成為愉悅",
    sc: "在知情之中，痛感才成为愉悦",
    en: "Sensation becomes pleasure only when it is informed",
    ja: "知識があってこそ、感覚は悦びになる",
  },
  heroBody: {
    zh: "Sting & Pleasure 是一個以安全為核心的成人教育平台，專注於合意的打屁股與衝擊遊戲。我們談解剖學、風險、溝通與界線，也談信任與感受。",
    sc: "Sting & Pleasure 是一个以安全为核心的成人教育平台，专注于合意的打屁股与冲击游戏。我们谈解剖学、风险、沟通与界线，也谈信任与感受。",
    en: "Sting & Pleasure is a safety-first educational platform for adults, focused on consensual spanking and impact play — anatomy, risk, communication, boundaries, trust, and sensation.",
    ja: "Sting & Pleasure は、合意に基づくスパンキングとインパクトプレイに特化した、安全第一の成人向け教育プラットフォームです。解剖学、リスク、対話、境界線、そして信頼と感覚について語ります。",
  },
  heroCtaPrimary: { zh: "從安全指南開始", sc: "从安全指南开始", en: "Start with safety", ja: "安全ガイドから始める" },
  heroCtaSecondary: { zh: "瀏覽文章", sc: "浏览文章", en: "Browse articles", ja: "記事を見る" },
  missionTitle: { zh: "我們的使命", sc: "我们的使命", en: "Our mission", ja: "私たちのミッション" },
  missionBody: {
    zh: "我們相信，資訊完整的實踐才是安全的實踐。本站以冷靜、尊重、去污名化的方式提供知識：如何協商同意、如何理解身體、如何降低風險、如何在結束後彼此照顧。這裡沒有獵奇，只有可被驗證的知識與成熟的對話。",
    sc: "我们相信，资讯完整的实践才是安全的实践。本站以冷静、尊重、去污名化的方式提供知识：如何协商同意、如何理解身体、如何降低风险、如何在结束后彼此照顾。这里没有猎奇，只有可被验证的知识与成熟的对话。",
    en: "We believe informed practice is safe practice. This site offers calm, respectful, de-stigmatised knowledge: how to negotiate consent, understand the body, reduce risk, and care for each other afterwards. No spectacle — only verifiable knowledge and grown-up conversation.",
    ja: "十分に情報を得た実践こそが安全な実践だと考えます。本サイトは、同意の交渉、身体の理解、リスクの低減、そしてアフターケアについて、冷静で敬意ある知識を提供します。見世物ではなく、検証可能な知識と成熟した対話を。",
  },
  pillarConsentT: { zh: "同意優先", sc: "同意优先", en: "Consent first", ja: "同意を第一に" },
  pillarConsentB: {
    zh: "持續、可撤回、具體明確的同意，是一切實踐的前提。",
    sc: "持续、可撤回、具体明确的同意，是一切实践的前提。",
    en: "Ongoing, revocable, specific consent is the precondition for everything.",
    ja: "継続的で撤回可能、かつ具体的な同意がすべての前提です。",
  },
  pillarBodyT: { zh: "理解身體", sc: "理解身体", en: "Know the body", ja: "身体を知る" },
  pillarBodyB: {
    zh: "安全區域、危險區域、神經與血管——解剖學決定力度的邊界。",
    sc: "安全区域、危险区域、神经与血管——解剖学决定力度的边界。",
    en: "Safe zones, danger zones, nerves and vessels — anatomy defines the limits of force.",
    ja: "安全な部位、危険な部位、神経と血管——解剖学が力の限界を決めます。",
  },
  pillarCareT: { zh: "事後照顧", sc: "事后照顾", en: "Aftercare", ja: "アフターケア" },
  pillarCareB: {
    zh: "場景結束不等於結束。照護、補水、對話與觀察，同樣重要。",
    sc: "场景结束不等于结束。照护、补水、对话与观察，同样重要。",
    en: "The scene ending is not the end. Care, hydration, debrief and monitoring matter just as much.",
    ja: "シーンの終わりは終わりではありません。ケア、水分補給、振り返り、観察も同様に重要です。",
  },
  latestTitle: { zh: "最新文章", sc: "最新文章", en: "Latest articles", ja: "最新の記事" },
  viewAll: { zh: "查看全部", sc: "查看全部", en: "View all", ja: "すべて見る" },
  readMore: { zh: "閱讀全文", sc: "阅读全文", en: "Read article", ja: "記事を読む" },
  backToArticles: { zh: "← 返回文章列表", sc: "← 返回文章列表", en: "← Back to articles", ja: "← 記事一覧へ戻る" },
  minRead: { zh: "分鐘閱讀", sc: "分钟阅读", en: "min read", ja: "分で読めます" },
  articlesTitle: { zh: "文章", sc: "文章", en: "Articles", ja: "記事" },
  articlesIntro: {
    zh: "以安全與同意為核心的長文與指南，持續更新。",
    sc: "以安全与同意为核心的长文与指南，持续更新。",
    en: "Long-form guides and essays grounded in safety and consent, updated regularly.",
    ja: "安全と同意を軸にした長文ガイドとエッセイを随時更新しています。",
  },
  allTopics: { zh: "全部主題", sc: "全部主题", en: "All topics", ja: "すべてのトピック" },
  safetyTitle: { zh: "安全與同意", sc: "安全与同意", en: "Safety & Consent", ja: "安全と同意" },
  safetyIntro: {
    zh: "在任何實踐之前，請閱讀以下原則。它們不是限制，而是讓愉悅得以持續的條件。",
    sc: "在任何实践之前，请阅读以下原则。它们不是限制，而是让愉悦得以持续的条件。",
    en: "Read these principles before any practice. They are not restrictions — they are the conditions that let pleasure last.",
    ja: "実践の前に、以下の原則をお読みください。これは制限ではなく、悦びを持続させるための条件です。",
  },
  aboutTitle: { zh: "關於我們", sc: "关于我们", en: "About", ja: "私たちについて" },
  aboutBody: {
    zh: "Sting & Pleasure 由一群關注性教育、身體自主與風險溝通的寫作者共同維護。我們以三種語言出版，希望讓華語、英語與日語讀者都能取得同等品質的資訊。",
    sc: "Sting & Pleasure 由一群关注性教育、身体自主与风险沟通的写作者共同维护。我们以多种语言出版，希望让华语、英语与日语读者都能取得同等品质的资讯。",
    en: "Sting & Pleasure is maintained by writers focused on sex education, bodily autonomy and risk communication. We publish in multiple languages so that Chinese, English and Japanese readers can access information of equal quality.",
    ja: "Sting & Pleasure は、性教育・身体の自己決定・リスクコミュニケーションに取り組む書き手により運営されています。中国語・英語・日本語の複数言語で、同等の品質の情報を届けます。",
  },
  disclaimerTitle: { zh: "免責聲明", sc: "免责声明", en: "Disclaimer", ja: "免責事項" },
  disclaimerBody: {
    zh: "本網站所有內容與資源，僅限成年人存取與使用。所謂「成年人」係依您所居住國家或地區的法律所規定之法定成年年齡為準。若您未達該年齡，請立即離開本網站。\n\n本網站所有內容僅供教育與參考用途，並不構成任何形式的醫療、法律或專業建議。\n\nSpanking 與 Impact Play 涉及身體接觸與潛在風險，可能造成疼痛、瘀青、或其他身體與心理影響。任何人在進行相關活動前，都應充分了解風險，並確保所有參與者皆為自願、知情且已達成明確同意。本站強烈建議以安全、溝通與尊重為最高原則。\n\n本網站不鼓勵、不協助任何違法、非自願或涉及未成年人的行為。使用者須自行判斷並承擔所有實踐所產生的後果。\n\n本站可能包含外部連結（包括但不限於購物平台或成人內容網站），這些連結僅供參考，本站對其內容、安全性或合法性不負任何責任。點擊外部連結即表示您同意自行承擔相關風險。\n\n若您不同意以上聲明，請立即離開本網站。",
    sc: "本网站所有内容与资源，仅限成年人存取与使用。所谓「成年人」系依您所居住国家或地区的法律所规定之法定成年年龄为准。若您未达该年龄，请立即离开本网站。\n\n本网站所有内容仅供教育与参考用途，并不构成任何形式的医疗、法律或专业建议。\n\nSpanking 与 Impact Play 涉及身体接触与潜在风险，可能造成疼痛、瘀青、或其他身体与心理影响。任何人在进行相关活动前，都应充分了解风险，并确保所有参与者皆为自愿、知情且已达成明确同意。本站强烈建议以安全、沟通与尊重为最高原则。\n\n本网站不鼓励、不协助任何违法、非自愿或涉及未成年人的行为。使用者须自行判断并承担所有实践所产生的后果。\n\n本站可能包含外部链接（包括但不限于购物平台或成人内容网站），这些链接仅供参考，本站对其内容、安全性或合法性不负任何责任。点击外部链接即表示您同意自行承担相关风险。\n\n若您不同意以上声明，请立即离开本网站。",
    en: "All content and resources on this website are intended only for adults. “Adult” means a person who has reached the age of majority as defined by the laws of the country or region in which you reside. If you are under that age, please leave this website immediately.\n\nAll content on this website is provided solely for educational and reference purposes and does not constitute medical, legal, or professional advice of any kind.\n\nSpanking and Impact Play involve physical contact and potential risks that may result in pain, bruising, or other physical and psychological effects. Anyone considering such activities should fully understand the risks and ensure that all participants are voluntary, informed, and have given clear consent. This site strongly recommends prioritizing safety, communication, and respect.\n\nThis website does not encourage or assist any illegal, non-consensual, or underage-related activities. Users must exercise their own judgment and assume full responsibility for any consequences arising from practice.\n\nThis site may contain external links (including but not limited to shopping platforms or adult content websites). These links are provided for reference only, and this site assumes no responsibility for their content, safety, or legality. By clicking external links, you agree to assume all related risks.\n\nIf you do not agree with this disclaimer, please leave this website immediately.",
    ja: "本サイトのすべてのコンテンツおよびリソースは、成人のみがアクセスおよび利用することを目的としています。「成人」とは、お客様が居住する国または地域の法律で定められた成人年齢に達した者を指します。該当する年齢に達していない場合は、直ちに本サイトを離れてください。\n\n本サイトのすべてのコンテンツは教育および参考目的のみであり、医療、法律、または専門的な助言を構成するものではありません。\n\nスパンキングおよびインパクトプレイは身体的接触と潜在的なリスクを伴い、痛み、打撲、その他の身体的・心理的影響を引き起こす可能性があります。これらの活動を行う前に、リスクを十分に理解し、すべての参加者が自発的、知情の上で明確な同意を得ていることを確認してください。本サイトは、安全性、コミュニケーション、尊重を最優先することを強く推奨します。\n\n本サイトは、違法、非合意、または未成年者に関わる行為を奨励または支援するものではありません。利用者は自らの判断で行動し、実践から生じるすべての結果について責任を負うものとします。\n\n本サイトには外部リンク（ショッピングプラットフォームやアダルトコンテンツサイトを含む）が含まれる場合があります。これらのリンクは参考目的のみであり、本サイトはその内容、安全性、合法性について一切の責任を負いません。外部リンクをクリックした時点で、関連するリスクを自ら負うことに同意したものとみなします。\n\n以上の免責事項に同意されない場合は、直ちに本サイトを離れてください。",
  },
  newsletterTitle: { zh: "訂閱電子報", sc: "订阅电子报", en: "Join the newsletter", ja: "ニュースレターを購読" },
  newsletterBody: {
    zh: "每月一封信：新文章、安全提醒與閱讀清單。隨時可取消訂閱。",
    sc: "每月一封信：新文章、安全提醒与阅读清单。随时可取消订阅。",
    en: "One letter a month: new articles, safety notes and a reading list. Unsubscribe anytime.",
    ja: "月に一通：新着記事、安全に関するメモ、読書リスト。いつでも配信停止できます。",
  },
  emailPlaceholder: { zh: "你的電子郵件", sc: "你的电子邮件", en: "Your email address", ja: "メールアドレス" },
  subscribe: { zh: "訂閱", sc: "订阅", en: "Subscribe", ja: "購読する" },
  subscribed: { zh: "感謝訂閱，請查收確認信。", sc: "感谢订阅，请查收确认信。", en: "Thank you — check your inbox to confirm.", ja: "ありがとうございます。確認メールをご確認ください。" },
  newsletterConsent: {
    zh: "訂閱即表示你確認已年滿 18 歲。",
    sc: "订阅即表示你确认已年满 18 岁。",
    en: "By subscribing you confirm that you are 18 or older.",
    ja: "購読することで、18歳以上であることを確認したものとみなされます。",
  },
  footerSummary: {
    zh: "本站僅限 18 歲以上成年人瀏覽，內容為教育資訊，不構成醫療或法律建議。所有實踐須以明確、可撤回的同意為前提，風險由參與者自行承擔。",
    sc: "本站仅限 18 岁以上成年人浏览，内容为教育资讯，不构成医疗或法律建议。所有实践须以明确、可撤回的同意为前提，风险由参与者自行承担。",
    en: "For adults 18+. Educational information only — not medical or legal advice. All practice requires explicit, revocable consent; participants assume their own risk.",
    ja: "18歳以上限定。本内容は教育目的の情報であり、医療・法律上の助言ではありません。すべての実践には明示的かつ撤回可能な同意が必要で、リスクは参加者が負います。",
  },
  footerRights: { zh: "版權所有", sc: "版权所有", en: "All rights reserved", ja: "無断転載を禁じます" },
  language: { zh: "語言", sc: "语言", en: "Language", ja: "言語" },
};
const STORAGE_KEY = "sp-lang";

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "zh",
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && LANGS.some((l) => l.code === stored)) {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang =
    l === "zh" ? "zh-Hant" :
    l === "sc" ? "zh-Hans" :
    l;
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const { lang, setLang } = useContext(I18nContext);
  const t = useCallback(
    (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key),
    [lang]
  );
  return { lang, setLang, t };
}