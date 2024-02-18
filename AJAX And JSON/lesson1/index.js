/**
 * what is JSON ?
 * - java script object notation 
 * - format for sharing data between server and client
 * - json derived from java script
 * - alternative for xml
 * - file extension is .json
 * 
 * why JSON ?
 * - easy to use and read
 * - used by most programming and its frameworks
 * - you can convert json object to js object and vice Versa
 * 
 * JSON ve XML
 * -- text based format    -- markup language
 * -- lightweight          -- heavier
 * -- does not use tags    -- using tags
 * -- shorter              -- not short
 * -- can use arrays       -- cannot use arrays
 * -- not support comments -- support comments
 */


/************************************************* */


/**
 * JSON syntax : 
 * - data added inside curly braces {  }
 * - data added with key : value
 * - key should be string wrapped in double quotes
 * - data separated by comma
 * - square brackets for [] for arrays
 * - curly braces for objects { }
 * 
 * available data types : 
 * - string
 * - number
 * - object
 * - array
 * - boolean values
 * - null
 */

/********************************************** */


/**
 * JSON
 * - API overview
 * - tools to test API
 * - preview github API
 */

/********************************************** */

/**
 * JSON
 * JSON.parse => convert text data to js object
 * JSON.stringify => convert js object to JSON
 */

const myJson = `{"userName": "omar", "age": 20}`
console.log(typeof myJson);
console.log(myJson);

const objectJson = JSON.parse(myJson)
console.log(typeof objectJson);
console.log(objectJson);

objectJson["userName"] = "user"
objectJson["age"] = 21

const toJson = JSON.stringify(objectJson)
console.log(typeof toJson);
console.log(toJson);


/********************************************** */


