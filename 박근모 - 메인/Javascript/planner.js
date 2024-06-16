const resturantTag = document.getElementById("resturantBoxes");
const cafeTag = document.getElementById("cafeBoxes");
const hotPlaceTag = document.getElementById("hotPlaceBoxes");
// const resturantArr = ["광천식당", "카라멜", "손이가", "테라스키친", "해마의방"];
const resturantArr = [];
const cafeArr = [];
const hotPlaceArr = [];

const rest1Tag = document.querySelector(`.rest1`);
const rest2Tag = document.querySelector(`.rest2`);
const rest3Tag = document.querySelector(`.rest3`);
const rest4Tag = document.querySelector(`.rest4`);
const rest5Tag = document.querySelector(`.rest5`);

function removeDuplicates(array) {
  return [...new Set(array)];
}

function pluslist(a) {
  a.addEventListener("click", () => {
    const newEntry = a.innerHTML;
    resturantArr.push(newEntry);
    const uniqueArr = removeDuplicates(resturantArr);

    // Clear existing content before adding new elements
    resturantTag.innerHTML = "";

    uniqueArr.forEach((e, index) => {
      resturantTag.insertAdjacentHTML(
        "beforeend",
        `<div class="resturantBox">
          <input
            type="checkbox"
            id="cafeStore${index}"
            class="cafeStore"
            checked
          />
          <label for="cafeStore${index}">${e}</label>
          <i class="bx bxs-x-square"></i>
        </div>`
      );
    });
  });
}
pluslist(rest1Tag);
pluslist(rest2Tag);
pluslist(rest3Tag);
pluslist(rest4Tag);

const cafe1Tag = document.querySelector(`.cafe1`);
const cafe2Tag = document.querySelector(`.cafe2`);
const cafe3Tag = document.querySelector(`.cafe3`);
const cafe4Tag = document.querySelector(`.cafe4`);
const cafe5Tag = document.querySelector(`.cafe5`);

function removeDuplicates(array) {
  return [...new Set(array)];
}

function pluslist(a) {
  a.addEventListener("click", () => {
    const newEntry = a.innerHTML;
    cafeArr.push(newEntry);
    const uniqueArr = removeDuplicates(cafeArr);

    // Clear existing content before adding new elements
    cafeTag.innerHTML = "";

    uniqueArr.forEach((e, index) => {
      cafeTag.insertAdjacentHTML(
        "beforeend",
        `<div class="cafeBox">
          <input
            type="checkbox"
            id="cafeStore${index}"
            class="cafeStore"
            checked
          />
          <label for="cafeStore${index}">${e}</label>
          <i class="bx bxs-x-square"></i>
        </div>`
      );
    });
  });
}
pluslist(cafe1Tag);
pluslist(cafe2Tag);
pluslist(cafe3Tag);
pluslist(cafe4Tag);
pluslist(cafe5Tag);

const place1Tag = document.querySelector(`.place1`);
const place2Tag = document.querySelector(`.place2`);
const place3Tag = document.querySelector(`.place3`);
const place4Tag = document.querySelector(`.place4`);
const place5Tag = document.querySelector(`.place5`);

function removeDuplicates(array) {
  return [...new Set(array)];
}

function pluslist(a) {
  a.addEventListener("click", () => {
    const newEntry = a.innerHTML;
    hotPlaceArr.push(newEntry);
    const uniqueArr = removeDuplicates(hotPlaceArr);

    // Clear existing content before adding new elements
    hotPlaceTag.innerHTML = "";

    uniqueArr.forEach((e, index) => {
      hotPlaceTag.insertAdjacentHTML(
        "beforeend",
        `<div class="hotPlaceBox">
          <input
            type="checkbox"
            id="placeStore${index}"
            class="placeStore"
            checked
          />
          <label for="placeStore${index}">${e}</label>
          <i class="bx bxs-x-square"></i>
        </div>`
      );
    });
  });
}
pluslist(place1Tag);
pluslist(place2Tag);
pluslist(place3Tag);
pluslist(place4Tag);
pluslist(place5Tag);
