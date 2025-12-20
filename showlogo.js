$(function() {

  // リロードかどうかを判定
  const nav = performance.getEntriesByType("navigation")[0];
  const isReload = nav.type === "reload";

  // sessionStorage にフラグがなければ初回アクセス
  const isFirstVisit = !sessionStorage.getItem("visited");

  // ★ 初回 or リロード → ロゴを出す
  if (isFirstVisit || isReload) {

    // 初回訪問フラグをセット
    sessionStorage.setItem("visited", "true");

    // ロゴアニメーション
    setTimeout(function(){
      $('.start p').fadeIn(1600);
    },500);

    setTimeout(function(){
      $('.start').fadeOut(500);
    },2500);

    return;
  }

  // ★ ブラウザバック → ロゴを出さない
  $('.start').hide();
});