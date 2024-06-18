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
  const planSnapshot = await getUserPlans("plan", "2024-06-18", "asdqwe1");
  planSnapshot.forEach((doc) => {
    // console.log(doc.data());
  });
  const data = await getDatas("plan");
  data.forEach((doc) => {
    // console.log(doc.data());
    // const info = doc.data();
    // let { addr, age, email, gender, tel } = doc.data();
    planListBox.insertAdjacentHTML(
      "afterbegin",
      `<h4>${doc.data().userId}님의 Planner</h4>`
    );
    // navPlannerBox.insertAdjacentHTML(
    //   "afterbegin",
    //   `<div class="day1">${doc.data().date}</div>`
    // );
  });
}
// console.log(plannerTitleName());
plannerTitleName();

// const navPlanner = document.getElementById("nav-planner");

// async function plannerTitleDate() {
//   const data = await getDatas("date");
//   data.forEach((doc) => {
//     const info = doc.data();
//     // let { firstDay, firstMonth, firstYear, lastDay, lastMonth, lastYear } = doc.data();
//     navPlanner.insertAdjacentHTML(
//       "afterbegin",
//       `<div>${info.firstYear}. ${info.firstMonth}. ${info.firstDay}</div>`
//     );
//   });
// }
// plannerTitleDate();
// console.log(plannerTitleName());

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
// const resturantArr = ["광천식당", "카라멜", "손이가", "테라스키친", "해마의방"];
// const resturantArr = [];
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

function pluslistFood(a) {
  a.addEventListener("click", () => {
    const newEntry = a.innerHTML;
    resturantArr.push(newEntry);
    const uniqueArr = removeDuplicates(resturantArr);

    // Clear existing content before adding new elements
    resturantTag.innerHTML = "";

    uniqueArr.forEach((e, index) => {
      resturantTag.insertAdjacentHTML(
        "beforeend",
        `<div class="resturantBox">
        <input
        type="checkbox"
        id="foodStore${index}"
        class="foodStore"
        checked
        />
        <label for="foodStore${index}">${e}</label>
        <i class='bx bx-x' ></i>
        </div>`
      );
    });
  });
}
pluslistFood(rest1Tag);
pluslistFood(rest2Tag);
pluslistFood(rest3Tag);
pluslistFood(rest4Tag);
pluslistFood(rest5Tag);

const cafe1Tag = document.querySelector(`.cafe1`);
const cafe2Tag = document.querySelector(`.cafe2`);
const cafe3Tag = document.querySelector(`.cafe3`);
const cafe4Tag = document.querySelector(`.cafe4`);
const cafe5Tag = document.querySelector(`.cafe5`);

function pluslistCafe(a) {
  a.addEventListener("click", () => {
    const newEntry = a.innerHTML;
    cafeArr.push(newEntry);
    const uniqueArr = removeDuplicates(cafeArr);

    cafeTag.innerHTML = "";

    uniqueArr.forEach((e, index) => {
      cafeTag.insertAdjacentHTML(
        "beforeend",
        `<div class="cafeBox">
          <input
            type="checkbox"
            id="cafeStore${index}"
            class="cafeStore"
            checked
          />
          <label for="cafeStore${index}">${e}</label>
          <i class='bx bx-x' ></i>
        </div>`
      );
    });
  });
}
pluslistCafe(cafe1Tag);
pluslistCafe(cafe2Tag);
pluslistCafe(cafe3Tag);
pluslistCafe(cafe4Tag);
pluslistCafe(cafe5Tag);

const place1Tag = document.querySelector(`.place1`);
const place2Tag = document.querySelector(`.place2`);
const place3Tag = document.querySelector(`.place3`);
const place4Tag = document.querySelector(`.place4`);
const place5Tag = document.querySelector(`.place5`);

function pluslistPlace(a) {
  a.addEventListener("click", () => {
    const newEntry = a.innerHTML;
    hotPlaceArr.push(newEntry);
    const uniqueArr = removeDuplicates(hotPlaceArr);

    hotPlaceTag.innerHTML = "";

    uniqueArr.forEach((e, index) => {
      hotPlaceTag.insertAdjacentHTML(
        "beforeend",
        `<div class="hotPlaceBox">
          <input
            type="checkbox"
            id="placeStore${index}"
            class="placeStore"
            checked
          />
          <label for="placeStore${index}">${e}</label>
          <i class='bx bx-x' ></i>
        </div>`
      );
    });
  });
}
pluslistPlace(place1Tag);
pluslistPlace(place2Tag);
pluslistPlace(place3Tag);
pluslistPlace(place4Tag);
pluslistPlace(place5Tag);

// const cancelBtn = document.querySelectorAll(`.bx-x`);
// console.log(cancelBtn);

// cancelBtn.forEach((e) => {
//   console.log(e);
//   e.addEventListener("click", (el) => {
//     console.log(el.target.parentElement);
//     el.target.parentElement.remove();
//   });
// });
