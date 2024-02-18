/**
 * async
 * - async before function mean this function return a promise
 * - async and Adwait help in creating asynchronous promise behavior with cleaner style
 */

// function getData(){
//     return new Promise((res,rej) => {
//         let users = []
//         if(users.length > 0){
//             res("have users")
//         }else{
//             rej("not have users")
//         }
//     })
// }

// getData().then(
//     (resV) => console.log(resV),
//     (rejV) => console.log(`Rejected : ${rejV}`)
// )

// function getData(){
//     let users = ["omar"]
//     if(users.length > 0){
//         return Promise.resolve("have users")
//     }else{
//         return Promise.reject("not have users")
//     }
// }

// getData().then(
//     (resV) => console.log(resV),
//     (rejV) => console.log(`Rejected : ${rejV}`)
// )

async function getData(){
    let users = ["omar"]
    if(users.length > 0){
        return "have users"
    }else{
        throw new Error ("not have users")
    }
}

console.log(getData());

getData().then(
    (resV) => console.log(resV),
    (rejV) => console.log(`Rejected : ${rejV}`)
)


/******************************************************* */


/**
 * Await
 * - await works only inside async functions
 * - await make js wait for the promise result 
 * - await is more elegant syntax of getting promise result
 */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error("this is reject"))
    }, 3000);
})

async function readData(){
    console.log("before");
    // myPromise.then((resolveV) => console.log(resolveV))
    // console.log(await myPromise);
    console.log(await myPromise.catch((error) => error));
    console.log("after");
}

readData()


/************************************************** */



/**
 * Async, Await, try, catch, finally
 */


const thePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is resolve")
    }, 3000);
})

// async function theData(){
//     console.log("before promise");

//     try{
//         console.log(await thePromise);
//     }
//     catch(reason){
//         console.log(`the reason : ${reason}`);
//     }
//     finally{
//         console.log("after promise");
//     }

// }

// theData()


async function fetchData(){
    console.log("before Data");

    try{
        let myData = await fetch("https://api.github.com/users/elzerowebschool/repos")
        console.log(await myData.json());
    }
    catch(reason){
        console.log(`the reason : ${reason}`);
    }
    finally{
        console.log("after Data");
    }

}

fetchData()


/************************************************ */