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
            : `${Days}D ${Hours >= 10 ? Hours : "0" + Hours}H ${
                minuts >= 10 ? minuts : "0" + minuts
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
          } else if (ele.getAttribute("keyword").split(" ").length == 3) {
            item.classList.remove("dis");
          } else {
            item.classList.add("dis");
          }
        });
      };
    });
  });
