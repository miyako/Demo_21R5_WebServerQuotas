const japanese = {
  'Ticketing demo login': 'チケット販売デモへのログイン',
  'Ticketing — 4D Quotas Demo': 'チケット販売 — 4D Quotas デモ',
  'Ticketing demo': 'チケット販売デモ',
  'Ticket sales application': 'チケット販売アプリケーション',
  'Start a signed-in visitor session to try the per-session request quota.': 'セッションごとのリクエスト上限を試すため、ログイン済みの訪問者セッションを開始します。',
  'Identifier': '識別子',
  'Password': 'パスワード',
  'Log in': 'ログイン',
  'These credentials are for demo purposes only. They are not verified or sent to the server.': 'これらの認証情報はデモ専用です。検証やサーバーへの送信は行いません。',
  'Language': '言語',
  'Welcome Mary!': 'Mary さん、ようこそ！',
  '1 · Check seats availability': '1 · 座席の空き状況を確認',
  '1 · Visitors refresh the page to see if the sale has started': '1 · 販売開始を確認するため、訪問者がページを再読み込み',
  "2 · An event organizer's software sends too much data": '2 · イベント主催者のソフトウェアが過剰なデータを送信',
  '3 · A visitor automates seat lookups': '3 · 訪問者が座席の空き状況確認を自動化',
  'One submission every': '送信間隔：',
  'One lookup every': '確認間隔：',
  'seconds': '秒',
  'Number of submissions': '送信回数',
  'Number of lookups': '確認回数',
  'Payload size': 'ペイロードサイズ',
  'Response size': '応答サイズ',
  'bytes': 'バイト',
  'Start burst': '連続送信を開始',
  'Start submissions': '送信を開始',
  'Stop': '停止',
  'The incoming quota counts the request body and HTTP headers, not just the size entered here.': '受信クォータは、ここで入力したサイズだけでなくリクエスト本文と HTTP ヘッダーもカウントします。',
  'A script keeps refreshing availability': 'スクリプトが空席状況を繰り返し確認',
  'Simulate refresh loop': '再読み込みをシミュレート',
  'Live technical log': 'リクエストの実行ログ',
  'Requests sent:': '送信済みリクエスト：',
  'Accepted (2xx):': '受理（2xx）：',
  'Rejected (429):': '拒否（429）：',
  'Clear log and counters': 'ログとカウンターを消去',
  'Request results': 'リクエスト結果',
  'Unable to start the session: {message}': 'セッションを開始できませんでした：{message}',
  'Done': '完了',
  'Response received from the server: {size} bytes': 'サーバーから受信した応答：{size} バイト',
  'Retry-After: "{value}"': '再試行まで："{value}"',
  'Request {index} / {count}': 'リクエスト {index} / {count}',
  'Burst completed': '連続送信が完了しました',
  'Burst stopped': '連続送信を停止しました',
  'ERROR: {message}': 'エラー：{message}',
};

const languageSelect = document.getElementById('languageSelect');
const originalText = new WeakMap();
const originalTitle = document.title;
const originalAriaLabels = new Map(
  [...document.querySelectorAll('[aria-label]')].map((element) => [element, element.getAttribute('aria-label')])
);

let currentLanguage = localStorage.getItem('demo-language') ||
  (navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'en');

function demoText(source, values = {}) {
  let text = currentLanguage === 'ja' ? (japanese[source] || source) : source;
  for (const [name, value] of Object.entries(values)) {
    text = text.replaceAll(`{${name}}`, String(value));
  }
  return text;
}

function applyLanguage(language) {
  currentLanguage = language === 'ja' ? 'ja' : 'en';
  document.documentElement.lang = currentLanguage;
  document.title = demoText(originalTitle);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style')) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) continue;
    const leading = currentLanguage === 'ja' ? '' : source.slice(0, source.indexOf(trimmed));
    const trailing = currentLanguage === 'ja' ? '' : source.slice(source.indexOf(trimmed) + trimmed.length);
    node.nodeValue = `${leading}${demoText(trimmed)}${trailing}`;
  }

  for (const [element, source] of originalAriaLabels) {
    element.setAttribute('aria-label', demoText(source));
  }

  if (languageSelect) languageSelect.value = currentLanguage;
}

languageSelect?.addEventListener('change', () => {
  localStorage.setItem('demo-language', languageSelect.value);
  applyLanguage(languageSelect.value);
});

window.demoText = demoText;
applyLanguage(currentLanguage);
