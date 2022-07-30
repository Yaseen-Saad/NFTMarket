// =>>>>>>>>>>>>>> Edit By Mina Romany <<<<<<<<<<<<<= 
// declar the DOM Static Variable of slider
const slideContainer = document.querySelector(".container-slider")
const slide = document.querySelector(".slider")
const nextBtn = document.querySelector(".controls button:nth-child(2)")
const prevBtn = document.querySelector(".controls button:nth-child(1)")
const interval = 4000;
// declar the dynamic variable of DOM 
let slides = document.querySelectorAll(".slide")
let index = 1;
let slidId;
//create The Colne of the First and last img in the slider
const firstClone = slides[0].cloneNode(true)
const lastClone = slides[slides.length - 1].cloneNode(true)
// add id to the cloned img to mark them
firstClone.id = "first-clone"
lastClone.id = "last-clone"
// append the cloned img

// git the width of the slide
const slideWidth = slides[index].clientWidth;
// move the slide to left by using the index * width of slide 
slide.style.transform = `translateX(${-slideWidth * index}px)`
// function to start sliding
const startSlide = () => {
    slidId = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
        slide.style.transition = "0.3s"
    },interval)
}
//to make sure that the slide finish to repeat
slide.addEventListener("transitionend",() => {
    // To make sure that the append of the cloned img is happend 
    slides = document.querySelectorAll(".slide")
    if(slides[index].getAttribute("id") === firstClone.id){
        slide.style.transition = "none"
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    }else if(slides[index].getAttribute("id") === lastClone.id){
        slide.style.transition = "none"
        index = 4;
        slide.style.transform = `translateX(${-slideWidth * index}px)`
    }
})
// make a clear of the interval in mouse in
slideContainer.addEventListener("mouseenter",() => {
    clearInterval(slidId)
})
// call the start slide function when mouse out 
slideContainer.addEventListener("mouseleave",startSlide);
// git the next img 
nextBtn.onclick = () => {
    // To prevent an error when pressing quickly
    slides = document.querySelectorAll(".slide")
    if(index >= slides.length - 1) return;


    index++;
    slide.style.transition = "0.3s"
    slide.style.transform = `translateX(${-slideWidth * index}px)`
}
// git the previous img
prevBtn.onclick = () => {
    // To prevent an error when pressing quickly
    if(index <= 0) return;

    index--;
    slide.style.transition = "0.3s"
    slide.style.transform = `translateX(${-slideWidth * index}px)`
}
nextBtn.addEventListener("mouseenter",() => {
    clearInterval(slidId)
})
prevBtn.addEventListener("mouseenter",() => {
    clearInterval(slidId)
})
nextBtn.addEventListener("mouseleave",startSlide)
prevBtn.addEventListener("mouseleave",startSlide)
startSlide()