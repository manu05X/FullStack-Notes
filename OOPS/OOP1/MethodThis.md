# Methods in Objects

An object contains properties, where the property value can either be a value or a function. In case the property is a function, it is referred to as an **object method**.

### this Keyword

Let’s consider a scenario where you have an object named employee with the properties name, age and designation. Now you are required to write an object method display() that returns the designation of that employee

```javascript
var employee = {
  name: "Joe",
  age: 28,
  designation: "developer",
  display() {
    return designation;
  },
};
//this will generate an error
console.log(employee.display()); //designation is not defined error
```

We can’t directly access the properties inside the object.
The properties are accessed similarly to how they would be accessed outside the object, i.e., you need to provide a reference to the object whose property you are trying to access.

It refers to itself using the **this** keyword. Here, this points to the current object, i.e., the object in which the code is being written. In the above example, **this** refers to the **_employee_** object.

### Syntax

> this.propertyName

#### Example

```JS
var employee = {

  name: 'Joe',
  age: 28,
  designation: 'developer',
  //function returning designation of the employee
  display() {
    return this.designation //using this to refer to the "employee" object
  }
}
//this will display the designation
console.log(employee.display())
```

Here, this refers to the employee object.

Return all three properties!

```JS
var employee = {

  name: 'Joe',
  age: 28,
  designation: 'developer',
  //function returning all three properties of the employee
  display() {
    return " Name is " + this.name + "\n Age is " + this.age + "\n Designation is " + this.designation  //using this to refer to the "employee" object
  }
}
//this will display all three properties
console.log(employee.display())
```

### Setting Value Using this

```JS
var employee = {

  name: 'Joe',
  age: 28,
  designation: 'developer',
  //function setting the value of "designation" equal to the parameter being passed to the function
  setDesignation(parameterValueOfDesig) {
    this.designation = parameterValueOfDesig
  }
}
//displaying the value of "designation" at start
console.log("Old designation was:",employee.designation)
//updating the value of designation
employee.setDesignation('engineer')
//displaying new value of designation
console.log("New designation is:",employee.designation)
```

### Using get Keyword

```JS
var employee = {

  name: 'Joe',
  age: 28,
  designation: 'developer',
  //function returning designation of the employee
  get display() {
    return this.designation //using this to refer to the "employee" object
  }
}
//this will display the designation
console.log(employee.display)
```

You must be wondering what the difference is since the function definition is exactly the same as before, except for the use of the keyword _get_. Now, look closely at last line in both the code executables above.

See the difference?

Using get changes the way the _function_ **display()** is called. It is now called in exactly the same way as how a property is called: **employee.display**, whereas without get, it is called as a _function_: **employee.display()**.

> - An objects set of properties include data value and function.
> - create() method creates objects based on existing object.
