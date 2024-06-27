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
  // location.href = "#hTag-JMT";
  location.href = "../../서석민 - 맛집/JMT/JMT.html";
});
cafetag.addEventListener("click", (e) => {
  location.href = "../../서석민 - 맛집/Cafe/Cafe.html";
});
hotPlacetag.addEventListener("click", (e) => {
  location.href = "../../정유진 - 맛집/hotPlace.html";
});
epiloguetag.addEventListener("click", (e) => {
  location.href = "../../정유진 - 맛집/reviewPage/review.html";
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

// const datas = await getDatas("store");
// let infolist;
// datas.forEach((doc, idx) => {
//   const info = doc.data();
//   infolist = info.members;
// });

// let infolistArr1 = infolist.map(function (el) {
//   return el;
// });
// let infolistArrsort1 = infolistArr1.sort(function (a, b) {
//   let pointC = a.point;
//   let pointD = b.point;
//   return pointC - pointD;
// });

// const infolistSliceArr1 = infolistArrsort1.slice(70, 80);
// console.log(infolistSliceArr1);
// const resturantBoxes = document.querySelector(".restaurant-section");
// infolistSliceArr1.forEach(function (el, idx) {
//   resturantBoxes.insertAdjacentHTML(
//     "beforeend",
//     `
//     <div class="box mySlides fade">
//     <h1 class="box-h3">TOP${idx + 1} ${el.name}</h1>
//     <div class="boxes">
//               <img
//                 class="box-img"
//                 src="../../서석민 - 맛집/Photo/${el.src}"
//               />
//             <div class="boxes-inner">
//             <div class="box-point"><span>평점:</span> ${el.point}</div>
//             <div class="box-name">${el.name}</div>
//             <div class="box-tag"><span>addr:</span> ${el.addr}</div>
//             <div class="box-tag"><span>On.</span>${el.time}</div>
//             <div class="box-tag"><span>N. </span>${el.number}</div>
//             <div class="box-tag"><span>#</span>${el.category}</div>
//             </div>
//             </div>

//          `
//   );
// });
// // script.js

// const datas1 = await getDatas("cafe1");
// const textinner = "분위기 있는";
// let infoinput;
// const infoinputArr = [];
// datas1.forEach((doc, idx) => {
//   const info = doc.data();
//   // console.log(infoinput);
//   infoinputArr.push(info);
// });
// console.log(infoinputArr);
// // console.log(infoinputArr);
// // infoinputArr.forEach(function (el) {
// //   console.log(el);
// // });
// let infolistArr2 = infoinputArr.map(function (el) {
//   return el;
// });
// let infolistArrsort2 = infolistArr2.sort(function (a, b) {
//   let pointC = a.point;
//   let pointD = b.point;
//   return pointC - pointD;
// });
// const cafeSection = document.querySelector(".cafe-section");
// const infolistSliceArr2 = infolistArrsort2.slice(26, 36);
// console.log(infolistSliceArr2);
// infolistSliceArr2.forEach(function (el, idx) {
//   cafeSection.insertAdjacentHTML(
//     "beforeend",
//     `
//   <div class="box youSlides fado">
//    <h1 class="box-h3">TOP${idx + 1} ${el.name}</h1>
//             <img
//               class="box-img"
//               src="../../서석민 - 맛집/Photo_Cafe/${idx + 1}.jpg"
//             />
//             <div class="box-point"><span>평점:</span> ${el.point}</div>
//             <div class="box-name">${el.name}</div>
//             <div class="box-tag"><span>addr:</span> ${el.addr}</div>
//             <div class="box-tag"><span>On.</span>${el.time}</div>
//             <div class="box-tag"><span>N. </span>${el.number}</div>
//             <div class="box-tag"><span>#</span>${el.category}</div>
//             <div class="box-tag hidden"><span>#</span>${el.id}</div>
//           </div>

//        `
//   );
// });
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let slides = document.getElementsByClassName("mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }
// let slideIndex1 = 0;
// showSlides1();
// script.js

// 첫 번째 데이터 가져오기 및 처리
// async function fetchAndDisplayStoreData() {
//   const datas = await getDatas("store");

//   // 데이터 처리
//   let infolist = [];
//   datas.forEach((doc, idx) => {
//     const info = doc.data();
//     infolist = info.members;
//   });

//   let infolistArr1 = infolist.map(function (el) {
//     return el;
//   });
//   let infolistArrsort1 = infolistArr1.sort(function (a, b) {
//     let pointC = a.point;
//     let pointD = b.point;
//     return pointC - pointD;
//   });

//   const infolistSliceArr1 = infolistArrsort1.slice(70, 80);
//   console.log(infolistSliceArr1);
//   const restaurantBoxes = document.querySelector(".restaurant-section");
//   infolistSliceArr1.forEach(function (el, idx) {
//     restaurantBoxes.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div class="box mySlides fade">
//         <h1 class="box-h3">TOP${idx + 1} ${el.name}</h1>
//         <div class="boxes">
//           <img class="box-img" src="../../서석민 - 맛집/Photo/${el.src}" />
//           <div class="boxes-inner">
//             <div class="box-point"><span>평점:</span> ${el.point}</div>
//             <div class="box-name">${el.name}</div>
//             <div class="box-tag"><span>addr:</span> ${el.addr}</div>
//             <div class="box-tag"><span>On.</span>${el.time}</div>
//             <div class="box-tag"><span>N. </span>${el.number}</div>
//             <div class="box-tag"><span>#</span>${el.category}</div>
//           </div>
//         </div>
//       </div>
//     `
//     );
//   });

//   // 첫 번째 슬라이드 쇼 시작
//   showSlides();
// }

// // 두 번째 데이터 가져오기 및 처리
// async function fetchAndDisplayCafeData() {
//   const datas1 = await getDatas("cafe1");

//   // 데이터 처리
//   const infoinputArr = [];
//   datas1.forEach((doc, idx) => {
//     const info = doc.data();
//     infoinputArr.push(info);
//   });

//   let infolistArr2 = infoinputArr.map(function (el) {
//     return el;
//   });
//   let infolistArrsort2 = infolistArr2.sort(function (a, b) {
//     let pointC = a.point;
//     let pointD = b.point;
//     return pointC - pointD;
//   });

//   const cafeSection = document.querySelector(".cafe-section");
//   const infolistSliceArr2 = infolistArrsort2.slice(26, 36);
//   console.log(infolistSliceArr2);
//   infolistSliceArr2.forEach(function (el, idx) {
//     cafeSection.insertAdjacentHTML(
//       "beforeend",
//       `
//       <div class="box mySlides fade">
//         <h1 class="box-h3">TOP${idx + 1} ${el.name}</h1>
//             <div class="boxes">
//         <img class="box-img" src="../../서석민 - 맛집/Photo_Cafe/${
//           idx + 1
//         }.jpg" />
//          <div class="boxes-inner">
//         <div class="box-point"><span>평점:</span> ${el.point}</div>
//         <div class="box-name">${el.name}</div>
//         <div class="box-tag"><span>addr:</span> ${el.addr}</div>
//         <div class="box-tag"><span>On.</span>${el.time}</div>
//         <div class="box-tag"><span>N. </span>${el.number}</div>
//         <div class="box-tag"><span>#</span>${el.category}</div>
//             </div>
//              </div>
//       </div>
//     `
//     );
//   });

//   // 두 번째 슬라이드 쇼 시작
//   showSlides1();
// }

// // 초기화 함수
// async function init() {
//   await fetchAndDisplayStoreData();
//   await fetchAndDisplayCafeData();
// }

// // 초기화 함수 호출
// init();

// // 첫 번째 슬라이드 쇼 기능
// let slideIndex = 0;
// function showSlides() {
//   let slides = document.querySelectorAll(".restaurant-section .mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 3000); // 3초마다 이미지 변경
// }

// // 두 번째 슬라이드 쇼 기능
// let slideIndex1 = 0;
// function showSlides1() {
//   let slides = document.querySelectorAll(".cafe-section .mySlides");
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex1++;
//   if (slideIndex1 > slides.length) {
//     slideIndex1 = 1;
//   }
//   slides[slideIndex1 - 1].style.display = "block";
//   setTimeout(showSlides1, 3000); // 3초마다 이미지 변경
// }

// const hotPlaceSection = document.querySelector(".hotplace-section");
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
//     hotPlaceSection.insertAdjacentHTML(
//       "beforeend",
//       `
//        <div class="content">
//                 <img src="../../정유진 - 맛집/img/${idx + 1}.jpg" />
//               <p class="hpName">${e.title}</p></a
//                >
//                <p class="hpTime">
//                 ${e.text2}
//               </p>
//                <p class="hpInfo">${e.event}</p>
//                <p class="hpInfo hidden">${e.id}</p>
//              </div>
//     `
//     );
//   });
// });
// script.js
// script.js

// script.js

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
  infolistSliceArr1.forEach(function (el, idx) {
    restaurantBoxes.insertAdjacentHTML(
      "beforeend",
      `
      <div class="box mySlides fade">
        <h1 class="box-h3">TOP ${idx + 1} ${el.name}</h1>
        <div class="boxes">
          <img class="box-img" src="../../서석민 - 맛집/Photo/${el.src}" />
          <div class="boxes-inner">
            <div class="box-point"><span>평점:</span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr:</span> ${el.addr}</div>
            <div class="box-tag"><span>On.</span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag"><span>#</span>${el.category}</div>
          </div>
        </div>
      </div>
    `
    );
  });

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
        <div class="boxes">
          <img class="box-img" src="../../서석민 - 맛집/Photo_Cafe/${
            idx + 1
          }.jpg" />
          <div class="boxes-inner">
            <div class="box-point"><span>평점:</span> ${el.point}</div>
            <div class="box-name">${el.name}</div>
            <div class="box-tag"><span>addr:</span> ${el.addr}</div>
            <div class="box-tag"><span>On.</span>${el.time}</div>
            <div class="box-tag"><span>N. </span>${el.number}</div>
            <div class="box-tag"><span>#</span>${el.category}</div>
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
          <div class="boxes">
            <img class="box-img"src="../../정유진 - 맛집/img/${idx + 1}.jpg" />
            <div class="boxes-inner">
              <div class="box-point">  ${el.title}</div>
              <div class="box-name">${el.point}</div>
              <div class="box-tag">${el.text}</div>
              <div class="box-tag">${el.text2}</div>
              <div class="box-tag">${el.event}</div>
              <div class="box-tag hidden">${el.category}</div>
            </div>
          </div>
        </div>
      `
      );
    });
  });
  // <div class="box mySlides fade">
  //   <h1 class="box-h3">
  //     TOP${idx + 1}
  //   </h1>
  //   <div class="boxes">
  //     <img src="../../정유진 - 맛집/img/${idx + 1}.jpg" />
  //     <div class="boxes-inner"></div>
  //   </div>
  // </div>;
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
