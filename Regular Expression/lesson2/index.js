/**
 * character classes
 * . => matches any character, except new line or other line terminators
 * \w => matches word characters , [ a-z, A-Z, 0-9 and underscore ]
 * \W => matches non word characters
 * \d => matches digits from 0 to 9
 * \D => matches non digit characters 
 * \s => matches white space characters
 * \S => matches non white space characters
 */

let em = "o@@@g...com o@g.com o@g.net A@Y.com O-g.com o@s.org 1@1.com"

let dot = /./g
let word = /\w/g
let valid = /\w@\w(.com|.net)/g
let dig = /\d/g
let space = /\s/g

console.log(em.match(dot));
console.log(em.match(word));
console.log(em.match(valid));
console.log(em.match(dig));
console.log(em.match(space));

/********************************** */

/**
 * character classes
 * \b => matches at the beginning or and of the word
 * \b => matches not at the beginning or and of the word
 * 
 * test method : 
 * pattern.test(input)
 */

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed ASpamo"

let spam = /(\bSpam|Spam\b)/g
console.log(names.match(spam));
console.log(spam.test(names));
console.log(/(\bSpam|Spam\b)/g.test("Sayed"));
console.log(/(\bSpam|Spam\b)/g.test("3Spam"));

/********************************************** */

/**
 * Quantifiers
 * n+ => one or more 
 * n* => zero or more 
 * n? => zero or one 
 */

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"//all emails

let reMail = /\w+@\w+.\w+/g
console.log(mails.match(reMail));

let numbers = "0110 10 150 05120 0560 350 00"// 0 numbers or no 0
let numRe = /0\d*0/g
console.log(numbers.match(numRe));

let urls = "https://google.com http://www.website.net web.com" //http + https

let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/g
console.log(urls.match(urlRe));

/******************************************* */

/**
 * Quantifiers
 * n{x} => Number of
 * n{x,y} => Range
 * n{x,} => at least x
 */

let serials = "S100S S3000S S50000S S950000S"

let numSer = /S\d{3}S/g
console.log(serials.match(numSer));

let TwoSer = /S\d{4,5}S/g
console.log(serials.match(TwoSer));

let least = /S\d{4,}S/g
console.log(serials.match(least));

/************************************************ */


