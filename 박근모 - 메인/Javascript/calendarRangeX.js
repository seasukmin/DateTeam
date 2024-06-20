import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "./DLU_firebase.js";
const currentMonthYear = document.getElementById("currentMonthYear");
const daysContainer = document.getElementById("days");
const navPlannerBox = document.getElementById("nav-planner");
const day1Tag = document.querySelector(".day1");
const calendarTag = document.querySelector(".calendar");
let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const week = currentDate.getDay();
  const weekArr = ["Sun.", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  currentMonthYear.innerText = `${year}년 ${month + 1}월`;
  day1Tag.innerHTML = `${year}.${month + 1}.${day} (${weekArr[week]})`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    daysContainer.appendChild(emptyCell);
  }

  for (let i = 1; i <= lastDate; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("dayItem");
    dayCell.innerText = i;
    dayCell.addEventListener("click", () => {
      const selected = document.querySelector(".days .selected");
      if (selected) {
        selected.classList.remove("selected");
      }
      dayCell.classList.add("selected");
      const selectedDiv = document.querySelector(".selected");
      day1Tag.innerHTML = `${year}.${month}.${selectedDiv.innerHTML} (${weekArr[week]})`;
    });
    const dayTag = document.querySelectorAll(".dayItem");
    dayTag.forEach((e) => {
      e.addEventListener("click", () => {
        calendarTag.classList.add("hidden");
      });
    });
    daysContainer.appendChild(dayCell);
  }
}

day1Tag.addEventListener("click", () => {
  calendarTag.classList.toggle("hidden");
});
// navPlannerBox.insertAdjacentHTML(
//   "afterbegin"`<div class="day1">${year}.${month}.${day}(${weekArr[week]})</div>`
// );
document.getElementById("prevMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
