document.addEventListener('DOMContentLoaded', function () {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach(gallery => {
        const thumbnails = gallery.querySelectorAll('.thumbnails img');
        const fullImage = gallery.querySelector('.full-image img');

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                const fullImagePath = this.getAttribute('data-full');
                fullImage.src = fullImagePath;
            });
        });
    });
});