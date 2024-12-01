const body = document.querySelector("body");
const formSection = document.getElementById("form-section");
const productSection = document.getElementById("product-section");

// Código referente a primeira seção (Formulário)

const formWarningText = document.getElementById("form-warning-text");
const mainHeader = document.querySelector("body > header");
const form = document.getElementById("lead-form");
const welcomeDiv = document.createElement("div");
welcomeDiv.id = "welcome-div";

if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    // Ocultando formulário
    if (formSection && formWarningText && productSection && mainHeader) {
      formWarningText.style.display = "none";
      mainHeader.style.display = "none";
      formSection.classList.add("hide");

      formSection.addEventListener("animationend", () => {
        productSection.style.display = "block";
        formSection.style.display = "none";
      });
    }

    // Exibindo toast de boas vindas
    const name = document.getElementById("name").value;
    welcomeDiv.innerHTML = `<p>Seja bem vindo(a), ${name.split(" ")[0]}!</p>`;
    body.insertAdjacentElement("beforeend", welcomeDiv);
  });
}

// Código referente a segunda seção (Produto)

const productHeader = document.getElementById("product-header");

// Animação no Header ao sroll da página
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const hamburguerDivs = document.querySelectorAll(
    "#product-hamburguer-mobile>div"
  );
  const desktopDivs = document.querySelectorAll(
    "#product-header-nav-desktop>ul>li>a"
  );

  if (scrollPosition > 30) {
    productHeader.style.backgroundColor = "#fafdea";
    productHeader.style.color = "#203b42";
    hamburguerDivs.forEach((item) => (item.style.backgroundColor = "#203b42"));
    desktopDivs.forEach((item) => (item.style.color = "#203b42"));
  } else {
    productHeader.style.backgroundColor = "transparent";
    productHeader.style.color = "#fafdea";
    hamburguerDivs.forEach((item) => (item.style.backgroundColor = "#fafdea"));
    desktopDivs.forEach((item) => (item.style.color = "#fafdea"));
  }
});

// Menu lateral
const hamburger = document.getElementById("product-hamburguer-mobile");
const sidebar = document.getElementById("product-header-nav-mobile");

hamburger.addEventListener("click", (event) => {
  sidebar.style.left = "0";
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target)) {
    sidebar.style.left = "-100%";
  }
});

// Carrossel de Imagens

// Seleciona os itens do carrossel e as thumbnails
const carouselItems = document.querySelectorAll(".carousel-item");
const thumbnails = document.querySelectorAll("#thumbnails img");

// Função para alternar a imagem ativa
function setActiveSlide(index) {
  // Remove a classe ativa de todos os itens
  carouselItems.forEach((item) => item.classList.remove("active"));
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  // Adiciona a classe ativa ao item correspondente
  carouselItems[index].classList.add("active");
  thumbnails[index].classList.add("active");
}

// Adiciona evento de clique para cada thumbnail
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => setActiveSlide(index));
});

// Define o primeiro item como ativo ao carregar a página
setActiveSlide(0);

// SEÇÃO DE GALERIA/MODAL

const images = document.querySelectorAll("#gallery-grid img");
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

// Abrir modal com a imagem clicada
function openModal(index) {
  currentIndex = index;
  modalImage.src = images[index].src;
  modal.classList.remove("hidden");
}

// Fechar modal
function closeModalWindow() {
  modal.classList.add("hidden");
}

// Mostrar próxima imagem
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex].src;
}

// Mostrar imagem anterior
function showPrevious() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex].src;
}

// Adiciona eventos aos elementos
images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

closeModal.addEventListener("click", closeModalWindow);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrevious);

// Fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalWindow();
  }
});

// TESTIMONIAL SECTION

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

// Logica para countdown
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let totalTime = 15 * 60;

function updateCountdown() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");

  totalTime--;

  if (totalTime < 0) {
    clearInterval(countdownTimer);
  }
}

const countdownTimer = setInterval(updateCountdown, 1000);

updateCountdown();
