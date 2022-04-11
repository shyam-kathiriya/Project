/* *************************************************
* ********************* ARRAY **********************
**************************************************** */
/*
  ---array is basically variable
  ---array contian list of items within is
  ---array is special variable which can store more than one value
  ---Syntax: let array_name = [item1, item2....]
  ---Arrays are special kind of object (typeof array = object)
*/
/*
  NOTE: its best practice to define array with const keyword
  NOTE: and also we use array literal method to define array form better readability of code
 */
//defining array by array literal method
const arr1 = [1, 2, 3, 4];
console.log(arr1);

//defining array using new keyword
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

//typeof array
console.log(typeof arr1); //return object

//Accessing Arrays Elements
/*
  ---in JavaScript array use the number for accessing the element
  ---indexing is start from 0
  ---JS can not support associative array (assosiative array means give the name which are use for accessing particular element within it)
*/
const arr3 = ["a", "b", "c", "1"];
console.log(arr3[0]); //return first element

//Change the value of array element
console.log(arr3); //old array
arr3[2] = "shyam";
console.log(arr3); //new array


// Array elements
/*
  ---array is special kind of object that why we put anything in array
  ---we put number, string, variables, another array, object, function etc
*/

let add = function () {
  return 5 + 5;
};
let str = "this is string";
let num = 123;
let obj = {
  fname: "john",
  lname: "doe"
};
let arr = [1, 4, 5, 6, 7, 8];

const arrCombineElement = [add(), str, num, obj, arr];
console.log(arrCombineElement);

// NOTE: here we use the variable for all of different type element but we can use direct inside array like
const arr4 = ["string", 212, { fname: "john", lname: "Doe", age: 12 }, ["a", "d"]];
console.log(arr4);


/* *************************************************
* ********** ARRAY PROPERTIES AND METHODS **********
**************************************************** */

//property: length
/*
  ---retrun the length of array
 */
const arr5 = ["a2", 2, 7, 4, 5];
console.log(arr5.length); //return 5

//1. toString()
/*
  ---return the string of array element
  ---it convert all array into one string
*/
console.log(arr5.toString());


//2. join()
/*
  ---join() is same as toString() but it accepet the parameter which we want to separate array element by them
*/
console.log(arr5.join("*"));
console.log(arr5.join(1)); //if you want to join with number than the "" is not needed


//3. push()
/*
  ---push element in array at last (add)
*/
const arr6 = [1, 45, "s", "p"];
arr6.push("jogn");
console.log(arr6);
// we can also add anything using push like bobj,fn etc
// obj is defined earlier in this file
arr6.push(obj);
console.log(arr6);


//4. pop()
/*
  ---pop element in array from last (remove)
  ---retruns which element is removed from array from last
*/
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let removeElement = arr7.pop();
console.log(removeElement);
console.log(arr7);


//5. unshift()
/*
  ---add new element in array at start
*/
arr7.unshift(0);
console.log(arr7);


//6. shift()
/*
  ---remove element in array from start
  ---returns ehich element is removed from array from start
*/
removeElement = arr7.shift();
console.log(removeElement);
console.log(arr7);


/*
  ? Array delet
  ---delet keyword is used to delet an array or any specific item from array
  ---but delet keyword generate undefined holes in array
  ---so we can use pop() and shift() for deleting array element
*/
const deleteArray = [1, 2, 3, 4, 5, 6];
console.log("before delet first element of array " + deleteArray[0]);
delete deleteArray[0];
console.log("after delet first element of array " + deleteArray[0]);


//7. concat()
/*
  ---concat() merge more than one array into one array
  ---concat() return new array with changes old array is not affected it remains same
*/
const arr8 = [12, 13, 14, 15, 16];
const arr9 = [17, 18, 149, 20, 21];
const arr10 = ["a", "b", "d"];

const arr11 = arr8.concat(arr9);

console.log(arr11);
const arr12 = arr8.concat(arr9, arr10);
console.log(arr12);

const arr13 = arr12.concat("a");
console.log(arr13);
console.log(arr12); //not affected by concat() remain same


