/**
 * control flow
 * - if
 * - else is
 * - else
 * 
 * if(condition){
 * block of code
 * }
 */

let price = 100
let discount = true
let amount = 30
let country = "egypt"

if(discount === false){
 price -= discount
}
else if(country === "syria"){
 price -= 40
}
else if(country === "ksa"){
 price -= 50
}
else{
    price += 10
}

console.log(price);

/********************************* */


/**
 * Nested If
 */

let myName = "omar"
let age = 25
let town = "palmyra"
let phone = 8699

if(myName === "ahmed"){
    age = 20
}else if(town === "palmyra"){
  if(phone === 8696){
    age = 20
  }else {
    age = 30
  }
}else{
    age = 10
}

console.log(age);

/**************************** */


/**
 * conditional (ternary operator)
*/

let theName = "mona"
let theGender = "female"
let theAge = 30

if(theGender === "male"){
    console.log(20);
}else if(theGender === "female"){
  console.log(10);
}

// condition ? if true : if false

theGender === "male" ? console.log("30") : console.log("15");

theAge < 20 
? console.log(20)
: theAge > 20 && theAge < 60
? console.log("20 to 60")
: theAge > 60
? console.log("larger than 60")
: console.log("unknown number");


/************************************************************ */

/**
 * Logical or ||
 * -- Null + undefined + any falsy value
 * -- nullish coalescing operator ??
 * -- null + undefined 
 */

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let myprice = 10
console.log(`the price is ${myprice || 200}`);
console.log(`the price is ${myprice ?? 200}`);


/************************************************************ */


/**
 * switch statement
 * switch(expression){
 *   case 1:
 *     // code block
 *    break;
 *   case 2:
 *     // code block
 *   default:
 *    // code block
 * }
 * 
 * default ordering 
 * multiple match
 */

let day = 0

switch (day) {
    case 0:
        console.log("sat");
        break;
    case 1:
        console.log("sun");
            break;
    case 2:
        console.log("mon");
        break;
    case 3:
        console.log("tus");
        break;
    default:
        console.log("good night");
}



/******************************************* */