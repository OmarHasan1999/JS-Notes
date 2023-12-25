> JavaScript Arrays
- An array is a special variable, which can hold more than one value
  
  example
```js
  <p id="demo"></p>

<script>
const cars = ["food", "cars", "TV"];
document.getElementById("demo").innerHTML = cars;//food,cars,TV
</script>
```
**Why Use Arrays?**

If you have a list of items storing the cars in single variables could look like this :
```js
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
```
- However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

- The solution is an array!

- An array can hold many values under a single name, and you can access the values by referring to an index number
  
  ---
  ---
  
**Creating an Array**

**Syntax** :
```js
const array_name = [ item1, item2, ...];
```
```js
<p id="demo"></p>

<script>
const names = ["omar", "ahmed", "ammar"];
document.getElementById("demo").innerHTML = names;//omar,ahmed,ammar
</script>
```
- Spaces and line breaks are not important 
```js
<p id="demo"></p>

<script>
const food = [
  "salad",
  "checken",
  "rice"
];
document.getElementById("demo").innerHTML = food;//salad,checken,rice
</script>
```
- You can also create an array, and then provide the elements
````js
<p id="demo"></p>

<script>
const names = [];
names[0]= "mark";
names[1]= "frank";
names[2]= "stef";
document.getElementById("demo").innerHTML = names;
</script>
````
---
---
- Using the JavaScript Keyword **new**
  
```js
<p id="demo"></p>
<script>
    let names = new Array("omar","ahmed");
    document.getElementById.innerHtml = names;//omar,ahmed
</script>
```
- accessing an array element by referring to the **index** number
```js
<p id="demo"></p>

<script>
const phone = ["iphone", "nokia", "ipad"];
document.getElementById("demo").innerHTML = phone[0];
</script>//iphone
```
- Changing an Array Element
```js
<p id="demo"></p>

<script>
const numbers = ["first", "second", "third"];
cars[0] = "one";
document.getElementById("demo").innerHTML = numbers;//one,second,third
</script>
```
- **toString()** converts an array to a string of array values
```js
<p id="demo"></p>

<script>
const fruits = ["Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
</script>//Orange,Apple,Mango
```
- Arrays use numbers to access its elements
```js
<p id="demo"></p>

<script>
const person = ["John", "Doe", 46];
document.getElementById("demo").innerHTML = person[0];//John
</script>
```
- Objects use names to access its members
```js
<p id="demo"></p>

<script>
const person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo").innerHTML = person.firstName;
</script>//John
```


---
---

- **length** property of an array returns the length of an array
```js
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo").innerHTML = size;
</script>//4
```
> Difference Between Arrays and Objects :
-  arrays use numbered indexes

- objects use named indexes
---
**new Array()**
> const points = new Array();
>  
> const points = [];
```js
<p id="demo"></p>

<script>
//const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

document.getElementById("demo").innerHTML = points[0];  
</script>//40
```
---
---
---
>  Array Methods
- **join()** method joins all array elements into a string
```js
<p id="demo"></p>
<script>
  const names = ["kirmizi","sari","bal"];
  document.getElementById.innerHTML = names.join(" * ");
</script>//kirmizi * sari * bal
```
- **pop()** method removes the last element from an array
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;
</script>
//Banana,Orange,Apple
//Banana,Orange

```
- **pop()** method returns the value that was "popped out"
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits.pop();
document.getElementById("demo2").innerHTML = fruits;
</script>
//Apple
//Banana,Orange

```
- **push()** method adds a new element to an array (at the end)
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;
</script>
//Banana,Orange,Apple
//Banana,Orange,Apple,Kiwi
```
-  **push()** method returns the new array length
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
  const fruits = ["apple","banana"]
  document.getElementById.innerHTML = fruits.push("kiwi");
  document.getElementById.innerHTML = fruits;
</script>
//3
//apple,banana,kiwi
```
---
---
- **shift()** method removes the first array element
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;
</script>
//Banana,Orange,Apple
//Orange,Apple
```
- **shift()** method returns the value that was "shifted out"
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits.shift();
document.getElementById("demo2").innerHTML = fruits;
</script>
//Banana
//Orange,Apple
```
- **unshift()** method adds a new element to an array
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits;
fruits.unshift("Lemon");
document.getElementById("demo2").innerHTML = fruits;
//Banana,Orange,Apple
//Lemon,Banana,Orange,Apple
</script>
```
- **unshift()** method returns the new array length
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo1").innerHTML = fruits.unshift("Lemon");
document.getElementById("demo2").innerHTML = fruits;
</script>
//4
//Lemon,Banana,Orange,Apple
```
---
- **concat()** method merges arrays
```js
<p id="demo"></p>
<script>
  let girls = ["steven","luis"];
  let boys = ["mark","frank"];
  let children = girls.concat(boys);
  document.getElementById("demo").innerHtml = children;
</script>
//steven,luis,mark,frank
```
- **flat()** method creates a new array with sub-array elements concatenated to a specified depth
```js
<p id="demo"></p>
<script>
  let myArr = [[1,2],[3,4],[5,6]];
  let newArr = myArr.flat();
  document.getElementById.innerHTML = newArr;
</script>
//1,2,3,4,5,6
```
---
---
- **splice()** method can be used to add new items to an array
```js
<p id="demo"></p>
<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo").innerHTML = fruits;
</script>
//Banana,Orange,Lemon,Kiwi,Apple,Mango
```
The first parameter (2) defines the position where new elements should be added 

