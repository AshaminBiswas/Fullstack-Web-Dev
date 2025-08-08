const ChatRoom  = require("./chatRoom.js")
const chat = new ChatRoom()


chat.on('join', (user)=>{
    console.log(`${user} has Joined The Chat`)
})

chat.on('message', (user, message)=>{
    console.log(`${user} : ${message}`)
})

chat.on('leave', (user)=>{
    console.log(`${user} has Leave The Chat`)
})

// simulating the chat
chat.join("ashamin")
chat.join("ashim")


chat.sendMessage("ashamin", "hey Ashamin is send the message")
chat.sendMessage("ashim", "hey Ashim is send the message")

chat.leave("ashamin")
chat.sendMessage("ashamin", "this message wont be sent")
chat.leave("ashim")