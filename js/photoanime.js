window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.photo');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // 要素の上端が画面の下端より上にある場合、要素が画面内に入っている
        if (elementTop < windowHeight) {
            element.classList.add('visible'); // フェードインのクラスを追加してテキストを表示
        } else {
            element.classList.remove('visible'); // それ以外の場合はフェードインのクラスを削除
        }
    });
});