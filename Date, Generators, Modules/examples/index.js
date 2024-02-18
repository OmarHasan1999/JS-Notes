let date = new Date()
let birth = new Date("jan 1 1999")
let myBirthday = date - birth

console.log(Math.round(myBirthday / 1000 / 60 / 60 / 24 / 365));

console.log(Math.round(`${myBirthday / 1000}`) + " " + "Seconds");
console.log(Math.round(`${myBirthday / 1000 / 60}`) + " " + "Minutes");
console.log(Math.round(`${myBirthday / 1000 / 60 / 60}`) + " " + "Hours" );
console.log(Math.round(`${myBirthday / 1000 / 60 / 60 / 24} `) + " " + "Days");
console.log(Math.round(`${myBirthday / 1000 / 60 / 60 / 24 / 30}`) + " " + "Months");
console.log(Math.round(`${myBirthday / 1000 / 60 / 60 / 24 / 365}`) + " " + "Years");

// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"

/*********************************************** */

let theDate = new Date()
let year = theDate.setFullYear(1980)
let second = theDate.setSeconds(1)
let minutes = theDate.setMinutes(0)
let hour = theDate.setHours(0)
let days = theDate.setDate(1)
let month = theDate.setMonth(0)

console.log(theDate);

// Needed Output

"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"


/*********************************************** */

let myDate = new Date()
let MyDays = myDate.setDate(0)
let MyDaysTwo = myDate.setDate(-1)
let myMonth = myDate.setMonth(3)
let myYear = myDate.setFullYear(2022)
let myHour = myDate.setHours(18)
let myMinutes = myDate.setMinutes(13)
let mySecond = myDate.setSeconds(20)

console.log(myDate);

// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"


/*********************************************** */

let birthDay = new Date("1 1 1999")
console.log(birthDay);

let theBirth = new Date()
let weDays = theBirth.setDate(1)
let weMonth = theBirth.setMonth(0)
let weYear = theBirth.setFullYear(1999)
let weHour = theBirth.setHours(0)
let weSec = theBirth.setSeconds(0)

console.log(theBirth);

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"


/*********************************************** */
// for(let i = 1; i < 9999; i++){
//     console.log(`Loop Took ${performance.now()} Milliseconds.`);
// }
// const t0 = performance.now()
// const t1 = performance.now()

// console.log(`Loop Took ${t0-t1} Milliseconds.`);
// Needed Output

"Loop Took 1921 Milliseconds."


/*********************************************** */


function* gen(){
    yield 14,
    yield 154,
    yield 494,
    yield 1034,
    yield 1774
}

let generator = gen();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


/*********************************************** */

function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5] ;
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  // Write Your Generator Function Here
  function* genAll(){
    yield* genNumbers()
    yield* genLetters()
  }
  
  let myGenerator = genAll();
  
  console.log(myGenerator.next()); // {value: 1, done: false}
  console.log(myGenerator.next()); // {value: 2, done: false}
  console.log(myGenerator.next()); // {value: 2, done: false}
  console.log(myGenerator.next()); // {value: 3, done: false}
  console.log(myGenerator.next()); // {value: 4, done: false}
  console.log(myGenerator.next()); // {value: 5, done: false}
  console.log(myGenerator.next()); // {value: "A", done: false}
  console.log(myGenerator.next()); // {value: "B", done: false}
  console.log(myGenerator.next()); // {value: "C", done: false}
  console.log(myGenerator.next()); // {value: "D", done: false}


/******************************************** */

import calc from "./mainOne.js"
console.log(calc());

/******************************************** */




