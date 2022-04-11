/* ***************************************************
* ******************* FUNCTIONS **********************
****************************************************** */

/*
  ---Function is nothing but the block of code.
  ---Function is executed when it is called.
  ---Syntax:
    function fn_name (parameter1,parameter2......) {
      Operations; //Code
    }
  ---Execution of the function is stoped when it reaches  to the return statement and jump out of the function block. Code after the return statement is never executed.

  1. Function Definition: Function is declared and what function do when it is called is defined.
  2. Function Invocation (Call):
    --This is trigger for execute code inside the function.Without function call it is only the unreachable block of code.
    --Syntax: fn_name();
*/

console.log("functions");

function add(num1, num2) {
  return num1 + num2; //this 2 variables are always local to the function. we can't use this 2 variables to outside the function.
}

let x = add(4, 2); //function call with paranthesis it returns the computed value of the function
console.log(x);    //computed value


let y = add;       //function call without paranthesis it returns function object
console.log(y);    //function object

// we can use JS function in expression
// This is treated as a function object

let addEx = function (x1, x2) {
  return x1 + x2; //this value is always return where the function is invoked.
};

let add2Num = addEx; //By doing this we can also define other function with different name and for calling function we can also use the new name

let num1 = 10;
let num2 = 11;
let sum = addEx(num1, num2);
console.log(sum);

let sum2 = add2Num(2, 8); //here same function is called using different name because we first assign the addEx function to new function
console.log(sum2);


///////////////////////
// Function call()
///////////////////////
/*
  ---By call() method, you can write a method that can be used on different objects.
  ---in JS function is always a object method.
  ---when a function is not inside any object than it is a method of global object.
  ---The call() method is a predefined JavaScript method.
  ---It can be used to invoke (call) a method with an owner object as an argument (parameter).
  ---With call(), an object can use a method belonging to another object.
*/
const person = {
  fullName: function (city) {
    return `${this.firstName} ${this.lastName} ${city}`;
  }
};
const person1 = {
  firstName: "john",
  lastName: "doe"
};
console.log(person.fullName);
console.log(person.fullName.call(person1));

//call() method with arguments
console.log(person.fullName.call(person1, "oslo"));

///////////////////////
// Function apply()
///////////////////////
/*
  ---apply() method is same as call() method.
  ---diffrence between both is the call() acccept argument as list when apply() method is accept argument as a array
*/
console.log(person.fullName.apply(person1, ["osloarry"]));
console.log(Math.max.apply(" ", [1, 2, 34, 5, 6]));
console.log(Math.max(1, 2, 34, 5, 689));


///////////////////////
// Function bind()
///////////////////////
/*
  ---With the bind() method, an object can borrow a method from another object.
*/

const per = {
  firstName: "john",
  lastName: "doe",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(per.fullName());
const fullnameVar = per.fullName;
console.log(fullnameVar()); //retrun undefined becasue the variable have global object (window)
const p = fullnameVar.bind(per);
console.log(p());
