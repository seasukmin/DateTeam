import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../javascript/DLU_firebase.js";

const picnic = document.getElementById("picnic");
const picnicArr = [
  {
    a: "https://map.naver.com/p/entry/place/413568990?lng=127.4720818&lat=36.2332871&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
    img: "../img/상소동.jpg",
    title: "상소동 산림욕장",
    text: "대전 동구 산내로 714",
    text2: "<br>일: 09:00",
    event: "#드라이브 #산림욕 #산책",
    local: "동구",
  },
  {
    a: "",
    img: "../img/만인산.jpg",
    title: "만인산자연휴양림",
    text: "대전 동구 산내로 106",
    text2: "",
    event: "#드라이브 #봉이호떡 #산책",
    local: "동구",
  },
  {
    a: "",
    img: "../img/식장산.jpg",
    title: "식장산 전망대",
    text: "	대전 동구 세천동 산 43-5",
    text2: "",
    event: "#드라이브 #야경",
    local: "동구",
  },
  {
    a: "",
    img: "../img/옛터.jfif",
    title: "옛터민속박물관",
    text: "대전 동구 산내로 321-35",
    text2: "<br>매일 10:00 ~ 00:30",
    event: "#관람무료 #드라이브 #한옥 #카페",
    local: "동구",
  },
  {
    a: "",
    img: "../img/대동벽화마을.jpg",
    title: "대동하늘공원",
    text: "	대전 동구 이화로 35번길 50",
    text2: "",
    event: "#산책 #벽화마을 #야경",
    local: "동구",
  },
  {
    a: "",
    img: "../img/소제동.jpeg",
    title: "소제동 거리",
    text: "대전 동구 소제동",
    text2: "",
    event: "#카페거리 #감성",
    local: "동구",
  },
  {
    a: "",
    img: "../img/문글램핑.jfif",
    title: "문 글램핑",
    text: "대전 동구 산내로 237",
    text2: "<br>예약제",
    event: "#힐링 #글램핑",
    local: "동구",
  },
];
picnicArr.forEach((info, idx) => {
  picnic.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc1"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}
          <a id="aIcon" href=${info.a} target="_blank">
          <i class='bx bx-right-arrow-circle' ></i>
          </a></p>
          <p class="hpTime">
            ${info.text}${info.text2}
          </p>
          <p class="hpInfo">${info.event}</p>
          
        </div> `
  );
});

const shopping = document.getElementById("shopping");
const shoppingArr = [
  {
    a: "",
    img: "../img/중앙시장.jpg",
    title: "중앙시장",
    text: "대전 동구 중앙로 200-1",
    text2: "<br>매일 07:00 ~ 17:00 변동사항 있음",
    event: "#전통시장 #먹거리",
    local: "동구",
  },
  {
    a: "",
    img: "../img/다이소.jpg",
    title: "다이소 본점",
    text: "대전 동구 동서대로1695번길 8",
    text2: "<br>매일 10:00 ~ 22:00",
    event: "#6층 #초대형",
    local: "동구",
  },
  {
    a: "",
    img: "../img/머물다가게.jpg",
    title: "머물다가게",
    text: "대전 동구 동대전로154번길 39",
    text2: "<br>월-금: 13:00 ~ 21:00",
    event: "#독립서점 #예약가능",
    local: "동구",
  },
  {
    a: "",
    img: "../img/트래블라운지.jpg",
    title: "트래블라운지",
    text: "대전 동구 중앙로 187-1",
    text2: "<br>매일 09:00 ~ 21:00",
    event: "#팝업스토어 #교복여행",
    local: "동구",
  },
];
shoppingArr.forEach((info, idx) => {
  shopping.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc2"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}
          <a id="aIcon" href=${info.a} target="_blank">
          <i class='bx bx-right-arrow-circle' ></i>
          </a></p>
          <p class="hpTime">
            ${info.text}${info.text2}
          </p>
          <p class="hpInfo">${info.event}</p>
          
        </div> `
  );
});

