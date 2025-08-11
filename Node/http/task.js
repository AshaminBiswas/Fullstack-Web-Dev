const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;
  const log = `${Date.now().toLocaleString()} : ${method} : ${path} \n`;
  fs.appendFileSync("log.txt", log, "utf-8");
  switch (method) {
    case "GET": {
      switch (path) {
        case "/":
          return res.writeHead(200).end("Hello from Home Page ");

        case "/contact-us":
          return res
            .writeHead(200)
            .end(`{name:"ashamin biswas", email:"ashamin@gmail.com"}`);

        case "/tweet":
          return res.writeHead(200).end("This is your tweet");
      }
      break;
    }

    case "POST": {
      switch (path) {
        case "/tweet":
          return res.writeHead(201).end("your tweet is created");
        default:
          break;
      }
    }
    default:
      res.writeHead(404).end("Not Found");
  }
});

server.listen(8000, () => {
  console.log("server is running on port no : 8000");
});