The second parameter (0) defines how many elements should be removed
- **splice()** method returns an array with the deleted items
```js
<p id="demo1"></p>
<p id="demo2"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
document.getElementById("demo1").innerHTML = fruits;
document.getElementById("demo2").innerHTML = removed; 
</script>
//Banana,Orange,Lemon,Kiwi
//Apple,Mango
```
```js
<p id="demo"></p>
<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(0, 1);
document.getElementById("demo").innerHTML = fruits;
</script>
//Orange,Apple,Mango
```
---
- **slice()** method slices out a piece of an array into a new array starting from array element 1
```js
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Lemon", "Apple"];
const citrus = fruits.slice(1);
document.getElementById("demo").innerHTML = citrus;
</script>
//Orange,Lemon,Apple

```
```js
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
document.getElementById("demo").innerHTML = citrus;
</script>
//Apple,Mango
```
The **slice()** can take two arguments like slice(1, 3)
```js
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);
document.getElementById("demo").innerHTML = citrus;
</script>
//Orange,Lemon
```
----
----
----
> Sorting Arrays

- **sort()** method sorts an array alphabetically
```js
<p id="demo"></p>


<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
document.getElementById("demo").innerHTML = fruits;
</script>
//Apple,Banana,Mango,Orange
```
- <span style="color:red">**reverse()**
</span> method reverses the elements in an array
```js
<p id="demo"></p>

<script>

const fruits = ["Banana", "Orange", "Apple", "Mango"];


// First sort the array
fruits.sort();

// Then reverse it
fruits.reverse();

document.getElementById("demo").innerHTML = fruits;
</script>
//Orange,Mango,Banana,Apple
```
---
- Numeric Sort

Sort the array in ascending order :
```js
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
 

points.sort(function(a, b){return a - b});
document.getElementById("demo").innerHTML = points;
</script>
//1,5,10,25,40,100
```
Sort the array in descending order :
```js
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];


points.sort(function(a, b){return b - a});
document.getElementById("demo").innerHTML = points;
</script>
//100,40,25,10,5,1

```
- Sorting an Array in Random Order
```js
<button onclick="myFunction()">Try it</button>
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
function myFunction() {
  points.sort(function(){return 0.5 - Math.random()});
  document.getElementById("demo").innerHTML = points;
}
</script>
//when you click on the button a random order is given 
//40,100,1,10,25,5
//1,10,5,100,40,25
```
- **Math.max()** on an Array
```js
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
</script>
//100
```
- Math.min() on an Array
```js
<p id="demo"></p>

<script>
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
</script>
//1
```
---
---
- Sorting Object Arrays
```js
<p id="demo"></p>

<script>
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

displayCars();

cars.sort(function(a, b){return a.year - b.year});
displayCars();

function displayCars() {
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;
}
</script>
//Saab 2001
//BMW 2010
//Volvo 2016
```
---
---
---
---
---
> JavaScript Array Iteration
- **forEach()** method calls a function once for each array element
```js
<p id="demo"></p>
<script>
  let numbers = [ 45,9,34,6];
  let text = "";
  numbers.forEach(myfun);
  document.getElementById('demo').innerHTML = text;
  function myfun(value,index,array){
    text += value + "<br>";
  }
</script>
<!--
45
9
34
6 -->
```
function takes 3 arguments :

- item value
- item index
- array itself

