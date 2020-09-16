const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listIngredientsElem = document.querySelector('#ingredients');
ingredients.forEach(num => {
  const itemElem = document.createElement('li');
  itemElem.textContent = num;
  listIngredientsElem.appendChild(itemElem);
});
