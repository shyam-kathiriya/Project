/* *************************************************
* ************* REGULAR EXPRESSION *****************
**************************************************** */
let str = "shyam sh";

//exec() method search for a string and return object of matching string if match is found otherwise it retrun null object
let isTrue = /sh/g.exec(str);
console.log(isTrue);

str = "Hello! Good Morning Good";
let pattern = /o/i;
console.log(pattern.test(str));
console.log(pattern.exec(str));

let text = "The best things in life are free";
console.log(/e/.exec(text));

///////////////////
//RexExp Groups
///////////////////
/*
  ---[abc] : any of character between [] (here a,b,c) //this pattern same work for digit too
  ---[A-Z] : any of the character between A to Z (upper)
  ---[a-z] : any of the character between a to z (lower)
  ---[A-z] : any of the character between A to z (both)
  ---[0-9] : any of the digit between 0 to 9
*/

/*
  NOTE: here we expect it return word but for [] this type of group it always match character not word.
*/

str = "this is A REgular Expression";
console.log(str.match(/[is]/g)); //return character as a item of array
console.log(str.match(/is/g)); //return 'is' word as a array
console.log(str.match(/[a-z]/g));
console.log(str.match(/[A-z]/g));

str = "1099207545451";
console.log(str.match(/[012]/g));
console.log(str.match(/[0-7]/g));

/*
  --- ^ this is not quantifier
  --- here notice that the ^ (not quantifier) retrun a whitespace too. whitespace is also added in array as element
*/
str = "this is A REgular Expression";
console.log(str.match(/[^a-z]/g));
console.log(str.match(/[^a-z]/g).filter(val => val !== " "));

/*
  NOTE: here ^ is different work with range. we noticed that the ^ in range[] is define not but with character outside the range define as a start of the string
*/
console.log(str.match(/[^t]/g)); //return all character exclude 't' from str
console.log(str.match(/^t/g)); //this define start with 't'
console.log(str.match(/^a/g)); //return null bcz str is not started with 'a'


//////////////
//(X|Y)
//////////////
/*
  ---(x|y) is called as alternative
  ---return alternative from any of x or y
 */
str = "this is an alternative";
console.log(str.match(/(h|a)/g)); //return h or a


//////////////
// Quantifiers
//////////////
/*
  --- n+ : at least one occurance of n
  --- n* : 0 or more occurance of n
  --- n? : 0 or 1 occurance of n
  --- n{X} : match X times n in string
  --- n{X,Y} : match X to Y times n in string
  --- n{X,} : match more than X times n in string
  --- n$ : match end of string note that not word it check for string
  --- ^n : match start of string note that not word it check for string
*/
