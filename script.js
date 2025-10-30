const slides = document.querySelectorAll('.slide');
let index = 0;
let slideInterval;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === n) slide.classList.add('active');
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.getElementById('prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

function startSlideshow() {
  slideInterval = setInterval(nextSlide, 3000); // every 3 seconds
}

function resetInterval() {
  clearInterval(slideInterval);
  startSlideshow();
}

// Initialize
showSlide(index);
startSlideshow();
