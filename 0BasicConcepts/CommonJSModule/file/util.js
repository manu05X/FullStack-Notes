//This line imports Node.js's built-in "fs" (File System) module, which provides functions for interacting with the file system, such as reading and writing files.
const fs = require("fs");

//http request :

/*1. Async http
    - Node can work on other things
    - while OS waits for the network requests
    - In asynchronous operations, Node.js can continue executing other code while the operating system (OS) waits for the network request to complete. 
    This non-blocking nature is a core feature of Node.js, allowing it to handle many I/O operations concurrently without waiting for each to finish.

 2. Sync httpsSync
  // - Node and OS both are waiting for the request
  In synchronous operations, both Node.js and the OS wait for the request to complete before moving on to the next line of code. 
  This is blocking, meaning that no other code can execute until the request is done.
*/

/*1->
function createFile(name, contents){
    fs.writeFile(name,contents)
    console.log('File written') // file content may not be available
}

-> The function createFile is defined, taking two parameters: name (the name of the file) and contents (the data to be written into the file).
-> fs.writeFile(name, contents) is called, which attempts to write contents to a file named name.
-> This operation is asynchronous, meaning that the code continues to execute without waiting for the file to be written. 
    If you want to be sure that the file has been written before continuing, you should use a callback function or a Promise.
-> console.log('File written') is called immediately after the write operation is initiated, but since the operation is asynchronous, 
    this message may appear in the console before the file is actually written. The comment notes this by stating "file content may not be available."
*/

//2->
function createFile(name, contents) {
  fs.writeFileSync(name, contents);
  console.log("File written"); // file content must be available as it is Sync
}
/*
The createFile function is defined with the same parameters: name and contents.
-> fs.writeFileSync(name, contents) is called, which writes contents to a file named name.
-> This operation is synchronous, meaning Node.js will wait until the file has been fully written before moving to the next line of code.
-> console.log('File written') is executed after the file has been written, ensuring that the file content is available by the time this message is logged. The comment confirms this, stating "file content must be available as it is Sync."
*/

module.exports = {
  createFile,
};

/*
This code exports the createFile function so it can be used in other files.
Line 25: The createFile function is added to the module.exports object. This 
*/
