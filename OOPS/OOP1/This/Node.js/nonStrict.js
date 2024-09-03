/*
In a Node.js Environment:
When you log this in the global scope of a Node.js script, it points to an empty object {}. This is because, in Node.js, the global context (this) inside a module is not the global object (as it is in the browser). Instead, it refers to the module itself, which is an empty object initially.
In a Browser Environment:
In contrast, in a browser, this in the global scope refers to the window object, which represents the global object containing all the global variables and functions.


*/
//Point to the empty object when try to use in global space.
console.log(this);

/*
In a Non-Strict Mode Function:

In non-strict mode, when a function is called in the global context, this inside that function refers to the global object. In Node.js, the global object is called global, and it contains various built-in functions and properties like setTimeout, setInterval, etc.
*/

// This inside the function
function test() {
  console.log(this);
}

test();
/*
Summary
Global this in Node.js: Refers to an empty object {} when logged directly in the global scope.
Function this in Node.js (Non-Strict Mode): Refers to the global object, which contains all the global functions and properties.
*/
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*

In JavaScript, method call rules determine what value this takes on when a function is invoked. Specifically, when you call a function as a method of an object, the value of this inside that function is set to the object on which the method was invoked. Here's a breakdown of what this means:

Method Call Rule in JavaScript
Method Call Rule
When you invoke a function as a method of an object, the this keyword inside the function will refer to the object on which the method was called.

Key Points of the Method Call Rule:
1> Method Call: If a function is invoked as a method of an object, this inside that function refers to the object on which the method was called.


let obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name); // `this` refers to `obj`
  }
};

obj.greet(); // Output: Alice

Here, this inside the greet method refers to obj, because greet is called as a method of obj.

2> Invocation Context: The value of this is dynamically determined based on the object on which the method is called. It’s set to the object on the left side of the method call.

Example:
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

function greet() {
  console.log(this.name);
}

obj1.greet = greet;
obj2.greet = greet;

obj1.greet();  // Output: 'Alice'
obj2.greet();  // Output: 'Bob'

In this example, greet is assigned to both obj1 and obj2, so when greet is called as obj1.greet(), this refers to obj1, and when called as obj2.greet(), this refers to obj2.

How It Works?
Method Invocation: When you call a function as a method of an object, the function is invoked with a context that is set to the object.
obj.greet(); // `obj` is the context for `this` inside greet

`this` inside greet refers to obj.
Function Execution Context:

When obj.greet() is executed, JavaScript sets up a new execution context for greet.
During the creation phase of this context, the this keyword is assigned the value of obj.
Example with obj2:
let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this);  // (1)
    function g() {
      console.log(this);  // (2)
    }
    g();  // (3)
  },
};

obj2.testFunction(); // (4)

Explanation:

At (1): testFunction is called as obj2.testFunction(). According to the method call rule, this inside testFunction is set to obj2. So, console.log(this); logs obj2.

At (2): Inside testFunction, a nested function g() is defined and invoked. Since g is a regular function and not called as a method of any object, this in g defaults to the global object (global in Node.js or window in a browser) in non-strict mode.

At (3): When g() is invoked, it logs this which refers to the global object due to the lack of an explicit object context.

At (4): The testFunction method is executed, showing that this inside it refers to obj2.

Method Call Rule Summary
When a function is invoked as a method of an object, the value of this is the object that the function is a method of.
This behavior ensures that methods can access and manipulate the properties of the object they belong to.
If you want to retain the value of this from a method, using bind(), call(), or apply() is helpful. Alternatively, arrow functions can be used to capture this from the lexical scope.



*/

let obj = {
  name: "ABCD",
  age: "23",
  getPrintInfo: function () {
    console.log(this);
  },
};

/*
1. Object Definition
obj is an object with two properties: name and age, and one method getPrintInfo.
2. Method getPrintInfo
getPrintInfo is a method defined on the obj object. Inside this method, this refers to the object obj itself.
*/

obj.getPrintInfo();
/*
When you call obj.getPrintInfo(), the getPrintInfo method is executed, and this inside the method refers to the object obj because the method was invoked as a property of the object.
*/

let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this);
    function g() {
      const a = 2;
      const b = 3;
      const sum = a + b;
      console.log(sum);
      console.log(this);
    }
    g();
  },
};

obj2.testFunction();

