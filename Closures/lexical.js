// Lexical order means -> Dictionary order

// function a() {
//   console.log(b);
// }

// var b = 15;

// a();

/*
OUTPUT: 15
Explanation: In JavaScript, variable declarations (var b) are hoisted to the top of their scope, but not their initializations. 
This means that the variable b is known to the function a() before it's called, even though it's assigned a value after the function declaration. 
The code is interpreted as:

var b; // Declaration is hoisted
function a() {
  console.log(b); // Accesses the hoisted variable 'b'
}

b = 15; // Initialization
a(); // Calls the function

When a() is called, b has already been initialized to 15, so 15 is logged to the console.
*/

// function a() {
//   console.log(b);
// }

// a();

// var b = 15;

/*
OUTPUT: undefined

Explanation: In this case, the function a() is called before b is initialized. 
The variable b is hoisted, but its initialization happens after the function call. 
The code is interpreted as:

var b; // Declaration is hoisted
function a() {
  console.log(b); // Accesses the hoisted variable 'b'
}

a(); // Calls the function before 'b' is initialized

b = 15; // Initialization happens here

When a() is called, b exists but hasn't been assigned a value yet, so undefined is logged to the console.

Difference:

In the first code snippet, b is assigned a value before the function a() is called, so 15 is logged.
In the second code snippet, the function a() is called before b is assigned a value, so undefined is logged.
*/

//________________________________________________________________________________________________________________________________

// function a() {
//   function c() {
//     function d() {
//       console.log(b);
//     }
//     d();
//   }
//   c();
// }

// b = 12;

// a();

//________________________________________________________________________________________________________________________________

function parent() {
  var a = 10;

  function child1() {
    console.log(a);
  }
  child1();
}

parent(); // 10
