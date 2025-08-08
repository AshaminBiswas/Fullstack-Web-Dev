const EventEmitter = require("events")

const eventEmitter = new EventEmitter()

//this events can run many times as you emit the event
eventEmitter.on("greet",(username)=>{
    console.log("Event in Node JS", username)
})

//this events run only single time
eventEmitter.once("pushNotify",()=>{
    console.log("This events run only once");
    
})



// Emit the event
eventEmitter.emit("greet", "Ashamin")
eventEmitter.emit("greet", "Ashamin")
eventEmitter.emit("pushNotify")
eventEmitter.emit("pushNotify")
eventEmitter.emit("greet", "Ashamin")
eventEmitter.emit("greet", "Ashamin")

// Output
/**
Event in Node JS Ashamin
Event in Node JS Ashamin
This events run only once
Event in Node JS Ashamin
Event in Node JS Ashamin 
*/



const myListener = () =>console.log("This is a test Listener");
eventEmitter.on("test", myListener)
eventEmitter.emit("test")
//remove the event
eventEmitter.removeListener("test", myListener)
//After Remove a Event you can't access the event
eventEmitter.emit("test")
// Output =====> This is a test Listener
