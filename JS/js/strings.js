/* *************************************************
* ****************** STRINGS ***********************
**************************************************** */

/*
  ---string is the text inside the single or double quotes.
  ---number inside the quotes is also treated as a string.
  ---to concatenate two string +(concate operator) is used.
  ---there are many rules apply to the string and number concatination. (show examples in operator.js)
*/

//string .length property
/*
  ---if we use length property for num it returns undefined
    let num1 = 23;
    console.log(num1.length);
  ---length property is count the code unit insted of actual character.
*/
let text1 = "sh yam"; //space is counted in length of string
console.log(text1.length);

let emoji = "😀";
console.log(emoji.length); //this return 2 bcz emoji take 2 unit code

//Escape Character
/*
  ---if we want to use the quotes inside other quotes we use this character to prevent the error which are occured at when we use the quotes inside the another quotes
  ---there are many escape character
    --escape character is define using backslash(\)
    --for single quote (\')
    --for double quote (\")
    --for backslash (\\)
    --for newline (\n)
    --for tab (\t)

*/
console.log("shyam\'s laptop");
console.log("\"dog\"");
console.log("\\\\ this is  comment"); //for each occerence of the special character we need another backslash

//String as a object
/*
  ---in JS the string is an primitive value
  ---but if we want to define the string as object than it ios also true in JS
*/
let text = "shyam";                  //this is string as a primitive
let textObj1 = new String("shyam");    //this is a string as object
let textObj2 = new String("shyam");    //this is a string as object

let isSame = textObj1 == textObj2;    //comparing two object is always return false
isSame = textObj1 === textObj2;       //comparing two object is always return false
console.log(isSame + " this is always false");

isSame = text == textObj1;  //change the operator and check
console.log(isSame);

console.log(textObj1);
console.log(textObj1.length + " Sting obj length"); //if string is defined as object than we can use length property but we can not use the length property with normal object
console.log(text);

const car = {
  name1: "car12",
  model: 2000
};
//console.log(car.length); //undefined //bcz we can not measure the length of normal object


/* *************************************************
* **************** STRINGS METHODS *****************
**************************************************** */
/*
  ---string pos is counted from 0
  ---If a parameter is negative, the position is counted from the end of the string.
*/
let str = "Hello World!";
console.log(str + " Original str.");


//1. slice(startPos,endPos)
/*
  ---slice extract the part of string and retrun the extracted string
  ---startPos is included and endPos is excluded
*/
console.log(str.slice(0, 12));
console.log(str.slice(1, 5));
console.log(str.slice(-12, -1)); //negative numbers is counted from end (-1 represent the last character of the string)
console.log(str.slice(6)); //omit 2nd parameter give rest of all string started from 1st argument which you passed


//2. substring(startPos,endPos)
/*
  ---similar to slice() but not accept negative number
  ---same rules of slice
*/
console.log(str.substring(0, 5));
console.log(str.substring(5)); //same as slice

console.log(str.substring(2, 6));
console.log(str.substring(6, 2));
/*
  ---this both are give same result
  ---in substring() the firstPos is greaterthan endPos than it treat as the argument is swapped
*/


//3. substr(startPos,length)
/*
  --similar to slice() but second parameter is define length
*/
//let str = "Hello World!";
console.log(str.substr(2, 6));
console.log(str.substr(2)); //same as slice
console.log(str.substr(-12, 5));


//4. replace()
/*
  ---first parameter is replaced with second parameter
  ---only first match is replaced using replace()
  ---replace() return a new string
  ---replace() is not change original string

  ---there are concept of regular expression for doing some operation like replacing all occerence and replace case insentive
*/
let str1 = "good morning";
console.log(str1.replace('Morning', 'shyam')); //not changed bcz its case sensitive
console.log(str1.replace('morning', 'shyam'));

console.log(str1); //this string is not changed bcz replace() is replce value and give new string


//5. toLowerCase() and  toUpperCase()
str1 = "good AfternooN";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.slice(0, 5).toUpperCase());


//6. concate()
/*
  ---If the arguments are not of the type string, they are converted to string values before concatenating.
*/
let str2 = "good";
let str3 = "afternoon";

console.log(str2 + " " + str3);
console.log(str2.concat(" ", str3)); //same as above statement


//7. trim()
str2 = "      GOOD  ";
console.log(str2.trim());
console.log(str2.trim().length);


//8. padStart() and padEnd()
/*
  ---padX(length of string after pad, anything you want to pad)
  ---omiting second parameter use default character to pad  (default : " "(space))
  ---this two method is used to add pad character in string either at start of the string or at end of the string
*/
str2 = "1";
console.log(str2.padStart(5));
console.log(str2.padStart(5, 0));
console.log(str2.padEnd(5));
console.log(str2.padEnd(5).length);
console.log(str2.padEnd(10, 9));


