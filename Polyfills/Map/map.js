/*

1> Creating a polyfill for Array.prototype.map
2>  Callback
3> Loop
4> 


*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// my custiom map function taht takes a callback function as an argument
Array.prototype.myMap = function (callback) {
  let resultantArray = [];

  for (let i = 0; i < this.length; i++) {
    resultantArray.push(callback(this[i]));
  }

  return resultantArray;
};

// this a function that returns square and thake input an element this is used as callback
// Step 2: Ensure the callback is a function.
function square(num) {
  return num * num;
}

let finalArray = arr.myMap(square);

console.log(finalArray);

*/

// Step 1: Define an array of numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Add a custom map function that takes a callback function
Array.prototype.myMap = function (callback) {
  // Create an empty array to store the results
  let resultantArray = [];

  // Step 3: Loop through the array (this refers to the array calling myMap)
  for (let i = 0; i < this.length; i++) {
    // Step 4: Push the result of the callback function applied to each element into the result array
    resultantArray.push(callback(this[i]));
  }

  // Step 5: Return the new array with transformed values
  return resultantArray;
};

// Step 6: Define a callback function that takes an element and returns its square
function square(num) {
  return num * num;
}

// Step 7: Call the custom myMap function and pass the square function as the callback
let finalArray = arr.myMap(square);

// Step 8: Print the final array
console.log(finalArray);
