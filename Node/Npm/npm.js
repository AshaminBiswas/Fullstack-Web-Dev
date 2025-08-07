const fs = require("node:fs")

//read file
const content = fs.readFileSync("note.txt","utf-8")
console.log(content);

//write/create file with file over write content
fs.writeFileSync("copy.txt", "this is copied file", "utf-8")

//create file without overwrite content
fs.appendFileSync("copy.txt", "\nThis is Copied file.", "utf-8")

//for create a folder, ({recursive:true} for if the path is not exist then it create automatically: other wise its give you error)
fs.mkdirSync("game/bgmi", {recursive:true})

//for delete file 
fs.unlinkSync("note.txt")

//for delete directory
fs.rmdirSync("./game")