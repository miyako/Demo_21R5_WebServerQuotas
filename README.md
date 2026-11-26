# 4D Web Server Quotas

このデモでは、4D Web Server のクォータを変更し、リクエストやセッションへの影響を確認できます。対象バージョンは 4D 21 R5 です。

## デモを試す

1. 4D 21 R5 で `Project/Demo_21R5_WebServerQuotas.4DProject` を開き、依存コンポーネントのダウンロードを完了します。
2. `WebServerQuotas` フォームを実行します。
3. 同じ 4D サーバーに接続するブラウザーを 2 つ開き、次のページをそれぞれ表示します。
   - クォータのシナリオ: <http://127.0.0.1:8044/testQuotasTicketing.html>
   - チケット販売セッション: <http://127.0.0.1:8044/ticketingLogin.html>
4. ブラウザー側のログで成功したリクエストと HTTP 429 の応答を比較し、フォームでクォータを変更して再度試します。

ログインページに入力済みの認証情報はデモ用の表示例です。値は検証もサーバー送信もされません。ログイン操作は、デモサーバーに対して訪問者セッションを開始します。

## 言語

4D のフォームにある静的なラベルは OS の言語に合わせて英語または日本語で表示します。ブラウザーページはブラウザーの言語設定を初期値にし、ページ上部の選択欄から英語と日本語を切り替えられます。

フォームのタブ名と説明は `Data/Data.4DD` のデータに保存されており、現在は英語のままです。日本語の画面表示を完成させるには、この 4D データを開いて説明文を翻訳する作業が別途必要です。

## 共有時の注意

このプロジェクトはローカルで試すデモです。Web Server の設定では CORS が全ドメインに許可され、SSL が無効になっています。サーバーを公開ネットワークに接続しないでください。

詳細は[4D のブログ記事](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no)を参照してください。

---

# 4D Web Server Quotas

This demo changes 4D Web Server quotas so you can observe their effect on requests and sessions. It targets 4D 21 R5.

## Run the demo

1. Open `Project/Demo_21R5_WebServerQuotas.4DProject` in 4D 21 R5 and let it download the declared component dependencies.
2. Run the `WebServerQuotas` form.
3. Open two browser windows connected to the same 4D server:
   - Quota scenarios: <http://127.0.0.1:8044/testQuotasTicketing.html>
   - Ticketing session: <http://127.0.0.1:8044/ticketingLogin.html>
4. Compare successful requests with HTTP 429 responses in the browser logs, change a quota in the form, and try again.

The prefilled credentials on the login page are demo-only placeholders. They are not verified or sent to the server. Submitting the form starts a visitor session on the demo server.

## Language

Static labels in the 4D form follow the operating-system language and are available in English and Japanese. The browser pages use the browser language as the initial preference and provide an English/Japanese selector.

The form's tab titles and descriptions are stored in `Data/Data.4DD` and remain English. Completing Japanese localization of those descriptions requires editing the data in 4D.

## Sharing note

This is a local demo. The Web Server settings allow CORS from every domain and disable SSL; do not expose the server on a public network.

See the [4D blog post](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no) for background.
