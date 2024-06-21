const picnic = document.getElementById("picnic");
const picnicArr = [
  {
    a: "",
    img: "../img/오월드.jpg",
    title: "대전 오월드",
    text: "월-토: 09:00",
    text2: "<br>일: 09:00",
    event: "#동물원 #놀이공원 #산책",
    local: "중구",
  },
  {
    a: "",
    img: "../img/뿌리공원2.JPG",
    title: "뿌리공원",
    text: "월-토: 09:00",
    text2: "",
    event: "#드라이브 #산책 #야경",
    local: "중구",
  },
  {
    a: "",
    img: "../img/사정공원.jpg",
    title: "사정공원",
    text: "월-토: 09:00",
    text2: "",
    event: "#드라이브 #산책",
    local: "중구",
  },
  {
    a: "",
    img: "../img/테미공원.jpg",
    title: "테미공원",
    text: "월-토: 09:00",
    text2: "",
    event: "#산책 #벚꽃",
    local: "중구",
  },
  {
    a: "",
    img: "../img/서대전공원.jpg",
    title: "서대전공원",
    text: "월-토: 09:00",
    text2: "",
    event: "#산책 #피크닉",
    local: "중구",
  },
  {
    a: "",
    img: "../img/보문산.jpg",
    title: "보문산",
    text: "월-토: 09:00",
    text2: "",
    event: "#등산 #산책",
    local: "중구",
  },
];
picnicArr.forEach((info, idx) => {
  picnic.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc1"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}</p>
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
    img: "../img/지하상가.jpg",
    title: "은행동 지하상가",
    text: "월-토: 09:00",
    text2: "<br>일: 09:00",
    event: "#옷 #악세사리 #상가",
    local: "중구",
  },
  {
    a: "",
    img: "../img/다구로잉.jfif",
    title: "다구로잉",
    text: "월-토: 09:00",
    text2: "<br>일: 09:00",
    event: "#소품샵 #아기자기",
    local: "중구",
  },
  {
    a: "",
    img: "../img/프렐류드.jfif",
    title: "프렐류드",
    text: "월-토: 09:00",
    text2: "",
    event: "#소품샵 #인기",
    local: "중구",
  },
  {
    a: "",
    img: "../img/다다르다.jfif",
    title: "다다르다",
    text: "월-토: 09:00",
    text2: "",
    event: "#독립서점",
    local: "중구",
  },
];
shoppingArr.forEach((info, idx) => {
  shopping.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc2"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}</p>
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
    img: "../img/아이존팝.jfif",
    title: "아이존팝",
    text: "월-토: 09:00",
    text2: "<br>일: 09:00",
    event: "#오락실 #시간제",
    local: "중구",
  },
  {
    a: "",
    img: "../img/냄시.jfif",
    title: "냄시",
    text: "월-토: 09:00",
    text2: "",
    event: "#향수 #캔들 #공방",
    local: "중구",
  },
  {
    a: "",
    img: "../img/아신극장.jfif",
    title: "아신극장",
    time: "월-토: 09:00",
    time2: "",
    event: "#연극 #극장",
    local: "중구",
  },
];
insideArr.forEach((info, idx) => {
  inside.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc3"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}</p>
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
    img: "../img/이글스파크.jpg",
    title: "한화이글스파크",
    text: "월-토: 09:00",
    text2: "<br>일: 09:00",
    event: "#야구 #배구 #경기장",
    local: "중구",
  },
  {
    img: "../img/중구국민체육센터.jpg",
    title: "중구국민체육센터",
    text: "월-토: 09:00",
    text2: "<br>일: 09:00",
    event: "#수영 #배드민턴 #체육관",
    local: "중구",
  },
];

sportsArr.forEach((info, idx) => {
  sports.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx="${idx}">
        <img src=${info.img} class="sports-img" />
        <div title="planner에 추가하기" class="plusIc4"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}</p>
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
    img: "../img/테미봄축제.jfif",
    title: "테미 봄 축제",
    text: "2024.03.29 ~ 2024.03.31",
    text2: "<br>10:00 ~ 21:00",
    event: "#벚꽃 #세상에서가장긴벚꽃길",
    local: "중구",
  },
  {
    a: "",
    img: "../img/세계인어울림축제.jfif",
    title: "세계인 어울림 축제",
    text: "24.05.03 ~ 24.10.26 매주 금,토",
    text2: "<br>18:00 ~ 22:00",
    event: "#동구야놀자 #먹거리",
    local: "중구",
  },
  {
    a: "",
    img: "../img/대전효문화뿌리축제.jfif",
    title: "효문화 뿌리축제",
    text: "2024.08.09 ~ 2024.08.17",
    text2: "<br>14:00 ~ 00:00",
    event: "#대전부르스 #심야",
    local: "중구",
  },
];
festivalArr.forEach((info, idx) => {
  festival.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx=${idx}>
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc5"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}</p>
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
// const search = document.querySelector(".search");
// const searchInput = document.querySelector(".serachInput");
// const andiv = document.querySelector(".searchAn");
// const searchArr = [
//   { category: "picnic", data: picnicArr },
//   { category: "shopping", data: shoppingArr },
//   { category: "inside", data: insideArr },
//   { category: "sports", data: sportsArr },
//   { category: "festival", data: festivalArr },
// ];
