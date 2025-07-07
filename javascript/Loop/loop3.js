/*
Question 1
*/

let arr = ["mango", "banana", "orange", "guava", "apple"];
let sortedArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "orange") {
    break;
  }
  sortedArr.push(arr[i]);
}
// console.log(sortedArr);

/*
Question2
*/

let cities = ["kolkata", "delhi", "noida", "mumbai", "chennai"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "noida") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

/*
  Question3 using for of
*/

let numbers = [1, 2, 3, 4, 5, 6, 7];
let newNum = [];

for (const i of numbers) {
  if (i === 5) {
    break;
  }
  newNum.push(i);
}
// console.log(newNum);

/*
Question4
*/
let tea = ["herbal tea", "green tea", "black tea", "orange the"];
let favoriteTea = [];

for (const i of tea) {
  if (i === "black tea") {
    continue;
  }
  favoriteTea.push(i);
}
// console.log(favoriteTea);

/*
Question 5
*/

let citiesPopulation = {
  kolkata: 15545554,
  delhi: 454541545,
  mumbai: 54876445,
  chennai: 458796633,
  pune: 21241244554,
};

let cityPopulations = {};

for (const key in citiesPopulation) {
  if (key === "mumbai") {
    break;
  }
  cityPopulations[key] = citiesPopulation[key];
}
// console.log(cityPopulations);

/*
Question6
*/
let num = [1, 2, 3, 4, 5, 6, 7];
let newNums = [];

num.forEach((i) => {
  if (i === 6) {
    return;
  }
  // newNums.push(i);
});
// console.log(newNum);

num.forEach((i) => {
  if (i === 6) {
    return;
  }
  newNums.push(i);
});

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let multNum = [];

for (let i = 1; i <= number.length; i++) {
  if (number[i] === 7) {
    continue;
  }
  let mult = i * 2;
  multNum.push(mult);
}
// console.log(multNum);

let fullNames = [
  "ashamin biswas",
  "ashim kumar mondol",
  "hasanjur jamman",
  "soumen das",
  "abhijit bala",
];
let sortedNames = [];

for (const names of fullNames) {
  if (names.length < 12) {
    break;
  }
  sortedNames.push(names);
}
console.log(sortedNames);
