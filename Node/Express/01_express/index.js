const express = require("express")
const app = express()
const PORT = 3000


app.get("/",(req, res)=>{
    res.status(200).send("This is Home Page")
})

app.get('/tweet', (req,res)=>{
    res.status(200).send("This is tweet page")
})

app.post("/tweet",(req, res)=>{
    res.status(201).end("Your tweet was created")
})



app.listen(PORT,()=>{
    console.log(`App is listening on port no: ${PORT}`)
})