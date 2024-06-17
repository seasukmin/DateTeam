// 로고 시작
const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "#";
});
// 로고 끝
// 헤더 시작
const header = document.querySelector("#header-H2");
header.addEventListener("click", function () {
  location.href = "../JMT.html";
});
// 헤더 끝

// 메인 스크립트 시작

// 메인 포토 체인지 시작

// 메인 포토 체인지 시작

const Mainbox1 = document.querySelector(".Main-box1");
const MainboxArr1 = [
  {
    src: "../사진/300_300_20240602113650_photo1_1fbc5ba2b85f.jpg",
    text1: "평점 4.9",
    text2: "치앙마이방콕대전",
    text3: "#축하 #행복 #기념일",
  },
  {
    src: "../사진/300_300_20240610032536164_photo_1be52a7e9e3a.jpg",
    text1: "평점 4.5",
    text2: "이삭토스트",
    text3: "#축하 #행복 #기념일",
  },
  {
    src: "../사진/300_300_20240606071700_photo1_f498fb41a690.jpg",
    text1: "평점 4.6",
    text2: "미국의아침",
    text3: "#축하 #행복 #기념일",
  },
  {
    src: "../사진/300_300_20240612121450836_photo_GNtCRjNogBBb.jpg",
    text1: "평점 4.7",
    text2: "맥도날드",
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
    src: "../사진/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240507113952_photo1_f99035d5f160.jpg",
    text1: "평점 4.3",
    text2: "두찜",
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
    src: "../사진/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240507113952_photo1_f99035d5f160.jpg",
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
    src: "../사진/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240507113952_photo1_f99035d5f160.jpg",
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
    src: "../사진/300_300_20240401081902_photo1_90f4f6f544db.jpg",
    text1: "평점 4.0",
    text2: "여우동 ",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240421123507_photo1_b33d20f05cd7.jpg",
    text1: "평점 4.1",
    text2: "스타벅스",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240424124048_photo1_Z2Cb5MTTmQS0.jpg",
    text1: "평점 4.2",
    text2: "롯데리아",
    text3: "#축하 #행복 #생일",
  },
  {
    src: "../사진/300_300_20240507113952_photo1_f99035d5f160.jpg",
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
const Top = document.querySelector(".TopLoop");
Top.addEventListener("click", function () {
  location.href = "#header-H2";
});
