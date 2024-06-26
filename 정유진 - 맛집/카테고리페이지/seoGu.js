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
    img: "../img/한밭수목원.jpg",
    title: "한밭수목원",
    text: "대전 서구 둔산대로 169",
    text2: "<br>구역에 따라 운영시간 상이",
    event: "#피크닉 #산책 #식물",
    local: "서구",
  },
  {
    a: "",
    img: "../img/장태산2.jpg",
    title: "장태산 자연휴양림",
    text: "대전 서구 장안로 461",
    text2: "",
    event: "#드라이브 #산림욕 #산책",
    local: "서구",
  },
  {
    a: "",
    img: "../img/마치광장.jpg",
    title: "마치광장",
    text: "	대전 서구 구봉로131번길",
    text2: "",
    event: "#공원 #산책 #맛집",
    local: "서구",
  },
  {
    a: "",
    img: "../img/보라매공원.jpg",
    title: "보라매공원",
    text: "대전광역시 서구 둔산동 1544",
    text2: "",
    event: "#산책 #꽃구경",
    local: "서구",
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
    img: "../img/교보문고.jpg",
    title: "교보문고",
    text: "대전 서구 대덕대로 226 3층",
    text2: "<br>매일 10:30 ~ 22:00",
    event: "#대형서점 #소품 #문구",
    local: "서구",
  },
  {
    a: "",
    img: "../img/트레이더스.jpg",
    title: "이마트 트레이더스",
    text: "대전 서구 한밭대로 580 월평점",
    text2: "<br>매일 10:00 ~ 23:00",
    event: "#마트 #대용량 #먹거리",
    local: "서구",
  },
  {
    a: "",
    img: "../img/프레시하츠클럽.jfif",
    title: "프레시하츠클럽",
    text: "대전 서구 갈마역로 25 2층",
    text2: "<br>화-일: 12:00 ~ 21:00",
    event: "#소품샵 #키치",
    local: "서구",
  },
  {
    a: "",
    img: "../img/잠시다락.jfif",
    title: "잠시다락",
    text: "대전 서구 둔산로 32-11 2층",
    text2: "<br>매일 12:00 ~ 20:00",
    event: "#소품샵",
    local: "서구",
  },
  {
    a: "",
    img: "../img/이글스스토어.jpg",
    title: "한화 이글스스토어",
    text: "대전 서구 둔산로 32-17",
    text2: "<br>매일 24시간",
    event: "#한화 #야구 #굿즈 #편의점",
    local: "서구",
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
    img: "../img/시립미술관.jpg",
    title: "대전시립미술관",
    text: "대전 서구 둔산대로 155 둔산대공원",
    text2: "<br>화-일: 10:00 ~ 18:00",
    event: "#미술관 #전시관",
    local: "서구",
  },
  {
    a: "",
    img: "../img/이응노.jpg",
    title: "이응노미술관",
    text: "대전 서구 둔산대로 157 이응노미술관",
    text2: "<br>화-일: 10:00 ~ 19:00",
    event: "#미술관 #이응노",
    local: "서구",
  },
  {
    a: "",
    img: "../img/셀프사진관.jfif",
    title: "셀프사진관 오디티모드",
    text: "대전 서구 둔산로 32-22 3층",
    text2: "<br>월-금: 13:00 ~ 21:00, 토-일: 11:00 ~ 21:00",
    event: "#셀프사진관 #감성",
    local: "서구",
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
    img: "../img/남선공원.jpg",
    title: "남선공원 종합체육관",
    text: "대전 서구 탄방동",
    text2: "<br>월-금: 06:00 ~ 21:30, 토-일: 10:00 ~ 18:30",
    event: "#수영 #스케이트 #테니스",
    local: "서구",
  },
  {
    a: "",
    img: "../img/올림픽체육관.jpg",
    title: "올림픽기념생활체육관",
    text: "대전 서구 신갈마로230번길 77",
    text2: "<br>월-금: 06:00 ~ 21:00, 토-일: 06:00 ~ 18:00",
    event: "#수영 #배드민턴 #탁구 #헬스",
    local: "서구",
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
    img: "../img/서구엑스포축제.jpg",
    title: "대한민국 과학축제",
    text: "엑스포 시민광장",
    text2: "<br>2024.04.25 ~ 2024.04.28, 4일간",
    event: "#과학 #체험",
    local: "서구",
  },
  {
    a: "",
    img: "../img/서구축제.jpg",
    title: "서구힐링아트페스티벌",
    text: "샘머리, 보라매공원",
    text2: "<br>2024.10.11 ~ 2024.10.13, 3일간",
    event: "#공연 #플리마켓",
    local: "서구",
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
