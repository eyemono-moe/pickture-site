# 導入

## 1. 必要なツールを入れる

PICKTURE は次のツールを使います。
アバターのプロジェクトにまだ入っていなければ、VRChat Creator Companion（VCC）か ALCOM で追加してください。

| ツール | バージョン | 入手先 |
|---|---|---|
| VRChat SDK - Avatars | 3.10.0 以降 | VCC に最初から入っています |
| Modular Avatar | 1.18.0 以降 | [Modular Avatar のサイト](https://modular-avatar.nadena.dev/ja/)から VCC にリポジトリを追加します |
| lilToon | 1.8.0 以降 | [lilToon のサイト](https://lilxyzw.github.io/lilToon/ja_JP/)から VCC にリポジトリを追加します |

NDMF は Modular Avatar と一緒に入ります。

<!-- 画像: VCC の Manage Project で Modular Avatar と lilToon が入っている状態 -->

## 2. PICKTURE をインポートする

1. BOOTH の購入履歴から、PICKTURE の zip をダウンロードして展開します。
2. Unity でアバターのプロジェクトを開きます。
3. 中の `PICKTURE_x.y.z.unitypackage` を Unity のウィンドウにドラッグ＆ドロップし、**Import** を押します。

<!-- TODO: unitypackage の中身（Packages/moe.eyemono.pickture に入るか、Assets に入るか）が決まったら書く -->
<!-- 画像: Import ダイアログ -->

インポートが終わると、Unity のメニューに **Tools > PICKTURE > Setup** が追加されます。

::: tip 更新するとき
新しい版の unitypackage を、同じ手順でインポートしてください。
セットアップウィンドウで作ったマテリアルやテクスチャは `Assets/PICKTURE/` にあり、更新しても消えません。
:::

## 3. 次の手順

[セットアップ](./setup)に進みます。
