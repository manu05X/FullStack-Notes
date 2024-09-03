class Person {
  constructor(name, age, gender, height, color) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.color = color;
  }
  walk() {
    console.log(`${this.name} walking towards station`);
  }
  eat() {
    console.log(`${this.name} eats only vegetarian food`);
  }
  sleep() {
    console.log(`${this.name} sleeps for 8 hours`);
  }
  static greeting() {
    console.log("Greeting from Person static function");
  }
}

// const mrityunjay = new Person("Mrityunjay", "23", "Male", "5:10", "Withish");
// const payal = new Person("Payal", "23", "Female", "5:7", "Withish");

// console.log(mrityunjay);
// console.log(payal);

// inheritance in classes
// extends -> inheriting from which class
class Teacher extends Person {
  experience;
  constructor(
    name,
    age,
    gender,
    height,
    color,
    subject,
    experience,
    availibility
  ) {
    super(name, age, gender, height, color);
    this.subject = subject;
    //this.experience = experience;
    this.availibility = availibility;
  }

  get experience() {
    return `Instructor ${this.experience}`;
  }

  set experience(value) {
    this.experience = value;
  }

  isHeTeaching() {
    return true;
  }
}

class Student extends Person {
  constructor(name, age, gender, height, color, batch, psp, currentCompany) {
    super(name, age, gender, height, color);
    this.batch = batch;
    this.psp = psp;
    this.currentCompany = currentCompany;
  }
}

const dummyTeacher = new Teacher(
  "Uttam",
  "2X",
  "Male",
  "5:11",
  "whitish",
  "FullStackDevelper",
  "5",
  true
);
dummyTeacher.experience = 5;
// console.log(dummyTeacher.experience);
console.log(dummyTeacher);
dummyTeacher.experience = 15;
console.log(dummyTeacher);
// console.log(dummyTeacher.isHeTeaching());
console.log(dummyTeacher.walk());

const student = new Student(
  "Payal",
  "23",
  "Female",
  "5:7",
  "Withish",
  "FullStack",
  "95",
  "XXX"
);

console.log(student);
