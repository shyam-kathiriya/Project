/* *************************************************
* ****************** NUMBERS ***********************
**************************************************** */
/*
  ---Numbers is written in both like with decimal and without decimal
  ---Extra small and extra large numbers are also written in exponent notation
*/

let n0 = 124;
console.log(n0);
n0 = 12.3;
console.log(n0);

n0 = 12e3;
console.log(n0);
n0 = 12e-3;
console.log(n0);

n0 = 0.2 + 0.4; //floating point arithmetic is not always perfect this problem is resolved by multiply and divide
console.log(n0);
n0 = 0.2 + 0.2;
console.log(n0); //this is perfect but above is not


//Numeric String
//JS change the string to number in all arithmetic operation excluded PLUS(+)

let n1 = "12";
let n2 = "2";
console.log(n1 + n2); //concate
console.log(n1 * n2); //multiply
console.log(n1 - n2); //substract
console.log(n1 / n2); //divide
n2 = 2;
console.log(n1 - n2); //this is work because the string is number

n2 = "s";
console.log(n1 / n2); //return NaN when perform on diffrent string (not work because the n2 is not a number string)

//there are also facility to define infinity (outside the largest number)
n0 = Infinity;
console.log(n0);
n0 = 122121221121212e1212121211212121; //big number outside the largest number
console.log(n0);
n0 = -112121121212121e23323; //same is applicable for minus numer
console.log(n0);
console.log(typeof n0); //typeof infinity is number

//In JS we can write number in hexadeciamal as well
//for hexadecimal number we use 0x at starting to tell compiler to this is hexadecimal number
//JavaScript displays numbers as base 10 decimals.
n0 = 0x101; //hexadecimal number
console.log(n0);


//same as string there are also a numbers as object (see string for same)


/* *************************************************
* ************** NUMBERS METHODS *******************
**************************************************** */

//1. toString()
/*
  ---syntax: [num,var].toString();
  ---it retrun the string of the number
  ---if pass the parameter as a number from 2 to 36 it retrun the base2 to base36 numbers
*/
n0 = 32;
console.log(typeof n0.toString(), n0.toString());
console.log(typeof (211).toString(), (211).toString());
console.log(n0.toString(2) + " binary number of 32");
console.log(n0.toString(8) + " octal number of 32");

//2. toExponential()
/*
  ---it retrun the exponential notation number
  ---it take one parameter define the howmany digits are shown after the decimal point
*/
n0 = 123.34232349999;
console.log(n0.toExponential(2)); //it show only 2 digit after decimal point

console.log(n0.toExponential());


//3. toFixed()
/*
  ---return the number with specified number of digits after decimal point
  ---parameter take number (this define how many digits you want after )
*/
n0 = 9.534;
console.log(n0.toFixed()); //this remove decimal part and give round figure number
console.log(n0.toFixed(0)); //this remove decimal part and give round figure number
console.log(n0.toFixed(2)); //9.23
console.log(n0.toFixed(5)); //9.23400


//4. toPrecision()
/*
  ---this retrun a string with specified number of length
  ---parameter as a length of the string
  ---decimal point is not counted in a length of final string
*/
n0 = 12.344;
console.log(n0.toPrecision()); //pass null parameter give same number as a string
console.log(typeof n0.toPrecision(2), n0.toPrecision(2)); //return 12
console.log(n0.toPrecision(10)); //add extra 0 if the number is greater than the original number

n0 = 122623443121;
console.log(n0.toPrecision(3)); //on perfect number it work same as a toExponential() //but toPrecision() take full length of the number and also its data type is string not number
console.log(typeof n0.toPrecision(3), n0.toPrecision(3));


//5. Number()
/*
  ---return the number converted from argument
  ---typeof NaN is number
*/
n0 = "123";
console.log(typeof Number(n0), Number(n0)); //same number
console.log(typeof Number(n0), Number(true)); //1
console.log(typeof Number(n0), Number("true")); //NaN
console.log(typeof Number(n0), Number(false)); //0
console.log(typeof Number(n0), Number("false")); //NaN
console.log(typeof Number(n0), Number("sk")); //NaN
console.log(typeof Number(n0), Number("1012 ")); //1012
console.log(typeof Number(n0), Number("   1011 ")); //1011
console.log(typeof Number(n0), Number("10 101012 ")); //NaN
console.log(typeof Number(n0), Number("10.12 ")); //10.12
console.log(typeof Number(n0), Number("10,101012 ")); //NaN
console.log(typeof Number(n0), Number("sk")); //NaN

//NOTE: in Number() not accept space if it looks space then it give NaN


//6. parseInt()
/*
  ---retrun a number
  ---spaces are allowed but the first number is return
  ---convert the float number to int as well
*/
console.log(typeof parseInt("-10.90"), parseInt("-10.90")); //-10
console.log(parseInt("0 1 2")); //0
console.log(parseInt("10.11 years")); //10
console.log(parseInt("year 10")); //NaN



//7. parseFloat()
/*
  ---same as parseInt() but it convert the int number to float
*/
console.log(parseFloat("10.90")); //10.9
console.log(parseFloat("112.34.090")); //112.34


//8. isNaN()
/*
  ---check the parameter is a number or not if it s number than retrun true else false
*/
n0 = "shyam";
console.log(isNaN(n0)); //true
n0 = 123;
console.log(isNaN(n0)); //false


/* *************************************************
* ************** NUMBERS PROPERTIES ****************
**************************************************** */
/*
  ---Basically we know the properties are apply on object or a varriable specially in JS. example .length property is used to find the length of string we use ..length with variable as well but for number it is difference.
  ---Number properties is not used with variables it is only used with "Number"(object)
  ---Number.MAX_VALUE (Number is object)
  ---reason for that is the all properties are defined inside the Number object
*/


n0 = Number.MAX_VALUE;
console.log(n0); //largest number
n0 = Number.MIN_VALUE;
console.log(n0); //smallest number
n0 = Number.POSITIVE_INFINITY;
console.log(n0); //infinity
n0 = Number.NEGATIVE_INFINITY;
console.log(n0); //-infinity
n0 = Number.NaN;
console.log(n0); //NaN
