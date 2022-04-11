/* *************************************************
* ************* ASYNC_AWAIT_PROMISE ****************
**************************************************** */

function fnAfter1s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("resolved fnAfter1s");
      resolve();
    }, 1000);
  });
}

function fnAfter2s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("resolved fnAfter2s");
      resolve();
    }, 2000);
  });
}

function fnAfter5s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("resolved fnAfter5s");
      resolve();
    }, 5000);
  });
}

//////////using async/await/////////////

async function getData() {
  await fnAfter5s();
  console.log("after resolving fnAfter5s");
  await fnAfter2s();
  console.log("after resolving fnAfter2s");
  console.log("getdata");
}

getData();


//////////using promise///////////

// fnAfter5s().then(() => {
//   console.log("after resolving");
//   getData();
// });

// function getData() {
//   console.log("get data ");
// }
