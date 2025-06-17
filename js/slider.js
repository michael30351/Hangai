document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach((slider) => {
        const slides = slider.querySelector('.slides');
        const slide = slider.querySelectorAll('.slide');
        const prevBtns = slider.querySelectorAll('.arrow-btn.prev');
        const nextBtns = slider.querySelectorAll('.arrow-btn.next');

        let currentIndex = 0;
        const slideCount = slide.length;

        // クローン作成
        const firstClone = slide[0].cloneNode(true);
        const lastClone = slide[slideCount - 1].cloneNode(true);

        slides.appendChild(firstClone);
        slides.insertBefore(lastClone, slide[0]);

        // 初期位置調整
        slides.style.transform = `translateX(-${100}%)`;

        function updateSlider() {
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        }

        function goPrev() {
            if (currentIndex === 0) {
                slides.style.transition = 'none';
                currentIndex = slideCount - 1;
                slides.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
                setTimeout(() => {
                    slides.style.transition = 'transform 0.5s ease-in-out';
                    currentIndex--;
                    updateSlider();
                }, 50);
            } else {
                currentIndex--;
                updateSlider();
            }
        }

        function goNext() {
            if (currentIndex === slideCount - 1) {
                slides.style.transition = 'transform 0.5s ease-in-out';
                currentIndex++;
                updateSlider();
                setTimeout(() => {
                    slides.style.transition = 'none';
                    currentIndex = 0;
                    slides.style.transform = `translateX(-${100}%)`;
                }, 500);
            } else {
                currentIndex++;
                updateSlider();
            }
        }

        // 複数のボタンにイベント追加
        prevBtns.forEach((btn) => btn.addEventListener('click', goPrev));
        nextBtns.forEach((btn) => btn.addEventListener('click', goNext));
    });
});
