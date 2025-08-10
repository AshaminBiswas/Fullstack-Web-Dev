const http = require("node:http")

const server = http.createServer((req,res)=>{
    console.log(`Got a request at [${Date.now()}]`)
    // console.log(req.headers)
    res.writeHead(200)
    
    switch (req.url) {
        case '/':
           
           return res.end("You are In Home Page ")
            
        case '/about':
           
           return res.end("You are In About Page ")
        case '/contact':
            
           return res.end("You are In Contact Page ")
        default:
            
            res.end('Not Found !')
            break;
    }
})


server.listen(8000,()=>{
    console.log(`Server is listening on Port no: 8000`)
})