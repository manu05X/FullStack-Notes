# Objects or Constructor Functions?

## Functions as Objects

Functions are also objects in JavaScript. This is because, just like objects, they have their own properties and methods. Functions can also be used to construct objects; these type of functions are known as constructor functions.

## Why Use Constructor Functions?

Let’s answer this question with respect to object literals. In order to create an employee of a company, we created an object like this:

```javascript
//creating an object named employee

var employee1 = {
  //defining properties of the object
  //setting data values
  name: "Joe",
  age: 28,
  designation: "Developer",
  //function to display name of the employee
  displayName() {
    console.log("Name is Joe");
  },
};

//displaying the properties of the object
//the method to access properties will be discussed in detail the next lesson
employee1.displayName();
console.log("Age is:", employee1.age);
console.log("Designation is:", employee1.designation);
```

Now, what if you wanted to create another employee?

Using the above approach, we would write a code similar to the one shown below:

```js
//creating an object named employee2

var employee2 = {
  //defining properties of the object
  //setting data values
  name: "Amy",
  age: 23,
  designation: "Engineer",
  //function to display name of employee2
  displayName() {
    console.log("Name is Amy");
  },
};

//displaying the properties of the object
//the method to access properties will be discussed in detail the next lesson
employee2.displayName();
console.log("Age is:", employee2.age);
console.log("Designation is:", employee2.designation);
```

This time we named the employee **employee2** since **employee1** is already taken.

Two employee objects with their properties

Two employee objects with their properties
What if there are 100 or 1000 employees in the company? Creating separate object literals for each is a tiring and a cumbersome task. Another thing to note is that both employee1 and employee2 have all the properties in common; the difference lies only in their object names and property values.

This brings us to the question: Is there a better approach for doing this?

**Yes**, there is. This is where constructor functions come into play.

So wouldn’t it be nice to have one generic template with all these properties for the object employee from which all future objects can then just be created? In short, wouldn’t it be better to have a blueprint for the object employee?

### Syntax

The concept discussed above is basically that of classes. In other languages like Java or C#, classes form the blueprints for objects. However, in JavaScript until the version ES6, there was no concept of using classes. Hence, in older versions like ES5, constructor functions were used to implement the functionality of classes.

Let’s take a look at the syntax for constructor functions in the ES5 version of JavaScript.

```javascript
function FunctionName(parameter1, parameter2,...){
    //all the properties of the object are initialized here
    //functions to be provided by objects are defined here
}
```

- The keyword function is used to define the function.
- The constructor function name should be capitalized just like FunctionName in the above snippet.
- The body of this function is basically the constructor part as it initializes the properties by setting them as equal to the respective parameters being passed into the function.
- Additional functions that will be available in the objects can also be defined inside the constructor function’s body.

```JS
function Employee(_name, _age, _designation){
  this.name = _name
  this.age = _age
  this.designation = _designation
}
```

All the objects created from **Employee** will contain these properties.

Whenever a new object is created, **this** is used to refer to this new object and set its property values. This is why, even though each object shares the same properties, they are assigned their own specific values, so the functionalities don’t get mixed up.

## Creating an Object Instance

Every time a new object is created, it is referred to as a new instance. Multiple object instances can be generated using constructor functions.

Syntax
Let’s take a look at the syntax for creating an object:

```javascript
var ObjectName = new ConstructorFunction(argument1, argument2,....)
```

### Explanation

- The keyword new is used to create a new object.
- That is followed by the constructor function being called with the required arguments passed into it. This is why the code in the constructor function executes every time a new object is instantiated.
- An object will then be returned which will be stored inside a variable, that is, ObjectName in the above case.
- Each new object created will store the argument values passed into the constructor function.

```JS
//function constructor called Employee
function Employee(_name, _age, _designation){
  this.name = _name
  this.age = _age
  this.designation = _designation
}

//creating an object called employeeObj1
var employeeObj1 = new Employee('Joe', 22, 'Developer')

//displaying properties of employeeObj1
console.log("Name of employee:",employeeObj1.name)
console.log("Age of employee:",employeeObj1.age)
console.log("Designation of employee:",employeeObj1.designation)

//creating another object called employeeObj2
var employeeObj2 = new Employee('Amy', 28, 'Engineer')

//displaying properties of employeeObj2
console.log("Name of employee:",employeeObj2.name)
console.log("Age of employee:",employeeObj2.age)
console.log("Designation of employee:",employeeObj2.designation)
```

### Explanation

- In line 9 and line 17 two new objects are created.
- Specific arguments for both the objects are passed into the constructor function, Employee.
- In line 9 Joe, 22 and Developer are being passed as name, age and designation for employeeObj1.
- In line 17 Amy, 28 and Engineer are being passed as name, age and designation for employeeObj2.
- When the Employee constructor function executes the object properties for both employeeObj1 and employeeObj2, store the arguments passed into the Employee constructor in lines 9 and 17.
- The properties of an object are accessed by making a call to the object using that object’s name, employeeObj1 and employeeObj2 in our example, followed by the property name. This can be seen in lines 12-14 for employeeObj1 and lines 20-22 for employeeObj2.

