// import {
//   db,
//   getDatas,
//   addDatas,
//   deleteDatas,
//   updateDatas,
// } from "../Javascript/DLU_firebase.js";
// const loginBox = document.querySelector(".login-box");
// const loginBtn = document.querySelector(".login-btn");

// const aloginBox = document.querySelector(".alogin-box");
// const bloginBox = document.querySelector(".blogin-box");
// const returnBtn = document.getElementById("returnButton");

// const plannerTitle = document.getElementById("planner-title");
// // const titleSemiId = localStorage.getItem("semiID");
// // console.log(localStorage.getItem("semiID"));
// if (
//   localStorage.getItem("semiID") === null &&
//   localStorage.getItem("ID") === null
// ) {
//   //
//   // 비회원로그인
//   document
//     .querySelector(".addPlanner")
//     .addEventListener("click", async function () {
//       const nickname = document.getElementById("nicknameInfo").value;
//       const userage = document.getElementById("ageInfo").value;
//       const genderElements = document.getElementsByName("gender");
//       let genderValue;

//       for (const genderElement of genderElements) {
//         if (genderElement.checked) {
//           genderValue = genderElement.value;
//           console.log(genderValue);
//           break;
//         }
//       }
//       const loginBox2 = document.getElementById("bloginBox2");
//       const welcomeMessage = document.getElementById("welcomeMessage");
//       const customerInfo = {
//         userId: nickname,
//         age: userage,
//         gender: genderValue,
//       };
//       localStorage.setItem("semiID", nickname);
//       const titleSemiId = localStorage.getItem("semiID");

//       if (nickname) {
//         const datas = await addDatas("semiCustomer", customerInfo, nickname);
//         welcomeMessage.innerText = `${nickname}님 환영합니다.`;
//         loginBox2.classList.remove("hidden");
//         welcomeMessage.classList.remove("hidden");
//         document.querySelector(".blogin-box").classList.add("hidden");
//         document.getElementById("plannerBox").classList.remove("hiddenBox");
//         returnBtn.classList.remove("hidden");
//         loginBox.classList.add("hidden");
//         plannerTitle.innerHTML = `${titleSemiId}'s planner`;
//       } else {
//         alert("닉네임을 입력해주세요.");
//       }
//     });

//   loginBtn.addEventListener("click", (e) => {
//     const ID = document.getElementById("id").value;
//     const PW = document.getElementById("password").value;
//     localStorage.setItem("ID", ID);

//     async function getcutomerInfo() {
//       const loginBox2 = document.getElementById("bloginBox2");
//       const welcomeMessage = document.getElementById("welcomeMessage");
//       const datas = await getDatas("customer");

//       let isAuthenticated = false; // Flag to track authentication status

//       datas.forEach((doc) => {
//         const info = doc.data();
//         const LogInID = info.id;
//         const LogInPW = info.password;
//         const titleId = localStorage.getItem("ID");

//         if (LogInID === ID && LogInPW === PW) {
//           welcomeMessage.innerText = `${info.name}님 환영합니다.`;
//           loginBox2.classList.remove("hidden");
//           welcomeMessage.classList.remove("hidden");
//           document.querySelector(".alogin-box").classList.add("hidden");
//           document.getElementById("plannerBox").classList.remove("hiddenBox");
//           returnBtn.classList.remove("hidden");
//           loginBox.classList.add("hidden");
//           plannerTitle.innerHTML = `${titleId}'s planner`;

//           isAuthenticated = true; // Set flag to true if authentication is successful
//           return;
//         }
//       });

//       // If no matching ID and password are found, show alert
//       if (!isAuthenticated) {
//         alert("아이디 또는 비밀번호가 틀렸습니다.");
//       }
//     }

//     getcutomerInfo();
//     e.preventDefault();
//   });