//8. splice()
/*
  ---splice is used for both addind and removing element from array from particular position
  ---change old array (update)
  ---Syntax: splice(where to start, how many element want to delet, ...(strings and numbers))
*/

// adding element to array
const arr14 = [1, 2, 3, 4, 5, 6];
let aaa = arr14.splice(2, 0, "doe");
// when splice() is used for adding element than it returns null array
console.log(aaa);
console.log(arr14);
arr14.splice(2, 0, 12);
console.log(arr14);

// deleting element to array
// when splice is used for deleting element than it returns an array of deleted items
const arr15 = [12, 13, 14, 15, 16, 17];
removeElement = arr15.splice(0, 2);
console.log(arr15);
console.log(removeElement);


const arr16 = ["a", "b", "c", "d"];
console.log(arr16);

//9. slice()
/*
  ---return the part of an array
  ---return completely new array
  ---not affect on source array(original array)
  ---Syntax: (startIndex, endIndex(not include))
  ---omiting endIndex give rest of all element in array
*/

const arr17 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrSlice = arr17.slice(1, 4);
console.log(arrSlice); //return new array
console.log(arr17); //not change in source array

console.clear();

//10. sort()
/*
  ---sort() is sort the array by considering all elements of array as a string
  ---sort() in numeric sorting also consider as a string
  ---we use some function in argument of the sort() like compare function
  ---compareFn(a,b){ return a - b;}
*/
const arr18 = ["d", "a", "r", "aa"];
arr18.sort();
console.log(arr18);

const arr19 = [4, 2, 1, 22, 12];
arr19.sort();
console.log(arr19);

const arr20 = [4, 2, 1, 22, 12];
arr20.sort((a, b) => { return a - b; });
console.log(arr20 + " assending order"); //here one thing is noticed than the automatic toString() is applied when the array is printed with another string
arr20.sort((a, b) => { return b - a; });
console.log(arr20 + " decending order");
console.log(arr20);


//11. reverse()
/*
  ---sort array in reverce order but not give as sortig
*/
const arr21 = ["d", "c", "a", "b"];
arr21.reverse();
console.log(arr21);

const arr22 = [0, 22, 20, 10, 9];
arr22.reverse();
console.log(arr22);

//12. forEach()
/*
  ---this is used when we perform some action on each of the array element
  ---the function called using forEach() have 3 arguments
  ---function argument should be same as
    function function_name(value, index, array)
*/
const arr23 = [1, 2, 3];

let sum = null;
arr23.forEach((value, index, arr) => {
  console.log(value, index, arr);
}); //here the name is not matter it always give first parameter as a value second as a index and third as array it self


//13. map()
/*
  ---map() retrun completly new array
  ---does not affect on source array
*/
const arr24 = [1, 2, 4];

function doubled(value) {
  return value * 2;
}

console.log(arr24.map(doubled));
console.log(arr24);


//14. filter()
/*
  ---filter()retrun a new array
  ---not affect on source array
  ---function is passed as argument
  ---the functio which are passed as a argument is always return a true or false
*/

let arr25 = [1, 2, 3, , 1, 2, 3, " "];

arr25 = arr25.filter(function (x) {
  return x !== " ";
});
console.log(arr25);

arr25 = arr25.filter(x => x !== " "); //this is same work as a above method
console.log(arr25);


//15. reduce()
/*
  ---reduce() take function as a argument
  ---function (accumulator,currentvalue) this type functionis considered in reduce function
  ---initial value of accumulator is first element of an array if we dont specified
    --accumulator value is passed as a second argument of the reduce() if any specific
*/
function sumArr(acc, val) {
  return acc + val;
}

let arr26 = [4, 7, 5, 2, 8, 1];
let sumarr1 = arr26.reduce(sumArr);
console.log(sumarr1);

sumarr1 = arr26.reduce(sumArr, 1); //this is the initial value of accumulator and the give one number higher sum
console.log(sumarr1);

sumarr1 = arr26.reduce((a, b) => a + b);
console.log(sumarr1);
console.log(arr26);