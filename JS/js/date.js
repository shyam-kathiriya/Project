/* *************************************************
* ********************* DATE ***********************
**************************************************** */

/*
  ---Date() is a object in JS.
  ---There are 4 types for creating date object.
    1. new Date()
    2. new Date(y,m,d,h,m,s,ms)
    3. new Date(ms)
    4. new Date(date string)
*/

//1. new Date()
const currentDate = new Date();
console.log(currentDate); //return the current time zone and date of user browser

//2. new Date(y,m,d,h,m,s,ms)
/*
  ---month is started from 0.
    --0 for january
    --11 for december
  ---here if we add higher than 11 in months that not give an error but it adds month in to next year
*/
const customDate = new Date(2018, 11, 12, 16, 30, 0);
console.log(customDate);

const customDate2 = new Date(2010, 15, 12, 17, 23, 30); //change the year based on months if we add the higher number than 11 in months
console.log(customDate2);

//3. new Date(ms)
/*
  ---Date(ms) is creates new date object with zero date plus millisecond passed through argument to Date().
  ---zero date is 01 Jan 1970
*/
const msDate = new Date(86400000); // 1 day == 86400000 ms
console.log(msDate); //this give a 02 jan 1970

//4. new Date(date string)
/*
  ---creates new object from given date string
  ---we can give date as a string into argument of Date()
*/
const dateStr = new Date("jan 14, 1997 11:22:23");
console.log(dateStr);


let d = new Date("2018-04-20");//yyyy-mm-dd
console.log(d);
d = new Date("2018/04/20");//yyyy/mm/dd
console.log(d);
d = new Date("10-02-2019"); //mm-dd-yyyy
console.log(d);


/* *************************************************
* ***************** DATE METHODS *******************
**************************************************** */

//1. toString()
/*
  ---when date is display in HTML is automaticcaly converted to string
  ---ny default date is in string format
*/
d = new Date();
//console.log(typeof d.toString()); //typeof d is object but when we use toString() it is converted to string

document.getElementById("dateDemo").innerHTML = d; //when we display date in HTML we dont need to convert into string for that it will automatically converted


//2. toUTCString()
console.log(d.toUTCString());

//3. toDateString()
/*
  ---it display only date in more readeabel format (time is not display in this method)
*/
console.log(d.toDateString());

//4.toISOString()
console.log(d.toISOString());

//5. parse()
d = Date.parse("march 12,2019");

d = Date.now();
console.log(d);

////////////////////
//GET METHODS
///////////////////

//1. getFullYear()
d = new Date();
console.log(d.getFullYear()); //retrun only year (YYYY)

//2. getMonth()
console.log(d.getMonth()); //return month in digit 0-11

//3. getDate()
console.log(d.getDate()); //retrun date in digit 1-31

//4. getHours()
console.log(d.getHours()); //return hours in digit 0-23

//5. getSeconds()
console.log(d.getSeconds()); //0-59

//6. getMilliseconds()
console.log(d.getMilliseconds());

//7. getTime()
/*
  ---this retrun a time into milliseconds from 01 jan 1970
*/
d = new Date("jan 23,2019");
console.log(d.getTime()); //this retrun a any date into ms

//8. getDay()
console.log(d.getDay()); //return weekday in digit 0-6 (0=sunday)

//9. Date.now()
console.log(Date.now()); //retrun current time in ms


////////////////////
//SET METHODS
///////////////////

//1.setFullYear()
d = new Date();
d.setFullYear(2019);
console.log(d);

//2.setMonth()
d.setMonth(7); //month name is not allowed only pass number between 0-11
console.log(d);

//3.setDate()
d.setDate(23);
console.log(d);

//4.setHours()
d.setHours(23);
console.log(d);

//5.setMinutes()
d.setMinutes(45);
console.log(d);

//6.setSeconds()
d.setSeconds(56);
console.log(d);

//7. setMilliseconds()
d.setMilliseconds(2444);
console.log(d);

//8. setTime()
d.setTime(86400000);
console.log(d);