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
