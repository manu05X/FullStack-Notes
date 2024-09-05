// add three numbers

// we need to add 2 to every argument and then sum everything

// function add(a ,b , c ){
//     return a+b+c
// }

// console.log(add(1 , 2 ,3))

/*

function fn1(a) {
  return function fn2(b) {
    return function fn3(c) {
      return a + b + c;
    };
  };
}

// let fn2Return = fn1(1);
// let fn3 = fn2Return(2);
// let sum = fn3(3);

// we can directly return it as below

let sum = fn1(3)(4)(5);

console.log(sum);

*/
//________________________________________________________________________________________________________________________________
// we need to add 2 to every argument and then sum everything

// function add(a ,b , c ){
//     return a+b+c
// }

// console.log(add(1 , 2 ,3))

// add(1 ,2,3 ) // 6

// add(1)(2)(3)

//
//________________________________________________________________________________________________________________________________
/*
//Interview question
//Q1>
// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2

//Soln
// function calculate(operation) {
//   return function (a) {
//     return function (b) {
//       console.log(operation, a, b);
//     };
//   };
// }

// calculate("Sum")(1)(2); // Output: Sum 1 2

// Now we can write the Operation in if else statements
function calculate(operation) {
  return function (a) {
    return function (b) {
      if (operation == "Sum") return a + b;
      else if (operation == "Substrat") return a - b;
      else if (operation == "multiply") return a * b;
      else if (operation == "divide") return a / b;
      else return "Invalid operation";
    };
  };
}

var x = calculate("Substrat")(1)(2);

console.log(x);

// function calculate(operation){
//     return function (a){
//         return function(b){
//             if(operation ==="sum") return a+b
//             else if(operation=='substract') return a-b
//             else if(operation=='multiply') return a*b
//             else if(operation=='divide') return a/b
//             else return 'Invalid Operation'
//         }
//     }
// }

// console.log(calculate('multiply')(1)(2))
*/
//________________________________________________________________________________________________________________________________

/*
// Q3 Infinite Currying Links : https://dev.to/soumavabanerjee/function-currying-javascript-questions-2jnm

// write an add function which can add values like this

// add(2)(3)(4)(5)(6)(7)(8)...........()

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)(3)(4)(5)());

// a=1, b= 2,, a = 3, b=3 ,, a=6,b=4,, a=10, b= 5,, a=15
*/
//________________________________________________________________________________________________________________________________

// Partial Application : Partial application is when you fix some arguments of a function and get a new function that takes fewer arguments.

function addPartial(a, d) {
  return function (b, c) {
    return function (f, g, h) {
      return a + b + c + d + f + g + h;
    };
  };
}

console.log(addPartial(1, 2)(3, 4)(4, 5, 6));

// Currying - whenever you create a function pass one arg to it at a time

/*
Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a series of functions, each taking one argument at a time. Instead of passing all arguments at once, you pass them one by one, and each intermediate function returns a new function that expects the next argument.

The main idea is that a function with multiple arguments can be broken down into a sequence of unary functions, which each take one argument and return a new function, ultimately resulting in the desired output.

Without Currying (Regular Function)
function add(x, y, z) {
  return x + y + z;
}

console.log(add(1, 2, 3)); // Output: 6


With Currying

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

console.log(add(1)(2)(3)); // Output: 6

In the curried version, the function add is broken down into a sequence of functions, each returning another function that takes the next argument until all arguments have been provided.

How Currying Works
The first function takes the first argument and returns another function.
The second function takes the second argument and returns another function.
The third function takes the third argument and returns the result of the computation.
Benefits of Currying
Reusability: You can create specialized versions of the function by pre-filling some of the arguments (partial application).

Example:
const addFive = add(5);
console.log(addFive(10)(15)); // Output: 30
Modularity: It breaks down a multi-argument function into smaller pieces, allowing for better composition of functions.

Delaying Execution: You can delay function execution until all arguments are available.

Functional Programming: Currying is a core concept in functional programming, where functions are treated as first-class citizens.

Example with Practical Use Case
Suppose you have a function that multiplies two numbers, and you want to create a partially applied function for multiplication by 2:
f
unction multiply(x) {
  return function(y) {
    return x * y;
  };
}

const multiplyByTwo = multiply(2);

console.log(multiplyByTwo(5)); // Output: 10


Here, multiplyByTwo is a partially applied function that multiplies any number by 2.

Currying vs Partial Application
Currying transforms a function that takes multiple arguments into a chain of functions that take one argument at a time.
Partial application is when you fix some arguments of a function and get a new function that takes fewer arguments.
Summary
Currying is a powerful functional programming technique that transforms a function with multiple arguments into a series of nested functions that each take one argument. It allows for flexibility, reusability, and composition of functions, which is especially useful in functional programming.









*/
