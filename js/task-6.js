const inputValidElem = document.querySelector('#validation-input');

const borderColorValid = function () {
  if (inputValidElem.value.length === 6) {
    inputValidElem.classList.remove('invalid');
    inputValidElem.classList.add('valid');
  } else {
    inputValidElem.classList.remove('valid');
    inputValidElem.classList.add('invalid');
  }
};

inputValidElem.addEventListener('blur', borderColorValid);
