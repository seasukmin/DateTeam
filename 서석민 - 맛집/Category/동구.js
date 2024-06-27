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
// 로고 끝
// 헤더 시작
const header = document.querySelector("#header-H2");
header.addEventListener("click", function () {
  location.href = "../JMT/JMT.html";
});
const Top = document.querySelector(".TopLoop");
Top.addEventListener("click", function () {
  location.href = "#header-H2";
});
const Top1 = document.querySelector(".topBtn");
Top1.addEventListener("click", function () {
  location.href = "#header-H2";
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
const datas = await getDatas("store1");
// const textinner = "분위기 있는";
let infoinput;
const infoinputArr = [];
datas.forEach((doc, idx) => {
  const info = doc.data();
  // console.log(infoinput);
  infoinputArr.push(info);
});
console.log(infoinputArr);
let addrInner = "동구";
let addrArr = [];
let categoryArr = [];
const infoinputArrResult = infoinputArr.forEach(function (el) {
  if (el.addr.includes(addrInner)) {
    addrArr.push(el);
  }
});
addrInner = "기념일";
let MyaniverseArr = [];
const aniverseArr = addrArr.forEach(function (el) {
  if (el.category.includes(addrInner)) {
    MyaniverseArr.push(el);
  }
});
addrInner = "분위기 좋은";
let MymodegoodArr = [];
const modegood = addrArr.forEach(function (el) {
  if (el.category.includes(addrInner)) {
    MymodegoodArr.push(el);
  }
});
addrInner = "술 한잔";
let MywateroneArr = [];
const waterone = addrArr.forEach(function (el) {
  if (el.category.includes(addrInner)) {
    MywateroneArr.push(el);
  }
});
addrInner = "야외";
let MyoutsideArr = [];
const outsideArr = addrArr.forEach(function (el) {
  if (el.category.includes(addrInner)) {
    MyoutsideArr.push(el);
  }
});

console.log(MyaniverseArr);

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
const infolistSlice1 = MyaniverseArr;
const Mainbox1 = document.querySelector(".Main-box1");
infolistSlice1.forEach((el, idx) => {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
     <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 1}.jpg"
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
const Mainbox2 = document.querySelector(".Main-box2");
const infolistSlice2 = MymodegoodArr;
infolistSlice2.forEach((el, idx) => {
  Mainbox2.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 5}.jpg"
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
const infolistSlice3 = MywateroneArr;
infolistSlice3.forEach((el, idx) => {
  Mainbox3.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 9}.jpg"
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

const Mainbox4 = document.querySelector(".Main-box4");
const infolistSlice4 = MyoutsideArr;
infolistSlice4.forEach((el, idx) => {
  Mainbox4.insertAdjacentHTML(
    "beforeend",
    `
   <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 13}.jpg"
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

const Mainbox5 = document.querySelector(".Main-box5");
const infolistSlice5 = MyoutsideArr;
infolistSlice5.forEach((el, idx) => {
  Mainbox5.insertAdjacentHTML(
    "beforeend",
    `
  <div class="box">
          <img
            class="box-img"
            src="../Photo/${idx + 17}.jpg"
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
result.addEventListener("click", (e) => {
  const box = e.target.closest(".box");
  console.log(box);
});

// const box = e.target.closest(".box");
// if (box) {
//   nameChild6 = box.firstElementChild.nextElementSibling.nextElementSibling;
//   addrChild6 =
//     box.firstElementChild.nextElementSibling.nextElementSibling
//       .nextElementSibling;
//   const nameText = nameChild6.innerHTML.trim(); // 텍스트의 앞뒤 공백 제거
//   const addrText = addrChild6.innerHTML.substring(18, 22).trim(); // 텍스트의 앞뒤 공백 제거
//   console.log(nameChild5);
//   resturantBoxe6.insertAdjacentHTML(
//     "beforeend",
//     `<div>✔ ${nameText} : ${addrText}</div>`
//   );
// }

// 메인 종료

// 맛집별 사이트 접속
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
// const Mainboxes4 = Mainboxes3.nextElementSibling;
// Mainboxes4.addEventListener("click", function () {
//   alert("4");
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
// const Nainboxes4 = Nainboxes3.nextElementSibling;
// Nainboxes4.addEventListener("click", function () {
//   alert("4");
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
// const Qainboxes4 = Qainboxes3.nextElementSibling;
// Qainboxes4.addEventListener("click", function () {
//   alert("4");
// });
// //
// const Wainboxes1 = Mainbox4.firstElementChild;
// Wainboxes1.addEventListener("click", function () {
//   alert("1");
// });
// const Wainboxes2 = Wainboxes1.nextElementSibling;
// Wainboxes2.addEventListener("click", function () {
//   alert("2");
// });
// const Wainboxes3 = Wainboxes2.nextElementSibling;
// Wainboxes3.addEventListener("click", function () {
//   alert("3");
// });
// const Wainboxes4 = Wainboxes3.nextElementSibling;
// Wainboxes4.addEventListener("click", function () {
//   alert("4");
// });
// //
// const Eainboxes1 = Mainbox5.firstElementChild;
// Eainboxes1.addEventListener("click", function () {
//   alert("1");
// });
// const Eainboxes2 = Eainboxes1.nextElementSibling;
// Eainboxes2.addEventListener("click", function () {
//   alert("2");
// });
// const Eainboxes3 = Eainboxes2.nextElementSibling;
// Eainboxes3.addEventListener("click", function () {
//   alert("3");
// });
// const Eainboxes4 = Eainboxes3.nextElementSibling;
// Eainboxes4.addEventListener("click", function () {
//   alert("4");
// });
// // 맛집별 사이트 접속 종료

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
// const Mainchart4 = document.querySelector(".Mainchart-inner4");
// Mainchart4.lastElementChild.addEventListener("click", function () {
//   alert("4");
// });
let nameChild;
let addrChild;
let idChild;
const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes"); // hotPlaceBoxes 변수 추가
const Mainbox = document.querySelectorAll(".Mainbox");

// planner title
const plannertitle = document.getElementById("planner-title");
const localId = localStorage.getItem("ID");
const localSemiId = localStorage.getItem("semiID");
if (localId !== null && localSemiId == null) {
  plannertitle.innerHTML = `${localId} planner`;
} else if (localSemiId !== null && localId == null) {
  plannertitle.innerHTML = `${localSemiId} planner`;
}

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
          <span class="Username">${username}</span>
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
          <span class="Username">${username}</span>
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
          <span class="Username">${username}</span>
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
          <span class="Username">${value}</span>
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
          <span class="Username">${value}</span>
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
          <span class="Username">${value}</span>
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
