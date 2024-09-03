// const student = {
//   firstName: "ABC",
//   lastName: "DEF",
//   age: 24,
//   getEmail: function () {
//     console.log(`${this.firstName}.${this.lastName}@gmail.com`);
//   },
// };

// // const Teacher = {
// //   firstName: "ABC",
// //   lastName: "DEF",
// //   age: 40,
// //   getEmail: function () {
// //     console.log(`${this.firstName}.${this.lastName}@gmail.com`);
// //   },
// // };

// // console.log(student.getEmail());

// function getEmail(obj) {
//   // console.log(this);
//   // console.log(this.obj);
//   console.log(`${this.firstName}.${this.lastName}@gmail.com`);
// }

// const student = {
//   firstName: "ABC",
//   lastName: "DEF",
//   age: 24,
// };

// function getEmail(obj) {
//   console.log(this);
//   console.log(`${this.firstName}.${this.lastName}@gmail.com`);
// }

// const student = {
//   firstName: "ABC",
//   lastName: "DEF",
//   age: 24,
// };

// const Teacher = {
//   firstName: "ABC",
//   lastName: "DEF",
//   age: 40,
// };

// console.log(getEmail);
// console.log(getEmail(student));

// getEmail.call(student);

//Apply accept argument as array of elements

function getEmail(obj) {
  console.log(this);
  console.log(`${this.firstName}.${this.lastName}@gmail.com`);
}

function getInfo(city, school, modeOfTransport) {
  console.log(this);
  console.log(`${this.firstName} ${this.lastName}`);
  console.log(
    "School Name: " +
      school +
      ", Mode of travel: " +
      modeOfTransport +
      ", In this City -> " +
      city
  );
}

const student = {
  firstName: "Chirag",
  lastName: "Malviya",
  age: 24,
};

const Teacher = {
  firstName: "ABC",
  lastName: "DEF",
  age: 40,
};

console.log(getEmail);
console.log(getEmail(student));

// getEmail.call(student);

// first argument is @param i.e current obj and after that list of arguments are passed to the method
//getInfo.call(student, "Pune", "DAV", "BUS");

// getInfo("Pune", "DAV", "BUS");

//now if we have an array of information i.e [ "Pune", "DAV", "BUS"] then we need to use the apply to pass the rest of infomation
//this is what make the diffrence
const arr = ["Pune", "DAV", "School BUS"];

getInfo.call(student, ...arr);
getInfo.apply(student, arr); // the only difference between call and apply is the way they accept the arguments

/*
call, bind, and apply are methods in JavaScript that allow you to explicitly set the value of this in a function, which determines the context in which the function is executed. Let's dive into each one and explain them in the context of the code you've provided.

1. call
The call method allows you to invoke a function with a specified this value and individual arguments. It immediately invokes the function with the provided context.

Example in Your Context:
javascript
Copy code
getEmail.call(student);
What it does: This calls the getEmail function, setting this to the student object.
Result: Inside getEmail, this refers to student, so console.log(this) prints the student object, and the email is constructed using student's firstName and lastName properties.
2. apply
The apply method is similar to call, but instead of passing arguments individually, you pass them as an array. It also immediately invokes the function with the provided context.

Example in a Similar Context:
javascript
Copy code
getEmail.apply(student);
What it does: This does the same thing as call, setting this to student. However, if getEmail accepted arguments, you would pass them as an array in apply.
Result: The result is identical to call in this case because no arguments are being passed.
3. bind
The bind method does not immediately invoke the function. Instead, it returns a new function with the specified this value permanently set to the provided object. You can then call this new function later.

Example in Your Context:
javascript
Copy code
const boundGetEmail = getEmail.bind(student);
boundGetEmail();
What it does: This creates a new function boundGetEmail where this is always set to student, regardless of how or when it's called.
Result: When you call boundGetEmail(), it behaves exactly as getEmail.call(student) would, printing the student object and the constructed email.
Similarities
Setting this: All three methods (call, apply, bind) allow you to set the this value inside the function to any object you want.
Function Context: They all change the context in which the function runs, enabling you to reuse functions with different objects.
Differences
Invocation:
call and apply invoke the function immediately.
bind returns a new function that you can call later.
Arguments Passing:
call requires you to pass arguments individually.
apply requires you to pass arguments as an array.
bind can preset arguments (like call), but the function is not invoked until you call the bound function.
In Summary:
Use call when you want to immediately invoke a function with a specific this value.
Use apply when you want to immediately invoke a function with a specific this value and an array of arguments.
Use bind when you want to create a new function with a specific this value that you can call later.

*/
