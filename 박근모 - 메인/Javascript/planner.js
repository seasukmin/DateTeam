const resturantTag = document.getElementById("resturantBoxes");
// const resturantArr = ["광천식당", "카라멜", "손이가", "테라스키친", "해마의방"];
const resturantArr = [];

const restTag = document.querySelector(`.rest2`);
const jmtTags = document.querySelectorAll(`.JMT`);
console.log(restTag.innerHTML);
console.log(jmtTags[0]);

// restTag.addEventListener("click", () => {
jmtTags.addEventListener("click", () => {
  console.log(e);

  //   resturantArr.push(restTag.innerHTML);
  //   restTag.innerHTML;
});

resturantArr.forEach((e) => {
  resturantTag.insertAdjacentHTML(
    "beforeend",
    `<div class="resturantBox">
          <input
            type="checkbox"
            id="foodStore1"
            class="foodStore"
            checked
          /><label for="foodStore1">${e}</label>
          <i class="bx bxs-x-square"></i>
        </div>`
  );
});
