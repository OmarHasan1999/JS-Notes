let friends = [10, "sayed", "mohammed", "90", 9000, 100, 20, "10", -20]

console.log(friends);
console.log(friends.sort());
console.log(friends.reverse());


/********************************** */


/**
 * array methods [slicing]
 * - slice(start[opt], end[opt] not including end)
 * --- slice() => all array
 * --- if start is undefined => 0
 * --- negative count from end
 * --- if end is undefined || > indexes => slice to the end array.length
 * --- return new array
 * --- splice(start [mand], delete count(opt), [0 no remove], the items to add [opt])
 * --- if negative => start from the end 
 */
console.log("*********************");

let guys = ["ahmed", "hamed", "steven", "mark", "ali", "osama"]

console.log(guys);
console.log(guys.slice());
console.log(guys.slice(1));
console.log(guys.slice(1,3));
console.log(guys.slice(-3));
console.log(guys.slice(1,-2));
console.log(guys.slice(-4,-2));
console.log("**************************");
console.log(guys);

guys.splice(1,2, "samer", "samar")
console.log(guys);
console.log("**************************");


/************************************************ */



/**
 * array methods [joining]
 * -- concat(array, array) => return a new array
 * -- join(separator)
 */

let myFriends = ["ahmed", "salem", "omar"]
let yourFriends = ["ali", "sara"]
let ourFriends = ["sameh", "mustafa"]

let allFriend = myFriends.concat(yourFriends,ourFriends, "wali")
console.log(allFriend);

console.log((allFriend.join(" |~| ").toUpperCase()));


/************************************************************* */