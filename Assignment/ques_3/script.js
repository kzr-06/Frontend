let slides = document.querySelectorAll('.slide');
let index = 0;

// Function to show a slide
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

// Next button
document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

// Previous button
document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// Auto-slide every 3 seconds
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3000);
