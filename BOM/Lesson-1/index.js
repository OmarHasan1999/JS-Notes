/**
    BOM [Browser Object Model]
   -- Introduction
   --- window object is the browser window
   --- window contain the Document object
   --- All global variables and functions and objects are members of Window Object
   --------Test document and console
   -- What can we do with Window Object ?
   ----- Open window
   ----- Close window
   ----- Move window
   ----- Resize window
   ----- Print window
   ----- Run code after period of time once or more
   ----- Fully control the URL
   ----- Save data inside browser to use later
 */

/********************************* */

/**
 * -- alert(Message) => Need No response only ok available
 * -- confirm(Message) => Need response and return Boolean
 * -- prompt(Message,Default Message) => collect data
 */

/********************************* */


// alert("are you Programmer?")
// console.log("maybe")

/********************************* */

// let myConfirm = confirm("are you player")
// if(myConfirm === true){
//    console.log("next")
// }else{
//     console.log("Failed");
// }

/********************************* */

// let myMsg = prompt("how old are you ?","my name is omar")
// console.log(myMsg)

let myAge;
let myPrompt = prompt("how old are you?")
if(myPrompt !== "" && myPrompt !== null){
    myAge = Number(myPrompt)
    console.log("your age is : " + myAge)
}else{
    console.log("your data is not correct")
}

/*************************************************** */