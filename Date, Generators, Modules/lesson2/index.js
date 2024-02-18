/**
 * Generators
 * -- generator function run its code when required
 * -- generator function return special object
 * -- generators are iterable
 */

function* generatorNum() {
    yield 1,
    console.log("its yield one")
    yield 2,
    yield 3,
    yield 4
}

let generator = generatorNum()
console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for(let value of generatorNum()){
    console.log(value);
}

for(let value of generator){
    console.log(value);
}

/****************************** ***********/


/**
 * generators
 * -- delegate generators
 */

function* generateNums() {
    yield 1,
    yield 2,
    yield 3
}

function* generateLetters() {
    yield "A",
    yield "B",
    yield "C"
}

function* generateAll(){
    yield* generateNums()
    yield* generateLetters()
    yield* [1,2,3]
}

let theGenerate = generateAll()
console.log(theGenerate.next());
console.log(theGenerate.next());
console.log(theGenerate.next());
console.log(theGenerate.next());
console.log(theGenerate.next());
console.log(theGenerate.return("end"));
console.log(theGenerate.next());
console.log(theGenerate.next());



/************************************ ************/

/**
 * -- generate infinite numbers
 * -- use return inside generators
 */

function* generateNumbers(){
    // yield 1,
    // yield 2,
    // return "A",
    // yield 3
    // let index = 0

    // while(true) {
    //    yield index++
    // }
}

let myGenerate = generateNumbers()
console.log(myGenerate.next());
console.log(myGenerate.next());
console.log(myGenerate.next());
console.log(myGenerate.next());
console.log(myGenerate.next());


/************************************ ************/
