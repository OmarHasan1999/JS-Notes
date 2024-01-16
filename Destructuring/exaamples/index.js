let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , ,e] = myNumbers

console.log(a * e); // 5

/******************************************* */

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

let [a1, b1, c1, [ d1, e1,[ f1, g1 ] ], ] = mySkills

console.log(`My Skills: ${a1}, ${b1}, ${c1}, ${d1}, ${e1}, ${f1}, ${g1}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

/*********************************************** */

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let newArray = arr1.concat(arr2)
let arr4 = newArray.concat(arr3)
// console.log(arr4);


let [ c2, , , , , , , a2, b2] = arr4

console.log(`My Best Friends: ${a2}, ${b2}, ${c2}`);

// My Best Friends: Shady, Mahmoud, Ahmed

/********************************************* */

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
  };
  
  // Write Your Destructuring Assignment Here

  const { age: a3, working: w3, country:c3, hobbies: [h1, ,h3]  } = member

  
  console.log(`My Age Is ${a3} And Iam ${w3 ? "" : "Not"} Working`);
  // My Age Is 30 And Iam Not Working
  
  console.log(`I Live in ${c3}`);
  // I Live in Egypt
  
  console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming

  /************************************************* */

  const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here

const { title:t, 
       developer:d, 
       releases:{"Oath In Felghana":[u,j]},
     

       } = game

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love`);
// Although I Love

console.log(` Price in USA Is 20 USD`);
//  Price in USA Is 20 USD

// console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

// console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

/**************************************************** */
