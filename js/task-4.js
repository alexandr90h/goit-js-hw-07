const btnAction = document.querySelectorAll('button');
// const btnIncrement = document.querySelector();

const valueElem = document.querySelector('#value');
let counterValue = Number(valueElem.textContent);
const increment = function (val) {
  return (val += 1);
};
const decrement = function () {
  counterValue -= 1;
  console.log(counterValue);
};
console.log(btnAction);
btnAction[0].addEventListener('click', decrement());
