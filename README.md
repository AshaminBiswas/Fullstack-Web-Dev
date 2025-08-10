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
``` JavaScript
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
```
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
``` JavaScript
class Chat extends EventEmitter {
    sendMessage(msg) {
        this.emit("Message Received", msg);
    }
}
```

# ⚠️ Error Handling with Events
Node.js EventEmitter has a special error event. If no listener is attached to an emitted error, Node.js will throw and crash. Always listen for errors in production apps.
``` JavaScript
eventEmitter.on("error", (error) => {
    console.error("Error:", error.message);
});
```

# 🧪 Sample Output
- Message sent :  Hello Ashamin
- New Message :  Hello Ashamin
- Error Occurred : Something went wrong

---

# Code
``` JavaScript
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

```


# Node.js Buffer Examples

This document demonstrates various ways to create, manipulate, and work with **Buffers** in Node.js.  
The `Buffer` class is used to handle binary data directly. It is part of Node.js's core modules and does not require additional installation.

---

## Copyable Full Code
<div style="position: relative;">
<pre><code id="buffer-code">

``` JavaScript
const { Buffer } = require("buffer");

// const buf = Buffer.alloc(4)
// console.log(buf)

const buf = Buffer.from("Ashamin Biswas");
// console.log(buf)
// console.log(buf.toString())

const bufTwo = Buffer.allocUnsafe(4);
// console.log(bufTwo);

// allocate memory
const bufThree = Buffer.alloc(4);
// bufThree.write("Hey")
// console.log(bufThree.toString());

const buf4 = Buffer.from("Ashamin Biswas");
// console.log(buf4.toString('utf-8', 0,7)) 

// manipulate the buffer
const buf5 = Buffer.from("Hello");
buf5[0] = 0x4A;

// concat the buffer
const buf6 = Buffer.from("Ashamin");
const buf7 = Buffer.from(" Biswas");
const merge = Buffer.concat([buf6, buf7]);
console.log(merge.toString());
```
</code></pre>
<button onclick="navigator.clipboard.writeText(document.getElementById('buffer-code').innerText)" style="position: absolute; top: 5px; right: 5px; padding: 5px 10px; background: #007acc; color: white; border: none; border-radius: 5px; cursor: pointer;">Copy</button>
</div>

---

## 1. Import the Buffer Module
```javascript
const { Buffer } = require("buffer");
```


2. Creating Buffers
Allocate a Buffer with ``Buffer.alloc(size)``

- Creates a zero-filled buffer of the given size (in bytes).
- Safer than `allocUnsafe` because it clears the old data.


3. Create a Buffer from a String
``` JavaScript
const buf = Buffer.from("Ashamin Biswas");
// console.log(buf);
// console.log(buf.toString());
```

- Stores the string in binary form.
- `.toString()` converts it back to human-readable text.


4. Allocate an Uninitialized Buffer
``` JavaScript
const bufTwo = Buffer.allocUnsafe(4);
// console.log(bufTwo);
```
- Faster than `alloc` because it skips initialization.
- May contain old, sensitive data; always overwrite before using.


5. Allocate and Write into a Buffer
``` JavaScript
const bufThree = Buffer.alloc(4);
// bufThree.write("Hey");
// console.log(bufThree.toString());
```
- Allocates 4 bytes and writes "Hey" into it.


6. Partial Reading from Buffers
``` JavaScript
const buf4 = Buffer.from("Ashamin Biswas");
// console.log(buf4.toString('utf-8', 0, 7));
```
- Reads only a portion of the buffer (from byte index `0` to `7`).


7.  Manipulating Buffer Data
``` JavaScript
const buf5 = Buffer.from("Hello");
buf5[0] = 0x4A; // Changes first byte to 'J'
```
- Directly modifies binary data at a specific index.


8. Concatenating Buffers

``` JavaScript
const buf6 = Buffer.from("Ashamin");
const buf7 = Buffer.from(" Biswas");
const merge = Buffer.concat([buf6, buf7]);
console.log(merge.toString());
```
- Joins multiple buffers into one.
- Output: `Ashamin Biswas`

# Summary
- ```Buffer.alloc(size)``` → Safe, zero-filled memory.
- ```Buffer.allocUnsafe(size)``` → Faster but uninitialized memory.
- ```Buffer.from(data)``` → Create buffer from string, array, or another buffer.
- ```Buffer.concat([...buffers])``` → Merge multiple buffers.
- Direct indexing ```(buf[i])`` → Modify individual bytes.

---

# Node.js HTTP Server

Today, I learned how to create a **basic HTTP server** in Node.js using the built-in `http` module.

## 📚 What I Learned
- How to import the `http` module in Node.js.
- How to create a simple server using `http.createServer()`.
- How to handle incoming requests and send responses.
- How to set response headers and send plain text or JSON data.
- How to listen on a specific port and start the server.

## 💻 Code Example

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
    console.log("I got incoming request");
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('Thanks for Visiting my Server');
});

server.listen(8000, () => {
    console.log(`HTTP server running on port 8000`);
});
```


# ⚙️ How It Works
- `require("http")` – Imports the HTTP module.
- `http.createServer()` – Creates the server and takes a callback `(req, res)` for handling requests.
- `res.writeHead() ` – Sets the HTTP response status and headers.
- `res.end()` – Sends the response body and ends the request.
- `server.listen(8000)` – Starts the server on port 8000.

