
/**Example One */

// let myMsg = prompt("Print Number From – To","Example: 5-20")

// let parts = myMsg.split("-")

// if(parts.length === 2){
//      let start = parseInt(parts[0])
//      let end = parseInt(parts[1])

//      if(!isNaN(start) && !isNaN(end)){
//            for(let i = start; i <= end; i++){
//             console.log(i)
//            }
//      }else{
//         console.log("your data is not correct")
//      }
// }else{
//     console.log("your data is not correct")
// }


/************************* */
/************************* */
/************************* */

/**Example Two */

let tus = document.querySelector(".tus")
let box = document.querySelector(".box")

tus.onclick = () => {
     box.style.display = "none"
}

setTimeout(() => {
    box.style.display = "block"
},5000)

/******************************** */

/**Example Three */

let count = document.querySelector(".count")

let countOff = setInterval(() => {
    count.innerHTML -= 1
    if(count.innerHTML === "0"){
        clearInterval(countOff)
    }
},2000)

/********************************************* */

/**Example Three */

let count2 = document.querySelector(".count2")

let countOff2 = setInterval(() => {
    count2.innerHTML -= 1
    if(count2.innerHTML === "0"){
        location.href = "https://Elzero.org"
    }
},2000)

/************************************************ */

let newCount = document.querySelector(".newCount")

let open = setInterval(() => {
    newCount.innerHTML -= 1;
    if(newCount.innerHTML === "5"){
         window.open("https://Elzero.org","_target","width=300,height=200,top=400,left=525")

    }else if(newCount.innerHTML === "0"){
        clearInterval(open)
    }
},2000)