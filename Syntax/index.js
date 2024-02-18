document.querySelector("h1").style.backgroundColor = "blue"

window.onload = () => {
document.querySelector("h1").style.backgroundColor = "black"
document.querySelector("h1").style.color = "white"

}

/**
 * out put to screen
 * - window.alert()
 * - document.write()
 * - console.log()
 */

// window.alert("this is alert")
document.write("<h3>I write in html page</h3>")
console.log("this is console page");

/******************************************************** */

/**
 * console methods
 * - log 
 * - error
 * - table
 * 
 * styling console
 * Directive %c
 */

console.log("object");
// console.error("an error")
console.table(["omar","ahmed","mohamed"])
console.log("my name %cis %comar","color:red","color:yellow")

/****************************************** */

const header = document.createElement("h1")
header.innerHTML = "Elzero"
document.body.appendChild(header).style.color= "blue"
document.body.appendChild(header).style.fontSize= "30px"
document.body.appendChild(header).style.fontWeight= "bold"
document.body.appendChild(header).style.textAlign= "center"
document.body.appendChild(header).style.fontFamily= "Arial"

/********************************** */
console.log("%celzero %cweb %cschool","color:red;font-size:40px","color:green;font-size:30px","color:blue;font-size:40px",
            );
/***************************************** */


console.groupCollapsed("group1")
console.log("message one");
console.log("message two");


console.group("child group")
console.log("message one");
console.log("message two");

console.group("grand child group")
console.log("message one");
console.log("message two");

console.groupEnd()
console.log("Hello without label...!")

console.groupCollapsed()
console.log("message one");
console.log("message two");

/*************************************** */
console.log("*******************************");
console.table(["elzero","osama","sameh","gamal","aya"])

/*************************************** */

console.log("%cIam In Console","color:red;font-size:0");
const text =document.write("Iam In Page")

