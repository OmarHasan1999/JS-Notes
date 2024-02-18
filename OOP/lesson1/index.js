/**
 * - constructor function
 */

// const userOne = {
//     id: 1,
//     userName : "omar",
//     salary : 200,
// }

// const userTwo = {
//     id: 2,
//     userName : "hasan",
//     salary : 300,
// }

// const userThree = {
//     id: 3,
//     userName : "memo",
//     salary : 100,
// }

class user {
    constructor(id, userName, salary) {
        this.i = id
        this.u = userName
        this.s = salary + 10
    }
}

let userOne = new user(1, "omar", 190)
let userTwo = new user(2, "ahmed", 150)
let userThree = new user(3, "khaled", 90)

console.log(userOne.u);
console.log(userTwo.u);
console.log(userThree.u);

console.log(userTwo.s);
console.log(userThree.s);

/**************************************** */

/**
 * - constructor function
 * - new syntax
 */

class newUser{
    constructor(id, userName, salary) {
        this.i = id
        this.u = userName
        this.s = salary + 10
    }
}

let userFi = new newUser(1, "omar", 190)
let userSe = new newUser(2, "ahmed", 150)
let userTh = new newUser(3, "khaled", 90)

console.log(userFi.u);
console.log(userSe.u);
console.log(userTh.u);

console.log(userSe.s);
console.log(userTh.s);

console.log(userFi instanceof newUser);
console.log(userFi.constructor === newUser);

/**************************************** */

/**
 * - Deal with properties and methods
 */

class myUser{
    constructor(id, userName, salary) {
        // properties
        this.i = id
        this.u = userName || "jame"
        this.s = salary < 100 ? salary + 20 : salary
        this.msg = function () {
            return `your name ${this.u} your salary ${this.s}`
        }
    }

    //methods
    yourName(){
        return `your name ${this.u}`
    }
}

let user_Fi = new myUser(1, "omar", 190)
let user_Se = new myUser(2, "", 150)
let user_Th = new myUser(3, "khaled", 90)

console.log(user_Fi.u);
console.log(user_Se.u);
console.log(user_Th.u);
console.log(user_Th.s);
console.log(user_Fi.msg());
console.log(user_Th.yourName());