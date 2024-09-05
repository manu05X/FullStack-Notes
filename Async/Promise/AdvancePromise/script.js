// console.log("Start");

// function printName(name) {
//   setTimeout(() => {
//     return `My name is ${name}`;
//   }, 3000);
// }

// let message = printName("Steve");  // it runs and then and there

// console.log(message);

// console.log("End");
/*
OUTPUT:
Start
undefined
End

As printName is normal function not async and setTimeout will be retuening after 3 second but before that only printName is executed 
and message is assigned the value of printName as undefined as till that point the value of printName is undefined as setTimeout is waiting 
for 3 seconds to complete and return the value of printName.

To solve this problem we can add a callback 

*/

/*
console.log("Start");

function printName(name, cb) {
  setTimeout(() => {
    cb(`My name is ${name}`);
  }, 1000);
}

function callback(resultName) {
  console.log(resultName);
}

let message = printName("Steve", callback); // it runs and then and there

//console.log(message);

console.log("End");

*/

/*
OUTPUT:
Start
End
My name is Steve

*/

/*
console.log("Start");

function printName(name, cb) {
  setTimeout(() => {
    cb(`My name is ${name}`);
  }, 1000);
}

let message = printName("Steve", function (resultName) {
  console.log(resultName);
}); // it runs and then and there

console.log("End");

*/

//________________________________________________________________________________________________________________________________

// Callback hell

function Action1(name, cb) {
  setTimeout(() => {
    cb(`My name is ${name}`);
  }, 2000);
}

function Action2(age, cb) {
  setTimeout(() => {
    cb(`My age is ${age}`);
  }, 1000);
}

function Action3(occupation, cb) {
  setTimeout(() => {
    cb(`I am a ${occupation}`);
  }, 3000);
}

// Action1("Steve", function (resultName) {
//   console.log(resultName);
// });

// Action2(24, function (age) {
//   console.log(age);
// });

// Action3("Software Engineer", function (resultName) {
//   console.log(resultName);
// });

/*
// Mapping the Action to work in serial order
Action1("Steve", function (resultName) {
  console.log(resultName);
  Action2(24, function (age) {
    console.log(age);
    Action3("Software Engineer", function (occupation) {
      console.log(occupation);
    });
  });
});
*/

// Callback hell or The primadal of Doom : https://www.scaler.com/topics/callback-hell-in-javascript/

// Action1("Steve", function (name) {
//   console.log(name); // steve
//   Action2(24, function (age) {
//     console.log(age);
//     Action3("Software Engineer", function (occupation) {
//       console.log(occupation);
//       Action4("Software Engineer", function (occupation) {
//         console.log(occupation);
//         Action4("Software Engineer", function (occupation) {
//           console.log(occupation);
//           Action4("Software Engineer", function (occupation) {
//             console.log(occupation);
//           });
//         });
//       });
//     });
//   });
// });

/*

// Promisified Functions

function Action1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My name is ${name}`);
    }, 2000);
  });
}

function Action2(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`My age is ${age}`);
    }, 3000);
  });
}

function Action3(occupation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am a ${occupation}`);
    }, 1000);
  });
}

// Promise Hell : Solving above using below will lead to promise Hell  not good way to solve
// Action1("Steve").then((name) => {
//   console.log(name);
//   Action2.then((res) => {
//     console.log(res);
//     Action3.then((res) => {
//       console.log(res);
//     });
//   });
// });

// Promise Chaining : This is a way to solve callback hell

Action1("Steve")
  .then((name) => {
    console.log(name);
    return Action2(24);
  })
  .then((age) => {
    console.log(age);
    return Action3("Software Engineer");
  })
  .then((occupation) => {
    console.log(occupation);
  })
  .catch((err) => {
    console.log(err);
  });

  */
