import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../Javascript/DLU_firebase.js";

const logoBtn = document.querySelector(".loginPageLogo");
logoBtn.addEventListener(
  "click",
  () => (window.location.href = "../HTML/mainPage.html")
);

const loginPageBtn = document.querySelector(".login-page-btn");
loginPageBtn.addEventListener("click", (e) => {
  const LID = document.getElementById("loginPage-ID").value;
  const LPW = document.getElementById("loginPage-password").value;

  async function LoginPageNet() {
    const datas = await getDatas("customer");
    let isAuthenticated = false;
    datas.forEach((doc) => {
      const info = doc.data();
      const LogInID = info.id;
      const LogInPW = info.password;

      if (LogInID == LID && LogInPW == LPW) {
        localStorage.setItem("ID", LID);
        window.history.back();
        isAuthenticated = true;
        return;
      }
    });

    if (!isAuthenticated) {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  }

  LoginPageNet();
  e.preventDefault();
});
