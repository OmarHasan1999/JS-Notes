/**
 * Set data Type
 * -- Syntax : new set ( iterable )
 * --- Object to store unique values
 * --- cannot access elements by index
 * Properties : size
 * Methods :  -- add -- delete -- clear -- has
 */

let myData = [1,1,1,3,5]
// let uniqueData = new Set([1,1,2,2,5])
let uniqueData = new Set().add(1).add(2).add(7)

console.log(myData);
console.log(uniqueData);
console.log(uniqueData.size);
console.log(myData[0]);
console.log(uniqueData[0])

uniqueData.delete(2)
console.log(uniqueData);
console.log(uniqueData.delete(10));

uniqueData.clear()
console.log(uniqueData);
console.log(uniqueData.size);
console.log(uniqueData.has('A'));

/************************************************* */

/**
 * Set and WeakSet
 * - the weakset is weak 
 * - meaning references to objects in a weakset are held weakly 
 * - If no other references to an object stored in the weakset existed 
 * -- those objected can be garbage collected 
 * 
 * set => can store any data values 
 * weakset => collection of objects only 
 * set => have size property 
 * weakset => does not have size property
 * set => have keys , values , entries 
 * weakset => does not have keys, values, entries
 * set => can use foreach
 * weakset => cannot use foreach
 * 
 * usage : store objects and removes them once them become inaccessible
 */

// Type of data
let mySet = new Set([1,2,5])
console.log(mySet);
// Size
console.log(mySet.size);

// values + key alias
let iterator = mySet.keys()
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

// forEach
mySet.forEach((el) => console.log(el))

// Type of data
let ws = new WeakSet([{ A:1, B:5 }])
console.log(ws);

/*********************************************** */

/**
 * - map data type
 * Syntax : new Map(Iterable with key/value)
 * --- map and objects
 * 
 * ------ map => does not contain key by default 
 * ------ object => has default keys
 * ------ map => key can be anything [function, object, any primitive data types]
 * ------ object => string or symbol
 * ------ map => ordered by Insertion
 * ------ object => not 100% till now
 * ------ map => get items by size 
 * ------ object => need to do manually
 * ------ map => can be directly iterated 
 * ------ object => not directly and need to use object.keys() and so on 
 * ------ map => better performance when add and remove data 
 * ------ object => low performance when comparing to map 
 */

let obj = {}
let emptyObj = Object.create(null)
let map = new Map()

console.log(obj);
console.log(emptyObj);
console.log(map);

let newObj = {
    10: "Number",
    "10": "string"
}
console.log(newObj[10]);

let newMap = new Map()
newMap.set(10,"Number")
newMap.set("10","string")

console.log(newMap.get(10));
console.log(newMap.get("10"));
console.log(newObj);
console.log(newMap);

/***************************** */