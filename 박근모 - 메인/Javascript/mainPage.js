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
console.log(getcutomerInfo());

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

document
  .querySelector(".addPlanner")
  .addEventListener("click", async function () {
    const nickname = document.getElementById("nicknameInfo").value;
    const userage = document.getElementById("ageInfo").value;
    const genderElements = document.getElementsByName("gender");
    let genderValue;

    for (const genderElement of genderElements) {
      if (genderElement.checked) {
        genderValue = genderElement.value;
        console.log(genderValue);
        break;
      }
    }
    const loginBox2 = document.getElementById("loginBox2");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const customerInfo = {
      userId: nickname,
      age: userage,
      gender: genderValue,
    };
    if (nickname) {
      welcomeMessage.innerText = `${nickname}님 환영합니다.`;
      const datas = await addDatas("customer", customerInfo, nickname);
      loginBox2.classList.remove("hidden");
      welcomeMessage.classList.remove("hidden");
      document.querySelector(".login-box").classList.add("hidden");
    } else {
      alert("닉네임을 입력해주세요.");
    }
  });
document
  .getElementById("returnButton")
  .addEventListener("click", async function () {
    const nickname = document.getElementById("nicknameInfo").value;
    const deleteresult = await deleteDatas("customer", nickname);
    document.querySelector(".login-box").classList.remove("hidden");
    document.getElementById("loginBox2").classList.add("hidden");
    document.getElementById("welcomeMessage").classList.add("hidden");
    this.classList.add("hidden");
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
