document.addEventListener('DOMContentLoaded', () => {
    const recTitle = document.querySelector('.rec-title');
    const recruitText = document.querySelector('.recruit-text p');

    function revealText(element) {
        const text = element.textContent;
        element.innerHTML = '';
        const spans = text.split('').map(char => {
            const span = document.createElement('span');
            span.textContent = char;
            element.appendChild(span);
            return span;
        });

        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('visible');
            }, index * 80); // adjust the delay as needed
        });
    }

    revealText(recTitle);
    revealText(recruitText);
});