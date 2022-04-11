
/* *************************************************************
* ************************ THIS KEYWORD ************************
**************************************************************** */

// link: https://www.w3schools.com/js/js_this.asp

/*
  ---THIS keyword's meaning is defer for every situation like where it is used.
    --this keyword inside the object method refer the same object.
    --if this keyword alone inside the object method than also it refers the same object.
    --(default mode) this keyword inside the any function which are not inside any object is refers a global object. (window object)
    --(strict mode) this keyword inside the any function which are not inside any object is undefined.
    --(default mode) this keyword alone is refer global object. (window object)
    --(strict mode) this keyword alone is refer global object. (window object)
    --this keyword in event handler refer same element that recieve the event.
*/


const laptop1 = {
  ram: 16,
  cpu: 'i9',
  brand: 'HP',
  getConfig: function () {
    console.log(this.ram, this.cpu, this.brand);
  }
};

const laptop2 = {
  ram: 8,
  cpu: 'i5',
  brand: 'DELL',
  getConfig: function () {
    console.log(this.ram, this.cpu, this.brand);
  },
  rtnThis: function () {
    return this; //here this keyword is refer object itself bcz this method is inside the object called object method
  }
};

laptop2.getConfig();
let rtnThis = laptop2.rtnThis();
console.log(rtnThis);

console.log(laptop2); // we also print the object using its name // same as variable
