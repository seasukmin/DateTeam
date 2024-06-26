const showFormButton = document.getElementById("showFormButton");
const hiddenForm = document.querySelector(".hiddenForm");

showFormButton.addEventListener("click", function () {
  hiddenForm.classList.remove("hiddenForm");
});

const hideBtn = document.querySelector(".hideReviewForm");

hideBtn.addEventListener("click", function () {
  hiddenForm.classList.add("hiddenForm");
});

function submitReview(event) {
  event.preventDefault();

  // 페이지에 추가
  const tastyBox = document.getElementById("tasty-box");
  const cafeBox = document.getElementById("cafe-box");
  const hotplaceBox = document.getElementById("hp-box");

  const category = document.getElementById("category").value;
  // 해당 value에 맞는 div에 추가하기

  // 각 데이터들 가져오기
  const location = document.getElementById("location").value;
  const date = document.getElementById("date").value;
  const photo = document.getElementById("photo").files[0];
  const rating = document.getElementById("rating").value;
  const review = document.getElementById("review").value;

  const cafeReviewHtml = `<div class="review-user">
                <i class="bx bxs-user-circle"></i>
                <p class="username">${userId}님의 후기</p>
              </div>
              <div class="review-visited">
                <h2>방문한 곳: ${location}</h2>
                <p>작성일: ${date}</p>
              </div>
              <div class="review-text">
                <${photo} />
                <p>${review}</p>
              </div>
              <div class="review-point">
                <p>평점: ${rating}</p>
                <div class="keyword">
                  <p>친절해요</p>
                  <p>청결해요</p>
                  <p>또 가고싶어요</p>
                </div>
              </div> `;

  cafeBox.innerHTML = cafeReviewHtml;
}
