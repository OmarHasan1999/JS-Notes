/**
 * Function
 * -- anonymous function
 * -- called naming function vs anonymous function
 * -- argument to other function
 * -- task without name
 * -- setTimeout
 */

/** anonymous function */
let calc = function(num1 , num2){
   return num1 + num2
}
console.log(calc(10,30));

let but = document.querySelector(".button")
but.onclick = function () {
    console.log("clicked");
}
// setTimeout(function() {
//     console.log("its working");
// }, 3000);

/******************************************* */

/**
 * function
 * -- function inside function
 * -- return function
 */

/*** Nested function */

/**example one */

// function sayMessage(fName, lName){
//     let message = `Hello`

//     function concatMessage(){
//         message = `${message} ${fName} ${lName}`
//     }
//     concatMessage()
//     return message
// }
// console.log(sayMessage("omar", "hasan"));

// console.log("**************");
// /**example two */

// function sayMessage(fName, lName){
//     let message = `Hello`

//     function concatMessage(){
//         return `${message} ${fName} ${lName}`
//     }
//     return concatMessage()
    
// }
// console.log(sayMessage("omar", "hasan"));

/**
 * example three
 */

console.log("**************");
/**example two */

function sayMessage(fName, lName){
    let message = `Hello`

    function concatMessage(){
        function fullName(){
            return `${fName} ${lName}`
        }
        return `${message} ${fullName()}`
    }
    return concatMessage()
    
}
console.log(sayMessage("omar", "hasan"));


/*********** ******** *************  ***************/

/**
 * function
 * -- arrow function
 * -- regular ve arrow [param + no param]
 * -- multiple lines
 */

/** arrow function */

// let print = function (numOne,numTwo){
//     return numOne * numTwo
// }
// console.log(print(7,7));

// let print = (numOne,numTwo) => {
//     return numOne * numTwo
// }
// console.log(print(7,7));

let print =  (numOne,numTwo) => numOne * numTwo
console.log(print(7,7));


/********************************************** */