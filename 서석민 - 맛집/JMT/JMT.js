// 로고 시작
import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
  addFieldToArrayInDocument,
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
    "../title/1.jpg",
    "../title/2.jpg",
    "../title/3.jpg",
    "../title/4.jpg",
    "../title/5.jpg",
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
  console.log(info);
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
Searches.addEventListener("click", inputArr);
headerInput.addEventListener("keypress", inputArr);

result.addEventListener("click", (e) => {
  const box = e.target.closest(".box");
  console.log(box);
});
// if (box) {
//   const idx = box.getAttribute("data-idx");
//   const selectedItem = infolist[idx];
// }
let updateTarget;
let nameChild;
let addrChild;
const resturantBoxes = document.querySelector(".resturantBoxes");

const datasPlan = await getDatas("plan");
let memberInfoArr = [];
let memberInfoObj = { resturant: {} };
datasPlan.forEach((doc, idx) => {
  const info = doc.data();
  info.planArr.forEach((item) => {
    const storeTitle = item.resturant[0];
    const storeAddr = item.resturant[1];
    // memberInfoObj = { title: storeTitle, addr: storeAddr };
    memberInfoArr.push(memberInfoObj);
  });
});

// const newMemberInfoObj = {};
// function removeDuplicates(array) {
//   return [...new Set(array)];
// }
let memberInfo = {};
Mainbox1.addEventListener("click", async function (e) {
  if (updateTarget) {
    alert("회원정보 수정중에는 저장할 수 없습니다.");
    return false;
  }
  const box = e.target.closest(".box");
  if (box) {
    nameChild =
      box.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling;
    addrChild =
      box.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling;
  }

  const day1 = document.querySelector(".day1");
  const day1inner = day1.innerHTML;
  const nameText = nameChild.innerHTML;
  const addrText = addrChild.innerHTML.substring(18, 22);
  memberInfo = {
    title: nameText,
    addr: addrText,
    // resturant: { title: nameText, addr: addrText },
  };
  function removeDuplicates(array) {
    return [...new Set(array)];
  }
  memberInfoArr.push(memberInfo);
  const newMemberInfoArr = removeDuplicates(memberInfoArr);
  memberInfoObj.resturant = newMemberInfoArr;
  console.log(memberInfoObj); // [{},{}]  { restaurant: [{}]  }
  // const result = await addDatas("plan", memberInfoObj, "planArr");
  try {
    const result = await addDatas("plan", memberInfoObj, "planArr");
    // const result = await updateDatas("plan", "planArr", memberInfoObj);
    console.log("데이터가 성공적으로 추가되었습니다: ", result);
  } catch (error) {
    console.error("데이터 추가 중 오류 발생: ", error);
  }
});

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
