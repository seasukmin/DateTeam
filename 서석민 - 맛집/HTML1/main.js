import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "./DLU_firebase.js";
const datas = await getDatas("store");
let infolist;
let infoinput;
datas.forEach((doc, idx) => {
  const info = doc.data();
  infolist = info.members;
  infoinput = info.input;
});
let infolistArr1 = infolist.map(function (el) {
  return el;
});
let infolistArrsort1 = infolistArr1.sort(function (a, b) {
  let pointC = a.point;
  let pointD = b.point;
  return pointC - pointD;
});
const infolistSliceArr1 = infolistArrsort1.slice(70, 80);
console.log(infolistSliceArr1);
const resturantBoxes = document.querySelector(".restaurant-section");
infolistSliceArr1.forEach(function (el, idx) {
  resturantBoxes.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box mySlides fade">
    <h1 class="box-h3"><span>#</span>Top${idx + 1} 성심당</h1>
    <div class="boxes">
              <img
                class="box-img"
                src="../Photo/${el.src}"
              />
         s   <div class="boxes-inner">
            <div class="box-point"><span>평점:</span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr:</span> ${el.addr}</div>
            <div class="box-tag"><span>On.</span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag"><span>#</span>${el.category}</div>
            </div>
            </div>

         `
  );
});
// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
