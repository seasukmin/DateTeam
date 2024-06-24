// capture
const captureBtn = document.getElementById("captureBtn");
const captureArea = document.querySelector(".captureArea");
captureBtn.addEventListener("click", function () {
  html2canvas(document.querySelector(".captureArea")).then(function (canvas) {
    //   html2canvas(document.getElementById("captureArea")).then(function (canvas) {
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "capture.png";
    // link.download = "${}.png";

    link.click();
  });
});

// kakaoTalk

// Kakao.init("YOUR_JAVASCRIPT_KEY");
const kakaoTalkBtn = document.getElementById("KT-Share-Btn");
kakaoTalkBtn.addEventListener("click", function () {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Hello KakaoTalk",
      description: "This is a test message",
      imageUrl: "https://your-image-url.com/image.jpg",
      link: {
        mobileWebUrl: "https://your-website.com",
        webUrl: "https://your-website.com",
      },
    },
    social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
    },
    buttons: [
      {
        title: "Visit Website",
        link: {
          mobileWebUrl: "https://your-website.com",
          webUrl: "https://your-website.com",
        },
      },
    ],
  });
});
