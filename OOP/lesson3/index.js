/**
 * -- prototype
 * - prototypes are the mechanism by which js objects
 * - inherit features from one another
 */

class user{
    constructor(id, userName){
        this.i = id
        this.u = userName
    }
    sayHello(){
        return `hello ${this.u}`
    }
}

let userOne = new user(1, "omar")
console.log(userOne.u);

console.log(user.prototype);

let str = "ahmed"
console.log(String.prototype);

/************************************************** */

/**
 * -- prototype
 * - add to prototype chain
 * - extend built in constructors features
 */

class newUser{
    constructor(id, userName){
        this.i = id
        this.u = userName
    }
}

let userA = new newUser(1, "ali")
console.log(userA.u);
console.log(newUser.prototype);
console.log(userA);

newUser.prototype.sayWelcome = () => {
    return `welcome ${this.u}`
}

Object.prototype.country = "syria"

String.prototype.addDot = function(val) {
    return `.${this}.`
}

let newStr = "my name is"


/****************************************** */


/**
 * -- object meta data and descriptor
 * --- writable
 * --- enumerable
 * --- configurable [ cannot delete or reconfigure ]
 */

const myObject = {
    a: 1,
    b: 2,
}

Object.defineProperty(myObject, "c", {
    writable : true,
    enumerable : true,
    configurable : true,
    value : 5
})

myObject.c = 8

console.log(delete myObject.c);

for ( let pr in myObject ) {
    console.log(pr, myObject[pr]);
}

console.log(myObject);


/*******************************************/


/**
 * -- object meta data and descriptor
 * -- define multiple properties
 * -- check descriptors
 */

let theObject = {
    a: 1,
    b: 2
}

Object.defineProperties(theObject, {
    c: {
        configurable: true,
        value: 7
    },
    d: {
        configurable: true,
        value: 10
    },
    e: {
        configurable: true,
        value: 4
    }
})

console.log(theObject);
console.log(Object.getOwnPropertyDescriptor(theObject,"d"));
console.log(Object.getOwnPropertyDescriptors(theObject));

