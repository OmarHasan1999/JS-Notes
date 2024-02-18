/**
 * Destructuring
 " is a javascript expression that allows as to extract data from 
 * arrays, objects, maps and set them into new , distinct variables . "
 */

// let a = 10;
// let b = 20;
// let c = 13;
// let d = 11;

// let friends = ["waleed", "mark", "steven" , "jorj"]

// [a, b, c, d, e = "osama"] = friends;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);  // waleed, mark, steven, jorj

// let [x, y, ,z] = friends 
// console.log(x);
// console.log(y);
// console.log(z);  // waleed, mark, jorj

/********************************************************** */

/** example for destructuring arrays */

let myFriends = ["Ahmed", "sayed", "ali", ["shady", "amr", ["mohammad", "Gamal"]]];

// console.log(myFriends[3][2][1]);

let [ , , , [ a , , [ , b ] ]  ] = myFriends

console.log(a); //shady
console.log(b); //Gamal

/*************************************************** */
/** destructuring arrays => swapping variables */

let book = "animals"
let film = "history"

// let newVar = book
// // change book value
// book = film
// // change film value
// film = newVar

[book , film] = [film , book]

console.log(book);
console.log(film);  // history , animals

/************************************************ */