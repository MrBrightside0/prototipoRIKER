document.addEventListener('DOMContentLoaded', function() {
    function initializeCarousel(carouselId) {
        let currentIndex = 0;
        const carousel = document.querySelector(carouselId);
        const images = carousel.querySelectorAll('.carousel-images img');
        const totalImages = images.length;
    
        function showImage(index) {
            images.forEach(img => {
                img.classList.add('fade-out');
                img.classList.remove('fade-in');
            });
            images[index].classList.add('fade-in');
            images[index].classList.remove('fade-out');
        }
    
        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }
    
        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }
    
        carousel.querySelector('.carousel-next').addEventListener('click', nextImage);
        carousel.querySelector('.carousel-prev').addEventListener('click', prevImage);
    
        showImage(0); // Mostrar la primera imagen al cargar
    }

    initializeCarousel('#imageCarousel'); // Inicializa el carrusel principal
    initializeCarousel('#clientesCarousel'); // Inicializa el carrusel de clientes
});
