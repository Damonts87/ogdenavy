let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    // Update the currentIndex and keep it in the bounds of available slides
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    // Move the carousel to the correct image
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}
