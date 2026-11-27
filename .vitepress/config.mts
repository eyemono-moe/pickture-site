import { defineConfig } from 'vitepress'

// TODO: GitHub に公開したら、リポジトリの URL に合わせる（「このページを編集」のリンクに使う）
const REPO = 'https://github.com/eyemono-moe/pickture'
const SITE = 'https://pickture.eyemono.moe'
// TODO: BOOTH の商品ページができたら URL を入れる
const BOOTH = 'https://booth.pm/'

export default defineConfig({
  lang: 'ja-JP',
  title: 'PICKTURE',
  description: 'VRChat のアバターで撮った写真を、そのままアバターに表示するカメラギミックのマニュアル',
  cleanUrls: true,
  srcExclude: ['README.md'],
  lastUpdated: true,
  sitemap: { hostname: SITE },

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'PICKTURE' }],
    // TODO: OGP 画像（1200×630）を public/images/ogp.png に置く
    ['meta', { property: 'og:image', content: `${SITE}/images/ogp.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: 'はじめに', link: '/guide/' },
      { text: '改変', link: '/customize/' },
      { text: 'よくある質問', link: '/troubleshooting' },
      { text: 'BOOTH', link: BOOTH },
    ],

    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'PICKTURE とは', link: '/guide/' },
          { text: '導入', link: '/guide/install' },
          { text: 'セットアップ', link: '/guide/setup' },
          { text: 'VRChat での使い方', link: '/guide/usage' },
          { text: '加工の種類', link: '/guide/styles' },
          { text: '写真の見え方と同期', link: '/guide/sync' },
        ],
      },
      {
        text: '改変',
        items: [
          { text: '改変の概要', link: '/customize/' },
          { text: '持ち位置を調整する', link: '/customize/grip' },
          { text: 'カメラのモデルを差し替える', link: '/customize/model' },
          { text: '表示位置を決める', link: '/customize/placement' },
          { text: 'Remap テクスチャを自分で作る', link: '/customize/custom-remap' },
          { text: '加工シェーダーを作る', link: '/customize/shader' },
        ],
      },
      {
        text: 'その他',
        items: [
          { text: 'よくある質問・困ったとき', link: '/troubleshooting' },
          { text: '更新履歴', link: '/changelog' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: REPO }],

    editLink: {
      pattern: `${REPO}/edit/main/site/:path`,
      text: 'このページを編集する',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '検索', buttonAriaLabel: '検索' },
          modal: {
            displayDetails: '詳細を表示',
            resetButtonTitle: '検索をリセット',
            backButtonTitle: '検索を閉じる',
            noResultsText: '見つかりませんでした',
            footer: { selectText: '選択', navigateText: '移動', closeText: '閉じる' },
          },
        },
      },
    },

    outline: { level: [2, 3], label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    lastUpdated: { text: '最終更新' },
    darkModeSwitchLabel: '表示モード',
    lightModeSwitchTitle: 'ライトモードにする',
    darkModeSwitchTitle: 'ダークモードにする',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'ページの先頭へ',
    langMenuLabel: '言語',
    notFound: {
      title: 'ページが見つかりません',
      quote: 'URL が変わったか、ページが削除された可能性があります。',
      linkText: 'トップへ戻る',
    },

    footer: {
      message: 'PICKTURE は BOOTH で販売しています。',
      copyright: '© eyemono-moe',
    },
  },
})
