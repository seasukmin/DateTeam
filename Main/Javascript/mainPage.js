import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../Javascript/DLU_firebase.js";

const mainPageLogo = document.querySelector(".mainPage-logo");
mainPageLogo.addEventListener("click", () => {
  location.href = "#";
});

async function getcutomerInfo() {
  const datas = await getDatas("customer");
  datas.forEach((doc) => {
    // console.log(doc.id);
    const info = doc.data();
    // console.log(info.age);
    let { addr, age, email, gender, tel } = doc.data();
  });
}
getcutomerInfo();

const ageSelect = document.getElementById("ageInfo");
for (let i = 1; i <= 100; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  ageSelect.appendChild(option);
}
// 회원 로그인/ 회원가입
const loginBox = document.querySelector(".login-box");
const signInBtn = document.querySelector(".signIn");
const signUpBtn = document.querySelector(".signUp");
const nonsignInBtn = document.querySelector(".nonsignIn");
const aloginBox = document.querySelector(".alogin-box");
const bloginBox = document.querySelector(".blogin-box");
const returnBtn = document.getElementById("returnButton");

// signInBtn.addEventListener("click", (e) => {
//   location.href = "../HTML/LogInPage.html";
// });
signUpBtn.addEventListener("click", (e) => {
  location.href = "../HTML/join.html";
});
// 회원 로그인
signInBtn.addEventListener("click", () => {
  aloginBox.classList.toggle("hiddenALogin");
  aloginBox.classList.remove("hidden");
  bloginBox.classList.remove("hidden");

  if (bloginBox.classList.contains("hiddenBLogin") !== true) {
    bloginBox.classList.add("hiddenBLogin");
  }
});

// 비회원 로그인

nonsignInBtn.addEventListener("click", () => {
  bloginBox.classList.toggle("hiddenBLogin");
  aloginBox.classList.remove("hidden");
  bloginBox.classList.remove("hidden");
  if (aloginBox.classList.contains("hiddenALogin") !== true) {
    aloginBox.classList.add("hiddenALogin");
  }
});

const JMTtag = document.getElementById("h-JMT");
const cafetag = document.getElementById("h-cafe");
const hotPlacetag = document.getElementById("h-hotPlace");
const epiloguetag = document.getElementById("h-epilogue");

JMTtag.addEventListener("click", (e) => {
  // location.href = "#hTag-JMT";
  location.href = "../../Resturant, Cafe/JMT/JMT.html";
});
cafetag.addEventListener("click", (e) => {
  location.href = "../../Resturant, Cafe/Cafe/Cafe.html";
});
hotPlacetag.addEventListener("click", (e) => {
  location.href = "../../Hotplace/hotPlace.html";
});
epiloguetag.addEventListener("click", (e) => {
  location.href = "../../Hotplace/reviewPage/review.html";
});

const topLoop = document.getElementById("topI");
const jmtLoop = document.getElementById("jmtI");
const cafeLoop = document.getElementById("cafeI");
const placeLoop = document.getElementById("placeI");
const bottomLoop = document.getElementById("infoI");

topLoop.addEventListener("click", (e) => {
  // location.href = "#hTag-JMT";
  window.scrollTo(0, 0);
});
jmtLoop.addEventListener("click", (e) => {
  // location.href = "#hTag-JMT";
  window.scrollTo(0, 300);
});
cafeLoop.addEventListener("click", (e) => {
  // location.href = "#hTag-cafe";
  window.scrollTo(0, 600);
});
placeLoop.addEventListener("click", (e) => {
  window.scrollTo(0, 900);
});
bottomLoop.addEventListener("click", (e) => {
  location.href = "./subPage.html";
});

const instagram = document.querySelector(".bxl-instagram-alt");
const facebook = document.querySelector(".bxl-facebook-circle");
const twitter = document.querySelector(".bxl-twitter");
const youtube = document.querySelector(".bxl-youtube");
instagram.addEventListener(
  "click",
  () => (location.href = "https://www.instagram.com")
);
facebook.addEventListener(
  "click",
  () => (location.href = "https://www.facebook.com/")
);
twitter.addEventListener(
  "click",
  () => (location.href = "https://www.twitter.com")
);
youtube.addEventListener(
  "click",
  () => (location.href = "https://www.youtube.com")
);

