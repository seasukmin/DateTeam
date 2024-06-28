// 로고 시작
import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../JMT/DLU_firebase.js";
// const jmtTag = document.querySelector(".h-Tag1Span");
// const cafeTag = document.querySelector(".h-Tag2Span");
// const placeTag = document.querySelector(".h-Tag3Span");
// const epliogueTag = document.querySelector(".h-Tag4Span");

// 로고 시작
const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "../../Main/HTML/mainPage.html";
});

const Top = document.querySelector(".Top");
Top.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// 로고 끝
// 헤더 시작
const header = document.querySelector("#header-H2");
header.addEventListener("click", function () {
  location.href = "../Cafe/Cafe.html";
});
const reviewBtn = document.querySelector(".reviewBtn");
reviewBtn.addEventListener("click", function () {
  location.href = "../../Hotplace/reviewPage/review.html";
});
// // clear(초기화) 버튼
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  location.reload();
});
// 헤더 끝

// 메인 스크립트 시작

// 메인 포토 체인지 시작

// 메인 포토 체인지 시작

// 메인 스크립트 시작

// 카테고리 스크립트 시작
const Maintitle = document.querySelectorAll(".side-text li");
// console.log(Maintitle);
Maintitle.forEach(function (el, idx) {
  console.log(el);
  el.addEventListener("click", function () {
    if (idx == 0) {
      location.href = "#one";
    }
    if (idx == 1) {
      location.href = "#two";
    }
    if (idx == 2) {
      location.href = "#three";
    }
    if (idx == 3) {
      location.href = "#four";
    }
    if (idx == 4) {
      location.href = "#five";
    }
  });
});
// 카테고리 스크립트 종료

// 검색창 시작
const datas = await getDatas("cafe1");
const textinner = "분위기 있는";
let infoinput;
const infoinputArr = [];
datas.forEach((doc, idx) => {
  const info = doc.data();
  // console.log(infoinput);
  infoinputArr.push(info);
});
const addrInner = "동구";
let categoryInner = "분위기 있는";
let addrArr = [];
let categoryArr = [];
const infoinputArrResult = infoinputArr.forEach(function (el) {
  if (el.addr.includes(addrInner)) {
    addrArr.push(el);
  }
});
const infoinputArrRe = addrArr.forEach(function (el) {
  if (el.category.includes(categoryInner)) {
    categoryArr.push(el);
  }
});
// console.log(categoryArr);
let MydesertArr = [];
categoryInner = "디저트가 맛있는";
const desertArr = addrArr.forEach(function (el) {
  if (el.category.includes(categoryInner)) {
    MydesertArr.push(el);
  }
});
let MybigMartArr = [];
categoryInner = "대형 매장";
const bigMartArr = addrArr.forEach(function (el) {
  if (el.category.includes(categoryInner)) {
    MybigMartArr.push(el);
  }
});
console.log();

MybigMartArr;

let temp = MybigMartArr[1];
MybigMartArr[1] = MybigMartArr[2];
MybigMartArr[2] = temp;

console.log(MybigMartArr); // [1, 4, 3, 2, 5]
// console.log(infoinputArrResult);
// const infoinputArrCate = addrArr.forEach(function (el) {
//   if (el.category.includes(categoryInner)) {
//     categoryArr.push(el);
//   }
// });
// console.log(infoinputArrCate);

const Searches = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
function inputArr(e) {
  result.innerHTML = "";
  const inputValue = headerInput.value;
  if (inputValue === "") return;
  infoinputArr.forEach(function (el, idx) {
    if (
      el.addr.includes(inputValue) ||
      el.category.includes(inputValue) ||
      el.name.includes(inputValue) ||
      el.number.includes(inputValue) ||
      el.point.includes(inputValue) ||
      (el.time.includes(inputValue) && e.code == "Enter")
    ) {
      result.insertAdjacentHTML(
        "beforeend",
        `
                     <div class="box">
                          <img
                            class="box-img"
                            src="../Photo_Cafe/${idx + 1}.jpg"
                          />
                          <div class="box-point"><span>평점:</span>
                          ${el.point}</div>
                          <div class="box-name">${el.name}</div>
                          <div class="box-tag"><span>addr:</span>${
                            el.addr
                          }</div>
                          <div class="box-tag"><span>On.</span>${el.time}</div>
                          <div class="box-tag"><span>N.</span>${el.number}</div>
                          <div class="box-tag"><span>#</span>${
                            el.category
                          }</div>
                        </div>
                   `
      );
    }
  });

  headerInput.value = "";
}
Searches.addEventListener("click", inputArr);
headerInput.addEventListener("keypress", inputArr);
// 검색창 종료

// 메인 시작
const infolistSlice1 = categoryArr;
const Mainbox1 = document.querySelector(".Main-box1");
infolistSlice1.forEach((el, idx) => {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
     <div class="box">
          <img
            class="box-img"
            src="../Photo_Cafe/${idx + 1}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>
          <div class="box-tag"><span>#</span>${el.id}</div>

        </div>

     `
    // `
    //  <div class="box" data-placeID =${firebase -- cafe1 -- id}>
    //       <img
    //         class="box-img"
    //         src="../Photo_Cafe/${idx + 1}.jpg"
    //       />
    //       <div class="box-point"><span>평점:</span> ${el.point}</div>
    //       <div class="box-name">${el.name}</div>
    //       <div class="box-tag"><span>addr:</span> ${el.addr}</div>
    //       <div class="box-tag"><span>On.</span> ${el.time}</div>
    //       <div class="box-tag"><span>N.</span>${el.number}</div>
    //       <div class="box-tag"><span>#</span>${el.category}</div>

    //     </div>

    //  `
  );
});
const Mainbox2 = document.querySelector(".Main-box2");
const infolistSlice2 = MydesertArr;
infolistSlice2.forEach((el, idx) => {
  Mainbox2.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo_Cafe/${idx + 4}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>
            <div class="box-tag"><span>#</span>${el.id}</div>

        </div>
     `
  );
});
const Mainbox3 = document.querySelector(".Main-box3");
const infolistSlice3 = MybigMartArr;
infolistSlice3.forEach((el, idx) => {
  Mainbox3.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo_Cafe/${idx + 7}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>
            <div class="box-tag"><span>#</span>${el.id}</div>

        </div>
     `
  );
});
const hi = document.querySelector(".Logout");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key);
  hi.addEventListener("click", function () {
    localStorage.removeItem(key);
    location.reload();
  });
}
