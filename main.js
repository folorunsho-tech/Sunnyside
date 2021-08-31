const hamburger = document.querySelector(".menu");
const menu = document.querySelector(".main-menu");
hamburger.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    if (menu.style.display == "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
});
