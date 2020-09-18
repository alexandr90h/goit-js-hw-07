const rangeFontControlElem = document.querySelector('#font-size-control');
const textLabel = document.querySelector('#text');
const fontChange = function () {
  textLabel.style.fontSize = `${rangeFontControlElem.value}px`;
};
rangeFontControlElem.addEventListener('input', fontChange);