//9. charAt(position)
/*
  ---return the character at given position
*/
str2 = "good";
console.log(str2.charAt(2)); //return o
console.log(str2.charAt(20)); //return empty string bcz index 20 is not there


//10. charCodeAt(position)
/*
  ---return unicode UTF-16 code of the character at given position
*/
console.log(str2.charCodeAt(3)); //charactercode of 'd'


/*
  ?  ___special note___
  ---It makes strings look like arrays (but they are not)
  ---If no character is found, [ ] returns undefined, while charAt() returns an empty string.
  ---It is read only. str[0] = "A" gives no error (but does not work!)
*/
str2 = "example";
str2[3] = "a"; //this is not giva an error but not work
console.log(str2[3]); //return character at index 3 (position:4)


//11. split(character which we want to split using, start)
/*
  ---start defines where to start searching (optional)
  ---split() is used to convert string to array.
*/
str2 = "a,b,c,d,e,f,g,h,j,i,k,l";
console.log(str2.split(","));
console.log(str2.split(",", 5)); //second argument is considered as the max length of array
str2 = "abcdefg";
console.log(str2.split("")); //separate each character in array
console.log(str2.split()); //give an array with all string at index 0


//12. indexOf("text",start) and lastIndexOf("text",start)
/*
  ---start defines where to start searching (optional)
  ---return the index of the first occurance of any specific text in string
  ---if text is not present than return -1
  ---this is also case-sensitive
  ---both method accept second parameter as the starting point of the search
*/
str2 = "This is a function variable redeclaration inside the or outside the function.";

console.log(str2.indexOf("function")); //retrun the index of first occurance of the function
console.log(str2.indexOf("function", 11)); //here fisrt occurance at index 10 but we start searching from index 11 thats why it give the next first occurance
console.log(str2.indexOf("FUN")); //return -1
console.log(str2.lastIndexOf("function")); //searching start from end of the string and give the last occurance of the text in string
console.log(str2.lastIndexOf("function", 15)); //here the searching is started from index 15 but in reverse direction so here the last occurance is at index 69 but searching started at index 15 thats why it return the index 10


//13. search("text" or RegEx)
/*
  ---search method is return index of string which are passed as a parameter.
  ---search() and indexOf() is not same  bcz search() cannot accept second parameter as indexOf() and indexOf() is not accept the RegEx as a parameter.
*/
console.log(str2.search("inside")); //return the index of the first occurance of the 'inside'
console.log(str2.search(/Inside/i)); //retrun same index of above expression here we use the RegEx this define the case insentive thats why the string is matched with capital I otherwise it return -1 as next statement
console.log(str2.search("Inside")); //return -1 bcz text not present in string


//14. match(RegEx)
/*
  ---it accept only RegEx
  ---retrun value as a array object,in array one item for each match
  ---return nulll if not matches
*/
str2 = "this is is this";
console.log(str2.match(/is/)); //first occurance as a array
console.log(str2.match(/is/g)); //if we not use /g than match() also return only first occurance of the text
console.log(typeof str2.match(/is/g));


//15. includes("searchText", start)
/*
  ---start defines where to start searching (optional)
  ---return true if text is present in string else false
  ---also case sensitive
*/
console.log(str2.includes("this")); //true
console.log(str2.includes("that")); //false


//16. startsWith("searchText", start)
/*
  ---start defines where to start searching (optional)
  ---return true if string is started with 'searchText'
*/
str2 = "this is a dog";
console.log(str2.startsWith("this")); //true
console.log(str2.startsWith("this", 5)); //false bcz there are no any 'this' after index 5
console.log(str2.startsWith("is")); //false
console.log(str2.startsWith("is", 5)); //true bcz we start searching from index 5 and the 'is' is present on first place so the string is started with 'is' thats why it retrun true
console.log(str2.startsWith("This")); //false case-sensitive


//16. endsWith("searchText", start)
/*
  ---start defines where to start searching (optional)
  ---return true if string is started with 'searchText'
*/
str2 = "this is a dog";
console.log(str2.endsWith("dog"));
console.log(str2.endsWith("is", 7));
console.log(str2.endsWith("this"));
console.log(str2.endsWith("is", 7));
console.log(str2.endsWith("This"));



/* *************************************************
* *************** TEMPLATE LITERALS ****************
**************************************************** */
/*
  ---we use backticks (``) for template literals
  ---it allowed:
    --single and double quotes
    --multiline string
    --interpolation
    --variable substitution
    --HTML templet
*/

let tempLit = `This is shyam's "pen".`;
let pen = "pen";
console.log(tempLit);
tempLit = `This is
multiline
string`;
console.log(tempLit);
tempLit = `This is shyam's "${pen}"`;
console.log(tempLit);

let x0 = 23;
let y0 = 34;
let sum = `sum: ${x0 + y0}`;
console.log(sum);