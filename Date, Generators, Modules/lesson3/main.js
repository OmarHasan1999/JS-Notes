import {a, array, name} from "./index.js"

console.log(a);
console.log(array);
console.log(name());

/************************************** **********/

// import yourCountry,{b, arr, fun} from "./index.js"
// console.log(b);
// console.log(arr);
// console.log(fun());
// console.log(yourCountry());

import * as allThing from "./index.js"
console.log(allThing.b);
console.log(allThing.arr);
console.log(allThing.fun());
console.log(allThing.yourCountry());