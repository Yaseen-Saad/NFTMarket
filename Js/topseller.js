let contSeller = document.querySelector(".seller-container")
fetch("../Json/topSellers.json")
.then((response) => response.json())
.then((data) => {
    dataLength = data.length
    dataLengths = dataLength / 4;
    if(dataLength % 4 !== 0 ){
        dataLengths = Math.ceil(dataLengths)
    }
    data.forEach(e => {
        let article = document.createElement("article")
        let h3 = document.createElement("h3")
        h3.innerHTML = e.id
        let img = document.createElement("div")
        img.style.cssText = `
        background-image:url(../images/${e.img});
        width:50px;
        height:50px;
        border-radius:50%;
        `
        let h4 = document.createElement("h4")
        h4.innerHTML = `<span>${e.name}</span>
        <span>${e.price}</span>`
        article.append(h3)
        article.append(img)
        article.append(h4)
        console.log(dataLengths)
        article.style.cssText = `
        height:${(100 - 10) / dataLengths}%;
        `
        contSeller.append(article)
    })
})