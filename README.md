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
