const picnic = document.getElementById("picnic");
const picnicArr = [
  {
    a: "",
    img: "../img/상소동.jpg",
    name: "상소동 산림욕장",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "#드라이브 #산림욕 #산책",
    local: "동구",
  },
  {
    a: "",
    img: "../img/만인산.jpg",
    name: "만인산",
    time: "월-토: 09:00",
    time2: "",
    event: "#드라이브 #봉이호떡 #산책",
    local: "동구",
  },
  {
    a: "",
    img: "../img/식장산.jpg",
    name: "식장산",
    time: "월-토: 09:00",
    time2: "",
    event: "#드라이브 #야경",
    local: "동구",
  },
  {
    a: "",
    img: "../img/옛터.jfif",
    name: "옛터민속박물관",
    time: "월-토: 09:00",
    time2: "",
    event: "#드라이브 #한옥 #카페",
    local: "동구",
  },
  {
    a: "",
    img: "../img/대동벽화마을.jpg",
    name: "대동하늘공원",
    time: "월-토: 09:00",
    time2: "",
    event: "#산책 #벽화마을 #야경",
    local: "동구",
  },
  {
    a: "",
    img: "../img/소제동.jpeg",
    name: "소제동",
    time: "월-토: 09:00",
    time2: "",
    event: "#카페거리 #감성",
    local: "동구",
  },
  {
    a: "",
    img: "../img/문글램핑.jfif",
    name: "문 글램핑",
    time: "월-토: 09:00",
    time2: "",
    event: "#힐링 #글램핑",
    local: "동구",
  },
];
picnicArr.forEach((info, idx) => {
  picnic.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div class="plusIc1"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.name}</p>
          <p class="hpTime">
            ${info.time}${info.time2}
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
    name: "중앙시장",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "#전통시장 #먹거리",
    local: "동구",
  },
  {
    a: "",
    img: "../img/다이소.jpg",
    name: "다이소 본점",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "#6층 #초대형",
    local: "동구",
  },
  {
    a: "",
    img: "../img/머물다가게.jpg",
    name: "머물다가게",
    time: "월-토: 09:00",
    time2: "",
    event: "#독립서점",
    local: "동구",
  },
  {
    a: "",
    img: "../img/트래블라운지.jpg",
    name: "트래블라운지",
    time: "월-토: 09:00",
    time2: "",
    event: "#팝업스토어",
    local: "동구",
  },
];
shoppingArr.forEach((info, idx) => {
  shopping.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div class="plusIc2"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.name}</p>
          <p class="hpTime">
            ${info.time}${info.time2}
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
    name: "복합터미널",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "#복합센터",
    local: "동구",
  },
  {
    a: "",
    img: "../img/빛나는순간.jpg",
    name: "빛나는 순간",
    time: "월-토: 09:00",
    time2: "",
    event: "#반지 #공방",
    local: "동구",
  },
  {
    a: "",
    img: "../img/헤레디움.jpg",
    name: "헤레디움",
    time: "월-토: 09:00",
    time2: "",
    event: "#전시관",
    local: "동구",
  },
];
insideArr.forEach((info, idx) => {
  inside.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div class="plusIc3"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.name}</p>
          <p class="hpTime">
            ${info.time}${info.time2}
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
    img: "../img/동구체육관.jpg",
    name: "동구국민체육센터",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "#수영 #배드민턴 #탁구",
    local: "동구",
  },
  {
    img: "../img/킹스타.jfif",
    name: "킹스타볼링센터",
    time: "월-토: 09:00",
    time2: "<br>일: 09:00",
    event: "#볼링",
    local: "동구",
  },
];

sportsArr.forEach((info, idx) => {
  sports.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} class="sports-img" />
        <div class="plusIc4"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.name}</p>
          <p class="hpTime">
            ${info.time}${info.time2}
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
    name: "대청호 벚꽃축제",
    time: "2024.03.29 ~ 2024.03.31",
    time2: "<br>10:00 ~ 21:00",
    event: "#벚꽃 #세상에서가장긴벚꽃길",
    local: "동구",
  },
  {
    a: "",
    img: "../img/야시장.png",
    name: "중앙시장 야시장",
    time: "24.05.03 ~ 24.10.26 매주 금,토",
    time2: "<br>18:00 ~ 22:00",
    event: "#동구야놀자 #먹거리",
    local: "동구",
  },
  {
    a: "",
    img: "../img/0시축제.jfif",
    name: "대전 0시 축제",
    time: "2024.08.09 ~ 2024.08.17",
    time2: "<br>14:00 ~ 00:00",
    event: "#대전부르스 #심야",
    local: "동구",
  },
  {
    a: "",
    img: "../img/동구동락.jfif",
    name: "동구동락 축제",
    time: "2024.10.04 ~ 2024.10.06",
    time2: "<br>11:00 ~ 22:00",
    event: "#동광장 #대동천",
    local: "동구",
  },
];
festivalArr.forEach((info, idx) => {
  festival.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div class="plusIc5"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.name}</p>
          <p class="hpTime">
            ${info.time}${info.time2}
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

// 검색
const search = document.querySelector(".search");
const searchInput = document.querySelector(".serachInput");
const andiv = document.querySelector(".searchAn");
const searchArr = [
  { category: "picnic", data: picnicArr },
  { category: "shopping", data: shoppingArr },
  { category: "inside", data: insideArr },
  { category: "sports", data: sportsArr },
  { category: "festival", data: festivalArr },
];
