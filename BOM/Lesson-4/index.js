/**
 * --open(URL [opt], window Name Or Target Attr [Opt], win Features [opt], History Replace)
 * ---close()
 * ----window Features
 * --- width(num)
 * --- height(num)
 * --- left(num)
 * --- top(num)
 * 
 */

setTimeout(() => {
    window.open("https://google.com","_blank","width=200,height=200,top=400,left=400")
},5000)

/****************************************** */
/****************************************** */

/***
 * -- History API
 * -- Properties
 * ----- length
 * ----- methods
 * ----- back()
 * ----- forwards()
 * ----- go(Delta) => Position in History
 */

console.log(history)

