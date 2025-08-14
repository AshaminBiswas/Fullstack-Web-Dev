//create a book Store API, A practice Small Project

const express = require("express");
const router = require('./routes/books.routes')
const {loggerMiddleware} = require('./middleware/logger')

const app = express();
const PORT = 8000;




// Middleware (Plugin) this is a builtin middleware
app.use(express.json());
app.use(loggerMiddleware)




//routes
app.use('/books',router)







app.listen(PORT, () => {
  console.log(`App is listening on : ${PORT}`);
});
