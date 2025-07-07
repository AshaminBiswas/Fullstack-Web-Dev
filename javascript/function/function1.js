function hello(name) {
  console.log(`hello ${name}`);
}
// hello("ashamin");

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirm for tea`;
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

const calculate = (prise, quantity) => {
  return prise * quantity;
};

let totalCost = calculate(499, 100);
// console.log(totalCost);

function makeTea(teaType) {
  return `make tea: ${teaType}`;
}
function processTeaOrder(teaFn) {
  return teaFn("earl gray");
}

let order = processTeaOrder(makeTea);
// console.log(order);

function createTeaMaker() {
  return function (teaType) {
    return `making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);
