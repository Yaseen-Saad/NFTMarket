let bid = document.querySelector(
  ".View .maincContainer .flex .text > .sub > input[type = text]"
);
let sub = document.querySelector(
  ".View .maincContainer .flex .text > .sub > input[type = submit]"
);
let form = document.forms[0];
function check() {
  if (bid.value.trim() == "1 ETH") {
    form.submit();
  } else if (!isNaN(bid.value)) {
    bid.value = bid.value + " ETH";
  }
}
form.onsubmit = (e) => {
  e.preventDefault();
  check();
};
let grid = document.querySelector("  .View .maincContainer .grid");
fetch("../../Json/Details.Json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((ele) => {
      let item = document.createElement("div"),
        img = document.createElement("img"),
        text = document.createElement("div"),
        top = document.createElement("div"),
        bottom = document.createElement("div"),
        bidCont = document.createElement("div"),
        bid = document.createElement("p"),
        bidSpan = document.createElement("span"),
        date = document.createElement("p"),
        name = document.createElement("p"),
        userName = document.createElement("p");
      name.innerHTML = ele.name;
      userName.innerHTML = ele.acount;
      date.innerHTML = ele.date;
      img.src = ele.image;
      bid.innerHTML = "Bid :";
      bidSpan.innerHTML = ele.bid;
      bidCont.prepend(bid, bidSpan);
      top.prepend(name, userName);
      bottom.prepend(bidCont, date);
      text.prepend(top, bottom);
      item.prepend(img, text);
      grid.prepend(item);
    });
  });
/*<div class="item">
  <img src="" alt="">
  <div class="text">
      <div class="top">
          <p></p>
          <p></p>
      </div>
      <div class="bottom">
          <p><span></span></p>
          <p></p>
      </div>
  </div>
  </div>*/
