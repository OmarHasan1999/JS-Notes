/**
 * scope
 * global and local scope
 */

let a= 1
let b= 2

function show(){
    let a= 1
    let b= 2
    console.log(`the Function ${a}`);
    console.log(`the Function ${b}`);
}

console.log(`${a}`);
console.log(`${b}`);

show()


/********************************* */

/**
 * scope
 * block scope [if, switch, for]
 */

console.log("**************");
var x = 10
if(10 === 10){
    let x = 50
    console.log(`from if block ${x}`);
}
console.log(`from global ${x}`);


/************************************* */

/**
 * -- Lexical scope
 */
console.log("**************");

function parent(){
    let a = 10

    function child(){
        console.log(a);
        console.log(`from child ${b}`);

        function grand(){
            let b = 100
            console.log(`from grand ${a}`);
            console.log(`from grand ${b}`);
        }
        grand()
    }
    child()
}
parent()


/************************************* */