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
  location.href = "../../박근모 - 메인/HTML/mainPage.html";
});

function submitReview() {
  // 페이지에 추가
  const tastyBox = document.getElementById("tasty-content-box");
  //   const tastyBox = document.querySelector(".tasty-content-box");
  const cafeBox = document.getElementById("cafe-content-box");
  const hotplaceBox = document.getElementById("hp-content-box");

  const category = document.getElementById("category").value;
  // 해당 value에 맞는 div에 추가하기

  uploadBtn.addEventListener("click", () => {
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const photo = document.getElementById("photo").files[0];
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

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
                                  <p>작성일: ${date}</p>
                              </div>
                              <div class="review-text">
                              //   <img src="${photoURL}" alt="Photo" />
                              <p>${review}</p>
                              </div>
                              <div class="review-point">
                                  <p>평점: ${rating}</p>
                                  <div class="keyword">
                                  <p>친절해요</p>
                                  <p>청결해요</p>
                                      <p>또 가고싶어요</p>
                                  </div>
                                  </div>
                                  </div>`;

        tastyBox.insertAdjacentHTML("beforeend", reviewHTML);
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
                            <p>작성일: ${date}</p>
                        </div>
                        <div class="review-text">
                            <p>${review}</p>
                        </div>
                        <div class="review-point">
                            <p>평점: ${rating}</p>
                            <div class="keyword">
                                <p>친절해요</p>
                                <p>청결해요</p>
                                <p>또 가고싶어요</p>
                            </div>
                        </div>
                    </div>`;

      tastyBox.insertAdjacentHTML("beforeend", reviewHTML);
      hiddenForm.classList.add("hiddenForm");
    }
  });
}
submitReview();
//   cafeBox.innerHTML = cafeReviewHtml;

//   event.preventDefault();

// const cafeBox = document.getElementById("cafe-box");
