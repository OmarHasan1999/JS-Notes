console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 !== +"-40"); // true
console.log(! 10 !== -"-40"); // true
console.log(! "10" !== 10); // true
console.log(! 20 == false); // true


/********************************************* */

console.log("*******************");

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(!(num1 =! num2)); // true
console.log((num1 !== num2)); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true


/********************************************* */


let a = 10

a < 10 ? console.log(10) 
: a >= 10 && a <= 10 ? console.log("10 to 40")
: a > 40 ? console.log(" > 40")
: console.log("unknown");


/********************************************* */

let set = "Elzero Web School"

if(set.indexOf("e") + "" + set.indexOf("r") === "34"){
    console.log("Good");
}
if(set[7].toLowerCase() === "w"){
    console.log("Good");
}
if(! typeof set !== "string"){
    console.log("Good");
}
if((typeof parseInt(set)) === "number"){
    console.log("Good");
}
if(set.slice(0,6).repeat(2) === "ElzeroElzero"){
    console.log("Good");
}


/********************************************* */


// Test Case 1
let numOne = 9; // "009"
if(numOne < 10){
console.log("00" + numOne);
}

// Test Case 2
let numTwo = 20; // "020"
if(numTwo > 10 && numTwo < 100){
console.log("0" + numTwo);
}

// Test Case 3
let numThree = 110; // "110"
if(numThree >= 100){
console.log(numThree);
}


/***************************************** */

let firstNum = 9;
let str = "9";
let str2 = "20";

if(firstNum == str){
console.log("{num1} Is The Same Value As {str}");
}
if(firstNum !== str){
console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if(firstNum !== str2){
console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if(str !== str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"



/***************************************************** */
console.log("****************************");

let thenum1 = 10;
let thenum2 = 30;
let thenum3 = "30";

if(thenum3 > thenum1 && typeof thenum1 !== thenum2 && 
    thenum3 == thenum2 && typeof thenum3 !== typeof thenu2
    && thenum3 !== thenum1 && typeof thenum3 !== typeof thenum2){
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

/****************************************************** */



// Edit What You Want Here

let theNumOne = 15;
let theNumTwo = 10;
let theNumThree = 15;
let theNumFour = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (theNumOne > theNumTwo) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (theNumOne > theNumTwo && theNumOne < theNumFour) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 3

if (theNumOne > theNumTwo && theNumOne === theNumThree) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((theNumOne + theNumTwo) < theNumFour) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 5

if (theNumOne + theNumThree < theNumFour) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 6

if ((theNumOne + theNumTwo + theNumThree) < theNumFour) {
  console.log("True");
} else {
  console.log("False");
}

// // Condition 7

if (theNumFour - (theNumOne + theNumThree) + theNumTwo === 21) {
  console.log("true");
} else {
  console.log("False");
}


/**************************************************** */

console.log("******************************");

let job = "manager"
let sal = 0
console.log(sal)

switch (job) {
  case "manager":
    sal = 8000
    console.log(sal)
    break;
  case "IT":
    case "support":
    sal = 6000
    console.log(sal)
      break;
  case "developer":
    case "designer":
    sal = 7000
    console.log(sal)
        break;
  default:
    sal = 4000
    console.log(sal)
}


/******************************** */

console.log("***********************");

let holidays = 0
let money = 0

if(holidays == 0){
 money = 5000
 console.log(`my money is ${money}`);
}
else if(holidays == 1 || holidays == 2){
 money = 3000
 console.log(`my money is ${money}`);
}
else if(holidays == 3){
  money = 2000
  console.log(`my money is ${money}`);
 }
 else if(holidays == 4){
  money = 1000
  console.log(`my money is ${money}`);
 }
 else if(holidays == 5){
  money = 0
  console.log(`my money is ${money}`);
 }
else{
  money = 0
  console.log(`my money is ${money}`);
}

/********************************** */

console.log("//////////////////////////////");

let day = "  friday  "
let newDay = day.trim()
console.log( newDay[0].toUpperCase() + newDay.slice(1,6));

let myDay = newDay[0].toUpperCase() + newDay.slice(1,6)
console.log(myDay);

switch (myDay) {
  case "Friday":
  case "Saturday":
    case "Sunday":
    console.log("No Appointments Available");
    break;

  case "monday":
    case "thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break;

    case "tuesday":
      console.log("From 10:00 AM To 6:00 PM");
      break;

    case "wednesday":
      console.log("From 10:00 AM To 7:00 PM");
      break;

    case "world":
        console.log("Its Not A Valid Day");
        break;
}



/********************************************* */

