const mongoose = require("mongoose");

//define connection url
const dbURL = "mongodb://localhost:27017/hotels";

//setup mongodb connect
mongoose.connect(dbURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected Successfully");
});
db.on("error", (err) => {
  console.log("Something went wrong! please check your connection", err);
});

db.on("disconnected", () => {
  console.log("Database is disconnected");
});

module.exports = db;
