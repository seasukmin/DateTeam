import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "./javascript/DLU_firebase.js";

const contents = document.getElementById("content");
const contentArr = [
  {
    a: "",
    img: "./img/한밭수목원.jpg",
    name: "한밭수목원",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "입장료: 무료",
  },
  {
    a: "",
    img: "./img/한빛탑야간.jpg",
    name: "엑스포 과학공원",
    time: "월-토: 09:00",
    time2: "",
    event: "#음악분수",
  },
  {
    a: "",
    img: "./img/오월드.jpg",
    name: "대전 오월드",
    time: "월-토: 09:00",
    time2: "",
    event: "#동물원 #나이트유니버스",
  },
  {
    a: "",
    img: "./img/대전시립미술관.jpg",
    name: "대전시립박물관",
    time: "월-토: 09:00",
    time2: "",
    event: "입장료:",
  },
  {
    a: "",
    img: "./img/이글스파크.jpg",
    name: "한화이글스파크",
    time: "월-토: 09:00",
    time2: "",
    event: "#야구",
  },
  {
    a: "",
    img: "./img/유성온천.jpg",
    name: "유성온천",
    time: "월-토: 09:00",
    time2: "",
    event: "#족욕",
  },
  {
    a: "",
    img: "./img/으능정이거리.jpg",
    name: "으능정이거리",
    time: "월-토: 09:00",
    time2: "",
    event: "#스카이로드",
  },
  {
    a: "",
    img: "./img/신세계백화점.jpg",
    name: "신세계백화점",
    time: "월-토: 09:00",
    time2: "",
    event: "#쇼핑",
  },
  {
    a: "",
    img: "./img/옛터민속박물관.jpg",
    name: "옛터민속박물관",
    time: "월-토: 09:00",
    time2: "",
    event: "#드라이브",
  },
  {
    a: "",
    img: "./img/식장산.jpg",
    name: "식장산",
    time: "월-토: 09:00",
    time2: "",
    event: "#야경 #드라이브",
  },
  {
    a: "",
    img: "./img/만인산자연휴양림.jpg",
    name: "만인산자연휴양림",
    time: "월-토: 09:00",
    time2: "",
    event: "#봉이호떡 #산책",
  },
];
contentArr.forEach((info, idx) => {
  contents.insertAdjacentHTML(
    "beforeend",

    ` <div class="content">
              <a href=${info.a}>
                <img src=${info.img} />
                <p class="hpName">${info.name}</p></a
              >
               `
  );
});

function chgMainImg() {
  const mainImgArr = [
    "./img/메인1.jpg",
    "./img/메인2.jpg",
    "./img/메인3.jpg",
    "./img/메인4.jpg",
    "./img/메인5.jpg",
    "./img/메인7.jpg",
  ];
  let mainImgIndex = 0;
  const mainImgEl = document.getElementById("mainImg");

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

const text = "대전의 다양한 데이트 명소를 즐겨보세요.";
const wave = document.querySelector(".main-text");
let textLength = 0;
let intervalMainText;
function textWave() {
  if (textLength < text.length) {
    wave.innerHTML += text[textLength++];
  } else {
    clearInterval(intervalMainText);
    setTimeout(() => {
      wave.textContent = "";
      textLength = 0;
      intervalMainText = setInterval(textWave, 250);
    }, 2500);
  }
}
intervalMainText = setInterval(textWave, 250);

document.querySelectorAll(".category li").forEach((item) => {
  item.addEventListener("click", function () {
    const url = this.getAttribute("data-url");
    window.location.href = url;
  });
});

let etarget;

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

// 로고 홈페이지 이동
const logo = document.querySelector(".hotPlace-logo");
logo.addEventListener("click", () => {
  location.href = "../Main/HTML/mainPage.html";
});

// content-box 클릭 이벤트 리스너
// const allbox = document.querySelector(".content-box");

// const datas = await getDatas("hotPlace");
// const infoinput = [];
// datas.forEach((doc, idx) => {
//   const info = doc.data();
//   // console.log(infoinput);s
//   infoinput.push(info.list);
//   console.log(infoinput.length);
// });
// const sidebarsub = document.querySelectorAll(".sidebar-sub");
// const infoinputArr = infoinput.forEach(function (el) {
//   const elslice = el.slice(30, 38);
//   elslice.forEach(function (e, idx) {
//     contents.insertAdjacentHTML(
//       "beforeend",
//       `
//        <div class="content">

//                 <img src=img/${idx + 1}.jpg />
//               <p class="hpName">${e.title}</p></a
//                >
//     `
//     );
//   });
// });
// const searchInput = document.querySelector(".searchInput");
// const searchBtn = document.querySelector(".searchBtn");
// const searchBox = document.querySelector(".searchBox");
// console.log(searchInput);
// function inputArr(e) {
//   searchBox.innerHTML = "";
//   const inputValue = searchInput.value;
//   infoinput.forEach(function (el, idx) {
//     if (el.event.includes(inputValue)) {
//       searchBox.insertAdjacentHTML(
//         "beforeend",
//         `
//                      <div class="box">
//                           <img
//                             class="box-img"
//                             src="../Photo/23.jpg"
//                           />
//                           <div class="box-point"><span>평점:</span>
//                         23</div>
//                           <div class="box-name">23</div>
//                           <div class="box-tag"><span>addr:</span>23</div>
//                           <div class="box-tag"><span>On.</span>12</div>
//                           <div class="box-tag"><span>N.</span>12</div>
//                           <div class="box-tag"><span>#</span>
//                           12</div>
//                         </div>
//                    `
//       );
//     }
//   });
// }
// searchBtn.addEventListener("click", inputArr);
// searchInput.addEventListener("keypress", inputArr);

// planner title
const plannertitle = document.getElementById("planner-title");
const localId = localStorage.getItem("ID");
const localSemiId = localStorage.getItem("semiID");
if (localId !== null && localSemiId == null) {
  plannertitle.innerHTML = `${localId} planner`;
} else if (localSemiId !== null && localId == null) {
  plannertitle.innerHTML = `${localSemiId} planner`;
}

let nameChild;
let addrChild;
let idChild;
const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes"); // hotPlaceBoxes 변수 추가

contents.addEventListener("click", function (e, idx) {
  const userId = localStorage.getItem("ID");
  console.log(userId);
  if (userId === null) {
    alert("로그인이 필요합니다.");
    location.href = "../../Main/HTML/mainPage.html";
    return false;
  } else if (userId !== null) {
  }
  const box = e.target.closest(".content");
  console.log(box);
  if (box) {
    nameChild = box.firstElementChild.nextElementSibling;
    addrChild = box.firstElementChild;
    idChild = box.firstElementChild.nextElementSibling.nextElementSibling;
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

// const hi = document.querySelector(".hi");
// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   console.log(key);
//   hi.addEventListener("click", function () {
//     localStorage.removeItem(key);
//     location.reload();
//   });
// }
