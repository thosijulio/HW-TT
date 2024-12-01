const carousel = document.getElementById("testimonials-carousel");
const testimonials = document.querySelectorAll(".testimonial");
const prevBtnTestimonial = document.getElementById("prev-btn-testimonial");
const nextBtnTestimonial = document.getElementById("next-btn-testimonial");
const pagination = document.getElementById("pagination");

let currentIndexTestimonial = 0;
const totalSlides = testimonials.length;

// Função para atualizar o carrossel
function updateCarousel() {
  const offset = -currentIndexTestimonial * 100;
  carousel.style.transform = `translateX(${offset}%)`;
  updatePagination();
}

// Função para atualizar a paginação
function updatePagination() {
  pagination.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === currentIndexTestimonial) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndexTestimonial = i;
      updateCarousel();
    });
    pagination.appendChild(dot);
  }
}

// Botão próximo
nextBtnTestimonial.addEventListener("click", () => {
  currentIndexTestimonial = (currentIndexTestimonial + 1) % totalSlides;
  updateCarousel();
});

// Botão anterior
prevBtnTestimonial.addEventListener("click", () => {
  currentIndexTestimonial =
    (currentIndexTestimonial - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Slider manual com arrastar
let startX = 0;
let isDragging = false;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  carousel.style.cursor = "grabbing";
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diff = e.clientX - startX;
  carousel.style.transform = `translateX(calc(-${
    currentIndexTestimonial * 100
  }% + ${diff}px))`;
});

carousel.addEventListener("mouseup", (e) => {
  isDragging = false;
  const diff = e.clientX - startX;
  if (diff > 50) {
    currentIndexTestimonial = Math.max(0, currentIndexTestimonial - 1);
  } else if (diff < -50) {
    currentIndexTestimonial = Math.min(
      totalSlides - 1,
      currentIndexTestimonial + 1
    );
  }
  updateCarousel();
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
  updateCarousel();
});

updateCarousel();
