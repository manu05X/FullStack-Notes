const fs = require("fs");

console.log("Before");

// readFile will read a file in a asynchronous manner , So there must be a callback function involved so that we can call these functions
// after the file has been read at the end when our call stack is empty. We do this using the webAPI, eventLoop, Task Queue and micro Task Queue.
// let data1 = fs.readFile('f1.txt');
//giving callback function
let data1 = fs.readFile("f1.txt", (err, data1) => {
  if (err) {
    console.log("Error reading file");
    return err;
  }
  console.log("This is the File 1 Data -> " + data1);
});

console.log("Data from file 1-> " + data1);

console.log("After");