/*
Understanding Execution Context in JavaScript
What is Execution Context?
An execution context is an abstract concept that holds information about the environment within which the current code is being executed. It contains variables, objects, and the value of the this keyword that the code can access.

There are mainly two types of execution contexts in JavaScript:

Global Execution Context
Function Execution Context
1. Global Execution Context
Created: When the JavaScript engine starts executing your script.
Contains:
Global Object: In browsers, this is the window object; in Node.js, it's the global object.
this keyword: Refers to the global object.
Purpose: Manages the code that is not inside any function.
2. Function Execution Context
Created: Each time a function is invoked.
Contains:
Arguments Object: An array-like object containing all arguments passed to the function.
Variable Environment: All variables defined within the function.
Scope Chain: References to its own scope, outer scopes, and the global scope.
this keyword: Depends on how the function is invoked.
Purpose: Manages the execution of code within that specific function.
Phases of Execution Context
Each execution context goes through two phases:

Creation Phase (Memory Allocation)

Variables, functions, and the this keyword are set up.
Functions are hoisted (their definitions are stored in memory).
Variables are hoisted but set to undefined.
Execution Phase (Code Execution)

Code is executed line by line.
Variable assignments and function invocations happen.
this Keyword in Different Contexts
The value of the this keyword depends on how and where a function is called:

Global Context

In the global scope, this refers to the global object (window in browsers, global in Node.js).
Object Method

When a function is called as a method of an object, this refers to the object itself.
Standalone Function

In non-strict mode, this refers to the global object.
In strict mode, this is undefined.
Constructor Function

When using new, this refers to the newly created object.
Arrow Functions

Do not have their own this; they inherit this from the enclosing context.
Detailed Explanation of Your Code
Now, let's analyze your code step-by-step with this understanding.

javascript
Copy code
let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this);
    function g() {
      console.log(this);
    }
    g();
  },
};

obj2.testFunction();
Step-by-Step Breakdown
1. Global Execution Context Creation
Variables and Functions Defined:
obj2: Declared and defined as an object.
this in Global Context:
In Node.js: {} (an empty object).
In Browsers: window object.
2. Execution Phase
a. Defining obj2
An object obj2 is created with:
Properties:
name: "mrityunjay"
age: "23"
Method:
testFunction: A function defined within the object.
b. Calling obj2.testFunction()
Invocation: testFunction is called as a method of obj2.
Function Execution Context Created for testFunction:
this Binding: this is set to the object that invoked the function, i.e., obj2.
Inside testFunction:

javascript
Copy code
console.log(this);
Output:
javascript
Copy code
{
  name: 'mrityunjay',
  age: '23',
  testFunction: [Function: testFunction]
}
Explanation: Since testFunction is called as a method of obj2, this refers to obj2 itself.
Defining and Calling Nested Function g:

javascript
Copy code
function g() {
  console.log(this);
}
g();
Function g Definition:
A regular function declared inside testFunction.
Invocation of g:
Called as a regular function, not as a method.
Function Execution Context Created for g:

this Binding in g:
Non-Strict Mode:
this defaults to the global object.
In Node.js: global object.
In Browsers: window object.
Strict Mode:
this is undefined.
Output from g:

In Non-Strict Mode (Default):
javascript
Copy code
[Object: global] {
  // global properties and methods
}
In Strict Mode:
javascript
Copy code
undefined
Summary of Outputs
First console.log(this); inside testFunction:

Logs the obj2 object.
Second console.log(this); inside g:

Logs the global object (global in Node.js) in non-strict mode.
Logs undefined in strict mode.
Why Does this Behave This Way?
1. this Inside Object Method
When a function is invoked as a method of an object, this refers to the object itself.
Example:
javascript
Copy code
obj2.testFunction(); // 'this' inside testFunction is obj2
2. this Inside Nested Regular Function
A regular function's this depends on how it's called, not where it's defined.
When called without any context (not as a method), this defaults to:
Non-Strict Mode: Global object.
Strict Mode: undefined.
In your code:
g() is called as a regular function within testFunction, so this inside g refers to the global object in non-strict mode.
How to Preserve the Context of this Inside Nested Functions
If you want this inside the nested function g to refer to obj2, you have several options:

1. Using Arrow Functions
Arrow functions do not have their own this; they inherit it from the enclosing scope.
Modified Code:

javascript
Copy code
let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this); // 'this' is obj2
    const g = () => {
      console.log(this); // 'this' is also obj2
    };
    g();
  },
};

obj2.testFunction();
Output:

javascript
Copy code
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
Explanation:

The arrow function g captures this from its lexical scope, which is testFunction, where this is obj2.
2. Storing this in a Variable
Store the value of this in a variable and use it inside the nested function.
Modified Code:

javascript
Copy code
let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this); // 'this' is obj2
    const self = this; // Store reference to 'this'
    function g() {
      console.log(self); // Use stored reference
    }
    g();
  },
};

obj2.testFunction();
Output:

javascript
Copy code
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
Explanation:

By storing this in self, we can access the original context inside g.
3. Using bind() Method
Bind the function g to the desired context.
Modified Code:

javascript
Copy code
let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this); // 'this' is obj2
    function g() {
      console.log(this); // 'this' is obj2 due to binding
    }
    g.bind(this)(); // Bind 'this' to obj2
  },
};

obj2.testFunction();
Output:

javascript
Copy code
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
Explanation:

The bind(this) method creates a new function with this bound to obj2.
4. Using call() or apply() Methods
Invoke the function with a specific this context.
Modified Code:

javascript
Copy code
let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this); // 'this' is obj2
    function g() {
      console.log(this); // 'this' is obj2 due to call()
    }
    g.call(this); // Call 'g' with 'this' set to obj2
  },
};

obj2.testFunction();
Output:

javascript
Copy code
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
Explanation:

The call(this) method invokes g with this explicitly set to obj2.
Strict Mode and Its Impact on this
Enabling strict mode changes how this behaves in functions:

In Global Scope:
this remains the global object.
In Functions:
If a function is called as a regular function (not as a method), this is undefined.
Enabling Strict Mode:

javascript
Copy code
"use strict";

let obj2 = {
  name: "mrityunjay",
  age: "23",
  testFunction: function () {
    console.log(this); // 'this' is obj2
    function g() {
      console.log(this); // 'this' is undefined
    }
    g();
  },
};

obj2.testFunction();
Output:

javascript
Copy code
{ name: 'mrityunjay', age: '23', testFunction: [Function: testFunction] }
undefined
Explanation:

In strict mode, this inside g is undefined because g is called as a regular function.
Conclusion
this is context-sensitive: Its value depends on how and where a function is invoked.
Nested functions: Regular functions nested inside object methods lose the outer this context unless measures are taken (like arrow functions or binding).
Understanding execution contexts: Critical for predicting and controlling this behavior.
Best Practices:
Use arrow functions for nested functions when you want to inherit the this value.
Be cautious with this in different environments (Node.js vs. browser) and modes (strict vs. non-strict).
*/