Even though both employeeObj1 and employeeObj2 contain the same properties, both objects are created separately with their own specific arguments passed into the constructor, where this is used to assign them to the relevant properties. Hence, they are independent of each other, and upon access, they display their own property values.

### Adding New Properties

How new properties can be added to constructor functions?

It is diffrent form that of Object literals
For object literals, the following approach is used to add properties:

```JS
//creating an object named employee
var employee = {
  //defining properties of the object
  //setting data values
  name : 'Joe',
  age : 20
}

//creating a new property called designation and setting its value
employee.designation = 'Developer'
console.log("Designation is:",employee.designation) // Designation is: Developer
```

However, doing same when usinfg constructor function will give **undefine** as a result:

```JS
//function constructor called Employee
function Employee(_name, _age, _designation){
  this.name = _name
  this.age = _age
  this.designation = _designation
}
//creating an object called employeeObj
var employeeObj = new Employee('Joe', 22, 'Developer')

//adding property using the method used for object literals
Employee.sex = 'male'
//displaying this property for employeeObj
console.log("Sex is:",employeeObj.sex)
```

### Example

In order to add properties to constructor functions, the new property needs to be defined inside the constructor function.

Let’s take a look at an example demonstrating how to add new properties to constructor functions:

```javascript
//function constructor called Employee
function Employee(_name, _age, _designation) {
  this.name = _name;
  this.age = _age;
  this.designation = _designation;
  //adding a new property named "company" inside constructor function directly
  //it's not passed as a parameter into the constructor function
  this.company = "Google"; //this will act as a default value for all objects created
}

//creating an object called employeeObj
var employeeObj = new Employee("Joe", 22, "Developer");

//displaying properties of employeeObj
console.log("Name of employee:", employeeObj.name);
console.log("Age of employee:", employeeObj.age);
console.log("Designation of employee:", employeeObj.designation);
console.log("Employee works in:", employeeObj.company);
```

## Methods in Constructor Functions

Methods are defined differently in constructor functions.

Example
We defined our methods inside object literals in the following way:

```JS
//creating an object named employee
var employee = {
  //defining properties of the object
  //setting data values
  name : 'Joe',
  age : 28,
  designation : 'Developer',
  //function to display name of the employee
  displayName() {
    console.log("Name is:", this.name)
  }
}
//calling the method
employee.displayName()
```

The same function but for the constructor function this time:

```JS
//creating an object named Employee
function Employee(_name,_age,_designation) {
   this.name = _name,
   this.age = _age,
   this.designation = _designation,
  //function to display name of the Employee
  this.displayName = function() {
    console.log("Name is:", this.name)
  }
}
//creating an object
var employeeObj = new Employee('Joe',22,'Developer')
//calling the method for employeeObj
employeeObj.displayName()
```

#### Explanation

In line 9 of the code for object literal, the method declaration was simple: the name of the function followed by the definition, i.e., the body of the function.

However, as seen in _line 7_ of the constructor function code, in order to define the method, **this** keyword is used. **this** is used to set as well as assign the method and properties to every new object that is created.

> Note: The function keyword provides another way to declare a function. It can also be used while declaring a function in an object literal.

### Adding a Method

Just like adding properties, adding a method to a constructor function is different from adding it to an object.

Let’s compare the two methods.

Example
A new method is added to an object in the following way:

```javascript
//creating an object named employee
var employee = {
  //defining properties of the object
  //setting data values
  name: "Joe",
  age: 28,
  designation: "Developer",
  //function to display name of the employee
  displayName() {
    console.log("Name is:", this.name);
  },
};
//calling the method
employee.displayName();
//adding a method that returns the age to the object
employee.getAge = function () {
  return this.age;
};
//calling the function and displaying the result
console.log("Age is:", employee.getAge());

/*
Output:
Name is: Joe
Age is: 28
*/
```

As you can see in line 16, new methods can be added directly into an existing object; however, a new method cannot directly be added into an object constructor. If a new method is to be added, it has to be defined inside the constructor function so that it is available for all objects created from it.

Lets See the Example:

```JS
//creating an object named Employee
function Employee(_name,_age,_designation) {
   this.name = _name,
   this.age = _age,
   this.designation = _designation,
  //function to display name of the Employee
  this.displayName = function() {
    console.log("Name is:",this.name)
  }
  //adding a new setAge function
  this.setAge = function(newAge){
    this.age = newAge
  }
}
//creating an object
var employeeObj = new Employee('Joe',22,'Developer')
//calling the setAge function for employeeObj
employeeObj.setAge(30)
//displaying new age
console.log("New age is",employeeObj.age)
```

### Explanation

A new method, setAge, is added by being defined inside the constructor function, as seen in line 11, with the parameter newAge passed to it. The function is used to modify the age property for an object.

> Note: From the code above, you can see that the method to add a new function is the same as that of defining a function in a constructor function.
