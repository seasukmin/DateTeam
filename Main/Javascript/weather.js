const now = new Date();
const createdAt = now.getTime();
const today = now.toISOString("kr").split("T")[0].replaceAll("-", "");
const beforeDay2 = now.toISOString("kr").split("T")[0].replaceAll("-", "") - 1;
const lat = 36.328799;
const lon = 127.4230707;

const apiKey = "7318e8d03f33842f882be1c11ec76a8b";
const getWeatherContent = async () => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const rowDate = json?.list;
      const weatherDate1 = rowDate[0];
      document.querySelector(".TempMin1").innerHTML = `${Math.round(
        weatherDate1.main.temp_min
      )}°`;
      document.querySelector(".TempMax1").innerHTML = `${Math.round(
        weatherDate1.main.temp_max
      )}°`;
      const weatherDate2 = rowDate[8];
      document.querySelector(".TempMin2").innerHTML = `${Math.round(
        weatherDate2.main.temp_min
      )}°`;
      document.querySelector(".TempMax2").innerHTML = `${Math.round(
        weatherDate2.main.temp_max
      )}°`;
      const weatherDate3 = rowDate[17];
      document.querySelector(".TempMin3").innerHTML = `${Math.round(
        weatherDate3.main.temp_min
      )}°`;
      document.querySelector(".TempMax3").innerHTML = `${Math.round(
        weatherDate3.main.temp_max
      )}°`;
      const weatherDate4 = rowDate[26];
      document.querySelector(".TempMin4").innerHTML = `${Math.round(
        weatherDate4.main.temp_min
      )}°`;
      document.querySelector(".TempMax4").innerHTML = `${Math.round(
        weatherDate4.main.temp_max
      )}°`;
      const weatherDate5 = rowDate[35];
      document.querySelector(".TempMin5").innerHTML = `${Math.round(
        weatherDate5.main.temp_min
      )}°`;
      document.querySelector(".TempMax5").innerHTML = `${Math.round(
        weatherDate5.main.temp_max
      )}°`;
      console.log(json.list);

      return json.list;
    });
};
getWeatherContent();
