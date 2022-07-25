let categories = document.querySelector(".categories > div");
fetch("../JSON/categriesData.JSON")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      let parent = document.createElement("div"),
        img = document.createElement("img"),
        name = document.createElement("p"),
        next = document.createElement("span");
      name.innerHTML = ele.title;
      img.src = ele.image;
      next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

      parent.prepend(next);
      parent.prepend(name);
      parent.prepend(img);
      categories.prepend(parent);
    }
  });

let secSlider = document.querySelector(".carousel-slider"),
  items = secSlider.innerHTML,
  sliderCont = document.createElement("div"),
  item = document.querySelectorAll(".carousel-slider .item")[0],
  itemsMargin = getComputedStyle(item),
  itemsWidth = item.clientWidth,
  CurrWidth = itemsWidth;
secSlider.innerHTML = "";
sliderCont.innerHTML = items;
sliderCont.classList.add("Slider-Container");
secSlider.prepend(sliderCont);
//.Slider-Container
let slidesCount = 0;
console.log(item.style.margin);
setInterval(() => {
  if (slidesCount == 3) {
    clearInterval(1);
  }
  sliderCont.style.transform = `translateX(-${itemsWidth}px)`;
  itemsWidth += CurrWidth;
  console.log(sliderCont);
  slidesCount++;
}, 1000);
