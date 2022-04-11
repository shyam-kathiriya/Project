/* *************************************************************
* ************************ VARIABLES ***************************
**************************************************************** */

/* ______ Variables rules _______
 1. variables is case sensitive
 2. can have character
 3. can have number expect first position
 4. can have special symbols but only $ and _ (underscore)
 5. we can use a special symbols at the start of the variable name but $ is used for many JS frameworks and _ is used to private variable in OOP concepts so we can not use in real life.
 6. space between name is not allowed
 7. for defining a variables name we use either camelCase and snack_case, highly recommended camelCase
 8. variables declared only once
*/

/*
--There are three types of keywords is used for declaring a variables.
  1. var
  2. let
  3. const
*/

/* 1. VAR
---var have a global scope.
---var is only one keyword for declaring variable which is declared many times. example is given below.
---change in var anywhere is affect globally.
*/

var aVar = 5;
console.log(aVar + " aVar init");

var aVar = 6; // this is only do with var keyword (declaring 2nd time of same variable.)
console.log(aVar + " aVar changed globally");

{
  aVar = 10; // this assignment is changed the global variable
  console.log(aVar + " aVar this is a inside the block using var");
}

console.log(aVar + " aVar this is a outside the block using var"); // same as inside the block bcz var have global scope so if we change the variable whichis declared with var keyword is globally changed. here 10 is printed.


/* 2. LET
  ---let have block scope.
  ---we can re-declared same variable using let keyword but in different blocks but can not redeclared variables in same block.
  ---if the variable assigned a new value in any block than its value is not changed globally but it is changed only inside the block.
  ---if the variable assigned a new value outside any block than its value is changed globally.
*/

let aLet = 98;
console.log(aLet + " aLet init");

// let aLet = 199; // this is give an error bcz we declared same variable multiple time. (error: already declared)

aLet = 233; //this is true bcz we cannot declared variable second time but we assigned the value to variable. this assignment operation is changed the global value of the variable.
console.log(aLet + " aLet overridden global value before block");

{
  //console.log(aLet + " aLet same but inside the another block"); // this give a error bcz we print variable before declaration but this only give an error when the other declaration statement of same variable is present in block here the "let aLet = 331" statement is present after this thats why this statement is give error if we comment the next statement than the global value(98) of aLet is printed.

  //let aLet = 331; //this is not give an error bcz we declared same variable second time but in another block

  let aLet = 122; // this is give an error bcz we declared same variable second time in same block
  console.log(aLet + " aLet inside the block");
}

console.log(aLet + " aLet directly after block (outside)"); // this value is 98 bcz any assignment operation inside any block is dead after the execution of the particular block

aLet = 233; // this assignment operation is changed the global value of the variable
console.log(aLet + " aLet overridden global value after block");


/* 3. CONST
  ---const have a block scope but it can not re-assign second time as let keyword.
  ---we can re-declared same variable using const keyword but in different blocks.
  ---we can not change the value of const variable when once it is assigned either it is inside the block or outside the block.
*/

const aConst = 81;
console.log(aConst + " aConst init");

//aConst = 22; //this give an error bcz we can not reassign the value of variable which is declared using const keyword.

//const aConst = 22; //also this give an error bcz we can not redeclare the value of variable.

{
  //console.log(aConst); // this give a error bcz we print variable before declaration but this only give an error when the other declaration statement of same variable is present in block here the "const aConst = 12" statement is present after this thats why this statement is give error if we comment the next statement than the global value(81) of aConst is printed.

  //aConst = 12; // inside any block we cannot change the value of const variable.

  const aConst = 23; // this is true bcz here we declared another block level const variable with same name.
  //aConst = 34; //this give an error bcz we can not reassign the const variable here same case happened but for block level.
  console.log(aConst + " aConst inside the block with re-declaration");
}

console.log(aConst + " aConst directly after block (outside)");
