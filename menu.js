// ========================================
// JavaScript の開始
// このファイルでメニューの開閉動作を制御します
// ========================================

// ----------------------------------------
// ステップ1: HTML要素を取得する
// ----------------------------------------
// document.getElementById('ID名') で、HTMLの中から特定のIDを持つ要素を探して取得します
// 取得した要素を変数（const）に保存することで、後から何度でも使えます

const menuBtn = document.getElementById('menuBtn');
// 意味: HTMLの中から id="menuBtn" の要素を探して、menuBtn という変数に保存
// これは右上の青いメニューボタンです

const closeBtn = document.getElementById('closeBtn');
// 意味: HTMLの中から id="closeBtn" の要素を探して、closeBtn という変数に保存
// これはメニュー内の×ボタンです

const overlay = document.getElementById('overlay');
// 意味: HTMLの中から id="overlay" の要素を探して、overlay という変数に保存
// これは背景の暗い半透明の幕です

const navMenu = document.getElementById('navMenu');
// 意味: HTMLの中から id="navMenu" の要素を探して、navMenu という変数に保存
// これは右から出てくるメニューウィンドウです


// ----------------------------------------
// ステップ2: メニューを開く関数を定義
// ----------------------------------------
// function 関数名() { 処理内容 } という形で、複数の処理をまとめて名前をつけます
// 後から「関数名()」と書くだけで、この処理を実行できます

function openMenu() {
  // この関数が呼ばれると、以下の2つの処理を実行します
  
  // classList.add('クラス名') は、要素にCSSのクラスを追加する命令です
  // クラスを追加すると、CSSで定義した「.active」のスタイルが適用されます
  
  overlay.classList.add('active');
  // 意味: overlay に 'active' クラスを追加
  // 結果: CSSの .overlay.active が適用され、背景が暗くなります
  
  navMenu.classList.add('active');
  // 意味: navMenu に 'active' クラスを追加
  // 結果: CSSの .nav-menu.active が適用され、メニューが右から出てきます
}


// ----------------------------------------
// ステップ3: メニューを閉じる関数を定義
// ----------------------------------------
function closeMenu() {
  // この関数が呼ばれると、以下の2つの処理を実行します
  
  // classList.remove('クラス名') は、要素からCSSのクラスを削除する命令です
  // クラスを削除すると、元の状態（.active がない状態）に戻ります
  
  overlay.classList.remove('active');
  // 意味: overlay から 'active' クラスを削除
  // 結果: 背景の暗い幕が消えます
  
  navMenu.classList.remove('active');
  // 意味: navMenu から 'active' クラスを削除
  // 結果: メニューが右側に隠れます
}


// ----------------------------------------
// ステップ4: イベントリスナーを設定
// ----------------------------------------
// addEventListener('イベント名', 実行する関数) で、
// 「〇〇が起きたら、△△を実行する」という仕組みを作ります
// イベント名の例: 'click'（クリック）, 'mouseover'（マウスを乗せる）など

menuBtn.addEventListener('click', openMenu);
// 意味: menuBtn（右上のメニューボタン）がクリックされたら、openMenu関数を実行
// 結果: ボタンをクリックすると、メニューが開きます

closeBtn.addEventListener('click', closeMenu);
// 意味: closeBtn（×ボタン）がクリックされたら、closeMenu関数を実行
// 結果: ×ボタンをクリックすると、メニューが閉じます

overlay.addEventListener('click', closeMenu);
// 意味: overlay（背景の暗い部分）がクリックされたら、closeMenu関数を実行
// 結果: 背景をクリックすると、メニューが閉じます


// ----------------------------------------
// ステップ5: メニュー内のリンクをクリックした時の処理
// ----------------------------------------
// メニュー内のリンク（ホーム、会社概要など）をクリックした時も
// メニューを閉じるようにします

// querySelectorAll('セレクタ') は、条件に合うすべての要素を取得する命令です
const menuLinks = document.querySelectorAll('.menu-list a');
// 意味: .menu-list の中にあるすべての <a> タグ（リンク）を取得
// 結果: メニュー内の6つのリンクすべてが menuLinks に保存されます

// forEach() は、取得した要素一つ一つに対して処理を実行する命令です
// forEach(要素 => { 処理 }) という形で書きます
menuLinks.forEach(link => {
  // 意味: menuLinks の中の各リンクに対して、以下の処理を行います
  // link は、現在処理中のリンク1つを指します
  
  link.addEventListener('click', closeMenu);
  // 意味: このリンクがクリックされたら、closeMenu関数を実行
  // 結果: どのメニュー項目をクリックしても、メニューが閉じます
});


// ========================================
// JavaScript の終了
// ========================================

/* 
【動作の流れ全体まとめ】

1. ページが読み込まれる
   ↓
2. このJavaScriptが実行され、必要な要素を取得
   ↓
3. イベントリスナーが「待機状態」になる
   ↓
4. ユーザーがメニューボタンをクリック
   ↓
5. 'click' イベントが発生
   ↓
6. openMenu() 関数が実行される
   ↓
7. overlay と navMenu に 'active' クラスが追加される
   ↓
8. CSSで定義された「開いた状態」のスタイルが適用される
   ↓
9. メニューが右からスライドして表示される
   ↓
10. ユーザーが×ボタンまたは背景をクリック
    ↓
11. closeMenu() 関数が実行される
    ↓
12. 'active' クラスが削除される
    ↓
13. メニューが閉じる

【重要な概念】
- 変数（const）: 値を入れる箱
- 関数（function）: 処理をまとめたもの
- クラスの追加/削除: CSSのスタイルを切り替える
- イベントリスナー: 「何かが起きたら実行」の仕組み
*/