function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomImage() {
  // 画像ファイルのリストを定義
  var images = [
      'lantern/lantern2.png',
      'lantern/lantern3.png',
      'lantern/A87B68CC-D903-4BBE-8429-969F4BE34E1D - 25jy0232馬 卉 沢.png',
      'lantern/B82ACBD1-7A42-433F-B8B3-5C96EBE2BE44 - かなめ.png',
      'lantern/IMG_1228 - Aりんご.png',
      'lantern/IMG_2535 - たきあかり.png',
      'lantern/IMG_2743 - ギガスロボロー.png',
      'lantern/lantern - 亨子遠藤.png',
      'lantern/イラスト(1).png',
      'lantern/イラスト.PNG',
      'lantern/無題146_20250731163335 - 玖音ゆう.png',
      'lantern/無題21_20250731093030 - くらむぼん.png',
      'lantern/無題24_20250731131046 - _m天音.png',
      'lantern/無題593_20250730212309 - 太田遥香.png',
      'lantern/無題1384_20250731195509.PNG',
      'lantern/無題1384_20250731195546.PNG',
      'lantern/無題1384_20250731195600.PNG',
      'lantern/無題1384_20250731195834.PNG',
      'lantern/無題1384_20250731195848.PNG',
      'lantern/無題1384_20250731195859.PNG',
      'lantern/無題1384_20250731200035.PNG',
      'lantern/無題1384_20250731200124.PNG',
      'lantern/無題1384_20250731200329.PNG',
      'lantern/無題1384_20250731200441.PNG',
      'lantern/無題1384_20250731200540.PNG',
      'lantern/無題1384_20250731200617.PNG',
      'lantern/無題1384_20250731201107.PNG',
      'lantern/無題1384_20250731201143.PNG'
      // 追加の画像ファイルをここにリストする
  ];
  // ランダムに画像を選択
  var index = getRandomInt(0, images.length);
  return images[index];
}

function createLantern() {
  var container = document.querySelector('.container');

  // ランダムなサイズ、位置、速度を生成
  var size = getRandomInt(50, 150); // ランタンの大きさ（px）
  var left = getRandomInt(0, window.innerWidth - size); // 横位置
  var duration = getRandomInt(5, 15); // 上昇速度（秒）
  var zIndex = Math.round(size); // サイズに応じてz-indexを設定
  var imageUrl = getRandomImage(); // ランダムな画像を取得

  // ランタンの要素を作成
  var lantern = document.createElement('div');
  lantern.classList.add('lantern');
  lantern.style.width = size + 'px';
  lantern.style.height = size + 'px';
  lantern.style.left = left + 'px';
  lantern.style.bottom = '-' + size + 'px'; // 初期位置を設定
  lantern.style.transition = 'bottom ' + duration + 's linear';
  lantern.style.backgroundImage = 'url("' + imageUrl + '")'; // ランダムな背景画像を設定
  lantern.style.zIndex = zIndex; // z-indexを設定

  // ランタンをクリックしたときの処理
  lantern.addEventListener('click', function() {
      var modal = document.getElementById('modal');
      var modalImg = document.getElementById('modalImage');
      modal.style.display = 'flex'; // モーダルを表示
      modalImg.src = imageUrl; // 画像URLを設定
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
