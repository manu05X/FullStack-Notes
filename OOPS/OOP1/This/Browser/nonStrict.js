//Simple console

// console.log(this);

// This inside the function
// function test() {
//   console.log(this);
// }

// test();

// let obj = {
//   name: "ABCD",
//   age: "23",
//   getPrintInfo: function () {
//     console.log(this);
//   },
// };

// obj.getPrintInfo();

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
