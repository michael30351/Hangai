window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.text-anime');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 要素の上端が画面の下端より上にある場合、要素が画面内に入っている
        if (elementTop < windowHeight) {
            element.classList.add('active'); // フェードインのクラスを追加してテキストを表示
        } else {
            element.classList.remove('active'); // それ以外の場合はフェードインのクラスを削除
        }
    });
});