/* *************************************************
* ****************** ERRORS ************************
**************************************************** */
/*
  ---throw : throw exception
*/

/*
  ////// TRY /////
  ---try : try block is allow us to define the block of code which we want to tested for error.
  ---try block is never come alone
  ---either catch or finally or both are come with try
*/

/*
  ////// CATCH /////
  ---catch block allow us to add block of code which are executed when error is occured in try block.
  ---catch block catchs error which are occured in try block.
  ---we can pass the argument in catch statement which accept the error comes from try block.
*/

/*
  ////// FINALLY /////
  ---this block is always executed after the try and catch block.
  ---it does not depend on catch.
    --finally block is always executed not matter if the catch block has exception or not.
*/


/*
  ---there are three syntax.
    --try...catch
    --try...finally
    --try...catch...finally
*/

// try...catch
try {
  throw 'type error';
} catch (e) {
  console.error(e);
  // throw "exp"; //this is uncaught exception
}


// try...finally
try {
  console.log("this is try block");
  // throw "exp"; // this is uncaught exception
} finally {
  console.log("finally");
}
// console.log("this is after uncaught exception");


// try...catch...finally

// this is when try block is throw exception. finally block is still executed.
try {
  console.log("try");
  throw "try exp";
} catch (e) {
  console.error(e);
} finally {
  console.log("finally");
}

// this is when try blcok is not throw exception. finally block is still executed.
try {
  console.log("try");
} catch (e) {
  console.error(e); //this block is skipped bcz try does not throw exception
} finally {
  console.log("finally");
}


/*
  ---Also we can nesting a try block
*/
try {
  try {
    let e = new Error("why");
    e.name = "parseError";
    throw e;
  } catch (e) {
    console.error("inner", e.name, e.message);
    throw "this is catch block's exp";
  }
} catch (e) {
  console.error("outer", e);
}

try {
  try {
    let e = new Error("why");
    e.name = "parseError";
    throw e;
  } catch (e) {
    console.error("inner", e.name, e.message);
  }
} catch {
  console.error("not executed");
}
