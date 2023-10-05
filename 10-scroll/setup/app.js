// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
// toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

/*navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});*/
// KNOWN height, so, it's added to css and this works in js
// if we add one more link -> doesn't work, so, it's not DYNAMIC

navToggle.addEventListener("click", function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //height = 0 by default as we hide it
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
//height = 150 as we have 3 links, so, if we change the quantity it'll be autocalculated

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
