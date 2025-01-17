// Menu hamburger

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  overlay = document.querySelector(".menu__overlay"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
});

// Counter ratings

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
