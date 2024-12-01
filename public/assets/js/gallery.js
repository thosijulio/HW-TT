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
