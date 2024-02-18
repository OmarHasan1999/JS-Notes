/**
 * Regular Expression
 * -- Syntax : 
 * -- /pattern/modifier(s);
 * -- new regExp("pattern","modifier(s)")
 * 
 * Modifiers => flags
 * i => case-insensitive
 * g => global
 * m => Multilines
 * 
 * Method : match(pattern)
 * 
 * --match :
 * ----matches a string against a regular expression pattern
 * ----returns an array with the matches
 * ----returns null is no match is found
 */

let str = "Hello Elzero web school I Love elzero"

let reg = /love/ig

console.log(str.match(reg));

/************************************************************** */

/**
 * regular expression 
 * Ranges
 * 
 * -- part 1
 * (x|y) => x or y
 * [0-9] => 0 to 9
 * [^0-9] => any character not 0 to 9
 * 
 * -- part 2
 * [a-z]
 * [^a-z]
 * [A-Z]
 * [^A-Z]
 * [abc]
 * [^abc]
 */

let tl = "Com Net Org Info Code Io"

let re = /(io|info|org)/ig
console.log(tl.match(re));

let nums = "12345678910"

let regNum = /[0-4]/g
console.log(nums.match(regNum));

let notNum = "12345678910"

let notReg = /[^0-6]/g
console.log(notNum.match(notReg));

let char = "12$34#56@78&910"

let charNum = /[^0-9]/g
console.log(char.match(charNum));

let pr = "Os1 Os1Os Os2 Os8 Os8Os"

let prReg = /Os[5-9]Os/g
console.log(pr.match(prReg));

let myStr = "AaBbcdefG123!234%^&*"

let az = /[a-z]/g
let azCap = /[A-Z]/g
let notaz = /[^a-z]/g
let notazCap = /[^A-Z]/g
let letter = /[ace]/g
let allLetter = /[^a-zA-Z]/g
let sp = /[^a-zA-Z0-9]/g

console.log(myStr.match(az));
console.log(myStr.match(notaz));
console.log(myStr.match(azCap));
console.log(myStr.match(notazCap));
console.log(myStr.match(letter));
console.log(myStr.match(allLetter));
console.log(myStr.match(sp));

/************************************* */

