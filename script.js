const display = document.getElementById("example");

function getTemp() {
  document.getElementById("locationDiv").style.display = "flex";
  let temp = document.getElementById("text").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${temp},us&APPID=293095189801018b310d01aa089b0944&units=metric`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      document.getElementById("tempid").innerText +=
        Math.round(response.main.temp) + "°C";
      document.getElementById("feelid").innerText +=
        Math.round(response.main.feels_like) + "°C";
      document.getElementById("locationid").innerText += response.name;
    });
}
