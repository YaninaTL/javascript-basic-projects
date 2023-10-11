const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadLine = document.querySelector("deadline");
const item = document.querySelectorAll(".deadline-format h4");

// loop and add
let futureDate = new Date(2024, 3, 24, 8, 0, 0);
// months with 0 index, so, May = 4
// hours from 0 to 24

const year = futureDate.getFullYear();

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();

/*giveaway.textContent = `Giveaway ends on ${month} ${year} ${String(
  hours
).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
//solution for 08:00; without methods is 8:0
*/

// month and day through arrays
let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];
// shorter way than month

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;
//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // t - difference btw current and future time
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  //86400000
  const oneHour = 60 * 60 * 1000;
  // 3600000
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  // let hours = t / oneHour
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  item.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
}
getRemainingTime();
