const picnic = document.getElementById("picnic");
const picnicArr = [
  {
    a: "",
    img: "../img/오월드.jpg",
    title: "대전 오월드",
    text: "대전 중구 사정공원로 70",
    text2: "<br>매일 09:30 ~ 22:00 (월요일 18시 마감)",
    event: "#동물원 #놀이공원 #산책",
    local: "중구",
  },
  {
    a: "",
    img: "../img/뿌리공원2.JPG",
    title: "뿌리공원",
    text: "대전 중구 뿌리공원로 79",
    text2: "<br>05:00 ~ 23:00",
    event: "#드라이브 #산책 #야경",
    local: "중구",
  },
  {
    a: "",
    img: "../img/사정공원.jpg",
    title: "사정공원",
    text: "대전 중구 사정동 산1-4",
    text2: "",
    event: "#드라이브 #산책",
    local: "중구",
  },
  {
    a: "",
    img: "../img/테미공원.jpg",
    title: "테미공원",
    text: "대전 중구 보문로199번길 37-36",
    text2: "",
    event: "#산책 #벚꽃",
    local: "중구",
  },
  {
    a: "",
    img: "../img/서대전공원.jpg",
    title: "서대전공원",
    text: "대전 중구 문화동 1-40",
    text2: "",
    event: "#산책 #피크닉",
    local: "중구",
  },
  {
    a: "",
    img: "../img/보문산.jpg",
    title: "보문산",
    text: "대전 중구",
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
          <p class="hpName">${info.title}
           <a id="aIcon" href=${info.a}>
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
    text: "대전 중구 대종로517번길 14 2층",
    text2: "<br>화: 12:30 - 19:00, 수-일: 12:00 ~ 19:00",
    event: "#소품샵 #아기자기",
    local: "중구",
  },
  {
    a: "",
    img: "../img/프렐류드.jfif",
    title: "The Prelude Shop",
    text: "대전 중구 중앙로129번길 30",
    text2: "<br>월-금: 12:00 ~ 19:00, 토-일: 11:00 ~ 20:00",
    event: "#소품샵 #인기",
    local: "중구",
  },
  {
    a: "",
    img: "../img/다다르다.jfif",
    title: "다다르다",
    text: "대전 중구 중교로73번길 6",
    text2: "<br>매일 12:00 ~ 20:00",
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
          <p class="hpName">${info.title}
           <a id="aIcon" href=${info.a}>
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
    img: "../img/아이존팝.jfif",
    title: "아이존팝",
    text: "대전 중구 중앙로164번길 35 2층",
    text2: "<br>월-금: 12:00 ~ 22:00, 토-일: 11:00 ~ 23:00",
    event: "#오락실 #시간제",
    local: "중구",
  },
  {
    a: "",
    img: "../img/냄시.jfif",
    title: "냄시",
    text: "대전 중구 목척9길 30",
    text2: "<br>화-일: 11:00 ~ 20:00, 예약제",
    event: "#향수 #캔들 #공방",
    local: "중구",
  },
  {
    a: "",
    img: "../img/아신극장.jfif",
    title: "아신극장",
    time: "대전 중구 대종로 458 2층, 3층",
    time2: "<br>화-금: 10:00 ~ 20:00, 토-일: 12:00 ~ 20:00, 예약제",
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
          <p class="hpName">${info.title}
           <a id="aIcon" href=${info.a}>
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
    img: "../img/이글스파크.jpg",
    title: "한화이글스파크",
    text: "대전 중구 대종로 373",
    text2: "<br>경기에 따라 변동",
    event: "#야구 #한화 #경기장",
    local: "중구",
  },
  {
    img: "../img/중구국민체육센터.jpg",
    title: "중구국민체육센터",
    text: "대전 중구 선화서로 70",
    text2: "<br>월-금: 06:00 ~ 21:00, 토: 06:00 ~ 18:00",
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
          <p class="hpName">${info.title}
           <a id="aIcon" href=${info.a}>
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
    img: "../img/테미봄축제.jfif",
    title: "테미 봄축제 <테미와 봄>",
    text: "테미오래",
    text2: "<br>2024.03.30 ~ 2024.03.31, 2일간",
    event: "#벚꽃 #푸드트럭",
    local: "중구",
  },
  {
    a: "",
    img: "../img/세계인어울림축제.jfif",
    title: "세계인 어울림 축제",
    text: "서대전 시민공원",
    text2: "<br>2024.05.11, 1일간",
    event: "#세계 #먹거리 #문화",
    local: "중구",
  },
  {
    a: "",
    img: "../img/대전효문화뿌리축제.jfif",
    title: "효문화 뿌리축제",
    text: "뿌리공원 등",
    text2: "<br>2024.10.11 ~ 2024.10.13",
    event: "#뿌리공원 #가을축제",
    local: "중구",
  },
];
festivalArr.forEach((info, idx) => {
  festival.insertAdjacentHTML(
    "beforeend",

    ` <div class="content" data-idx=${idx}>
        <img src=${info.img} />
        <div title="planner에 추가하기" class="plusIc5"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${info.title}
           <a id="aIcon" href=${info.a}>
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
      el.event.includes(inputValue) ||
      el.point.includes(inputValue) ||
      (el.time.includes(inputValue) && e.code == "Enter")
    ) {
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
result.addEventListener("click", (e) => {
  const box = e.target.closest(".box");
  if (box) {
    const idx = box.getAttribute("data-idx");
    const selectedItem = infolist[idx];
    console.log(box);
    // 필요한 다른 작업 수행 가능
  }
});
Searches.addEventListener("click", inputArr);
headerInput.addEventListener("keypress", inputArr);
