import { getDatas } from "../javascript/DLU_firebase.js";

const searchAn = document.getElementById("searchBox");
const HPdata = await getDatas("hotPlace");
let infolist;
HPdata.forEach((doc) => {
  const info = doc.data();
  infolist = info.list;

  searchAn.insertAdjacentHTML(
    "beforeend",

    ` <div class="content">
        <img src=${infolist.img}/>
        <div title="planner에 추가하기" class="plusIc"><i class='bx bx-plus' ></i></div>
          <p class="hpName">${infolist.title}</p>
          <p class="hpTime">
            ${doc.data().text1}${doc.data().text2}
          </p>
          <p class="hpInfo">${doc.data().event}</p>
        </div> `
  );
});

function addplaceInfo() {
  addDatas("hotPlace", dataObj, userName);
  const searchInput = document.querySelector(".searchInput");
}

const searchArr = [{ text: "오월드" }, { text: "야간개장" }];

// const datas = await getDatas("hotplace");
// let infolist;
// datas.forEach((doc) => {
//   const info = doc.data();
//   infolist = info.list;
// });
// const searcheBtn = document.querySelector(".searchBtn");
// function addSearch(e) {
//   searchAn.innerHTML = "";
//   let elnum;
//   searchArr.forEach(function (el, idx) {
//     elnum = el;
//     if (el.text.includes(searchInput.value) && e.code == "Enter") {
//       console.log(infolist[idx]);

//       searchAn.insertAdjacentHTML(
//         "beforeend",

//         ` <div class="content" data-idx="${idx}">
//         <img src=${idx.img} class="sports-img" />
//         <div title="planner에 추가하기" class="plusIc4"><i class='bx bx-plus' ></i></div>
//           <p class="hpName">${infolist[idx].name}</p>
//           <p class="hpTime">
//             ${infolist[idx].time}${infolist[idx].time2}
//           </p>
//           <p class="hpInfo">${infolist[idx].event}</p>
//         </div> `
//       );
//     }
//   });
//   searchInput.value = "";
// }

// addSearch();
// searcheBtn.addEventListener("click", addSearch);
// searchInput.addEventListener("keypress", addSearch);
