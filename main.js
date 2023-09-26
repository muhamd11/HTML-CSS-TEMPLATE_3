let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});
// our skills section
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .skill .progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 400) {
    if (!started) {
      allSpanStats.forEach((span) => startCount(span));
    }
    started = true;
  }
};

// our stats section
let statsSection = document.querySelector(".stats");
let allSpanStats = document.querySelectorAll(".stats .box .number");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

// Start Event Section
let countDate = new Date("SEP 21, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .time .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .time .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .time .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .time .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff == 0) {
    clearInterval(counter);
  }
}, 1000);
