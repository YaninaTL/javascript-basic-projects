// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Select buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Working with the array
// From 0 to 3 as there are 4 items
let currentItem = 0;
//global

//Load initial item
//Callback
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);

  /*const item = reviews[currentItem];
  img.src = item.img;*/
  // or img.src = reviews[currentItem].img;
  //We can see the first person as let currentItem = 0;
  //Change all the info
  /*author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;*/
});

//Show person based on item

function showPerson(person) {
  const item = reviews[person];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;

  //Use the function not to repeat every time
  //Change listener
}

//Show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  //to avoid an error
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
    // Start from the very beginning
  }
  showPerson(currentItem);
});

//Show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  //to avoid an error
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
    // Start from the very beginning
  }
  showPerson(currentItem);
});

//Random btn
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
//Doesn't work!
