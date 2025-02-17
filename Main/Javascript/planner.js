import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
  getUserPlans,
} from "../Javascript/DLU_firebase.js";

const planListBox = document.getElementById("planListBox");
// const navPlannerBox = document.getElementById("nav-planner");

async function plannerTitleName() {
  const titleId = localStorage.getItem("semiID");

  planListBox.insertAdjacentHTML("afterbegin", `<h4>${titleId}'s Planner</h4>`);
}

plannerTitleName();

const cancelBtn = document.querySelectorAll(`.bx-x`);
console.log(cancelBtn);

cancelBtn.forEach((e) => {
  console.log(e);
  e.addEventListener("click", (el) => {
    el.target.parentElement.remove();
  });
});

const resturantTag = document.getElementById("resturantBoxes");
const cafeTag = document.getElementById("cafeBoxes");
const hotPlaceTag = document.getElementById("hotPlaceBoxes");
const resturantArr = [];
const cafeArr = [];
const hotPlaceArr = [];

const rest1Tag = document.querySelector(`.rest1`);
const rest2Tag = document.querySelector(`.rest2`);
const rest3Tag = document.querySelector(`.rest3`);
const rest4Tag = document.querySelector(`.rest4`);
const rest5Tag = document.querySelector(`.rest5`);

function removeDuplicates(array) {
  return [...new Set(array)];
}

const changeSize = document.querySelector(".chageSize");
const plannerBoxTag = document.querySelector(".plannerBox");
const sizeBtn = document.querySelector(".changeSizeBtn");
const sizeDownBtn = document.querySelector(".bx-chevrons-down");

const calendarTag = document.querySelector(".calendar");
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
