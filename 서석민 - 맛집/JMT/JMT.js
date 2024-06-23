// 로고 시작
import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "./DLU_firebase.js";
// const jmtTag = document.querySelector(".h-Tag1Span");
// const cafeTag = document.querySelector(".h-Tag2Span");
// const placeTag = document.querySelector(".h-Tag3Span");
// const epliogueTag = document.querySelector(".h-Tag4Span");

// 예시로 함수 호출
// addstoreInfo();

const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "#";
});
// 로고 끝

// 메인 사진 시작
function chgMainImg() {
  const mainImgArr = [
    "../Photo/48.jpg",
    "../Photo/51.jpg",
    "../Photo/55.jpg",
    "../Photo/60.jpg",
  ];
  let mainImgIndex = 0;
  const mainImgEl = document.getElementById("backImg");

  setInterval(() => {
    mainImgEl.classList.add("mainImgfadeOut");

    setTimeout(() => {
      mainImgIndex = (mainImgIndex + 1) % mainImgArr.length;
      mainImgEl.src = mainImgArr[mainImgIndex];
      mainImgEl.classList.remove("mainImgfadeOut");
    }, 2000);
  }, 3500);
}
window.onload = chgMainImg;
// 메인 사진 끝

const text = "가장 Hot한 맛집들!";
const middleH1 = document.getElementById("middleH1");

let index = 0;

function displayNextCharacter() {
  if (index < text.length) {
    middleH1.innerText += text[index];
    index++;
  } else {
    index = 0;
    middleH1.innerText = ""; // 기존 텍스트를 지우고 다시 시작
  }
  setTimeout(displayNextCharacter, 300); // 0.5초 간격으로 다음 문자 출력
}

displayNextCharacter();

const datas = await getDatas("store");
let infolist;
let infoinput;
datas.forEach((doc, idx) => {
  const info = doc.data();
  infolist = info.members;
  infoinput = info.input;
});

let infolistArr = infolist.map(function (el) {
  return `${el.name},${el.point}`;
});
let infolistArrsort = infolistArr.sort(function (a, b) {
  let pointA = a.split(",")[1];
  let pointB = b.split(",")[1];
  return pointA - pointB;
});
const sidebarA = document.querySelectorAll(".sidebar-sub");
const infolistSliceArr = infolistArrsort.slice(70, 80);
sidebarA.forEach(function (el, idx) {
  if (idx < infolistSliceArr.length) {
    let infolistEnd = infolistSliceArr[idx].split(",")[0];
    el.insertAdjacentHTML(
      "afterbegin",
      `<a href="#" class="sidebarA"><span class="sideinnerN">${
        idx + 1
      }. </span>  <span class="sideinnerT">${infolistEnd}</span></a>`
    );
  }
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
const Mainbox1 = document.querySelector(".Main-box1");
infolistSliceArr1.forEach(function (el, idx) {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
  <h1 class="box-h3"><span>#</span>Top${idx + 1}</h1>
            <img
              class="box-img"
              src="../Photo/${el.src}"
            />
            <div class="box-point"><span>평점:</span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr:</span> ${el.addr}</div>
            <div class="box-tag"><span>On.</span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag"><span>#</span>${el.category}</div>
          </div>

       `
  );
});

const Searches = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
function inputArr(e) {
  console.log(this);
  result.innerHTML = "";
  let inputValue = headerInput.value;
  inputValue = inputValue.replaceAll(" ", "&nbsp;");
  // let changeMessage = inputValue.replaceAll(' ',"&nbsp;")
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
result.addEventListener("click", (e) => {
  const box = e.target.closest(".box");
  if (box) {
    const idx = box.getAttribute("data-idx");
    const selectedItem = infolist[idx];
    console.log(box);
    // 필요한 다른 작업 수행 가능
  }
});
Searches.addEventListener("click", inputArr);
headerInput.addEventListener("keypress", inputArr);

const Mainboxes1 = Mainbox1.firstElementChild;
Mainboxes1.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
});
const Mainboxes2 = Mainboxes1.nextElementSibling;
Mainboxes2.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("2");
});
const Mainboxes3 = Mainboxes2.nextElementSibling;
Mainboxes3.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("3");
});
const Mainboxes4 = Mainboxes3.nextElementSibling;
Mainboxes4.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("4");
});
const Mainboxes5 = Mainboxes4.nextElementSibling;
Mainboxes5.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("5");
});
const Mainboxes6 = Mainboxes5.nextElementSibling;
Mainboxes6.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("6");
});
const Mainboxes7 = Mainboxes6.nextElementSibling;
Mainboxes7.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("7");
});
const Mainboxes8 = Mainboxes7.nextElementSibling;
Mainboxes8.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("8");
});
const Mainboxes9 = Mainboxes8.nextElementSibling;
Mainboxes9.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("9");
});
const Mainboxes10 = Mainboxes9.nextElementSibling;
Mainboxes10.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
  alert("10");
});

// 맛집별 사이트 접속 종료
// 메인 상단 사이트 접속 시작
const backinner1 = document.querySelector(".backinner1");
backinner1.lastElementChild.addEventListener("click", function () {
  alert("1");
});
const backinner2 = document.querySelector(".backinner2");
backinner2.lastElementChild.addEventListener("click", function () {
  alert("2");
});
const backinner3 = document.querySelector(".backinner3");
backinner3.lastElementChild.addEventListener("click", function () {
  alert("3");
});
const backinner4 = document.querySelector(".backinner4");
backinner4.lastElementChild.addEventListener("click", function () {
  alert("4");
});

// 메인 상단 사이트 접속 종료
// Top 버튼
const Top = document.querySelector(".TopLoop");
Top.addEventListener("click", function () {
  location.href = "#header-H1";
});
//
const headerH1 = document.querySelector("#header-H1");
headerH1.addEventListener("click", function () {
  location.reload();
});
// clear(초기화) 버튼
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  location.reload();
});

const Promise = document.querySelector("Promise-but");
let child;
function openPopup() {
  child = window.open(
    "../240510/2_numberguess.html",
    "_blank",
    "width=1000,height=500, left=500, top=0,"
  );
  // location=no ==> 주소입력창 없어짐
  // resizable=no ==> 팝업창의 크기를 조절할 수 없음
  // toolbar=no ==> 도구모음이 없어짐
}
const body = document.querySelector("body");
const MainH1 = document.querySelector(".MainH1");
const bodyHeight = body.getBoundingClientRect();
const MainH1Height = MainH1.getBoundingClientRect();
function updateScrollPosition() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  // console.log("Scroll Position: " + scrollPosition);

  if (scrollPosition > 1000) {
    MainH1.style.transform = "translateY(-100px)";
    MainH1.style.transition = "0.5s linear";
  }
}

window.addEventListener("scroll", updateScrollPosition);

// body.addEventListener('wheel', function(){
