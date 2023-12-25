/** LESSON 1
 DOM [Events Simulation]
 - click
 - focus
 - blur
 */

inputOne = document.querySelector(".one")
inputTwo = document.querySelector(".two")
inputThree = document.querySelector(".sub")
google = document.querySelector(".google")

window.onload = () => {
    inputOne.focus();
}
inputTwo.onblur = () => {
    google.click();
}

/**EXAMPLE */

let post = document.getElementById("post")
let post1 = document.getElementById("post-1")
let post2 = document.getElementById("post-2")
let post3 = document.getElementById("post-3")

post.style.width = "50px"
post.style.height = "50px"
post1.style.width = "50px"
post1.style.height = "50px"
post2.style.width = "50px"
post2.style.height = "50px"
post3.style.width = "50px"
post3.style.height = "50px"
post.style.textAlign = "center"
post1.style.textAlign = "center"
post2.style.textAlign = "center"
post3.style.textAlign = "center"


post.addEventListener("input",() => {
    if(post.value.length === 1){
        post.blur();
        post1.focus();
    }
})
post1.addEventListener("input",() => {
    if(post1.value.length === 1){
        post1.blur();
        post2.focus()
    }
})
post2.addEventListener("input",() => {
    if(post2.value.length === 1){
        post2.blur();
        post3.focus()
    }
})
post3.addEventListener("input",() => {
    if(post3.value.length === 1){
        post3.blur();
        console.log("Your Data is valid")
    }
})

console.log("==================================")

/******************************************************* */
/******************************************************* */

/** LESSON 2
 DOM [Class List] 
 - classList
 ---- length
 ---- contains
 ---- item
 ---- add
 ---- remove
 ---- toggle
 */

let myDiv = document.getElementById("myDiv")

console.log(myDiv.classList)
let element = document.createElement("h3");
let text = document.createTextNode(myDiv.classList);
element.appendChild(text)
document.body.appendChild(element);

let hr = document.createElement("hr");
let br = document.createElement("br");
document.body.appendChild(hr)
document.body.appendChild(br)

console.log(myDiv.classList.length)
console.log(myDiv.classList.contains("name"))
console.log(myDiv.classList.contains("test"))
console.log(myDiv.classList.item(2))

myDiv.onclick = () => {
    myDiv.classList.add("Hero")
    myDiv.classList.remove("test")
    myDiv.classList.toggle("name")
}

console.log("**************************************")

/****************************************************** */
/****************************************************** */
/****************************************************** */

/**LESSON 3
  DOM [CSS]
  - Style
  - cssText
  - removeProperty(PropertyName)[Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
 */

let cssElement = document.querySelector(".my-div")

cssElement.style.color = "blue"
cssElement.style.fontFamily = "'Courier New', Courier, monospace"

cssElement.style.cssText = "font-weight:400;text-align:center;color:pink"

cssElement.style.removeProperty("color")
cssElement.style.setProperty("background-color","orange")
cssElement.style.setProperty("margin","-10px")

document.styleSheets[0].cssRules[0].style.removeProperty("line-height")
document.styleSheets[0].cssRules[0].style.setProperty("padding","20px")

console.log("*********************************************")

/************************************************* */
/************************************************* */
/************************************************* */

/** LESSON 4
 DOM [DEAL With Elements]
 - before [Element || String]
 - after [Element || String]
 - prepend [Element || String]
 - append [Element || String]
 - remove
 */

let append = document.querySelector(".append")
let metin = document.createElement("h4")
let p = document.createTextNode("new Heading")

metin.appendChild(p)
append.appendChild(metin)

append.before("Start with new Lang")
append.after("New Lock")
append.append("HTML CSS")
append.prepend("Python JS ")
append.remove()

/******************************************** */
/******************************************** */

/**
 * LESSON 5
 * DOM [Traversing]
 * -- nextSibling
 * -- nextElementSibling
 * -- previousSibling
 * -- previousElementSibling
 * -- parentElement
 */

