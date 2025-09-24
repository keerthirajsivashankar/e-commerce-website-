console.log("The file is working fine");

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");

let index = 0;
let slideInterval = setInterval(nextSlide, 4000); // auto every 4s

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

// Button controls
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

// Dot controls
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlide();
    resetInterval();
  });
});

// Reset auto-slide after manual interaction
function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 4000);
}

const container = document.querySelector(".shoe-carousel-container");
const sprevBtn = document.querySelector(".shoe-carousel-btn.prev");
const snextBtn = document.querySelector(".shoe-carousel-btn.next");

// get one card width (includes margin if any)
const card = document.querySelector(".shoe-card");
const cardWidth = card.offsetWidth + 20; // add gap if you set margin

// Next button
snextBtn.addEventListener("click", () => {
  container.scrollBy({ left: cardWidth, behavior: "smooth" });
});

// Prev button
sprevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -cardWidth, behavior: "smooth" });
});
