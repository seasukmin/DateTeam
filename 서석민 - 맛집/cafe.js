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
  document.querySelector("#backImg").src = `사진/${backArr[randNum]}`;
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
    src: "사진/MainPhoto/삿뽀로 대전.jpg",
    text1: "평점 4.9",
    text2: "삿뽀로 대전",
    text3: "#축하 #행복 #기념일",
  },
  {
    src: "사진/MainPhoto/칸스테이크.jpg",
    text1: "평점 4.5",
    text2: "칸스테이크",
    text3: "#축하 #행복 #기념일",
  },
  {
    src: "사진/MainPhoto/누오보나폴리 대전.png",
    text1: "평점 4.6",
    text2: "누오보나폴리 대전",
    text3: "#축하 #행복 #기념일",
  },
  {
    src: "사진/MainPhoto/더리스 대청호.jpg",
    text1: "평점 4.7",
    text2: "더 리스 대청호",
    text3: "#축하 #행복 #기념일",
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
    src: "사진/MainPhoto/통일면옥.jpg",
    text1: "평점 4.0",
    text2: "통일면옥",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/칠전팔기 대전.jpg",
    text1: "평점 4.1",
    text2: "칠전팔기 대전",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/신가네 파전.jpg",
    text1: "평점 4.2",
    text2: "신가네파전",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/그 옛날풍경 궁동.jpg",
    text1: "평점 4.3",
    text2: "그 옛날풍경 궁동",
    text3: "#축하 #행복 #생일",
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
    src: "사진/MainPhoto/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240507113952_photo1_f99035d5f160.jpg",
    text1: "평점 4.3",
    text2: "두찜",
    text3: "#축하 #행복 #생일",
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
    src: "사진/MainPhoto/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240507113952_photo1_f99035d5f160.jpg",
    text1: "평점 4.3",
    text2: "두찜",
    text3: "#축하 #행복 #생일",
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
    src: "사진/MainPhoto/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "사진/MainPhoto/300_300_20240507113952_photo1_f99035d5f160.jpg",
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
const text = "대전의 카페를 소개합니다! ";
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
