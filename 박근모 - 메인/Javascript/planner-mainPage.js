import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
  getUserPlans,
} from "./DLU_firebase.js";

// const plannerTitle = document.getElementById("planner-title");
// const titleId = localStorage.getItem("semiID");

// function plannerTitleName() {
//   console.log(titleId);

//   plannerTitle.innerHTML = `${titleId}'s planner`;
// }
// plannerTitleName();

const cancelBtn = document.querySelectorAll(`.bx-x`);
console.log(cancelBtn);

cancelBtn.forEach((e) => {
  console.log(e);
  e.addEventListener("click", (el) => {
    el.target.parentElement.remove();
  });
});

const changeSize = document.querySelector(".chageSize");
const plannerBoxTag = document.querySelector(".plannerBox");
const sizeBtn = document.querySelector(".changeSizeBtn");
const sizeDownBtn = document.querySelector(".bx-chevrons-down");

const calendarTag = document.querySelector(".calendar-planner");
console.log(sizeDownBtn);

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
// sizeBtn.addEventListener("click", () => {
//   plannerBoxTag.classList.remove("small");
//   sizeUpBtn.addEventListener("click", () => {});
// });
