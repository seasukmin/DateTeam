let nameChild;
let addrChild;
let idChild;

const resturantBoxes = document.querySelector(".resturantBoxes");
const cafeBoxes = document.querySelector(".cafeBoxes");
const hotPlaceBoxes = document.querySelector(".hotPlaceBoxes");
const resturantBoxes1 = document.querySelector(".resturantBoxes1");
const cafeBoxes1 = document.querySelector(".cafeBoxes1");
const hotPlaceBoxes1 = document.querySelector(".hotPlaceBoxes1");
const Mainbox = document.querySelectorAll(".Mainbox");

const plannertitle = document.getElementById("planner-title");
const plannertitle1 = document.getElementById("planner-title1");
const localId = localStorage.getItem("ID");
const localSemiId = localStorage.getItem("semiID");

if (localId !== null && localSemiId === null) {
  plannertitle.innerHTML = `${localId} planner`;
  plannertitle1.innerHTML = `${localId} planner`;
} else if (localSemiId !== null && localId === null) {
  plannertitle.innerHTML = `${localSemiId} planner`;
  plannertitle1.innerHTML = `${localSemiId} planner`;
}

function handleBoxClick(e, box) {
  if (e.target.tagName === "SPAN") {
    const span = e.target;
    const username = span.textContent;

    // span의 부모 요소를 찾아서 삭제
    if (span.parentElement) {
      span.parentElement.remove();
    }

    // localStorage에서 해당 데이터 삭제
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      if (value === username) {
        localStorage.removeItem(key);
        break; // 삭제 후 반복문 종료
      }
    }
  }
}

function addDataToBox(idText, nameText, addrText, box) {
  localStorage.setItem(`${idText}`, `${nameText},${addrText}`);
  let username = localStorage.getItem(`${idText}`);

  let exists = Array.from(box.querySelectorAll("span")).some(
    (span) => span.textContent === username
  );

  if (!exists) {
    box.insertAdjacentHTML("beforeend", `<div><span>${username}</span></div>`);
  }
}

function initializeBox(box, keyCondition) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (keyCondition(key)) {
      let exists = Array.from(box.querySelectorAll("span")).some(
        (span) => span.textContent === value
      );

      if (!exists) {
        box.insertAdjacentHTML("beforeend", `<div><span>${value}</span></div>`);
      }
    }
  }
}

Mainbox.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (localId === null && localSemiId === null) {
      alert("로그인이 필요합니다.");
      location.href = "../../박근모 - 메인/HTML/mainPage.html";
      return false;
    }

    const box = e.target.closest(".box");
    if (box) {
      nameChild = box.firstElementChild.nextElementSibling.nextElementSibling;
      addrChild = nameChild.nextElementSibling;
      idChild = box.lastElementChild;

      const nameText = nameChild.innerHTML;
      const addrText = addrChild.innerHTML.substring(18, 22);
      const IdText = idChild.innerHTML.substring(14, 22);

      if (IdText.includes("store")) {
        addDataToBox(IdText, nameText, addrText, resturantBoxes);
        addDataToBox(IdText, nameText, addrText, resturantBoxes1);
      } else if (IdText.includes("cafe")) {
        addDataToBox(IdText, nameText, addrText, cafeBoxes);
        addDataToBox(IdText, nameText, addrText, cafeBoxes1);
      } else if (IdText.includes("hotplace")) {
        addDataToBox(IdText, nameText, addrText, hotPlaceBoxes);
        addDataToBox(IdText, nameText, addrText, hotPlaceBoxes1);
      }
    }
  });

  initializeBox(resturantBoxes, (key) => key.includes("store"));
  initializeBox(cafeBoxes, (key) => key.includes("cafe"));
  initializeBox(hotPlaceBoxes, (key) => key.includes("hotplace"));
  initializeBox(resturantBoxes1, (key) => key.includes("store"));
  initializeBox(cafeBoxes1, (key) => key.includes("cafe"));
  initializeBox(hotPlaceBoxes1, (key) => key.includes("hotplace"));

  resturantBoxes.addEventListener("click", (e) =>
    handleBoxClick(e, resturantBoxes)
  );
  cafeBoxes.addEventListener("click", (e) => handleBoxClick(e, cafeBoxes));
  hotPlaceBoxes.addEventListener("click", (e) =>
    handleBoxClick(e, hotPlaceBoxes)
  );
  resturantBoxes1.addEventListener("click", (e) =>
    handleBoxClick(e, resturantBoxes1)
  );
  cafeBoxes1.addEventListener("click", (e) => handleBoxClick(e, cafeBoxes1));
  hotPlaceBoxes1.addEventListener("click", (e) =>
    handleBoxClick(e, hotPlaceBoxes1)
  );
});
