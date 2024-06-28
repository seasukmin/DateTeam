const subPageLogo = document.querySelector(".header-logo");
subPageLogo.addEventListener("click", () => {
  window.location.href = "../HTML/mainPage.html";
});

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});
