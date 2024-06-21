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
// const idInput = document.getElementById("id");
// const passwordInput = document.getElementById("password");
// const confirmPasswordInput = document.getElementById("confirm-password");
// const emailInput = document.getElementById("email");
// const nameInput = document.getElementById("name");
// const birthDateInput = document.getElementById("bd");
// const phoneInput = document.getElementById("phone");
// const nicknameInput = document.getElementById("nickName");
// const genderElements = document.getElementsByName("gender");
// let genderValue;

// for (const genderElement of genderElements) {
//   if (genderElement.checked) {
//     genderValue = genderElement.value;
//     break;
//   }
// }

// const idInputVal = idInput.value;
// const passwordInputVal = passwordInput.value;
// const confirmPasswordInputVal = confirmPasswordInput.value;
// const emailInputVal = emailInput.value;
// const nameInputVal = nameInput.value;
// const birthDateInputVal = birthDateInput.value;
// const phoneInputVal = phoneInput.value;
// const nicknameInputVal = nicknameInput.value;
// console.log(
//   idInputVal,
//   nameInputVal,
//   birthDateInputVal,
//   phoneInputVal,
//   nicknameInputVal,
//   genderValue
// );

// const joinBtn = document.querySelector(".joinBtn");
// joinBtn.addEventListener("click", async () => {
//   if (
//     idInputVal === "" ||
//     passwordInputVal === "" ||
//     confirmPasswordInputVal === "" ||
//     emailInputVal === "" ||
//     nameInputVal === "" ||
//     birthDateInputVal === "" ||
//     phoneInputVal === "" ||
//     nicknameInputVal === ""
//   ) {
//     return false;
//   }
//   if (passwordInputVal !== confirmPasswordInputVal) {
//     alert("비밀번호가 일치하지 않습니다.");
//     return false;
//   }
//   if (passwordInputVal.length < 8) {
//     alert("비밀번호는 8자 이상이어야 합니다.");
//     return false;
//   }
//   if (passwordInputVal.length > 6) {
//     alert("생년월일을 잘못 입력하셨습니다.");
//     return false;
//   }
//   if (nicknameInputVal.length < 2) {
//     alert("닉네임은 2자 이상이어야 합니다.");
//     return false;
//   }

//   if (genderInputVal === "") {
//     alert("성별을 선택해주세요.");
//     return false;
//   }
//   // const data = {
//   //   id: `${idInputVal}`,
//   //   pass: `${passwordInputVal}`,
//   //   emailInputVal: `${emailInputVal}`,
//   //   name: `${nameInputVal}`,
//   //   birthDate: `${birthDateInputVal}`,
//   //   phone: `${phoneInputVal}`,
//   //   userId: `${nicknameInputVal}`,
//   //   gender: `${genderInputVal}`,
//   // };
//   const data = {
//     id: idInputVal,
//     pass: passwordInputVal,
//     emailInputVal: emailInputVal,
//     name: nameInputVal,
//     birthDate: birthDateInputVal,
//     phone: phoneInputVal,
//     userId: nicknameInputVal,
//     gender: genderInputVal,
//   };
//   const testDiv = document.querySelector(".testDiv");
//   const h3Tag = document.createElement("h3");
//   h3Tag.innerHTML = `id : ${idInputVal}, password : ${passwordInputVal}, name : ${nameInputVal}, birthDate : ${birthDateInputVal}, phone : ${phoneInputVal}, userId :${nicknameInputVal}, gender : ${genderValue}`;
//   // const datas = await addDatas("customer", data, nicknameInputVal);
//   alert(`${nicknameInputVal}님 환영합니다.`);
// });

document
  .getElementById("joinForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const bd = document.getElementById("bd").value;
    const phone = document.getElementById("phone").value;
    const nickName = document.getElementById("nickName").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    console.log(`아이디: ${id}`);
    console.log(`비밀번호: ${password}`);
    console.log(`비밀번호 확인: ${confirmPassword}`);
    console.log(`이메일: ${email}`);
    console.log(`이름: ${name}`);
    console.log(`생년월일: ${bd}`);
    console.log(`전화번호: ${phone}`);
    console.log(`닉네임: ${nickName}`);
    console.log(`성별: ${gender}`);
    const data = {
      id: id,
      password: password,
      confirmPassword: confirmPassword,
      emailInputVal: email,
      name: name,
      birthDate: bd,
      phone: phone,
      userId: nickName,
      gender: gender,
    };
    // 여기에 추가 작업을 수행할 수 있습니다. 예: 서버로 데이터 전송
    const datas = await addDatas("customer", data, nickName);

    alert(`${name}님, 회원가입이 완료되었습니다!`);
    // 예시: 성공 메시지를 표시하고 폼 초기화
    document.getElementById("joinForm").reset();
  });
