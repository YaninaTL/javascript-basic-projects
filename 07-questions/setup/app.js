//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
  });

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});

//I'm withing the question, that's my loop
//Look for a button in my question (not somewhere else) and safe it in a variable btn
//Then I define that I want to be executed - toggle
//And I want to hide other questions text - use remove

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
// btn - an element
// parentElement - goes deeper in the DOM
