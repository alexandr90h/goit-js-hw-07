const btnDecrementElem = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementElem = document.querySelector(
  'button[data-action="increment"]',
);

const valueElem = document.querySelector('#value');
let counterValue = Number(valueElem.textContent);

const increment = function () {
  counterValue += 1;
  valueElem.textContent = counterValue;
};
const decrement = function () {
  counterValue -= 1;
  valueElem.textContent = counterValue;
};

btnDecrementElem.addEventListener('click', decrement);
btnIncrementElem.addEventListener('click', increment);
