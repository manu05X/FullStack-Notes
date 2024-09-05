// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (accumulator, currentElement) {
//   return accumulator + currentElement;
// }, 0);

// console.log(sum);

// Pollyfill of Reduce
// reduce return a single value

// in this we need callback , with accumulator and initial value

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  // accumulator = 0;
  // accumulator = 1;
  // accumulator = 3;
  // accumulator = 6;
  // accumulator = 10;
  // accumulator = 15

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  // first loop - calculateSum(0,1)
  // Second loop - calculateSum(1,2)
  // Third loop - calculateSum(3,3)
  // Fourth loop - calculateSum(6,4)
  // Fifth loop - calculateSum(10,5)

  return accumulator;
};

let arr = [1, 2, 3, 4, 5];

function calculateSum(accumulator, currentElement) {
  return accumulator + currentElement;
  // 0+1 = 1
  // 1+2 = 3
  // 3+3 = 6
  // 6+4 = 10
  // 10+5 = 15
}

let sum = arr.myReduce(calculateSum, 0); // myReduce take a callback and initialvalue so pass it so. calculateSum is callback function and 0 is initialValue .

console.log(sum);

/*
// Step 1: Define a custom myReduce method on the Array prototype
Array.prototype.myReduce = function (callback, initialValue) {
  // Step 2: Initialize an accumulator with the provided initialValue
  let accumulator = initialValue;

  // Step 3: Loop through each element of the array (using 'this' to refer to the array that called myReduce)
  for (let i = 0; i < this.length; i++) {
    // Step 4: Apply the callback function on the accumulator and the current element (this[i])
    // Update the accumulator with the result of the callback function
    accumulator = callback(accumulator, this[i]);
  }

  // Step 5: Return the final accumulated value after the loop ends
  return accumulator;
};

// Step 6: Define an array of numbers to test the myReduce function
let arr = [1, 2, 3, 4, 5];

// Step 7: Define a callback function that will be used in myReduce to calculate the sum
function calculateSum(accumulator, currentElement) {
  // Step 8: Add the currentElement to the accumulator and return the result
  return accumulator + currentElement;
}

// Step 9: Call the custom myReduce function on the array 'arr' and pass the calculateSum function as the callback
// We also provide 0 as the initialValue for the accumulator, which means the summing starts from 0
let sum = arr.myReduce(calculateSum, 0);

// Step 10: Output the result (sum will be the sum of all elements in the array, which is 15)
console.log(sum); // Output: 15

*/
/*
  
Explanation of the Code:
1. myReduce method: This is a polyfill of JavaScript's built-in reduce() method, added to the Array.prototype, which allows you to call it on any array. The myReduce function takes two parameters:

2. callback: A function that is called on each element of the array and accumulates a result.
initialValue: The starting value for the accumulator.

3.Accumulator:
An accumulator variable (accumulator) is initialized with the initialValue provided by the user. This accumulator will store the cumulative result of applying the callback on each array element.
In this case, the initial value is 0 because we want to sum the elements of the array.

4. Loop:
The loop iterates over each element of the array (using this[i]), and for each iteration, the callback function is applied to the current accumulator value and the current element of the array.
The accumulator is updated with the result of the callback function.

5. Callback Function calculateSum:
The calculateSum function takes two arguments: the accumulator and the currentElement. It simply adds the currentElement to the accumulator and returns the result.
This callback is passed to myReduce to sum up all the elements in the array.

6. Calling myReduce:
When arr.myReduce(calculateSum, 0) is called, it sums all the elements in the array starting with an accumulator value of 0. The callback function calculateSum is invoked for each element of the array, and the final sum is returned.

Result:
The final sum of the array [1, 2, 3, 4, 5] is calculated as 1 + 2 + 3 + 4 + 5 = 15, and this value is printed as the output.
Example of how myReduce works on [1, 2, 3, 4, 5]:
Initial accumulator value: 0
calculateSum(0, 1) → accumulator becomes 1
calculateSum(1, 2) → accumulator becomes 3
calculateSum(3, 3) → accumulator becomes 6
calculateSum(6, 4) → accumulator becomes 10
calculateSum(10, 5) → accumulator becomes 15
The final sum is 15, which is the result printed by console.log(sum).
  */
