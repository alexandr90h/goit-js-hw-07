const btnDecrementElem = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementElem = document.querySelector(
  'button[data-action="increment"]',
);

const valueElem = document.querySelector('#value');
let counterValue = Number(valueElem.textContent);

const colorItem = function (val) {
  if (Number(valueElem.textContent) < 0) {
    valueElem.style.color = 'blue';
  } else if (Number(valueElem.textContent) > 0) {
    valueElem.style.color = 'red';
  } else {
    valueElem.style.color = 'black';
  }
};

const increment = function () {
  counterValue += 1;
  valueElem.textContent = counterValue;
  colorItem(counterValue);
};
const decrement = function () {
  counterValue -= 1;
  valueElem.textContent = counterValue;
  colorItem(counterValue);
};

btnDecrementElem.addEventListener('click', decrement);
btnIncrementElem.addEventListener('click', increment);
