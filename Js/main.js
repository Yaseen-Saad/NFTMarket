// Scroll To Top
// Initalizing The Elements
let scrollToTop = document.createElement("span"),
  icon = document.createElement("i");
// Adding Classes To Elements
icon.classList.add("fa-solid", "fa-arrow-up");
scrollToTop.classList.add("ToTop");
// Pending Elements
scrollToTop.append(icon);
document.body.append(scrollToTop);
// Adding Events
scrollToTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
window.addEventListener("scroll", () => {
  if (scrollY >= 1000 || pageYOffset >= 1000) {
    scrollToTop.style.transform = "translateY(0)";
  } else {
    scrollToTop.style.transform = "translateY(200px)";
  }
});

// Nav
let toggler = document.querySelector(".toggler");
let ul = document.querySelector("header > ul");
toggler.onclick = () => {
  ul.classList.toggle("active");
  toggler.classList.toggle("active");

}