//   // 로그아웃(회원/ 비회원)
//   document
//     .getElementById("returnButton")
//     .addEventListener("click", async function () {
//       const nickname = document.getElementById("nicknameInfo").value;
//       loginBox.classList.remove("hidden");
//       if (
//         aloginBox.classList.contains("hiddenALogin") == true &&
//         bloginBox.classList.contains("hiddenBLogin") !== true
//       ) {
//         const deleteresult = await deleteDatas("semiCustomer", nickname);
//         localStorage.removeItem("semiID");
//         document.querySelector(".blogin-box").classList.remove("hidden");
//         document.getElementById("bloginBox2").classList.add("hidden");
//         document.getElementById("welcomeMessage").classList.add("hidden");
//         document.getElementById("plannerBox").classList.add("hiddenBox");
//         this.classList.add("hidden");
//       } else if (
//         aloginBox.classList.contains("hiddenALogin") !== true ||
//         bloginBox.classList.contains("hiddenBLogin") == true
//       ) {
//         // const deleteresult = await deleteDatas("customer", nickname);
//         localStorage.removeItem("ID");
//         document.querySelector(".alogin-box").classList.remove("hidden");
//         document.getElementById("bloginBox2").classList.add("hidden");
//         document.getElementById("welcomeMessage").classList.add("hidden");
//         document.getElementById("plannerBox").classList.add("hiddenBox");
//         this.classList.add("hidden");
//       }
//     });
//   //
// } else if (
//   localStorage.getItem("semiID") !== null ||
//   localStorage.getItem("ID") !== null
// ) {
//   if (
//     localStorage.getItem("semiID") === null &&
//     localStorage.getItem("ID") !== null
//   ) {
//     loginBox.classList.add("hidden");
//     const welcomeMessage = document.getElementById("welcomeMessage");
//     document.getElementById("bloginBox2").classList.remove("hidden");
//     welcomeMessage.innerText = `${localStorage.getItem("ID")}님 환영합니다.`;
//   } else if (
//     localStorage.getItem("semiID") !== null &&
//     localStorage.getItem("ID") === null
//   ) {
//     loginBox.classList.add("hidden");
//     const welcomeMessage = document.getElementById("welcomeMessage");
//     document.getElementById("bloginBox2").classList.remove("hidden");
//     welcomeMessage.innerText = `${localStorage.getItem(
//       "semiID"
//     )}님 환영합니다.`;
//   }
// }
import {
  db,
  getDatas,
  addDatas,
  deleteDatas,
  updateDatas,
} from "../Javascript/DLU_firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.querySelector(".login-box");
  const loginBtn = document.querySelector(".login-btn");
  const aloginBox = document.querySelector(".alogin-box");
  const bloginBox = document.querySelector(".blogin-box");
  const returnBtn = document.getElementById("returnButton");
  const plannerTitle = document.getElementById("planner-title");

  function updateUIForLoggedInUser(userType, userName) {
    const loginBox2 = document.getElementById("bloginBox2");
    const welcomeMessage = document.getElementById("welcomeMessage");

    welcomeMessage.innerText = `${userName}님 환영합니다.`;
    loginBox2.classList.remove("hidden");
    welcomeMessage.classList.remove("hidden");
    document.getElementById("plannerBox").classList.remove("hiddenBox");
    returnBtn.classList.remove("hidden");
    loginBox.classList.add("hidden");
    plannerTitle.innerHTML = `${userName}'s planner`;

    if (userType === "semiCustomer") {
      document.querySelector(".blogin-box").classList.add("hidden");
    } else {
      document.querySelector(".alogin-box").classList.add("hidden");
    }
  }

  if (!localStorage.getItem("semiID") && !localStorage.getItem("ID")) {
    // 비회원 로그인
    document
      .querySelector(".addPlanner")
      .addEventListener("click", async () => {
        const nickname = document.getElementById("nicknameInfo").value;
        const userage = document.getElementById("ageInfo").value;
        const genderElements = document.getElementsByName("gender");
        let genderValue;

        for (const genderElement of genderElements) {
          if (genderElement.checked) {
            genderValue = genderElement.value;
            break;
          }
        }

        if (nickname) {
          const customerInfo = {
            userId: nickname,
            age: userage,
            gender: genderValue,
          };
          localStorage.setItem("semiID", nickname);

          try {
            await addDatas("semiCustomer", customerInfo, nickname);
            updateUIForLoggedInUser("semiCustomer", nickname);
          } catch (error) {
            console.error("데이터 추가 중 오류 발생: ", error);
          }
        } else {
          alert("닉네임을 입력해주세요.");
        }
      });

    loginBtn.addEventListener("click", (e) => {
      const ID = document.getElementById("id").value;
      const PW = document.getElementById("password").value;
      localStorage.setItem("ID", ID);

      async function getCustomerInfo() {
        try {
          const datas = await getDatas("customer");

          let isAuthenticated = false;

          datas.forEach((doc) => {
            const info = doc.data();
            if (info.id === ID && info.password === PW) {
              updateUIForLoggedInUser("customer", info.name);
              isAuthenticated = true;
              return;
            }
          });

          if (!isAuthenticated) {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
          }
        } catch (error) {
          console.error("데이터 가져오기 중 오류 발생: ", error);
        }
      }

      getCustomerInfo();
      e.preventDefault();
    });

    returnBtn.addEventListener("click", async function () {
      const semiID = localStorage.getItem("semiID");
      const ID = localStorage.getItem("ID");

      try {
        if (semiID) {
          await deleteDatas("semiCustomer", semiID);
          localStorage.removeItem("semiID");
          document.querySelector(".blogin-box").classList.remove("hidden");
        } else if (ID) {
          // Registered user logout
          localStorage.removeItem("ID");
          document.querySelector(".alogin-box").classList.remove("hidden");
        }

        loginBox.classList.remove("hidden");
        document.getElementById("bloginBox2").classList.add("hidden");
        document.getElementById("welcomeMessage").classList.add("hidden");
        document.getElementById("plannerBox").classList.add("hiddenBox");
        returnBtn.classList.add("hidden");
      } catch (error) {
        console.error("데이터 삭제 중 오류 발생: ", error);
      }
    });
  } else {
    const semiID = localStorage.getItem("semiID");
    const ID = localStorage.getItem("ID");

    if (!semiID && ID) {
      updateUIForLoggedInUser("customer", ID);
    } else if (semiID && !ID) {
      updateUIForLoggedInUser("semiCustomer", semiID);
    }
  }
});
