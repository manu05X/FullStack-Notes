// What is this async Keyword

// async keyword always returns a Promise
// async function greeting() {
//   return "Hello"; // 1st case
// }

// let message = greeting();

// message.then((res) => console.log(res));

// console.log(message);

//________________________________________________________________
// New Promise

// let newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved successfully");
//   }, 4000);
// });

// function executePromise() {
//   newPromise.then((res) => console.log(res));

//   console.log("Promise is executePromise in this function!!");
// }

// executePromise();

//____using await to resolve Promise____________________________________________________________

// let newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 Resolved successfully");
//   }, 4000);
// });

// function executePromise() {
//   newPromise.then((res) => console.log(res));

//   console.log("Promise is executePromise in this function!!");
// }

// async function executePromiseAsync() {
//   const val1 = await newPromise; // waits here for 4 seconds for promise to execute then below statement is executed
//   console.log(val1);
//   console.log("Promise is executePromiseAsync using await");
// }

//executePromise();

/*
Promise is executePromise in this function!!
// after 4 seconds below is printed
Promise Resolved successfully
*/

// executePromiseAsync();
/*
//Both the below is printed adter 4seconds at same time
Promise Resolved successfully
Promise is executePromiseAsync using await

*/

//____using await to resolve two Promise to see the effect____________________________________________________________

let newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 Resolved successfully");
  }, 4000);
});

let newPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 Resolved Successfully");
  }, 6000);
});

// function executePromise() {
//   newPromise.then((res) => console.log(res));

//   console.log("Promise is executePromise in this function!!");
// }

// async function executePromiseAsync() {
//   const val1 = await newPromise; // waits here for 4 seconds for promise to execute then below statement is executed
//   console.log(val1);

//   const val2 = await newPromise2;
//   console.log(val2);
//   console.log("Promise is executePromiseAsync using await");
// }

// //executePromise();

// /*
// Promise is executePromise in this function!!
// // after 4 seconds below is printed
// Promise Resolved successfully
// */

// executePromiseAsync();
/*
//Both the below is printed adter 4seconds at same time
Promise Resolved successfully
Promise is executePromiseAsync using await

*/

// //Scaler is Awesome
// //Promise resolved messaseg after 4 secs

async function executePromiseAsync() {
  console.log("Hello");

  const val1 = await newPromise; // suspended
  console.log(val1); // 8

  const val2 = await newPromise2;
  console.log(val2); // 12

  //  both after 6 secs

  console.log("Scaler is Awesome from Async Function");
}
console.log("Statment outside async function");
//executePromise(); // output

executePromiseAsync();
