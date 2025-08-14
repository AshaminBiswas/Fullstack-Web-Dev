const express = require("express");
const router = express.Router();

//import books controllers
const {
  allBooksController,
  singleBooksController,
  addBooksController,
  deleteBooksController,
} = require("../controller/book.controller");

// Routes
router.get("/", allBooksController);
router.get("/:id", singleBooksController);
router.post("/", addBooksController);
router.delete("/:id", deleteBooksController);

//exports routes
module.exports = router;
