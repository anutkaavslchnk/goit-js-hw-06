const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list=document.querySelector('#ingredients');
const array=[];
ingredients.forEach(ingredient=>{
  const listItem=document.createElement("li");
  listItem.textContent=ingredient;
  listItem.classList.add("item");
 array.push(listItem);
});

list.append(...array);
