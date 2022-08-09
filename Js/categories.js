let categories = document.querySelector(".categories .data");
fetch("../Json/categriesData.JSON")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      let parent = document.createElement("div"),
        img = document.createElement("img"),
        name = document.createElement("p"),
        next = document.createElement("span");
      name.innerHTML = ele.title || "Sample Text.";
      img.src = ele.image || "images/icon-05.png";
      next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      parent.prepend(next);
      parent.prepend(name);
      parent.prepend(img);
      categories.prepend(parent);
    }
  });
let container = document.createElement("div");
container.classList.add("Slider-Container");
fetch("../Json/categoriesSliderData.JSON")
  .then((response) => response.json())
  .then((data) => {
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
      console.log(data);
      // Adding Text
      img.src = item.imgSrc || "images/collection-01.jpg";
      namee.innerText = item.title || "Genesis Collective Statue";
      colectionP.innerText = "Items in collection:";
      categoryP.innerText = "category:";
      category.innerText = item.category || "Music Art";
      colection.innerText = item.colliction || "380/394";
      link.innerText = `Explore ${item.title.split(" ")[0] ||""}`;

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
      container.append(slide);
      slider.prepend(container);
    });
  });

setTimeout(() => {
  let slideContainer = document.querySelector(".carousel-slider"),
    slide = document.querySelector(".carousel-slider > div"),
    slides = document.querySelectorAll(".carousel-slider div .item ");

  const nextBtn = document.querySelector(".control button:nth-child(2)");
  const prevBtn = document.querySelector(".control button:nth-child(1)");
  const interval = 6000;
  // declar the dynamic variable of DOM
  // let slides = document.querySelectorAll(".slide")
  let index = 1;
  let slidId;
  //create The Colne of the First and last img in the slider
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  const secClone = slides[1].cloneNode(true);
  const lastsecClone = slides[slides.length - 2].cloneNode(true);
  const thirClone = slides[2].cloneNode(true);
  const lastthirClone = slides[slides.length - 3].cloneNode(true);
  // add id to the cloned img to mark them
  firstClone.id = "first-clone";
  lastClone.id = "last-clone";
  // append the cloned img
  slide.append(firstClone);
  slide.prepend(lastClone);
  slide.append(secClone);
  slide.prepend(lastsecClone);
  slide.append(thirClone);
  slide.prepend(lastthirClone);
  // git the width of the slide
  (let = itemsWidth = slides[index].clientWidth),
    (elementMargin =
      parseInt(
        window
          .getComputedStyle(
            document.querySelector(".carousel-slider .item:first-child ")
          )
          .margin.split("px")[1]
      ) * 2);
  const slideWidth = itemsWidth + elementMargin;
  // move the slide to left by using the index * width of slide
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  // function to start sliding
  const startSlide = () => {
    slidId = setInterval(() => {
      slides = document.querySelectorAll(".carousel-slider div .item ");
      if (index >= slides.length - 1) return;
      index++;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
      slide.style.transition = "0.3s";
    }, interval);
  };
  //to make sure that the slide finish to repeat
  slide.addEventListener("transitionend", () => {
    // To make sure that the append of the cloned img is happend
    slides = document.querySelectorAll(".slide");
    if (slides[index].getAttribute("id") === firstClone.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    } else if (slides[index].getAttribute("id") === lastClone.id) {
      slide.style.transition = "none";
      index = 4;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });
  // make a clear of the interval in mouse in
  slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slidId);
  });
  // call the start slide function when mouse out
  slideContainer.addEventListener("mouseleave", startSlide);
  // git the next img
  nextBtn.onclick = () => {
    // To prevent an error when pressing quickly
    slides = document.querySelectorAll(".slide");
    if (index >= slides.length - 1) return;

    index++;
    slide.style.transition = "0.3s";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };
  // git the previous img
  prevBtn.onclick = () => {
    // To prevent an error when pressing quickly
    if (index <= 0) return;

    index--;
    slide.style.transition = "0.3s";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };
  nextBtn.addEventListener("mouseenter", () => {
    clearInterval(slidId);
  });
  prevBtn.addEventListener("mouseenter", () => {
    clearInterval(slidId);
  });
  nextBtn.addEventListener("mouseleave", startSlide);
  prevBtn.addEventListener("mouseleave", startSlide);
  startSlide();
}, 3000);
