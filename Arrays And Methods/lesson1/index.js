/**
 * arrays
 * - create arrays [two methods] new array() + []
 * - access array elements
 * - nested arrays
 * - change array elements
 * - check for array array.isarray(arr);
 */

let myFriends = ["ahmed", "omar", "mona", ["marwan", "ali"]]

console.log(myFriends[0]);
console.log(myFriends[2]);
console.log(myFriends[1][2]);
console.log(myFriends[3][1]);
console.log(myFriends[3][1][2]);

myFriends[1] = "gamal"
console.log(myFriends);
myFriends[3] = ["qamar", "musa"]
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends));


/************************************************* */


/**
 * array methods
 * - length
 */

console.log("*********************");

let ourFriends = ["ahmed", "sameh", "sara", "mona"]

ourFriends.length = 2
console.log(ourFriends);


/************************************************* */


/**
 * array methods [adding and removing]
 * - unshift("","") add element to the first
 * - push("","") add element to the end
 * - shift() remove first element from array
 * - pop() remove last element from array
 */

let friends = ["ahmed", "sameh", "omar", "mohammed"]

friends.unshift("louis")
console.log(friends);

friends.push("samer")
console.log(friends);

let first = friends.shift()
console.log(friends);
console.log(`the first name is : ${first}`);

let last = friends.pop()
console.log(friends);
console.log(`the last name is ${last}`);

console.log("***************************");


/***************************************************** */

/**
 * array methods [search]
 * indexOf( search element, from index(opt) )
 * lastIndexOf( search element, from index(opt) )
 * includes(value to fined, from index(opt))
 */

let boys = ["ahmed", "zehra", "salem", "ahmed"]

console.log(boys.indexOf("ahmed"));
console.log(boys.indexOf("ahmed", 2));

console.log(boys.lastIndexOf("ahmed"));
console.log(boys.lastIndexOf("ahmed", -2));

console.log(boys.includes("ahmed"));
console.log(boys.includes("ahmed", 2));

if(boys.lastIndexOf("osama") === -1){
    console.log("not found");
}


/******************************************** */