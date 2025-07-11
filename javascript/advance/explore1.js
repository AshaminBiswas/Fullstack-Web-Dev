console.log("asynchronous");

function sayHi() {
  console.log("hi everyone");
}
setTimeout(() => {
  sayHi();
}, 4000);

for (let i = 0; i <= 4; i++) {
  console.log(i);
}
