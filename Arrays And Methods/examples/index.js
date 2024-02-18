let zero = 0
let counter = 3
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

my.pop()
my.pop()
my.reverse()
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"]

console.log(my.slice(my.indexOf("Elham"), counter));  // ["Elham", "Mazero"]

my.push("Elzero")
console.log(my[4]);//Elzero

console.log(my[4][4] + my[4][5].toUpperCase());//rO


/***********************************************  */

console.log("*********************************");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


/***********************************************  */


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]

console.log("**************************");

/************************************************ */

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = (arrTwo.pop() + arrOne.pop() + arrOne.pop() + arrOne.pop() + arrTwo.pop() + arrTwo.pop()).split("")

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
console.log("*****************************");


/*************************************************** */


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - words.indexOf("Facebook")][0].slice(words.indexOf("Facebook")).substring(words.indexOf("Facebook")).toUpperCase());// ZERO

/*************************************************** */
console.log("*****************************");



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(needle === haystack[1]){
    console.log("the word is found");
}
if (haystack.includes(needle)) {
    console.log("the word is found");
}
if(haystack.indexOf(needle) !== -1){
    console.log("the word is found");
}
for(let i=0; i < haystack.length; i++){
    if(haystack[i] === needle){
        console.log("the word is found");
    }
}


/*************************************************** */
console.log("*****************************");


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = (arr2[arr2.indexOf("F")] + arr1[arr1.indexOf("X")] + arr2[arr2.indexOf("Y")]).toLowerCase()

console.log(allArrs); // fxy

console.log("*********************************");

/*********************************************** */





