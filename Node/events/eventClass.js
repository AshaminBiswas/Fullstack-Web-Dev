
const EventEmitter = require("events")


// event driven architecture
// class Chat extends EventEmitter{
//     sendMessage(msg){
//         console.log("Message sent : ", msg);
//         this.emit("Message Received", msg)
//     }
// }

// const chat = new Chat()
// chat.on("Message Received",(msg)=>{
//     console.log("New Message : ", msg);
// })

// chat.sendMessage("Hello Ashamin")

// Output
// Message sent :  Hello Ashamin
// New Message :  Hello Ashamin



//Error handling

// const eventEmitter = new EventEmitter()
// eventEmitter.on('error', (error)=>{
//     console.error(`Error Occurred : ${error.message}`)
// })
// // eventEmitter.emit('error', new Error("Something went wrong"))




class Chat extends EventEmitter{
    sendMessage(message){
        console.log(`Message Send : ${message}`)
        this.emit("messageReceived", message)
    }

}

const chatM = new Chat()
chatM.on("messageReceived",(message)=>{
    console.log(`New Message : ${message}`)
})

//trigger event
chatM.sendMessage("Ashamin Biswas")



const eventEmitter = new EventEmitter()

eventEmitter.on('error',(err)=>{
    console.error(`Error Occurred : ${err}`)
})

eventEmitter.emit('error', new Error("Something Went Wrong"))