let three = document.querySelector(".THR")

console.log(three.nextSibling)
console.log(three.nextElementSibling)
console.log(three.previousSibling)
console.log(three.previousElementSibling)
console.log(three.parentElement)

three.onclick = () => {
    three.parentElement.style.backgroundColor = "blue"
}

console.log("***************************************");

/***************************************** */
/***************************************** */
/***************************************** */

/**
 * LESSON 6
 * DOM [Cloning]
 * -- cloneNode(Deep)(true || false)
 */

let myP = document.querySelector(".your-p").cloneNode(true)
let clone = document.querySelector(".clone")

clone.appendChild(myP);
myP.id = "new-p";


/*************************************** */
/*************************************** */

/**
 * DOM [Event Listener]
 * -- addEventListener
 * -- Use Without On
 * -- attach Multiple Events
 * -- Error Test
 * Note : In order to create an event on an element that 
 *        has not been created on the web page ,
 *        we must use document.addEventListener
 */

let myPar = document.querySelector(".listener");

myPar.onclick = () => {
    let newPar = myPar.cloneNode(true)
    newPar.style.color = "red"
    document.body.appendChild(newPar)
}

document.addEventListener("click",(e) => {
     if(e.target.style.color === "red"){
        console.log("I am Cloned Element")
     }
})

console.log("***************************************")

/********************************* */
/********************************* */
/********************************* */
/********************************* */
/**Change EXAMPLE */

let header = document.createElement("header")
let elzero = document.createElement("h2")
let elzeroText = document.createTextNode("Elzero");
let divHeader = document.createElement("div")
let linkHeader = document.createTextNode("Home About Service Contact")
let footer = document.createElement("footer")
let footerPar = document.createElement("p")
let footerText = document.createTextNode("Copyright 2021")

let mainDiv = document.createElement("div")
let one = document.createElement("div")
let two = document.createElement("div")
let three1 = document.createElement("div")
let four = document.createElement("div")
let five = document.createElement("div")
let six = document.createElement("div")
let seven = document.createElement("div")
let eight = document.createElement("div")
let nine = document.createElement("div")
let ten = document.createElement("div")
let eleven = document.createElement("div")
let twelve = document.createElement("div")
let thirty = document.createElement("div")
let forty = document.createElement("div")
let fifty = document.createElement("div")

let oneText = document.createTextNode("1")
let twoText = document.createTextNode("2")
let threeText = document.createTextNode("3")
let fourText = document.createTextNode("4")
let fiveText = document.createTextNode("5")
let sixText = document.createTextNode("6")
let sevenText = document.createTextNode("7")
let eightText = document.createTextNode("8")
let nineText = document.createTextNode("9")
let tenText = document.createTextNode("10")
let elevenText = document.createTextNode("11")
let twelveText = document.createTextNode("12")
let thirtyText = document.createTextNode("13")
let fortyText = document.createTextNode("14")
let fiftyText = document.createTextNode("15")

one.appendChild(oneText)
two.appendChild(twoText)
three1.appendChild(threeText)
four.appendChild(fourText)
five.appendChild(fiveText)
six.appendChild(sixText)
seven.appendChild(sevenText)
eight.appendChild(eightText)
nine.appendChild(nineText)
ten.appendChild(tenText)
eleven.appendChild(elevenText)
twelve.appendChild(twelveText)
thirty.appendChild(thirtyText)
forty.appendChild(fortyText)
fifty.appendChild(fiftyText)
mainDiv.appendChild(one)
mainDiv.appendChild(two)
mainDiv.appendChild(three1)
mainDiv.appendChild(four)
mainDiv.appendChild(five)
mainDiv.appendChild(six)
mainDiv.appendChild(seven)
mainDiv.appendChild(eight)
mainDiv.appendChild(nine)
mainDiv.appendChild(ten)
mainDiv.appendChild(eleven)
mainDiv.appendChild(twelve)
mainDiv.appendChild(thirty)
mainDiv.appendChild(forty)
mainDiv.appendChild(fifty)

