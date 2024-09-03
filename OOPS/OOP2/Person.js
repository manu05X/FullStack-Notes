class Person {
  constructor(name, age, gender, height, color) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.color = color;
  }

  get getName() {
    return `This is my name ${this.name}`;
  }
  set setName(value) {
    this.name = value;
  }

  get getAge() {
    return `This is my age ${this.age}`;
  }
  set setAge(value) {
    this.age = value;
  }

  get getGender() {
    return `This is my gender ${this.gender}`;
  }
  set setGender(value) {
    this.gender = value;
  }

  walk() {
    console.log(`walk: ${this.name} walking toward station`);
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

const mrityunjay = new Person("Mrityunjay", "23", "Male", "5:10", "Withish");
const payal = new Person("Payal", "23", "Female", "5:7", "Withish");

console.log(mrityunjay);
console.log(payal);
