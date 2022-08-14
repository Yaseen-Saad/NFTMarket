//Landing Section
// =>>>>>>>>>>>>>> Edit By Mina Romany <<<<<<<<<<<<<=
// declar the DOM Static Variable of slider
const slideContainer = document.querySelector(".container-slider");
const slide = document.querySelector(".slider");
const nextBtn = document.querySelector(".controls button:nth-child(2)");
const prevBtn = document.querySelector(".controls button:nth-child(1)");
const interval = 4000;
// declar the dynamic variable of DOM
let slides = document.querySelectorAll(".slide");
let index = 1;
let slidId;
//create The Colne of the First and last img in the slider
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
// add id to the cloned img to mark them
firstClone.id = "first-clone";
lastClone.id = "last-clone";
// append the cloned img
slide.append(firstClone);
slide.prepend(lastClone);
// git the width of the slide
const slideWidth = slides[index].clientWidth;
// move the slide to left by using the index * width of slide
slide.style.transform = `translateX(${-slideWidth * index}px)`;
// function to start sliding
const startSlide = () => {
	slidId = setInterval(() => {
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


// Categories Section


let categories = document.querySelector(".categories .data");
fetch("Json/categriesData.JSON")
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
fetch("Json/categoriesSliderData.JSON")
	.then((response) => response.json())
	.then((data) => {
		data.forEach((item) => {
			//Declaration
			let slide = document.createElement("div"),
				img = document.createElement("img"),
				slider = document.querySelector(".carousel-slider.maincContainer"),
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
			img.src = item.imgSrc || "images/collection-01.jpg";
			namee.innerText = item.title || "Genesis Collective Statue";
			colectionP.innerText = "Items in collection:";
			categoryP.innerText = "category:";
			category.innerText = item.category || "Music Art";
			colection.innerText = item.colliction || "380/394";
			link.innerText = `Explore ${item.title.split(" ")[0] || ""}`;

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
	let slideContainer = document.querySelector(".carousel-slider.maincContainer"),
		slide = document.querySelector(".carousel-slider.maincContainer > div"),
		slides = document.querySelectorAll(".carousel-slider.maincContainer div .item ");

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

// Tabs Section

let inMarket = document.querySelector(".inMarket > .maincContainer > .grid");
fetch("Json/tagsData.JSON")
	.then((res) => res.json())
	.then((data) => {
		data.forEach((ele) => {
			//Declration
			let item = document.createElement("div"),
				mainImg = document.createElement("img"),
				text = document.createElement("div"),
				name = document.createElement("p"),
				userNameCont = document.createElement("div"),
				userNameImg = document.createElement("img"),
				userNameMiniCont = document.createElement("div"),
				userNameDes = document.createElement("p"),
				userName = document.createElement("p"),
				hr = document.createElement("hr"),
				secSecCont = document.createElement("div"),
				bidSec = document.createElement("div"),
				bid = document.createElement("p"),
				ETH = document.createElement("p"),
				price = document.createElement("p"),
				counterCont = document.createElement("div"),
				endsIn = document.createElement("p"),
				counterP = document.createElement("p"),
				counterDeadLine = document.createElement("p"),
				link = document.createElement("a");
			// console.log(ele);
			name.innerText = ele.title;
			link.href = ele.detaials;
			userNameImg.src = ele.artistPic;
			userNameDes.innerText = ele.artistName;
			userName.innerText = ele.artistAccount;
			mainImg.src = ele.image;
			bid.innerText = "current Bid :";
			ETH.innerText = ele.bid + " ETH";
			endsIn.innerText = "Ends in :";
			link.innerText = "Explore Item details";
			price.innerText =
				"($" +
				ele.price
					.toString()
					.replace(/(?<!(\.\d*|^.{0}))(?=(\d{3})+(?!\d))/g, ",") +
				")";
			//  Adding Classes
			item.classList.toggle("item");
			text.classList.toggle("text");

			item.setAttribute("keyword", ele.keyWord);
			//Counter
			//counter Initalizing
			let deadLine = new Date(ele.deadLine).getTime(),
				time;
			setInterval(() => {
				let currDate = new Date().getTime(),
					rememberTime = (deadLine - currDate) / 1000,
					Days = Math.floor(rememberTime / (60 * 60 * 24)),
					Hours = Math.floor((rememberTime % (60 * 60 * 24)) / (60 * 60)),
					minuts = Math.floor((rememberTime % (60 * 60)) / 60),
					Sec = Math.floor(rememberTime % 60);
				time =
					Days < 0
						? (counterCont.innerHTML = "Time Out")
						: `${Days}D ${Hours >= 10 ? Hours : "0" + Hours}H ${minuts >= 10 ? minuts : "0" + minuts
						}M ${Sec >= 10 ? Sec : "0" + Sec}S`;
				counterP.innerText = time;
				counterCont.innerHTML == "Time Out"
					? (counterCont.style.cssText = "color:#F48989;font-size:1.2rem;")
					: "";
			}, 1000);
			counterDeadLine.innerText = ele.deadLine;
			//Pending

			counterCont.prepend(endsIn, counterP, counterDeadLine);
			bidSec.prepend(bid, ETH, price);
			secSecCont.prepend(bidSec, counterCont);
			userNameMiniCont.prepend(userNameDes, userName);
			userNameCont.prepend(userNameImg, userNameMiniCont);
			text.prepend(name, userNameCont, hr, secSecCont, link);
			item.prepend(mainImg, text);
			inMarket.prepend(item);
		});
	})
	.then(function () {
		let items = document.querySelectorAll(
			".inMarket > .maincContainer > .grid .item"
		),
			tabs = document.querySelectorAll(
				".inMarket > .maincContainer > .top ul li"
			);
		tabs.forEach((ele) => {
			ele.onclick = () => {
				tabs.forEach((ele) => ele.classList.remove("active"));
				ele.classList.add("active");
				items.forEach((item) => {
					if (ele.getAttribute("keyword") === item.getAttribute("keyword")) {
						item.classList.remove("dis");
						item.style.display = "flex";
					} else if (ele.getAttribute("keyword").split(" ").length == 3) {
						item.classList.remove("dis");
						item.style.display = "flex";
					} else {
						item.classList.add("dis");
						setTimeout(() => {
							item.style.display = "none";
						}, 500);
					}
				});
			};
		});
	});



