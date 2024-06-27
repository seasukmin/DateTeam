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
// sizeBtn.addEventListener("click", () => {
//   plannerBoxTag.classList.remove("small");
//   sizeUpBtn.addEventListener("click", () => {});
// });

// function popup() {
//   let child = widnow.open(
//     "../HTML/sharePage.html",
//     "_blank",
//     "width=800px, height=500px"
//     // "location = no, menubar = no, toolbar = no, scrollbars = no,resizable = no"
//   );
// }
// const shareBtn = document.getElementById("shareBtn");
// let child;
// shareBtn.addEventListener("click", () => {
//   if (!child || child.closed) {
//     const url = "../HTML/sharePage.html";
//     const windowName = "sharePage";
//     const options =
//       "width=800px, height=500px, location=no, menubar=no, toolbar=no, scrollbars=no";
//     child = window.open(url, windowName, options);
//   } else {
//     child.focus();
//   }
// });

// const plannertitle = document.getElementById("planner-title");
// const localId = localStorage.getItem("ID");
// const localSemiId = localStorage.getItem("semiID");
// if (localId !== null && localSemiId == null) {
//   plannertitle.innerHTML = `${localId} planner`;
// } else if (localSemiId !== null && localId == null) {
//   plannertitle.innerHTML = `${localSemiId} planner`;
// }
// const resturantBoxes = document.querySelector(".resturantBoxes");

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   const value = localStorage.getItem(key);
//   if (key == "ID" || key == "semiID") {
//   } else {
//     if (localStorage.getItem(key)) {
//       let exists = Array.from(resturantBoxes.querySelectorAll("span")).some(
//         (span) => span.textContent === value
//       );

//       // username이 존재하지 않으면 추가
//       if (!exists) {
//         resturantBoxes.insertAdjacentHTML(
//           "beforeend",
//           `
//         <div>
//         <span>${value}</span>
//         </div>
//         `
//         );
//       }
//     }
//   }
// }
