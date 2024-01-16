/** Destructuring Objects 
 * 
*/

// array => []   // object => {} 

const user = {
    name : "omar",
    age : 25,
    title : "dev",
    country : "syria"

}

// console.log(user.name);
// console.log(user.age);
// console.log(user.title);
// console.log(user.country);

// const myName = user.name
// const myAge = user.age
// const myTitle = user.title
// const myCountry = user.country

// console.log(myName);
// console.log(myAge);
// console.log(myTitle);
// console.log(myCountry);

// ( { myName, myAge, myTitle, myCountry } = user )

const { name, age, title, country } = user

console.log(name);
console.log(age);
console.log(title);
console.log(country);

/**************************************************** */

/**
 * Destructuring Object 
 * ---- Naming the variables
 * ---- add new property
 * ---- nested Object
 * ---- Destructuring the nested object only
 * 
 */

const userTwo = {
    name : "omar",
    age : 25,
    title : "dev",
    country : "syria",
    skills : {
        html : 50,
        css : 78
    }

}

const { name : n, age : a , skills : {html : h} } = userTwo
console.log(n)
console.log(a)
console.log(`my html is : ${h}`)

const { html : skillOne , css : skillTwo } = userTwo.skills
console.log(`my html is : ${skillOne}` + ` and css is : ${skillTwo}`)

/************************************ */

