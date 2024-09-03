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

// console.log(getEmail(student));

//Now using CALL, BIND and APPLY help us to change the context of window object

function getEmail(obj) {
  console.log(this); // here this is pointing to the global object
  //console.log(this.obj);
  console.log(`${this.firstName}.${this.lastName}@gmail.com`); // so we get undefine.undefine@gmail.com
}

const student = {
  firstName: "ABC",
  lastName: "DEF",
  age: 24,
};

const Teacher = {
  firstName: "ABC",
  lastName: "DEF",
  age: 40,
};

console.log(getEmail);
console.log(getEmail(student));

//CALL
//By default call is part of function prototype and we can use it for our purposes

getEmail.call(student);
