//Select

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Listen for our click events
toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classList);

  /*  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
  */

  //Another method that is shorter
  sidebar.classList.toggle("show-sidebar");
});

//Close btn
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

//Don't see the icon btn
