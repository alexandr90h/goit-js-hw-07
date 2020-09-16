const itemElem = document.querySelectorAll('.item');
console.log(`В списку ${itemElem.length} категорії.`);

itemElem.forEach(num => {
  console.log(`Категорія: ${num.querySelector('h2').textContent}`);
  console.log(`Кількість елементів: ${num.querySelectorAll('li').length}`);
});
