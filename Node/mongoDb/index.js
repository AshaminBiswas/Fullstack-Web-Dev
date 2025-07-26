// console.log("i an index.js");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("this is Home page");
});

app.get("/kolkata", (req, res) => {
  res.send("This is Kolakata");
});

app.get("/delhi", (req, res) => {
  res.send("This is Delhi");
});

app.post("/kolkata", (req, res) => {
  res.send("data is saved");
});

app.listen(port, () => {
  console.log(`This app listening on port no: ${port}`);
});