/*
Output: 
My name is Steve
My age is 24

The issue you're encountering is because the promise returned by Action2(24) is rejected due to the reject() call in the Action2 function. Once a promise is rejected, the execution flow immediately jumps to the catch() block, skipping any subsequent .then() calls.


The issue you're encountering is because the promise returned by Action2(24) is rejected due to the reject() call in the Action2 function. Once a promise is rejected, the execution flow immediately jumps to the catch() block, skipping any subsequent .then() calls.

Let's break down the flow:

Code Walkthrough:
1> Action1 is called with "Steve":
    After 2 seconds, it resolves the promise with the message "My name is Steve".
    The .then() block receives this value and prints: My name is Steve.

2> Action2 is called with 24:
    After 3 seconds, it rejects the promise with the message "My age is 24".
    Since the promise is rejected, the control moves directly to the .catch() block, and the message "My age is 24" is printed as an error.
    The promise chain is interrupted, so Action3 never runs.
    
3> The code does not proceed to Action3 because once a promise is rejected, the remaining .then() blocks are skipped, and execution jumps to the .catch() block.


The message about the occupation is never printed because the promise chain is interrupted by the rejection from Action2.
How to Fix It:
If you want the chain to continue even when a rejection occurs, you can handle the error and proceed. 
One option is to modify the Action2 logic to resolve instead of reject, or handle errors for specific actions without breaking the chain.

Action1("Steve")
  .then((name) => {
    console.log(name);
    return Action2(24);
  })
  .then((age) => {
    console.log(age);
    return Action3("Software Engineer");
  })
  .then((occupation) => {
    console.log(occupation);
  })
  .catch((err) => {
    console.log(err);  // Handle the error
    return Action3("Software Engineer");  // Continue to Action3 even after error
  })
  .then((occupation) => {
    console.log(occupation);  // This will now run regardless
  });


*/

// Promisified Functions

function Action1(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My name is ${name}`);
    }, 2000);
  });
}

function Action2(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`My age is ${age}`); // made it resolve insted of reject
    }, 3000);
  });
}

function Action3(occupation) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am a ${occupation}`);
    }, 1000);
  });
}

// Promise Hell : Solving above using below will lead to promise Hell  not good way to solve
// Action1("Steve").then((name) => {
//   console.log(name);
//   Action2.then((res) => {
//     console.log(res);
//     Action3.then((res) => {
//       console.log(res);
//     });
//   });
// });

// Promise Chaining : This is a way to solve callback hell

Action1("Steve")
  .then((name) => {
    console.log(name);
    return Action2(24);
  })
  .then((age) => {
    console.log(age);
    return Action3("Software Engineer");
  })
  .then((occupation) => {
    console.log(occupation);
  })
  .catch((err) => {
    console.log(err);
  });

/*
 output: 
 
My name is Steve
My age is 24
I am a Software Engineer


 */

// Promise Combinators

// .all , .race , .allSettled , .any

// Action1("Steve");
// Action2(24);
// Action3("Software Engineer");

// Promise.all

// Promise.all([Action1("Steve"), Action2(24), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });

// Promise.race

// Promise.race([Action1("Steve"), Action2(24), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });

// Promise.allSettled

// Promise.allSettled([Action1("Steve"), Action2(24), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.err("Error Promise Rejected : " + err)
// });

// Promise.race([Action2(24) ,Action1("Steve"), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });

// // Promise.any

// Promise.any([Action2(24), Action1("Steve"), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });

// Promise.all Polyfill

// inputs must be promises and they should be inside a array
// Takes Promise
// Resolves each promise one by one
// Provides the Final Ouput in a Array
// Return fullfilled values inside an Array
// then(resolve , reject)

/*
  Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
      let results = [];
  
      if (!promises.length) {
        resolve(results);
        return;
      }
  
      let pending = promises.length;
  
      promises.forEach((promise, idx) => {
        Promise.resolve(promise).then((res) => {
          results[idx] = res;
          pending--;
  
          if (pending === 0) {
            resolve(results);
          }
        }, reject);
      });
    });
  };
  
  Promise.allPolyfill([
    Action1("Steve"),
    Action2(24),
    Action3("Software Engineer"),
  ]).then(
    (res) => {
      console.log(res);
    },
    function (err) {
      console.log('Error:' , err);
    }
  );
  
  */

// map filter reduce forEach
// Call apply Bind
// Promise.all
