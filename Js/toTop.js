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
  if (scrollY + window.innerHeight === document.documentElement.scrollHeight) {
    scrollToTop.style.right = "0";
  } else {
    scrollToTop.style.right = "-60px";
  }
});
