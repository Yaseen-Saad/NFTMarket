//Declaring Elements
let main_cont = document.querySelector(".createYourNFT"),
  gridTable = document.createElement("div"),
  title = document.createElement("h2"),
  link = document.createElement("a"),
  textCont1 = document.createElement("div"),
  img1 = document.createElement("img"),
  textTile1 = document.createElement("p"),
  desc1 = document.createElement("p"),
  textCont2 = document.createElement("div"),
  img2 = document.createElement("img"),
  textTile2 = document.createElement("p"),
  desc2 = document.createElement("p"),
  textCont3 = document.createElement("div"),
  img3 = document.createElement("img"),
  textTile3 = document.createElement("p"),
  desc3 = document.createElement("p");
//Adding Text
title.innerText = "Create Your NFT & Put It On The Market.";
link.innerText = "Create Your NFT Now";
img1.src = "images/icon-02.png";
textTile1.innerText = "Set Up Your Wallet";
desc1.innerText =
  "NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.";
//=======================//
img2.src = "images/icon-02.png";
textTile2.innerText = "Add Your Digital NFT";
desc2.innerText =
  "There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required.  ";
//=======================//
img3.src = "images/icon-02.png";
textTile3.innerText = "Sell Your NFT & Make Profit";
desc3.innerText =
  "If you would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you.";
//Pending Elements
textCont1.append(img1);
textCont1.append(textTile1);
textCont1.append(desc1);
//=======================//
textCont2.append(img2);
textCont2.append(textTile2);
textCont2.append(desc2);
//=======================//
textCont3.append(img3);
textCont3.append(textTile3);
textCont3.append(desc3);
//=======================//
gridTable.append(textCont1);
gridTable.append(textCont2);
gridTable.append(textCont3);
//======================//
main_cont.append(title);
main_cont.append(link);
main_cont.append(gridTable);
