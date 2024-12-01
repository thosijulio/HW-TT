const body = document.querySelector("body");
const formSection = document.getElementById("form-section");
const productSection = document.getElementById("product-section");


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