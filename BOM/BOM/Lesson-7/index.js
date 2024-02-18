/***
 * Session Storage
 * - setItem()
 * - getItem()
 * - removeItem()
 * - clear()
 * - key()
 */

window.localStorage.setItem("color","red")
window.sessionStorage.setItem("color","black")

let myName = document.querySelector(".name")
myName.onblur = () => {
    // console.log(myName.value)
    window.localStorage.setItem("inputName", myName.value)
}