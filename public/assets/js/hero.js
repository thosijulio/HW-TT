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
