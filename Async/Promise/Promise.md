# Understanding Promise Objects and Their Operations

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It serves as a placeholder for a value that will be resolved in the future.

## States of a Promise

A promise can be in one of the following states:

Pending: The initial state, where the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise now has a resolved value.
Rejected: The operation failed, and the promise now has a reason for the failure.
A promise is considered settled if it is either fulfilled or rejected, meaning it is no longer pending.

### Resolved vs. Unresolved

A promise is resolved if it is settled or if it has been "locked in" to match the state of another promise.
An unresolved promise is always in the pending state.

## Key Concepts and Operations

### 1. PromiseCapability Record

A PromiseCapability record encapsulates a promise object along with the functions that can resolve or reject that promise. It includes:

[[Promise]]: The promise object itself.
[[Resolve]]: A function to resolve the promise.
[[Reject]]: A function to reject the promise.
This record is created using the NewPromiseCapability operation.

### 2. IfAbruptRejectPromise

This is a shorthand for handling errors that may occur during promise operations. If a value is an abrupt completion (e.g., an error), it rejects the promise using the [[Reject]] function from the PromiseCapability record.

### 3. PromiseReaction Record

A PromiseReaction record contains information on how a promise should react when it is resolved or rejected. It includes:

[[Capabilities]]: The capabilities of the promise (including resolve and reject functions).
[[Handler]]: A function or a string ("Identity" or "Thrower") that determines how the promise reacts.

### 4. CreateResolvingFunctions

This operation creates a pair of functions ([[Resolve]] and [[Reject]]) that are used to settle a promise. These functions ensure that the promise can only be settled once.

### 5. Promise Reject/Resolve Functions

Promise Reject Function: When called, it rejects the promise unless the promise has already been settled.
Promise Resolve Function: When called, it resolves the promise unless it has already been settled. If the resolution value is another promise, it will wait for that promise to settle.

### 6. FulfillPromise

This operation changes the state of a promise from pending to fulfilled and triggers the reactions associated with the fulfillment.

### 7. NewPromiseCapability

This operation creates a new PromiseCapability record by using a constructor function. It initializes a promise object and sets up the resolve and reject functions.

### 8. GetCapabilitiesExecutor Function

This function sets up the resolve and reject functions for a promise capability. It ensures that these functions are only set once.

### 9. RejectPromise

This operation rejects a pending promise and triggers the associated rejection reactions.

### 10. IsPromise

This operation checks if a given value is a promise by verifying the presence of the [[PromiseState]] internal slot.

### 11. TriggerPromiseReactions

This operation triggers the reactions associated with a promise (e.g., calling the appropriate handlers for fulfillment or rejection).

### 12. PromiseReactionTask

This task handles the execution of the reaction function and its result, resolving or rejecting the derived promise accordingly.

### 13. ResolvePromiseViaThenableTask

This task resolves a promise using a thenable (an object or function that behaves like a promise) by calling its then method.

## The Promise Constructor

The Promise constructor initializes a new promise object using an executor function. The executor function is responsible for starting some asynchronous work and then resolving or rejecting the promise once the work is done.

- **InitialisePromise:** This operation initializes a promise's internal state and sets up its fulfill and reject reactions.

### Properties of the Promise Constructor

- **Promise.all:** Returns a promise that resolves when all of the promises in the iterable argument have resolved, or rejects if any of the promises in the iterable reject.

## Example

**1. Basic Example of a Promise**

Here's a basic example of how a Promise object is created and handled:

```JS
// Create a new Promise
let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulating a condition

  if (success) {
    resolve("The operation was successful!"); // Fulfilled
  } else {
    reject("The operation failed!"); // Rejected
  }
});

// Handle the Promise
myPromise
  .then((message) => {
    console.log("Success: " + message); // Handle fulfillment
  })
  .catch((error) => {
    console.log("Error: " + error); // Handle rejection
  });

```

## Summary

Promises provide a powerful way to handle asynchronous operations in JavaScript. They encapsulate the state of an operation and provide a structured way to handle success and failure cases through their various methods and internal operations. Understanding the internal workings, such as PromiseCapability, PromiseReaction, and the role of the Promise constructor, allows for more advanced use and troubleshooting of promises in JavaScript.

> Link to the reference :

a> https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

b> https://github.com/domenic/promises-unwrapping/tree/master
