const formSection = document.getElementById("form-section");
const formWarningText = document.getElementById("form-warning-text");
const form = document.getElementById("lead-form");
const body = document.querySelector("body");

const welcomeDiv = document.createElement("div");
welcomeDiv.id = "welcome-div";

if (form) {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    // Ocultando formulário
    if (formSection && formWarningText) {
      formWarningText.style.display = "none";
      formSection.classList.add("hide");

      formSection.addEventListener("animationend", () => {
        formSection.style.display = "none";
      });
    }

    // Exibindo toast de boas vindas
    const name = document.getElementById("name").value;
    welcomeDiv.innerHTML = `<p>Seja bem vindo(a), ${name.split(" ")[0]}!</p>`;
    body.insertAdjacentElement("beforeend", welcomeDiv);
  });
}
