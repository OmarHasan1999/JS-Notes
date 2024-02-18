let a = 10
let b = "20"
let c = 80
console.log(- +true)
 
console.log( ++a + +b++ + +c++ - +a++ );
console.log(  ++a + -b++ + +c++ - -a++ + +a  );
console.log( --c + +b + --a * +b++ - +b * a+ --a - +true );

/**** first line : [++a] : 11 (pre) [+b++] : 20 (post) [+c++] : 80 (post)  */
/**** second Line : [++a] : 11(pre) [-b++] :  -20(post) [+c++] : 80(post) [-a++] :-10(post) [+a] : 10  */
/**** thirst Line : [--c]: 79(pre) [--a] : 9(pre) [+b++]:20(post) [- +true]:-1   */

/******************************************* */

let d = "-100"
let e = "20"
let f = 30
let g = true

console.log(-d * +e);//2000
console.log(-d++  + --e+ + ++f+ + 4 * +true + e);//173

/******************************************* */

// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log();

/*********************************************** */

let num = 6;
console.log(+num);
console.log(- -num);
console.log(num + false);
console.log(num + null);
console.log(+ +num);
console.log(num++);

/*********************************************** */

let numTwo = "10"
console.log( typeof(Number(numTwo) + Number(numTwo)) );//20
console.log( typeof(+numTwo + +numTwo) );//20
console.log( typeof(+numTwo++ + --numTwo) );//20
console.log( typeof(- -numTwo + - -numTwo) );//20

/*********************************************** */

let points = 10
points++
++points
points++
console.log(points);
points--
points--
points--
--points
--points
console.log(points);