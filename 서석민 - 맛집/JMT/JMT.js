// 로고 시작
import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
  addObjectToFieldInSpecificDocumentById,
} from "./DLU_firebase.js";
// const jmtTag = document.querySelector(".h-Tag1Span");
// const cafeTag = document.querySelector(".h-Tag2Span");
// const placeTag = document.querySelector(".h-Tag3Span");
// const epliogueTag = document.querySelector(".h-Tag4Span");

// 예시로 함수 호출
// addstoreInfo();

const Logo = document.querySelector(".Logo");
Logo.addEventListener("click", function () {
  location.href = "#";
});
// 로고 끝

// 메인 사진 시작
function chgMainImg() {
  const mainImgArr = [
    "../title/1.jpg",
    "../title/2.jpg",
    "../title/3.jpg",
    "../title/4.jpg",
    "../title/5.jpg",
  ];
  let mainImgIndex = 0;
  const mainImgEl = document.getElementById("backImg");

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
// 메인 사진 끝

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

// const datas = await getDatas("hotPlace");
// let infolist;
// let infoinput;
// datas.forEach(async (doc, idx) => {
//   const info = doc.data();
//   // infolist = info.members;
//   infoinput = info.input;
//   infolist = info.list;
//   console.log(infolist);
//   // let idx = 1;
//   infolist.forEach(async (e, idx) => {
//     console.log(e);
//     // const addr = e.addr;
//     // const name = e.name;
//     const point = e.point;
//     // const age = e.age;
//     // const category = e.category;
//     // const number = e.number;
//     // const time = e.time;
//     const event = e.event;
//     const img = e.img;
//     const text = e.text;
//     const text2 = e.text2;
//     const title = e.title;
//     const id = `hotPlace${idx + 1}`;

//     const store1Obj = {
//       // addr: addr,
//       // name: name,
//       // point: point,
//       // age: age,
//       // category: category,
//       // number: number,
//       // time: time,
//       event: event,
//       img: img,
//       text: text,
//       text2: text2,
//       title: title,
//       id: id,
//     };
//     // const result = await addDatasAuto("hotPlace1", store1Obj);
//   });
// });

// let infolistArr = infolist.map(function (el) {
//   return `${el.name},${el.point}`;
// });
// let infolistArrsort = infolistArr.sort(function (a, b) {
//   let pointA = a.split(",")[1];
//   let pointB = b.split(",")[1];
//   return pointA - pointB;
// });
// const sidebarA = document.querySelectorAll(".sidebar-sub");
// const infolistSliceArr = infolistArrsort.slice(70, 80);
// sidebarA.forEach(function (el, idx) {
//   if (idx < infolistSliceArr.length) {
//     let infolistEnd = infolistSliceArr[idx].split(",")[0];
//     el.insertAdjacentHTML(
//       "afterbegin",
//       `<a href="#" class="sidebarA"><span class="sideinnerN">${
//         idx + 1
//       }. </span>  <span class="sideinnerT">${infolistEnd}</span></a>`
//     );
//   }
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
// const Mainbox1 = document.querySelector(".Main-box1");
// infolistSliceArr1.forEach(function (el, idx) {
//   Mainbox1.insertAdjacentHTML(
//     "beforeend",
//     `
//   <div class="box">
//   <h1 class="box-h3"><span>#</span>Top${idx + 1}</h1>
//             <img
//               class="box-img"
//               src="../Photo/${el.src}"
//             />
//             <div class="box-point"><span>평점:</span> ${el.point}</div>
//             <div class="box-name">${el.name}</div>
//             <div class="box-tag"><span>addr:</span> ${el.addr}</div>
//             <div class="box-tag"><span>On.</span>${el.time}</div>
//             <div class="box-tag"><span>N. </span>${el.number}</div>
//             <div class="box-tag"><span>#</span>${el.category}</div>
//           </div>

//        `
//   );
// });

// const Searches = document.querySelector(".Search");
// const headerInput = document.querySelector(".header-Input");
// const result = document.querySelector(".result");
// function inputArr(e) {
//   console.log(this);
//   result.innerHTML = "";
//   let inputValue = headerInput.value;
//   inputValue = inputValue.replaceAll(" ", "&nbsp;");
//   // let changeMessage = inputValue.replaceAll(' ',"&nbsp;")
//   if (inputValue === "") return;
//   infolist.forEach(function (el, idx) {
//     if (
//       el.addr.includes(inputValue) ||
//       el.category.includes(inputValue) ||
//       el.name.includes(inputValue) ||
//       el.number.includes(inputValue) ||
//       el.point.includes(inputValue) ||
//       (el.time.includes(inputValue) && e.code == "Enter")
//     ) {
//       result.insertAdjacentHTML(
//         "beforeend",
//         `
//                      <div class="box">
//                           <img
//                             class="box-img"
//                             src="../Photo/${idx + 1}.jpg"
//                           />
//                           <div class="box-point"><span>평점:</span>
//                           ${el.point}</div>
//                           <div class="box-name">${el.name}</div>
//                           <div class="box-tag"><span>addr:</span>${
//                             el.addr
//                           }</div>
//                           <div class="box-tag"><span>On.</span>${el.time}</div>
//                           <div class="box-tag"><span>N.</span>${el.number}</div>
//                           <div class="box-tag"><span>#</span>${
//                             el.category
//                           }</div>
//                         </div>
//                    `
//       );
//     }
//   });

//   headerInput.value = "";
// }
// Searches.addEventListener("click", inputArr);
// headerInput.addEventListener("keypress", inputArr);

// result.addEventListener("click", (e) => {
//   const box = e.target.closest(".box");
//   console.log(box);
// });
// // if (box) {
// //   const idx = box.getAttribute("data-idx");
// //   const selectedItem = infolist[idx];
// // }
// let updateTarget;
// let nameChild;
// let addrChild;
// const resturantBoxes = document.querySelector(".resturantBoxes");

// const datasPlan = await getDatas("plan");
// let memberInfoArr = [];
// let memberInfoObj = { resturant: {} };
// datasPlan.forEach((doc, idx) => {
//   const info = doc.data();
//   info.planArr.forEach((item) => {
//     const storeTitle = item.resturant[0];
//     const storeAddr = item.resturant[1];
//     // memberInfoObj = { title: storeTitle, addr: storeAddr };
//     memberInfoArr.push(memberInfoObj);
//   });
// });

// const newMemberInfoObj = {};
// function removeDuplicates(array) {
//   return [...new Set(array)];
// }
// let memberInfo = {};
// Mainbox1.addEventListener("click", async function (e) {
//   if (updateTarget) {
//     alert("회원정보 수정중에는 저장할 수 없습니다.");
//     return false;
//   }
//   const box = e.target.closest(".box");
//   if (box) {
//     nameChild =
//       box.firstElementChild.nextElementSibling.nextElementSibling
//         .nextElementSibling;
//     addrChild =
//       box.firstElementChild.nextElementSibling.nextElementSibling
//         .nextElementSibling.nextElementSibling;
//   }

// const day1 = document.querySelector(".day1");
// const day1inner = day1.innerHTML;
// const nameText = nameChild.innerHTML;
// const addrText = addrChild.innerHTML.substring(18, 22);
// const memberInfo = {
//   title: nameText,
//   addr: addrText,
//   // resturant: { title: nameText, addr: addrText },
// };
// 중복을 제거하는 함수

// 중복 확인 함수

// console.log(infoinputArr);
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
let infolistArr = infoinputArr.map(function (el) {
  return `${el.name},${el.point}`;
});
let infolistArrsort = infolistArr.sort(function (a, b) {
  let pointA = a.split(",")[1];
  let pointB = b.split(",")[1];
  return pointA - pointB;
});
const sidebarA = document.querySelectorAll(".sidebar-sub");
const infolistSliceArr = infolistArrsort.slice(70, 80);
sidebarA.forEach(function (el, idx) {
  if (idx < infolistSliceArr.length) {
    let infolistEnd = infolistSliceArr[idx].split(",")[0];
    console.log(infolistEnd);
    el.insertAdjacentHTML(
      "afterbegin",
      `<a href="#" class="sidebarA"><span class="sideinnerN">${
        idx + 1
      }. </span>  <span class="sideinnerT">${infolistEnd}</span></a>`
    );
  }
});
let infolistArr1 = infoinputArr.map(function (el) {
  return el;
});
let infolistArrsort1 = infolistArr1.sort(function (a, b) {
  let pointC = a.point;
  let pointD = b.point;
  return pointC - pointD;
});
const infolistSliceArr1 = infolistArrsort1.slice(70, 80);
console.log(infolistSliceArr1);
const Mainbox1 = document.querySelector(".Main-box1");
infolistSliceArr1.forEach(function (el, idx) {
  Mainbox1.insertAdjacentHTML(
    "beforeend",
    `
   <div class="box">
   <h1 class="box-h3"><span>#</span>Top${idx + 1}</h1>
             <img
              class="box-img"
            src="../Photo/${el.src}"
            />
          <div class="box-point"><span>평점:</span> ${el.point}</div>
          <div class="box-name">${el.name}</div>
          <div class="box-tag"><span>addr:</span> ${el.addr}</div>
          <div class="box-tag"><span>On.</span>${el.time}</div>        
          <div class="box-tag"><span>N. </span>${el.number}</div>        
          <div class="box-tag"><span>#</span>${el.category}</div>
          <div class="hidden"><span>#</span>${el.id}</div>
           </div>

       `
  );
});

const Searches = document.querySelector(".Search");
const headerInput = document.querySelector(".header-Input");
const result = document.querySelector(".result");
function inputArr(e) {
  headerInput.innerHTML = "";
  const inputValue = headerInput.value;
  if (inputValue === "") return;
  infoinputArr.forEach(function (el, idx) {
    console.log(el.addr);
    if (
      el.addr.includes(inputValue) ||
      el.category.includes(inputValue) ||
      el.name.includes(inputValue) ||
      el.number.includes(inputValue) ||
      el.point.includes(inputValue) ||
      (el.time.includes(inputValue) && e.code == "Enter")
    ) {
      console.log(el);
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

let nameChild;
let addrChild;
let idChild;
const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes"); // hotPlaceBoxes 변수 추가

Mainbox1.addEventListener("click", function (e) {
  const box = e.target.closest(".box");
  if (box) {
    nameChild =
      box.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling;
    addrChild =
      box.firstElementChild.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling;
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
        <span>${username}</span>
        </div>
        `
      );
    }
  } else if (IdText.includes("cafe")) {
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
  } else if (key.includes("cafe")) {
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

// 눌렀을때 값이
// const result = await addDatas("Hotplace2", { Textinfomation });
//   // });
//

// const memberInfo = {
//   resturant: [nameText, addrText],
// };

// let planArr = planlist.planArr.resturant || [];
// console.log(planArr);
// planArr.push(memberInfo);
// const result = await addDatas("plan", { planArr }, "planArr");
// let lastValue = planArr[planArr.length - 1];

// if (planArr.includes(memberInfo)) {
// } else {
//   // deletefield("planArr", memberInfo);
//   const newmemberInfo = { rt: [nameText, addrText], ...memberInfo };
//   updateDatas("plan", "planArr", { newmemberInfo });
// }
// newMemberInfoArr.push(memberInfoArr);
// memberInfoObj.resturant = `${memberInfo}`;
// memberInfoObj.resturant = memberInfo;

// console.log(memberInfoObj.resturant);

// async function resturantupdateDatas() {
//   // const result = await addDatas("plan", newMemberInfoArr, "planArr");
//   memberInfo = {
//     title: nameText,
//     addr: addrText,
//     // resturant: { title: nameText, addr: addrText },
//   };
//   function removeDuplicates(array) {
//     return [...new Set(array)];
//   }
//   memberInfoArr.push(memberInfo);
//   const newMemberInfoArr = removeDuplicates(memberInfoArr);
//   memberInfoObj.resturant = newMemberInfoArr;
//   console.log(memberInfoObj); // [{},{}]  { restaurant: [{}]  }
//   // const result = await addDatas("plan", memberInfoObj, "planArr");
//   try {
//     const result = await addDatas("plan", memberInfoObj, "planArr");
//     // const result = await updateDatas("plan", "planArr", memberInfoObj);
//     console.log("데이터가 성공적으로 추가되었습니다: ", result);
//   } catch (error) {
//     console.error("데이터 추가 중 오류 발생: ", error);
//   }
// }

// const Top = document.querySelector(".TopLoop");
// Top.addEventListener("click", function () {
//   location.href = "#header-H1";
// });
// //
// const headerH1 = document.querySelector("#header-H1");
// headerH1.addEventListener("click", function () {
//   location.reload();
// });
// // clear(초기화) 버튼
// const clear = document.querySelector(".clear");
// clear.addEventListener("click", function () {
//   location.reload();
// });

// const Promise = document.querySelector("Promise-but");
// let child;
// function openPopup() {
//   child = window.open(
//     "../240510/2_numberguess.html",
//     "_blank",
//     "width=1000,height=500, left=500, top=0,"
//   );
//   // location=no ==> 주소입력창 없어짐
//   // resizable=no ==> 팝업창의 크기를 조절할 수 없음
//   // toolbar=no ==> 도구모음이 없어짐
// }
// const body = document.querySelector("body");
// const MainH1 = document.querySelector(".MainH1");
// const bodyHeight = body.getBoundingClientRect();
// const MainH1Height = MainH1.getBoundingClientRect();
// function updateScrollPosition() {
//   const scrollPosition = window.scrollY || document.documentElement.scrollTop;
//   // console.log("Scroll Position: " + scrollPosition);

//   if (scrollPosition > 1000) {
//     MainH1.style.transform = "translateY(-100px)";
//     MainH1.style.transition = "0.5s linear";
//   }
// }

// window.addEventListener("scroll", updateScrollPosition);

// body.addEventListener('wheel', function(){
