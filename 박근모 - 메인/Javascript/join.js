import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../Javascript/DLU_firebase.js";

const logoBtn = document.querySelector(".logo");
logoBtn.addEventListener(
  "click",
  () => (window.location.href = "../HTML/mainPage.html")
);
const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const birthDateInput = document.getElementById("bd");
const phoneInput = document.getElementById("phone");
const nicknameInput = document.getElementById("nickName");
const genderInput = document.getElementById("gender");

const idInputVal = idInput.value;
const passwordInputVal = passwordInput.value;
const confirmPasswordInputVal = confirmPasswordInput.value;
const emailInputVal = emailInput.value;
const nameInputVal = nameInput.value;
const birthDateInputVal = birthDateInput.value;
const phoneInputVal = phoneInput.value;
const nicknameInputVal = nicknameInput.value;
const genderInputVal = genderInput.value;
console.log(
  idInputVal,
  nameInputVal,
  birthDateInputVal,
  phoneInputVal,
  nicknameInput,
  genderInput
);
console.log(genderInput.);

const joinBtn = document.querySelector(".joinBtn");
joinBtn.addEventListener("click", () => {
  if (
    idInputVal === "" ||
    passwordInputVal === "" ||
    confirmPasswordInputVal === "" ||
    emailInputVal === "" ||
    nameInputVal === "" ||
    birthDateInputVal === "" ||
    phoneInputVal === "" ||
    nicknameInputVal === "" ||
    genderInputVal === ""
  ) {
    return false;
  }
  if (passwordInputVal !== confirmPasswordInputVal) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }
  if (passwordInputVal.length < 8) {
    alert("비밀번호는 8자 이상이어야 합니다.");
    return false;
  }
  if (passwordInputVal.length > 6) {
    alert("생년월일을 잘못 입력하셨습니다.");
    return false;
  }
  if (nicknameInputVal.length < 2) {
    alert("닉네임은 2자 이상이어야 합니다.");
    return false;
  }

  if (genderInputVal === "") {
    alert("성별을 선택해주세요.");
    return false;
  }
  const data = {
    id: `${idInputVal}`,
    pass: `${passwordInputVal}`,
    emailInputVal: `${emailInputVal}`,
    name: `${nameInputVal}`,
    birthDate: `${birthDateInputVal}`,
    phone: `${phoneInputVal}`,
    nickName: `${nicknameInputVal}`,
    gender: `${genderInputVal}`,
  };
  console.log(data);
});
