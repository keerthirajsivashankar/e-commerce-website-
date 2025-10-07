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

// Shoe carousel functionality

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

//watch carousel functionality
const wcontainer = document.querySelector(".watch-carousel-container");
const wprevBtn = document.querySelector(".watch-carousel-btn.prev");
const wnextBtn = document.querySelector(".watch-carousel-btn.next");

// get one card width (includes margin if any)
const wcard = document.querySelector(".shoe-card");
const wcardWidth = wcard.offsetWidth + 20; // add gap if you set margin
// Next button
wnextBtn.addEventListener("click", () => {
  wcontainer.scrollBy({ left: wcardWidth, behavior: "smooth" });
});
// Prev button
wprevBtn.addEventListener("click", () => {
  wcontainer.scrollBy({ left: -wcardWidth, behavior: "smooth" });
});

// glass carousel functionality
const gcontainer = document.querySelector(".glass-carousel-container");
const gprevBtn = document.querySelector(".glass-carousel-btn.prev");
const gnextBtn = document.querySelector(".glass-carousel-btn.next");
// get one card width (includes margin if any)
const gcard = document.querySelector(".shoe-card");
const gcardWidth = gcard.offsetWidth + 20; // add gap if you set margin
// Next button
gnextBtn.addEventListener("click", () => {
  gcontainer.scrollBy({ left: gcardWidth, behavior: "smooth" });
});
// Prev button
gprevBtn.addEventListener("click", () => {
  gcontainer.scrollBy({ left: -gcardWidth, behavior: "smooth" });
});

// belt carousel functionality
const bcontainer = document.querySelector(".belt-carousel-container");
const bprevBtn = document.querySelector(".belt-carousel-btn.prev");
const bnextBtn = document.querySelector(".belt-carousel-btn.next");
// get one card width (includes margin if any)
const bcard = document.querySelector(".shoe-card");
const bcardWidth = bcard.offsetWidth + 20; // add gap if you set margin
// Next button
bnextBtn.addEventListener("click", () => {
  bcontainer.scrollBy({ left: bcardWidth, behavior: "smooth" });
});
// Prev button
bprevBtn.addEventListener("click", () => {
  bcontainer.scrollBy({ left: -bcardWidth, behavior: "smooth" });
});

// wallet carousel functionality
const wltcontainer = document.querySelector(".wallet-carousel-container");
const wltprevBtn = document.querySelector(".wallet-carousel-btn.prev");
const wltnextBtn = document.querySelector(".wallet-carousel-btn.next");
// get one card width (includes margin if any)
const wltcard = document.querySelector(".shoe-card");
const wltcardWidth = wltcard.offsetWidth + 20;
// Next button
wltnextBtn.addEventListener("click", () => {
  wltcontainer.scrollBy({ left: wltcardWidth, behavior: "smooth" });
});
// Prev button
wltprevBtn.addEventListener("click", () => {
  wltcontainer.scrollBy({ left: -wltcardWidth, behavior: "smooth" });
});

//ring carousel functionality
const rcontainer = document.querySelector(".ring-carousel-container");
const rprevBtn = document.querySelector(".ring-carousel-btn.prev");
const rnextBtn = document.querySelector(".ring-carousel-btn.next");
// get one card width (includes margin if any)
const rcard = document.querySelector(".shoe-card");
const rcardWidth = rcard.offsetWidth + 20;
// Next button
rnextBtn.addEventListener("click", () => {
  rcontainer.scrollBy({ left: rcardWidth, behavior: "smooth" });
});
// Prev button
rprevBtn.addEventListener("click", () => {
  rcontainer.scrollBy({ left: -rcardWidth, behavior: "smooth" });
});
