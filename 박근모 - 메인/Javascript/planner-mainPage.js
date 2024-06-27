import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
  getUserPlans,
} from "./DLU_firebase.js";

const cancelBtn = document.querySelectorAll(`.bx-x`);

cancelBtn.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.target.parentElement.remove();
  });
});

const changeSize = document.querySelector(".chageSize");
const plannerBoxTag = document.querySelector(".plannerBox");
const sizeBtn = document.querySelector(".changeSizeBtn");
const sizeDownBtn = document.querySelector(".bx-chevrons-down");

const calendarTag = document.querySelector(".calendar-planner");

sizeBtn.addEventListener("click", () => {
  const sizeUpBtn = document.querySelector(".bx-chevrons-up");
  sizeDownBtn.classList.toggle("bx-chevrons-down");
  sizeDownBtn.classList.toggle("bx-chevrons-up");
  if (sizeUpBtn == null) {
    plannerBoxTag.classList.add("small");

    calendarTag.classList.add("hidden");
  } else if (sizeUpBtn != null) {
    plannerBoxTag.classList.remove("small");
  }
});

// 로그인 여부에 따른 planner on/off
if (
  localStorage.getItem("ID") === null &&
  localStorage.getItem("semiID") === null
) {
  document.getElementById("plannerBox").classList.add("hiddenBox");
} else {
  document.getElementById("plannerBox").classList.remove("hiddenBox");
}
