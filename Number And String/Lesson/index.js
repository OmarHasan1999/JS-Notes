/**
 * Number 
 * - Double precision
 * - syntactic sugar "_"
 * e
 * **
 * - with decimal
 * - Number + bigInt
 * - Number Min Value
 * - Number Max Value
 */

console.log(10000);
console.log(10_00_0);
console.log(1e3);
console.log(10 ** 3);
console.log(100.00);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 22);
console.log(Number("10"));

//********************************************* */

/**
 * Number Methods
 * - Two dots to call a methods
 * - toString()
 * - toFixed()
 * - parseInt()
 * - parseFloat()
 * - isInteger()
 * - isNaN()
 */

console.log((100).toString());
console.log(100.10.toString());
console.log(100.1447.toFixed(4));

console.log(Number("100 name"));
console.log(+("10 name"));
console.log(parseInt("20 name"));
console.log(parseInt("name 20 name"));
console.log(parseInt("10.15 num"));
console.log(parseFloat("10.15 num"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(16.4));
console.log(Number.isInteger(50));
console.log(Number.isNaN("osama"));

//********************************************* */

/**
 * Math object
 * -- round()
 * -- ceil()
 * -- floor()
 * -- min()
 * -- max()
 * -- pow()
 * -- random()
 * -- trunc()
 */

console.log(Math.round(44.7));
console.log(Math.round(44.3));
console.log(Math.ceil(50.2));
console.log(Math.floor(50.7));

console.log(Math.min( 20, 60, 12 ));
console.log(Math.max( 20, 60, 12 ));
console.log(Math.pow(2,3));// 2 * 2 * 2

console.log(Math.random());
console.log(Math.trunc(70.88));

/************************************************************ */