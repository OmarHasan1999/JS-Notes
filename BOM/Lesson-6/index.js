/**
 * BOM [ Browser Object Model ]
 * Local Storage
 * - setItem
 * - getItem
 * - removeItem
 * - clear
 * - key
 */


//setItem()

window.localStorage.setItem("color","#000000")
window.localStorage.fontWeight = "600"
window.localStorage.display = "block"
window.localStorage["fontSize"] = "20px"

// getItem()

console.log(window.localStorage.getItem("backgroundColor"))
console.log(window.localStorage.fontSize)
console.log(window.localStorage["fontFamily"])

// removeItem()

window.localStorage.removeItem("fontSize")

// clear() : remove all Item

// window.localStorage.clear()

// key()

console.log(window.localStorage.key(0))

document.body.style.background = window.localStorage.color
console.log(window.localStorage)

console.log("******************************");

/******************************************* */

/** local storage practice example*/

let lis = document.querySelectorAll("ul li")
let exp = document.querySelector(".exp")

// window.localStorage.clear()

if (window.localStorage.getItem("color")) {
    // if we have color in local storage
    // add color to exp div
    exp.style.background = window.localStorage.getItem("color")
    // remove active class from all list
    lis.forEach((ele) => {
        ele.classList.remove("active")
     });
    // add active class list to current element
    // document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")

}else{
    // if we not have color in local storage
    console.log("no");
}


lis.forEach((ele) => {
    ele.addEventListener("click",(e) => {
        // console.log(e.currentTarget.dataset.color);
        // exp.style.backgroundColor = ele.dataset.color

        // remove active class from all list
        lis.forEach((ele) => {
           ele.classList.remove("active")
        })
        // add active class to current element
        e.currentTarget.classList.add("active")
        // add current color to local storage
        window.localStorage.setItem("color",e.currentTarget.dataset.color)
        // change div backgroundColor
        exp.style.background = e.currentTarget.dataset.color
    })
    
})

/********************************************* */
