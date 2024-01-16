/**
 * string syntax + character escape sequences
 * \ escape + line continue
 * \n
 */

console.log("my name 'is' omar");
console.log('hello "my" teacher');
console.log('hello \'my\' teacher');
console.log("where \"are\" you");
console.log('this is \'new\' line');
console.log("my \
name \
is");
console.log("he\nis\na\nnew\nhere ");

/************************************* */

/** concatenation */
let name = "osama"
let lastName = "ahmed"
document.write(name + " " +  lastName)
console.log(name,lastName);

/************************************* */

/** template literals (template strings) */

/** Normal Concatenate => console.log(""); */
/** Template Literals => console.log(`${ }`); */

let a = "ahmed"
let b = "munir"
let c = "omar"

console.log(a + " \"\" " + b + " " + c);
console.log(` ${a} "" ${b} ${c} `)

let heading = "my name"
let par = "house"
let text = ` <h3>${heading}</h3><p>${par}</p> `
document.write(text)

/************************************* */

let titleCard = "Elzero"
let descCard = "Elzero web school"
let dateCard = "25/10"

let contain = `<div><h3>${titleCard}</h3><p>${descCard}</p><span>${dateCard}</span></div>`
for(let i=0; i<4;i++){
document.write(contain)
  
}

/************************************* */

let numOne = 10
let numTwo = 20

console.log(numOne + "" + numTwo);
console.log(typeof (numOne + "" + numTwo));
console.log(`${numOne}${numTwo}`);
console.log(typeof (`${numOne} ${numTwo}`));

console.log(numTwo+ "\n" + numOne);
console.log(`${numTwo}\n${numOne}`);

/*********************************** */

let f = 21;
let s = 20;
let z = "_"
console.log(z + f + z + s + f + z + f + s + z + f + s + z + s + z);

/*********************************** */
console.log("`I'am In\n\\\\\nLove \\\\  \"\"\"  '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");
/*********************************** */

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

