/**
 * to understand ajax, promises, fetch
 * 
 * asynchronous, synchronous programming
 * 
 * Synchronous :
 * -- operations runs in sequence
 * -- each operation must wait for the previous one to complete
 * 
 * Asynchronous :
 * -- operations runs in parallel
 * -- this means that an operation can occur while another one is still being processed
 * 
 */

// //Synchronous 

// console.log("1");
// console.log("2");
// window.alert("new page");
// console.log("3");

//Asynchronous 

// console.log("1");
// console.log("2");
// setTimeout(() => {
//     console.log("object");
// }, 4000);
// console.log("3");


/******************************************************* */


/**
 * to understand ajax, promises, fetch
 * 
 * call stack || stack trace
 * -- js engine uses a call stack to manage execution contexts
 * -- mechanism to make the interpreter track your calls
 * -- when function called it added to the stack
 * -- when function executed it removed from the stack 
 * -- after function is finished executed the interpreter continue from the last point
 * -- work using LIFO principle => last in first out 
 * -- code execution is synchronous
 * -- call stack detect web API methods and leave it to the browser to handle it
 */

setTimeout(() => {
    console.log("object");
}, 0);

function one() {
    console.log("one");
}

function two() {
    one()
    console.log("two");
}

function three() {
    two()
    console.log("three");
}

three()

/****************************************** */
/****************************************** */
/****************************************** */
/****************************************** */
// function one() {
//     console.log("one");
// }
/****************************************** */
// function two() {
//     one()
//     console.log("two");
// }
/****************************************** */
/****************************************** */
// function three() {
//     two()
//     console.log("three");
// }
/****************************************** */

console.log("***************");
console.log("one");
console.log("two");
console.log("three");


/******************************************** */


/**
 * to understand ajax, promises, fetch
 * 
 * event loop + callback queue
 * story 
 * -- js is a single threaded language "all operations executed in single threaded"
 * -- call stack track all calls
 * -- every function is done its poped out
 * -- when you call asynchronous function it sent to browser API
 * -- asynchronous function like settime out start its own threaded 
 * -- browser API act us a second threaded 
 * -- API finish waiting and send back the function for processing
 * -- browser API add the callback to callback queue
 * -- event loop wait for call stack to be empty
 * -- event loop get callback from callback queue and add it to call stack
 * -- callback queue follow FIFO "first in first out" rule
 */

console.log("************************");
// console.log("one");
// setTimeout(() => {
//     console.log("three");
// }, 0);
// setTimeout(() => {
//     console.log("four");
// }, 0);
// console.log("two");

setTimeout(() => {
    console.log(myVar);
}, 0);

let myVar = 100


