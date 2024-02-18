/**
 * promise and XHR
 */

let getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myReq = new XMLHttpRequest()
    myReq.onload = function(){
    if(this.readyState === 4 && this.status === 200){
      resolve(JSON.parse(this.responseText))
      
    }else{
        reject(Error(console.log("data not found")))
    }
}
     myReq.open("GET",apiLink)
     myReq.send()

    })
}

getData("https://api.github.com/users/elzerowebschool/repos").then((res) => {
    res.length = 10
    return res
})
.then((res) => console.log(res[0].name))
.catch((reject) => console.log(reject))


// let myReq = new XMLHttpRequest()
// myReq.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//       let jsData = JSON.parse(this.responseText)
//       for(let i=0; i < jsData.length; i++){
//         let div = document.createElement("div")
//         let repoName = document.createTextNode(jsData[i])
//         div.appendChild(repoName)
//         document.body.appendChild(div)
//       }
//     }
// }

// myReq.open("GET","https://api.github.com/users/elzerowebschool/repos")
// myReq.send()


/********************************************* */

/**
 * fetch API
 * - return a representation of the entire HTTP response
 */


fetch("https://api.github.com/users/elzerowebschool/repos")
.then((result) => {
    let myData = result.json()
    return myData
})
.then((myData) => {
    myData.length = 10
    return myData
})
.then((myData) => {
    console.log(myData[6].name);
})


/********************************************* */


/**
 * promise :
 * - All
 * - All Settled
 * - Race
 */

let firstPro = new Promise((res,rej) => {
    setTimeout(() => {
        res("its first promise")
    }, 5000);
})

let secondPro = new Promise((res,rej) => {
    setTimeout(() => {
        res("its second promise")
    }, 3000);
})

let thirdPro = new Promise((res,rej) => {
    setTimeout(() => {
        rej("its third promise")
    }, 1000);
})

// Promise.all([firstPro, secondPro, thirdPro])
// .then((resolveV) => console.log(resolveV))
// .then((rejV) => console.log(`rejected : ${rejV}`))

// Promise.allSettled([firstPro, secondPro, thirdPro])
// .then((resolveV) => console.log(resolveV))
// .then((rejV) => console.log(`rejected : ${rejV}`))

Promise.race([firstPro, secondPro, thirdPro])
.then((resolveV) => console.log(resolveV))
.then((rejV) => console.log(`rejected : ${rejV}`))




/**************************************************** */