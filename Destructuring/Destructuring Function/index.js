/**
 * - Destructuring Function Parameters
 */

const user = {
    name : "omar",
    age : 25,
    skills : {
        html : 45,
        css : 90
    }
}

 dataShow(user);

// function dataShow (obj) {
//    console.log(`your name is ${obj.name}`);
//    console.log(`your age is ${obj.age}`);
//    console.log(`your skills is ${obj.skills.html}`);
// }

function dataShow ({ name : n, age : a , skills : {html : h} }) {
    console.log(`your name is ${n}`);
    console.log(`your age is ${a}`);
    console.log(`your skills is ${h}`);
 }

/*********************************************** */

/**
 * - Destructuring Mixed content
 */

const data = {
    name : "omar",
    age : "34",
    skills : ["html", "css", "js"],
    title : {
        syria : "hama",
        turkey : "gaziAntep"
    }
}

const { name:n, age:a, skills :[h], title:{syria:s} } = data
console.log(n);
console.log(a);
console.log(h);
console.log(s);

/**************************************************** */