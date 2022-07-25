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

fetch("../JSON/categoriesSliderData.JSON")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((item) => {
      //Declaration
      let slide = document.createElement("div"),
        img = document.createElement("img"),
        slider = document.querySelector(".carousel-slider"),
        txtBox = document.createElement("div"),
        namee = document.createElement("p"),
        hr = document.createElement("hr"),
        contsParent = document.createElement("section"),
        cont1 = document.createElement("div"),
        cont2 = document.createElement("div"),
        colection = document.createElement("p"),
        category = document.createElement("p"),
        colectionP = document.createElement("p"),
        categoryP = document.createElement("p"),
        link = document.createElement("a");

      // Adding Classes
      slide.classList.add("item");
      txtBox.classList.add("text-box");
      cont1.classList.add("cont");
      cont2.classList.add("cont");

      // Adding Text
      img.src = item.imgSrc;
      namee.innerText = item.title;
      colectionP.innerText = "Items in collection:";
      categoryP.innerText = "category:";
      category.innerText = item.category;
      colection.innerText = item.colliction;
      link.innerText = `Explore ${item.title.split(" ")[0]}`;

      // Pending Elements
      cont1.append(colectionP);
      cont1.append(colection);
      cont2.append(categoryP);
      cont2.append(category);
      contsParent.append(cont1);
      contsParent.append(cont2);
      txtBox.append(namee);
      txtBox.append(contsParent);
      txtBox.append(hr);
      slide.append(img);
      txtBox.append(link);
      slide.append(txtBox);
      slider.append(slide);
    });
  })

setTimeout(() => {
  let secSlider = document.querySelector(".carousel-slider"),
    items = secSlider.innerHTML,
    sliderCont = document.createElement("div"),
    item = document.querySelectorAll(".carousel-slider .item "),
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
    if (slidesCount == 0) {
      clearInterval(intarvalPrev);
      nextInt();
    }
  });
  nextInt();
}, 3000);