// 첫 번째 데이터 가져오기 및 처리
async function fetchAndDisplayStoreData() {
  const datas = await getDatas("store");

  // 데이터 처리
  let infolist = [];
  datas.forEach((doc, idx) => {
    const info = doc.data();
    infolist = info.members;
  });

  let infolistArr1 = infolist.map(function (el) {
    return el;
  });
  let infolistArrsort1 = infolistArr1.sort(function (a, b) {
    let pointC = a.point;
    let pointD = b.point;
    return pointC - pointD;
  });

  const infolistSliceArr1 = infolistArrsort1.slice(70, 80);
  console.log(infolistSliceArr1);
  const restaurantBoxes = document.querySelector(".restaurant-section");
  const rankListContent = infolistSliceArr1?.forEach((el, idx) => {
    return `<li>TOP${idx + 1} ${el[0]?.name}</li>
      <li>TOP${idx + 2} ${el[1]?.name}</li>
      <li>TOP${idx + 3} ${el[2]?.name}</li>
      <li>TOP${idx + 4} ${el[3]?.name}</li>
      <li>TOP${idx + 5} ${el[4]?.name}</li>
      <li>TOP${idx + 6} ${el[5]?.name}</li>
      <li>TOP${idx + 7} ${el[6]?.name}</li>
      <li>TOP${idx + 8} ${el[7]?.name}</li>
      <li>TOP${idx + 9} ${el[8]?.name}</li>
      <li>TOP${idx + 10} ${el[9]?.name}</li>`;
  });
  console.log(rankListContent);

  infolistSliceArr1.forEach(function (el, idx) {
    restaurantBoxes.insertAdjacentHTML(
      "beforeend",
      `
      <div class="box mySlides fade">
        <h1 class="box-h3">TOP ${idx + 1} ${el.name}</h1>
        <div class="content-box">
        <div class="boxes">
          <img class="box-img" src="../../Resturant, Cafe/Photo/${el.src}" />
          </div>
          <div class="boxes-inner">
            <div class="box-point"><span>평점: </span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr: </span> ${el.addr}</div>
            <div class="box-tag"><span>On. </span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag hashTagStore"><span>#</span> ${
              el.category
            }</div>
            </div>
        </div>
    `
    );
  });
  // const rankList = document.querySelectorAll(".rankList");
  // infolistSliceArr1.forEach((el, idx) => {
  //   rankList.insertAdjacentHTML(
  //     "beforeend",
  //     `<li>TOP${idx + 1} ${el[0].name}</li>
  //     <li>TOP${idx + 2} ${el[1].name}</li>
  //     <li>TOP${idx + 3} ${el[2].name}</li>
  //     <li>TOP${idx + 4} ${el[3].name}</li>
  //     <li>TOP${idx + 5} ${el[4].name}</li>
  //     <li>TOP${idx + 6} ${el[5].name}</li>
  //     <li>TOP${idx + 7} ${el[6].name}</li>
  //     <li>TOP${idx + 8} ${el[7].name}</li>
  //     <li>TOP${idx + 9} ${el[8].name}</li>
  //     <li>TOP${idx + 10} ${el[9].name}</li>`
  //   );
  // });
  // 첫 번째 슬라이드 쇼 시작
  showSlides();
}

// 두 번째 데이터 가져오기 및 처리
async function fetchAndDisplayCafeData() {
  const datas1 = await getDatas("cafe1");

  // 데이터 처리
  const infoinputArr = [];
  datas1.forEach((doc, idx) => {
    const info = doc.data();
    infoinputArr.push(info);
  });

  let infolistArr2 = infoinputArr.map(function (el) {
    return el;
  });
  let infolistArrsort2 = infolistArr2.sort(function (a, b) {
    let pointC = a.point;
    let pointD = b.point;
    return pointC - pointD;
  });

  const cafeSection = document.querySelector(".cafe-section");
  const infolistSliceArr2 = infolistArrsort2.slice(26, 36);
  console.log(infolistSliceArr2);
  infolistSliceArr2.forEach(function (el, idx) {
    cafeSection.insertAdjacentHTML(
      "beforeend",
      `
      <div class="box mySlides fade">
        <h1 class="box-h3">TOP ${idx + 1} ${el.name}</h1>
        <div class="content-box">
        <div class="boxes">
          <img class="box-img" src="../../Resturant, Cafe/Photo_Cafe/${
            idx + 1
          }.jpg" />
          </div>
          <div class="boxes-inner">
            <div class="box-point"><span>평점: </span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr: </span> ${el.addr}</div>
            <div class="box-tag"><span>On. </span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag hashTagCafe"><span>#</span> ${el.category}</div>
          </div>
          </div>
        </div>
      </div>
    `
    );
  });

  // 두 번째 슬라이드 쇼 시작
  showSlides1();
}

// 세 번째 데이터 가져오기 및 처리
async function fetchAndDisplayHotPlaceData() {
  const datas = await getDatas("hotPlace");
  const hotPlaceSection = document.querySelector(".hotplace-section");

  datas.forEach((doc, idx) => {
    const info = doc.data();
    const elslice = info.list.slice(30, 38);

    elslice.forEach(function (el, idx) {
      hotPlaceSection.insertAdjacentHTML(
        "beforeend",
        `
        <div class="box mySlides fade">
          <h1 class="box-h3">TOP ${idx + 1} ${el.title}</h1>
          <div class="content-box">
          <div class="boxes">
            <img class="box-img"src="../../Hotplace/img/${idx + 1}.jpg" />
            </div>
            <div class="boxes-inner">
            <div class="box-name">평점: ${el.point}</div>
              <div class="box-point">  ${el.title}</div>
              <div class="box-tag">addr: ${el.text}</div>
              <div class="box-tag">on. ${el.text2}</div>
              <div class="box-tag hashTagHotPlace">${el.event}</div>
              <div class="box-tag hidden ">${el.category}</div>
            </div>
            </div>
          </div>
        </div>
      `
      );
    });
  });

  // 세 번째 슬라이드 쇼 시작
  showSlides2();
}

// 초기화 함수
async function init() {
  await fetchAndDisplayStoreData();
  await fetchAndDisplayCafeData();
  await fetchAndDisplayHotPlaceData();
}

// 초기화 함수 호출
init();

// 첫 번째 슬라이드 쇼 기능
let slideIndex = 0;
function showSlides() {
  let slides = document.querySelectorAll(".restaurant-section .mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // 3초마다 이미지 변경
}

// 두 번째 슬라이드 쇼 기능
let slideIndex1 = 0;
function showSlides1() {
  let slides = document.querySelectorAll(".cafe-section .mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {
    slideIndex1 = 1;
  }
  slides[slideIndex1 - 1].style.display = "block";
  setTimeout(showSlides1, 3000); // 3초마다 이미지 변경
}

// 세 번째 슬라이드 쇼 기능
let slideIndex2 = 0;
function showSlides2() {
  let slides = document.querySelectorAll(".hotplace-section .mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }
  slides[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 3000); // 3초마다 이미지 변경
}
