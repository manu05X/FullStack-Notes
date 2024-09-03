# Creating an object literal

An object literal can be created:

- by using figure brackets {...} in the declaration.
- by using the new keyword.
- based on an existing object by using the create() method.

> # Syntax

```JS
var objectName = {
    //properties defined
    propertyName1 : propertyValue1,
    propertyName2 : propertyValue2,
    functionName() {}
}
```

As shown above, to define a property value, we first need to write the name of the property followed by a colon and then the property value.

A property value can be anything, such as:

- string
- integer
- boolean
- object

### Using new Operator

> var objectName = new Object()

The new keyword is used to create a new object from a constructor function. In the case above, we use Object(), which is an inbuilt constructor function used to make new objects. Since Object() has no arguments passed to it, it will create an empty object whose properties will then need to be defined.

To create an object with properties, user-defined constructor functions can be created which take arguments.

However, for the sake of simplicity and execution speed, the first approach is preferred to create an object literal.

### create() Method

> var newObjectName = Object.create(existingObjectName)

## Examples

### Creating an Object Using {...}

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
    console.log("Name is Joe")
  }
}

//displaying the properties of the object
//the method to access properties will be discussed in detail in the next lesson
employee.displayName()
console.log("Age is:",employee.age)
console.log("Designation is:",employee.designation)
```

As mentioned earlier, the value of a property can also be another object. Let’s look at an example of how we can implement that.

```javascript
//creating an object named employee

var employee = {
  //defining properties of the object
  //setting data values
  name: {
    firstName: "Joe",
    lastName: "Adams",
  },
  age: 28,
  designation: "Developer",
  displayName() {
    console.log("Name is Joe");
  },
};

//displaying the properties of the object
//the method to access properties will be discussed in detail in the next lesson
employee.displayName();
console.log("Age is:", employee.age);
console.log("Designation is:", employee.designation);
```

### Creating an Object Using Object()

create the employee object using the object constructor.

```javascript
//an empty employee object created
var employee = new Object();
//adding properties to the object
employee.name = "Joe";
employee.age = 28;
employee.designation = "Developer";
//adding a function called display to the object
//using the function keyword
employee.display = function () {
  console.log("Name is Joe");
};

//displaying the properties of the object
//the method to access properties will be discussed in detail the next lesson
console.log("Age is:", employee.age);
console.log("Designation is:", employee.designation);
employee.display();
```

In the above example, an empty employee object is created in line 2. Properties are then added to it as seen in lines 4-6. In line 9, a function called display is added as a property. The keyword function is used in order to define it.

### Creating an Object Using create

```JS
//creating an object named employee1

var assistantManager = {
  //defining properties of the object
  //setting data values
  name : 'Joe',
  age : 28,
  designation : 'Developer',
  //function to display name of the employee
  displayName() {
    console.log("Name is Joe")
  }
}

//Example: we have an "assistantManager" who gets promoted to "manager" position
//so we create a "manager" object based on "assistantManager"
//it will have same properties as "assistantManager"
//however these properties can be changed or added to
var manager = Object.create(assistantManager)

//displaying the properties of the object assistantManager
//the method to access properties will be discussed in detail the next lesson
assistantManager.displayName()
console.log("Age is:",assistantManager.age)
console.log("Designation is:",assistantManager.designation)
//displaying the properties of the object employee2
//this will show the same values as that of object employee1
manager.displayName()
console.log("Age is:",manager.age)
console.log("Designation is:",manager.designation)
```

### const

Using const doesn’t allow the object to have another object’s binding, meaning you cannot assign a new object to this variable; hence, it cannot be assigned new content.

```JS
//creating an object named employee using const

const employee = {
    name : 'Joe',
    age : 28,
    designation : 'Developer'
}

//value of name, age or designaton can be changed
employee.name = 'Amy'
console.log("New name is:",employee.name)

//object cannot be assigned new object
//You will get an error when you uncomment and run the line below
//employee = {sex : 'male', status : 'single'}
```
