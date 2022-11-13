function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const changeColor = (event ) =>{
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
};

btn.addEventListener("click", changeColor);
