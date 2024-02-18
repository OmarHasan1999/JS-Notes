/**
 * function
 * -- what is function ?
 * -- user- defined vs built in
 * -- syntax + basic usage
 * -- example from real life
 * -- parameter vs argument
 * -- practical example
 */

function yourName(name){
    console.log(`hello ${name}`);
}
yourName("omar");
yourName("ammar");

/********************************* */

/**
 * function advanced example
 */
console.log("******************");

function per(userName, age){
    if(age < 20){
        console.log(`your age is lastest 20 ms ${userName}`);
    }
    else{
        console.log(`your age more 20 ms ${userName}`);
    }
}

per("salem", 18)
per("khaled", 22)
per("omar", 25)
console.log("*********************");

function years(start, end, notInclude){
    
    for(let i=start; i < end; i++){
        if(i === notInclude){
            continue;
        }
        console.log(i);
    }
}

years(1982, 2024, 2020)
console.log("**************************");

/***************************************** */


/**
 * function
 * -- return
 * -- automatic semicolon insertion [no line terminator allowed]
 */

function range(start, end){
    for(let i =start; i<=end;i++){
        if(i === 15){
            return `Interruptting`
        }
        console.log(i);
    }
}
range(10,16)


/***************************************** */


/**
 * function
 * - default function parameters
 * - function parameters default [undefined]
 * - old strategies [condition + logical or]
 * - ES6 method
 */

function you(userName= "unknown",age="unknown"){
    return `your name ${userName} your age is ${age}`
}

console.log(you());
console.log("******************************");


/********************************************* */

/**
 * function
 * - rest parameters 
 * - only one allowed
 * - must be last element
 */

// let x = ["one", "two"]
// let y = [...x]
// console.log(y);
// console.log(Array.isArray(y));

let result = 0
function calc(...numbers){
    for(let i=0; i<numbers.length;i++){
        result += numbers[i]
    }
    return `the final calc is ${result}`
}
console.log(calc(10,30,50));


/************************************ */


/**
 * function advanced practice
 * - parameters 
 * - default 
 * - rest
 * - loop
 * - condition
 */

function info(name="un", age= "un", rate= "un", show= true, ...skills){

    document.write(`<div>`)
       document.write(`<p>your name is ${name}</p>`)
       document.write(`<p>your age is ${age}</p>`)
       document.write(`<p>your rate is ${rate}</p>`)
       if(show === false){
        document.write(`<h5>your skills is <i>${skills}</i></h5>`)
       }else{
        document.write(`<h5>you have not any skills</h5>`)
       }
    document.write(`</div>`)
}

info("omar", 25,"$300", false, "HTML","CSS","Bootstrap")

/************************************************* */
