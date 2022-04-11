/* *****************************************************
* ********************* OBJECTS ************************
******************************************************** */

/*
  ---Object is container same as variables. but the object store more values than variabl.
  ---Object stroes the values as name:value pairs // this pair is called as the properties of the object.
  ---object has properties and methods
  ---creating object:
    --object literal
    --using new keyword
  ---object are mutable
*/

//////////////////////////////
// JS OBJECTS
//////////////////////////////

//object literal 1
const obj1 = {};
obj1.fname = "john";
obj1.age = 19;
console.log(obj1);

//object literal 2
const obj2 = {
  fname: "john",
  lname: "doe"
};
console.log(obj2);

//using new keyword
const obj3 = new Object();
obj3.fname = "john";
obj3.bday = new Date().toDateString();
console.log(obj3);

const obj4 = obj3; //here obj4 is not a copy of a obj3 but both are a same array
obj4.fname = "update name using obj4";
//here noticed that the obj4 is a same as a obj3
//update using obj4 is also update on obj3
console.log(obj3);
console.log(obj4);

//////////////////////////////
// JS OBJECTS PROPERTIES
//////////////////////////////
/*
  ---Properties are the values associated with a JavaScript object.
  ---A JavaScript object is a collection of unordered properties.
  ---Properties can usually be changed, added, and deleted, but some are read only.
  ---Accessing properties :
                  1. objName.property
                  2. objName["property"]
                  3. objName[variable/expression]
*/

const employee = {
  firstName: "John",
  lastName: "Doe",
  salary: 20000,
  department: "CE",
  fullName: function () {
    // return employee.firstName + " " + employee.lastName; //we can also do as same
    return this.firstName + " " + this.lastName;            //this is same as above statement
  },
  hobbies: {
    val1: "reading",
    val2: "playing",
    val3: "coding"
  }
};

let fname = 'firstName';
let employeeFirstName = employee[fname];            //when we use variable to access the value than we dont use the quotes
let employeeSalary = employee.salary;               //object properties access 1
let employeeDepartment = employee["department"];    //object properties access 2 //this method is used when we need to access the value of object using variable. example first statement
let employeeFullName = employee.fullName();         //object method access (call)

// this is how we access the object inside the object
let employeeHobby1 = employee.hobbies.val1;

console.log(employeeFirstName);
console.log(employeeFullName);
console.log(employeeSalary);
console.log(employeeDepartment);
console.log(employeeHobby1);


//defining property using Object.defineProperty()
Object.defineProperty(employee, "language", { value: "java" });
console.log(employee.language);

//////////////////////////////
// JS OBJECTS METHODS
//////////////////////////////
/*
  ---Object method are function stored as a property of object.
  ---Accessing a object:  objName.methodName
*/

const employee1 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    // return employee.firstName + " " + employee.lastName; //we can also do as same
    return this.firstName + " " + this.lastName;            //this is same as above statement
  }
};

let employeeFullName1 = employee1.fullName();         //object method access (call)

console.log(employeeFullName1);


//////////////////////////////
// JS OBJECTS DISPLAY
//////////////////////////////
/*
  ---Displaying a JavaScript object will output [object Object].
  ---Some common solutions to display JavaScript objects are:
    --Displaying the Object Properties by name
    --Displaying the Object Properties in a Loop
    --Displaying the Object using Object.values()
    --Displaying the Object using JSON.stringify()
*/

//Displaying the Object Properties by name
const obj5 = {
  a: 1,
  b: 2,
  c: 3
};
console.log(`value of a: ${obj5.a}  value of b: ${obj5.b} value of c: ${obj5.c}`);

//Displaying the Object Properties in a Loop
for (const key in obj5) {
  console.log(`value of ${key}: ${obj5[key]}`); //here noticed that the key is a variable thats why we put it into brackets[] //obj5.key is not work
}

//Displaying the Object using Object.values()
//Object.values() return a array containing the values of object
const obj5Arr = Object.values(obj5); //now the obj5Arr is a simple JS array containing the valuue of each property of obj5 object
console.log(obj5Arr);


//Displaying the Object using JSON.stringify()
//JSON.stringify() return a string containing the name:value of object
const obj5Str = JSON.stringify(obj5);
console.log(obj5Str);


//////////////////////////////////////////////
// JS OBJECTS ACCESSORS (GETTER AND SETTER)
//////////////////////////////////////////////

/*
  ---It allows equal syntax for properties and methods
  ---It is useful for doing things behind-the-scenes
  ---we can also add getter and setter using Object.defineProperty()
  ---when we use get method then we cannot access that get method using () it is always called using only name like object property
*/
const obj6 = {
  fname: "john",
  lname: "doe2",
  get fullName() {
    return this.fname + " " + this.lname;
  },
  set lang(lang) {
    this.language = lang;
  }
};
console.log(Object.values(obj6));
console.log(obj6.fullName);
obj6.lang = "java";
console.log(Object.values(obj6));


/////////////////////////////
// JS OBJECTS CONSTRUCTORS
/////////////////////////////
/*
  ---Object constructor is templet for creating a object
  ---good practice that define a constructor function name start with capital letter
  ---Objects of the same type are created by calling the constructor function with the new keyword
  ---inside the function constructor this has no meaning
*/
function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
}

const person1 = new Person("john", "doe", 20);
const person2 = new Person("mom", "wick", 28);
console.log(Object.values(person1));
console.log(Object.values(person2));
person1.language = "java"; //adding property to existing object
console.log(Object.values(person1));
//we can not add property directly in object constructor like
Person.nationality = "Indian";
console.log(person1.nationality); //this return undefined bcz we cannot add new property direct to object constructor if we want to add new property in constructor add to the object constructor


/////////////////////////////
// JS OBJECTS PROTOTYPE
/////////////////////////////
/*
  ---All JavaScript objects inherit properties and methods from a prototype
  ---As shown as above we can not add new property directly to object constructor
  ---JavaScript prototype property also allows you to add new methods to objects constructors
*/
Person.prototype.state = "gujarat";
console.log(person1.state);
console.log(person2.state);
