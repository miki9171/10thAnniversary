function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createLantern() {
  var container = document.querySelector('.container');

  // ランダムなサイズ、位置、速度を生成
  var size = getRandomInt(50, 150); // ランタンの大きさ（px）
  var left = getRandomInt(0, window.innerWidth - size); // 横位置
  var duration = getRandomInt(5, 15); // 上昇速度（秒）
  var zIndex = Math.round(size); // サイズに応じてz-indexを設定

  // ランタンの要素を作成
  var lantern = document.createElement('div');
  lantern.classList.add('lantern');
  lantern.style.width = size + 'px';
  lantern.style.height = size + 'px';
  lantern.style.left = left + 'px';
  lantern.style.bottom = '-' + size + 'px'; // 初期位置を設定
  lantern.style.transition = 'bottom ' + duration + 's linear';
  lantern.style.backgroundImage = 'url("lantern.png")'; // 背景画像を設定
  lantern.style.zIndex = zIndex; // z-indexを設定

  // ランタンをクリックしたときの処理
  lantern.addEventListener('click', function() {
      var modal = document.getElementById('modal');
      var modalImg = document.getElementById('modalImage');
      modal.style.display = 'flex'; // モーダルを表示
      // 背景画像URLを正しく取得
      var bgImage = lantern.style.backgroundImage;
      var imageUrl = bgImage.slice(5, -2); // url("...") の部分を取り除く
      modalImg.src = imageUrl;
  });

  // ランタンをコンテナに追加
  container.appendChild(lantern);

  // 少し遅れてスタイル変更を行う
  setTimeout(function() {
      lantern.style.bottom = '100vh';
  }, 50);

  // 上昇完了後にランタンを削除
  setTimeout(function() {
      container.removeChild(lantern);
  }, duration * 1000 + 50);
}

// モーダルを閉じる処理
var modal = document.getElementById('modal');
var span = document.getElementsByClassName('close')[0];

span.onclick = function() {
  modal.style.display = 'none';
}

// 一定間隔でランタンを生成
setInterval(createLantern, 1000); // 1秒ごとにランタンを生成
