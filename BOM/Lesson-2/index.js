/**
 * -- setTimeOut(function, timeOut, additional Params)
 * -- clearTimeOut(Identifier)
 */

/***************************** */

// setTimeout((play,years) => {
//     console.log(`my name is ahmed and I have ${play} since ${years}`)
// },4000,"football",23)

// const time = (name,age) => {
//     console.log(`My Name is ${name} and My Age ${age}`)
// }

// setTimeout(time, 3000,"omar hasan",24);

/********************************** */

let time = () => {
    console.log("How old are you")
}
let setting = setTimeout(time,3000)

const clear = document.querySelector(".clear")

clear.onclick = () => {
    clearTimeout(setting)
}

/***************************************** */
/***************************************** */

/**
 * -- setInterval(function, timeOut, Params)
 * -- clearInterval(Identifier)
 */

// setInterval(() => {
//     console.log("where my home")
// },5000)

// let Interval = () => {
//     console.log("I am here")
// }
// setInterval(Interval,5000)

// const interval = (country,age) => {
//     console.log(`I live in ${country} my age is ${age}`)
// }

// setInterval(interval,5000,"Syria",24)

/***************************** */

let five = document.querySelector(".five")
let down = () => {
    five.innerHTML -= 1
    if(five.innerHTML === "0"){
        clearInterval(counter)
    }
}

let counter = setInterval(down,2000)


/************************************** */

