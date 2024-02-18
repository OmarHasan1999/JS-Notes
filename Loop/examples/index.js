let start = 10;
let end = 100;
let exclude = 40;

for(let i = start;i <= end; i+=10){
    if(i === exclude){
        continue
    }
    console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100


console.log("*********************************");
/********************************************** */

let index = 10;
let jump = 2;

// let i = index
// for (;;) {
//   // Write Your Code Here
//   console.log(i);
//   i -= 2
//   if(i <= jump){
//     break
//   }
// }

// for(let i = index; i <= jump; i-=2){
//     // if(i === jump){
//     //     break
//     // }
//     console.log(i);
// }

// Output
// 10
// 8
// 6
// 4

/******************************************** */

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = 0; i< friends.length;i++){
    if(friends[i].startsWith(letter.toUpperCase())){
        continue
    }
    console.log(`${i} => ${friends[i]}`);
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


console.log("****************************");

/***************************************************** */

let star = 0;
let swappedName = "elZerO";
let res = ""

for(let i = star; i < swappedName.length; i++){
    let char = swappedName[i]
    if(char === char.toUpperCase()){
        res += char.toLowerCase()
    }
    else{
        res += char.toUpperCase()
    }
}
console.log(res);
// Output
"ELzERo"
/************************************** */

console.log("*********************");

let st = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = st ; i < mix.length; i++){
    if(typeof mix[i] === "number" && mix[i] !== 1)
    console.log(mix[i]);
}
// Output
2
3
4

/***************************************************** */
