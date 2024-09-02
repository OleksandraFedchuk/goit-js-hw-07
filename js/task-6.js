function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
console.log("🚀 ~ controls:", controls)
const input = document.querySelector('input[type="number"]');

const buttonCreate = document.querySelector('button[type="button"][data-create]');
const buttonDestroy = document.querySelector('button[type="button"][data-destroy]');
const boxes = document.querySelector('#boxes');
console.log("🚀 ~ buttonDestroy:", buttonDestroy)

input.addEventListener('input', updateInputValue);
let inputValue = 0;

function updateInputValue(event) {
  inputValue = input.value;
  console.log("🚀 ~ inputValue ~ inputValue:", inputValue)
}

// function createElements (event) {

//   const squares = document.querySelectorAll('.square');

//   squares.forEach(square => square.remove());

//   if (inputValue >= 1 && inputValue <= 100) {
//     for (let i = 0; i < inputValue; i++) {
//       const square = document.createElement("div");
//       square.classList.add("square");
//       square.style.width = `${30 + i * 10}px`;
//       square.style.height = `${30 + i * 10}px`;
//       square.style.backgroundColor = getRandomHexColor();
//       boxes.append(square);
      
//     } 
//   }
//   input.value = "";

// }

function createElements(event) {
  const squares = document.querySelectorAll('.square');
  

  squares.forEach(square => square.remove());

  if (inputValue >= 1 && inputValue <= 100) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < inputValue; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${30 + i * 10}px`;
      square.style.height = `${30 + i * 10}px`;
      square.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(square);
    }

    boxes.appendChild(fragment);
  }

  input.value = "";
}

buttonCreate.addEventListener('click', createElements);
buttonDestroy.addEventListener('click', destroyElements);

function destroyElements(event) {

  boxes.innerHTML = "";
 
}

