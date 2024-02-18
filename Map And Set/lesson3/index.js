/**
 * Array.some(callBackFun(ele, ind, arr), this argument)
 * --- callBackFun() => function to run on every element on the given array
 * ----------- Element => the current element to process
 * ----------- Index => index of current array
 * ----------- array => the current array working with 
 * ----------- this argument => value to use as when executing callBackFun
 * -- using :
 * - check if element exists in array
 * - check if number in range
 */

let nums = [1, 2, 3, 4, 5, 6, 7, 12]

let number = 4

let check = nums.some( function(e) {
    return e > this
}, number)

console.log(check);

function checkValue(arr, val) {
    return arr.some(function(e) {
        return e === val
    })
}

console.log(checkValue(nums,14));

let range = {
    min : 10,
    max : 20
}

let checkNum = nums.some(function(e) {
    return e >= this.min && e <= this.max
},range)

console.log(checkNum);

/***************************************** */

/**
 * Array.every(callBackFun(ele, ind, arr), this arg)
 * ---- callBackFun => function to run on every element on the given array
 * --------- ele => the current element to process
 * --------- ind => index of current element
 * --------- array => the current array working with
 * ----------- this arg => value to use as this when executing callBackFun
 */

let locations = {
    10 : "place1",
    20 : "place2",
    30 : "place3",
    40 : "place4",
}

let mainLocation = 15

let newLoc = Object.keys(mainLocation)

console.log(newLoc);

let locNum = newLoc.map((n) => +n)

console.log(locNum);

let checkLoc = locNum.every(function(e) {
    return e > this    
},mainLocation)

console.log(checkLoc);

/************************************************* */

/**
 * spread operator => ...iterable
 * "allow iterable to expand in place"
 * */
//  * -- spread with string => expand string

console.log("omar");
console.log(..."omar");
console.log([..."omar"]);

//  * -- concatenate arrays

let arr1 = [1,2,3,4]
let arr2 = [5,6]
let allArr = [ ...arr1, ...arr2 ]
console.log(allArr);

//  * -- copy array 

let copyArr = [...arr1]
console.log(copyArr);

//  * -- push inside array

let myFriendOne = ["omar", "ahmed"]
let myFriendTwo = ["khaled", "sameh"]

myFriendOne.push(...myFriendTwo)

console.log(myFriendOne);

//  * -- use with math object 

let numbers = [1, 66, 33, 9]
console.log(Math.max(...numbers));

//  * -- spread with objects => merge objects 

let objOne = {
    a : 5,
    b : 4
}
let objTwo = {
    c : 1,
    d : 12
}

console.log({ ...objOne, ...objTwo });