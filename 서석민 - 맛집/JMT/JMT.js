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

const userName = "Hotstore";
const dataObj = {
  list: [
    {
      src: "../photo/1.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
      text5: " #기념일",
    },
    {
      src: "../photo/2.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/3.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/4.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/5.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/6.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/7.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/8.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/9.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/10.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/11.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/12.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/13.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/14.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/15.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/16.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/17.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/18.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/19.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
    {
      src: "../photo/20.jpg",
      text1: "4.9",
      text2: "신도칼국수",
      text3: " addr. 동구 대전로 925번길 11",
      text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    },
  ],
};

function addstoreInfo() {
  addDatas("store", dataObj, userName);
}

// 예시로 함수 호출
addstoreInfo();

const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "#";
});
// 로고 끝

// 메인 사진 시작
let number2 = 0;
function changeImage() {
  let backArr = [
    "카페1.jpg",
    "카페2.jpg",
    "카페3.jpg",
    "카페4.jpg",
    "카페5.jpg",
  ];
  let randNum = changeImage2(backArr.length);
  document.querySelector("#backImg").src = `../사진/${backArr[randNum]}`;
  function changeImage2(length) {
    while (true) {
      const number = parseInt(Math.random() * length);
      if (number !== number2) {
        number2 = number;
        return number;
      }
    }
  }
}
setInterval(changeImage, 3000);
// 메인 사진 끝

// 메인 스크립트 시작

const Mainbox1 = document.querySelector(".Main-box1");
const MainboxArr1 = [
  {
    src: "../photo/1.jpg",
    text1: "4.9",
    text2: "신도칼국수",
    text3: " addr. 동구 대전로 925번길 11",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: " #기념일",
  },
  {
    src: "../photo/2.jpg",
    text1: "4.5",
    text2: "어글리딜리셔스",
    text3: "동구 대동 357-1",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
  {
    src: "../photo/2.jpg",
    text1: "4.5",
    text2: "어글리딜리셔스",
    text3: "동구 대동 357-1",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
  {
    src: "../photo/6.jpg",
    text1: "4.9",
    text2: "명월본가수라상",
    text3: "동구 계족로 184-23",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#분위기 좋은",
  },
  {
    src: "../photo/8.jpg",
    text1: "4.9",
    text2: "힐링",
    text3: "동구 가오동 신기로 123-28",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#분위기 좋은",
  },
  {
    src: "../photo/4.jpg",
    text1: "4.1",
    text2: "지안",
    text3: "동구 효동 126-3",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
  {
    src: "../photo/4.jpg",
    text1: "4.1",
    text2: "지안",
    text3: "동구 효동 126-3",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
  {
    src: "../photo/4.jpg",
    text1: "4.1",
    text2: "지안",
    text3: "동구 효동 126-3",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
  {
    src: "../photo/4.jpg",
    text1: "4.1",
    text2: "지안",
    text3: "동구 효동 126-3",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
  {
    src: "../photo/4.jpg",
    text1: "4.1",
    text2: "지안",
    text3: "동구 효동 126-3",
    text4: " On. 08:00 ~ 21:00 N. 043-3030-3031",
    text5: "#기념일",
  },
];
MainboxArr1.forEach((el, idx) => {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box">
    <h1 class="box-h3"><span>#</span>Top${idx + 1}</h1>
              <img
                class="box-img"
                src="${el.src}"
              />
              <div class="box-point">평점: ${el.text1}</div>
              <div class="box-name">${el.text2}</div>
              <div class="box-tag">${el.text3}</div>
              <div class="box-tag">${el.text4}</div>
              <div class="box-tag">${el.text5}</div>
            </div>

         `
  );
});

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

const Search = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
const SearchArr = [
  { text: "신도칼국수 동구 #기념일" },
  { text: "어글리딜리셔스 동구 #기념일" },
  { text: "어반 더 쉐프 동구 #기념일" },
  { text: "지안 동구 #기념일" },
  { text: "구름식당 동구 #분위기 좋은" },
  { text: "명월본가수라상 동구 #분위기 좋은" },
  { text: "파운드 동구 #분위기 좋은" },
  { text: "힐링 동구 #분위기 좋은" },
  { text: "대전옥 동구 #비오는 날에" },
  { text: "오씨칼국수 동구 #비오는 날에" },
];

// async function getstoreInfo() {

// getstoreInfo();
// }

const datas = await getDatas("store");
let infolist;
datas.forEach((doc, idx) => {
  const info = doc.data();
  infolist = info.list;
});
const Searches = document.querySelector(".Search");
function addSearch(e) {
  result.innerHTML = "";
  SearchArr.forEach(function (el, idx) {
    if (el.text.includes(headerInput.value) && e.code == "Enter") {
      result.insertAdjacentHTML(
        "beforeend",
        `
                 <div class="box">
                      <img
                        class="box-img"
                        src="${infolist[idx].src}"
                      />
                      <div class="box-point">평점: ${infolist[idx].text1}</div>
                      <div class="box-name">${infolist[idx].text2}</div>
                      <div class="box-tag">${infolist[idx].text3}</div>
                      <div class="box-tag">${infolist[idx].text4}</div>
                      <div class="box-tag">${infolist[idx].text5}</div>
                    </div>
        
               `
      );
    }
  });
}
Searches.addEventListener("click", addSearch);
headerInput.addEventListener("keypress", addSearch);

const Mainboxes1 = Mainbox1.firstElementChild;
Mainboxes1.addEventListener("click", function () {
  location.href = "https://www.instagram.com/Chiangmai_bangkok/";
});
const Mainboxes2 = Mainboxes1.nextElementSibling;
Mainboxes2.addEventListener("click", function () {
  location.href = "JMTList1/JMT-Re2.html";
});
const Mainboxes3 = Mainboxes2.nextElementSibling;
Mainboxes3.addEventListener("click", function () {
  location.href = "JMTList1/JMT-Re3.html";
});
const Mainboxes4 = Mainboxes3.nextElementSibling;
Mainboxes4.addEventListener("click", function () {
  location.href = "JMTList1/JMT-Re4.html";
});

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
// 맛집별 사이트 접속 종료

// Top 버튼
const Top = document.querySelector(".TopLoop");
Top.addEventListener("click", function () {
  location.href = "#header-H1";
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
  console.log("Scroll Position: " + scrollPosition);

  if (scrollPosition > 1000) {
    MainH1.style.transform = "translateY(-100px)";
    MainH1.style.transition = "0.5s linear";
  }
}

window.addEventListener("scroll", updateScrollPosition);

// body.addEventListener('wheel', function(){
