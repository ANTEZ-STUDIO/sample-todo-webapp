# sample-todo-webapp

シンプルなToDo管理Webアプリケーション

## 概要

このアプリケーションは、個人で使用できるToDo管理ツールです。ToDoの作成、表示、編集、削除ができます。

## 機能

- ✅ ToDoの作成、一覧表示、編集、削除（CRUD操作）
- 📝 ToDoには以下の情報を保持：
  - タイトル（必須）
  - 内容
  - 期限日
  - 優先度（高/中/低）
- 🎨 視覚的に優先度を区別できるカラフルなUI
- 💾 SQLiteデータベースでデータを永続化

## 技術スタック

- **Backend**: Node.js + Express
- **Template Engine**: EJS
- **Database**: SQLite
- **Architecture**: MVC (Model-View-Controller)

## フォルダ構成

```
sample-todo-webapp/
├── src/                    # アプリケーションコード
│   ├── app.js             # メインアプリケーションファイル
│   ├── controllers/       # ビジネスロジック（クラスベース）
│   │   └── TodoController.js
│   ├── routes/            # ルート定義
│   │   └── todos.js
│   ├── views/             # EJSテンプレート
│   │   ├── index.ejs     # ToDo一覧画面
│   │   └── form.ejs      # 作成/編集フォーム
│   └── public/            # 静的ファイル
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── main.js
├── data/                   # データベース関連
│   ├── database.js        # データベース初期化
│   └── todos.db          # SQLiteデータベース（自動生成）
├── package.json
└── README.md
```

## セットアップ

### 必要環境

- Node.js (v14以上推奨)
- npm

### インストール

1. リポジトリをクローン：
```bash
git clone https://github.com/ANTEZ-STUDIO/sample-todo-webapp.git
cd sample-todo-webapp
```

2. 依存関係をインストール：
```bash
npm install
```

3. アプリケーションを起動：
```bash
npm start
```

4. ブラウザで以下のURLにアクセス：
```
http://localhost:3000
```

## 使い方

### ToDoの作成
1. トップページの「新しいToDoを追加」ボタンをクリック
2. フォームに必要な情報を入力：
   - タイトル（必須）
   - 内容（任意）
   - 期限（任意）
   - 優先度（高/中/低から選択、デフォルトは中）
3. 「作成」ボタンをクリック

### ToDoの編集
1. 編集したいToDoの「編集」ボタンをクリック
2. フォームで情報を変更
3. 「更新」ボタンをクリック

### ToDoの削除
1. 削除したいToDoの「削除」ボタンをクリック
2. 確認ダイアログで「OK」をクリック

## 優先度による色分け

- **高**: 赤色の左ボーダー
- **中**: 黄色の左ボーダー
- **低**: 緑色の左ボーダー

## データベース

アプリケーションは SQLite を使用してデータを保存します。データベースファイル（`data/todos.db`）は初回起動時に自動的に作成されます。

## ライセンス

ISC

## 作者

ANTEZ-STUDIO
