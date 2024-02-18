/**
 * date and time
 * date constructor
 * 
 * static methods
 * --- Date.now()
 * 
 * -- to track time you need starting point
 * -- epoch time or unix time in computer science is the number of seconds since jan 1, 1970
 * -- why 1970 [829 days to 136 years]
 */

let nowDate = new Date()

console.log(nowDate);

console.log(Date.now()); // 1000 ms = 1 second

let seconds = Date.now() / 1000  // number of second
console.log(seconds);

let min = seconds / 60 // number of minutes
console.log(min);

let hours = min / 60 // number of hours
console.log(hours);

let days = hours / 24 // number of days
console.log(days);

let years = days / 365 // number of years
console.log(years);

/**************************************************** */

/**
 * getTime() => number of milliseconds
 * getDate() => day of the month
 * getFullYear()
 * getMonth() => zero based
 * getDay() => day of the week
 * getHours()
 * getMinutes()
 * getSeconds()
 */

let theDate = new Date()
let birth = new Date("jan, 1, 1999")
let myDate = theDate - birth

console.log(myDate / 1000 / 60 / 60 / 24 / 365);

console.log(theDate);
console.log(theDate.getTime());
console.log(theDate.getDate());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());
console.log(theDate.getDay());
console.log(theDate.getHours());
console.log(theDate.getMinutes());
console.log(theDate.getSeconds());

/*********************************************** */

/**
 * setTime(milliseconds)
 * setDate() => day of the month [negative and positive]
 * setFullYear(year, month => optional [0-11], day => optional [1-31])
 * setMonth (month [0-11], day => optional [1-31]) [negative and positive]
 * setHours (Hours[0-23], min => optional[0-59], second => optional[0-59], MS => optional[0-9999])
 * setMinutes (min[0-59], sec => optional[0-59], MS => optional [0-999])
 * setSeconds(seconds => [0-59], MS => optional [0-999])
 */

let date = new Date()
console.log(date);
console.log("*".repeat(60));

// date.setTime(2000)
// console.log(date);
//  console.log("*".repeat(60));

// date.setDate(10)
// console.log(date);
//console.log("*".repeat(60));

// date.setFullYear(2020,4)
// console.log(date);
// console.log("*".repeat(60));

// date.setMonth(2)
// console.log(date);
// console.log("*".repeat(60));

/********************************************************** */


/**
 * new date(timesTamp)
 * new date(date string)
 * new date(numeric values)
 * 
 * format :
 * --"oct 25 28"
 * --"10 25 1982"
 * --"1982-10-25" => ISO international standard
 * --"1982 10"
 * --"1982"
 * --"82"
 * -- 1999, 0, 1, 3, 20, 0
 * -- 1999, 0, 1 
 * --"1982 9 25"
 * --"1999-1-1T06:10:00Z"
 * 
 * Date.parse("String") //Read date from A string
 */

console.log(Date.parse("1 1 1999"));

let date1 = new Date(0)
console.log(date1);

let date2 = new Date(915138000000)
console.log(date2);

let date3 = new Date("1 1 1999")
console.log(date3);

let date4 = new Date("1999 1 1")
console.log(date4);

let date5 = new Date("1999 1")
console.log(date5);

let date6 = new Date("99")
console.log(date6);

let date7 = new Date(1999, 0, 1, 3, 20, 0)
console.log(date7);

let date8 = new Date(1999, 0, 1)
console.log(date8);

let date9 = new Date("1999-1-1T06:10:00Z")
console.log(date9);

/******************************************* */


/**
 * track operations time
 * 
 * search : 
 * --performance.now()
 * --performance.mark()
*/

// start time
let start = new Date()
console.log(start);

//operation
for (let i = 0; i < 100000; i++) {
    document.write(`<div>${i}</div>`)
    
}

//end time
let end = new Date()
console.log(end);

// duration operator
let duration = end - start
console.log(duration);

/**************************************** */






