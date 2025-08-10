const http = require("http")
const server = http.createServer((req, res)=>{
    console.log("I got incoming request")
    res.writeHead(200,{'Content-Type' : 'application/json'})
    res.end('Thanks for Visiting my Server')
})







server.listen(8000,()=>{
    console.log(`http server running on port 8000`);
    
})