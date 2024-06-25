import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../Javascript/DLU_firebase.js";
// const jmtTag = document.querySelector(".h-Tag1Span");
// const cafeTag = document.querySelector(".h-Tag2Span");
// const placeTag = document.querySelector(".h-Tag3Span");
// const epliogueTag = document.querySelector(".h-Tag4Span");

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

// async function getcutomerAge() {
//   const datas = await getDatas("customer");
//   datas.forEach((doc) => {
//     const info = doc.data();
//     return info.age;
//   });
// }
// console.log(getcutomerAge());

// async function getcutomerGender() {
//   const datas = await getDatas("customer");
//   datas.forEach((doc) => {
//     const info = doc.data();
//     return info.gender;
//   });
// }
// console.log(getcutomerGender());
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
  location.href = "#hTag-JMT";
});
cafetag.addEventListener("click", (e) => {
  location.href = "#hTag-cafe";
  // scroll.href = "#hTag-cafe";
});
hotPlacetag.addEventListener("click", (e) => {
  location.href = "#hTag-hotPlace";
});
epiloguetag.addEventListener("click", (e) => {
  location.href = "#hTag-epilogue";
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

const shareBtn = document.getElementById("shareBtn");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

shareBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const datas = await getDatas("store");
let infolist;
let infoinput;
datas.forEach((doc, idx) => {
  const info = doc.data();
  infolist = info.members;
  infoinput = info.input;
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
const resturantBoxes = document.querySelector(".restaurant-section");
infolistSliceArr1.forEach(function (el, idx) {
  resturantBoxes.insertAdjacentHTML(
    "beforeend",
    `
    <div class="box mySlides fade">
    <h1 class="box-h3"><span>#</span>Top${idx + 1} 성심당</h1>
    <div class="boxes">
              <img
                class="box-img"
                src="../../서석민 - 맛집/Photo/${el.src}"
              />
            <div class="boxes-inner">
            <div class="box-point"><span>평점:</span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr:</span> ${el.addr}</div>
            <div class="box-tag"><span>On.</span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag"><span>#</span>${el.category}</div>
            </div>
            </div>

         `
  );
});
// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
