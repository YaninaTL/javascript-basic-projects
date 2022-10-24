//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
//Check the difference btw qSelector and byId
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  //to select all of them
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList);
    // event object
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      //decreasing by 1
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    //Add colours
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
