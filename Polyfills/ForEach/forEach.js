// ForEach will never return a array. It returns single elements independently.
//const names = ["Mark", "Steve", "John", "Luke"];

// names.forEach(function (ele) {
//   //console.log(ele);
//   /*
//     Mark
//     Steve
//     John
//     Luke
//   */

//   console.log(ele + 2);
//   /*
//     Mark2
//     Steve2
//     John2
//     Luke2
//   */
// });

// // But if it was a map then it would be an array with elements would be returned

// const namesResult = names.map(function (ele) {
//   return ele;
// });

// console.log(namesResult); //[ 'Mark', 'Steve', 'John', 'Luke' ]

//________________________________________________________________

// const names = ["Mark", "Steve", "John", "Luke"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //prototype access of arrays

// Array.prototype.myForEach = function () {
//   console.log(this); // here this refers to the array on which its is called
// };

// names.myForEach(); // names of arrays ["Mark", "Steve", "John", "Luke"];

// numbers.myForEach(); // numbers array [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
Explanation:
Prototype Access:
Array.prototype allows you to add methods to all array instances. By adding myForEach to the Array.prototype, this method can now be called by any array (e.g., names and numbers).

The this Keyword:
Inside the myForEach method, this refers to the array that calls the method. In JavaScript, when a method is called on an object, the this keyword refers to that object.
Since names and numbers are arrays, when you call names.myForEach(), this refers to the names array. Similarly, when you call numbers.myForEach(), this refers to the numbers array.

*/
//________________________________________________________________

/*
// Polyfull of ForEach
//1> we need an Array
//2> Take a callback function loop through the array
//3> A Loop gets the element one by one

// Functions Shadowing
//Here we cannot use the functionName (Array.prototype.functionName) same as the Array.prototype because the original Array.prototype function will be overwritten by the new function
//so we should take any other name for custome function that we create. Here we use myForEach 


//1>
const names = ["Mark", "Steve", "John", "Luke"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//prototype access of arrays

Array.prototype.myForEach = function (callback) {
  // the callback function will take cb function as argument
  //loop through the array that calls the myForEach method
  //3>
  for (let i = 0; i < this.length; i++) {
    //this callback will send each element to the callback function
    callback(this[i]);

    // callback -> take cb function as argument
    // cb -> takes each element as argument
    // now cb -> console.log its arguments
  }
};
//2>
//write the callback function
function cb(argument) {
  console.log(argument);
}

//names.myForEach(cb); // names of arrays ["Mark", "Steve", "John", "Luke"];

numbers.myForEach(cb); // numbers array [1, 2, 3, 4, 5, 6, 7, 8, 9];

*/

//1>
const names = ["Mark", "Steve", "John", "Luke"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//prototype access of arrays
Array.prototype.myForEach = function (callback) {
  //3>
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

//2>
function cb(argument) {
  console.log(argument);
}

//names.myForEach(cb); // names of arrays ["Mark", "Steve", "John", "Luke"];

numbers.myForEach(cb); // numbers array [1, 2, 3, 4, 5, 6, 7, 8, 9];
