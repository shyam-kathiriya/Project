/* *************************************************************
* ************************ OPERATORS ***************************
**************************************************************** */

/*
--There are many types operators in the JS.
  1. Arithmetic Operators (/, *, -, +, %, **, ++, --)
  2. Assignment Operators (=, +=, -=, *=, /=, %=, **=)
  3. Concatination Operator (+)
  4. Comparison Operators (==, ===, !=, !==, <, >, <=, >=, ?)
  5. Logical Operators (&&, ||, !)
  6. Bitwise Operators (&, |, ~, ^, <<, >>, >>>)
*/

// 1. Arithmetic (/, *, -, +, %, **, ++, --)
console.log(5 + 5);
console.log(15 - 2.7);
console.log(15 * 2);
console.log(15 / 2);
console.log(5 ** 2);      //Exponentiation
console.log(5 % 2);       //Reminder
let x = 4;
console.log(x++);         //Postfix Notation thats why print(4) first and than increment to 1 ( finally 5). output: 4
console.log(x);           //here output: 5
console.log(x--);         //Postfix Notation output: 5
console.log(x);           //here output: 4

x = 10;
console.log(++x); //Prefix Notation thats why first increment to 1 (finally 11) and than print. output: 11
console.log(--x);//Prefix notation output: 10

// 2. Assignment Operators(=, +=, -=, *=, /=, %=, **=)
let y = 6;          //assignment (=)
y += 6;             //6 + 6
console.log(y);     //output: 12
y -= 6;             //12 - 6
console.log(y);     //output: 6
y *= 2;             //6 % 2
console.log(y);     //output: 12
y /= 3;             //12 % 3
console.log(y);     //output: 4
y %= 5;             //4 % 5
console.log(y);     //output: 4
y **= 3;            //4 * 4 * 4
console.log(y);     //output: 64

// 3. Concatination Operator (+)
/*
  1. num + num = num
  2. string + num = string
  3. num + num + string = sum of first two + string = string
  4. string + num + num   =  string (last 2 num is considered as string)
  5. string + string = string
*/

let name1 = "Shyam";
let num1 = 18;
let num2 = 2000;
console.log(name1 + num1 + num2);


//4. Comparison Operators(==, ===, !=, !==, <, >, <=, >=, ?);
let x1 = 23;
let x2 = 23;

console.log(x1 == x2);
console.log(x1 != x2);
console.log(x1 === x2);
console.log(x1 !== x2);

console.log("Logical Operator");
// 5. Logical Operators (&&, ||, !)
console.log(true && false);       //both are true than return true
console.log(true || false);       //both are false than return false
console.log(!true);               //return invert of result

// 6. Bitwise Operators(&, |, ~, ^, <<, >>, >>>);
console.log(5 & 1);  //output: 1 (AND)
console.log(5 | 1);  //output: 5 (OR)
console.log(~5);     //output: -6 (NOT) this is use the 2's complement for convert the num. FORMULA: -(N+1)
console.log(5 ^ 1);  //output: 4 (XOR)
console.log(5 >> 1); //output: 2 (rigth shift)
console.log(5 << 1); //output: 10 (left shift)