/**
  DOM
  - What Is DOM
  - DOM Selectors
  --Find Element By Class Name
  --Find Element By Tag Name
  --Find Element By ID Name
  --Find Element By CSS Selectors
  --Find Element By Collection
  -------- Title
  -------- Body
  -------- Images
  -------- Forms
  -------- Links
 */

let classElement = document.getElementsByClassName("my-span")
let tagElement = document.getElementsByTagName("p")
let IDElement = document.getElementById("my-div")
let queryElement = document.querySelector(".my-span")
let AllQuery = document.querySelectorAll(".my-span")

console.log(classElement[0])
console.log(tagElement[0])
console.log(IDElement)
console.log(queryElement)
console.log(AllQuery[1])

console.log(document.title)
console.log(document.body)
console.log(document.forms[1].two.type)
console.log(document.links[0])

console.log("========================================")

/**================================================= */
/**================================================= */

/** Lesson 1 */
/** DOM[ GET / SET Elements Content and Attributes ] 
   -- innerHTML
   -- textContent
   - Change attributes Directly
   - Change attributes with Methods
   --- getAttribute
   --- setAttribute
*/

let myElement = document.querySelector('.js')

console.log(myElement.innerHTML)
console.log(myElement.textContent)

myElement.innerHTML = "This Is <span>New Page</span>"
myElement.textContent = "This Is <span>New Page</span>"


 document.images[0].src = "https://w3school.com"
 document.images[0].title = "first IMG"
 document.images[0].id = "first"
 document.images[0].className = "IMG"

let link = document.querySelector('.link')

console.log(link.getAttribute("href"))
console.log(link.getAttribute("class"))

link.setAttribute("href","https://google.com")
link.setAttribute("class","firstLink")
link.setAttribute("color","red")

console.log("====================================");

/*===================================
/*===================================
/*===================================*/

/** Lesson 2 */
/**
   DOM [Check Attributes]
   - Element.attributes
   - Element.hasAttributes() 
   - Element.hasAttribute() 
   - Element.removeAttributes()
   - Element.getAttributes()
   - Element.setAttributes()
 */

let myPara = document.querySelector(".para")

console.log(myPara.attributes)

if(myPara.hasAttribute("data-src")){
  if(myPara.getAttribute("data-src" === "")){
        myPara.removeAttribute("class")
  }else{
        myPara.setAttribute("title","Description")
  }
}else{
   console.log("not found")
}

let newDiv = document.querySelector("#new")
if(newDiv.hasAttributes()){
    console.log("Element Has Attributes")

}else{
   console.log("Element Has Not Attributes")
}

console.log("=======================================")

/**==================================================== */
/**==================================================== */
/**==================================================== */

/***
 ** Lesson 3 **

 - DOM [ Create Elements ]
 - CreateElement
 - CreateTextNode
 - CreateAttribute
 - CreateComment
 - AppendChild
 */

let element = document.createElement("div")
let attElement = document.createAttribute("src")
let textElement = document.createTextNode("This is My New Page")
let comment = document.createComment("New Try For My Work")

element.className = "main"
element.setAttribute("text-align","center")
element.setAttributeNode(attElement)

//append text to div
element.appendChild(textElement)

//append div element to body
document.body.appendChild(element)

//append comment to body
element.appendChild(comment)

console.log(element)

let hrElement = document.createElement("hr")

document.body.appendChild(hrElement)

console.log("=================================")

/**================================== */
/**================================== */
/**DOM [Create Element] 
 * - Practice Product With Heading And Paragraph
*/
/**EXAMPLE */

for(let i = 0; i < 100; i = i+2){
let div = document.createElement("div")
let heading = document.createElement("h3")
let par = document.createElement("p")
let textHeading = document.createTextNode("This is Product Name" + " " + [i])
let textPar = document.createTextNode("This is Product Description" + " " + [i])

div.className = "product"
div.appendChild(heading)
div.appendChild(par)

heading.appendChild(textHeading)
par.appendChild(textPar)

document.body.appendChild(div);

console.log(div)
}

let hrElement2 = document.createElement("hr")

document.body.appendChild(hrElement2)

console.log("==============================================")

/***========================================= */
/***========================================= */
/***========================================= */
/***========================================= */
/**Lesson 4 */
/**
 * DOM [ DEAL With Children ]
 * - Children
 * - ChildNodes
 * - firstChild
 * - lastChild
 * - firstElementChild
 * - lastElementChild
 * 
 * Attributes => properties
 * children => Elements
 */

let yourDiv = document.querySelector(".your")

console.log(yourDiv.children)
console.log(yourDiv.children[0])
console.log(yourDiv.childNodes)
console.log(yourDiv.childNodes[1])

console.log(yourDiv.firstChild)
console.log(yourDiv.lastChild)

console.log(yourDiv.lastElementChild)
console.log(yourDiv.firstElementChild)

console.log(yourDiv)

console.log("===================================")
console.log("===================================")
console.log("===================================")
console.log("===================================")

/**====================================== */
/**====================================== */
/**====================================== */

/**Lesson 5 */
/**
   DOM [EVENTS]
   -- Use Events on HTML
   -- Use Events on JS
   ---onclick
   ---onmouseenter
   ---oncontextmenu
   ---onmouseleave

   ---onload
   ---onscroll
   ---onresize

   ---onfocus
   ---onblur
   ---onsubmit

 */

let btn = document.getElementById("btn");

btn.onmouseenter = () => {
console.log("He Is Found")   
}

window.onscroll = () => {
   console.log("Its Scroll")
}
window.onresize = () => {
   console.log("Its Scroll")
}

let input = document.getElementById("try")

