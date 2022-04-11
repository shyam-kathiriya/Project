/* *************************************************
* ********************* LOOPS **********************
**************************************************** */

//////////////////
// FOR loop
//////////////////
//print 1 to 10 numbers
for (let i = 1; i < 11; i++) {
  console.log(i);
}

//scopes in loops
var i = 5;
for (var i = 1; i < 11; i++) {
  console.log(i);
}
console.log(i); //11

let j = 5;
for (let j = 1; j < 11; j++) {
  console.log(j);
}
console.log(j); //5


/*
  ---for...in loop is used with iterable object like array, string and object
  ---for...of loop is used with array and string
*/

//////////////////
// FOR IN loop
//////////////////
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sum = 0;
for (const i in arr) {
  sum += arr[i];
}
console.log(sum);

console.clear();


//////////////////
// FOR OF loop
//////////////////
const arr2 = [33, 5, 2, 6, 25, 343];
for (const i in arr2) {
  console.log(arr2[i]);
}
console.log("");
for (const items of arr2) {
  console.log(items);
}
console.log("");

//////////////////////////////////////

const student = {
  registration: "123456",
  name: "Sandeep",
  age: 33,
};

for (let key in student) {
  console.log(key);
}

// for (let key of student) {
//   console.log(key);
// } ///this give an erroe (typeError: student is not iterable)
