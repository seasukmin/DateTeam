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
  content.insertAdjacentHTML(
    "beforeend",

    ` <div class="content">
              <a href=${info.a}>
                <img src=${info.img} />
                <p class="hpName">${info.name}</p></a
              >
              <p class="hpTime">
                ${info.time}${info.time2}
              </p>
              <p class="hpInfo">${info.event}</p>
            </div> `
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

// const text = "대전의 다양한 데이트 명소를 즐겨보세요.";
// const wave = document.querySelector(".main-text");
// let textLength = 0;
// let intervalMainText;
// function textWave() {
//   if (textLength < text.length) {
//     wave.innerHTML += text[textLength++];
//   } else {
//     clearInterval(intervalMainText);
//     setTimeout(() => {
//       wave.textContent = "";
//       textLength = 0;
//       intervalMainText = setInterval(textWave, 250);
//     }, 2500);
//   }
// }
// intervalMainText = setInterval(textWave, 250);

// document.querySelectorAll(".category li").forEach((item) => {
//   item.addEventListener("click", function () {
//     const url = this.getAttribute("data-url");
//     window.location.href = url;
//   });
// });

// const text = "대전의 다양한 데이트 명소를 즐겨보세요.";
// const wave = document.querySelector(".main-text");
// let textLength = 0;
// let intervalMainText;
// function textWave() {
//   if (textLength < text.length) {
//     wave.innerHTML += text[textLength++];
//   } else {
//     clearInterval(intervalMainText);
//     setTimeout(() => {
//       wave.textContent = "";
//       textLength = 0;
//       intervalMainText = setInterval(textWave, 250);
//     }, 2500);
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   intervalMainText = setInterval(textWave, 250);

//   document.querySelectorAll(".category li").forEach((item) => {
//     item.addEventListener("click", function () {
//       const url = this.getAttribute("data-url");
//       window.location.href = url;
//     });
//   });
// });

//   contentArr.forEach(async (e, idx) => {
//     // console.log(e);
//     const a = e.a;
//     const img = e.img;
//     const name = e.name;
//     const time = e.time;
//     const time2 = e.time2;
//     const event = e.event;
//     const event2 = `hotPlace${idx + 1}`;
//     const store1Obj = {
//       a: a,
//       img: img,
//       name: name,
//       time: time,
//       time2: time2,
//       event: event,
//       event2: event2,
//     };
//     // const result = await addDatas("Hotplace", store1Obj);
//   });
// });

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
const searchBox = document.querySelector(".searchBox");
console.log(searchInput);
function inputArr(e) {
  searchBox.innerHTML = "";
  const inputValue = searchInput.value;
  infoinput.forEach(function (el, idx) {
    if (el.event.includes(inputValue)) {
      searchBox.insertAdjacentHTML(
        "beforeend",
        `
                     <div class="box">
                          <img
                            class="box-img"
                            src="../Photo/23.jpg"
                          />
                          <div class="box-point"><span>평점:</span>
                        23</div>
                          <div class="box-name">23</div>
                          <div class="box-tag"><span>addr:</span>23</div>
                          <div class="box-tag"><span>On.</span>12</div>
                          <div class="box-tag"><span>N.</span>12</div>
                          <div class="box-tag"><span>#</span>
                          12</div>
                        </div>
                   `
      );
    }
  });
}
searchBtn.addEventListener("click", inputArr);
searchInput.addEventListener("keypress", inputArr);
let etarget;

// content-box 클릭 이벤트 리스너
const allbox = document.querySelector(".content-box");

const datas = await getDatas("Hotplace2");
const infoinput = [];
datas.forEach((doc, idx) => {
  const info = doc.data();
  // console.log(infoinput);s
  infoinput.push(info);
});

let target;
allbox.addEventListener("click", function (e) {
  e.target;
  console.log(e.target);
  const werwe = { name: e.target.innerHTML };
  addDatas("Hotplace2", { werwe });
  localStorage.setItem("id", "Hotplace01");
});
