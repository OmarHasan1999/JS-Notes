/**
 * Object
   - Intro and what is Object
   - Testing window Object
   - Accessing Object
 */

let user = {
    //Properties
    name : "Omar",
    age : 24,
    //Method
    GoodIdIa : () => {
        return "Good Morning";
    }
}
console.log(user.name);
console.log(user.age);
console.log(user.GoodIdIa());

console.log("===================================")
/** ================================= */
/**LESSON 1 */
/**
   Object
   - Dot Notation and Bracket Notation
   - Dynamic Property Name
 */

let myAge = "age";

let property = {
    name : "Ahmad",
    "country" : "Syria",
    age : 28
}

console.log(property.name);
console.log(property["country"]);
console.log(property[myAge]);

console.log("=================================");

/**========================================== */
/**Lesson 2*/
/**
 * Object
 * - Nested Object and Trainings
 */

let newUser = {
    name : "Sara",
    age : 20,
    skills : ["HTML","CSS","PHP"],
    address : {
        syria : "Hama",
        jordan : {
            one : "Amman",
            two : "Zarqa",
        }
    },
    available : true,
    check : () => {
        if (newUser.available === true){
            return "Yes, He Can"
        }else{
            return "Not , He Cant"
        }
    }
}

console.log(newUser.name);
console.log(newUser.age);
console.log(newUser.skills.join("  "));
console.log(newUser.skills[2]);
console.log(newUser.address.syria);
console.log(newUser["address"]["jordan"]["two"]);
console.log(newUser.check());

console.log("====================================");

/***========================================= */
/***========================================= */
/***========================================= */

/** Lesson 3 */
/**
 * Object
 * Create Object with new keyword new Object();
 */

let MyUser = new Object({
    age : 19
})
console.log(MyUser.age);

MyUser.age = 42;
MyUser["country"] = "KSA";
MyUser.wantWater = () => {
    return "Want Water"
}

console.log(MyUser.age);
console.log(MyUser.country);
console.log(MyUser.wantWater())
console.log("==========================")

/**============================================ */
/**============================================ */
/** Lesson 4 */
/**
 * - this Keyword
 * - this Introduction
 * - this inside Object method
 * --- When a Function is called as a method of an object,
 * --- Its this is set to the object the method is called on
 * - Test variables with Window and This 
 */

console.log(this);
console.log(this === window)

myName = "seem"

console.log(window.myName)
console.log(this.myName)

document.getElementById("button").onclick = function() {
    console.log(this);
}

let yourAge = {
    age : 20,
    ageInMonth : function() {
        return this.age * 12;
    }
}
console.log(yourAge.age);
console.log(yourAge.ageInMonth())
console.log("=====================================");

/**=============================== */
/**=============================== */
/**=============================== */
/**Lesson 5 */
/**
 * - Create Object with Create Method
 * - create method : create(Object) : Object to use a prototype
 */

let users = {
    age : 15,
    doubleAge : function() {
        return this.age * 2
    }
}

console.log(users.age);
console.log(users.doubleAge());

let Obj = Object.create({});
Obj.name = "Ahmad"

console.log(Obj)

let newObj = Object.create(users)
newObj.age = 40;

console.log(newObj);
console.log(newObj.age);
console.log(newObj.doubleAge());
console.log("===================================");

/**=========================================== */
/**=========================================== */

/**Lesson 6 */
/**
 * - Create Object with assign Method
 * - assign Method : assign(target : {},source : any);
 * - The Target Object To Copy To 
 */

let obj1 = {
    prop1 : 1,
    method1 : function(){
        return this.prop1
    }
}

let obj2 = {
    prop2 : 2,
    method2 : function(){
        return this.prop2
    }
}

let targetObj = {
    prop1 : 100,
    prop4 : 8
}

let finalObj = Object.assign(targetObj,obj1,obj2);
finalObj.prop1 = 50;
finalObj.prop6 = 90;

console.log(finalObj);

let newObj2 = Object.assign({}, obj1, {prop3 : 3, prop7 : 7});

console.log(newObj2);
console.log("===================================");

/**========================================================= */
/**========================================================= */
/**========================================================= */

/**EXAMPLES */

let member = {
    name : "Elzero",
    age : 38,
    country : "Egypt",
    fullDetails : () => {
        return "My Name Is Elzero, My Age Is 38, I Live in Egypt";
    }
}

console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());

console.log("==============================");

/**===================== */

/**Create a new Object in four different ways */
let methodOne = {
    property : "MethodOne"
}
console.log(methodOne.property);


let methodTwo = new Object({
    property : "MethodTwo"
})
console.log(methodTwo.property);


let methodThree = Object.create({
    property : "MethodThree"
});
console.log(methodThree.property);

let methodFour = {}
methodFour.property = "MethodFour"
console.log(methodFour.property);

console.log("=======================");

/***================================ */
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a}, twoNums, threeNums);

console.log(finalObject);

console.log("=========================")

/**==================================================== */