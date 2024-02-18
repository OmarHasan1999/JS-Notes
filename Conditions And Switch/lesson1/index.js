/**
 * comparison operators :
 * 
 * == equal
 * != not equal
 * 
 * === identical
 * !== not identical
 * 
 * > larger than
 * >= larger than or equal
 * 
 * < smaller than 
 * <= smaller than or equal
 */

console.log(10 == "10"); // compare value
console.log(10 != "10"); // compare value

console.log(10 === "10"); //compare value + type
console.log(10 !== "10"); //compare value + type

console.log(12 <= 12);
console.log(20 >= 10);

console.log(typeof 10 === typeof 12);

/************************************************ */

/**
 * Logical operators
 * ! not
 * && and
 * || or
 */
console.log("******************");
console.log(true);
console.log(!true);
console.log(!(10 == "10"));

console.log(10 == "10" && 10 < 20 && 12 < 20);
console.log(10 == "10" || 10 > 20 || 12 > 20);