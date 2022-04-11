/* *************************************************
* ********************* MATH ***********************
**************************************************** */
/*
  ---Math is a JS object.
  --there are many properties and methods for performing different operation on numbers.
*/

//Properties (constant)
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

/* *************************************************
* **************** MATH PROPERTIES *****************
**************************************************** */

//1. Math.round()
/*
  ---retun round number of given number as a maths rules
  ---0.5 and up give higher number
*/
console.log(Math.round(12.2));
console.log(Math.round(12.5));
console.log(Math.round(12.8));


//2. Math.ceil()
/*
  ---return round value of nearest higher number
*/
console.log(Math.ceil(34.2));
console.log(Math.ceil(34.5));
console.log(Math.ceil(34.8));


//3. Math.floor()
/*
  ---return round value of nearest lower number
*/
console.log(Math.floor(34.3));
console.log(Math.floor(34.5));
console.log(Math.floor(34.8));


// 4. Math.trunc()
/*
  ---return only integer part of the number
  ---not perform round operation
  ---not matter what is given after dot(.)
*/
console.log(Math.trunc(32.3));
console.log(Math.trunc(32.5223));
console.log(Math.trunc(32.8));


//5. Math.sign()
/*
  ---retrun -1,0,1 based on number is negative,positive or zero
    --negative (-1)
    --zero (0)
    --positive (1)
*/
console.log(Math.sign(-12));
console.log(Math.sign(0));
console.log(Math.sign(12));


//6. Math.pow(x,y)
/*
  ---retrun the power of number
*/
console.log(Math.pow(2, 3)); //8
console.log(Math.pow(12, 2)); //144


//7. Math.abs()
/*
  ---retrun the absolute (positive) value of number
*/
console.log(Math.abs(-9));
console.log(Math.abs(-9.5));
console.log(Math.abs(-9.8));


//8. Math.min() and Math.Max()
console.log(Math.min(0, 12, 129, -23, -200));
console.log(Math.max(0, 12, 129, -23, -200));


//9. Math.sin()
/*
  ---return sine value of angle in between -1 to 1 in radians
  ---angle in radian = angle in degrees *PI/180
*/
console.log(Math.sin(90 * Math.PI / 180));


//10. Math.cos()
/*
  ---return cosin value of angle in between -1 to 1 in radians
  ---angle in radian = angle in degrees *PI/180
*/
console.log(Math.cos(0 * Math.PI / 180));

//11. Math.log(X)
/*
  ---return natural log of X base e
*/
console.log(Math.log(2));


//12. Math.log2(X)
/*
  ---return log of X base 2
*/
console.log(Math.log2(2)); //1


//13. Math.log10(X)
/*
  ---return log of X base 10
*/
console.log(Math.log10(10)); //1


//14. Math.sqrt()
console.log(Math.sqrt(4)); //2
console.log(Math.sqrt(9)); //3


//15. Math.exp(x)
/*
  ---return the E^x value
*/
console.log(Math.exp(2).toFixed(2)); //E^2
console.log((Math.E * Math.E).toFixed(2)); //proove

///16. Math.random()
/*
  ---return random number between 0 (include) and 1 (exclude)
  ---always return number < 1
*/
console.log(Math.random());

//random number between 0 to 9
console.log(Math.floor(Math.random() * 10));

//random number between 0 to 10
console.log(Math.floor(Math.random() * 10) + 1);