---
sidebar_position: 1
---

# チュートリアル

Let's discover **hiyori in less than 5 minutes**.

## Getting Started

本チュートリアルでは Flask のアプリケーションを zip 形式でアップロードし、発行されたドメインにアクセスするまでの手順を紹介します。

### 必要なもの

- curl コマンドを実行できる環境

## Flask アプリケーションの作成

まずはシンプルな Flask アプリケーションを作成します。

### 構成ファイル

アプリケーションのファイルをまとめる`app`フォルダを用意し、以下の 3 つのファイルを作成します。

- main.py
- requirements.txt
- Procfile

作成が終われば、`app`フォルダの構造は以下のようになります。

```
app/
├── main.py
├── requirements.txt
└── Procfile
```

### 🧾 各ファイルの内容

#### `main.py`

```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "foo!"

if __name__ == "__main__":
    app.run(host="0.0.0.0")

```

#### `requirements.txt`

```
flask
```

#### `Procfile`

```
web: python main.py
```

アプリケーションの作成が完了したら、`app`フォルダを zip に圧縮します

:::tip `macOS / Linux` の場合

```bash
cd app
zip -r ../app.zip .
cd ..
```

:::
:::tip `Windows` の場合

```
Compress-Archive -Path .\app\* -DestinationPath .\app.zip
```

:::

## アプリケーションのデプロイ

以下の curl コマンドを実行して、アプリケーションをアップロードします。<br/>
このコマンドは、zip ファイルをサーバーにアップロードし、割り当てられたアプリケーション ID を UUID 変数に格納します。

```
UUID=$(curl -s -X POST http://hiyori.cloud:8081/api/upload \
 -F "file=@app.zip" \
 | tee /dev/tty \
 | jq -r '.id')
```

## 動作確認

アップロードが完了したら、以下のコマンドでアプリケーションが正しく動作しているか確認します。

```
curl -H "Host: ${UUID}.hiyori.cloud" http://hiyori.cloud
```

期待通り`"foo!"`というレスポンスが返れば成功です 🎉
:::info レスポンスが返ってこない時
アプリケーションのデプロイには 2~3 分の時間を要します。<br/>
`"foo!"`というレスポンスが返ってこない時は、時間を空けて再度お試しください。
:::
