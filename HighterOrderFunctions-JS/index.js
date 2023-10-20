/**
  Higher Order Functions
  --> is a function that accepts functions as parameter and return function
  
  -Map ( LESSON 1 )
  --- creates a new array 
  
  -- Syntax : map(function(element, index, array) {}, thisArg)

  - element : the current element in the array
  - index : the index of the current element in the array
  - array : the current array

  Note : Map return new array 
         string ==> array ( split("") )
         array ==> string ( join("") )
* 
 * 
 * 
 */

let myNums = [1,2,3,4,5,6];

// let newArray = myNums.map( function (element,index,array) {
//     console.log(`Current Element : ${element}`)
//     console.log(`Index Element : ${index}`)
//     console.log(`Array Element : ${array}`)
//     console.log(`Array Arg : ${this}`)
//     // return element + element
// }, 10)
// console.log(newArray)


 let newArray = myNums.map( (element) =>
       element + element)

 console.log(newArray)

/** EXAMPLES */

console.log("============================")

/**
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value 
*
 */

let swap = "elZERo";

let swapArray = swap.split("").map(function(ele){
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
}).join("");

console.log(swapArray)

console.log("===========================")
/**=========================== */

let InvertedNumbers = [1, -20, 30, -7, 50];

let inv = InvertedNumbers.map((ele) => -ele
)
console.log(inv);

console.log("=============================")
/**====================================== */

// isNaN(10) => false
// isNaN("a") => true
// parseInt(10) => 10
// parseInt("a") => NaN
// isNaN(NaN) => true


//  let ignoreNumbers = "Elz123er4o";

//  let ign = ignoreNumbers.split("").map(function(ele){
//     return isNaN(parseInt(ele)) ? ele : "" ;
//  }).join("")

//  console.log(ign)

/** arrow function version */

let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers.split("").map((ele) =>
        isNaN(parseInt(ele)) ? ele : "" 
       ).join("")

       console.log(ign)

       console.log("==============================")
       /***====================================== */
       /***====================================== */
       /***====================================== */

// -Filter ( LESSON 2 )
/**
 * creates a new array 
 * with all elements that pass the test implemented by the provided function
 * Syntax : filter(function(element, index, array) {}, thisArg)
 * - element : the current element in the array
   - index : the index of the current element in the array
   - array : the current array
 * 
 */

// get friends with name starts with A
let friends = [ "ahmad", "sameh", "sayed", "asmaa", "israa" ];

let filterFriends = friends.filter( (ele,ind,arr) => ele.startsWith("a"));

console.log(filterFriends);

// get even numbers only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter( (ele) => 
       ele % 2 === 0 ? ele : ""
 )
console.log(evenNumbers);

/** EXAMPLES */
// filter words more than 4 characters
let words = " I Love Foood Code Too Playing Much "

let filterWords = words.split(" ").filter((ele) => 
       ele.length > 4 ? false : true  ).join(" ");
       console.log(filterWords)

// filter strings + multiply
let mix = "A13BS2ZX";

let filterLetter = mix.split("").filter((ele) =>
         !isNaN(parseInt(ele)))
         .map((ele) => ele * ele)
         .join("");

        console.log(filterLetter);

console.log("================================");
/** ======================== */
/** ======================== */
/** ======================== */

// -Reduced ( LESSON 3 )
/**
 * - executes  a reducer function on each element of the array
 * - resulting in a single output value
 * Syntax : reduce(function( accumulator, element, index, array ) {}, initialValue)
 * accumulator : accumulated value previously returned in the last invocation 
 * index : the index of the element in the array
 * index : - stars from index 0 if an initialValue is provided
 *         - otherWise it starts from index 1
 * 
 */

let nums = [10, 20, 15, 30];

let reduceNums = nums.reduce( function (acc,ele,index,arr){  
    console.log(`acc : ${acc}`)
    console.log(`ele : ${ele}`)
    console.log(`index : ${index}`)
    console.log(`arr : ${arr}`)
    console.log(acc + ele)
    return acc + ele}, 5);

console.log(reduceNums);

//EXAMPLES
// longest word
let biggest = [ "Bla" , "Propaganda" , "Other" , "AAA" , "Battery" , "Test" ];

let reduceBiggest = biggest.reduce((acc,ele) =>
                    acc.length < ele.length ? ele : acc );
                    console.log(reduceBiggest);

// remove characters + use reduce
let chars = ["E" , "@" , "@" , "L" , "Z" , "@" , "@" , "E" , "R" , "O"];

let filterChars = chars.filter((ele) => !ele.startsWith("@"))
                  .reduce((acc,ele) => acc + ele);
console.log(filterChars)

/***====================================== */
/***====================================== */
/***====================================== */
/***====================================== */

/** EXAMPLES FOR MAP / FILTER / REDUCE */

// remove numbers + use map / reduce

let letterNumber = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mapNumber = letterNumber.map((ele) => 
                isNaN(parseInt(ele)) ? ele : "" )
                .reduce((acc,ele) => acc + ele);
                console.log(mapNumber)

// filter repeated characters
let repeated = "EElllzzzzzzzeroo";

let repeatedFilter = repeated.split("").filter ((ele,ind,arr) =>
                       arr.indexOf(ele) == ind)
                       .reduce((acc,ele) => acc + ele);
                       console.log(repeatedFilter)

// one array from two array + use REDUCE and FLATTEN
let flatten = ["E", "l", "z", ["e", "r"], "o"];

let reduceFlatten = flatten.reduce((acc, ele) => acc.concat(ele))
console.log(reduceFlatten);

/** remove letters + use FILTER / MAP */
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let removeLetters = numsAndStrings.filter((ele) =>
                    !isNaN(parseInt(ele))).map((ele) => 
                    -ele);
                    console.log(removeLetters);

// only REDUCE can use
let redNums = [2, 12, 11, 5, 10, 1, 99];

let modifyNum = redNums.reduce((acc,ele) =>
                ele % 2 === 0 ? acc * ele : acc + ele, 1)
console.log(modifyNum);

//challenge : can use MAP / FILTER / REDUCE
//                 _ / , / space / true(one time)


 let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

 let solution = myString.split("").filter( (ele, ind, arr) =>
      isNaN(ele) && ele !== "," && ind !== arr.length - 1)
     .reduce( (acc, ele) =>
       acc === ele ? acc : acc + ele
     )
     .split("_")
     .join(" ");

 console.log(solution)

 console.log("==================================");
 /**==================================================== */
 /**==================================================== */
 /**==================================================== */

 // -forEach ( LESSON 3 )
 /**
  * method executed a provided function once for each array element
  * Syntax : forEach(function((element,index,array){}, thisArg))
  * - element : the current element in the array
    - index : the index of the current element in the array
    - array : the current array
    - notes : - doesnt return anything 
              - break will not break the loop
  */

let allList = document.querySelectorAll('ul li');
let allDivs = document.querySelectorAll('.main');

allList.forEach((ele) => ele.onclick = () => {
  //remove active class from all elements
  allList.forEach((ele) => ele.classList.remove('active'));
  //add active class to this element
  ele.classList.add('active');
  // hide all div
  allDivs.forEach((ele) => ele.style.display = "none")
} 
);
