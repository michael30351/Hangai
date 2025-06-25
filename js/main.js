$('.slider').slick({
    fade: true, //切り替えをフェードで行う。初期値はfalse。
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 4000, //次のスライドに切り替わる待ち時間
    speed: 2000, //スライドの動きのスピード。初期値は300。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    arrows: true, //左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    dots: true, //下部ドットナビゲーションの表示
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

var newsList = [
    '2024.5.1　:　ホームページをリニューアルしました',
    '2024.5.1　:　社員食堂を始めました',
    '2024.5.1　:　事務所を新築・移転しました',
    '2024.5.1　:　採用情報を更新しました',
];

var newsTicker = document.getElementById('news-ticker');
var newsIndex = 0;

function updateNewsTicker() {
    // インデックスに対応するニュースを表示
    newsTicker.textContent = newsList[newsIndex];

    // 下から上にスライドするアニメーションを適用
    newsTicker.style.animation = 'slide-up 0.5s ease-in-out';
}

// 初回表示のために最初のニュースを表示
updateNewsTicker();

// 5秒ごとにニュースを更新
var intervalId = setInterval(function () {
    // アニメーションをリセット
    newsTicker.style.animation = '';

    // インデックスを更新 (もし最後のニュースだった場合は最初に戻る)
    newsIndex = (newsIndex + 1) % newsList.length;

    // 少し待ってからニュースを更新（アニメーションのリセットが完了するのを待つため）
    setTimeout(updateNewsTicker, 100);
}, 5000);

// 進むボタンがクリックされたときの処理
document.getElementById('next').addEventListener('click', function () {
    // アニメーションをリセット
    newsTicker.style.animation = '';

    // インデックスを更新 (もし最後のニュースだった場合は最初に戻る)
    newsIndex = (newsIndex + 1) % newsList.length;

    // 少し待ってからニュースを更新（アニメーションのリセットが完了するのを待つため）
    setTimeout(updateNewsTicker, 100);

    // インターバルをリセット
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        newsTicker.style.animation = '';
        newsIndex = (newsIndex + 1) % newsList.length;
        setTimeout(updateNewsTicker, 100);
    }, 5000);
});

// 戻るボタンがクリックされたときの処理
document.getElementById('prev').addEventListener('click', function () {
    // アニメーションをリセット
    newsTicker.style.animation = '';

    // インデックスを更新 (もし最初のニュースだった場合は最後に戻る)
    newsIndex = (newsIndex - 1 + newsList.length) % newsList.length;

    // 少し待ってからニュースを更新（アニメーションのリセットが完了するのを待つため）
    setTimeout(updateNewsTicker, 100);

    // インターバルをリセット
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        newsTicker.style.animation = '';
        newsIndex = (newsIndex + 1) % newsList.length;
        setTimeout(updateNewsTicker, 100);
    }, 5000);
});


function slideVisibleToggle(sWrap) {
    sWrap.forEach(function (slideItem) {
        if (slideItem.classList.contains('swiper-slide-visible') == true) {
            if (slideItem.classList.contains('slide-invisible') == true) {
                slideItem.classList.remove('slide-invisible');
            }
        } else {
            if (slideItem.classList.contains('slide-invisible') == false) {
                slideItem.classList.add('slide-invisible');
            }
        }
    });
}

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        disableOnInteraction: false,
        reverseDirection: false,
        pauseOnMouseEnter: true,
        delay: 3000,
    },
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 3,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
        },
        601: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 3,
        }
    },
    loop: true,
    coverflowEffect: {
        rotate: 10,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 800,
    on: {
        slideChange: function () {
            slideVisibleToggle(document.querySelectorAll('.swiper-slide'));
        },
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const feature02 = document.querySelector('.feature-flex02-copy');
    const width = 430;

    function checkWidth() {
        if (window.innerWidth <= width) {
            feature02.style.display = 'block';
        } else {
            feature02.style.display = 'none';
        }

    }

    checkWidth();

    // ウィンドウのリサイズイベントを監視
    window.addEventListener('resize', checkWidth);

});

function setRealHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setRealHeight);
setRealHeight();
  