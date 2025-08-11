//create a book Store

const express  = require("express")
const app = express()
const PORT = 8000

// this is my in memory database
const books = [
    {
        id:1,
        title:"Book One",
        author:"Author One"
    },
    {
        id:2,
        title:"Book Two",
        author:"Author Two"
    },
]



// Routes
// simple get route
app.get("/books",(req, res)=>{
    res.setHeader("x-AB", "Ashamin Biswas")
    res.status(200).json(books)
})


// parametrizes route
app.get("/books/:id",(req, res)=>{
    //there i use parseInt() for convert the data in to integer because when you accept any value from the URL it is in String Type
    const id = parseInt(req.params.id)

    // this is a check the data type clint send in the url
    if(isNaN(id)) res.status(400).json({error:"The Parameter Only Accept Integer Value"})

    //there i find the id in the database. (its Not actual database, its dummy data for testing)
    const book = books.find((item)=>item.id === id)
    if (!book) {
        return res.status(404).send(`Book Is Not Found In the DataBase ${id}`)
    }else{
        return res.json(book)
    }
    
})




app.listen(PORT,()=>{
    console.log(`App is listening on : ${PORT}`);
})