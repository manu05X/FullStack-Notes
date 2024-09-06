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

// function Action1(name, cb) {
//   setTimeout(() => {
//     cb(`My name is ${name}`);
//   }, 2000);
// }

// function Action2(age, cb) {
//   setTimeout(() => {
//     cb(`My age is ${age}`);
//   }, 1000);
// }

// function Action3(occupation, cb) {
//   setTimeout(() => {
//     cb(`I am a ${occupation}`);
//   }, 3000);
// }

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

  */

/*
 output: 
 
My name is Steve
My age is 24
I am a Software Engineer


 */
//________________________________________________________________________________________________________________________________

// Now we can use Promise Combinators to resolve the promise in a more efficient way
// Promise Combinators

// 1> Promise.all , 2> Promise.race ,3>  Promise.allSettled , 4> Promise.any

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

// Promisify the callback functions
function promisifyAction1(name) {
  return new Promise((resolve) => {
    Action1(name, resolve); // Passing resolve as the callback
  });
}

function promisifyAction2(age) {
  return new Promise((resolve, reject) => {
    Action2(age, resolve);
  });
}

function promisifyAction3(occupation) {
  return new Promise((resolve) => {
    Action3(occupation, resolve);
  });
}
/*
// Promise.all; https://dmitripavlutin.com/promise-all/#google_vignette

// Using Promise.all with the promisified functions
Promise.all([
  promisifyAction1("Steve"),
  promisifyAction2(24),
  promisifyAction3("Software Engineer"),
]) //passing Action promise as array and make a then call using Promise all
  .then((res) => {
    console.log(res); // Logs an array of results
  })
  .catch((err) => {
    console.log(err);
  });
*/
//________________________________________________________________________________________________________________________________

// Promise.race : Promise.race() waits for the first promise in the array to settle (either resolved or rejected), and it immediately returns the result of that first settled promise. It does not wait for the other promises to resolve or reject, unlike Promise.all(), which waits for all promises to resolve.

// Promise.race([
//   promisifyAction1("Steve"), // This takes 2000ms to resolve
//   promisifyAction2(24), // This takes 1000ms to resolve
//   promisifyAction3("Software Engineer"), // This takes 3000ms to resolve
// ])
//   .then((res) => {
//     console.log(res); // Logs the result of the first settled promise
//   })
//   .catch((err) => {
//     console.log(err); // Logs the first error if any promise is rejected
//   });
/*
Why Only One Promise is Resolved:
1. In your example, the second promise (promisifyAction2(24)) is resolved the fastest because it is wrapped around Action2, which resolves after 1000ms.
2. Since Promise.race() resolves or rejects as soon as any of the promises settles (in this case, the second one after 1000ms), it logs the result of the fastest promise: "My age is 24".
3. The other promises (promisifyAction1 and promisifyAction3) are still pending, but they are ignored because Promise.race() only returns the result of the first settled promise.


*/
//________________________________________________________________________________________________________________________________

/* Promise.allSettled:
When all promises have settled, it returns an array of objects. Each object has two properties:
1> status: Either "fulfilled" if the promise was resolved, or "rejected" if it was rejected.
2> value or reason:
    If the promise was fulfilled, it includes the resolved value in the value property.
    If the promise was rejected, it includes the reason for rejection in the reason property.

*/
// Promise.allSettled([
//   promisifyAction1("Steve"), // Takes 2000ms
//   promisifyAction2(24), // Takes 1000ms
//   promisifyAction3("Software Engineer"), // Takes 3000ms
// ])
//   .then((results) => {
//     console.log(results); // Logs the outcome of all promises
//   })
//   .catch((err) => {
//     console.err("Error Promise Rejected : " + err);
//   });

/*
 It give the status of all promises , along with the result value of all promises in an array. Even if a promise is rejected.
 [
  { status: 'fulfilled', value: 'My name is Steve' },
  { status: 'fulfilled', value: 'My age is 24' },
  { status: 'fulfilled', value: 'I am a Software Engineer' }
]
  //for rejected promise
 [
  { status: 'fulfilled', value: 'My name is Steve' },
  { status: 'rejected', reason: 'My age is 24' },
  { status: 'fulfilled', value: 'I am a Software Engineer' }
]
Unlike Promise.race(), Promise.allSettled() doesn't stop when the first promise settles. It waits for every single promise in the array to complete, no matter the outcome, and returns the result for each.
 */

//________________________________________________________________________________________________________________________________

// Promise.race([Action2(24) ,Action1("Steve"), Action3("Software Engineer")]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// });

/*
Promise.any() takes an array of promises and returns the first promise that resolves.
It ignores rejected promises as long as at least one promise resolves.
If none of the promises resolve (i.e., all reject), it returns a special AggregateError indicating that all promises were rejected.

Why Only the First Resolved Promise Matters:
Promise.any() only cares about the first successfully resolved promise. It will not wait for other promises to resolve or reject once one has succeeded.
This is useful when you are looking for the fastest successful result and don't care if some of the other promises fail.
*/

Promise.any([
  promisifyAction1("Steve"), // Takes 2000ms to resolve
  promisifyAction2(24), // Takes 1000ms to resolve
  promisifyAction3("Software Engineer"), // Takes 3000ms to resolve
])
  .then((res) => {
    console.log(res); // Logs the first resolved value
  })
  .catch((err) => {
    console.error("All promises rejected:", err);
  });

