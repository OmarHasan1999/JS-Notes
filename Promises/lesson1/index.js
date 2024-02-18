/**
 * to understand ajax
 * 
 * pyramid of doom || callback hell
 * 
 * - what is callback
 * - callback hell example
 * 
 * what is callback?
 * - a function that is passed into another one as an argument to be executed later
 * - function to handle photos
 * --- [1] download photo from url
 * --- [2] resize photo
 * --- [3] add logo to the photo
 * --- [4] show the photo in website
 */

function beRed(e){
    e.target.style.color = "red"
}

let p = document.querySelector(".p")
p.addEventListener("click",beRed)

// function callback() {
//     console.log("this is call back");
// }
// setTimeout(callback, 3000);

// setTimeout(() => {
//     console.log("download photo from url");
//     setTimeout(() => {
//         console.log("resize photo");
//         setTimeout(() => {
//             console.log("add logo to the photo");
//             setTimeout(() => {
//                 console.log("show the photo in website");
//             }, 5000);
//         }, 3000);
//     }, 2000);
// }, 1000);


/********************************************* */

/**
 * promise intro and syntax :
 * - promise in js is like promise in real life
 * - promise is some that will happen in the future
 * - promise avoid callback hell 
 * - promise is the object that represent the status of an asynchronous operation and its resulting value
 * 
 * promise status :
 * -- pending : initial state
 * -- fullFilled : completed successfully
 * -- rejected : failed
 * 
 * then :
 * -- takes 2 optional arguments [callback for success or failure]
 * 
 */

let myPromise = new Promise((resolveFun, rejectFun) => {
    let connect = false
    if(connect){
        console.log("connect is work");
    }else{
        console.log(Error("connect failed"));
    }
}).then(
(resolveValue) => console.log(`good ${resolveValue}`),
(rejectValue) => console.log(`bad ${rejectValue}`)
);

console.log(myPromise);


/******************************************************** */


/**
 * promise training
 * 
 * - we will go to the meeting, promise me that we will find the 4 employees
 * .then(we will choose two people)
 * .then(we will test them than get one of them)
 * .catch(no one came)
 * 
 * Then => promise is success use the resolved data
 * Catch => promise is failed, catch the error
 * finally => promise success or failed finally do something
 */

const promise = new Promise((resolve, reject) => {
    let employees = []
    if(employees.length === 4){
        resolve(employees)
        reject(Error("number of employees not correct"))
    }
})

promise.then(
    (resolveV) => {
        resolveV.length = 2
        return resolveV
    }
).then(
    (resolveV) => {
        resolveV.length = 1
        return resolveV
    }
).then(
    (resolveV) => {
        console.log(`the choosen employee is ${resolveV}`);
    }
)
.catch((failedReason) => console.log(failedReason))
.finally(console.log("the operation is done"))



/******************************************************** */