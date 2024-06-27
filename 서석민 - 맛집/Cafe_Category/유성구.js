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
  location.href = "../../박근모 - 메인/HTML/mainPage.html";
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
  location.href = "../../정유진 - 맛집/reviewPage/review.html";
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
const addrInner = "유성구";
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
            src="../Photo_Cafe/${idx + 28}.jpg"
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
            src="../Photo_Cafe/${idx + 31}.jpg"
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
            src="../Photo_Cafe/${idx + 34}.jpg"
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

Searches.addEventListener("click", inputArr);
headerInput.addEventListener("keypress", inputArr);
// 메인 종료

// // 맛집별 사이트 접속
// const Mainboxes1 = Mainbox1.firstElementChild;
// Mainboxes1.addEventListener("click", function () {
//   location.href = "#";
//   alert("1");
// });
// const Mainboxes2 = Mainboxes1.nextElementSibling;
// Mainboxes2.addEventListener("click", function () {
//   alert("2");
// });
// const Mainboxes3 = Mainboxes2.nextElementSibling;
// Mainboxes3.addEventListener("click", function () {
//   alert("3");
// });

// //
// const Nainboxes1 = Mainbox2.firstElementChild;
// Nainboxes1.addEventListener("click", function () {
//   alert("1");
// });
// const Nainboxes2 = Nainboxes1.nextElementSibling;
// Nainboxes2.addEventListener("click", function () {
//   alert("2");
// });
// const Nainboxes3 = Nainboxes2.nextElementSibling;
// Nainboxes3.addEventListener("click", function () {
//   alert("3");
// });

// //
// const Qainboxes1 = Mainbox3.firstElementChild;
// Qainboxes1.addEventListener("click", function () {
//   alert("1");
// });
// const Qainboxes2 = Qainboxes1.nextElementSibling;
// Qainboxes2.addEventListener("click", function () {
//   alert("2");
// });
// const Qainboxes3 = Qainboxes2.nextElementSibling;
// Qainboxes3.addEventListener("click", function () {
//   alert("3");
// });

// //

// //

// // 맛집별 사이트 접속 종료
// const Top = document.querySelector(".TopLoop");
// Top.addEventListener("click", function () {
//   location.href = "#header-H2";
// });

// const Mainchart1 = document.querySelector(".Mainchart-inner1");
// Mainchart1.lastElementChild.addEventListener("click", function () {
//   alert("1");
// });
// const Mainchart2 = document.querySelector(".Mainchart-inner2");
// Mainchart2.lastElementChild.addEventListener("click", function () {
//   alert("2");
// });
// const Mainchart3 = document.querySelector(".Mainchart-inner3");
// Mainchart3.lastElementChild.addEventListener("click", function () {
//   alert("3");
// });

// planner title
const plannertitle = document.getElementById("planner-title");
const plannertitle1 = document.getElementById("planner-title1");
const localId = localStorage.getItem("ID");
const localSemiId = localStorage.getItem("semiID");
if (localId !== null && localSemiId == null) {
  plannertitle.innerHTML = `${localId} planner`;
  plannertitle1.innerHTML = `${localId} planner`;
} else if (localSemiId !== null && localId == null) {
  plannertitle.innerHTML = `${localSemiId} planner`;
  plannertitle1.innerHTML = `${localSemiId} planner`;
}
let nameChild;
let addrChild;
let idChild;
const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes"); // hotPlaceBoxes 변수 추가
const Mainbox = document.querySelectorAll(".Mainbox");
Mainbox.forEach(function (el) {
  el.addEventListener("click", function (e) {
    const userId = localStorage.getItem("ID");
    console.log(userId);
    if (userId === null) {
      alert("로그인이 필요합니다.");
      location.href = "../../박근모 - 메인/HTML/mainPage.html";
      return false;
    } else if (userId !== null) {
    }
    const box = e.target.closest(".box");
    if (box) {
      nameChild = box.firstElementChild.nextElementSibling.nextElementSibling;

      addrChild =
        box.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling;
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
    }
    if (IdText.includes("cafe")) {
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
  // resturantBoxes 클릭 이벤트 핸들러 함수
  resturantBoxes.addEventListener("click", function (e) {
    handleBoxClick(e, resturantBoxes);
  });

  // cafeBoxes 클릭 이벤트 핸들러 함수
  cafeBoxes.addEventListener("click", function (e) {
    handleBoxClick(e, cafeBoxes);
  });

  // hotPlaceBoxes 클릭 이벤트 핸들러 함수
  hotPlaceBoxes.addEventListener("click", function (e) {
    handleBoxClick(e, hotPlaceBoxes);
  });

  // 클릭 이벤트 핸들러 함수 정의
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