//________________________________________________________________________________________________________________________________

// Promise.all Polyfill

// 1> inputs must be promises and they should be inside a array
// 2> Takes Promise
// 3> Resolves each promise one by one
// 4> Provides the Final Ouput in a Array
// 5> Return fullfilled values inside an Array
// 6> then(resolve , reject)

// Polyfill for Promise.all
// Step 1: Define the polyfill for Promise.all()
// Promise.allPolyfill is a function that takes an array of promises
Promise.allPolyfill = (promises) => {
  // Step 2: Return a new promise which will resolve or reject based on the input promises
  return new Promise((resolve, reject) => {
    // Step 3: Create an array to store the resolved results
    let results = [];

    // Step 4: Check if the input array is empty
    // If no promises are provided, resolve immediately with an empty array
    if (!promises.length) {
      resolve(results);
      return;
    }

    // Step 5: Track how many promises are still pending resolution
    let pending = promises.length;

    // Step 6: Loop over each promise in the input array
    promises.forEach((promise, idx) => {
      // Step 7: Use Promise.resolve() to handle non-promise values and ensure they are treated as promises
      Promise.resolve(promise)
        .then((res) => {
          // Step 8: Once a promise is resolved, store the result in the results array at the corresponding index
          results[idx] = res;

          // Step 9: Decrease the pending count as one promise is resolved
          pending--;

          // Step 10: If all promises have been resolved (i.e., pending count is zero), resolve the main promise
          if (pending === 0) {
            resolve(results); // Step 11: Resolve the final promise with the array of results
          }
        })
        .catch((err) => {
          // Step 12: If any promise rejects, immediately reject the main promise
          reject(err);
        });
    });
  });
};

// Step 13: Test the polyfill with example promises
Promise.allPolyfill([
  Action1("Steve"), // Action1 returns a promise for name
  Action2(24), // Action2 returns a promise for age
  Action3("Software Engineer"), // Action3 returns a promise for occupation
]).then(
  (res) => {
    // Step 14: If all promises are resolved, this block is executed
    console.log(res); // This will log the array of resolved values
  },
  function (err) {
    // Step 15: If any promise is rejected, this block is executed
    console.log("Error:", err); // Log the error if any of the promises failed
  }
);

/*
Explanation and Steps:
1> Inputs must be promises and should be inside an array:
The Promise.allPolyfill() function expects an array of promises to work on. It uses .forEach() to iterate over each promise in the array.

2> Takes Promises:
We loop over the array using forEach(), handling each promise with Promise.resolve() to make sure even non-promise values (if passed) are treated as promises.

3> Resolves each promise one by one:
For each promise, the .then() method is used to capture its resolved value, and this value is stored in the results array at the appropriate index.

4> Provides the Final Output in an Array:
Once all the promises are resolved (tracked by the pending variable), the final array of resolved values is passed to resolve().

5> Return fulfilled values inside an Array:
The function finally resolves with the array of results after all promises are resolved. If any promise fails, the reject() is called immediately.

6> then(resolve, reject):
After calling Promise.allPolyfill(), the .then() method is used to handle both the successful case (when all promises are fulfilled) and the failure case (if any promise rejects).

This code replicates the functionality of the native Promise.all().

*/

// map filter reduce forEach
// Call apply Bind
// Promise.all

/*

The key difference between Promise.any() and Promise.race() lies in how they handle resolved and rejected promises:

1. Promise.any():
Behavior: Resolves as soon as any promise resolves (ignoring rejections). If all promises are rejected, it throws an AggregateError.
Key Point: It only fails if all promises reject.
Use Case: When you want the first successful result and don't care about rejections unless they all fail.
Example:

Promise.any([
  Promise.reject("Error in P1"),
  Promise.resolve("Result from P2"),
  Promise.resolve("Result from P3"),
])
  .then((res) => {
    console.log(res); // "Result from P2" (first resolved)
  })
  .catch((err) => {
    console.error(err); // Only if all promises reject
  });

2. Promise.race():
Behavior: Resolves or rejects as soon as any promise settles (either resolves or rejects).
Key Point: It cares about the first settled promise, whether it's a resolve or a reject.
Use Case: When you want the result of the first completed promise, regardless of whether it resolves or rejects.

Example:

Promise.race([
  Promise.reject("Error in P1"),  // Rejects first
  Promise.resolve("Result from P2"),
  Promise.resolve("Result from P3"),
])
  .then((res) => {
    console.log(res); // Won't be called because P1 rejected first
  })
  .catch((err) => {
    console.error(err); // "Error in P1" (first settled)
  });


_______________Key Differences:________________________________________________________________________________________________________________________________
Aspect	                |    Promise.any()	                                    |     Promise.race()
________________________________________________________________________________________________________________________________________________________________
Resolution Criteria	    |    Resolves with the first fulfilled promise	        | Resolves or rejects with the first settled promise
Rejection Handling	    |   Rejects only if all promises are rejected	          | Rejects as soon as any promise rejects
Error on all rejection	| Throws an AggregateError if all promises are rejected	| Returns the first rejection as soon as it happens
Use Case	              | When you want the first successful result	            | When you want the first result, whether success or failure
_______________________________________________________________________________________________________________________________________________________________

*/
