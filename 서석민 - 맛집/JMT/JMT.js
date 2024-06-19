// 로고 시작
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
    src: "../맛집/기념일/동구/지안(대전광역시 동구 효동 126-3.jpg",
    text1: "평점 4.9",
    text2: "지안 동구",
    text3: "#기념일",
  },
  {
    src: "../맛집/기념일/서구/가림소담(서구 만년로67번길 22 2층 2호).jpg",
    text1: "평점 4.5",
    text2: "가림소담",
    text3: "#기념일",
  },
  {
    src: "../맛집/기념일/중구/도프차일드키친( 중구 대흥동 대흥로121번길 30-3).jpg",
    text1: "평점 4.6",
    text2: "도프차일드키친",
    text3: "#기념일",
  },
  {
    src: "../맛집/기념일/유성구/리코제이 레스토랑( 유성구 도룡동 385-14 더포엠 리코제이 레스토랑 2 1층).jpg",
    text1: "평점 4.7",
    text2: "리코제이 레스토랑",
    text3: "#기념일",
  },
];
MainboxArr1.forEach((el, idx) => {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
         <div class="box">
              <img
                class="box-img"
                src="${el.src}"
              />
              <div class="box-point">${el.text1}</div>
              <div class="box-name">${el.text2}</div>
              <div class="box-tag">${el.text3}</div>
             
            </div>
           
         `
  );
});

const Mainbox2 = document.querySelector(".Main-box2");
const MainboxArr2 = [
  {
    src: "../맛집/비오는 날/동구/대전옥( 동구 대동천우안4길 74).jpg",
    text1: "평점 4.0",
    text2: "대전옥",
    text3: "#비오는 날",
  },
  {
    src: "../맛집/비오는 날/서구/대선칼국수( 서구 둔산중로40번길 28).jpg",
    text1: "평점 4.1",
    text2: "대선칼국수",
    text3: "#비오는 날",
  },
  {
    src: "../맛집/비오는 날/유성구/어느날(유성구 원신흥남로11번길 12 어느날 4 1층).jpg",
    text1: "평점 4.2",
    text2: "어느 날",
    text3: "#비오는 날",
  },
  {
    src: "../맛집/비오는 날/중구/미소본가 스마일칼국수(중구 보문로230번길 82).jpg",
    text1: "평점 4.3",
    text2: "미소본가 스마일 칼국수",
    text3: "#비오는 날",
  },
];
MainboxArr2.forEach((el, idx) => {
  Mainbox2.insertAdjacentHTML(
    "beforeend",
    `
         <div class="box">
              <img
                class="box-img"
                src="${el.src}"
              />
              <div class="box-point">${el.text1}</div>
              <div class="box-name">${el.text2}</div>
              <div class="box-tag">${el.text3}</div>
             
            </div>
         `
  );
});
const Mainbox3 = document.querySelector(".Main-box3");
const MainboxArr3 = [
  {
    src: "../맛집/술한잔/동구/더바틀( 동구 용운동 277-7).jpg",
    text1: "평점 4.0",
    text2: "더바틀 ",
    text3: "#술 한잔",
  },
  {
    src: "../맛집/술한잔/서구/느린하루( 서구 둔산2동 1103).jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#술 한잔",
  },
  {
    src: "../맛집/술한잔/유성구/라스트춘선( 유성구 봉명동 온천북로33번길 35-17).jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#술 한잔",
  },
  {
    src: "../맛집/술한잔/중구/달빛한옥(중구 선화동 405-11).jpg",
    text1: "평점 4.3",
    text2: "두찜",
    text3: "#술 한잔",
  },
];
MainboxArr3.forEach((el, idx) => {
  Mainbox3.insertAdjacentHTML(
    "beforeend",
    `
         <div class="box">
              <img
                class="box-img"
                src="${el.src}"
              />
              <div class="box-point">${el.text1}</div>
              <div class="box-name">${el.text2}</div>
              <div class="box-tag">${el.text3}</div>
             
            </div>
         `
  );
});

const Mainbox4 = document.querySelector(".Main-box4");
const MainboxArr4 = [
  {
    src: "../맛집/분위기 좋은/동구/구름식당( 동구 대동 201-23).jpg",
    text1: "평점 4.0",
    text2: "구름식당",
    text3: "#분위기 좋은",
  },
  {
    src: "../맛집/분위기 좋은/서구/메떼레( 서구 탄방동 766).jpg",
    text1: "평점 4.1",
    text2: "메떼레",
    text3: "#분위기 좋은",
  },
  {
    src: "../맛집/분위기 좋은/유성구/마르디( 유성구 원신흥동 392-1).jpg",
    text1: "평점 4.2",
    text2: "마르디",
    text3: "#분위기 좋은",
  },
  {
    src: "../맛집/분위기 좋은/중구/도프차일드키친( 중구 대흥동 대흥로121번길 30-3).jpg",
    text1: "평점 4.3",
    text2: "도프차일드키친",
    text3: "#분위기 좋은",
  },
];
MainboxArr4.forEach((el, idx) => {
  Mainbox4.insertAdjacentHTML(
    "beforeend",
    `
         <div class="box">
              <img
                class="box-img"
                src="${el.src}"
              />
              <div class="box-point">${el.text1}</div>
              <div class="box-name">${el.text2}</div>
              <div class="box-tag">${el.text3}</div>
            
            </div>
         `
  );
});

const Mainbox5 = document.querySelector(".Main-box5");
const MainboxArr5 = [
  {
    src: "../맛집/야외/동구/귀빈참치(동구 용운로147번길 123).jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../맛집/야외/서구/기적소리(서구 벌곡로 161).jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../맛집/야외/유성구/더그릴( 유성구 갑동 327 19번지).jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../맛집/야외/중구/고기는야외빨(중구 대사동 번지 1층 210-5).jpg",
    text1: "평점 4.3",
    text2: "두찜",
    text3: "#축하 #행복 #생일",
  },
];
MainboxArr5.forEach((el, idx) => {
  Mainbox5.insertAdjacentHTML(
    "beforeend",
    `
         <div class="box">
              <img
                class="box-img"
                src="${el.src}"
              />
              <div class="box-point">${el.text1}</div>
              <div class="box-name">${el.text2}</div>
              <div class="box-tag">${el.text3}</div>
           
            </div>
         `
  );
});
const text = "대전의 맛집을 소개합니다! ";
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
  { text: "대전옥 동구 #분위기 좋은" },
  { text: "오씨칼국수 동구 #분위기 좋은" },
];
const SearcherArr = [
  {
    src: "../사진객체/신도칼국수(동구 대전로825번길 11).jpg",
    text1: "평점: 4.9",
    text2: "신도칼국수",
    text3: "#기념일",
  },
  {
    src: "../사진객체/어글리딜리셔스(동구 대동 357-1).jpg",
    text1: "평점: 4.5",
    text2: "어글리딜리셔스",
    text3: "#기념일",
  },
  {
    src: "../사진객체/어반 더 쉐프(동구 용전동 68-21).jpg",
    text1: "평점: 4.7",
    text2: "어반 더 쉐프",
    text3: "#기념일",
  },
  {
    src: "../사진객체/지안(대전광역시 동구 효동 126-3.jpg",
    text1: "평점: 4.1",
    text2: "지안",
    text3: "#기념일",
  },
  {
    src: "../사진객체/구름식당( 동구 대동 201-23).jpg",
    text1: "평점: 4.9",
    text2: "구름식당",
    text3: "#분위기 좋은",
  },
  {
    src: "../사진객체/명월본가수라상(동구 계족로 184-23)",
    text1: "평점: 4.9",
    text2: "명월본가수라상",
    text3: "#분위기 좋은",
  },
  {
    src: "../사진객체/파운드( 동구 중앙동 수향길 25).jpg",
    text1: "평점: 4.9",
    text2: "파운드",
    text3: "#분위기 좋은",
  },
  {
    src: "../사진객체/힐링 (동구 가오동 신기로 123-28).jpg",
    text1: "평점: 4.9",
    text2: "힐링",
    text3: "#분위기 좋은",
  },
  {
    src: "../사진객체/대전옥( 동구 대동천우안4길 74).jpg",
    text1: "평점: 4.9",
    text2: "신도칼국수",
    text3: "#기념일",
  },
  {
    src: "../사진객체/오씨칼국수( 동구 옛신탄진로 13).jpg",
    text1: "평점: 4.9",
    text2: "오씨칼국수",
    text3: "#기념일",
  },
];
function SearchButton(e) {
  result.innerHTML = "";
  SearchArr.forEach(function (el, idx) {
    if (el.text.includes(headerInput.value) && e.code == "Enter") {
      result.insertAdjacentHTML(
        "beforeend",
        `
           <div class="box">
                <img
                  class="box-img"
                  src="${SearcherArr[idx].src}"
                />
                <div class="box-point">${SearcherArr[idx].text1}</div>
                <div class="box-name">${SearcherArr[idx].text2}</div>
                <div class="box-tag">${SearcherArr[idx].text3}</div>
               
              </div>
             
           `
      );
      // div.classList.remove("Search-bar");
    }
  });
}

headerInput.addEventListener("keypress", SearchButton);
// 메인 스크립트 시작

// 맛집별 사이트 접속
// 맛집별 사이트 접속
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
