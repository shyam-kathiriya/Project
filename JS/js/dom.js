/*
  ---Difference between HTMLCollection and NodeList
  ---HTMLCollection is a live data structure
  ---NodeList is a static data structure
  ---HTMLCollection return by getElementBy* methods
  ---NodeList return by querySelector and querySelectorAll

  ---update html using js is not reflected to Nodelist when the HTMLCollection is reflects HTML update
*/

//get UL element
const list = document.getElementById('list');

//Get items by class name (two ways)
const itemsByClassName = document.getElementsByClassName('list-item');

const itemsByQuerySelector = document.querySelectorAll('.list-item');

console.log('First console log', itemsByClassName, itemsByQuerySelector);

const newItem = document.createElement("li");
const newItemText = document.createTextNode("item-5");
newItem.className = "list-item";
newItem.appendChild(newItemText);
list.appendChild(newItem);
console.log(newItem);


console.log('Second console log', itemsByClassName, itemsByQuerySelector);
