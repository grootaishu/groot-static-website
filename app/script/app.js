const mobileMenu = document.getElementById("mobileMenu");

mobileMenu.addEventListener("click", function () {
  if (mobileMenu.classList.contains("open")) {
    mobileMenu.classList.remove("open");
  } else {
    mobileMenu.classList.add("open");
  }
});

console.log("jai");
