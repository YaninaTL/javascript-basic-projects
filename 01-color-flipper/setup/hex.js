const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  //Need # as a variable; LET is important here as we need to add values from the array -> to change LET
  //Loop x6 as hex color has 6 values
  for (let i = 0; i < 6; i++) {
    /* hexColor += hex[0];*/
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  //The color is black now -> the index is 0
  //Commend the hex with the index and add a new function with the method
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
