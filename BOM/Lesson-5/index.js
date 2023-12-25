/***
 * -- stop()
 * -- print()
 * -- focus()
 * -- scrollTo(x, y || options)
 * -- scroll(x, y || options)
 * -- scrollBy(x, y || options)
 */

//let newWindow = window.open("https://google.com","_blank","width=300,height=300")

//window.scrollTo(100,200)

//window.scrollTo({left:100,top:900,behavior:"smooth"})


/********************************************* */

/**
 * --Practice => scroll to top
 * ---- scrollX => [alias => pageXOffset]
 * ---- scrollY => [alias => pageYOffset]
 */

let button = document.querySelector(".but")

window.onscroll = () => {
if(window.scrollY >= 2000){
    button.style.display = "block"
   
}else if(window.scrollY <= 1000){
    button.style.display = "none"
}
}

button.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

/******************************************** */

const links = document.querySelector(".links")
const home = document.querySelectorAll(".child")


window.onscroll = () => {
    if(window.scrollY > 700){
        links.style.backgroundColor = "white",
        home.forEach((ele) => {
           ele.style.color = "blue"
        })
    }else{
        links.style.backgroundColor = "yellow"
        home.forEach((ele) => {
                ele.style.color = "black"
        })
    }
}

/************************************* */

