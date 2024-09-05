// function parent() {
//     var a = 10;

//     function child1() {
//       console.log(a);
//     }
//     child1();
//   }

//   parent(); // 10
//________________________________________________________________________________

// function parent() {
//   var a = 10;

//   function child1() {
//     console.log(a);
//   }
//   return child1;
// }

// let returnFn = parent();

// console.log(returnFn);
// /*
// returns the definition of a child1 function
// OUTPUT: [Function: child1]
// OR
// ƒ child1() {
//     console.log(a);
//   }

//  As we have assigned returnFn to the child1 function. Now the child1 is seperate from the the parent function.

//  but it still maintains the lexical scope of the parent function this is called closure.
// */

// returnFn(); // 10 -> still mentain the lexical scope of the parent function

/*
A function is alwase bounded to its lexical scope and that's what forms a closure.

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). When you create a closure, you gain access to an outer function’s scope from an inner function. Closures are automatically created every time a function is defined in JavaScript.


*/

function parent() {
  var a = 10;

  function child() {
    var b = 20;

    function grandChild() {
      // console.log(a); // only one closure of parent will be created by grandChild
      console.log(b); // only one closure of child will be created by grandChild

      //console.log(a + b); // only one closure of parent will be created
    }
    return grandChild;
  }

  return child;
}

let childReturned = parent();

let grandChildReturned = childReturned();

console.log(grandChildReturned());

// Currying and Partial Application

// Debouncing
