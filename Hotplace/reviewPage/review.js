const showFormButton = document.getElementById("showFormButton");
const hiddenForm = document.querySelector(".hiddenForm");
const cancelBtn = document.querySelector(".reivew-cancel-btn");
const uploadBtn = document.querySelector(".upload");
const reivewLogo = document.querySelector(".review-logo");
const userId = localStorage.getItem("semiID");
showFormButton.addEventListener("click", function () {
  hiddenForm.classList.remove("hiddenForm");
});
cancelBtn.addEventListener("click", function () {
  hiddenForm.classList.add("hiddenForm");
});
reivewLogo.addEventListener("click", function () {
  console.log("a");
  location.href = "../../Main/HTML/mainPage.html";
});

function submitReview() {
  // 페이지에 추가
  const tastyBox = document.getElementById("tasty-content-box");
  //   const tastyBox = document.querySelector(".tasty-content-box");
  const cafeBox = document.getElementById("cafe-content-box");
  const hotplaceBox = document.getElementById("hp-content-box");

  // 해당 value에 맞는 div에 추가하기

  uploadBtn.addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const photo = document.getElementById("photo").files[0];
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;
    function submitReview(place) {
      if (photo) {
        //   const storageRef = storage.ref();
        //   const photoRef = storageRef.child(`photos/${photo.name}`);
        //   photoRef.put(photo);
        //   const photoURL = photoRef.getDownloadURL();

        const reader = new FileReader();
        reader.onload = function (event) {
          const photoURL = event.target.result;
          const reviewHTML = `
                                   <div class="tasty-content" id="tasty-box">
                                       <div class="review-user">
                                           <i class="bx bxs-user-circle"></i>
                                           <p class="username">${userId}님의 후기</p>
                                       </div>
                                       <div class="review-visited">
                                           <h2>방문한 곳: ${location}</h2>
                                           <p>방문일: ${date}</p>
                                       </div>
                                       <div class="review-text">
                                       //   <img src="${photoURL}" alt="Photo" />
                                       <p>${review}</p>
                                       </div>
                                       <div class="review-point">
                                           <p>평점: ${rating}</p>
                                           <div class="keyword">
                                           </div>
                                           </div>
                                           </div>`;

          place.insertAdjacentHTML("beforeend", reviewHTML);
          hiddenForm.classList.add("hiddenForm");
        };
      } else {
        const reviewHTML = `
                             <div class="tasty-content" id="tasty-box">
                                 <div class="review-user">
                                     <i class="bx bxs-user-circle"></i>
                                     <p class="username">${userId}님의 후기</p>
                                 </div>
                                 <div class="review-visited">
                                     <h2>방문한 곳: ${location}</h2>
                                     <p>방문일: ${date}</p>
                                 </div>
                                 <div class="review-text">
                                     <p>${review}</p>
                                 </div>
                                 <div class="review-point">
                                     <p>평점: ${rating}</p>
                                     <div class="keyword">
                                     </div>
                                 </div>
                             </div>`;

        place.insertAdjacentHTML("beforeend", reviewHTML);
        hiddenForm.classList.add("hiddenForm");
      }
    }
    if (category == "tasty") {
      submitReview(tastyBox);
    } else if (category == "cafe") {
      submitReview(cafeBox);
    } else if (category == "hotPlace") {
      submitReview(hotplaceBox);
    } else {
    }
  });
}
submitReview();
//   cafeBox.innerHTML = cafeReviewHtml;

//   event.preventDefault();

// const cafeBox = document.getElementById("cafe-box");

// 페이지 이동

const Tastytag = document.querySelector("#Tastytag");
const Cafetag = document.querySelector("#Cafetag");
const Placetag = document.querySelector("#Placetag");

Tastytag.addEventListener("click", () => {
  location.href = "/DateTeam/Resturant, Cafe/JMT/JMT.html";
});
Cafetag.addEventListener("click", () => {
  location.href = "/DateTeam/Resturant, Cafe/Cafe/Cafe.html";
});
Placetag.addEventListener("click", () => {
  location.href = "../hotPlace.html";
});

const mainLoop = document.getElementById("topI");
const tastyLoop = document.getElementById("jmtI");
const cafeLoop = document.getElementById("cafeI");
const placeLoop = document.getElementById("placeI");
const bottomLoop = document.getElementById("infoI");

mainLoop.addEventListener("click", () => {
  // location.href = "#hTag-JMT";
  location.href = "/DateTeam/Main/HTML/mainPage.html";
});
tastyLoop.addEventListener("click", (e) => {
  // location.href = "#hTag-JMT";
  window.scrollTo(0, 300);
});
cafeLoop.addEventListener("click", (e) => {
  // location.href = "#hTag-cafe";
  window.scrollTo(0, 800);
});
placeLoop.addEventListener("click", (e) => {
  window.scrollTo(0, 1300);
});
bottomLoop.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

const service = document.getElementById("service");

service.addEventListener("click", () => {
  location.href = "/DateTeam/Main/HTML/subPage.html";
});
