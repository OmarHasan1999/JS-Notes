/**
 * ajax
 * - asynchronous js and xml
 * - approach to use many technologies together [html, css, js, DOM]
 * - it use "xmlHttpRequest" object to interact with the server
 * - you can fetch data or send data without page refresh
 * Examples
 * - youtube studio
 * - form check name
 * 
 * test new xmlHttpRequest();
 * request and response
 * status code 
 */

/***************************** */


/** 
 * ajax
 * - read state => status of the request
 * [0] => request is not initialized
 * [1] => server connection established
 * [2] => request received
 * [3] => processing request
 * [4] => request is finished and response is ready
 * -- status
 * [200] request is successful
 * [404] not found
 */

let myReq = new XMLHttpRequest()
myReq.open("GET", "https://api.github.com/users/elzerowebschool/repos")
myReq.send()
console.log(myReq);

myReq.onreadystatechange = function(){
    // console.log(myReq.readyState);
    // console.log(myReq.status);
    if(this.readyState === 4 && this.status === 200 ){
       console.log(this.responseText);
    }
}


/**************************************** */


/**
 ** loop on data
*/

let myReq = new XMLHttpRequest()
myReq.open("GET", "https://api.github.com/users/elzerowebschool/repos")
myReq.send()
console.log(myReq);

myReq.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200 ){
    //    console.log(this.responseText);
    let jsData = JSON.parse(this.responseText)
    // console.log(jsData);
    
    for(let i=0; i < jsData.length; i++){
      let div = document.createElement("div")
      let repoName = document.createTextNode(jsData[i].full_name)
      div.appendChild(repoName)
      document.body.appendChild(div)
    }
  }
}

/****************************************** */

