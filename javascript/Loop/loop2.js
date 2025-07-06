/*
start a loop with 5 to 1 and then create an array and push the elements in a array
*/

let countDown = [];
let i = 5;

while (i >= 1) {
  countDown.push(i);
  i--;
}
// console.log(countDown);

/*
  Do while
*/

let arr = [];
let tea;

// do {
//   // tea = prompt("enter Your favorite tea");
//   if (tea !== "stop") {
//     arr.push(tea);
//   }
// } while (tea !== "stop");

let num = 0;
let j = 1;
do {
  num += j;
  j++;
} while (j <= 3);
// console.log(num);

/*
For Loop

multiply each element
*/

let mult = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  // let newNum = numbers[i] * 2;
  // mult.push(newNum);
  mult.push(numbers[i] * 2);
}
// console.log(mult);

let city = ["mumbai", "kolkata", "delhi"];
let cityList = [];
for (let i = 0; i < city.length; i++) {
  cityList.push(city[i]);
}
console.log(cityList);
