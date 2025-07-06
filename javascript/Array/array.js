/*
Declare an array and store some element  and print it
access the first element
*/

let tea = ["orange tea", "black tea"];
// console.log(tea[0])
// console.log(tea);

//another way to declare an array but it not the good practice

let anotherTea = new Array("orange tea", "black tea");
// console.log(anotherTea);

let cites = ["delhi", "kolkata", "mumbai", "noida"];
let favCity = cites[2];
// console.log(favCity);

/**
 Array.push()
 its add element at last index in a Array
 */
let citesVisited = ["mumbai", "sydney"];
citesVisited.push("berlin");
// console.log(citesVisited);

/**
 Array.pop()
 its remove the last element form an Array
 */

let num = [1, 2, 3, 4, 5];
num.pop();
// console.log(num);//[ 1, 2, 3, 4 ]

/**
 make a soft copy an Array.
 if i manipulate the original array the its effect the soft copy
 because of the memory reference.
 */

let num1 = [1, 2, 3, 4, 5, 6, 7];

let newNum1 = num1;
num1.pop();
// console.log(num1);//[ 1, 2, 3, 4, 5, 6 ]
// console.log(newNum1); //[ 1, 2, 3, 4, 5, 6 ]

/**
 Make a hard copy an Array

 */

let num2 = [1, 2, 3, 4, 5]; // spread operator
let newNum2 = [...num2];
let newArr = num2.slice();

/**
 marge two Array in a single Array
 */

let num3 = [1, 2, 3];
let num4 = [4, 5, 6];
let num5 = num3.concat(num4);

/**
  find the Array length and store in a variable
  */

let num6 = [1, 2, 3, 4, 5, 6, 7];
let num7 = num6.length;
// console.log(num7);

/*
  find a element for an array and store it in variable
*/

let num8 = [1, 2, 3, 4, 5, 6, 7];
let num9 = num8.includes(5);
