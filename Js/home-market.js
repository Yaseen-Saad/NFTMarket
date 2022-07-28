// home page market navigation
// get filters list
const filtersUl = document.querySelector(".filters").children;

// current filter
let currentFilter = "all-items";

// add an eventListener to all filters
for (let filter of filtersUl) {
	filter.addEventListener("click", () => {
		// call function to change the active filter
		changeActive(filter);
	});
}

function changeActive(filter) {
	for (let filter of filtersUl) {
		// delete active class from all elements
		filter.classList.remove("active");
	}
	// add active to the current tag
	filter.classList.add("active");
	currentFilter = filter.getAttribute("data-tag");
}

// Get The Container
const contentDiv = document.getElementById("market-content");
// Get The Data
fetch("../Json/homeMarketData.JSON")
	.then((response) => response.json())
	.then((items => {
		for (const item of items) {

			// item div container and class and data tag
			const itemDiv = document.createElement("div");
			itemDiv.classList.add("item");
			itemDiv.setAttribute("data-tag", `${item.keyWord}`);
			// append item div
			contentDiv.appendChild(itemDiv);

			// nft img and class and alt
			const nftImg = document.createElement("img");
			nftImg.setAttribute("alt", "nft-img");
			nftImg.classList.add("nft-img");
			nftImg.setAttribute("src", `${item.nftImage}`);
			// append nft img
			itemDiv.appendChild(nftImg);

			// item title and class and content
			const itemH4 = document.createElement("h4");
			itemH4.classList.add("item-name");
			itemH4.textContent = item.title;
			// append item title
			itemDiv.appendChild(itemH4);

			//artist div container and class
			const artistDiv = document.createElement("div");
			artistDiv.classList.add("artist");
			// append artist div
			itemDiv.appendChild(artistDiv);

			// artist img and src and alt
			const artistImg = document.createElement("img");
			artistImg.setAttribute("alt", "artist-img");
			artistImg.setAttribute("src", `${item.artistPic}`);
			// append artist img
			artistDiv.appendChild(artistImg);

			// artist name p and class and text content
			const artistNameP = document.createElement("p");
			artistNameP.classList.add("artist-name");
			artistNameP.textContent = item.artistName;
			// append artist name
			artistDiv.appendChild(artistNameP);

			//artist user name and class and href and text content
			const artistUserNameA = document.createElement("a");
			artistUserNameA.classList.add("artist-user-name");
			artistUserNameA.setAttribute("href", `${item.artistAccountPage}`);
			artistUserNameA.textContent = item.artistAccount;
			// append user name
			artistDiv.appendChild(artistUserNameA);

			//bid section div container and class
			const bidDiv = document.createElement("div");
			bidDiv.classList.add("bid-section");
			// append bid section div
			itemDiv.appendChild(bidDiv);

			// current bid h6 and text content
			const bidH6 = document.createElement("h6");
			bidH6.textContent = "Current Bid:";
			// append bid h6
			bidDiv.appendChild(bidH6);

			// bid p and class and text content
			const bidP = document.createElement("p");
			bidP.classList.add("bid");
			bidP.textContent = `${item.bid} ETH`;
			// append bid p
			bidDiv.appendChild(bidP);

			// price p and class and text content
			const priceP = document.createElement("p");
			priceP.classList.add("price");
			priceP.textContent = `(${item.price})`;
			// append price p
			bidDiv.appendChild(priceP);

			// deadline section div and class
			const deadlineDiv = document.createElement("div");
			deadlineDiv.classList.add("deadline-section");
			// append deadline section div
			itemDiv.appendChild(deadlineDiv);

			// deadline h6 and text content
			const deadlineH6 = document.createElement("h6");
			deadlineH6.textContent = "Ends In:";
			// append deadline h6
			deadlineDiv.append(deadlineH6);

			// counter p and class and text content
			const counterP = document.createElement("p");
			counterP.classList.add("bid");
			counterP.textContent = item.deadLine;
			// append counter p
			deadlineDiv.appendChild(counterP);

			// date p and class and text content
			const dateP = document.createElement("p");
			dateP.classList.add("price");
			dateP.textContent = item.deadLine;
			// append date p
			deadlineDiv.appendChild(dateP);

			// details link a and class and href and text content
			const detailsA = document.createElement("a");
			detailsA.classList.add("details-link");
			detailsA.setAttribute("href", `${item.details}`);
			detailsA.textContent = "View Item Details";
			// append details link
			itemDiv.appendChild(detailsA);
		}
	}));
