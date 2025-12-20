window.addEventListener("load", () => {
  const overlay = document.getElementById("fade-overlay");
  overlay.classList.add("fade-out");

  // 完全に消えたら DOM から削除してもOK
  overlay.addEventListener("transitionend", () => {
    overlay.remove();
  });
});

/*設定１*/
 
$(window).on('load', function(){
  $('body').removeClass('fadeout');
});
 
 
/*設定２*/
 
$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault(); // ナビゲートをキャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function(){
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 800);
    }
    return false;
  });
});