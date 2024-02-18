/**
 * Loop
 * - while
 */

let pro = ["book", "laptop", "pen", "bag"]

let i =0
while(i<pro.length) {
    console.log(pro[i]);
    i++
}

/**************************************** */

console.log("************************");

// let myPro = ["phone", "bag", "colors", "knife"]
// let s = 0
// do{
//     console.log(myPro[s]);
//     s++
// }while (false)



/**************************************** */


let admins = ["ahmed", "osama", "sayed", "stop", "samera"]
let employees = ["amjad", "sameh", "ammer", "omar", "othman", "amany", "samia"] 

let adminNum = 3

document.write(`<h3>we have ${adminNum} admin</h3>`)
document.write(`<hr>`)

for(let i = 0 ; i<3; i++){
    if(admins[i] === "stop" && admins[i] === "samera")
    continue
    document.write(`<i>the admin for team ${i + 1} is ${admins[i]}</i><br> `)
    let team = "Team Members"
    // for(let j = 0; j<team.length; j++){
    //     document.write(`<h4>${team[j]}</h4>`)
    // }
    team.repeat(3)
    document.write(`<h2>${team}</h2>`)

    if(i === 0)
    document.write(`${i + 1}  ${employees[0]}<br>${i + 2}  ${employees[2]}<br>${i + 3}  ${employees[5]}<br><br>`)

    if(i === 1)
    document.write(`${i}  ${employees[3]}<br>${i + 1}  ${employees[4]}<br><br>`)

    if(i === 2)
    document.write(`${i-1}  ${employees[1]}<br>${i}  ${employees[6]}<br><br>`)

    document.write(`<hr>`)
  
    
}


/**************************************************** */


// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (index < friends.length) {
//     if(typeof friends[index] === "number" && friends[index].startsWith("A")){
//         index++;
//         continue;
//     }
//     console.log(friends[i]);
//     index++;
// }
// Output
// "1 => Sayed"
// "2 => Mahmoud"


/**************************************************** */


