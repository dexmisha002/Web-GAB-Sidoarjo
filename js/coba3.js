const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});