input.onblur = () => {
   alert("The Name Be Should 5 Characters")
}

let sub = document.getElementById('sub')

sub.onclick = () => {
   alert("Your Data is Not Valid")
}

console.log("===================================")
console.log("===================================")

/******************************************** */
/******************************************** */
/******************************************** */

/**Lesson 6 */
/**
 * DOM [EVENTS]
 * Validate Form Practice
 * Prevent Default()
 */

let yourLink = document.querySelector(".school")

yourLink.onclick = function(e) {
   e.preventDefault();
   
}


let myName = document.getElementById("myName")
let myAge = document.getElementById("myAge")
let newForm = document.getElementById("newForm")

newForm.onsubmit = function(e){
   if(myName.value === "" || myAge.value === ""){
         e.preventDefault();
   }else if (myName.value.length > 5 || myAge.value.length > 2) {
         e.preventDefault();
   } else {
      alert("Your Message is Accessed")
   }
   
}

console.log("===================================")
console.log("===================================")

// newForm.onsubmit = function (event) {

//     let userValid = false
//     let ageValid = false

//      if(myName.value !== "" && myName.value.length <= 5){
//            userValid = true
//      }
//      if(myAge.value !== ""){
//             ageValid = true
//      }

//     if(userValid === false || ageValid === false){
//        event.preventDefault()
//     }

// }

/************************************** */
/************************************** */
/************************************** */
/************************************** */

/**EXAMPLES */

let element1 = document.getElementById("elzero")
let element2 = document.querySelector(".element")
let element3 = document.querySelector("#elzero")
let element4 = document.querySelectorAll(".element")[0]
let element5 = document.querySelectorAll("#elzero")[0]
let element6 = document.getElementsByTagName("h4")[0]

console.log(element1)
console.log(element2)
console.log(element3)
console.log(element4)
console.log(element5)
console.log(element6)

console.log("===================================")
console.log("===================================")

/*************************************** */

let youImg = document.querySelectorAll("img")

for(let i = 0; i < youImg.length ; i++){
   youImg[i].setAttribute("src","color");
   youImg[i].setAttribute("alt","elzero");
}

console.log(youImg)

console.log("===================================")
console.log("===================================")

/******************************************* */

let dollar = document.getElementsByTagName("input")[7]
console.log(dollar)

let result = document.querySelector(".result")
console.log(result)

//result.textContent = "this is the result"

dollar.addEventListener("input",() => {
   if(dollar.value !== ""){
    result.textContent = `${dollar.value} USD Dollar = ${dollar.value * 15.6} Egyptian Pound`
 }else{
    result.textContent = ""
 }
   
})

console.log("===================================")
console.log("===================================")

/*********************************** */
/*********************************** */

let adim = document.querySelector(".first")
let soyadim = document.querySelector(".second")
let gönder = document.querySelector(".gönder")
let adin = document.querySelector(".adin")

console.log(adim)
console.log(soyadim)
console.log(gönder)
console.log(adin)

gönder.onclick = () => {
   adin.value = "            " + adim.value + " " + soyadim.value;
}

console.log("===================================")
console.log("===================================")

/*********************************************** */
/*********************************************** */

let bir = document.querySelector(".one")
let iki = document.querySelector(".two")
let metin1 = document.createTextNode("One")
let metin2 = document.createTextNode("Two 2")

bir.setAttribute("title","one")
iki.setAttribute("title","two")

 bir.textContent = ""
 iki.textContent = "";

bir.appendChild(metin1)
iki.appendChild(metin2)

console.log(bir)
console.log(iki)

console.log("===================================")
console.log("===================================")

/*************************************************** */
/*************************************************** */

let numInput = document.getElementsByTagName("input")[11]
let textInput = document.getElementsByTagName("input")[12]
let createButton = document.querySelector(".but")
let resultDiv = document.querySelector(".res")

// console.log(num)
// console.log(tex)

// but.onclick = (e) => {
//    e.preventDefault();
//  res.innerHTML = tex.value;
 
//    if(num.value >= 2 && num.value < 100){
//          res.textContent = tex.value.repeat(num.value)
//    }else{
//       res.innerHTML = tex.value
//    }
//    console.log(res)
// }

// createButton.onclick = (e) => {
//    e.preventDefault();
//    let numValue = numInput.value;
//    let textValue = textInput.value;
//    let resultHTML = "";

//    if (!isNaN(numValue)) {
//       numValue = parseInt(numValue);
//       if (numValue >= 1) {
//          for (let i = 1; i <= numValue; i++) {
//             let divElement = document.createElement("div");
//             divElement.className = "box";
//             divElement.title = "Element";
//             divElement.id = "id-" + i;
//             divElement.textContent = textValue;
//             resultHTML += divElement.outerHTML;
//          }
//       } else {
//          resultHTML = "Number should be at least 1";
//       }
//    } else {
//       resultHTML = "Invalid Input";
//    }

//    resultDiv.innerHTML = resultHTML;
//    console.log(resultDiv)
// }

createButton.onclick = (e) => {
    e.preventDefault();
    let resultHTML = ""

    if(numInput.value >= 1){
      for(let i = 1; i <= numInput.value; i++){
         let myDiv = document.createElement("div")
         myDiv.className = "new"
         myDiv.title = "HTML"
         myDiv.textContent = textInput.value
         resultHTML += myDiv.outerHTML

      }
    }else{
      console.log("Your data is not invalid")
    }
    resultDiv.innerHTML = resultHTML;
    console.log(resultDiv)

}

numInput.onfocus = () => {
   numInput.value = 0
   resultDiv.innerHTML = ""
   console.log(resultDiv)
}

/************************************************* */
/************************************************* */
/************************************************* */