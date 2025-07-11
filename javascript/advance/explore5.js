const data = {
  name: "ashamin",
  greet() {
    console.log(this.name);
  },
};
data.greet();

let newData = data.greet; // ill provide the context to this variable function, but it dose not have the context
newData();

let newDataOne = data.greet.bind({ name: "Hasan" });
newDataOne();
