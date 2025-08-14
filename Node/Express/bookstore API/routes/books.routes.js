const express = require('express')
const router = express.Router()

const {BOOKS} = require('../db/db')


// Routes
// simple get route
router.get("/", (req, res) => {
  res.setHeader("x-AB", "Ashamin Biswas");
  res.status(200).json(BOOKS);
});



// parametrizes route
router.get("/:id", (req, res) => {
  //there i use parseInt() for convert the data in to integer because when you accept any value from the URL it is in String Type
  const id = parseInt(req.params.id);

  // this is a check the data type clint send in the url
  if (isNaN(id))
    res.status(400).json({ error: "The Parameter Only Accept Integer Value" });

  //there i find the id in the database. (its Not actual database, its dummy data for testing)
  const book = BOOKS.find((item) => item.id === id);
  if (!book) {
    return res.status(404).send(`Book Is Not Found In the DataBase ${id}`);
  } else {
    return res.json(book);
  }
});




// This is a Post rout. there user can store BOOKS in the data base
router.post("/", (req, res) => {
  // extract the data from body
  const { title, author } = req.body;

  //this is the validation check for title and author
  if (!title || title === "")
    return res.status(400).json({ error: "title is required" });
  if (!author || author === "")
    return res.status(400).json({ error: "author is required" });

  const id = BOOKS.length + 1;
  // create the object for get data
  const book = { id: id, title, author };
  BOOKS.push(book);
  // console.log(BOOKS)
  return res.status(201).json({ message: "Book Created Successfully", id: id });
});



// Delete a single book base on the id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) res.status(400).json({ error: "The id is Not Valid" });

  //find the id in the database
  const index = BOOKS.findIndex((item) => item.id === id);

  //check the id
  if (index <= -1) res.status(404).json({ error: "Not Found" });

  //delete the book
  BOOKS.splice(index, 1);

  return res.status(200).json({message:"Book Deleted"})
});





module.exports = router


