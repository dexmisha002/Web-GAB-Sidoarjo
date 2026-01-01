const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function (e) {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    mobileMenu.classList.add("hidden");
  }
});
