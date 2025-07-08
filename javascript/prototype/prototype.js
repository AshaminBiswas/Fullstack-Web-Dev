let computer = { cpu: 8 };
let lenovo = { screen: "HD", __proto__: computer };
let tomHardware = {};

let car = { tyres: 4 };
let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, car);
console.log(Object.getPrototypeOf(tesla));