footerPar.appendChild(footerText)
footer.appendChild(footerPar)
divHeader.appendChild(linkHeader)
elzero.appendChild(elzeroText)
header.appendChild(divHeader)
header.appendChild(elzero)
document.body.appendChild(header)
document.body.appendChild(mainDiv)
document.body.appendChild(footer)

header.style.cssText = "width :100%; height:80px;"
elzero.style.cssText ="color:green; font-size:25px; font-weight:700;margin-top:-30px;font-family: sans-serif;margin-left:20px"
divHeader.style.cssText = "margin-left: 850px;margin-top:20px;font-family: sans-serif;font-size:20px;font-weight:600;word-spacing:20px"

mainDiv.style.cssText = "display: grid;grid-template-columns: auto auto auto;grid-gap: 15px;background-color: rgba(0, 0, 0, 0.692);padding: 10px;"
one.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
two.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
three1.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;" 
four.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
five.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
six.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
seven.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
eight.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
nine.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
ten.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
eleven.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
twelve.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
thirty.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
forty.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
fifty.style.cssText =  "background-color: rgba(255, 255, 255, 0.8); text-align: center; padding: 20px 0;font-size: 30px;"
footer.style.cssText = "width:100%;height:60px;background-color:rgb(37, 220, 37);margin-top:-20px"
footerPar.style.cssText = "text-align:center;color:white;font-size:30px;display:flex;justify-content:center;align-items:center;margin-top: 20px;padding:12px;font-weight:500"

/************************************* */
/************************************* */
/************************************* */
/************************************* */
/**EXAMPLE ONE */
let open = document.getElementsByTagName("a")[2]
console.log(open)
// window.onload = () => {
//     open.click();
// }

/***************************************** */
/***************************************** */
/**EXAMPLE TWO */
let addClasses = document.querySelector(".classes-add")
let removeClasses = document.querySelector(".classes-remove")
let showClasses = document.querySelector(".showClasses")

addClasses.addEventListener("blur", () => {
    if (addClasses.value === "" && removeClasses.value === "") {
      showClasses.textContent = "No Classes To Show !";
    }else if
        (addClasses.value !== ""){
        showClasses.textContent = addClasses.value;
        addClasses.value = ""
    }
  });

  removeClasses.addEventListener("blur", () => {
    if (addClasses.value === "" && removeClasses.value === "") {
      showClasses.textContent = "No Classes To Show !";
      removeClasses.value = ""
    }
    else if
     (removeClasses.value === showClasses.textContent) {
        showClasses.textContent = ""
        removeClasses.value = ""

    }
  });
  
/*********************************************** */
/*********************************************** */
/**EXAMPLE THREE */
let ourDiv = document.querySelector(".ourDiv")
let ourPar = document.querySelector(".ourPar");

let delPar = ourPar.remove()
document.body.appendChild(ourPar)

let ourCreate = document.createElement("div")
let ourText = document.createTextNode("Start")
ourCreate.className = "start"
ourCreate.setAttribute("title","start")
ourCreate.setAttribute("data-value","start")


ourCreate.appendChild(ourText)

ourDiv.before(ourCreate)

let afterElement = document.createElement("div")
let afterText = document.createTextNode("End")
afterElement.className = "End"
afterElement.title = "End"
afterElement.setAttribute("data-value","end")

afterElement.appendChild(afterText)

ourDiv.after(afterElement)

let break1 = document.createElement("br")

ourCreate.after(break1)

let break2 = document.createElement("br")

afterElement.before(break2)

/********************************** */
/********************************** */
/**EXAMPLE FOUR */

let x = document.querySelector(".sibl")
console.log(x.nextSibling.nextSibling.nextSibling);

console.log("***********************************************")

/** ********************************************************/

let city = document.querySelectorAll(".city")

city.forEach((element) => {
    element.onclick = () => {
        console.log("this is " + element.tagName.toLowerCase())
    }
    
});

console.log("***************************************")

/******************************************************************* */
