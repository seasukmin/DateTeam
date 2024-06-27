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

// 예시로 함수 호출
// addstoreInfo();

const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "../../박근모 - 메인/HTML/mainPage.html";
});
// 로고 끝

// 메인 사진 시작
function chgMainImg() {
  const mainImgArr = [
    "../사진/Cafe_1.jpg",
    "../사진/Cafe_2.jpg",
    "../사진/Cafe_3.jpg",
    "../사진/Cafe_4.jpg",
    "../사진/Cafe_5.jpg",
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

const text = "가장 Hot한 카페들 !";
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

// const datas = await getDatas("store");
// console.log("datas:", datas);

// let infoinput = [];
// let infolist = [];

// // 데이터 병합
// datas.forEach((doc, idx) => {
//   const info = doc.data();
//   console.log("info:", info);

//   if (info && info.input) {
//     infolist = info.members;
//     infoinput = infoinput.concat(info.input);
//   }
// });
const datas = await getDatas("cafe1");
const textinner = "분위기 있는";
let infoinput;
const infoinputArr = [];
datas.forEach((doc, idx) => {
  const info = doc.data();
  // console.log(infoinput);
  infoinputArr.push(info);
});
console.log(infoinputArr);

let infolistArr = infoinputArr.map(function (el) {
  return `${el.name},${el.point}`;
});
let infolistArrsort = infolistArr.sort(function (a, b) {
  let pointA = a.split(",")[1];
  let pointB = b.split(",")[1];
  return pointA - pointB;
});
const sidebarA = document.querySelectorAll(".sidebar-sub");
const infolistSliceArr = infolistArrsort.slice(26, 36);
sidebarA.forEach(function (el, idx) {
  if (idx < infolistSliceArr.length) {
    let infolistEnd = infolistSliceArr[idx].split(",")[0];
    console.log(infolistEnd);
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
const infolistSliceArr1 = infolistArrsort1.slice(26, 36);
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
              src="${el.src}"
            />
            <div class="box-point"><span>평점:</span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr:</span> ${el.addr}</div>
            <div class="box-tag"><span>On.</span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag"><span>#</span>${el.category}</div>
            <div class="box-tag hidden"><span>#</span>${el.id}</div>
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
      console.log(el);
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

const plannertitle = document.getElementById("planner-title");
const localId = localStorage.getItem("ID");
const localSemiId = localStorage.getItem("semiID");
if (localId !== null && localSemiId == null) {
  plannertitle.innerHTML = `${localId} planner`;
} else if (localSemiId !== null && localId == null) {
  plannertitle.innerHTML = `${localSemiId} planner`;
}

// const Mainboxes1 = Mainbox1.firstElementChild;
// Mainboxes1.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
// });
// const Mainboxes2 = Mainboxes1.nextElementSibling;
// Mainboxes2.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("2");
// });
// const Mainboxes3 = Mainboxes2.nextElementSibling;
// Mainboxes3.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("3");
// });
// const Mainboxes4 = Mainboxes3.nextElementSibling;
// Mainboxes4.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("4");
// });
// const Mainboxes5 = Mainboxes4.nextElementSibling;
// Mainboxes5.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("5");
// });
// const Mainboxes6 = Mainboxes5.nextElementSibling;
// Mainboxes6.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("6");
// });
// const Mainboxes7 = Mainboxes6.nextElementSibling;
// Mainboxes7.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("7");
// });
// const Mainboxes8 = Mainboxes7.nextElementSibling;
// Mainboxes8.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("8");
// });
// const Mainboxes9 = Mainboxes8.nextElementSibling;
// Mainboxes9.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("9");
// });
// const Mainboxes10 = Mainboxes9.nextElementSibling;
// Mainboxes10.addEventListener("click", function () {
//   location.href = "https://www.instagram.com/Chiangmai_bangkok/";
//   alert("10");
// });

// // 맛집별 사이트 접속 종료
// // 메인 상단 사이트 접속 시작
// const backinner1 = document.querySelector(".backinner1");
// backinner1.lastElementChild.addEventListener("click", function () {
//   alert("1");
// });
// const backinner2 = document.querySelector(".backinner2");
// backinner2.lastElementChild.addEventListener("click", function () {
//   alert("2");
// });
// const backinner3 = document.querySelector(".backinner3");
// backinner3.lastElementChild.addEventListener("click", function () {
//   alert("3");
// });
// const backinner4 = document.querySelector(".backinner4");
// backinner4.lastElementChild.addEventListener("click", function () {
//   alert("4");
// });

// // 메인 상단 사이트 접속 종료
// // Top 버튼
// const Top = document.querySelector(".TopLoop");
// Top.addEventListener("click", function () {
//   location.href = "#header-H1";
// });
// //
// const headerH1 = document.querySelector("#header-H1");
// headerH1.addEventListener("click", function () {
//   location.reload();
// });
// // clear(초기화) 버튼
// const clear = document.querySelector(".clear");
// clear.addEventListener("click", function () {
//   location.reload();
// });

// const Promise = document.querySelector("Promise-but");
// let child;
// function openPopup() {
//   child = window.open(
//     "../240510/2_numberguess.html",
//     "_blank",
//     "width=1000,height=500, left=500, top=0,"
//   );
//   // location=no ==> 주소입력창 없어짐
//   // resizable=no ==> 팝업창의 크기를 조절할 수 없음
//   // toolbar=no ==> 도구모음이 없어짐
// }
// const body = document.querySelector("body");
// const MainH1 = document.querySelector(".MainH1");
// const bodyHeight = body.getBoundingClientRect();
// const MainH1Height = MainH1.getBoundingClientRect();
// function updateScrollPosition() {
//   const scrollPosition = window.scrollY || document.documentElement.scrollTop;

//   if (scrollPosition > 1000) {
//     MainH1.style.transform = "translateY(-100px)";
//     MainH1.style.transition = "0.5s linear";
//   }
// }

// window.addEventListener("scroll", updateScrollPosition);

// // body.addEventListener('wheel', function(){
// let nameChild;
// let addrChild;
// let idChild;
// const resturantBoxes = document.querySelector(".resturantBoxes");
// const cafeBoxes = document.querySelector(".cafeBoxes"); // cafeBoxes 변수 추가 필요
// const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes")

// Mainbox1.addEventListener("click", function (e) {
//   const box = e.target.closest(".box");
//   if (box) {
//     nameChild =
//       box.firstElementChild.nextElementSibling.nextElementSibling
//         .nextElementSibling;
//     addrChild =
//       box.firstElementChild.nextElementSibling.nextElementSibling
//         .nextElementSibling.nextElementSibling;
//     idChild = box.lastElementChild;
//   }
//   const day1 = document.querySelector(".day1");
//   const day1inner = day1.innerHTML;
//   const nameText = nameChild.innerHTML;
//   const addrText = addrChild.innerHTML.substring(18, 22);
//   const IdText = idChild.innerHTML.substring(14, 22);
//   console.log(nameText, addrText, IdText);

//   // key 값에 'store'가 포함되어 있을 때만 localStorage에 저장
//   if (IdText.includes("store")) {
//     localStorage.setItem(`${IdText}`, `${nameText},${addrText}`);
//     let username = localStorage.getItem(`${IdText}`);

//     // localStorage에 저장된 데이터를 resturantBoxes에 추가
//     let exists = Array.from(resturantBoxes.querySelectorAll("span")).some(
//       (span) => span.textContent === username
//     );

//     // username이 존재하지 않으면 추가
//     if (!exists) {
//       resturantBoxes.insertAdjacentHTML(
//         "beforeend",
//         `
//           <div>
//           <span>${username}</span>
//           </div>
//           `
//       );
//     }
//   }
// });

// // 페이지 로드 시 기존에 저장된 데이터 확인 및 resturantBoxes에 추가
// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   const value = localStorage.getItem(key);
//   if (key.includes("store")) {
//     let exists = Array.from(resturantBoxes.querySelectorAll("span")).some(
//       (span) => span.textContent === value
//     );

//     // username이 존재하지 않으면 추가
//     if (!exists) {
//       resturantBoxes.insertAdjacentHTML(
//         "beforeend",
//         `
//           <div>
//           <span>${value}</span>
//           </div>
//           `
//       );
//     }
//   }
// }
let nameChild;
let addrChild;
let idChild;
const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes"); // hotPlaceBoxes 변수 추가

Mainbox1.addEventListener("click", function (e) {
  const box = e.target.closest(".box");
  if (box) {
    nameChild =
      box.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling;
    addrChild =
      box.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling;
    idChild = box.lastElementChild;
  }
  console.log(box);
  const day1 = document.querySelector(".day1");
  const day1inner = day1.innerHTML;
  const nameText = nameChild.innerHTML;
  const addrText = addrChild.innerHTML.substring(18, 22);
  const IdText = idChild.innerHTML.substring(14, 22);
  console.log(nameText, addrText, IdText);

  // key 값에 따라 localStorage에 저장 및 각 상자에 추가
  if (IdText.includes("store")) {
    localStorage.setItem(`${IdText}`, `${nameText},${addrText}`);
    let username = localStorage.getItem(`${IdText}`);

    let exists = Array.from(resturantBoxes.querySelectorAll("span")).some(
      (span) => span.textContent === username
    );

    // resturantBoxes에 추가
    if (!exists) {
      resturantBoxes.insertAdjacentHTML(
        "beforeend",
        `
        <div>
        <span>${username}</span>
        </div>
        `
      );
    }
  } else if (IdText.includes("cafe")) {
    localStorage.setItem(`${IdText}`, `${nameText},${addrText}`);
    let username = localStorage.getItem(`${IdText}`);

    let exists = Array.from(cafeBoxes.querySelectorAll("span")).some(
      (span) => span.textContent === username
    );

    // cafeBoxes에 추가
    if (!exists) {
      cafeBoxes.insertAdjacentHTML(
        "beforeend",
        `
        <div>
        <span>${username}</span>
        </div>
        `
      );
    }
  } else if (IdText.includes("hotplace")) {
    localStorage.setItem(`${IdText}`, `${nameText},${addrText}`);
    let username = localStorage.getItem(`${IdText}`);

    let exists = Array.from(hotPlaceBoxes.querySelectorAll("span")).some(
      (span) => span.textContent === username
    );

    // hotPlaceBoxes에 추가
    if (!exists) {
      hotPlaceBoxes.insertAdjacentHTML(
        "beforeend",
        `
        <div>
        <span>${username}</span>
        </div>
        `
      );
    }
  }
});

// 페이지 로드 시 기존에 저장된 데이터 확인 및 각 상자에 추가
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(key);

  if (key.includes("store")) {
    let exists = Array.from(resturantBoxes.querySelectorAll("span")).some(
      (span) => span.textContent === value
    );

    // resturantBoxes에 추가
    if (!exists) {
      resturantBoxes.insertAdjacentHTML(
        "beforeend",
        `
        <div>
        <span>${value}</span>
        </div>
        `
      );
    }
  }
  if (localStorage.getItem("ID") !== null) {
    if (key.includes("cafe")) {
      let exists = Array.from(cafeBoxes.querySelectorAll("span")).some(
        (span) => span.textContent === value
      );

      // cafeBoxes에 추가
      if (!exists) {
        cafeBoxes.insertAdjacentHTML(
          "beforeend",
          `
        <div>
        <span>${value}</span>
        </div>
        `
        );
      }
    }
  } else if (key.includes("hotplace")) {
    let exists = Array.from(hotPlaceBoxes.querySelectorAll("span")).some(
      (span) => span.textContent === value
    );

    // hotPlaceBoxes에 추가
    if (!exists) {
      hotPlaceBoxes.insertAdjacentHTML(
        "beforeend",
        `
        <div>
        <span>${value}</span>
        </div>
        `
      );
    }
  }
}

// resturantBoxes 클릭 이벤트 함수
resturantBoxes.addEventListener("click", function (e) {
  handleBoxClick(e, resturantBoxes);
});

// cafeBoxes 클릭 이벤트 함수
cafeBoxes.addEventListener("click", function (e) {
  handleBoxClick(e, cafeBoxes);
});

// hotPlaceBoxes 클릭 이벤트 함수
hotPlaceBoxes.addEventListener("click", function (e) {
  handleBoxClick(e, hotPlaceBoxes);
});

// 클릭 이벤트 핸들러 함수 정의
function handleBoxClick(e, box) {
  if (e.target.tagName === "SPAN") {
    const span = e.target;
    const username = span.textContent;

    if (span.parentElement) {
      span.parentElement.remove();
    }

    // localStorage에서 해당 데이터 삭제
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (value === username) {
        localStorage.removeItem(key);
        break;
      }
    }
  }
}
