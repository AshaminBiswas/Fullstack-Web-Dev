# Node.js File System Module Example

This project demonstrates basic file system operations in Node.js using the built-in `fs` module. It includes reading, writing, appending, deleting files, and creating/removing directories.

## Features

1. **Read File**
   - Reads the contents of `note.txt` synchronously.
   - Uses `fs.readFileSync()` method with UTF-8 encoding.

2. **Write/Create File**
   - Creates a file named `copy.txt` and writes the text `"this is copied file"` into it.
   - Uses `fs.writeFileSync()` which **overwrites** the file if it already exists.

3. **Append to File**
   - Appends `"\nThis is Copied file."` to the end of `copy.txt`.
   - Uses `fs.appendFileSync()` which adds content without overwriting.

4. **Create Directory**
   - Creates a nested folder structure `game/bgmi`.
   - Uses `fs.mkdirSync()` with `{ recursive: true }` to ensure parent directories are created if they don't exist.

5. **Delete File**
   - Deletes the file `note.txt` using `fs.unlinkSync()`.

6. **Delete Directory**
   - Removes the `game` directory using `fs.rmdirSync()`.

## Requirements

- Node.js installed on your system.

## How to Run

1. Place a file named `note.txt` in the same directory with some sample text.
2. Run the script using the command:

   ```bash
   node index.js

---
# Node.js EventEmitter Example

This project demonstrates how to use Node.js `EventEmitter` for handling custom events, including persistent (`.on()`), single-time (`.once()`), and removing listeners (`removeListener()`).

---

# 📚 What You’ll Learn
- Creating an event emitter instance

- Using .on() to listen to events multiple times

- Using .once() to listen to an event only once

- Emitting events with .emit()

- Removing a specific event listener with removeListener()

---

# 📁 Code Example
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// This event can run many times as you emit the event
eventEmitter.on("greet", (username) => {
    console.log("Event in Node JS", username);
});

// This event runs only a single time
eventEmitter.once("pushNotify", () => {
    console.log("This events run only once");
});

// Emit the event multiple times
eventEmitter.emit("greet", "Ashamin");
eventEmitter.emit("greet", "Ashamin");
eventEmitter.emit("pushNotify");
eventEmitter.emit("pushNotify");
eventEmitter.emit("greet", "Ashamin");
eventEmitter.emit("greet", "Ashamin");

// Output:
// Event in Node JS Ashamin
// Event in Node JS Ashamin
// This events run only once
// Event in Node JS Ashamin
// Event in Node JS Ashamin

// Add a custom listener and then remove it
const myListener = () => console.log("This is a test Listener");
eventEmitter.on("test", myListener);
eventEmitter.emit("test");

// Remove the event
eventEmitter.removeListener("test", myListener);

// After removing the event, it won't trigger
eventEmitter.emit("test");

---

# Output:
// This is a test Listener

Event in Node JS Ashamin
Event in Node JS Ashamin
This events run only once
Event in Node JS Ashamin
Event in Node JS Ashamin
This is a test Listener

---

<h1>After removing the "test" event listener:</h1>
(nothing logs for "test" event)

# Summary

| Feature         | Method              | Description                           |
| --------------- | ------------------- | ------------------------------------- |
| Add Listener    | `.on()`             | Responds every time event is emitted  |
| Add Once        | `.once()`           | Responds only the first time          |
| Emit Event      | `.emit()`           | Triggers the event with optional data |
| Remove Listener | `.removeListener()` | Stops the listener from responding    |

---


# Node.js EventEmitter - Chat & Error Handling Example

This project demonstrates how to implement custom event-driven architecture using Node.js `EventEmitter`. It includes:

- A `Chat` class that emits and listens to messages.
- Basic error handling using the `error` event.

----

# 🧠 Concepts Covered
✅ Custom Class with EventEmitter
- You can extend the EventEmitter class to create your own event-driven modules.
- Useful for building systems like chat apps, notifications, real-time updates, etc.

class Chat extends EventEmitter {
    sendMessage(msg) {
        this.emit("Message Received", msg);
    }
}


# ⚠️ Error Handling with Events
Node.js EventEmitter has a special error event. If no listener is attached to an emitted error, Node.js will throw and crash. Always listen for errors in production apps.

eventEmitter.on("error", (error) => {
    console.error("Error:", error.message);
});


# 🧪 Sample Output
- Message sent :  Hello Ashamin
- New Message :  Hello Ashamin
- Error Occurred : Something went wrong

---

# Code

const EventEmitter = require("events");

// Event-driven architecture using a custom class
class Chat extends EventEmitter {
    sendMessage(msg) {
        console.log("Message sent : ", msg);
        this.emit("Message Received", msg);
    }
}

const chat = new Chat();

// Listener for "Message Received"
chat.on("Message Received", (msg) => {
    console.log("New Message : ", msg);
});

// Triggering the message (uncomment to run)
// chat.sendMessage("Hello Ashamin");

// Expected Output:
// Message sent :  Hello Ashamin
// New Message :  Hello Ashamin


// Error Handling Example
const eventEmitter = new EventEmitter();

eventEmitter.on("error", (error) => {
    console.error(`Error Occurred : ${error.message}`);
});

// Triggering an error event
eventEmitter.emit("error", new Error("Something went wrong"));

// Expected Output:
// Error Occurred : Something went wrong
