let setOfNum = new Set().add(10)
setOfNum.add(20).add(setOfNum.size)

console.log(setOfNum);
 setOfNum.delete(10)
 setOfNum.delete(20)
console.log(setOfNum);

/************************************** */

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriend = new Set(myFriends.sort())
console.log(newFriend);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

/************************************** */

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
let newMap = new Map([
    [ "username", "Osama"],
    ["role", "Admin"],
    ["country", "Egypt"],
  ])

  console.log(newMap);
  console.log(newMap.size);
  console.log(newMap.has("role"));

  // Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true

/******************************************* */

let theNumber = 100020003000;
let strNum = theNumber.toString()
let newNumbers = new Set(strNum)
newNumbers.delete("0")
console.log( ...newNumbers );
// Needed Output
// 123  

/******************************************* */

let theName = "Elzero";

// Needed Output
['E', 'l', 'z', 'e', 'r', 'o']

// let x = theName.split('')
// console.log(x);

// console.log([...theName]);

/******************************************* */

let charsOne = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

charsOne.copyWithin(3)
console.log(charsOne);

/******************************************* */

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6]

// console.log([...numsOne , ...numsTwo]);

// numsOne.push(...numsTwo)
// console.log(numsOne);

console.log([  `${numsOne} ${numsTwo}` ]);

/******************************************* */

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210
let sum = 0
n1.forEach((num) => sum += num)

// console.log(n2.length * sum );
console.log(sum * n2.length);

