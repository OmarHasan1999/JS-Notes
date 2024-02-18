/**
 * constructor function
 * -- update properties
 * -- built in constructors
 */

class user{
    constructor(id, userName, salary){
        this.i = id
        this.u = userName
        this.s = salary
    }
    newName(myName){
        this.u = myName
    }
}

let userOne = new user(1, "omar", 200)

console.log(userOne.u);

userOne.newName("hussein")
console.log(userOne.u);

let strOne = "name"
let strTwo = new String("name")
console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/******************************************* */

/**
 * -- classes
 * -- static properties and methods
 */

class newUser{
    //static property
    static count = 0

    constructor(id, userName, salary){
        this.i = id
        this.u = userName
        this.s = salary
        newUser.count++
    }
    // static methods
    static sayHello(){
        return `hello every body`
    }
    static num(){
        return `${this.count}`
    }
}

let userA = new newUser(1, "omar", 70)
let userB = new newUser(2, "ahmed", 90)
let userC = new newUser(3, "sara", 40)

console.log(userA.u);
console.log(userB.u);
console.log(newUser.count);
console.log(newUser.sayHello());
console.log(newUser.num());

/******************************************* */

/**
 * -- class
 * -- inheritance
 */

//parent class
class myUser{
    constructor(id, userName){
        this.i = id
        this.u = userName
    }
    sayHello(){
        return `hello ${this.u}`
    }
}

//child class
class admin extends myUser{
    constructor(id, userName, per){
        super(id, userName)
        this.p = per
    }
}

class superMan extends admin{
    constructor(id, userName){
        super(id, userName)
    }
}

let userP = new myUser(1, "amjad")
let adminOne = new admin(2, "mustafa", 20)

console.log(userP.u);
console.log(userP.sayHello());
console.log("***************************");
console.log(adminOne.u);
console.log(adminOne.sayHello());

/***************************************** */

/**
 * -- encapsulation
 * -- class fields are public by default
 * -- guards the data against illegal access
 * -- helps to achieve the target without revealing its complex details
 * -- will reduce human errors 
 * -- make the app more flexible and manageable
 * -- simplifies the app  
 */

class theUser{
    //private property
    #s
    constructor(id, userName, salary){
        this.i = id
        this.u = userName
        this.#s = salary
    }
    getSalary(){
        return parseInt(this.#s)
    }
}

let userZ = new theUser(1, "mahmoud", "5000 $")
console.log(userZ.getSalary() * 0.2);

/********************************************* */
