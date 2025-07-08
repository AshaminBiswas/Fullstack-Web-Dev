function Greet(name, age) {
  this.name = name;
  this.age = age;
}

let myGreet = new Greet("ashamin", 23);
// console.log(myGreet);

let fGreen = new Greet("hasan", 25);
// console.log(fGreen);

function MakeTea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a Cup of ${this.type}`;
  };
}

let blackTea = new MakeTea("Black tea");
// console.log(blackTea.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} make a sound`;
};
let dog = new Animal("dog");
console.log(dog.sound());
