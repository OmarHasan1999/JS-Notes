/**
 * Quantifiers
 * $ => end with something
 * ^ => start with something
 * ?= => followed by something
 * ?! => not followed by something
 */

let str = "we love programming"
let names = "1OsamaZ 2ahmedZ 3Mohammed 4MoustafaZ 5GamalZ"

console.log(/ing$/g.test(str));
console.log(/^we/g.test(str));
console.log(/^sy/g.test(str));

console.log(names.match(/\d\w{5}(?=Z)/g));
console.log(names.match(/\d\w{8}(?!Z)/g));

/***************************************** */

/**
 * --replace
 * --replaceAll
 */

let txt = "we love programming and @ because @ is amazing"

console.log(txt.replace("@","js"));
console.log(txt.replaceAll("@","js"));

let re = /@/g
console.log(txt.replaceAll(re,"js"));

/************************************** */

let reg = document.getElementById("reg")
let phone = document.getElementById("phone")

reg.onsubmit = () => {
   let phRe = /\(\d{4}\)\s\d{3}-\d{4}/
   let val = phRe.test(phone.value)

   if (val === false) {
    return false
   }
  return true
}

/******************************************** */