const mongoose = require("mongoose");

//define connection url
// const dbURL = "mongodb://localhost:27017/hotels";

const MONGO_PASSWORD = "ashamin1";
const MONGO_URL = `mongodb+srv://ashamin_1:${MONGO_PASSWORD}@restapp.dowwhkt.mongodb.net/?retryWrites=true&w=majority&appName=RestApp`;

//setup mongodb connect
mongoose.connect(MONGO_URL);

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
