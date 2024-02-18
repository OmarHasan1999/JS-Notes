let button = document.querySelector(".calc")
let input = document.querySelector(".myInput")
let weeks = document.querySelector(".weeks")
let months = document.querySelector(".months")
let days = document.querySelector(".days")
let numbers = document.querySelector(".num")

button.addEventListener("click",() => {
    if(input.value === ""){
        alert("Enter your age ..")
        numbers.style.display = "none"
    }
    else if(input.value !== "" && !isNaN(input.value) && input.value < 130 && input.value >= 1){
        numbers.style.display = "flex"
        months.innerHTML = input.value * 12
        weeks.innerHTML = input.value * 52
        days.innerHTML = input.value * 365
        }
    else{
    alert("enter correct number ..")
    }
})