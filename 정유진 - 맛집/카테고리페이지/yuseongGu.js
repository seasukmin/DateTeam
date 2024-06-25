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
    a: "",
    img: "../img/한빛탑.jpg",
    title: "엑스포 과학공원",
    text: "대전 동구 산내로 714",
    text2: "<br>일: 09:00",
    event: "#꿈돌이 #음악분수 #한빛탑",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/유성온천.jpg",
    title: "유성온천",
    text: "대전 동구 산내로 106",
    text2: "",
    event: "#족욕 #온천 #산책",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/유림공원.jpg",
    title: "유림공원",
    text: "	대전 동구 세천동 산 43-5",
    text2: "",
    event: "#산책 #꽃구경",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/궁동로데오.jpg",
    title: "궁동로데오거리",
    text: "대전 동구 산내로 321-35",
    text2: "<br>매일 10:00 ~ 00:30",
    event: "#대학로 #술집",
    local: "유성구",
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
    img: "../img/t신세계.jpg",
    title: "신세계백화점",
    text: "대전 동구 중앙로 200-1",
    text2: "<br>매일 07:00 ~ 17:00 변동사항 있음",
    event: "#백화점 #복합",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/현대아울렛.png",
    title: "현대아울렛",
    text: "대전 동구 동서대로1695번길 8",
    text2: "<br>매일 10:00 ~ 22:00",
    event: "#아울렛 #복합",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/디즈니스토어.png",
    title: "디즈니스토어",
    text: "대전 동구 중앙로 187-1",
    text2: "<br>매일 09:00 ~ 21:00",
    event: "#팝업스토어 #현대아울렛",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/꿈돌이팝업.jpg",
    title: "꿈돌이스토어",
    text: "대전 동구 중앙로 187-1",
    text2: "<br>매일 09:00 ~ 21:00",
    event: "#팝업스토어 #전시관 #신세계백화점",
    local: "유성구",
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
    img: "../img/엑스포아쿠아리움.jpg",
    title: "엑스포 아쿠아리움",
    text: "대전 동구 동서대로 1689",
    text2: "<br>연중무휴",
    event: "#물고기 #디지털",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/세요도자기공방.jfif",
    title: "세요 도자기공방",
    text: "대전 동구 새울로 98-20 201호",
    text2: "<br>수: 15:00 ~ 19:00, 목-일: 11:00 ~ 19:00",
    event: "#도자기 #공방 #예약제",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/신세계메가박스.jpg",
    title: "메가박스 신세계점",
    text: "대전 동구 대전로 735",
    text2: "<br>수-일: 11:00 ~ 19:00",
    event: "#영화관 # #",
    local: "유성구",
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

const sports = document.getElementById("sports");
const sportsArr = [
  {
    a: "",
    img: "../img/스포츠몬스터.jfif",
    title: "스포츠몬스터",
    text: "대전 동구 가양로 9",
    text2: "<br>일 휴무, 종목별 운영시간 상이",
    event: "#신세계 #액티비티",
    local: "유성구",
  },
  {
    a: "",
    img: "../img/월드컵경기장.jpg",
    title: "대전 월드컵경기장",
    text: "대전 동구 대전로 647 지하1층",
    text2: "<br>월-금: 13:00 ~ 02:00, 토-일: 10:00 ~ 02:00",
    event: "#축구",
    local: "유성구",
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
    img: "../img/컨벤션센터.jpg",
    title: "컨벤션센터",
    text: "2024.03.29 ~ 2024.03.31 3일간",
    text2: "<br>10:00 ~ 21:00",
    event: "#팝업 #행사 #축제",
    local: "동구",
  },
  {
    a: "",
    img: "../img/야시장.png",
    title: "중앙시장 야시장",
    text: "2024.05.03 ~ 2024.10.26 매주 금,토",
    text2: "<br>18:00 ~ 22:00",
    event: "#동구야놀자 #먹거리",
    local: "동구",
  },
  {
    a: "",
    img: "../img/0시축제.jfif",
    title: "대전 0시 축제",
    text: "2024.08.09 ~ 2024.08.17 9일간",
    text2: "<br>14:00 ~ 00:00",
    event: "#대전부르스 #심야",
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
const Top2 = document.querySelector(".sideBtn");
Top2.addEventListener("click", function () {
  location.href = "#toploop";
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
