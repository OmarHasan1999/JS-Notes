let a = 1_00
let b = 2_00.5
let c = 1e2
let d = 2.4

console.log( Math.trunc(Math.min(a, b, c, d)) );
console.log( Math.pow(a,Math.floor(d)) );//10000
console.log(Math.floor(d));//2
console.log(Math.trunc(d));//2
console.log(Math.round(d));//2
console.log(Number.parseInt(d));//2
console.log( (Math.trunc(b) - Math.pow(Math.floor(d),Math.floor(d) + Math.floor(d) + Math.ceil(d)) - d - Math.floor(d)).toString() );// 66.67 string
console.log( (Math.trunc(b) - Math.pow(Math.floor(d),Math.floor(d) + Math.floor(d) + Math.ceil(d)) - Math.floor(d) - Math.ceil(d)) );//67 number

/********************************************* */


// Your Solutions
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000console.log(); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(10 ** 5); // 100000
console.log(parseInt("100000")); // 100000
console.log(parseFloat("100000")); // 100000
console.log(Number("100000")); // 100000
console.log(parseInt(100000..toFixed(0))); // 100000
console.log(Math.trunc(100000.6)); // 100000

/********************************************* */

console.log(-Number.MIN_SAFE_INTEGER);
console.log( Number.MAX_SAFE_INTEGERto);

/********************************************* */

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

/********************************************* */


let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

/********************************************* */

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

/********************************************* */
// console.log((Math.random(0,5)));
// const rndInt = Math.floor(Math.random() * 4) + 1
//     console.log(rndInt)
console.log(Math.floor(Math.random() * 5));

/********************************************* */

let par = "Elzero Web School"
console.log(par.charAt(2).toUpperCase() + par.slice(3,6));//Zero
console.log(par.charAt(13).repeat(8).toUpperCase());//HHHHHHHH
console.log(par.slice(0,6).split());//[Elzero]
console.log(`${par.substr(0,6)}${par.substr(10)}`);//Elzero School
console.log(`${par.slice(0,1).toLowerCase()}${par.slice(1,16).toUpperCase()}${par.slice(-1)}`);//eLZERO WEB SCHOOl

/********************************************* */

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase().repeat(3)); // eee

/********************************************* */

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.includes(letterE)); // True
console.log(word.includes(letterO.toLowerCase())); // True


/********************************************* */

