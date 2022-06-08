let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let today = days[date.getDate()];
let hour = date.getHours();
let minutes = date.getMinutes();

let displayDateAndTime = document.querySelector("#date-time");
displayDateAndTime.innerHTML = `Today: ${today} ${hour}:${minutes}`;

function showWeather(response) {
  let displayResults = document.querySelector("#city");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  displayResults.innerHTML = `It is ${temperature} degrees celsius, ${description}, in ${response.data.name}`;
}

let button = document.querySelector("#location-btn");
button.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let key = "2de1414d2167da92d347476a4e1097e6";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    axios.get(url).then(showWeather);
  });
});
