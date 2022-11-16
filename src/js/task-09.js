

const body = document.querySelector('body');
const btnChangeColor = document.querySelector('button');
const span = document.querySelector('.color');

btnChangeColor.addEventListener('click', chColor);

function chColor(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = body.style.backgroundColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}