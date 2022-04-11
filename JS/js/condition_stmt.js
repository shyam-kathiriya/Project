/* *************************************************
* ************ CONDITIONAL STATEMENT ***************
**************************************************** */

//////////////////
// IF Statement
//////////////////
let age = 17;
if (age < 18) {
  console.log("under 18");
}


///////////////////////
// IF...ELSE Statement
///////////////////////
age = 34;
if (age > 18) {
  console.log("votable");
} else {
  console.log("not votable");
}


///////////////////////
// ELSE IF Statement
///////////////////////
let n = 10;
if (n == 0) {
  console.log("number is zero");
} else if (n < 0) {
  console.log("number is negative");
} else {
  console.log("number is positive");
}

///////////////////////
// SWITCH Statement
///////////////////////
switch (new Date().getDay()) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;

  default:
    console.log("enter between 0 to 6");
    break;
}