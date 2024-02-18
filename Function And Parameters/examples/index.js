function info(...data){
    let name,age,status
for(let i =0;i<data.length;i++){
    if(typeof data[i] === "string"){
        name = data[i]
    }
    else if(typeof data[i] === "number"){
        age = data[i]
    }
    else if(typeof data[i] === "boolean"){
        status = data[i]
        if(status === true){
            status = "available"
        }else{
            status = "not available"
        }
    }
    
}
return `your name : ${name} , your age : ${age} , ${status}`

}

console.log(info( "osama", 38,true ));
console.log(info(38, "osama", false));
console.log(info(true, "osama", 38));
console.log(info(false, 38, "osama"));


/*********************************************** */
console.log("*******************");
function sayHello(theName,theGender) {
    // Your Code Here
    console.log(`hello Mr ${theName}`)
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

console.log("********************************");

/*********************************************** */


function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if( secondNum == null){
     console.log("second number is not found");
    }

    if(operation === "multiply"){
         console.log(firstNum * secondNum)
    }
    else if(operation === "subtract"){
         console.log(firstNum - secondNum)
    }
    else{
        console.log(firstNum + secondNum)
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

  console.log("****************************");


/******************************************** */


function ageInTime(theAge) {
    // Your Code Here
    if(theAge < 10 || theAge > 100){
        console.log("the age out of the range");
    }else{
    console.log(`your Age is : ${theAge} , in Months : ${theAge * 12} , in Weekends : ${theAge * 52} , in Days : ${theAge * 365} , in Hours : ${theAge * 8760}`)
  }
}
  
  // Needed Output
  ageInTime(10); // Age Out Of Range
  ageInTime(25); // Months Example => 456 Months

console.log("**********************");
/*********************************************** */


function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`)
    for(let i=startYear; i<=endYear;i++){
        document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
  }
  createSelectBox(2000, 2021);

/************************************************* */


function mult(...s){
    let res = 1
    for(let i =0; i< s.length; i++){
        if(typeof s[i] === "string"){
            s[i] = ""
        }
        else if(Number.isInteger(s[i])){
            res *= s[i]; 
        }

    }
    return res; 
}
console.log(mult(5 , 2))
console.log(mult(5 , 2, "r"))
console.log(mult(5 , 2, "r", 1.7))
console.log(mult(2, 1.7))



/************************************************* */





