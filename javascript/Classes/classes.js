/*
Inharitence
*/

class Friend {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  friend() {
    return `${this.name} is my Friend And the is ${age} Year Old.`;
  }
}

class Me extends Friend {
  me() {
    return `my friend is ${this.name}`;
  }
}

let Test = new Me("hasan", 25);
// console.log(Test.me());

/*
Encapsulation
*/

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();

// console.log(account.getBalance());

/*
Abstruction
*/

class CoffeeMachine {
  start() {
    return `starting the machine`;
  }

  brewCoffee() {
    return `brewCoffee`;
  }

  pressTheButton() {
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return ` ${msg1} : ${msg2}`;
  }
}

let coffee = new CoffeeMachine();
// console.log(coffee.pressTheButton());

/*
Polymorphism
*/

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguin Can't Fly...`;
  }
}
let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());
