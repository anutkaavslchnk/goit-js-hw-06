const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list=document.createElement('ul');
list.id = 'ingredients';

ingredients.forEach(ingredient=>{
  const listItem=document.createElement("li");
  listItem.textContent=ingredient;
  listItem.classList.add('.item');
  list.appendChild(listItem);
});

console.log(list);