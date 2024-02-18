/** String Methods
 * -- access with index
 * -- access with chartAt()
 * -- length
 * -- trim()
 * -- toUpperCase()
 * -- toLowerCase()
 * -- chain Methods
 */

let myName = "  omar "

console.log(myName);
console.log(myName[1]);
console.log(myName[5]);

console.log(myName.charAt(1));
console.log(myName.charAt(5));

console.log(myName.length);
console.log(myName.trim());

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.trim().charAt(2).toUpperCase());

/****************************************************** */

/**
 * String Methods
 * -- IndexOf( value[Mand] , start [opt] 0 )
 * -- lastIndexOf( value[Mand] , start [opt] length )
 * -- slice (start[mand], End[opt] not include end )
 * -- repeat() => times
 * -- split (separator [opt], limit[opt])
 */

let par = "elzero web school"

console.log(par.indexOf("web"));
console.log(par.indexOf("web", 8));
console.log(par.indexOf("o"));//5
console.log(par.lastIndexOf("o"));//15

console.log(par.slice(2,6));//zero
console.log(par.slice(-5,-3));//ch
console.log(par.repeat(2));
console.log(par.split("", 6));

/****************************************************** */

/**string methods
 * -- substring( start [mand], end [opt] not including end )
 * -- start  > end will swap
 * -- start < 0 it start from 0
 * -- use length to get last character
 * -- substr( start[mand], characters to extract)
 * -- start >= length = ""
 * -- negative start from end 
 * -- includes( value[mand] , start [opt] Default 0 )
 * -- startsWith(value[mand], start[opt] default 0)
 * -- endsWith( value[mand] ,length[opt] default full length )
 */

let info = "elzero web school"

console.log(info.length);//17
console.log(info.substring(2, 6));//zero
console.log(info.substring(6, 2));//zero (swap)
console.log(info.substring(-10, 6));//elzero
console.log(info.substring(info.length - 5, info.length - 3));//ch

console.log(info.substr(0, 6));//elzero
console.log(info.substr(17));// nothing
console.log(info.substr(-3));//ool
console.log(info.substr(-5, 3));//cho

console.log(info.includes("web"));//true
console.log(info.includes("web", 8));//false

console.log(info.startsWith("e"));//true
console.log(info.startsWith("e", 2));//false
console.log(info.startsWith("zero", 2));//true
console.log(info.endsWith("l", 6));//false



/****************************************************** */
