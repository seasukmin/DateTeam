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
  location.href = "#";
});
// 로고 끝
// 헤더 시작
const header = document.querySelector("#header-H2");
header.addEventListener("click", function () {
  location.href = "../JMT/JMT.html";
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
// 도프차일드키친 트루 열개의테이블 흙과 마루45485560
const datas = await getDatas("store");
let infolist;
let infoinput;
datas.forEach((doc, idx) => {
  const info = doc.data();
  infolist = info.members;
  infoinput = info.input;
});
console.log(infolist.slice(40, 60));
const Searches = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
function inputArr(e) {
  result.innerHTML = "";
  const inputValue = headerInput.value;
  if (inputValue === "") return;
  infolist.forEach(function (el, idx) {
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
                            src="../Photo/${idx + 1}.jpg"
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
const Mainbox1 = document.querySelector(".Main-box1");
const infolistSlice1 = infolist.slice(40, 44);
infolistSlice1.forEach((el, idx) => {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 41}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>

        </div>

     `
  );
});

const Mainbox2 = document.querySelector(".Main-box2");
const infolistSlice2 = infolist.slice(44, 48);
infolistSlice2.forEach((el, idx) => {
  Mainbox2.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 45}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>

        </div>
     `
  );
});
const Mainbox3 = document.querySelector(".Main-box3");
const infolistSlice3 = infolist.slice(48, 52);
infolistSlice3.forEach((el, idx) => {
  Mainbox3.insertAdjacentHTML(
    "beforeend",
    `
   <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 49}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>

        </div>
     `
  );
});

const Mainbox4 = document.querySelector(".Main-box4");
const infolistSlice4 = infolist.slice(52, 56);
infolistSlice4.forEach((el, idx) => {
  Mainbox4.insertAdjacentHTML(
    "beforeend",
    `
   <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 53}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>

        </div>
     `
  );
});

const Mainbox5 = document.querySelector(".Main-box5");
const infolistSlice5 = infolist.slice(56, 60);
infolistSlice5.forEach((el, idx) => {
  Mainbox5.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 57}.jpg"
          />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span> ${el.time}</div>
          <div class="box-tag"><span>N.</span>${el.number}</div>
          <div class="box-tag"><span>#</span>${el.category}</div>

        </div>
     `
  );
});
// 메인 끝

// 맛집별 사이트 접속
const Mainboxes1 = Mainbox1.firstElementChild;
Mainboxes1.addEventListener("click", function () {
  location.href = "#";
  alert("1");
});
const Mainboxes2 = Mainboxes1.nextElementSibling;
Mainboxes2.addEventListener("click", function () {
  alert("2");
});
const Mainboxes3 = Mainboxes2.nextElementSibling;
Mainboxes3.addEventListener("click", function () {
  alert("3");
});
const Mainboxes4 = Mainboxes3.nextElementSibling;
Mainboxes4.addEventListener("click", function () {
  alert("4");
});
//
const Nainboxes1 = Mainbox2.firstElementChild;
Nainboxes1.addEventListener("click", function () {
  alert("1");
});
const Nainboxes2 = Nainboxes1.nextElementSibling;
Nainboxes2.addEventListener("click", function () {
  alert("2");
});
const Nainboxes3 = Nainboxes2.nextElementSibling;
Nainboxes3.addEventListener("click", function () {
  alert("3");
});
const Nainboxes4 = Nainboxes3.nextElementSibling;
Nainboxes4.addEventListener("click", function () {
  alert("4");
});
//
const Qainboxes1 = Mainbox3.firstElementChild;
Qainboxes1.addEventListener("click", function () {
  alert("1");
});
const Qainboxes2 = Qainboxes1.nextElementSibling;
Qainboxes2.addEventListener("click", function () {
  alert("2");
});
const Qainboxes3 = Qainboxes2.nextElementSibling;
Qainboxes3.addEventListener("click", function () {
  alert("3");
});
const Qainboxes4 = Qainboxes3.nextElementSibling;
Qainboxes4.addEventListener("click", function () {
  alert("4");
});
//
const Wainboxes1 = Mainbox4.firstElementChild;
Wainboxes1.addEventListener("click", function () {
  alert("1");
});
const Wainboxes2 = Wainboxes1.nextElementSibling;
Wainboxes2.addEventListener("click", function () {
  alert("2");
});
const Wainboxes3 = Wainboxes2.nextElementSibling;
Wainboxes3.addEventListener("click", function () {
  alert("3");
});
const Wainboxes4 = Wainboxes3.nextElementSibling;
Wainboxes4.addEventListener("click", function () {
  alert("4");
});
//
const Eainboxes1 = Mainbox5.firstElementChild;
Eainboxes1.addEventListener("click", function () {
  alert("1");
});
const Eainboxes2 = Eainboxes1.nextElementSibling;
Eainboxes2.addEventListener("click", function () {
  alert("2");
});
const Eainboxes3 = Eainboxes2.nextElementSibling;
Eainboxes3.addEventListener("click", function () {
  alert("3");
});
const Eainboxes4 = Eainboxes3.nextElementSibling;
Eainboxes4.addEventListener("click", function () {
  alert("4");
});
// 맛집별 사이트 접속 종료
const Top = document.querySelector(".TopLoop");
Top.addEventListener("click", function () {
  location.href = "#header-H2";
});
const Mainchart1 = document.querySelector(".Mainchart-inner1");
Mainchart1.lastElementChild.addEventListener("click", function () {
  alert("1");
});
const Mainchart2 = document.querySelector(".Mainchart-inner2");
Mainchart2.lastElementChild.addEventListener("click", function () {
  alert("2");
});
const Mainchart3 = document.querySelector(".Mainchart-inner3");
Mainchart3.lastElementChild.addEventListener("click", function () {
  alert("3");
});
const Mainchart4 = document.querySelector(".Mainchart-inner4");
Mainchart4.lastElementChild.addEventListener("click", function () {
  alert("4");
});
