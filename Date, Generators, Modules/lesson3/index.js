/**
 * Modules
 * -- Import & Export
 */

let a = 10
let array = [12, 5, 90]
function name() {
    return `my name is omar`
}

export {a, array, name}

/********************************** */

/**
 * Modules:
 * -- export alias
 * -- named export
 * -- default export
 * -- import all
 */

let b = 12
let arr = [3, 76, 89]
function fun() {
    return `can you do it?`
}

export {b, arr, fun}
export default function yourCountry() {
    return `your country is palmyra`
}