const inside = document.getElementById("inside");
const insideArr = [
  {
    a: "",
    img: "../img/복합터미널.jpg",
    title: "복합터미널",
    text: "대전 동구 동서대로 1689",
    text2: "<br>연중무휴",
    event: "#복합센터 #시외버스",
    local: "동구",
  },
  {
    a: "",
    img: "../img/빛나는순간.jpg",
    title: "빛나는 순간",
    text: "대전 동구 새울로 98-20 201호",
    text2: "<br>수: 15:00 ~ 19:00, 목-일: 11:00 ~ 19:00",
    event: "#반지 #공방 #예약제",
    local: "동구",
  },
  {
    a: "",
    img: "../img/헤레디움.jpg",
    title: "헤레디움",
    text: "대전 동구 대전로 735",
    text2: "<br>수-일: 11:00 ~ 19:00",
    event: "#전시관 #관람료있음",
    local: "동구",
  },
];
insideArr.forEach((info, idx) => {
  inside.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc3"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}
          <a id="aIcon" href=${info.a} target="_blank">
          <i class='bx bx-right-arrow-circle' ></i>
           </a></p>
          <p class="hpTime">
            ${info.text}${info.text2}
          </p>
          <p class="hpInfo">${info.event}</p>
          
        </div> `
  );
});

// const sports = document.getElementById("sports");
// const sportsArr = [
//   {

//     img: "../img/동구체육관.jpg",
//     name: "동구국민체육센터",
//     time: "월-토: 09:00",
//     time2: "<br>일: 09:00",
//     event: "#수영 #배드민턴 #탁구",
//     local: "동구",
//   },
//   {
//     img: "../img/킹스타.jfif",
//     name: "킹스타볼링센터",
//     time: "월-토: 09:00",
//     time2: "<br>일: 09:00",
//     event: "#볼링",
//     local: "동구",
//   },
// ];
// sportsArr.forEach((info, idx) => {
//   sports.insertAdjacentHTML(
//     "beforeend",

//     ` <div class="content">
//           <img src=${info.img} />
//           <p class="hpName">${info.name}</p>
//         <p class="hpTime">
//           ${info.time}${info.time2}
//         </p>
//         <p class="hpInfo">${info.event}</p>
//       </div> `
//   );
// });
const sports = document.getElementById("sports");
const sportsArr = [
  {
    a: "",
    img: "../img/동구체육관.jpg",
    title: "동구국민체육센터",
    text: "대전 동구 가양로 9",
    text2: "<br>일 휴무, 종목별 운영시간 상이",
    event: "#수영 #배드민턴 #탁구",
    local: "동구",
  },
  {
    a: "",
    img: "../img/킹스타.jfif",
    title: "킹스타볼링센터",
    text: "대전 동구 대전로 647 지하1층",
    text2: "<br>월-금: 13:00 ~ 02:00, 토-일: 10:00 ~ 02:00",
    event: "#볼링",
    local: "동구",
  },
];

sportsArr.forEach((info, idx) => {
  sports.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} class="sports-img" />
        <div title="planner에 추가하기" class="plusIc4"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}
          <a id="aIcon" href=${info.a} target="_blank">
          <i class='bx bx-right-arrow-circle' ></i>
          </a></p>
          <p class="hpTime">
            ${info.text}${info.text2}
          </p>
          <p class="hpInfo">${info.event}</p>
          
        </div> `
  );
});

const festival = document.getElementById("festival");
const festivalArr = [
  {
    a: "",
    img: "../img/대청호벚꽃.png",
    title: "대청호 벚꽃축제",
    text: "대청호 벚꽃한터",
    text2: "<br>2024.03.29 ~ 2024.03.31 3일간",
    event: "#벚꽃 #세상에서가장긴벚꽃길",
    local: "동구",
  },
  {
    a: "",
    img: "../img/야시장.png",
    title: "중앙시장 야시장",
    text: "2024.05.03 ~ 2024.10.26 매주 금,토",
    text2: "<br>대전 중앙시장",
    event: "#동구야놀자 #먹거리",
    local: "동구",
  },
  {
    a: "",
    img: "../img/0시축제.jfif",
    title: "대전 0시 축제",
    text: "2024.08.09 ~ 2024.08.17 9일간",
    text2: "<br>대전역 ~ 옛충남도청",
    event: "#대전부르스 #심야",
    local: "동구",
  },
  {
    a: "https://map.naver.com/p/entry/place/1139336376?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.4491245&lat=36.3353339&c=15.00,0,0,0,dh",
    img: "../img/동구동락.jfif",
    title: "동구동락 축제",
    text: "2024.10.04 ~ 2024.10.06 3일간",
    text2: "<br>동광장로 및 대동천",
    event: "#동광장 #대동천",
    local: "동구",
  },
];
festivalArr.forEach((info, idx) => {
  festival.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc5"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}
          <a id="aIcon" href=${info.a} target="_blank">
          <i class='bx bx-right-arrow-circle' ></i>
         </a></p>
          <p class="hpTime">
            ${info.text}${info.text2}
          </p>
          <p class="hpInfo">${info.event}</p>
          
        </div> `
  );
});

