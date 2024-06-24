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
  location.href = "../Cafe/Cafe.html";
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
const datas = await getDatas("store");
console.log("datas:", datas);

let infoinput = [];
let infolist = [];
datas.forEach((doc, idx) => {
  const info = doc.data();
  console.log("info:", info);
  if (info && info.input) {
    infolist = info.members;
    infoinput = infoinput.concat(info.input);
  }
});
console.log("Merged infoinput:", infoinput);

const infolist20 = infoinput.slice(9, 18);
console.log(infolist20);

const Searches = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
function inputArr(e) {
  result.innerHTML = "";
  const inputValue = headerInput.value;
  if (inputValue === "") return;
  infoinput.forEach(function (el, idx) {
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
console.log(infolist);
const infolistSlice1 = infoinput.slice(9, 12);
const Mainbox1 = document.querySelector(".Main-box1");
infolistSlice1.forEach((el, idx) => {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
     <div class="box">
          <img
            class="box-img"
            src="../Photo_Cafe/${idx + 10}.jpg"
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
const infolistSlice2 = infoinput.slice(12, 15);
infolistSlice2.forEach((el, idx) => {
  Mainbox2.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo_Cafe/${idx + 13}.jpg"
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
const infolistSlice3 = infoinput.slice(15, 18);
infolistSlice3.forEach((el, idx) => {
  Mainbox3.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo_Cafe/${idx + 16}.jpg"
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

// 메인 종료

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

//

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
