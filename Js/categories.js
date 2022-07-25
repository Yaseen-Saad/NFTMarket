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
  item = document.querySelectorAll(".carousel-slider .item "),
  itemsMargin = getComputedStyle(item[0]),
  itemsWidth = item[0].clientWidth,
  elementMargin =
    parseInt(
      window
        .getComputedStyle(
          document.querySelector(".carousel-slider .item:first-child ")
        )
        .margin.split("px")[1]
    ) * 2,
  slidesCount = 1;
CurrWidth = itemsWidth;
secSlider.innerHTML = "";
sliderCont.innerHTML = items;
sliderCont.classList.add("Slider-Container");
secSlider.prepend(sliderCont);
let intervalNext;
let intarvalPrev;
function nextInt() {
  intervalNext = setInterval(() => {
    sliderCont.style.transform = `translateX(-${
      (itemsWidth + elementMargin) * slidesCount
    }px)`;
    slidesCount++;
  }, 1000);
}
function prevInt() {
  intarvalPrev = setInterval(() => {
    slidesCount--;
    sliderCont.style.transform = `translateX(-${
      (itemsWidth + elementMargin) * slidesCount
    }px)`;
  }, 1000);
}
sliderCont.addEventListener("transitionend", () => {
  if (slidesCount == 4) {
    clearInterval(intervalNext);
    prevInt();
  }
  if(slidesCount == 0){
    clearInterval(intarvalPrev);
    nextInt();
  }
});
nextInt();
