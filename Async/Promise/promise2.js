const fs = require("fs");

console.log("before");

//________________________________________________________________
// 1> with callback function
// fs.readFile("f1.txt", (err, data1) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("This is File 1 data ->" + data1);
// });

//________________________________________________________________

//2>  the callback function
// const cb = (err, data1) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("This is File 1 data ->" + data1);
// };
// //with callback function
// fs.readFile("f1.txt", cb);

//________________________________________________________________

// let promiseReadFile1 = fs.promises.readFile("f1.txt");

// promiseReadFile1.then(function (data1) {
//   console.log("the file data is ->" + data1);
// });

// promiseReadFile1.catch(function (err) {
//   console.log(err);
// });

// let promiseReadFile2 = fs.promises.readFile("f2.txt");

// promiseReadFile2.then(function (data2) {
//   console.log("the file data is ->" + data2);
// });

// promiseReadFile2.catch(function (err) {
//   console.log(err);
// });

// let promiseReadFile3 = fs.promises.readFile("f3.txt"); // this will give error as no f3.txt file exists
// // let promiseReadFile3 = fs.promises.readFile("f2.txt");

// // Error handling is not graceful here. The catch block is not just after then so it exits abnormally
// promiseReadFile3.then(function (data2) {
//   console.log("the file data is ->" + data2);
// });

// promiseReadFile3.catch(function (err) {
//   console.log(err);
// });

// Error handling gracefully as soon as the file is not found the catch block will be executed
// promiseReadFile3
//   .then(function (data1) {
//     console.log("the file data 3 is ->" + data1);
//   })
//   .catch(function (err) {
//     console.log("Error Statement -> " + err);
//   });

//________________________________________________________________

let promiseReadFile1 = fs.promises.readFile("f1.txt");
let promiseReadFile2 = fs.promises.readFile("f2.txt");
let promiseReadFile3 = fs.promises.readFile("f3.txt");

function readFileCallback(data) {
  console.log("The File data -> " + data);
}

function handleError(err) {
  console.log("Error Statement -> " + err);
}

promiseReadFile1.then(readFileCallback).catch(handleError);
promiseReadFile2.then(readFileCallback).catch(handleError);
promiseReadFile3.then(readFileCallback).catch(handleError);

/*
OUTPUT: 
before
After
Error Statement -> Error: ENOENT: no such file or directory, open 'f2.txt'
Error Statement -> Error: ENOENT: no such file or directory, open 'f3.txt'
The File data -> This is Data is from File 1.

*/
// error are printed as soon as they are encounter before a promise is successfully resolved

// The Promise response is handled by MicroTask Queue as the promise is given more priority than the normal callbacks.

console.log("After");
