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

  if (scrollPosition > 30) {
    productHeader.style.backgroundColor = "#fafdea";
    productHeader.style.color = "#203b42";
  } else {
    productHeader.style.backgroundColor = "transparent";
    productHeader.style.color = "#fafdea";
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
