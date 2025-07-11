function outer() {
  let counter = 1;
  return function () {
    counter++;
    return counter;
  };
}
let value = outer();
console.log(value());
console.log(value());
