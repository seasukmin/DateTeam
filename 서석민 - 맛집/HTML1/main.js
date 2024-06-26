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
            <div class="boxes-inner">
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

const datas1 = await getDatas("store");
console.log("datas:", datas);

let infoinput1 = [];
let infolist1 = [];

// 데이터 병합
datas.forEach((doc, idx) => {
  const info = doc.data();
  console.log("info:", info);

  if (info && info.input) {
    infolist1 = info.members;
    infoinput1 = infoinput1.concat(info.input);
  }
});

// 데이터 병합

let infolistArr2 = infoinput1.map(function (el) {
  return el;
});
let infolistArrsort2 = infolistArr2.sort(function (a, b) {
  let pointC = a.point;
  let pointD = b.point;
  return pointC - pointD;
});
const infolistSliceArr2 = infolistArrsort2.slice(26, 36);
console.log(infolistSliceArr2);

const contenttitle = document.querySelector(".cafe-section");
console.log(contenttitle);
infolistSliceArr2.forEach(function (el, idx) {
  contenttitle.insertAdjacentHTML(
    "beforeend",
    `
 <div class="box mySlides1 fade">
    <h1 class="box-h3"><span>#</span>Top${idx + 1} 성심당</h1>
    <div class="boxes">
              <img
                class="box-img"
                src="../Photo/${el.src}"
              />
            <div class="boxes-inner">
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
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let slides1 = document.getElementsByClassName("mySlides1");
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides1.length) {
    slideIndex = 1;
    s;
  }
  slides1[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

gflet slideIndex = 0;
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
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let slides1 = document.getElementsByClassName("mySlides1");
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides1.length) {
    slideIndex = 1;
    s;
  }
  slides1[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