// 사이드바 누르면 위치로
const Maintitle = document.querySelectorAll(".side-text li");
console.log(Maintitle);
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

// 카테고리 페이지로 이동
document.querySelectorAll(".category li").forEach((item) => {
  item.addEventListener("click", function () {
    const url = this.getAttribute("data-url");
    window.location.href = url;
  });
});

// 사진 hover 하면 + 버튼 나타나게
document.querySelectorAll(".plusIc1").forEach((img, idx) => {
  img.addEventListener("click", () => {
    const picnicItem = picnicArr[idx];
    const picnicArray = [{ name: picnicItem.name, local: picnicItem.local }];
    console.log(picnicArray);
  });
});

document.querySelectorAll(".plusIc2").forEach((img, idx) => {
  img.addEventListener("click", () => {
    const shoppingItem = shoppingArr[idx];
    const shoppingArray = [
      { name: shoppingItem.name, local: shoppingItem.local },
    ];
    console.log(shoppingArray);
  });
});

document.querySelectorAll(".plusIc3").forEach((img, idx) => {
  img.addEventListener("click", () => {
    const insideItem = insideArr[idx];
    const insideArray = [{ name: insideItem.name, local: insideItem.local }];
    console.log(insideArray);
  });
});

document.querySelectorAll(".plusIc4").forEach((img, idx) => {
  img.addEventListener("click", () => {
    const sportsItem = sportsArr[idx];
    const sportsArray = [{ name: sportsItem.name, local: sportsItem.local }];
    console.log(sportsArray);
  });
});

document.querySelectorAll(".plusIc5").forEach((img, idx) => {
  img.addEventListener("click", () => {
    const festivalItem = festivalArr[idx];
    const festivalArray = [
      { name: festivalItem.name, local: festivalItem.local },
    ];
    console.log(festivalArray);
  });
});

// 맨 위로 이동
const Top = document.querySelector(".topBtn");
Top.addEventListener("click", function () {
  location.href = "#toploop";
});
const reviewBtn = document.querySelector(".sideBtn");
reviewBtn.addEventListener("click", function () {
  location.href = "../reviewPage/review.html";
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

// 로고 누르면 (홈)으로 이동
const mainBtn = document.querySelector(".title-btn");
mainBtn.addEventListener("click", function () {
  location.href = "/DateTeam/박근모 - 메인/HTML/mainPage.html";
});

// 핫플레이스 누르면 핫플메인으로 이동
const hotPlace = document.querySelector(".hotPlace");
hotPlace.addEventListener("click", function () {
  location.href = "../hotPlace.html";
});

// 검색
const datas = await getDatas("hotPlace");
let infolist;
datas.forEach((doc, idx) => {
  const info = doc.data();
  infolist = info.list;
});
console.log(infolist);

const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");
const searchBox = document.querySelector("#searchBox");
function placeArr(e) {
  console.log(this);
  searchBox.innerHTML = "";
  let inputValue = searchInput.value;
  inputValue = inputValue.replaceAll(" ", "&nbsp;");
  // let changeMessage = inputValue.replaceAll(' ',"&nbsp;")
  if (inputValue === "") return;
  infolist.forEach(function (el, idx) {
    if (
      el.img.includes(inputValue) ||
      el.title.includes(inputValue) ||
      el.text.includes(inputValue) ||
      el.text2.includes(inputValue) ||
      // el.event.includes(inputValue) ||
      // el.point.includes(inputValue) ||
      (el.event.includes(inputValue) && e.code == "Enter")
    ) {
      searchBox.insertAdjacentHTML(
        "beforeend",

        ` <div class="content" data-idx="${idx}">
        <img src=..${el.img} />
        <div title="planner에 추가하기" class="plusIc"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${el.title}
          <a id="aIcon" target="_blank">
          <i class='bx bx-right-arrow-circle' ></i>
          </a></p>
          <p class="hpTime">
            ${el.text}<br>${el.text2} 
          </p>
          <p class="hpInfo">${el.event}</p>
          
        </div> `
      );
    }
  });
  searchInput.value = "";
}
searchBox.addEventListener("click", (e) => {
  const box = e.target.closest(".content");
  if (box) {
    const idx = box.getAttribute("data-idx");
    const selectedItem = infolist[idx];
    console.log(box);
    // 필요한 다른 작업 수행 가능
  }
});
searchBtn.addEventListener("click", placeArr);
searchInput.addEventListener("keypress", placeArr);

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
