// 로고 시작
import { getDatas } from "./DLU_firebase.js";

// 예시로 함수 호출
// addstoreInfo();

const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "../../Main/HTML/mainPage.html";
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

const text = "가장 Hot한 맛집들 !";
const middleH1 = document.getElementById("middleH1");

let index = 0;

function displayNextCharacter() {
  if (index < text.length) {
    middleH1.innerHTML += text[index];
    index++;
  } else {
    index = 0;
    middleH1.innerText = ""; // 기존 텍스트를 지우고 다시 시작
  }
  setTimeout(displayNextCharacter, 500); // 0.5초 간격으로 다음 문자 출력
}

displayNextCharacter();

const datas = await getDatas("store1");
const infoinputArr = [];
datas.forEach((doc, idx) => {
  const info = doc.data();
  infoinputArr.push(info);
});
let infolistArr = infoinputArr.map(function (el) {
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
let infolistArr1 = infoinputArr.map(function (el) {
  return el;
});
let infolistArrsort1 = infolistArr1.sort(function (a, b) {
  let pointC = a.point;
  let pointD = b.point;
  return pointC - pointD;
});
const infolistSliceArr1 = infolistArrsort1.slice(70, 80);
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
          <div class="hidden"><span>#</span>${el.id}</div>
           </div>

       `
  );
});

const Searches = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
function inputArr(e) {
  result.innerHTML = "";
  const inputValue = headerInput.value;
  if (inputValue === "") return;
  infoinputArr.forEach(function (el, idx) {
    console.log(el.addr);
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

let nameChild;
let addrChild;
let idChild;

const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes");
const resturantBoxes1 = document.querySelector(".resturantBoxes1");
const cafeBoxes1 = document.querySelector(".cafeBoxes1");
const hotPlaceBoxes1 = document.querySelector(".hotPlaceBoxes1");
const Mainbox = document.querySelector(".Main-box1");

const plannertitle = document.getElementById("planner-title");
const plannertitle1 = document.getElementById("planner-title1");
const localId = localStorage.getItem("ID");
const localSemiId = localStorage.getItem("semiID");

if (localId !== null && localSemiId === null) {
  plannertitle.innerHTML = `${localId} planner`;
  plannertitle1.innerHTML = `${localId} planner`;
} else if (localSemiId !== null && localId === null) {
  plannertitle.innerHTML = `${localSemiId} planner`;
  plannertitle1.innerHTML = `${localSemiId} planner`;
}

function handleBoxClick(e, box) {
  if (e.target.tagName === "SPAN") {
    const span = e.target;
    const username = span.textContent;

    // span의 부모 요소를 찾아서 삭제
    if (span.parentElement) {
      span.parentElement.remove();
    }

    // localStorage에서 해당 데이터 삭제
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (value === username) {
        localStorage.removeItem(key);
        break; // 삭제 후 반복문 종료
      }
    }
  }
}

function addDataToBox(idText, nameText, addrText, box) {
  localStorage.setItem(`${idText}`, `${nameText},${addrText}`);
  let username = localStorage.getItem(`${idText}`);

  let exists = Array.from(box.querySelectorAll("span")).some(
    (span) => span.textContent === username
  );

  if (!exists) {
    box.insertAdjacentHTML("beforeend", `<div><span>${username}</span></div>`);
  }
}

function initializeBox(box, keyCondition) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (keyCondition(key)) {
      let exists = Array.from(box.querySelectorAll("span")).some(
        (span) => span.textContent === value
      );

      if (!exists) {
        box.insertAdjacentHTML("beforeend", `<div><span>${value}</span></div>`);
      }
    }
  }
}

Mainbox.addEventListener("click", function (e) {
  if (localId === null && localSemiId === null) {
    alert("로그인이 필요합니다.");
    location.href = "../../Main/HTML/mainPage.html";
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
    idChild = box.lastElementChild;

    const nameText = nameChild.innerHTML;
    const addrText = addrChild.innerHTML.substring(18, 22);
    const IdText = idChild.innerHTML.substring(14, 22);
    if (IdText.includes("store")) {
      addDataToBox(IdText, nameText, addrText, resturantBoxes);
      addDataToBox(IdText, nameText, addrText, resturantBoxes1);
    } else if (IdText.includes("cafe")) {
      addDataToBox(IdText, nameText, addrText, cafeBoxes);
      addDataToBox(IdText, nameText, addrText, cafeBoxes1);
    } else if (IdText.includes("hotplace")) {
      addDataToBox(IdText, nameText, addrText, hotPlaceBoxes);
      addDataToBox(IdText, nameText, addrText, hotPlaceBoxes1);
    }
  }
});

initializeBox(resturantBoxes, (key) => key.includes("store"));
initializeBox(cafeBoxes, (key) => key.includes("cafe"));
initializeBox(hotPlaceBoxes, (key) => key.includes("hotplace"));

resturantBoxes.addEventListener("click", (e) =>
  handleBoxClick(e, resturantBoxes)
);
cafeBoxes.addEventListener("click", (e) => handleBoxClick(e, cafeBoxes));
hotPlaceBoxes.addEventListener("click", (e) =>
  handleBoxClick(e, hotPlaceBoxes)
);
resturantBoxes1.addEventListener("click", (e) =>
  handleBoxClick(e, resturantBoxes1)
);
cafeBoxes1.addEventListener("click", (e) => handleBoxClick(e, cafeBoxes1));
hotPlaceBoxes1.addEventListener("click", (e) =>
  handleBoxClick(e, hotPlaceBoxes1)
);

const hi = document.querySelector(".Logout");
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key);
  hi.addEventListener("click", function () {
    localStorage.removeItem(key);
    location.reload();
  });
}

const Top1 = document.querySelector(".TopLoop");
Top1.addEventListener("click", function () {
  location.href = "#header-H1";
});
// //
const headerH1 = document.querySelector("#header-H1");
headerH1.addEventListener("click", function () {
  location.reload();
});
// clear(초기화) 버튼
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  location.reload();
});
