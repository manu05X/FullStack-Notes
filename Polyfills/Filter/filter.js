// let arr = [1 , 2, 3, 4, ,5 ,6 , 7]

// let resultArray = arr.filter(function(num){
//     return num%2==0
// })

// console.log(resultArray)

// PolyFill for Filter Method

// Starting at 10:37
/*
Array.prototype.myFilter = function (callback) {
    let resultArray = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        resultArray.push(this[i]);
      }
    }
  
    return resultArray;
  
    // 1stloop -> isEven(1) -> false
    // 2ndloop -> isEven(2) -> true
  };
  
  let arr2 = [1, 2, 3, 4, 5, 6, 7];
  
  function isEven(num) {
    return num % 2 == 0;
  }
  
  function isOdd(num) {
    return num % 2 != 0;
  }
  
  let ansArray = arr2.myFilter(isOdd);
  
  console.log(ansArray);
*/

// Step 1: Define a custom myFilter method on the Array prototype
Array.prototype.myFilter = function (callback) {
  // Step 2: Create an empty array to store elements that pass the filter test
  let resultArray = [];

  // Step 3: Loop through each element of the array (using 'this' to refer to the array that called myFilter)
  for (let i = 0; i < this.length; i++) {
    // Step 4: Call the callback function on the current element (this[i])
    // If the callback function returns true, push the element to the resultArray
    if (callback(this[i])) {
      resultArray.push(this[i]); // If true, add element to resultArray
    }
  }

  // Step 5: Return the result array which contains the filtered elements
  return resultArray;

  // Example for clarity:
  // 1st loop -> isEven(1) -> false (1 is not added to resultArray)
  // 2nd loop -> isEven(2) -> true (2 is added to resultArray)
};

// Step 6: Define an array of numbers to test the filter function
let arr2 = [1, 2, 3, 4, 5, 6, 7];

// Step 7: Define a function isEven to check if a number is even
function isEven(num) {
  return num % 2 == 0;
}

// Step 8: Define a function isOdd to check if a number is odd
function isOdd(num) {
  return num % 2 != 0;
}

// Step 9: Call the custom myFilter function on arr2 and pass isOdd as the callback
// This will filter the array and return only odd numbers
let ansArray = arr2.myFilter(isOdd);

// Step 10: Log the result (ansArray will contain the filtered array with only odd numbers)
console.log(ansArray); // Output: [1, 3, 5, 7]

/*
Explanation of the Code:
1. myFilter function: This is a polyfill of JavaScript's built-in filter() method. It's attached to the Array.prototype, so it can be used on any array like the native filter(). The method takes a callback function as its parameter, which determines the filter condition.

2. resultArray: This is an empty array that will store all the elements that pass the condition specified by the callback function.

3. for loop: The loop goes through every element in the array (using this, which refers to the current array calling myFilter).

4. callback(this[i]): For each element, the callback function is executed. If the function returns true, the element is added to the resultArray.

5. Return resultArray: After filtering, the function returns the array containing only the elements that passed the test.

6. isOdd function: This is a simple function that checks if a number is odd. It is used as the callback function in myFilter.

7. Using myFilter: When you call arr2.myFilter(isOdd), the function filters out all even numbers and returns only the odd numbers [1, 3, 5, 7].

Example of how myFilter works:
For the first element 1, isOdd(1) returns true, so 1 is added to resultArray.
For the second element 2, isOdd(2) returns false, so 2 is not added.
This process continues for all elements in the array, resulting in an array of odd numbers: [1, 3, 5, 7].


*/
