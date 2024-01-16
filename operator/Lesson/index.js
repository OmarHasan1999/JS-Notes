/***
 * Arithmetic Operators
 * + addition
 * - subtraction
 * * multiplication
 * / division
 * ** exponentiation
 * % modulus
 * ++ Increment [ post / pre ]
 * -- Decrement [ post / pre ]
 */

console.log(10 + 10);
console.log(10 + "file");
console.log(10 - 10);
console.log(10 - "file");//NaN
console.log(typeof Nan);//undefined
console.log(10 * 10);
console.log(10 / 2);
console.log(2 ** 3);// 2 * 2 * 2
console.log(11 % 2);

/************************************ */

/**
 * + unary plus [ return number if its not number ]
 * - unary negation [ return number if its not number +negates it ]
 * tests :
 * -- normal number
 * -- string number
 * -- string negative number
 * -- string text
 * -- float
 * -- hexadecimal numeral system => oxFF
 * -- null
 * -- false
 * -- true 
 */

console.log(+10);
console.log(+"10");
console.log(+"-100");
console.log(+"omar");
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-10);
console.log(-"10");
console.log(-"-100");
console.log(-"omar");
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("10"));

/************************************** */

/**type coercion (type casting) 
 * +
 * -
 * "" - 2
 * false - true
*/

let a = "10"
let b = 20
let c = true

console.log(a + b);
console.log(+a + b);
console.log(a - b);
console.log("" - 2);//"" => 0
console.log(+ "");
console.log(false + true);
console.log(false - true);
console.log(b + c);
console.log(a + b + c );
console.log(+a + b + c );

/*************************************** */

/** assignment operator */

let num = 10
num = num + 20
num += 20
num -= 15

console.log(num);


/*************************************** */
