# PICKTURE マニュアル

https://pickture.eyemono.moe で公開している、PICKTURE の導入・改変マニュアルのソースです。
[VitePress](https://vitepress.dev/) で生成し、Cloudflare Workers の静的アセットとして配信しています。

開発者向けの設計メモはリポジトリの `docs/` にあります（このサイトには含めません）。

## 手元で確認する

Node.js 20 以降と pnpm が必要です。

```sh
cd site
pnpm install
pnpm docs:dev       # http://localhost:5173 で確認（保存すると自動で更新）
pnpm docs:build     # .vitepress/dist に出力
pnpm preview        # ビルドして wrangler で配信（本番と同じ URL の扱いを確認）
```

## ページを直す

- ページは `site/` の下の Markdown です。サイドバーとナビゲーションは `.vitepress/config.mts` にあります。
- 画像は `public/images/` に置き、`/images/xxx.png` で参照します。
- まだ用意していない画像や確認待ちの箇所は、`<!-- 画像: ... -->`・`<!-- TODO: ... -->` のコメントで残しています（表示はされません）。
- UI の名前（ボタンやメニューの文言）は、セットアップウィンドウの表記に合わせます。
- 「衣装」ではなく「表示する場所」と書きます（髪や小物にも表示できるため）。

## 公開

`main` に push すると、Cloudflare Workers Builds がビルドして公開します。

| 設定 | 値 |
|---|---|
| Root directory | `site` |
| Build command | `pnpm docs:build` |
| Deploy command | `npx wrangler deploy` |

公開先のドメインは `wrangler.jsonc` の `routes` で設定しています。
