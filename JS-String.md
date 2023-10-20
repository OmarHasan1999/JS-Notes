
# JS-Notes

- JavaScript strings are for storing and manipulating text

ex : 
```js
let text = "John Doe";  
document.getElementById("demo").innerHTML = text;
// John Doe
```
- for Strings You can use single or double quotes:
````js
let carName1 = "Volvo XC60"; 
let carName2 = 'Volvo XC60'; 

document.getElementById("demo").innerHTML =
carName1 + " " + carName2;
// Volvo XC60 Volvo XC60
````
- To find the length of a string, use **length** property
````js
let text = "ABCDEFGH";
document.getElementById("demo").innerHTML = text.length;
// 8
````
___

> ## Js String Methods :
- **length** property returns the length of a string
````js
let text = "ABCD";
document.getElementById("demo").innerHTML = text.length;
// 4

````
### Extracting String Parts
1. slice(start, end)
2. substring(start, end)
3. substr(start, length)
---
- **slice()** 

The method takes 2 parameters : start position, and end position (end not included).
````js
// Slice out a portion of a string from position 7 to position 13

let text = "Apple, Banana, Kiwi";
let part = text.slice(7,13);
document.getElementById("demo").innerHTML = part;   // Banana

//First position is 0

//Second position is 1
````
````js
let text = "Apple, Banana, Kiwi";
let part = text.slice(7)
document.getElementById("demo").innerHTML = part; //Banana, kiwi

// If you omit the second parameter, the method will slice out the rest of the string

````
````js
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
document.getElementById("demo").innerHTML = part; //Banana, kiwi
````
````js
let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);//Banana
````
---
- **substring()**

The difference is that start and end values less than 0 are treated as 0 in substring()
````js
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substring(7,13);//Banana
````
- **substr()** 
  


The difference is that the second parameter specifies the length of the extracted part.
````js
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(7,6);//Banana
````
````js
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(7);
//Banana, kiwi
````
````js
let str = "Apple, Banana, Kiwi";
document.getElementById("demo").innerHTML = str.substr(-4);
//kiwi
````
---
- **replace()**

 method replaces a specified value with another value in a string

````js
const coding = "I learned how to code from TV";
const replacedString = coding.replace("TV", "tutorial");

console.log(replacedString); // I learned how to code from tutorial
````
---
- toUpperCase()
````js
function func() {
	var str = 'See';
	var string = str.toUpperCase();
	console.log(string);
}
````
- toLowerCase()
  
  ````js
  var name = 'TechNet';

  console.log(name.toLowerCase());

  ````
  ---
  ---
- **concat()** joins two or more strings

````html
<p id="demo"></p>

<script>
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
document.getElementById("demo").innerHTML = text3;
</script>

<div>Result : Hello World</div>
```` 
- **trim()** 
method removes whitespace from both sides of a string

````js
let text1 = "     Hello    ";
let text2 = text1.trim();

document.getElementById("demo").innerHTML = text2;//Hello
````
---
-  **padStart()**
The padStart() method pads a string from the start
- **padEnd()**
The padEnd() method pads a string from the end

````js
let text = "5";
document.getElementById("demo").innerHTML = text.padStart(4,"x");
//xxx5
````
````js
let text = "5";
text = text.padEnd(4,"0");

document.getElementById("demo").innerHTML = text;
//5000
````
---

> Extracting String Characters
1. charAt (position)
2. charCodeAt (position)
3. Property access [ ]

- charAt() this method returns the character at a specified index (position) in a string
````js
var text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charAt(0);//H
````

---
---
- split() : can be converted to an array with the **split()** method
  ```js
  <p id="demo"></p>
  <scrip>
  let text = "a,b,c,d";
  const array = text.split(",");
  document.getElementById("demo").innerHTML = myArray[0];//a
  </script>
  ```
  ---
  ---
  > String Search Methods
  - **indexOf()** returns the index (position) the first occurrence of a string in a string
```js
<p id="demo"></p>
<script>
let text = "Please locate where 'locate' ";
let index = text.indexOf("locate");
document.getElementById("demo").innerHTML = index; 
</script>//7
```
---
**Note** : 
JavaScript counts positions from zero
---
- **lastIndexOf()** returns the index of the last occurrence of a specified text in a string
```js
<p id="demo"></p>

<script>
let text = "Please locate where 'locate' ";
let index = text.lastIndexOf("locate");
document.getElementById("demo").innerHTML = index;
</script>//21
```
Both **indexOf()** and **lastIndexOf**() return "-1" if the text is not found
---
---

- **search()** method searches a string for a string and returns the position of the match
```js
<p id="demo"></p>

<script>
let text = "Please locate where 'locate' ";
let index = text.search("locate");
document.getElementById("demo").innerHTML = index; 
</script>//7
```
- **match()** method returns an array containing the results of matching a string against a string 
```js
<p id="demo"></p>

<script>
let text = "The rain in SPAIN stays mainly in plain";
const myArr = text.match("ain");
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
</script>//1 ain
```
```js
<p id="demo"></p>

<script>
let text = "The rain in SPAIN stays mainly in plain"; 
const myArr = text.match(/ain/gi);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
</script>//4 ain,AIN,ain,ain
```
---
- **matchAll()** method returns an iterator containing the results of matching a string against a string
```js
<p id="demo"></p>

<script>
let text = "I love cats. Cats are very easy. Cats are very popular."
const iterator = text.matchAll("Cats");

document.getElementById("demo").innerHTML = Array.from(iterator);
</script>//Cats,Cats
```
- **includes()** method returns true if a string contains a specified value
```js
<p id="demo"></p>

<script>
let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.includes("world");
</script>//true
```
- **startsWith()** method returns **true** if a string begins with a specified value
```js
<p id="demo"></p>

<p>The startsWith() method is not supported in Internet Explorer.</p>

<script>
let text = "Hello world, welcome to the universe";
document.getElementById("demo").innerHTML = text.startsWith("Hello");
</script>//true
```
-  **endsWith()** method returns true if a string ends with a specified value
```js
<p id="demo"></p>
<script>
let text = "John Doe";
document.getElementById("demo").innerHTML = text.endsWith("Doe");
</script>//true
```
```js
<p id="demo"></p>

<script>
let text = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = text.endsWith("world", 11);
</script>//true
```
----
----




