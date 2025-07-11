function Father(name) {
  this.name = name;
}
Father.prototype.child = function () {
  console.log(`my name is ${this.name}`);
};
let ashamin = new Father("ashamin");
ashamin.child();
