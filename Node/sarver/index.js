// // console.log("server");
// // import { test } from "./test.js";
// var test = require("./test.js");
// function add(a, b, callback) {
//   var result = a + b;
//   console.log(result);
//   callback();
// }

// // add(2, 6, function callback() {
// //   console.log("I am a call back");
// // });

// // add(4, 6, () => console.log("I am a callback"));

// const fs = require("fs");
// const os = require("os");
// const lodash = require("lodash");

// let user = os.userInfo();
// // console.log(user);

// fs.appendFile("greeting.txt", "Hi " + user.username + "!\n", () => {
//   console.log("file is created");
// });

// // console.log(os);

// const data = ["ashamin", 1, 2, 3, 1, 2, 3, "2", "ashamin", "lok"];
// console.log(data);
// const filterData = lodash.uniq(data);
// // console.log(filterData);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to / Rout");
});

app.get("/chicken", (req, res) => {
  res.send("This is Chicken Page");
});

app.get("/user", (req, res) => {
  let user = {
    name: "Ashamin",
    role: "frontend developer",
    isFresher: true,
  };
  res.send(user);
});

app.listen(3000, () => {
  console.log("port is running on port no " + 3000);
});
