/*
The key features of ESModules include:

    1> Support for both synchronous and asynchronous module loading.
    2> A standardized syntax for importing and exporting modules.
    3> Support for dynamic imports, allowing modules to be loaded and used at runtime.
ESModules are designed to provide a more modern and efficient module system than the CommonJS module system, 
which is used in Node.js. They are also more flexible, allowing developers to create more modular and scalable code.

Importing and Exporting Modules
In ESModules, modules are defined using the import and export keywords. The import keyword is used to load a module, while the export keyword is used to define the module's exports.

For example, consider the following module that exports a simple function:
*/

// add.mjs
export function add(a, b) {
    return a + b;
  }

  //This module exports a function called add using the export keyword.
  // Other modules can then import this module and use the add function:

  // app.mjs
import { add } from './add.js';

console.log(add(1, 2)); // Output: 3

//In this example, the add module is imported using the import keyword, 
//and the add function is then used to add two numbers together.
/*
Dynamic Imports
ESModules also provide support for dynamic imports, allowing modules to be loaded and used at runtime. 
This is done using the import() function, which returns a promise that resolves to the imported module.

For example, consider the following code that uses dynamic imports to load a module:
*/

// app.js
async function main() {
    const { add } = await import('./add.js');
    console.log(add(1, 2)); // Output: 3
  }
  
  main();

  //In this example, the import() function is used to load the add module at runtime, 
  //and the add function is then used to add two numbers together.

  /*
  Differences from CommonJS
ESModules differ from the CommonJS module system that is used in Node.js in several ways:

ESModules are loaded asynchronously, while CommonJS modules are loaded synchronously.
ESModules are defined using the import and export keywords, while CommonJS modules are defined using the require and module.exports objects.
ESModules are more flexible and support dynamic imports, while CommonJS modules are more static and do not support dynamic loading.
These differences make ESModules a more modern and flexible module system than CommonJS. However, because Node.js still uses the CommonJS module system by default, developers must use a transpiler or a flag to enable ESModules in their Node.js applications.

Using ESModules in Node.js
To use ESModules in Node.js today, you can use .mjs extension for your Node.js files. For example, consider the following add.mjs module that exports a simple function:
  */

// add.mjs
export function add(a, b) {
    return a + b;
  }

  //To load this module in a Node.js application using ESModules, the following code can be used:

// app.mjs
import { add } from './add.js';

console.log(add(1, 2)); // Output: 3
/*
In this example, the add module is loaded using the import keyword and the .mjs file extension. The add function is then used to add two numbers together.
*/