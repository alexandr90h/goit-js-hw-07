const inputNumberElem = document.querySelector('#controls input');
const btnRenderElem = document.querySelector(
  '#controls button[data-action="render"]',
);
const btnDestroyElem = document.querySelector(
  '#controls button[data-action="destroy"]',
);
const mainBoxesElem = document.querySelector('#boxes');

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `${r},${g},${b}`;
};
const destroyBoxes = () => {
  const childBoxOldElem = mainBoxesElem.querySelectorAll('div');
  if (Number(childBoxOldElem.length) > 0) {
    childBoxOldElem.forEach(num => {
        mainBoxesElem.removeChild(num);
    });
  }
};
const createBoxes = function () {
  destroyBoxes();
  let widthHeightValue = 30;
  for (let i = 0; i < Number(inputNumberElem.value); i++) {
    const childBox = document.createElement('div');
    childBox.style.backgroundColor = `rgb(${randomColor()})`;
    childBox.style.width = `${widthHeightValue}px`;
    childBox.style.height = `${widthHeightValue}px`;
    mainBoxesElem.appendChild(childBox);
    widthHeightValue += 10;
  }
};
btnRenderElem.addEventListener('click', createBoxes);
btnDestroyElem.addEventListener('click', destroyBoxes);
