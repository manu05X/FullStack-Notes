const fs = require("fs");

console.log("Before");

let data1 = fs.readFileSync("f1.txt");

console.log("Data from file 1-> " + data1);
// if f1 is a large file so our callstack will be frozen till this point as its busy in reading the file. All other activities will
// be blocked until this point. As this is a synchronous operation of reading the file.
//To avoid this problem we use Async readFile that will be a non blocking operation

console.log("After");

/*
Before
This is the File 1 Data -> Hi from File 1 and this is My DATA.
After
*/
