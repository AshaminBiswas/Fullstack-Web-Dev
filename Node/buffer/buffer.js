const {Buffer} = require("buffer")

// const buf = Buffer.alloc(4)
// console.log(buf)


const buf = Buffer.from("Ashamin Biswas")
// console.log(buf)
// console.log(buf.toString())


const bufTwo = Buffer.allocUnsafe(4)
// console.log(bufTwo);



// allocate  memory
const bufThree = Buffer.alloc(4)
// write value in to the memory
// bufThree.write("Hey")
// console.log(bufThree.toString());


const buf4 = Buffer.from("Ashamin Biswas")
// console.log(buf4.toString('utf-8', 0,7)) 



//manipulate the buffer
const buf5 = Buffer.from("Hello")
buf5[0] = 0x4A

//concat the buffer
const buf6 = Buffer.from("Ashamin")
const buf7 = Buffer.from(" Biswas")
const marge = Buffer.concat([buf6, buf7])
console.log(marge.toString())




