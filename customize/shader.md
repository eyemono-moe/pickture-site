# 加工シェーダーを作る

名前が `PICKTURE/Print/` で始まるシェーダーは、セットアップウィンドウの「加工」に並びます。
自分で書いたシェーダーも、この名前にすれば選べます。

加工シェーダーで書くのは、写真の色を加工する `Process` 関数だけです。
表示位置、撮影済みかの判定、ライティング、合成は、共通部分（`PICKTUREPrint.cginc`）が行います。

## 手順

1. 同梱の `Runtime/Shaders/Print/Basic.shader` を、`Assets` の下に複製します。
2. シェーダーの名前を `PICKTURE/Print/<好きな名前>` に変えます。
3. include のパスを、パッケージの場所からのパスに変えます（下の例を参照）。
4. 「加工」のプロパティと `Process` 関数を書き換えます。

<!-- TODO: unitypackage でのパッケージの場所が決まったら、include のパスを確定する -->

## 書き方

```hlsl
Shader "PICKTURE/Print/Sepia"
{
    Properties
    {
        // ---- 共通 ----
        // Basic.shader の「共通」の部分を、そのまま写す
        // ...

        // ---- 加工 ----
        _Strength ("Strength", Range(0, 1)) = 1
    }

    CustomEditor "Eyemono.PICKTURE.Editor.PrintMaterialGUI"

    SubShader
    {
        // Tags と Pass の設定（Blend など）は Basic.shader と同じにする
        Tags { "Queue" = "Transparent-10" "RenderType" = "Transparent" "IgnoreProjector" = "True" }

        Pass
        {
            Tags { "LightMode" = "ForwardBase" }
            Blend [_SrcBlend] [_DstBlend]
            ZWrite Off
            ZTest LEqual
            Offset -1, -1
            Cull [_Cull]

            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #pragma shader_feature_local _PLACEMENT_UVRECT _PLACEMENT_REMAPTEX
            #pragma multi_compile_fog
            #include "Packages/moe.eyemono.pickture/Runtime/Shaders/PICKTUREPrint.cginc"

            float _Strength;

            // uv は撮影画像の上の位置（0〜1）。戻り値は (色, インクの量)
            float4 Process(float2 uv)
            {
                float3 col = SampleSource(uv);
                float l = Luma(col);
                float3 sepia = l * float3(1.07, 0.74, 0.43);
                return float4(lerp(col, sepia, _Strength), 1);
            }

            #include "Packages/moe.eyemono.pickture/Runtime/Shaders/PICKTUREPrintFrag.cginc"
            ENDCG
        }
    }
}
```

### Process の戻り値

`Process` は `float4(色, インクの量)` を返します。
インクの量が 0 の所は、下のマテリアル（Tシャツの布など）がそのまま見えます。
Duotone や Halftone は、明るい所のインクの量を 0 にして布の色を見せています。

### 使える関数

| 関数 | 内容 |
|---|---|
| `SampleSource(uv)` | 撮影画像の色。まだ撮影していないときは、デフォルト画像の色 |
| `SourceTexelSize()` | その画像の1画素の大きさ（UV） |
| `SourceAspect()` | その画像の横 / 縦 |
| `Luma(col)` | 色の明るさ |

### 守ること

- 「共通」のプロパティは、名前を変えずにすべて書きます。加工を切り替えても表示位置などの設定が残るのは、名前が同じだからです。
- 共通のプロパティの属性（`[HideInInspector]` など）も、Basic.shader と同じにします。
- `[Header]` や `[Enum]` などの属性には、日本語を書かないでください。見出しと選択肢の表示は `PrintMaterialGUI` が付けます（プロパティの表示名は日本語でかまいません）。

同梱の Duotone・Halftone・Mono・Pixel も参考になります。
