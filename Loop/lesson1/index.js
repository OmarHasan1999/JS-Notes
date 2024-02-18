/**
 * loop
 * -- for
 * for([1] [2] [3]){
 *   //block of code 
 * }
 */

for(let i = 0; i < 10; i++){
    console.log(i);
}


/****************************************** */

/**
 * loop
 * -- loop on sequences
 */

let friends = [1,2,"omar", "ahmed", 8, "sameh", "samer", "sara"]

let names = []

for(let i=0; i < friends.length; i++){
    if(typeof friends[i] === "string"){
        names.push(friends[i])
    }
}
console.log(names);


/****************************************** */


/**
 * loop
 * -- nested loops
 */
console.log("*********************************");

let products = ["keyboard", "mouse", "pen", "pad"]
let color = ["red", "green", "black"]
let models = [2020, 2021]

for(let i=0; i<products.length;i++){
    console.log(products[i]);
    console.log("*******************");

    for(let s=0;s < color.length;s++){
        console.log(color[s]);
    }
    console.log("********************");
    for(let j=0; j< models.length;j++){
        console.log(models[j]);
    }
}

/*********************************************** */


console.log("*********************");
/*
Loop control
-- break
-- continue
-- label
*/

let pr = ["mouse", "pen", 22, "laptop", "book", 8, "computer"]
let myPr = ["phone", "car", "bag"]
let myCo = ["red", "green"]

// for(let i=0; i<pr.length; i++){
//     if(pr[i] === "book"){
//        break
//     }
//     console.log(pr[i]);
// }
for(let i=0; i<pr.length; i++){
    if(typeof pr[i] === "number"){
      continue
    }
    console.log(pr[i]);
}
console.log("**********************");

/*********************************************** */

/** Loop for advanced example */

// let ourPr = ["laptop", "pen", "book", "computer"]

// let i = 0
// for ( ; ; ){
//     console.log(ourPr[i]);
//     i++
//     if(i === ourPr.length){
//         break
//     }
// }

/*********************************************** */

let pro = ["short", "jacket", "book", "laptop"]
let ourColor = ["red", "green", "blue"]
let proNum = 3

document.write(`<strong>the number of products is ${proNum}</strong>`)

for(let i = 0; i < pro.length; i++){
    document.write(`<div>`);
    document.write(`<h3>${pro[i]}</h3>`);
    for(let h=0; h < ourColor.length; h++){
        document.write(`<p>${ourColor[h]}</p>`)
    }
    document.write(`</div>`);
}


/*********************************************** */



