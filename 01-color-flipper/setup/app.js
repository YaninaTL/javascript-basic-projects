const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // document.body to target the body
  /*const randomNumber = 2;*/
  // index 2 -> rgba(133,122,200)
  // get a random number between 0 - 3

  //   should comment previous randomNumber,add a method and have a new randomNumber
  const randomNumber = getRandomNumber();
  //   don't have numbers between 0 - 3 -> need to multiply the method

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
// The color on the page is rgba(133,122,200)

// Add method
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
// Add multiplication to have the necessary range
//Need to round numbers -> Math.floor
//All our 4 color options determined in the very beginning
