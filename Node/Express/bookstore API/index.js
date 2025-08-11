//create a book Store API, A practice Small Project

const express = require("express");
const app = express();
const PORT = 8000;

// this is my in memory database
const books = [
  {
    id: 1,
    title: "Book One",
    author: "Author One",
  },
  {
    id: 2,
    title: "Book Two",
    author: "Author Two",
  },
];

// Middleware (Plugin) this is a builtin middleware
app.use(express.json());

// Routes
// simple get route
app.get("/books", (req, res) => {
  res.setHeader("x-AB", "Ashamin Biswas");
  res.status(200).json(books);
});

// parametrizes route
app.get("/books/:id", (req, res) => {
  //there i use parseInt() for convert the data in to integer because when you accept any value from the URL it is in String Type
  const id = parseInt(req.params.id);

  // this is a check the data type clint send in the url
  if (isNaN(id))
    res.status(400).json({ error: "The Parameter Only Accept Integer Value" });

  //there i find the id in the database. (its Not actual database, its dummy data for testing)
  const book = books.find((item) => item.id === id);
  if (!book) {
    return res.status(404).send(`Book Is Not Found In the DataBase ${id}`);
  } else {
    return res.json(book);
  }
});

// This is a Post rout. there user can store books in the data base
app.post("/books", (req, res) => {
  // extract the data from body
  const { title, author } = req.body;

  //this is the validation check for title and author
  if (!title || title === "")
    res.status(400).json({ error: "title is required" });
  if (!author || author === "")
    res.status(400).json({ error: "author is required" });

  const id = books.length + 1;
  // create the object for get data
  const book = { id: id, title, author };
  books.push(book);
  // console.log(books)
  return res.status(201).json({ message: "Book Created Successfully", id: id });
});

// Delete a single book base on the id
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) res.status(400).json({ error: "The id is Not Valid" });

  //find the id in the database
  const index = books.findIndex((item) => item.id === id);

  //check the id
  if (index <= -1) res.status(404).json({ error: "Not Found" });

  //delete the book
  books.splice(index, 1);

  return res.status(200).json({message:"Book Deleted"})
});




app.listen(PORT, () => {
  console.log(`App is listening on : ${PORT}`);
});
