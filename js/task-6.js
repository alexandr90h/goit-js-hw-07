const inputValidElem = document.querySelector('#validation-input');

const borderColorValid = function () {
  if (inputValidElem.value.length === 6) {
    inputValidElem.classList.replace('invalid', 'valid');
  } else if (inputValidElem.value.length === 0) {
    inputValidElem.classList.replace('valid', 'invalid');
  } else {
    inputValidElem.classList.add('invalid');
  }
};

inputValidElem.addEventListener('blur', borderColorValid);