---
- **map()** method creates a new array by performing a function on each array element 
```js
<p id="demo"></p>
<script>
  let numbers1 = [ 2,7,23];
  let numbers2 = numbers1.map(myfun);
  document.getElementById('demo').innerHTML = numbers2;
  function myfun(value,index,array){
    return value * 2;
  }
</script>
//4
//14
//46
```
 function takes 3 arguments :

- item value
- item index
- array itself
---
- **flatMap** method first maps all elements of an array and then creates a new array by flatting the array
```js
<p id="demo"></p>
<script>
  let array1 = [12,5,8];
  let array2 = array1.flatMap((x) => x * 2);
  document.getElementById('demo').innerHTML = array2
</script>
//24,10,16
```
---
- **filter** method creates a new array with array elements that pass a test 
```js
<p id="demo"></p>
<script>
  const numbers = [ 12,77,34,9,23];
  const over18 = numbers.filter(myfun);
  document.getElementById('demo').innerHTML = over18;
  function myfun(value,index,array){
    return value > 18;
  }
</script>
//77,34,23
```
function takes 3 arguments :

- item value
- item index
- array itself
---
- **reduce()** method runs a function on each array elements to produce a single value
```js
<p id="demo"></p>
<script>
  const array1 = [3,55,12];
  const sum = array1.reduce(myfun);
  document.getElementById('demo').innerHTML = sum;
  function myfun(total,value,index,array){
    return total + value;
  }
</script>
//70
```
function takes 4 arguments :
- total 
- item value
- item index
- array itself
---
---
- **every()** method checks if all array values pass a test 
```js
<p id="demo"></p>
<script>
  let numbers = [33,16,8,20];
  let allOver18 = numbers.every(myfun);
  document.getElementById('demo').innerHTML = allOver18;
  function myfun(value,index,array){
    return value > 18;
  }
</script>
//false
```
 function takes 3 arguments :

- item value
- item index
- array itself
---
---
- **some()** method check if some array values pass a test
```js
<p id="demo"></p>
<script>
  let number = [12,29,33];
  let someOver20 = numbers.some(myfun);
  document.getElementById.innerHTML = someOver20;
  function myfun(value,index,array){
    return value > 20;
  }
</script>
//true
```
---
- **indexOf** method searches an array for an element value and returns its position 
```js
<p id="demo"></p>
<script>
  const fruits = ["apple","banana","orange","apple"];
  const position = fruits.indexOf("apple") + 1;
  document.getElementById.innerHTML = position;
</script>
//1
```
---
- **lastIndexOf()** returns the position of the last occurrence of the specified element 
```js
<p id="demo"></p>
<script>
  const fruits = ["banana","apple","orange","apple"];
  const position = fruits.lastIndexOf("apple") +1;
  document.getElementById('demo').innerHTML = position;
</script>
//4
```
---
- **find()** method returns the value of the first array element that passes a test function
```js
<p id="demo"></p>
<script>
  const numbers = [12,34,8,21];
  const first = numbers.find(myfun);
  document.getElementById('demo').innerHTML = first;
  function myfun(value,index,array){
    return value > 18;
  }
</script> 
//21
```
- **findIndex** method returns the index of the first array element that passes a test function 
```js
<p id="demo"></p>
<script>
  const numbers = [12,44,62,5];
  const first = numbers.findIndex(myfun);
  document.getElementById.innerHTML = first;
  function myfun(value,index,array){
    return value > 20;
  }

</script>
//1
```
---
- **Array.from()** method returns an array object from any object with a length property
```js
<p id="demo"></p>
<script>
  const array1 = Array.from("abcd");
  document.getElementById('demo').innerHTML = array1;
</script>
a,b,c,d
```
---
---
- **entries()** method returns an Array Iterator object with key/value pairs
```js
<p id="demo"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const array = fruits.entries();

for (let x of array) {
  document.getElementById("demo").innerHTML += x + "<br>";
}
</script>
0,Banana
1,Orange
2,Apple
3,Mango
```
- **Array.includes()** allows us to check if an element is present in an array 
```js
<p id="demo"></p>
<script>
  const names = ["mark","frank","steven"];
  document.getElementById("demo").innerHTML = names.include("frank");
</script>
//true
```
- JavaScript Array Spread (...)
- "spread" operator spreads elements of iterable objects
```js
<p id="demo"></p>
<script>
  num1 = ["one","two"];
  num2 = ["three","four"];
  num3 = ["five","six"];
  numbers = [ ...num1, ...num2, ...num3];
  document.getElementById.innerHTML = numbers;
</script>
//one,two,three,four,five,six
```
---
---