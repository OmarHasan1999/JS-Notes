/**
 * - map data type
 * Methods :
 * --- set()
 * --- get()
 * --- delete()
 * --- clear()
 * --- has()
 */

let map = new Map([ 
    [10, "num"],
    ["name", "str"],
    [false, "bool"],
])

// map.set(10,"num")
// map.set("name","str")

console.log(map);
console.log(map.get(10));
console.log(map.get("name"));
console.log(map.get(false));

console.log(map.size);
console.log(map.delete("name"));
console.log(map.size);

console.log(map.has(false));
map.clear()
console.log(map.size);

/************************************ */

/** - map and weakmap
 * --- weakmap allows garbage collector to do its task but not map
 * ----- map => key can by anything 
 * ----- weakmap => key can be object only
 */

let user = { name : "theUser" }

let myMap = new Map()
myMap.set(user, "objectValue")

user = null // override the reference

console.log(myMap);

console.log("#".repeat(32));

let wekMap = { name : "theUser" }
let newWek = new WeakMap()

newWek.set(wekMap,"value")
console.log(newWek);

/************************************ */

/** --Array Methods
 * array.from( iterable, mapFun, this )
 * --- variable 
 * --- string numbers
 * --- set
 * --- using the map function
 * --- arrow function
 * --- shorten the method + use arguments
 */

console.log(Array.from("name"));
console.log(Array.from("1234", (n) => +n + +n));

let myArray = [1,1,1,4,8]
let x = new Set(myArray)
console.log(x);
console.log(Array.from(x));

function fun() {
        return Array.from(arguments)
}
console.log(fun("one", "two", "three"));

/********************************************* */

/**
 * -- Array.copyWithin( Target, start => optional, end => optional )
 * " copy part of an array to another location in the same array "
 * --- any negative value will count from the end 
 * --- target
 * --- Index to copy part to 
 * --- if at or greater than array length nothing will be copied 
 * --- start
 * --------- index to start copying from
 * --------- if Ommited => start from index 0
 * --- end
 * --------- index to start copying from 
 * --------- not including end
 * --------- if Ommited => reach the end
 */

let arr = [10,20,30,40,50,"A","B"]

// arr.copyWithin(3) // [10, 20, 30, 10, 20, 30, 40]
// arr.copyWithin(4,6) // [10, 20, 30, 40, 'B', 'A', 'B']
// arr.copyWithin(4,-1) // [10, 20, 30, 40, 'B', 'A', 'B']
// arr.copyWithin(1,-2) // [10, 'A', 'B', 40, 50, 'A', 'B']
arr.copyWithin(1, -2, -1) // [10, 'A', 30, 40, 50, 'A', 'B']

console.log(arr); 

