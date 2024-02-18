let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regIp = /\d{4}:\w+\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g
console.log(ip.match(regIp));

/***************************************** */

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let spReg = /Os\w*O/g
console.log(specialNames.match(spReg));

// Output
// ['Os10O', 'OsO', 'Os100O']

/******************************************* */

let phone = "+(995)-123 (4567)";

let phReg = /.\(\d{3}\)-\d{3}\s\(\d{4}\)/g
console.log(phone.match(phReg));

/******************************************* */

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

///https? => ? for print zero or more 
//  \/\/ => for scope case
// \w => for characters : a-z A-Z 0-9
// . => for any character
// .* => for print any character from zero or more
// i => insensitive case

/******************************************* */

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let reg = /\d{2}\s?.\s?\d{2}\s?.\s?\d{2,4}/g

console.log(date1.match(reg)); // "25/10/1982"
console.log(date2.match(reg)); // "25 - 10 - 1982"
console.log(date3.match(reg)); // "25 10 1982"
console.log(date4.match(reg)); // "25 10 82"

/********************************************** */

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let regExp = /(^elzero|^https*).+/g

console.log(url1.match(regExp));
console.log(url2.match(regExp));
console.log(url3.match(regExp));
console.log(url4.match(regExp));
console.log(url5.match(regExp));

/************************************************ */


