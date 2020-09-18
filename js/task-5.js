const inputElem = document.querySelector('#name-input');
const titleOutputElem = document.querySelector('#name-output');

const outputValueFn = function (event) {
  titleOutputElem.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    titleOutputElem.textContent = 'незнакомец';
  }
};
inputElem.addEventListener('input', outputValueFn);
