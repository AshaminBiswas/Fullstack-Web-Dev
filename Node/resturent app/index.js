const express = require("express");
const app = express();
const port = 3000;
const db = require("./db.js");
const person = require("./models/person.js");
const menu = require("./models/menu.js");
const bodyParser = require("body-parser");
const menuItem = require("./models/menu.js");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is Home rout");
});

app.get("/person", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data fetched Successfully");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/menu", async (req, res) => {
  try {
    const menuItems = await menu.find();
    console.log("menuItemData Fetched Successfully");
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/menu", async (req, res) => {
  try {
    const menus = req.body;
    const menuItems = new menu(menus);
    const menuItemData = await menuItems.save();
    console.log("menuItemData is saved");
    res.status(200).json(menuItemData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const personData = new person(data);
    const savedPersonData = await personData.save();
    console.log("data saved");
    res.status(200).json(savedPersonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
});

app.listen(port, () => {
  console.log(`The app is listening on port no : ${port} `);
});
