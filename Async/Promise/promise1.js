//Syntax of Promise

// let myPromise = new Promise(function (resolve, reject) {});

// console.log(myPromise);

// let myPromise = new Promise(function (resolve, reject) {
//   const a = 4;
//   const b = 4;

//   if (a === b) {
//     resolve("Yes A and B are equal");
//   } else {
//     reject("A and B are not equal");
//   }
// });

// console.log(myPromise);

let newPromise = new Promise((resolve, reject) => {
  let arr = [2, 4, 6];
  if (arr.length == 3) {
    resolve(arr.length);
  } else {
    reject("not resolved");
  }
});

console.log(newPromise);
