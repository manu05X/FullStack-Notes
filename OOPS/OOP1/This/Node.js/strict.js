"use strict";

// // This inside the function
// function test() {
//   console.log(this);
// }

// test();

/*
Strict Mode Behavior
When "use strict"; is used, the behavior of this in functions changes as follows:

this in Global Context: In strict mode, this is undefined when a function is called in the global context (i.e., not as a method of an object).

this in Functions: When a function is invoked as a standalone function (not as a method of an object), this does not default to the global object. Instead, this is undefined in strict mode.

Strict Mode Enabled: "use strict"; at the top of the file activates strict mode.

Function Call: test() is called as a standalone function, not as a method of an object.

Behavior of this: In strict mode, because test is not called as a method of an object, this is not bound to the global object (which is global in Node.js or window in browsers). Instead, this is undefined.

Output: console.log(this); inside test logs undefined because, in strict mode, this in a standalone function does not default to the global object but is instead undefined.



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
Explanation
Method Invocation (obj2.testFunction):

When obj2.testFunction() is called, this inside testFunction refers to obj2 because it is a method of obj2.
console.log(this); inside testFunction logs obj2 as expected.
Inner Function (g()):

g is defined and called inside testFunction. When g is invoked, it is not invoked as a method of an object; it is a standalone function call within testFunction.
Behavior of this in Inner Function:

In Non-Strict Mode: If this code were not in strict mode, this inside g would refer to the global object (global in Node.js or window in browsers). Since g is a standalone function and not an object method, in non-strict mode this would default to the global object. However, in your strict mode environment, this inside g is undefined.

In Strict Mode: Since "use strict"; is enabled, the this keyword inside g is undefined because in strict mode, this in a regular function call (not a method) is undefined.

Result of Function g():

const a = 2;
const b = 3;
const sum = a + b; calculates 5.
console.log(sum); logs 5.
console.log(this); logs undefined due to strict mode.
Summary
this in testFunction: Refers to obj2 as it is a method call.
this in g(): Logs undefined due to strict mode because g is a regular function and this is not bound to the global object in strict mode.
*/
