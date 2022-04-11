/* *************************************************
* ********************* SETS ***********************
**************************************************** */

/*
  ---JS sets store a unique values
  ---sets never contain duplicate value
  ---only unique value is stored
  ---if we give multiple same value then it store only once other same value is discard
  ---this is case sensitive
  ---stricly compare for add or discard new value it keeps "4" and 4 in same set
*/

let personName = new Set("RivaanrR");
console.log(personName);

//we can add values and variable to sets
let newSet = new Set();
newSet.add("john");
newSet.add("q");
newSet.add("4");
newSet.add("23");
newSet.add(909);
newSet.add("4"); //this is not affecr bcz 4 string is already there
newSet.add(4);//this is affect but 4 number isnot there
let strvar = "doe";
newSet.add(strvar);
console.log(newSet);
newSet.delete(909); //deleting element
console.log(newSet);
console.log(newSet.has(909));
console.log(newSet.has("john"));


for (const items of newSet) {
  console.log(items);
}

//forEach() is also use for iterating a set
//forEach() take method as a parameter and call for every value of the set

//in set there are no any facilities like keys but in forEach() the callback function take same 3 argument (entries,key,set) but this is for only consistance over all other datatype which used forEach() here key is same as a value

newSet.forEach(element => {
  console.log(element);
});

newSet.forEach((entries, key, set) => {
  console.log(`the value of ${key} is ${entries}`);
  console.log(set);
});

/* *************************************************
* ********************* MAPS ***********************
**************************************************** */
/*
  ---map constain data in a key value pais
  ---same as sets map not contain duplicate value
  ---we can access the data using key
*/
let myMap = new Map([
  ["total", 1230],
  ["damaged", 0]
]);

myMap.set("apples", 900);
myMap.set("mangos", 100);
myMap.set("mangos", 100); //this is not affect on map same as set
myMap.set("bananas", 230);
myMap.set("bananas", 230);
console.log(myMap);

console.log(myMap.get("apples"));
console.log(myMap.has("meggi"));
console.log(myMap.has("bananas"));

myMap.forEach((value, key, map) => {
  console.log(`the value of ${key} is a ${value}`);
  console.log(map);
});

console.log(myMap.entries());

for (const entry of myMap) {
  console.log(entry);
}
